"use client";

interface AnimatedBannerProps {
  name: string;
}

export function AnimatedBanner({ name }: AnimatedBannerProps) {
  return (
    <div className="relative py-8">
      <h1 className="text-5xl md:text-7xl font-headline font-bold animate-pulse-glow text-primary select-none">
        {name.split("").map((char, index) => (
          <span 
            key={index}
            className="inline-block transition-all duration-500 ease-out hover:scale-110 hover:text-accent"
            style={{ animationDelay: `${index * 0.05}s` }}
            // No animate-fade-in-up as it causes layout shift on load
          >
            {char === " " ? "\u00A0" : char} 
          </span>
        ))}
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-accent font-medium animate-fade-in-up animation-delay-100">
        Your Creative Digital Partner
      </p>
    </div>
  );
}
