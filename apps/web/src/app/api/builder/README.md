# `api/builder/` — Builder API Routes

## Purpose
Handles builder-specific operations: saving page edits and publishing pages.

## Routes
| Folder | URL | Description |
|---|---|---|
| `save/` | `/api/builder/save` | Save page structure JSON |
| `publish/` | `/api/builder/publish` | Publish a page (make it live) |

## Future Routes
- `preview/route.ts` — Generate page preview URL
- `export/route.ts` — Export page as HTML
- `import/route.ts` — Import page from template or HTML
