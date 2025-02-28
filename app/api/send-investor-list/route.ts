import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  service: "gmail", // You can use any email service
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app-specific password
  },
});

export async function POST(req: Request) {
  try {
    const { fullName, workEmail, companyName, role, industry } = await req.json();

    console.log("Received form data:", { fullName, workEmail, companyName, role, industry });

    if (!fullName || !workEmail || !companyName || !role || !industry) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER, // Your email address
      to: workEmail,
      subject: "Thank You for Your Interest – Venture Capital List Coming Soont",
      text: `Dear ${fullName},\n\nThank you for reaching out and expressing interest in our Venture Capital (VC) database. We appreciate your time in filling out the form.

Currently, we are in the process of finalizing the comprehensive list of VCs. Once it is ready, we will send it directly to your email, ensuring you have access to valuable funding opportunities tailored to your needs.

In the meantime, if you have any specific requirements or questions, feel free to reply to this email. We would be happy to assist you.

Stay tuned—exciting updates are on the way!
\n\nBest regards,\nAmpersand Team`,
    };

    const adminMailOptions = {
      from: process.env.EMAIL_USER, // Your email address
      to: process.env.ADMIN_EMAIL, // Your email address to receive form data
      subject: "New Investor List Form Submission",
      text: `New form submission received:\n\nFull Name: ${fullName}\nWork Email: ${workEmail}\nCompany Name: ${companyName}\nRole: ${role}\nIndustry: ${industry}`,
    };

    // Send email to the user
    const userEmailResponse = await transporter.sendMail(mailOptions);
    console.log("User email response:", userEmailResponse);

    // Send email to the admin
    const adminEmailResponse = await transporter.sendMail(adminMailOptions);
    console.log("Admin email response:", adminEmailResponse);

    return NextResponse.json({ message: "Thank you email sent successfully" }, { status: 200 });

  } catch (err) {
    console.error("Error sending email:", err); 
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
