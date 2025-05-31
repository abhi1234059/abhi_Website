
"use client";

import Image from 'next/image'; // Added import for Image component

interface AnimatedBannerProps {
  name: string;
}

export function AnimatedBanner({ name }: AnimatedBannerProps) {
  return (
    <div className="relative py-8 flex flex-col items-center"> {/* Centering content vertically */}
      <div className="mb-6 animate-hero-image-pulse-float"> {/* Container for logo with animation */}
        <Image
          src="https://placehold.co/120x120.png" 
          alt="AbhiConnect Logo Placeholder"
          width={120}
          height={120}
          className="rounded-full shadow-lg" 
          data-ai-hint="modern abstract logo"
        />
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
