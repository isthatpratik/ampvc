import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const {
      fullName,
      workMail,
      dialCode,
      phone,
      companyName,
      role,
      industry,
      services,
      source,
      query,
    } = data;

    if (!fullName || !workMail || !phone || !companyName || !role || !industry) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px;">
        <h2 style="color: #333;">New Form Submission from ${fullName}</h2>
        <p style="font-size: 16px; color: #555;">Here are the details:</p>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td><strong>Full Name:</strong></td><td>${fullName}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${workMail}</td></tr>
          <tr><td><strong>Phone:</strong></td><td>${dialCode} ${phone}</td></tr>
          <tr><td><strong>Company Name:</strong></td><td>${companyName}</td></tr>
          <tr><td><strong>Role:</strong></td><td>${role}</td></tr>
          <tr><td><strong>Industry:</strong></td><td>${industry}</td></tr>
          <tr><td><strong>Services:</strong></td><td>${services.length ? services.join(", ") : "None"}</td></tr>
          <tr><td><strong>Source:</strong></td><td>${source} || "Not Defined"</td></tr>
          <tr><td><strong>Query:</strong></td><td>${query || "No query provided"}</td></tr>
        </table>
      </div>
    `;

    await resend.emails.send({
      from: "Ampersand Contact <onboarding@resend.dev>",
      to: "pd@ampvc.co",
      subject: `New Enquiry from ${fullName} `,
      html: htmlContent,
      replyTo: workMail,
    });

    return NextResponse.json({ message: "Form submitted successfully" }, { status: 200 });

  } catch (err) {
    console.error("Error sending email:", err); 
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
