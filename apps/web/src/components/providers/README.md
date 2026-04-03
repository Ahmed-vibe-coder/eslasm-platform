# `components/providers/` — React Providers

## Purpose
Wraps the entire application with required React context providers. Order matters — providers are nested inside each other.

## Current Files
- `index.tsx` — Combines `ThemeProvider` (next-themes) and `QueryClientProvider` (TanStack Query)

## Provider Order (outermost to innermost)
1. `NextIntlClientProvider` (in root layout, not here)
2. `ThemeProvider` — Dark/light mode
3. `QueryClientProvider` — TanStack Query cache

## Future Providers
- `SessionProvider` — Auth.js session context
- `ToastProvider` — Toast notification system
- `ModalProvider` — Global modal management
