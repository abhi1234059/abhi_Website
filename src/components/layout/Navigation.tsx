
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home', sectionId: '' },
  { href: '/#about', label: 'About Me', sectionId: 'about' },
  { href: '/#services', label: 'Services', sectionId: 'services' },
  { href: '/#gallery', label: 'Gallery', sectionId: 'gallery' },
  { href: '/#connect', label: 'Connect', sectionId: 'connect' },
];

export function Navigation() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash.substring(1));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
             if (entry.target.id) {
                // Update hash without triggering scroll if section is visible
                if (window.location.hash !== `#${entry.target.id}`) {
                    // history.replaceState(null, '', `#${entry.target.id}`); // This might be too aggressive
                }
                setActiveHash(entry.target.id);
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: "-50% 0px -50% 0px" } // Adjust threshold and rootMargin as needed
    );

    navLinks.forEach(link => {
      if (link.sectionId) {
        const element = document.getElementById(link.sectionId);
        if (element) observer.observe(element);
      }
    });
    
    // Initial check for hash
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      navLinks.forEach(link => {
        if (link.sectionId) {
          const element = document.getElementById(link.sectionId);
          if (element) observer.unobserve(element);
        }
      });
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  
  const isActive = (link: typeof navLinks[0]) => {
    if (link.href === '/') {
      // Home is active if no hash or pathname is just /
      return (pathname === '/' && !activeHash) || (pathname === '/' && !window.location.hash);
    }
    return activeHash === link.sectionId;
  };


  return (
    <nav className="flex space-x-6 items-center">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={(e) => {
            if (link.href.startsWith('/#')) {
              e.preventDefault();
              const targetId = link.href.substring(2);
              const targetElement = document.getElementById(targetId);
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                // Manually update hash if needed, or rely on scroll detection
                if(window.location.hash !== `#${targetId}`) {
                    history.pushState(null, '', `#${targetId}`);
                }
                setActiveHash(targetId);
              }
            } else {
                 setActiveHash(''); // For root home link
            }
          }}
          className={cn(
            'text-foreground/80 hover:text-primary transition-colors font-medium pb-1',
            isActive(link) ? 'text-primary border-b-2 border-primary font-semibold' : 'border-b-2 border-transparent'
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

    