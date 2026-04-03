# `api/upload/` — File Upload

## Purpose
Handles file uploads (images, documents) using multipart form data. Files are stored in Cloudflare R2 and a CDN URL is returned.

## Method
`POST /api/upload` (multipart/form-data)

## Future Implementation
- Accept file via `FormData`
- Validate file type and size
- Upload to Cloudflare R2 bucket
- Return CDN URL for the uploaded file
- Support image optimization/resizing
