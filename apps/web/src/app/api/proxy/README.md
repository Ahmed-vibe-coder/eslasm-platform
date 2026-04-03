# `api/proxy/` — Backend API Proxy

## Purpose
Catch-all proxy that forwards all API requests to the real backend server. Injects authentication headers server-side so tokens are never exposed to the client.

## URL
`/api/proxy/*` — anything after `/proxy/` is forwarded to the backend

## Security
- Auth tokens are read from the session server-side
- Backend URL (`BACKEND_API_URL`) is only accessible on the server
- Client-side code only knows about `/api/proxy/...`
