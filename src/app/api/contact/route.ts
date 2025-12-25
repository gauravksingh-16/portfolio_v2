import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, phone, email, message } = body;

        // Validate required fields
        if (!name || !phone || !email || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        // Send email using Resend
        await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: "gauravkumarsingh3360@gmail.com",
            subject: "Service Enquiry",
            html: `
        <h2>Service Enquiry Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
            text: `
Service Enquiry Form Submission

Name: ${name}
Phone: ${phone}
Email: ${email}

Message:
${message}
      `,
        });

        return NextResponse.json(
            { message: "Form submitted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error processing form:", error);
        return NextResponse.json(
            { error: "Failed to process form" },
            { status: 500 }
        );
    }
}
