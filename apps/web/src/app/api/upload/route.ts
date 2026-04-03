import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const file = formData.get('file')

  if (!file || !(file instanceof Blob)) {
    return NextResponse.json(
      { success: false, message: 'No file provided' },
      { status: 400 },
    )
  }

  return NextResponse.json({
    success: true,
    data: {
      url: `https://cdn.eduforge.com/uploads/${Date.now()}`,
      filename: file instanceof File ? file.name : 'upload',
      size: file.size,
    },
  })
}
