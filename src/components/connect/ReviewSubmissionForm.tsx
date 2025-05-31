"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { StarInput } from "@/components/shared/StarInput";
import { submitReview } from "@/app/actions/reviews";
import type { Review } from "@/lib/data";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const reviewFormSchema = z.object({
  name: z.string().min(2, "Name is too short").max(50, "Name is too long"),
  rating: z.number().min(1, "Rating is required").max(5, "Rating cannot exceed 5"),
  comment: z.string().min(10, "Comment is too short").max(500, "Comment is too long"),
});

export type ReviewFormValues = z.infer<typeof reviewFormSchema>;

interface ReviewSubmissionFormProps {
  onReviewSubmitted: (review: Review) => void;
}

export function ReviewSubmissionForm({ onReviewSubmitted }: ReviewSubmissionFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewFormSchema),
    defaultValues: {
      name: "",
      rating: 0,
      comment: "",
    },
  });

  async function onSubmit(values: ReviewFormValues) {
    setIsSubmitting(true);
    try {
      const result = await submitReview(values);
      if (result.success && result.review) {
        toast({
          title: "Review Submitted!",
          description: "Thank you for your feedback.",
        });
        onReviewSubmitted(result.review);
        form.reset();
      } else {
        throw new Error(result.error || "Failed to submit review.");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: (error as Error).message || "Could not submit review. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Rating</FormLabel>
              <FormControl>
                <StarInput 
                  value={field.value} 
                  onChange={field.onChange} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Review</FormLabel>
              <FormControl>
                <Textarea placeholder="Share your experience..." {...field} className="min-h-[100px]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Review"
          )}
        </Button>
      </form>
    </Form>
  );
}
