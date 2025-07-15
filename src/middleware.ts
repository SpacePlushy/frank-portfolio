import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the hostname (e.g., 'palmisano.io', 'swe.palmisano.io', 'csr.palmisano.io')
  const hostname = request.headers.get('host') || ''
  
  // Extract subdomain
  const subdomain = hostname.split('.')[0]
  
  // Determine portfolio variant based on subdomain
  let variant = 'general' // Default for palmisano.io and www.palmisano.io
  
  // TEMPORARY: Force CSR for testing - REMOVE AFTER TESTING
  if (hostname.includes('vercel.app')) {
    variant = 'csr'
  }
  
  if (subdomain === 'swe') {
    variant = 'swe'
  } else if (subdomain === 'csr') {
    variant = 'csr'
  } else if (subdomain === 'www' || subdomain === 'palmisano' || subdomain === hostname) {
    variant = 'general'
  }
  
  // Add variant as a header for components to access
  const response = NextResponse.next()
  response.headers.set('x-subdomain', variant)
  
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