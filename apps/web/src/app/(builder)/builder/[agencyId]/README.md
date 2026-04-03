# `(builder)/builder/[agencyId]/` — Agency Pages List

## Purpose
Lists all pages belonging to an agency, with options to create, edit, duplicate, or delete pages.

## URL
`/builder/:agencyId`

## Why `builder/` in the folder path?
Next.js does not allow two different dynamic segment names at the same URL depth (e.g. `[agencyId]` vs `[tenant]`). The real `/builder/` prefix keeps tenant sites at `/:tenant` and the editor at `/builder/:agencyId`.

## Future Files
- `_components/page-list.tsx` — Sortable page list with drag reorder
- `_components/page-card.tsx` — Page preview thumbnail, status, and actions
- `_components/create-page-dialog.tsx` — New page creation dialog (title, slug, template)
- `_hooks/use-pages.ts` — TanStack Query hooks for pages CRUD
- `loading.tsx` — Skeleton grid
