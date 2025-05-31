import { AnimatedBanner } from '@/components/home/AnimatedBanner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Palette, Rocket } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="text-center py-12 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-lg overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedBanner name="Dankhara Abhi" />
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-foreground/80 animate-fade-in-up animation-delay-300">
            Welcome to my personal connect platform! I offer services in graphics, animation, and digital assistance at affordable prices.
            Need help with your project? Let's talk!
          </p>
          <div className="mt-10 animate-fade-in-up animation-delay-500">
            <Button asChild size="lg" className="group bg-primary hover:bg-accent transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              <Link href="/connect">
                Contact Me <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-headline font-semibold text-center mb-12">My Core Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceHighlight
            icon={<Palette className="w-12 h-12 text-primary" />}
            title="Graphic Design"
            description="Creative logos, branding, and visuals that tell your story."
          />
          <ServiceHighlight
            icon={<Rocket className="w-12 h-12 text-primary" />}
            title="3D Animation"
            description="Engaging 3D animations and motion graphics for your projects."
          />
          <ServiceHighlight
            icon={<MessageCircle className="w-12 h-12 text-primary" />}
            title="Digital Help"
            description="Website assistance, tech support, and general digital solutions."
          />
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-12">
        <Card className="bg-card shadow-xl overflow-hidden">
            <div className="md:flex">
                <div className="md:w-1/2">
                    <Image
                        src="https://placehold.co/600x400.png"
                        alt="Abhi Dankhara working"
                        width={600}
                        height={400}
                        className="object-cover w-full h-64 md:h-full"
                        data-ai-hint="developer workspace"
                    />
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <CardHeader>
                        <CardTitle className="text-3xl font-headline text-primary">About Dankhara Abhi</CardTitle>
                        <CardDescription className="text-lg mt-2 text-foreground/80">
                            Passionate about creating stunning visuals and seamless digital experiences.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-foreground/90 mb-6">
                            "Dankhara Abhi ek personal connect service platform chhe jethi tame saral rite mane message kari shako, rating aapi shako ane contact ma rahi shako. Hu sav thi ochha daam ma graphic, animation, ane digital help provide karu chu. Tamne koi help joiye? Toh message kari ne vato karie!"
                        </p>
                        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                            <Link href="/about">
                                Learn More About Me
                            </Link>
                        </Button>
                    </CardContent>
                </div>
            </div>
        </Card>
    </section>

    </div>
  );
}

interface ServiceHighlightProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceHighlight({ icon, title, description }: ServiceHighlightProps) {
  return (
    <Card className="text-center p-6 hover:shadow-2xl transition-shadow duration-300">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-headline font-semibold mb-2">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </Card>
  );
}

// Add this to your tailwind.config.js if you want to use animation-delay utilities
// plugins: [
//   function ({ addUtilities }) {
//     const newUtilities = {};
//     const delays = ['100', '200', '300', '400', '500', '700', '1000'];
//     delays.forEach(delay => {
//       newUtilities[`.animation-delay-${delay}`] = {
//         animationDelay: `${delay}ms`,
//       };
//     });
//     addUtilities(newUtilities, ['responsive', 'hover']);
//   },
// ],
// Make sure to define 'fade-in-up' animation in keyframes in tailwind.config.js
// keyframes: {
//   'fade-in-up': {
//     '0%': { opacity: '0', transform: 'translateY(20px)' },
//     '100%': { opacity: '1', transform: 'translateY(0)' },
//   },
// },
// animation: {
//   'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
// },
