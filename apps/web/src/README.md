# `apps/web/src/` — Application Source Code

## Purpose
Root source directory for the Next.js 15 application. All application code lives here.

## Directory Map
```
src/
├── app/            ← Next.js App Router (pages, layouts, API routes)
├── components/     ← Shared React components (used across multiple features)
├── lib/            ← Utility functions and helpers
├── store/          ← Zustand state management stores
├── i18n/           ← Internationalization configuration
└── middleware.ts   ← Request middleware (subdomain routing, auth)
```

## Future Directories
- `hooks/` — Shared custom React hooks (used across multiple features)
- `schemas/` — Shared Zod validation schemas
- `services/` — Server-side service functions (auth, email, payment)
- `constants/` — Global constants and configuration values
- `types/` — App-specific types (not shared with other packages)
