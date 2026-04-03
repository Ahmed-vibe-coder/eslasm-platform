# `packages/builder-core/src/` — Builder Core Source

## Conventions
- Block files go in `blocks/` — each exports a function that takes an `editor` instance
- Every block must have: `label`, `category`, and `content` with real default content
- Categories: `Sections`, `LMS`, `Components`, `Layout`
- LMS blocks use `data-component` attributes for dynamic data injection at render time
- Never import browser-only code at the top level — use dynamic imports
