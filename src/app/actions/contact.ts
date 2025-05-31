"use server";

import type { ContactFormValues } from "@/components/connect/ContactForm";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

export async function submitContactForm(values: ContactFormValues) {
  try {
    const validatedData = formSchema.parse(values);

    // In a real application, you would send an email here.
    // For example, using a service like Resend, Nodemailer, or an API.
    console.log("New Contact Form Submission:");
    console.log("Name:", validatedData.name);
    console.log("Email:", validatedData.email);
    console.log("Message:", validatedData.message);
    console.log("---");
    console.log("To: sitequickpersonal@gmail.com");
    console.log("Subject: New Contact from Website");

    // Simulate successful submission
    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: "Validation failed.", details: error.errors };
    }
    console.error("Error submitting contact form:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}
