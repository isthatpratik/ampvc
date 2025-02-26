import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { fullName, workEmail, companyName, role, industry } = await req.json();

    // Validate required fields
    if (!fullName || !workEmail || !companyName || !role || !industry) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Email HTML content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px;">
        <h2 style="color: #333;">New Pre-Registration Submission</h2>
        <p style="font-size: 16px; color: #555;">A new user has pre-registered:</p>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td><strong>Full Name:</strong></td><td>${fullName}</td></tr>
          <tr><td><strong>Work Email:</strong></td><td>${workEmail}</td></tr>
          <tr><td><strong>Company Name:</strong></td><td>${companyName}</td></tr>
          <tr><td><strong>Role:</strong></td><td>${role}</td></tr>
          <tr><td><strong>Industry:</strong></td><td>${industry}</td></tr>
        </table>
      </div>
    `;

    // Send email using Resend API
    await resend.emails.send({
      from: "Fynar AI <onboarding@resend.dev>",
      to: "pd@ampvc.co", // Change to your email
      subject: `New Pre-Registration from ${fullName}`,
      html: htmlContent,
      replyTo: workEmail,
    });

    return NextResponse.json({ message: "Pre-registration submitted successfully" }, { status: 200 });

  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
