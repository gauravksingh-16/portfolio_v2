import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { password } = await request.json();

        // Get the password from environment variable
        const correctPassword = process.env.PROJECT_PASSWORD;

        if (!correctPassword) {
            return NextResponse.json(
                { error: "Server configuration error" },
                { status: 500 }
            );
        }

        // Validate password
        if (password === correctPassword) {
            return NextResponse.json({ success: true });
        } else {
            return NextResponse.json(
                { error: "Incorrect password" },
                { status: 401 }
            );
        }
    } catch (error) {
        return NextResponse.json(
            { error: "Invalid request" },
            { status: 400 }
        );
    }
}
