import { NextResponse } from "next/server";
import { Resend } from "resend";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    console.log(`Email: ${email}, Subject: ${subject}, Message: ${message}`);

    const emailData = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <div>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </div>
      ),
    });

    return NextResponse.json({ success: true, data: emailData });
  } catch (error) {
    console.error("Error sending email:", error.message);
    return NextResponse.json({ success: false, error: error.message });
  }
}
