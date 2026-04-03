# `store/` — Zustand State Management

## Purpose
Global client-side state using Zustand. Only for UI state — server data always stays in TanStack Query.

## Rules
- **Server state** (API data) → TanStack Query, NOT Zustand
- **Global UI state** (sidebar open, modals, builder state) → Zustand
- **Local component state** → `useState` / `useReducer`
- **Form state** → `react-hook-form`

## Current Files
| File | Store | Description |
|---|---|---|
| `builder-store.ts` | `useBuilderStore` | Builder state: page ID, structure, device, save/publish status |

## Future Files
- `sidebar-store.ts` — `useSidebarStore` — Mobile sidebar open/close state
- `modal-store.ts` — `useModalStore` — Global modal management (which modal is open, data)
- `tenant-store.ts` — `useTenantStore` — Current tenant context (for tenant pages)
- `command-store.ts` — `useCommandStore` — Command palette open/close state
