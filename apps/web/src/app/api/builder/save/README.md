# `api/builder/save/` — Save Builder Page

## Purpose
Receives the GrapesJS JSON structure and persists it to the database.

## Method
`POST /api/builder/save`

## Body
```json
{ "pageId": "string", "structure": { "components": [], "styles": [], "assets": [] }, "title": "string?" }
```
