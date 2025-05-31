
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Package, Zap, Gem } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PackageFeature {
  text: string;
}

interface PricingPackage {
  id: string;
  icon: React.ReactNode;
  title: string;
  price: string;
  pricePeriod?: string;
  description: string;
  features: PackageFeature[];
  useCase: string;
  ctaText: string;
  ctaLink: string;
  isPopular?: boolean;
  cardClass?: string;
  titleClass?: string;
  badgeText?: string;
}

const packages: PricingPackage[] = [
  {
    id: "basic",
    icon: <Package className="w-10 h-10 mb-4 text-primary" />,
    title: "BASIC PACKAGE",
    price: "₹500",
    description: "Perfect for individuals or small startups who need a simple presence online.",
    features: [
      { text: "1 Page Website (Home)" },
      { text: "Responsive Design (Mobile + Desktop)" },
      { text: "Smooth Animations (Basic)" },
      { text: "Contact Button (Connect System)" },
      { text: "Fast Loading" },
      { text: "No Photo Required" },
    ],
    useCase: "Visiting card type website, service introduction.",
    ctaText: "Get Started",
    ctaLink: "/#connect",
    cardClass: "border-gray-300",
  },
  {
    id: "standard",
    icon: <Zap className="w-10 h-10 mb-4 text-orange-500" />,
    title: "STANDARD PACKAGE",
    price: "₹1000",
    description: "Best for professionals & small businesses needing more space and effects.",
    features: [
      { text: "3 Pages Website (Home, About, Contact)" },
      { text: "Modern Design with 3D Effects" },
      { text: "Animated Sections (scroll, hover, transitions)" },
      { text: "Custom Connect System (Form to Email)" },
      { text: "Rating & Review Section" },
      { text: "Fast & Secure" },
      { text: "No Photo Required" },
    ],
    useCase: "Freelancer website, personal portfolio, service-based business.",
    ctaText: "Choose Standard",
    ctaLink: "/#connect",
    isPopular: true,
    cardClass: "border-primary shadow-primary/30",
    titleClass: "text-primary",
    badgeText: "POPULAR"
  },
  {
    id: "premium",
    icon: <Gem className="w-10 h-10 mb-4 text-purple-500" />,
    title: "PREMIUM PACKAGE",
    price: "₹1500",
    description: "Advanced website with full features, perfect for serious online branding.",
    features: [
      { text: "5+ Pages Website (Home, About, Services, Portfolio, Contact, etc.)" },
      { text: "Full 3D Animations + Best UI Effects" },
      { text: "Email Notifications for Form Submissions" },
      { text: "Full Connect System (Live messages/email alerts)" },
      { text: "Ratings, Reviews, and Feedback System" },
      { text: "Loading Animations & Effects" },
      { text: "Fully Responsive + Fast Performance" },
      { text: "No Photo Required" },
    ],
    useCase: "Business showcase, brand site, high-end personal website.",
    ctaText: "Go Premium",
    ctaLink: "/#connect",
    cardClass: "border-gray-300",
  },
];

export function PricingSection() {
  return (
    <section id="packages" className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-headline font-bold mb-4">Website Packages</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect package that suits your needs and budget.
        </p>
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {packages.map((pkg) => (
          <Card 
            key={pkg.id} 
            className={`flex flex-col relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 ${pkg.cardClass} ${pkg.isPopular ? 'border-2 scale-105 lg:scale-110 z-10 bg-card' : 'bg-card/80 backdrop-blur-sm'}`}
          >
            {pkg.isPopular && pkg.badgeText && (
              <Badge variant="default" className="absolute top-0 right-0 -mt-3 -mr-3 rotate-[15deg] scale-110 px-3 py-1 text-sm bg-primary text-primary-foreground shadow-lg">
                {pkg.badgeText}
              </Badge>
            )}
            <CardHeader className="items-center text-center pt-8">
              {pkg.icon}
              <CardTitle className={`font-headline text-2xl ${pkg.titleClass || 'text-foreground'}`}>{pkg.title}</CardTitle>
              <p className="text-4xl font-bold text-primary mt-2">{pkg.price}</p>
              <CardDescription className="mt-2 h-12">{pkg.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-3 pt-4">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider text-center">Features:</h4>
              <ul className="space-y-2">
                {pkg.features.map((feature) => (
                  <li key={feature.text} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground/90">{feature.text}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider text-center mb-1">Use Case:</h4>
                <p className="text-sm text-muted-foreground text-center italic">{pkg.useCase}</p>
              </div>
            </CardContent>
            <CardFooter className="mt-auto p-6">
              <Button asChild size="lg" className={`w-full group-hover:scale-105 transition-transform ${pkg.isPopular ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'}`}>
                <a href={pkg.ctaLink}>{pkg.ctaText}</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
