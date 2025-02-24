import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, mail, dialCode, phone, source, message } = await req.json();

    if (!firstName || !lastName || !mail || !phone || !message || !dialCode) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px;">
        <h2 style="color: #333;">New Enquiry from ${firstName} ${lastName}</h2>
        <p style="font-size: 16px; color: #555;">Here are the details of the enquiry:</p>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td><strong>Name:</strong></td><td>${firstName} ${lastName}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${mail}</td></tr>
          <tr><td><strong>Phone:</strong></td><td>${dialCode} ${phone}</td></tr>
          <tr><td><strong>Source:</strong></td><td>${source || "Not specified"}</td></tr>
          <tr><td><strong>Message:</strong></td><td>${message}</td></tr>
        </table>
      </div>
    `;

    await resend.emails.send({
      from: "Ampersand Enquiry <onboarding@resend.dev>",
      to: "pd@ampvc.co",
      subject: `New Enquiry from ${firstName} ${lastName}`,
      html: htmlContent,
      replyTo: mail,
    });

    return NextResponse.json({ message: "Enquiry sent successfully" }, { status: 200 });

  } catch (err) {
    console.error("Error sending email:", err); 
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
