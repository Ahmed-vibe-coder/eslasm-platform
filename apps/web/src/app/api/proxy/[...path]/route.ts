import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = process.env.BACKEND_API_URL ?? 'http://localhost:8000'

async function handler(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  const { path } = await params
  const joined = path.join('/')
  const url = `${BACKEND_URL}/${joined}${req.nextUrl.search}`

  const response = await fetch(url, {
    method: req.method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: req.headers.get('authorization') ?? '',
    },
    body: req.method !== 'GET' && req.method !== 'HEAD' ? await req.text() : null,
  })

  const data = await response.json()
  return NextResponse.json(data, { status: response.status })
}

export { handler as GET, handler as POST, handler as PUT, handler as PATCH, handler as DELETE }
