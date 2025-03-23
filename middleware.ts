/* eslint-disable @typescript-eslint/no-unused-vars */
import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Add any custom middleware logic here
  return NextResponse.next();
}

// Protect routes that require authentication
export default withAuth(middleware, {
  // Routes that require authentication
  callbacks: {
    authorized: ({ token }: { token: string }) => {
      return !!token;
    },
  },
  // Public routes that don't require authentication
  publicRoutes: [
    "/",
    "/services",
    "/gallery",
    "/about",
    "/blog",
    "/contact",
    "/api/auth/(.*)",
  ],
});

export const config = {
  // Matcher for routes that should run the middleware
  matcher: ["/dashboard/:path*", "/booking/:path*", "/admin/:path*"],
};
