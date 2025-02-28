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
    const { fullName, workEmail, companyName, role, industry } =
      await req.json();

    console.log("Received form data:", {
      fullName,
      workEmail,
      companyName,
      role,
      industry,
    });

    if (!fullName || !workEmail || !companyName || !role || !industry) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: process.env.EMAIL_USER, // Your email address
      to: workEmail,
      subject: "Your Interest in Our VC Database – Next Steps",
      text: `Dear ${fullName},\n\nThank you for reaching out and for your interest in our Venture Capital (VC) database. We appreciate the time you took to complete the form.

We are in the final stages of curating a comprehensive list of VCs and will share it with you as soon as it is ready. This resource will provide you with valuable funding opportunities tailored to your needs.

In the meantime, if you have any specific requirements or questions, please feel free to reply to this email. We’re happy to assist you in any way we can.

We look forward to keeping you updated and sharing exciting developments with you soon.
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

    return NextResponse.json(
      { message: "Thank you email sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
