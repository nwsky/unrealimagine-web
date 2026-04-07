import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isValidAdminBearerToken } from "@/lib/admin-auth";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/api/admin") && pathname !== "/api/admin/auth") {
    const hasSessionCookie = req.cookies.get("admin_auth")?.value === "1";
    const hasBearerToken = isValidAdminBearerToken(req.headers.get("authorization"));

    if (!hasSessionCookie && !hasBearerToken) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/admin/:path*"],
};
