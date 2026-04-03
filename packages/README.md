# `packages/` — Shared Monorepo Packages

## Purpose
Contains reusable packages shared across all apps in the monorepo. Each package is a standalone workspace that can be imported using `@eduforge/` scope.

## Role
Prevents code duplication and ensures a single source of truth for types, configs, API calls, and builder logic. Every package is referenced via `workspace:*` in `package.json`.

## Current Packages
| Package | Name | Description |
|---|---|---|
| `types/` | `@eduforge/types` | Shared TypeScript interfaces and type definitions |
| `config/` | `@eduforge/config` | Shared Tailwind, TypeScript, and ESLint configs |
| `api-client/` | `@eduforge/api-client` | All API call functions (never call backend directly) |
| `builder-core/` | `@eduforge/builder-core` | GrapesJS configuration, custom blocks, and renderer |

## Future Packages
- `ui/` (`@eduforge/ui`) — Shared UI component library (buttons, inputs, modals, cards)
- `database/` (`@eduforge/database`) — Prisma client, schema, and migration utilities
- `email/` (`@eduforge/email`) — Email templates (React Email) and sending logic
- `analytics/` (`@eduforge/analytics`) — Event tracking and analytics helpers
- `validators/` (`@eduforge/validators`) — Shared Zod schemas for forms and API validation
