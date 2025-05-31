
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
    //    EMAIL_USER=your_gmail_address@gmail.com
    //    EMAIL_PASS=your_gmail_app_password  (Use an App Password if you have 2-Step Verification)
    // 3. Ensure .env.local is in your .gitignore file.
    // 4. Restart your development server (npm run dev) after creating/modifying .env.local.
    // --- --- --- ---

    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or your SMTP provider
      auth: {
        user: process.env.EMAIL_USER, // Your email address from .env.local
        pass: process.env.EMAIL_PASS, // Your email password or app password from .env.local
      },
    });

    const mailOptions = {
      from: `"${validatedData.name}" <${process.env.EMAIL_USER}>`, // Sender address (your configured email)
      replyTo: validatedData.email, // User's email to reply to
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
      // It's good practice to not expose detailed error messages to the client.
      // Log the detailed error on the server, and return a generic error to the user.
      let errorMessage = "Failed to send email. Please try again later.";
      if (emailError instanceof Error && 'code' in emailError && (emailError as any).code === 'EAUTH') {
        errorMessage = "Failed to send email due to authentication issues. Please check server logs and email credentials.";
        console.error("Nodemailer authentication error. Ensure EMAIL_USER and EMAIL_PASS are correct and the account is configured for SMTP access (e.g., App Password for Gmail).");
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
