import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const accessCookie = request.cookies.get("portfolio_access");
    const hasFullAccess = accessCookie?.value === "full";

    const response = NextResponse.next();

    // Pass access level to pages via a custom header
    response.headers.set("x-portfolio-access", hasFullAccess ? "full" : "public");

    return response;
}

export const config = {
    matcher: [
        // Apply to all pages except API routes, static files, and Next internals
        "/((?!api|_next/static|_next/image|favicon.ico|fonts|assets).*)",
    ],
};
