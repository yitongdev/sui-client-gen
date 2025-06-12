use std::collections::{BTreeMap, BTreeSet};
use std::path::{Path, PathBuf};

use anyhow::Result;
use clap::*;
use colored::*;
use genco::fmt;
use genco::prelude::*;
use move_core_types::account_address::AccountAddress;
use move_model_2::{compiled_model, model, source_model};
use move_package::source_package::parsed_manifest::PackageName;
use move_symbol_pool::Symbol;
use std::io::Write;
use sui_client_gen::formatter::format_typescript;
use sui_client_gen::framework_sources;
use sui_client_gen::gen::{
    gen_init_loader_ts, gen_package_init_ts, module_import_name, package_import_name,
};
use sui_client_gen::gen::{FrameworkImportCtx, FunctionsGen, StructClassImportCtx, StructsGen};
use sui_client_gen::manifest::{parse_gen_manifest_from_file, GenManifest, Package};
use sui_client_gen::model_builder::{
    build_models, OnChainModelResult, SourceModelResult, TypeOriginTable, VersionTable,
};
use sui_client_gen::package_cache::PackageCache;
use sui_move_build::SuiPackageHooks;
use sui_sdk::SuiClientBuilder;

const DEFAULT_RPC: &str = "https://fullnode.mainnet.sui.io:443";

#[derive(Parser)]
#[clap(
    name = "sui-client-gen",
    version,
    about = "Generate TS SDKs for Sui Move smart contracts."
)]
struct Args {
    #[arg(
        short,
        long,
        help = "Path to the `gen.toml` file.",
        default_value = "./gen.toml"
    )]
    manifest: String,

    #[arg(
        short,
        long,
        help = "Path to the output directory. If omitted, the current directory will be used.",
        default_value = "."
    )]
    out: String,

    #[arg(
        long,
        help = "Remove all contents of the output directory before generating, except for gen.toml. Use with caution."
    )]
    clean: bool,
}

#[tokio::main]
async fn main() -> Result<()> {
    let args = Args::parse();

    move_package::package_hooks::register_package_hooks(Box::new(SuiPackageHooks));

    let manifest = parse_gen_manifest_from_file(Path::new(&args.manifest))?;
    let rpc_url = match &manifest.config {
        Some(config) => config
            .rpc
            .clone()
            .unwrap_or_else(|| DEFAULT_RPC.to_string()),
        None => DEFAULT_RPC.to_string(),
    };
    let rpc_client = SuiClientBuilder::default().build(rpc_url).await?;

    let mut progress_output = std::io::stderr();

    // build models
    let mut cache = PackageCache::new(rpc_client.read_api());
    let (source_model, on_chain_model) = build_models(
        &mut cache,
        &manifest.packages,
        &PathBuf::from(&args.manifest),
        &mut progress_output,
    )
    .await?;

    if source_model.is_none() && on_chain_model.is_none() {
        writeln!(std::io::stderr(), "No packages to generate.")?;
        return Ok(());
    }

    // clean output
    if args.clean {
        clean_output(&PathBuf::from(&args.out))?;
    }

    // separate modules by package
    let source_pkgs: BTreeMap<AccountAddress, source_model::Package> = source_model
        .as_ref()
        .map(|m| m.env.packages().map(|pkg| (pkg.address(), pkg)).collect())
        .unwrap_or_default();

    let on_chain_pkgs: BTreeMap<AccountAddress, compiled_model::Package> = on_chain_model
        .as_ref()
        .map(|m| m.env.packages().map(|pkg| (pkg.address(), pkg)).collect())
        .unwrap_or_default();

    // gen top-level packages and dependencies
    let (source_top_level_addr_map, on_chain_top_level_addr_map) =
        resolve_top_level_pkg_addr_map(&source_model, &on_chain_model, &manifest);

    // gen _framework
    writeln!(progress_output, "{}", "GENERATING FRAMEWORK".green().bold())?;

    let out_root = PathBuf::from(args.out);
    std::fs::create_dir_all(&out_root)?;

    std::fs::create_dir_all(out_root.join("_framework"))?;
    write_str_to_file(
        framework_sources::LOADER,
        out_root.join("_framework").join("loader.ts").as_ref(),
    )?;
    write_str_to_file(
        framework_sources::UTIL,
        out_root.join("_framework").join("util.ts").as_ref(),
    )?;
    write_str_to_file(
        framework_sources::REIFIED,
        out_root.join("_framework").join("reified.ts").as_ref(),
    )?;
    write_str_to_file(
        framework_sources::VECTOR,
        out_root.join("_framework").join("vector.ts").as_ref(),
    )?;
    write_tokens_to_file(
        &gen_init_loader_ts(
            match source_pkgs.is_empty() {
                false => Some((
                    source_pkgs.keys().copied().collect::<Vec<_>>(),
                    &source_top_level_addr_map,
                )),
                true => None,
            },
            match on_chain_pkgs.is_empty() {
                false => Some((
                    on_chain_pkgs.keys().copied().collect::<Vec<_>>(),
                    &on_chain_top_level_addr_map,
                )),
                true => None,
            },
        ),
        out_root.join("_framework").join("init-loader.ts").as_ref(),
    )?;

    if let Some(m) = &source_model {
        writeln!(
            progress_output,
            "{}",
            "GENERATING SOURCE PACKAGES".green().bold()
        )?;
        gen_packages_for_model(
            source_pkgs,
            &source_top_level_addr_map,
            &m.published_at,
            &m.type_origin_table,
            &m.version_table,
            true,
            &out_root,
        )?;
    }
    if let Some(m) = &on_chain_model {
        writeln!(
            progress_output,
            "{}",
            "GENERATING ON-CHAIN PACKAGES".green().bold()
        )?;
        gen_packages_for_model(
            on_chain_pkgs,
            &on_chain_top_level_addr_map,
            &m.published_at,
            &m.type_origin_table,
            &m.version_table,
            false,
            &out_root,
        )?;
    }

    // gen root index.ts
    gen_root_index(
        &source_top_level_addr_map,
        &on_chain_top_level_addr_map,
        &out_root,
    )?;

    // gen .eslintrc.json
    write_str_to_file(
        framework_sources::ESLINTRC,
        &out_root.join(".eslintrc.json"),
    )?;

    Ok(())
}

fn clean_output(out_root: &Path) -> Result<()> {
    let mut paths_to_remove = vec![];
    for entry in std::fs::read_dir(out_root)? {
        let entry = entry?;
        let path = entry.path();
        if path.is_file() && path.file_name().unwrap() == "gen.toml" {
            continue;
        }
        paths_to_remove.push(path);
    }

    for path in paths_to_remove {
        if path.is_dir() {
            std::fs::remove_dir_all(path)?;
        } else {
            std::fs::remove_file(path)?;
        }
    }

    Ok(())
}

fn write_tokens_to_file(tokens: &Tokens<JavaScript>, path: &Path) -> Result<()> {
    if tokens.is_empty() {
        return Ok(());
    }

    // First, generate the code using genco
    let mut buffer = String::new();
    let mut w = fmt::FmtWriter::new(&mut buffer);
    let fmt = fmt::Config::from_lang::<JavaScript>();
    let config = js::Config::default();
    tokens.format_file(&mut w.as_formatter(&fmt), &config)?;
    
    // Then format it with biome
    let formatted = format_typescript(&buffer)?;
    
    // Write the formatted code to file
    std::fs::write(path, formatted)?;
    Ok(())
}

fn write_str_to_file(s: &str, path: &Path) -> Result<()> {
    if s.is_empty() {
        return Ok(());
    }

    // Format TypeScript files with biome, leave other files as-is
    let content = if path.extension().and_then(|s| s.to_str()) == Some("ts") {
        format_typescript(s)?
    } else {
        s.to_string()
    };

    std::fs::write(path, content)?;
    Ok(())
}

/// Creates a mapping between address and package name for top-level packages.
fn resolve_top_level_pkg_addr_map(
    source_model: &Option<SourceModelResult>,
    on_chain_model: &Option<OnChainModelResult>,
    manifest: &GenManifest,
) -> (
    BTreeMap<AccountAddress, Symbol>,
    BTreeMap<AccountAddress, Symbol>,
) {
    let mut source_top_level_package_names: BTreeSet<PackageName> = BTreeSet::new();
    let mut on_chain_top_level_package_names: BTreeSet<PackageName> = BTreeSet::new();
    for (name, pkg) in manifest.packages.iter() {
        match pkg {
            Package::Dependency(_) => {
                source_top_level_package_names.insert(*name);
            }
            Package::OnChain(_) => {
                on_chain_top_level_package_names.insert(*name);
            }
        }
    }

    let source_top_level_id_map: BTreeMap<AccountAddress, Symbol> = if let Some(m) = source_model {
        m.id_map
            .iter()
            .filter_map(|(id, name)| {
                if source_top_level_package_names.contains(name) {
                    Some((*id, *name))
                } else {
                    None
                }
            })
            .collect()
    } else {
        BTreeMap::new()
    };

    let on_chain_top_level_id_map: BTreeMap<AccountAddress, Symbol> =
        if let Some(m) = on_chain_model {
            m.id_map
                .iter()
                .filter_map(|(id, name)| {
                    if on_chain_top_level_package_names.contains(name) {
                        Some((*id, *name))
                    } else {
                        None
                    }
                })
                .collect()
        } else {
            BTreeMap::new()
        };

    (source_top_level_id_map, on_chain_top_level_id_map)
}

/// Returns module name for use as a JavaScript export identifier (handles reserved words).
fn module_export_name(module: Symbol) -> String {
    // List of JS reserved words that can't be used as identifiers
    const JS_RESERVED_WORDS: [&str; 64] = [
        "abstract",
        "arguments",
        "await",
        "boolean",
        "break",
        "byte",
        "case",
        "catch",
        "char",
        "class",
        "const",
        "continue",
        "debugger",
        "default",
        "delete",
        "do",
        "double",
        "else",
        "enum",
        "eval",
        "export",
        "extends",
        "false",
        "final",
        "finally",
        "float",
        "for",
        "function",
        "goto",
        "if",
        "implements",
        "import",
        "in",
        "instanceof",
        "int",
        "interface",
        "let",
        "long",
        "native",
        "new",
        "null",
        "package",
        "private",
        "protected",
        "public",
        "return",
        "short",
        "static",
        "super",
        "switch",
        "synchronized",
        "this",
        "throw",
        "throws",
        "transient",
        "true",
        "try",
        "typeof",
        "var",
        "void",
        "volatile",
        "while",
        "with",
        "yield",
    ];

    let name = module.to_string();

    // If the name is a reserved word, append "_module"
    if JS_RESERVED_WORDS.contains(&name.as_str()) {
        format!("{}_module", name)
    } else {
        name
    }
}

fn gen_packages_for_model<const HAS_SOURCE: usize>(
    pkgs: BTreeMap<AccountAddress, model::Package<HAS_SOURCE>>,
    top_level_pkg_names: &BTreeMap<AccountAddress, Symbol>,
    published_at_map: &BTreeMap<AccountAddress, AccountAddress>,
    type_origin_table: &TypeOriginTable,
    version_table: &VersionTable,
    is_source: bool,
    out_root: &Path,
) -> Result<()> {
    if pkgs.is_empty() {
        return Ok(());
    }

    for (pkg_id, pkg) in pkgs.iter() {
        let is_top_level = top_level_pkg_names.contains_key(pkg_id);
        let levels_from_root = if is_top_level { 0 } else { 2 };

        let package_path = out_root.join(match top_level_pkg_names.get(pkg_id) {
            Some(pkg_name) => PathBuf::from(package_import_name(*pkg_name)),
            None => PathBuf::from("_dependencies")
                .join(match is_source {
                    true => "source",
                    false => "onchain",
                })
                .join(pkg_id.to_hex_literal()),
        });

        std::fs::create_dir_all(&package_path)?;

        // generate constants.ts
        let published_at = published_at_map.get(pkg_id).unwrap_or(pkg_id);
        let versions = version_table.get(pkg_id).unwrap();
        let constants_tokens: js::Tokens = quote!(
            export const PACKAGE_ID = $[str]($[const](pkg_id.to_hex_literal()));
            export const PUBLISHED_AT = $[str]($[const](published_at.to_hex_literal()));
            $(for (published_at, version) in versions {
                export const PKG_V$(version.value()) = $[str]($[const](published_at.to_hex_literal()));
            })
        );
        write_tokens_to_file(&constants_tokens, &package_path.join("constants.ts"))?;

        // Track which modules have content
        let mut modules_with_content = Vec::new();

        // Check each module to see if it has content
        for module in pkg.modules() {
            let has_functions = is_top_level && module.functions().count() > 0;
            let has_structs = module.structs().count() > 0;

            if has_functions || has_structs {
                modules_with_content.push(module);
            }
        }

        // generate index.ts
        let mut index_tokens = js::Tokens::new();

        // Export only modules that have content
        for module in &modules_with_content {
            let module_name = module_import_name(module.name());
            let module_export_name = module_export_name(module.name());
            if module_export_name.contains('-') {
                quote_in!(index_tokens => export * as $[str]($[const](module_export_name)) from $[str]($[const](format!("./{}/index.js", module_name)));$['\n']);
            } else {
                quote_in!(index_tokens => export * as $(&module_export_name) from $[str]($[const](format!("./{}/index.js", module_name)));$['\n']);
            }
        }

        // Export constants
        quote_in!(index_tokens => $['\n']export * from "./constants.js";$['\n']);

        write_tokens_to_file(&index_tokens, &package_path.join("index.ts"))?;

        // generate init.ts
        let tokens = gen_package_init_ts(pkg, &FrameworkImportCtx::new(levels_from_root + 1));
        write_tokens_to_file(&tokens, &package_path.join("init.ts"))?;

        // generate modules
        for module in pkg.modules() {
            // Check if module has any content
            let has_functions = is_top_level && module.functions().count() > 0;
            let has_structs = module.structs().count() > 0;

            // Only create module directory if it has content
            if !has_functions && !has_structs {
                continue;
            }

            let module_path = package_path.join(module_import_name(module.name()));
            std::fs::create_dir_all(&module_path)?;

            // generate individual function files
            if is_top_level {
                let functions_path = module_path.join("functions");
                if module.functions().count() > 0 {
                    std::fs::create_dir_all(&functions_path)?;
                }

                let mut function_names = Vec::new();
                for func in module.functions() {
                    let mut tokens = js::Tokens::new();
                    let import_ctx = &mut StructClassImportCtx::for_individual_func_file(
                        &module,
                        top_level_pkg_names,
                    );

                    let func_gen_res = FunctionsGen::new(
                        import_ctx,
                        FrameworkImportCtx::new(levels_from_root + 3), // One level deeper now
                        func,
                    );
                    let mut func_gen = match func_gen_res {
                        Ok(func_gen) => func_gen,
                        Err(_) => {
                            continue;
                        }
                    };

                    func_gen.gen_fun_args_if(&mut tokens)?;
                    func_gen.gen_fun_binding(&mut tokens)?;

                    let func_name = func.name().to_string();
                    function_names.push(func_name.clone());
                    write_tokens_to_file(
                        &tokens,
                        &functions_path.join(format!("{}.ts", func_name)),
                    )?;
                }

                // generate <module>/functions.ts that re-exports all function files
                if !function_names.is_empty() {
                    let mut tokens = js::Tokens::new();
                    for func_name in &function_names {
                        quote_in!(tokens => export * from $[str]($[const](format!("./{}.js", func_name)));$['\n']);
                    }
                    write_tokens_to_file(&tokens, &functions_path.join("index.ts"))?;
                }
            }

            // generate individual struct files
            let structs_path = module_path.join("structs");
            if module.structs().count() > 0 {
                std::fs::create_dir_all(&structs_path)?;
            }

            let mut struct_names = Vec::new();
            for strct in module.structs() {
                let mut tokens = js::Tokens::new();
                let import_ctx = &mut StructClassImportCtx::for_individual_struct_file(
                    &module,
                    top_level_pkg_names,
                );

                let mut structs_gen = StructsGen::new(
                    import_ctx,
                    FrameworkImportCtx::new(levels_from_root + 3), // One level deeper now
                    type_origin_table,
                    version_table,
                    strct,
                );

                // type check function
                structs_gen.gen_is_type_func(&mut tokens);

                // fields interface
                structs_gen.gen_fields_if(&mut tokens);

                // struct class
                structs_gen.gen_struct_class(&mut tokens);

                let struct_name = strct.name().to_string();
                struct_names.push(struct_name.clone());
                write_tokens_to_file(&tokens, &structs_path.join(format!("{}.ts", struct_name)))?;
            }

            // generate <module>/structs.ts that re-exports all struct files
            if !struct_names.is_empty() {
                let mut tokens = js::Tokens::new();
                for struct_name in &struct_names {
                    quote_in!(tokens => export * from $[str]($[const](format!("./{}.js", struct_name)));$['\n']);
                }
                write_tokens_to_file(&tokens, &structs_path.join("index.ts"))?;
            }

            // generate <module>/index.ts
            let mut index_tokens = js::Tokens::new();

            // Check if there are any functions (only for top-level packages)
            let has_functions = is_top_level && module.functions().count() > 0;

            // Check if there are any structs
            let has_structs = module.structs().count() > 0;

            // Only generate files and index if there's actual content
            if has_functions || has_structs {
                if has_functions {
                    quote_in!(index_tokens => export * from "./functions/index.js";$['\n']);
                }

                if has_structs {
                    quote_in!(index_tokens => export * from "./structs/index.js";$['\n']);
                }
            }

            // Always write the index file, even if empty
            // This ensures that package index.ts can import all modules
            if index_tokens.is_empty() {
                // Create an empty file if there are no exports
                std::fs::File::create(&module_path.join("index.ts"))?;
            } else {
                write_tokens_to_file(&index_tokens, &module_path.join("index.ts"))?;
            }
        }
    }

    Ok(())
}

fn gen_root_index(
    source_top_level_addr_map: &BTreeMap<AccountAddress, Symbol>,
    on_chain_top_level_addr_map: &BTreeMap<AccountAddress, Symbol>,
    out_root: &Path,
) -> Result<()> {
    let mut index_tokens = js::Tokens::new();

    // Combine both maps to get all top-level packages
    let mut all_packages: BTreeMap<AccountAddress, Symbol> = BTreeMap::new();
    all_packages.extend(source_top_level_addr_map);
    all_packages.extend(on_chain_top_level_addr_map);

    // Sort packages by name for consistent output
    let mut packages: Vec<(AccountAddress, Symbol)> = all_packages.into_iter().collect();
    packages.sort_by_key(|(_, name)| *name);

    // Export each package
    for (_addr, pkg_name) in &packages {
        let import_name = package_import_name(*pkg_name);
        if import_name.contains('-') {
            quote_in!(index_tokens => export * as $[str]($[const](import_name.clone())) from $[str]($[const](format!("./{}/index.js", import_name)));$['\n']);
        } else {
            quote_in!(index_tokens => export * as $(&import_name) from $[str]($[const](format!("./{}/index.js", import_name)));$['\n']);
        }
    }

    // Add empty line before constants
    quote_in!(index_tokens => $['\n']);

    // Export top-level constants
    for (_addr, pkg_name) in &packages {
        let import_name = package_import_name(*pkg_name);
        let const_name = format!("{}_PACKAGE_ID", pkg_name.to_string().to_uppercase());
        quote_in!(index_tokens => export { PACKAGE_ID as $(&const_name) } from $[str]($[const](format!("./{}/constants.js", import_name)));$['\n']);
    }

    write_tokens_to_file(&index_tokens, &out_root.join("index.ts"))?;

    Ok(())
}
