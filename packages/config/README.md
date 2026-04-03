# `packages/config/` — Shared Configuration

## Purpose
Stores shared configuration files for TypeScript, Tailwind CSS, and ESLint that are extended by all apps in the monorepo.

## Role
Ensures consistent compiler settings, styling theme, and linting rules across the entire project. Apps extend these configs rather than duplicating them.

## Current Files
| File | Export Path | Description |
|---|---|---|
| `tsconfig.base.json` | `@eduforge/config/typescript` | Base TypeScript config with strict settings |
| `tailwind.config.ts` | `@eduforge/config/tailwind` | Shared Tailwind theme (colors, fonts, animations) |
| `eslint-base.js` | `@eduforge/config/eslint` | Base ESLint rules |

## Future Files
- `eslint-next.js` — Next.js-specific ESLint config with React hooks rules
- `eslint-api.js` — Backend/API-specific ESLint rules
- `prettier.config.js` — Shared Prettier config (currently in root)
- `postcss.config.js` — Shared PostCSS config
