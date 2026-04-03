# `(dashboard)/` — Agency Owner Dashboard

## Purpose
The main workspace for agency owners. This is where they manage their learning platforms (agencies), view analytics, manage billing, and access the builder.

## Role
Protected area requiring authentication. Uses a sidebar + header layout. Route group `(dashboard)` does **not** appear in the URL — pages live under the real folder `dashboard/` so URLs are `/dashboard/...` (not `/`).

## URL Mapping
| Folder | URL | Page |
|---|---|---|
| `dashboard/page.tsx` | `/dashboard` | Dashboard overview with key metrics |
| `dashboard/agencies/` | `/dashboard/agencies` | List of owned agencies |
| `dashboard/agencies/new/` | `/dashboard/agencies/new` | Create new agency form |
| `dashboard/agencies/[id]/` | `/dashboard/agencies/:id` | Single agency detail/management |
| `dashboard/templates/` | `/dashboard/templates` | Browse website templates |
| `dashboard/billing/` | `/dashboard/billing` | Subscription and payment management |
| `dashboard/settings/` | `/dashboard/settings` | Account settings |
| `dashboard/settings/domain/` | `/dashboard/settings/domain` | Custom domain configuration |

## Why `dashboard/` twice?
Route group `(dashboard)` is invisible. The inner folder `dashboard/` is the real URL prefix so these routes don’t collide with `(marketing)/page.tsx` at `/` or with `(admin)/admin/...` at `/admin/...`.

## Future Pages
- `dashboard/agencies/[id]/courses/page.tsx` — Courses for this agency
- `dashboard/notifications/page.tsx` — Notification center
