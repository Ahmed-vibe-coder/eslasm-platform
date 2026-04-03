# EduForge — SaaS LMS Platform Builder

A multi-tenant platform for building and launching online learning academies.

## Quick Start 

### Prerequisites
- Node.js >= 20 
- pnpm >= 9

### Install
```bash
pnpm install
```

### Development
```bash
pnpm dev
```

### Testing subdomain routing locally
Add to your `/etc/hosts`:
```
127.0.0.1 ahmed-academy.localhost
```
Then visit `http://ahmed-academy.localhost:3000`

## Structure
- `apps/web/` — Next.js 15 application
- `packages/types/` — Shared TypeScript types
- `packages/api-client/` — All API call functions
- `packages/builder-core/` — GrapesJS builder config and blocks
- `packages/config/` — Shared configs (TS, ESLint, Tailwind)

## Key concepts
- **Tenant** = an Agency. Each tenant gets a subdomain.
- **Builder** = GrapesJS-powered page editor.
- **Multi-tenancy** = handled by `middleware.ts`, not a database flag.

## Environment variables
Copy `apps/web/.env.example` to `apps/web/.env.local` and fill in the values.
