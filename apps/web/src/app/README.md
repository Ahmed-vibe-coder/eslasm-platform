# `apps/web/src/app/` — Next.js App Router

## Purpose
Contains all routes, pages, layouts, and API endpoints using Next.js 15 App Router conventions.

## Role
The App Router is the core of the application. It handles routing, server-side rendering, and API endpoints. Route groups organize pages by access level and UI layout.

## Directory Map
```
app/
├── (marketing)/    ← Public pages (home, pricing) — header + footer layout
├── (auth)/         ← Auth pages (login, register) — centered card layout
├── (dashboard)/    ← Agency owner workspace — sidebar + header layout
├── (builder)/      ← GrapesJS editor — fullscreen, no nav
├── (admin)/        ← Super admin panel — admin sidebar layout
├── [tenant]/       ← Dynamic tenant pages — served via subdomain
├── api/            ← API route handlers
├── layout.tsx      ← Root layout (fonts, providers, i18n)
├── globals.css     ← Global styles and CSS variables
└── not-found.tsx   ← 404 error page
```

## Key Concepts
- **Route groups** `(name)` share a layout but don't appear in the URL
- **Dynamic routes** `[param]` capture URL segments as params
- **Catch-all** `[...slug]` captures remaining URL segments as an array
- Files named `page.tsx` define the UI for a route
- Files named `layout.tsx` wrap all child routes
- Files named `route.ts` define API endpoints

## Future Files
- `loading.tsx` — Global loading skeleton
- `error.tsx` — Global error boundary
- `sitemap.ts` — Dynamic sitemap generation
- `robots.ts` — Robots.txt configuration
- `opengraph-image.tsx` — Dynamic OG image generation
