
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarRating } from "./StarRating";
import type { Review } from "@/lib/data"; 

export function ReviewCard({ review }: { review: Review }) {
  const initials = review.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 group">
      <CardHeader className="flex flex-row items-center space-x-4 pb-3 pt-4">
        <div className="relative transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-[-3deg]">
          <Avatar className="h-12 w-12 ring-2 ring-border ring-offset-background ring-offset-2">
            <AvatarImage src={review.avatarUrl || `https://placehold.co/48x48.png?text=${initials}`} alt={review.name} data-ai-hint="person avatar"/>
            <AvatarFallback className="text-base">{initials}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-1">
          <CardTitle className="text-lg font-headline">{review.name}</CardTitle>
          <StarRating rating={review.rating} size={16} />
        </div>
      </CardHeader>
      <CardContent className="pb-3 pt-0">
        <p className="text-foreground/80 italic text-sm leading-relaxed">"{review.comment}"</p>
      </CardContent>
      {review.date && (
        <CardFooter className="pt-0 pb-3">
            <p className="text-xs text-muted-foreground">{new Date(review.date).toLocaleDateString()}</p>
        </CardFooter>
      )}
    </Card>
  );
}
