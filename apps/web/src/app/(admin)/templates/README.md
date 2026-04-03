# `(admin)/templates/` — Template Management

## Purpose
Super admin uploads and manages website templates that agency owners can apply to their pages through the builder.

## URL
`/admin/templates`

## Future Files
- `_components/template-upload-form.tsx` — Template upload with preview generation
- `_components/template-editor.tsx` — Edit template metadata (name, description, category)
- `_components/template-grid.tsx` — Template grid with preview thumbnails
- `_hooks/use-admin-templates.ts` — Template CRUD hooks
- `[id]/page.tsx` → `/admin/templates/:id` — Edit single template
- `new/page.tsx` → `/admin/templates/new` — Create new template
