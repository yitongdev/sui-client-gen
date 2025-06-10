# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

sui-client-gen is a tool for generating TypeScript SDKs for Sui Move smart contracts. It generates type-safe bindings without requiring IDLs or ABIs, supporting both source code and on-chain packages.

## Common Commands

### Building the project
```bash
# Build the Rust generator
cargo build

# Build a release version
cargo build --release

# Run tests
cargo test

# Install the generator locally
cargo install --path generator
```

### TypeScript commands (in the ts/ directory)
```bash
# Install dependencies
pnpm install

# Type check
pnpm check

# Lint and fix
pnpm lint:fix

# Run tests
pnpm test

# Build example
pnpm build:example
```

### Running the generator
```bash
# Run from inside a directory with gen.toml
sui-client-gen

# Run with clean flag to remove old generated files
sui-client-gen --clean

# Specify custom paths
sui-client-gen --manifest-path path/to/gen.toml --out path/to/output
```

## Architecture

The project consists of two main parts:

### 1. Rust Generator (`/generator`)
- **main.rs**: CLI entry point that orchestrates the generation process
- **manifest.rs**: Parses `gen.toml` configuration files
- **model_builder.rs**: Builds Move models from source/on-chain packages
- **gen.rs**: Core TypeScript code generation logic
- **framework_sources.rs**: Static TypeScript framework files
- **package_cache.rs**: Caches on-chain packages to reduce RPC calls

The generation flow: Parse manifest → Build models → Generate TypeScript → Write files

### 2. TypeScript SDK (`/ts`)
Generated code structure:
- `_framework/`: Runtime support files (loader, reified types, utilities)
- `_dependencies/`: Generated code for transitive dependencies
- Package directories: Each with `index.ts`, `init.ts`, and module subdirectories
- Module subdirectories: Contains `functions.ts` and `structs.ts`

Key concepts:
- **Reified types**: Runtime type information for generic structs
- **Type-safe bindings**: Move types are mapped to TypeScript types
- **Transaction composition**: Functions return transaction arguments for composability

## Key Files and Patterns

### gen.toml Configuration
Specifies packages to generate code for:
- Source packages: Local directories or git repositories
- On-chain packages: By package ID

### Generated TypeScript Patterns
- Functions accept both direct values and TransactionArguments
- Structs have multiple construction methods (fromFields, fromBcs, fetch)
- Generic types use reification for runtime type safety
- Special handling for common types (String, Option, Vector, ID)

## Dependencies

The project uses specific versions of Sui dependencies (currently mainnet-v1.46.3). When updating Sui dependencies, update all references in `generator/Cargo.toml` to maintain consistency.