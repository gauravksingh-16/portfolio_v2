import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { projectTitle, message } = body;

        // Validate required fields
        if (!projectTitle || !message) {
            return NextResponse.json(
                { error: "Project title and message are required" },
                { status: 400 }
            );
        }

        // Send email using Resend
        await resend.emails.send({
            from: "Portfolio Feedback <onboarding@resend.dev>",
            to: "gauravkumarsingh3360@gmail.com",
            subject: `Anonymous Feedback: ${projectTitle}`,
            html: `
        <h2>Anonymous Project Feedback</h2>
        <p><strong>Project:</strong> ${projectTitle}</p>
        <p><strong>Feedback:</strong></p>
        <p>${message}</p>
        <hr />
        <p style="color: #666; font-size: 12px;">This feedback was submitted anonymously from your portfolio.</p>
      `,
            text: `
Anonymous Project Feedback

Project: ${projectTitle}

Feedback:
${message}

---
This feedback was submitted anonymously from your portfolio.
      `,
        });

        return NextResponse.json(
            { message: "Feedback submitted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error processing feedback:", error);
        return NextResponse.json(
            { error: "Failed to submit feedback" },
            { status: 500 }
        );
    }
}
