# `(admin)/` — Super Admin Panel

## Purpose
Platform-wide administration panel for the EduForge Super Admin. Manages all tenants, users, templates, pricing plans, and monitors platform analytics.

## Role
Only accessible by users with `super_admin` role. Route group `(admin)` is invisible in the URL — pages live under the real folder `admin/` so URLs are `/admin/...`.

## URL Mapping
| Folder | URL | Page |
|---|---|---|
| `admin/page.tsx` | `/admin` | Platform overview with key stats |
| `admin/tenants/` | `/admin/tenants` | All agencies table with status and plans |
| `admin/templates/` | `/admin/templates` | Template management (upload, edit, delete) |
| `admin/plans/` | `/admin/plans` | Pricing plan CRUD |
| `admin/users/` | `/admin/users` | All users across all tenants |
| `admin/analytics/` | `/admin/analytics` | Platform-wide metrics and charts |

## Why `admin/` inside `(admin)/`?
Without the inner `admin/` segment, `(admin)/page.tsx` would resolve to `/` and collide with marketing and dashboard route groups. The inner folder provides the `/admin` URL prefix.

## Future Pages
- `admin/tenants/[id]/page.tsx` — Tenant detail (impersonate, suspend, stats)
- `admin/users/[id]/page.tsx` — User detail (role change, ban, activity log)
- `admin/revenue/page.tsx` — Revenue breakdown, MRR, ARR charts
