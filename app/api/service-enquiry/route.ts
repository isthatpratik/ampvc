import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, mail, phone, source, message } = await req.json();

    if (!firstName || !lastName || !mail || !phone || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px;">
        <h2 style="color: #333;">New Enquiry from ${firstName} ${lastName}</h2>
        <p style="font-size: 16px; color: #555;">Here are the details of the enquiry:</p>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${firstName} ${lastName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${mail}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Source:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${source || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Message:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${message}</td>
          </tr>
        </table>

        <p style="margin-top: 20px; font-size: 14px; color: #777;">This enquiry was submitted via the website contact form.</p>
      </div>
    `;

    const response = await resend.emails.send({
      from: "Your Business <onboarding@resend.dev>", // Use Resend's verified sender email
      to: "pd@ampvc.co", // CEO's email
      subject: `New Enquiry from ${firstName} ${lastName}`,
      html: htmlContent, // HTML email content
    });

    return NextResponse.json({ message: "Enquiry sent successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
