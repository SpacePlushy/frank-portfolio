import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the hostname (e.g., 'palmisano.io', 'csr.palmisano.io')
  const hostname = request.headers.get('host') || ''
  
  // Extract subdomain
  const subdomain = hostname.split('.')[0]
  
  // Add subdomain as a header for components to access
  const response = NextResponse.next()
  response.headers.set('x-subdomain', subdomain === 'csr' ? 'csr' : 'main')
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}