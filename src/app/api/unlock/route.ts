import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get("secret");
    const studioSecret = process.env.STUDIO_SECRET;

    if (!studioSecret || secret !== studioSecret) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    const response = NextResponse.redirect(new URL("/", request.url));
    response.cookies.set("portfolio_access", "full", {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        // Session cookie — expires when browser closes
        maxAge: 60 * 60 * 8, // 8 hours
    });

    return response;
}
