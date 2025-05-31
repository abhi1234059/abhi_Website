"use client";

import { useState } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarInputProps {
  value: number;
  onChange: (value: number) => void;
  totalStars?: number;
  size?: number;
  className?: string;
  iconClassName?: string;
  hoverIconClassName?: string;
}

export function StarInput({
  value,
  onChange,
  totalStars = 5,
  size = 24,
  className,
  iconClassName = "text-muted-foreground",
  hoverIconClassName = "text-yellow-400",
}: StarInputProps) {
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarClick = (rating: number) => {
    onChange(rating);
  };

  const handleStarHover = (rating: number) => {
    setHoverRating(rating);
  };

  return (
    <div 
      className={cn("flex items-center space-x-1 cursor-pointer", className)}
      onMouseLeave={() => setHoverRating(0)}
      aria-label={`Rate ${value} out of ${totalStars} stars`}
    >
      {[...Array(totalStars)].map((_, i) => {
        const starValue = i + 1;
        const isFilled = starValue <= (hoverRating || value);
        return (
          <button
            type="button"
            key={starValue}
            onClick={() => handleStarClick(starValue)}
            onMouseEnter={() => handleStarHover(starValue)}
            className="focus:outline-none"
            aria-label={`Set rating to ${starValue} star${starValue > 1 ? 's' : ''}`}
          >
            <Star
              style={{ width: size, height: size }}
              className={cn(
                'transition-colors',
                isFilled ? hoverIconClassName : iconClassName,
                isFilled && 'fill-current'
              )}
            />
          </button>
        );
      })}
    </div>
  );
}
