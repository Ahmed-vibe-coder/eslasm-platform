# `components/layout/` — Layout Components

## Purpose
Page-level layout shells: headers, footers, and sidebars. Each route group uses a different combination.

## Current Files
| File | Used By | Description |
|---|---|---|
| `site-header.tsx` | `(marketing)` | Public nav with logo, links, mobile menu, theme toggle, language switcher |
| `site-footer.tsx` | `(marketing)` | Multi-column footer with links and copyright |
| `dashboard-sidebar.tsx` | `(dashboard)` | Agency owner sidebar with nav icons |
| `dashboard-header.tsx` | `(dashboard)` | Top bar with notifications, theme toggle, user avatar |

## Future Files
- `admin-sidebar.tsx` — Extracted admin sidebar (currently inline in admin layout)
- `tenant-header.tsx` — Tenant-branded header for `[tenant]` pages
- `tenant-footer.tsx` — Tenant-branded footer for `[tenant]` pages
- `mobile-sidebar.tsx` — Slide-out mobile sidebar (shared between dashboard and admin)
- `breadcrumb.tsx` — Dynamic breadcrumb based on route segments
