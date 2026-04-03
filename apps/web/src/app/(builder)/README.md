# `(builder)/` — Drag & Drop Page Builder

## Purpose
Fullscreen GrapesJS editor where agency owners visually design their website pages. No navigation, no sidebar — the entire screen is the editor.

## Role
The core differentiator of EduForge. Lets non-technical users build professional landing pages using drag-and-drop blocks.

## URL Mapping
The segment `builder/` is a real URL prefix (not a route group). It avoids colliding with the root `[tenant]` dynamic route.

| Folder | URL | Page |
|---|---|---|
| `builder/[agencyId]/` | `/builder/:agencyId` | Pages list for an agency |
| `builder/[agencyId]/editor/[pageId]/` | `/builder/:agencyId/editor/:pageId` | GrapesJS editor |

## Flow
1. User selects an agency → sees list of pages
2. User selects a page (or creates new) → editor loads
3. GrapesJS initializes with blocks from `@eduforge/builder-core`
4. User drags blocks, edits content, styles elements
5. Save → JSON exported and sent to API
6. Publish → page rendered on tenant subdomain

## Future Files
- `builder/[agencyId]/_components/page-list.tsx` — Sortable list of agency pages
- `builder/[agencyId]/_components/page-card.tsx` — Page preview card
- `builder/[agencyId]/editor/[pageId]/_components/editor-toolbar.tsx` — Top toolbar (device preview, undo, redo)
- `builder/[agencyId]/editor/[pageId]/_components/editor-sidebar.tsx` — Block panels and style manager
- `builder/[agencyId]/editor/[pageId]/_components/editor-canvas.tsx` — GrapesJS canvas wrapper
- `builder/[agencyId]/editor/[pageId]/_hooks/use-editor.ts` — Editor initialization and event handling
- `builder/[agencyId]/editor/[pageId]/_hooks/use-auto-save.ts` — Auto-save with debounce
