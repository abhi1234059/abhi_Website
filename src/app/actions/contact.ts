
"use server";

import type { ContactFormValues } from "@/components/connect/ContactForm";
import { z } from "zod";
// import nodemailer from 'nodemailer'; // Uncomment when implementing email sending

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

export async function submitContactForm(values: ContactFormValues) {
  try {
    const validatedData = formSchema.parse(values);

    // --- Implement Actual Email Sending Logic Here ---
    // The following is a conceptual example using Nodemailer.
    // You'll need to:
    // 1. Set up an email service (e.g., Gmail with App Password, SendGrid, Mailgun, AWS SES).
    // 2. Install nodemailer: `npm install nodemailer` (already added to package.json for you).
    // 3. If using TypeScript, install types: `npm install @types/nodemailer --save-dev`
    // 4. Configure environment variables for your email credentials (NEVER hardcode them).
    //    Create a .env.local file in your project root with:
    //    EMAIL_USER=your_email_address
    //    EMAIL_PASS=your_email_password_or_app_password
    //    (Ensure .env.local is in .gitignore)
    // 5. Uncomment and adapt the Nodemailer code block below.

    /*
    // --- BEGIN NODEMAILER EXAMPLE (Uncomment and configure) ---
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or your SMTP provider, e.g., 'hotmail', 'yahoo'
      auth: {
        user: process.env.EMAIL_USER, // Your email address from .env.local
        pass: process.env.EMAIL_PASS, // Your email password or app password from .env.local
      },
    });

    const mailOptions = {
      from: `"${validatedData.name}" <${process.env.EMAIL_USER}>`, // Sender address (your email)
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
      return { success: false, error: "Failed to send email. Please try again later." };
    }
    // --- END NODEMAILER EXAMPLE ---
    */

    // For now, we are logging to the console as a placeholder (current behavior):
    console.log("--- New Contact Form Submission (Simulated Email) ---");
    console.log("Data received:", validatedData);
    console.log(`To: sitequickpersonal@gmail.com`);
    console.log(`From (User's Email): ${validatedData.email}`);
    console.log(`Subject: New Contact from Website - ${validatedData.name}`);
    console.log("Body:");
    console.log(`  Name: ${validatedData.name}`);
    console.log(`  Email: ${validatedData.email}`);
    console.log(`  Message: ${validatedData.message}`);
    console.log("----------------------------------------------------");
    console.log("EMAIL SENDING IS CURRENTLY SIMULATED. UNCOMMENT AND CONFIGURE NODEMAILER (OR OTHER SERVICE) IN src/app/actions/contact.ts TO ENABLE ACTUAL EMAIL SENDING.");


    // Simulate successful submission if not using real email sending yet
    return { success: true, message: "Message sent successfully! (Logged to console - Email sending not yet configured)" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: "Validation failed.", details: error.errors };
    }
    console.error("Error submitting contact form:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}
