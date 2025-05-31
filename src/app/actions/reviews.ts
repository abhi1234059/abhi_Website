"use server";

import type { ReviewFormValues } from "@/components/connect/ReviewSubmissionForm";
import type { Review } from "@/lib/data";
import { z } from "zod";

const reviewFormSchema = z.object({
  name: z.string().min(2).max(50),
  rating: z.number().min(1).max(5),
  comment: z.string().min(10).max(500),
});

export async function submitReview(values: ReviewFormValues): Promise<{ success: boolean; review?: Review; error?: string; details?: any }> {
  try {
    const validatedData = reviewFormSchema.parse(values);

    // In a real application, you would save this to a database.
    console.log("New Review Submission:");
    console.log("Name:", validatedData.name);
    console.log("Rating:", validatedData.rating);
    console.log("Comment:", validatedData.comment);
    console.log("---");

    // Simulate successful submission and return the review data.
    // In a real app, this would come from the database after insertion.
    const newReview: Review = {
      id: Date.now().toString(), // temporary ID
      name: validatedData.name,
      rating: validatedData.rating,
      comment: validatedData.comment,
      date: new Date().toISOString(),
      // avatarUrl can be left undefined or set to a default
    };

    return { success: true, review: newReview };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: "Validation failed for review.", details: error.errors };
    }
    console.error("Error submitting review:", error);
    return { success: false, error: "An unexpected error occurred while submitting review." };
  }
}
