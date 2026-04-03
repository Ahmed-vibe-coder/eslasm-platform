import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { pageId, structure, title } = body as {
    pageId: string
    structure: unknown
    title?: string
  }

  if (!pageId || !structure) {
    return NextResponse.json(
      { success: false, message: 'Missing pageId or structure' },
      { status: 400 },
    )
  }

  return NextResponse.json({
    success: true,
    data: { pageId, title, updatedAt: new Date().toISOString() },
  })
}
