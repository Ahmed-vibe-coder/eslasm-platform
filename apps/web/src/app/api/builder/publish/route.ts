import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { pageId } = body as { pageId: string }

  if (!pageId) {
    return NextResponse.json(
      { success: false, message: 'Missing pageId' },
      { status: 400 },
    )
  }

  return NextResponse.json({
    success: true,
    data: { pageId, isPublished: true, publishedAt: new Date().toISOString() },
  })
}
