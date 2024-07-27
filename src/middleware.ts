import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { useRouter } from 'next/navigation';

// Define the public route
const publicRoute = '/';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check for the presence of the auth cookie
  const authToken = request.cookies.get('authjs.session-token');

  // Allow requests to the public route or if authenticated
  if (pathname === publicRoute || authToken) {
    return NextResponse.next();
  }

  // If the auth token is missing and the route is protected, redirect to the public route
  if (pathname.startsWith('/home')) {
    return NextResponse.redirect(new URL(publicRoute, request.url));
  }

  // Allow the request to proceed if authenticated or if not accessing a protected route
  return NextResponse.next();
}

export const config = {
  matcher: ['/home/:path*', '/dashboard/:path*', '/profile/:path*'], // Include all protected routes
};
