import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarRating } from "./StarRating";
import type { Review } from "@/lib/data"; // Assuming Review type is defined in data.ts

export function ReviewCard({ review }: { review: Review }) {
  const initials = review.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <Card className="shadow-lg_ hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center space-x-4 pb-2">
        <Avatar>
          <AvatarImage src={review.avatarUrl || `https://placehold.co/40x40.png?text=${initials}`} alt={review.name} data-ai-hint="person avatar"/>
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg font-headline">{review.name}</CardTitle>
          <StarRating rating={review.rating} size={16} />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/80 italic">"{review.comment}"</p>
      </CardContent>
      {review.date && (
        <CardFooter>
            <p className="text-xs text-muted-foreground">{new Date(review.date).toLocaleDateString()}</p>
        </CardFooter>
      )}
    </Card>
  );
}
