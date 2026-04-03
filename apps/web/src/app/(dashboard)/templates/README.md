# `(dashboard)/templates/` — Template Browser

## Purpose
Browse and preview website templates that can be applied to agency pages via the builder.

## URL
`/templates`

## Future Files
- `_components/template-card.tsx` — Template preview card with thumbnail
- `_components/template-preview-modal.tsx` — Full-screen template preview
- `_hooks/use-templates.ts` — TanStack Query hooks for template listing
- `[id]/page.tsx` → `/templates/:id` — Template detail and preview
- `loading.tsx` — Skeleton grid while loading templates
