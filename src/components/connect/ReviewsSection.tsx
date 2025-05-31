"use client";

import { useState, useEffect } from 'react';
import { ReviewCard } from "@/components/shared/ReviewCard";
import { ReviewSubmissionForm } from "./ReviewSubmissionForm";
import { mockReviews, type Review } from "@/lib/data"; // Assuming mockReviews and Review type
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';

export function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  
  useEffect(() => {
    // In a real app, fetch reviews. For now, use mock data.
    // Add a delay to simulate fetching
    const timer = setTimeout(() => {
      setReviews(mockReviews);
    }, 500);
    return () => clearTimeout(timer);
  }, []);


  const handleReviewSubmitted = (newReview: Review) => {
    setReviews(prevReviews => [newReview, ...prevReviews]);
  };

  return (
    <section className="space-y-10 py-10">
      <div className="text-center">
        <h2 className="text-3xl font-headline font-semibold">Client Feedback</h2>
        <p className="text-muted-foreground mt-2">See what others are saying about my services.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="font-headline text-2xl flex items-center">
              <Star className="w-6 h-6 mr-2 text-primary" /> Leave a Review
            </CardTitle>
            <CardDescription>
              Your feedback helps me improve and grow.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ReviewSubmissionForm onReviewSubmitted={handleReviewSubmitted} />
          </CardContent>
        </Card>

        <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2">
            {reviews.length > 0 ? (
                reviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                ))
            ) : (
                <p className="text-muted-foreground text-center py-8">No reviews yet. Be the first one!</p>
            )}
        </div>
      </div>
    </section>
  );
}
