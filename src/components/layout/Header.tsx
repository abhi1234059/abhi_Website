
import Link from 'next/link';
import { Navigation } from './Navigation';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

export function Header() {
  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-headline font-bold text-primary hover:text-primary/80 transition-colors">
          AbhiConnect
        </Link>
        <div className="hidden md:block">
          <Navigation />
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] bg-card p-6">
              <nav className="flex flex-col space-y-4">
                <SheetClose asChild>
                  <Link href="/" className="text-lg hover:text-primary transition-colors">Home</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/#about" className="text-lg hover:text-primary transition-colors">About</Link>
                </SheetClose>
                 <SheetClose asChild>
                  <Link href="/#services" className="text-lg hover:text-primary transition-colors">Services</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/#gallery" className="text-lg hover:text-primary transition-colors">Gallery</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/#connect" className="text-lg hover:text-primary transition-colors">Connect</Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

    