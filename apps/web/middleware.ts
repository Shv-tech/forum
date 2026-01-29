import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("__platform_session");

  const isAuthRoute = request.nextUrl.pathname.startsWith("/auth");
  const isAppRoute = request.nextUrl.pathname.startsWith("/app");

  if (isAppRoute && !session) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}
