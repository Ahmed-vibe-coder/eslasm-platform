# `(builder)/[agencyId]/` — Agency Pages List

## Purpose
Lists all pages belonging to an agency, with options to create, edit, duplicate, or delete pages.

## URL
`/builder/:agencyId`

## Dynamic Param
- `agencyId` — The agency whose pages to manage

## Future Files
- `_components/page-list.tsx` — Sortable page list with drag reorder
- `_components/page-card.tsx` — Page preview thumbnail, status, and actions
- `_components/create-page-dialog.tsx` — New page creation dialog (title, slug, template)
- `_hooks/use-pages.ts` — TanStack Query hooks for pages CRUD
- `loading.tsx` — Skeleton grid
