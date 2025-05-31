"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Me' },
  { href: '/connect', label: 'Connect' },
  { href: '/gallery', label: 'Gallery' },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex space-x-6 items-center">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'text-foreground/80 hover:text-primary transition-colors font-medium pb-1',
            pathname === link.href ? 'text-primary border-b-2 border-primary font-semibold' : 'border-b-2 border-transparent'
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
