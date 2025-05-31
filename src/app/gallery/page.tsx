import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

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
    aiHint: 'abstract 3D'
  },
  {
    id: '2',
    src: 'https://placehold.co/600x400.png',
    alt: 'Geometric shapes animation still',
    title: 'Geometric Dance',
    description: 'A snapshot from an animation featuring dancing geometric forms.',
    aiHint: 'geometric animation'
  },
  {
    id: '3',
    src: 'https://placehold.co/600x400.png',
    alt: 'Character model',
    title: 'Stylized Character',
    description: 'A 3D model of a cartoon-style character.',
    aiHint: '3D character'
  },
  {
    id: '4',
    src: 'https://placehold.co/600x400.png',
    alt: 'Product visualization',
    title: 'Product Showcase',
    description: 'A realistic 3D render of a product concept.',
    aiHint: 'product render'
  },
  {
    id: '5',
    src: 'https://placehold.co/600x400.png',
    alt: 'Animated logo concept',
    title: 'Logo in Motion',
    description: 'Concept for an animated brand logo.',
    aiHint: 'animated logo'
  },
  {
    id: '6',
    src: 'https://placehold.co/600x400.png',
    alt: 'Architectural visualization',
    title: 'Modern Villa',
    description: 'A 3D visualization of a modern architectural design.',
    aiHint: 'architecture 3D'
  },
];

export default function GalleryPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-headline font-bold mb-4">My Gallery</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A showcase of my 3D work, animations, and graphic design projects.
        </p>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <Card key={item.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative w-full aspect-video">
                <Image
                  src={item.src}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
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
    </div>
  );
}
