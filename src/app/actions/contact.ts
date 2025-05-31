
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
      return { success: false, error: "Email server not configured. Please contact support." };
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${validatedData.name}" <${process.env.EMAIL_USER}>`,
      replyTo: validatedData.email,
      to: "sitequickpersonal@gmail.com", // Your destination email
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <p>You have a new contact form submission:</p>
        <ul>
          <li><strong>Name:</strong> ${validatedData.name}</li>
          <li><strong>Email:</strong> ${validatedData.email}</li>
        </ul>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully to sitequickpersonal@gmail.com!");
      return { success: true, message: "Message sent successfully!" };
    } catch (emailError) {
      console.error("Error sending email:", emailError);
      let errorMessage = "Failed to send email. Please try again later.";

      // Check if it's an authentication error
      if (emailError instanceof Error && 'code' in emailError && (emailError as any).code === 'EAUTH') {
        errorMessage = "Failed to send email due to authentication issues. Please check server logs and email credentials.";
        console.error(
            "NODEMAILER AUTHENTICATION ERROR (EAUTH):\n" +
            "1. Verify EMAIL_USER and EMAIL_PASS in your .env.local file are correct for the Gmail account you're sending from.\n" +
            "2. If using 2-Step Verification on Gmail, YOU MUST USE AN APP PASSWORD for EMAIL_PASS. Your regular password will not work.\n" +
            "   Search 'Sign in with App Passwords Google' for instructions on how to generate one.\n" +
            "3. If not using 2-Step Verification (less secure), ensure 'Less secure app access' is enabled in your Google account settings. (Not recommended - use App Passwords instead).\n" +
            "4. Ensure you've restarted your development server after changing .env.local."
        );
      } else if (emailError instanceof Error) {
        // Log other types of Nodemailer errors
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
