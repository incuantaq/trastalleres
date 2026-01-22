import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only protect admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const authCookie = request.cookies.get('admin-auth');
    const isLoginPage = request.nextUrl.pathname === '/admin/login';

    // If not authenticated and not on login page, redirect to login
    if (!authCookie?.value && !isLoginPage) {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }

    // If authenticated but cookie is invalid, redirect to login
    if (authCookie?.value) {
      const validToken = process.env.ADMIN_AUTH_TOKEN || 'trastalleres-secure-2024';
      if (authCookie.value !== validToken && !isLoginPage) {
        const loginUrl = new URL('/admin/login', request.url);
        const response = NextResponse.redirect(loginUrl);
        response.cookies.delete('admin-auth');
        return response;
      }
    }

    // If already authenticated and trying to access login page, redirect to dashboard
    if (authCookie?.value && isLoginPage) {
      const dashboardUrl = new URL('/admin/refresh', request.url);
      return NextResponse.redirect(dashboardUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
