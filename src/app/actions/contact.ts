
"use server";

import type { ContactFormValues } from "@/components/connect/ContactForm";
import { z } from "zod";
import nodemailer from 'nodemailer';

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

export async function submitContactForm(values: ContactFormValues) {
  try {
    const validatedData = formSchema.parse(values);

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error("---------------------------------------------------------------------------------");
      console.error("ERROR: Email Environment Variables Not Set!");
      console.error("The application cannot find EMAIL_USER or EMAIL_PASS in its environment.");
      console.error("This usually means the .env.local file is missing, misplaced, or the server was not restarted after creating/modifying it.");
      console.error(" ");
      console.error("Troubleshooting Steps:");
      console.error("1. Ensure a file named '.env.local' (with a leading dot) exists in the ROOT of your project directory (the same level as package.json).");
      console.error("2. The .env.local file should contain:");
      console.error("   EMAIL_USER=your_gmail_address@gmail.com");
      console.error("   EMAIL_PASS=your_gmail_app_password");
      console.error("   (Replace with your actual credentials. Use an App Password for Gmail if 2FA is enabled.)");
      console.error("3. CRITICAL: You MUST restart your Next.js development server (stop 'npm run dev' and run it again) after creating or changing the .env.local file.");
      console.error(" ");
      console.error(`Current value for EMAIL_USER: ${emailUser ? '******** (loaded)' : 'NOT FOUND'}`);
      console.error(`Current value for EMAIL_PASS: ${emailPass ? '******** (loaded)' : 'NOT FOUND'}`);
      console.error("---------------------------------------------------------------------------------");
      return { success: false, error: "Email server not configured. Please contact support." };
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: `"${validatedData.name}" <${emailUser}>`,
      replyTo: validatedData.email,
      to: "sitequickpersonal@gmail.com", // Your destination email
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <hr style="border: 0; border-top: 1px solid #eee;">
          <p><strong>From:</strong> ${validatedData.name}</p>
          <p><strong>User's Email (Reply-To):</strong> <a href="mailto:${validatedData.email}" style="color: #007bff;">${validatedData.email}</a></p>
          <hr style="border: 0; border-top: 1px solid #eee;">
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9f9f9; border-left: 4px solid #007bff; padding: 10px; margin-top: 5px;">
            <p style="margin: 0;">${validatedData.message.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully to sitequickpersonal@gmail.com!");
      return { success: true, message: "Message sent successfully!" };
    } catch (emailError) {
      console.error("Error sending email:", emailError);
      let errorMessage = "Failed to send email. Please try again later.";

      if (emailError instanceof Error && 'code' in emailError && (emailError as any).code === 'EAUTH') {
        errorMessage = "Failed to send email due to authentication issues. Please check server logs and email credentials.";
        console.error(
            "---------------------------------------------------------------------------------\n" +
            "NODEMAILER AUTHENTICATION ERROR (EAUTH):\n" +
            "This means Gmail rejected the login attempt from the server.\n" +
            "1. VERIFY .env.local CREDENTIALS: Ensure EMAIL_USER and EMAIL_PASS in your project's root .env.local file are correct for the Gmail account you're sending from.\n" +
            "2. APP PASSWORD (if 2-Step Verification is ON): If using 2-Step Verification on that Gmail account, YOU MUST USE AN APP PASSWORD for EMAIL_PASS. Your regular password will NOT work. Search 'Sign in with App Passwords Google' for instructions.\n" +
            "3. LESS SECURE APP ACCESS (Not Recommended): If NOT using 2-Step Verification, ensure 'Less secure app access' is enabled in your Google account settings. (This is less secure; using an App Password is preferred).\n" +
            "4. RESTART SERVER: After any changes to .env.local or Google Account settings, you MUST restart your development server (npm run dev).\n" +
            "---------------------------------------------------------------------------------"
        );
      } else if (emailError instanceof Error) {
        console.error("Nodemailer error details:", emailError.message);
      }
      return { success: false, error: errorMessage };
    }

  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: "Validation failed.", details: error.errors };
    }
    console.error("Error submitting contact form (outside of email sending):", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}
