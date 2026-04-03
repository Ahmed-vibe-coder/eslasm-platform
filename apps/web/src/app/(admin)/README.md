# `(admin)/` — Super Admin Panel

## Purpose
Platform-wide administration panel for the EduForge Super Admin. Manages all tenants, users, templates, pricing plans, and monitors platform analytics.

## Role
Only accessible by users with `super_admin` role. Has its own sidebar layout separate from the agency owner dashboard. Controls the entire SaaS platform.

## URL Mapping
| Folder | URL | Page |
|---|---|---|
| `page.tsx` | `/admin` | Platform overview with key stats |
| `tenants/` | `/admin/tenants` | All agencies table with status and plans |
| `templates/` | `/admin/templates` | Template management (upload, edit, delete) |
| `plans/` | `/admin/plans` | Pricing plan CRUD |
| `users/` | `/admin/users` | All users across all tenants |
| `analytics/` | `/admin/analytics` | Platform-wide metrics and charts |

## Future Pages
- `tenants/[id]/page.tsx` → `/admin/tenants/:id` — Tenant detail (impersonate, suspend, stats)
- `users/[id]/page.tsx` → `/admin/users/:id` — User detail (role change, ban, activity log)
- `revenue/page.tsx` → `/admin/revenue` — Revenue breakdown, MRR, ARR charts
- `support/page.tsx` → `/admin/support` — Support tickets and escalations
- `logs/page.tsx` → `/admin/logs` — Audit log and system events
- `config/page.tsx` → `/admin/config` — Platform configuration (SMTP, storage, limits)
