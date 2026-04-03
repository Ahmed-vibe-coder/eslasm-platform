# `messages/` — Translation Files

## Purpose
JSON files containing all user-facing strings in each supported language. One file per locale.

## Current Files
| File | Language | Direction |
|---|---|---|
| `en.json` | English | LTR |
| `ar.json` | Arabic | RTL |

## Structure
Messages are organized by namespace matching the app structure:
```json
{
  "common": { ... },      // Shared strings (buttons, labels)
  "nav": { ... },          // Navigation items
  "footer": { ... },       // Footer content
  "errors": { ... },       // Error messages
  "marketing": { ... },    // Marketing pages
  "auth": { ... },         // Auth pages
  "dashboard": { ... },    // Dashboard pages
  "admin": { ... },        // Admin pages
  "builder": { ... },      // Builder pages
  "tenant": { ... }        // Tenant pages
}
```

## Conventions
- Use ICU message format for interpolation: `"greeting": "Hello, {name}"`
- Keep keys in camelCase
- Nest keys by feature/section
- When adding a new key, add it to ALL locale files
- Use `{year}`, `{name}`, `{id}`, etc. for dynamic values

## Future Languages
- `fr.json` — French
- `es.json` — Spanish
- `de.json` — German
- `tr.json` — Turkish
- `ur.json` — Urdu (RTL)
- `he.json` — Hebrew (RTL)
- `zh.json` — Chinese (Simplified)
- `ja.json` — Japanese
- `ko.json` — Korean
- `pt.json` — Portuguese
- `ru.json` — Russian
- `hi.json` — Hindi
