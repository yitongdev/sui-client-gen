use anyhow::Result;
use biome_formatter::{IndentStyle, IndentWidth, LineWidth};
use biome_js_formatter::{context::JsFormatOptions, format_node};
use biome_js_parser::{parse, JsParserOptions};
use biome_js_syntax::JsFileSource;

/// Format TypeScript code using Biome formatter
pub fn format_typescript(code: &str) -> Result<String> {
    // Parse the TypeScript code
    let parse_result = parse(
        code,
        JsFileSource::ts(),
        JsParserOptions::default(),
    );

    // Check for parse errors
    if parse_result.has_errors() {
        // If there are parse errors, return the original code
        // This prevents the generator from failing on invalid syntax
        return Ok(code.to_string());
    }

    let root = parse_result.syntax();

    // Configure formatter options
    let options = JsFormatOptions::new(JsFileSource::ts())
        .with_indent_style(IndentStyle::Space)
        .with_indent_width(IndentWidth::default())
        .with_line_width(LineWidth::try_from(100u16).unwrap());

    // Format the code
    match format_node(options, &root) {
        Ok(formatted) => {
            let formatted_code = formatted.print()?.into_code();
            Ok(formatted_code)
        }
        Err(_) => {
            // If formatting fails, return the original code
            Ok(code.to_string())
        }
    }
}