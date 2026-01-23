import { NextResponse, NextRequest } from 'next/server'

const ADMIN_PATH = /^\/admin(\/.*)?$/

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (ADMIN_PATH.test(pathname) && pathname !== '/admin/login') {
    const url = req.nextUrl.clone()
    url.pathname = '/admin/login'
    // Prevent indexing even on login
    const res = NextResponse.redirect(url)
    res.headers.set('X-Robots-Tag', 'noindex, nofollow')
    return res
  }

  if (ADMIN_PATH.test(pathname)) {
    const res = NextResponse.next()
    res.headers.set('X-Robots-Tag', 'noindex, nofollow')
    return res
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
