import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { domain, agencyId } = body as { domain: string; agencyId: string }

  if (!domain || !agencyId) {
    return NextResponse.json(
      { success: false, message: 'Missing domain or agencyId' },
      { status: 400 },
    )
  }

  return NextResponse.json({
    success: true,
    data: {
      domain,
      agencyId,
      verified: false,
      dnsRecords: [
        { type: 'CNAME', name: domain, value: 'cname.eduforge.com', status: 'pending' },
        { type: 'TXT', name: `_verify.${domain}`, value: `eduforge-verify=${agencyId}`, status: 'pending' },
      ],
    },
  })
}
