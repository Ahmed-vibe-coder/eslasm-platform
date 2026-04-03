# `(admin)/users/` — Platform Users Management

## Purpose
View every user across all tenants. Super admin can change roles, ban users, or view activity logs.

## URL
`/admin/users`

## Future Files
- `_components/users-table.tsx` — Data table with role filter and search
- `_components/user-role-badge.tsx` — Role badge (super_admin, agency_owner, trainer, student)
- `_hooks/use-admin-users.ts` — Admin user query hooks
- `[id]/page.tsx` → `/admin/users/:id` — User detail with activity log
- `loading.tsx` — Table skeleton
