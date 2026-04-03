# `packages/types/src/` — Type Definition Source Files

## Purpose
Contains all TypeScript interface and type definitions, organized by domain entity.

## Conventions
- One file per domain entity (e.g., `course.ts` for everything course-related)
- Use `interface` for object shapes, `type` for unions and computed types
- Every file must be re-exported from `index.ts`
- No runtime code — only type definitions (interfaces, types, enums)
- Use string literal unions instead of enums for better tree-shaking
