# EduForge Web App

## Route groups
| Group | URL | Purpose |
|---|---|---|
| (marketing) | / | Public landing, pricing |
| (auth) | /login, /register | Authentication |
| (dashboard) | /dashboard/** | Agency owner workspace |
| (builder) | /builder/** | Drag & Drop editor |
| (admin) | /admin/** | Super admin panel |
| [tenant] | Served via subdomain | Public agency site |

## Adding a new feature
1. Create folder under the correct route group
2. Add `page.tsx`, `loading.tsx`, `error.tsx`
3. Create `_components/` and `_hooks/` subdirectories
4. Add API functions to `packages/api-client/src/`
5. Add types to `packages/types/src/`
