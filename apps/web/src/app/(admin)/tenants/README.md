# `(admin)/tenants/` — Tenants Management

## Purpose
View and manage all agencies (tenants) on the platform. Super admin can view details, suspend, or delete any tenant.

## URL
`/admin/tenants`

## Future Files
- `_components/tenants-table.tsx` — Data table with sorting, filtering, pagination
- `_components/tenant-status-badge.tsx` — Active/suspended/pending badge
- `_hooks/use-admin-tenants.ts` — Admin-scoped tenant query hooks
- `[id]/page.tsx` → `/admin/tenants/:id` — Single tenant detail
- `loading.tsx` — Table skeleton
