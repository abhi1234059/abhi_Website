
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

    // --- IMPORTANT ---
    // For this email sending to work, you MUST:
    // 1. Create a .env.local file in your project root.
    // 2. Add your Gmail credentials to .env.local:
    //    EMAIL_USER=your_gmail_address_to_send_from@gmail.com
    //    EMAIL_PASS=your_gmail_app_password
    //    (Use an App Password if you have 2-Step Verification enabled on your Gmail account.
    //     Search "Sign in with App Passwords Google" for instructions.)
    // 3. Ensure .env.local is in your .gitignore file.
    // 4. Restart your development server (npm run dev) after creating/modifying .env.local.
    // --- --- --- ---

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("EMAIL_USER or EMAIL_PASS environment variables are not set. Email sending will fail.");
      // This specific error message is displayed to the user if .env.local is not set up correctly.
      return { success: false, error: "Email server not configured. Please contact support." };
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address (from .env.local)
        pass: process.env.EMAIL_PASS, // Your Gmail App Password (from .env.local)
      },
    });

    const mailOptions = {
      from: `"${validatedData.name}" <${process.env.EMAIL_USER}>`, // Sender address: your server's email, name part is user's name
      replyTo: validatedData.email, // Crucial: ensures replies go to the user's actual email
      to: "sitequickpersonal@gmail.com", // Your destination email
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <hr style="border: 0; border-top: 1px solid #eee;">
          <p><strong>From:</strong> ${validatedData.name} (${validatedData.email})</p>
          <p><strong>Reply-To:</strong> <a href="mailto:${validatedData.email}" style="color: #007bff;">${validatedData.email}</a></p>
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
            "NODEMAILER AUTHENTICATION ERROR (EAUTH):\n" +
            "This means Gmail rejected the login attempt from the server.\n" +
            "1. VERIFY .env.local: Ensure EMAIL_USER and EMAIL_PASS in your project's root .env.local file are correct for the Gmail account you're sending from.\n" +
            "2. APP PASSWORD: If using 2-Step Verification on that Gmail account, YOU MUST USE AN APP PASSWORD for EMAIL_PASS. Your regular password will NOT work. Search 'Sign in with App Passwords Google' for instructions.\n" +
            "3. LESS SECURE APP ACCESS (Not Recommended): If NOT using 2-Step Verification, ensure 'Less secure app access' is enabled in your Google account settings. (This is less secure; using an App Password is preferred).\n" +
            "4. RESTART SERVER: After any changes to .env.local, you MUST restart your development server (npm run dev)."
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
