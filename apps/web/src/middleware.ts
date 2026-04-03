import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const APP_SUBDOMAINS = ['app', 'www', 'admin']
const PUBLIC_HOSTS = ['localhost', 'eduforge.com', 'www.eduforge.com']

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') ?? ''
  const url = request.nextUrl.clone()

  const hostWithoutPort = host.split(':')[0]!
  const parts = hostWithoutPort.split('.')

  if (host.includes('localhost')) {
    const subdomain = parts.length > 1 ? parts[0] : null
    if (subdomain && subdomain !== 'localhost' && !APP_SUBDOMAINS.includes(subdomain)) {
      url.pathname = `/${subdomain}${url.pathname}`
      return NextResponse.rewrite(url)
    }
    return NextResponse.next()
  }

  if (parts.length > 2) {
    const subdomain = parts[0]!
    if (!APP_SUBDOMAINS.includes(subdomain)) {
      url.pathname = `/${subdomain}${url.pathname}`
      return NextResponse.rewrite(url)
    }
  }

  const isCustomDomain = !PUBLIC_HOSTS.some((d) => hostWithoutPort.endsWith(d))
  if (isCustomDomain) {
    url.pathname = `/${hostWithoutPort}${url.pathname}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
