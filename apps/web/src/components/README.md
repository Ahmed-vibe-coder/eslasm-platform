# `components/` — Shared React Components

## Purpose
Reusable components used across multiple features and route groups. Components specific to a single feature live in that feature's `_components/` folder instead.

## Directory Structure
```
components/
├── layout/       ← Page layout shells (header, footer, sidebar)
├── providers/    ← React context providers (QueryClient, Theme, i18n)
├── ui/           ← Base UI primitives (buttons, inputs, modals, cards)
```

## Placement Rules
- Used in **one feature only** → `feature/_components/`
- Used in **multiple features** → `src/components/`
- Used in **multiple packages** (future) → `packages/ui/`

## Future Directories
- `forms/` — Reusable form components (form field, form section, form actions)
- `data-display/` — Tables, lists, stats cards, badges
- `feedback/` — Toasts, alerts, progress bars, empty states
- `navigation/` — Breadcrumbs, tabs, pagination
- `modals/` — Reusable dialog/sheet components
- `charts/` — Dashboard chart components
