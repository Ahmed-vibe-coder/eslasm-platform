# `(builder)/builder/[agencyId]/editor/[pageId]/` — Page Editor

## Purpose
The actual GrapesJS visual editor. This is a `'use client'` page that dynamically imports GrapesJS and initializes it.

## URL
`/builder/:agencyId/editor/:pageId`

## Dynamic Params
- `agencyId` — The agency that owns the page
- `pageId` — The page being edited (or `new` for a new page)

## Current Files
- `page.tsx` — Client component with GrapesJS initialization, save/publish buttons

## Future Files
- `_components/editor-toolbar.tsx` — Toolbar: device preview (desktop/tablet/mobile), undo, redo, zoom
- `_components/editor-sidebar.tsx` — Left sidebar: blocks panel, layers panel, styles panel
- `_components/editor-canvas.tsx` — GrapesJS canvas wrapper with loading state
- `_components/publish-dialog.tsx` — Publish confirmation with URL preview
- `_hooks/use-editor.ts` — GrapesJS lifecycle management, event listeners
- `_hooks/use-auto-save.ts` — Debounced auto-save (5 seconds after last change)
- `_hooks/use-editor-history.ts` — Undo/redo state tracking
