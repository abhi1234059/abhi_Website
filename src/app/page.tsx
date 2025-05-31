
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedBanner } from '@/components/home/AnimatedBanner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Briefcase, Lightbulb, Users, Send, MessageSquare } from 'lucide-react';
import { ContactForm } from '@/components/connect/ContactForm';
import { ReviewsSection } from '@/components/connect/ReviewsSection';
import { PricingSection } from '@/components/home/PricingSection';

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
  src: string;
  alt: string;
  title: string;
  description: string;
  aiHint: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    src: 'https://placehold.co/600x400.png',
    alt: 'Abstract 3D render',
    title: 'Cosmic Swirls',
    description: 'A mesmerizing swirl of colors in 3D space.',
    aiHint: 'animated 3D abstract'
  },
  {
    id: '2',
    src: 'https://placehold.co/600x400.png',
    alt: 'Geometric shapes animation still',
    title: 'Geometric Dance',
    description: 'A snapshot from an animation featuring dancing geometric forms.',
    aiHint: 'dynamic 3D geometry'
  },
  {
    id: '3',
    src: 'https://placehold.co/600x400.png',
    alt: 'Character model',
    title: 'Stylized Character',
    description: 'A 3D model of a cartoon-style character.',
    aiHint: 'stylized 3D character model'
  },
  {
    id: '4',
    src: 'https://placehold.co/600x400.png',
    alt: 'Product visualization',
    title: 'Product Showcase',
    description: 'A realistic 3D render of a product concept.',
    aiHint: 'sleek 3D product'
  },
  {
    id: '5',
    src: 'https://placehold.co/600x400.png',
    alt: 'Animated 3D Concept',
    title: 'Motion Graphics Abstract',
    description: 'Concept for an animated 3D piece.',
    aiHint: 'complex 3D animation'
  },
  {
    id: '6',
    src: 'https://placehold.co/600x400.png',
    alt: 'Architectural visualization',
    title: 'Modern Villa',
    description: 'A 3D visualization of a modern architectural design.',
    aiHint: 'modern 3D architecture'
  },
];

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
            <div className="md:w-1/3 relative min-h-[300px] md:min-h-0 flex items-center justify-center p-4">
              <div className="w-full aspect-square max-w-[250px] md:max-w-full relative">
                <Image
                  src="https://placehold.co/300x300.png"
                  alt="AbhiConnect Logo"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg animate-image-float"
                  data-ai-hint="modern abstract logo"
                />
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
      
      {/* What I Offer Section */}
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
            <Card key={item.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative w-full aspect-video">
                <Image
                  src={item.src}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105 animate-image-pan-slow"
                  data-ai-hint={item.aiHint}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-headline font-semibold mb-2 text-primary">{item.title}</h3>
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
