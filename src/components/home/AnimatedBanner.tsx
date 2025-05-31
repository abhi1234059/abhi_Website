
"use client";

import { Atom } from 'lucide-react'; // Changed from Zap to Atom

interface AnimatedBannerProps {
  name: string;
}

export function AnimatedBanner({ name }: AnimatedBannerProps) {
  return (
    <div className="relative py-8 flex flex-col items-center"> {/* Centering content vertically */}
      <div className="mb-6 animate-hero-image-pulse-float"> {/* Container for icon with animation */}
        <div className="w-32 h-32 rounded-full shadow-lg bg-accent/10 flex items-center justify-center">
          <Atom className="w-20 h-20 text-accent" /> {/* Changed from Zap to Atom */}
        </div>
      </div>
      <h1 className="text-5xl md:text-7xl font-headline font-bold animate-pulse-glow text-primary select-none text-center">
        {name.split("").map((char, index) => (
          <span
            key={index}
            className="inline-block transition-all duration-500 ease-out hover:scale-110 hover:text-accent"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-accent font-medium animate-fade-in-up animation-delay-100 text-center">
        Your Creative Digital Partner
      </p>
    </div>
  );
}
