import { Star, StarHalf } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  totalStars?: number;
  size?: number;
  className?: string;
  iconClassName?: string;
}

export function StarRating({
  rating,
  totalStars = 5,
  size = 20,
  className,
  iconClassName = "text-yellow-400",
}: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={cn("flex items-center space-x-1", className)}>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} fill="currentColor" style={{ width: size, height: size }} className={cn(iconClassName)} />
      ))}
      {hasHalfStar && <StarHalf key="half" fill="currentColor" style={{ width: size, height: size }} className={cn(iconClassName)} />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} style={{ width: size, height: size }} className={cn(iconClassName, "opacity-30")} />
      ))}
    </div>
  );
}
