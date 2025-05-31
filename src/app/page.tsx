
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedBanner } from '@/components/home/AnimatedBanner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Briefcase, Lightbulb, Users, Send, MessageSquare, Star, Network, Package, Zap, Gem, CheckCircle } from 'lucide-react';
import { ContactForm } from '@/components/connect/ContactForm';
import { ReviewsSection } from '@/components/connect/ReviewsSection';
import { PricingSection } from '@/components/home/PricingSection';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: "web",
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: "Website Design & Development",
    description: "Crafting modern, responsive websites tailored to your needs. From simple portfolios to complex web applications.",
  },
  {
    id: "graphics",
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: "Graphic Design & 3D Animation",
    description: "Eye-catching graphic designs, logos, branding materials, and immersive 3D animations that bring your ideas to life.",
  },
  {
    id: "digital",
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Digital Help & Consultation",
    description: "Providing expert advice and hands-on support for your digital challenges, social media strategies, and online presence.",
  },
];

interface GalleryItem {
  id: string;
  src?: string;
  alt?: string;
  title: string;
  description: string;
  aiHint?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    src: 'https://placehold.co/600x400.png',
    alt: 'Abstract 3D render',
    title: 'Cosmic Swirls',
    description: 'An ethereal dance of nebulae and stardust, rendered in vibrant 3D to capture the awe of deep space.',
    aiHint: 'animated 3D abstract'
  },
  {
    id: '2',
    src: 'https://placehold.co/600x400.png',
    alt: 'Geometric shapes animation still',
    title: 'Geometric Dance',
    description: 'Sharp lines and bold shapes come alive in this dynamic animation still, showcasing precision and modern aesthetics.',
    aiHint: 'dynamic 3D geometry'
  },
  {
    id: '3',
    src: 'https://placehold.co/600x400.png',
    alt: 'Character model',
    title: 'Stylized Character',
    description: 'A unique 3D character model, crafted with a distinct stylized look, ready to bring narratives to life.',
    aiHint: 'stylized 3D character model'
  },
  {
    id: '4',
    src: 'https://placehold.co/600x400.png',
    alt: 'Product visualization',
    title: 'Product Showcase',
    description: 'Sleek lines and photorealistic textures highlight this 3D product visualization, perfect for impactful marketing.',
    aiHint: 'sleek 3D product'
  },
  {
    id: '5',
    src: 'https://placehold.co/600x400.png',
    alt: 'Animated 3D Concept',
    title: 'Motion Graphics Abstract',
    description: 'A captivating abstract piece exploring the interplay of light, form, and movement in animated 3D.',
    aiHint: 'complex 3D animation'
  },
  {
    id: '6',
    src: 'https://placehold.co/600x400.png',
    alt: 'Architectural visualization',
    title: 'Modern Villa',
    description: 'Experience architectural elegance with this detailed 3D visualization of a contemporary villa, blending luxury and design.',
    aiHint: 'modern 3D architecture'
  },
];

const getInitials = (title: string): string => {
  const words = title.split(' ').filter(word => word.trim() !== '');
  if (words.length === 0) {
    return '??';
  }
  if (words.length === 1) {
    return words[0].substring(0, 2).toUpperCase();
  }
  return (words[0][0] + (words[1] ? words[1][0] : '')).toUpperCase();
};


export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl shadow-lg overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedBanner name="Dankhara Abhi" />
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-foreground/80 animate-fade-in-up animation-delay-300">
            Welcome to my personal connect platform! I offer services in graphics, animation, and digital assistance at affordable prices.
            Need help with your project? Let's talk!
          </p>
          <div className="mt-10 animate-fade-in-up animation-delay-500">
            <Button asChild size="lg" className="group bg-primary hover:bg-accent transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              <Link href="/#connect">
                Contact Me <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-12 space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-headline font-bold mb-4">About Me</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about my journey, skills, and passion for creating digital solutions.
          </p>
        </div>
        <Card className="overflow-hidden shadow-xl">
          <div className="md:flex">
            <div className="md:w-1/3 flex flex-col items-center justify-center p-8 bg-primary/5 rounded-l-lg">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 flex items-center justify-center animate-logo-sway-float">
                  <div className="w-40 h-40 rounded-full shadow-2xl bg-accent/10 flex items-center justify-center ring-4 ring-accent/20 ring-offset-4 ring-offset-background">
                    <Network className="w-24 h-24 text-accent" />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 p-8 md:p-12">
              <h2 className="text-3xl font-headline font-semibold text-primary mb-6">Hi, I'm Abhi Dankhara</h2>
              <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
                I am a passionate and creative individual specializing in web development, graphic design, and 3D animation. With a keen eye for detail and a commitment to excellence, I strive to deliver high-quality digital solutions that not only meet but exceed client expectations.
              </p>
              <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
                My journey into the digital world began with a fascination for how technology can transform ideas into tangible realities. Over the years, I've honed my skills in various technologies and design principles, always eager to learn and adapt to the ever-evolving digital landscape.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                "Dankhara Abhi ek personal connect service platform chhe jethi tame saral rite mane message kari shako, rating aapi shako ane contact ma rahi shako. Hu sav thi ochha daam ma graphic, animation, ane digital help provide karu chu. Tamne koi help joiye? Toh message kari ne vato karie!"
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* What I Offer Section (Services) */}
      <section id="services" className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-headline font-semibold text-center mb-10">What I Offer</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <CardHeader className="items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-3">
                    {service.icon}
                </div>
                <CardTitle className="font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Website Packages Section */}
      <PricingSection />

      {/* Gallery Section */}
      <section id="gallery" className="container mx-auto px-4 py-12 space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-headline font-bold mb-4">My Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my 3D work, animations, and graphic design projects.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <Card key={item.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group flex flex-col items-center text-center">
              <div className="py-6 px-4"> {/* Padding for the avatar */}
                <div
                  className="w-32 h-32 rounded-full border-[4px] border-[#d6bcfa] shadow-lg bg-[#f1f1f1] text-[#7b2cbf] flex items-center justify-center text-3xl font-bold group-hover:scale-110 transition-transform duration-300 ease-in-out"
                >
                  {getInitials(item.title)}
                </div>
              </div>
              <CardContent className="pb-6 px-4 pt-0 flex-grow w-full"> {/* Ensure content is below avatar */}
                <h3 className="text-xl font-headline font-semibold mb-1 text-primary">{item.title}</h3>
                <p className="text-sm text-foreground/80">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="container mx-auto px-4 py-12 space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-headline font-bold mb-4">Connect With Me</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question, project idea, or just want to say hi? I'd love to hear from you!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center">
                <Send className="w-6 h-6 mr-2 text-primary" /> Send a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
          <div className="space-y-8">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center">
                  <MessageSquare className="w-6 h-6 mr-2 text-green-500" /> Direct Contact
                </CardTitle>
                <CardDescription>
                  Prefer a more direct approach?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white">
                  <a href="https://wa.me/918320446826" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="w-5 h-5 mr-2" /> Chat on WhatsApp
                  </a>
                </Button>
                 <p className="text-sm text-muted-foreground text-center">
                  Or email me at: <a href="mailto:sitequickpersonal@gmail.com" className="text-primary hover:underline">sitequickpersonal@gmail.com</a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <ReviewsSection />
      </section>
    </div>
  );
}
