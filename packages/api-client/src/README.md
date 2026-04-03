# `packages/api-client/src/` — API Client Source

## Conventions
- One file per API domain (e.g., `courses.ts` for all course endpoints)
- Every API module exports a single object with named methods
- All methods return `Promise<ApiResponse<T>>` using types from `@eduforge/types`
- Use the shared `apiClient` instance from `base.ts` — never create raw `fetch` calls
- Every new file must be re-exported from `index.ts`
