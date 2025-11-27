import { updateSession } from './lib/supabase/middleware'
import { createClient } from './lib/supabase/server'
import { NextResponse } from 'next/server'

export async function middleware(request) {
  const supabase = createClient();
  const { data: { user }} = await supabase.auth.getUser();

  if (!user && process.env.NODE_ENV === 'development' && request.nextUrl.pathname.startsWith('/dashboard')) {
    const redirectTo = request.nextUrl.pathname + request.nextUrl.search;
    const url = new URL(`/force-login?redirectTo=${encodeURIComponent(redirectTo)}`, request.url);
    return NextResponse.redirect(url);
  }

  if (!user && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (user && request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return await updateSession(request)
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
