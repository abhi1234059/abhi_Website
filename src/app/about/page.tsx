
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from 'next/image';
import { Briefcase, Lightbulb, Users } from "lucide-react";

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

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-headline font-bold mb-4">About Me</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Learn more about my journey, skills, and passion for creating digital solutions.
        </p>
      </section>

      <section className="container mx-auto px-4">
        <Card className="overflow-hidden shadow-xl">
          <div className="md:flex">
            <div className="md:w-1/3 flex flex-col items-center justify-center p-8 bg-primary/5 rounded-l-lg">
              <Avatar className="h-48 w-48 shadow-xl ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
                <AvatarImage src="https://placehold.co/200x200.png" alt="Dankhara Abhi" data-ai-hint="professional portrait" />
                <AvatarFallback className="text-5xl bg-primary/10 text-primary">AD</AvatarFallback>
              </Avatar>
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
                Whether you're looking for a stunning website, captivating graphics, or immersive animations, I'm here to help you bring your vision to life. Let's collaborate and create something amazing together!
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="container mx-auto px-4 py-12">
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
    </div>
  );
}
