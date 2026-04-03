# `.cursor/rules/` — Cursor AI Rules

## Purpose
Contains MDC (Markdown Configuration) rule files that guide the Cursor AI assistant when working on this project. These rules enforce coding standards, architecture patterns, and project conventions automatically.

## Role
Every time the AI generates or modifies code, it reads relevant rule files based on glob patterns. This ensures consistency across the entire codebase without developers needing to repeat instructions.

## Current Files
| File | Scope | Always Active |
|---|---|---|
| `project-overview.mdc` | All `.ts`/`.tsx` files | Yes |
| `coding-standards.mdc` | All `.ts`/`.tsx` files | Yes |
| `file-structure.mdc` | All `.ts`/`.tsx` files | Yes |
| `builder-rules.mdc` | `**/builder/**` files only | No |
| `api-rules.mdc` | `**/api/**`, `**/api-client/**` files | No |

## Future Files
- `database-rules.mdc` — Rules for Prisma schema, migrations, and DB queries
- `testing-rules.mdc` — Testing patterns (Vitest, Playwright)
- `deployment-rules.mdc` — CI/CD, Docker, and deployment conventions
- `security-rules.mdc` — Auth patterns, input validation, and CORS rules
