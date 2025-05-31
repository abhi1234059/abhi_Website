
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home', sectionId: '' },
  { href: '/#about', label: 'About Me', sectionId: 'about' },
  { href: '/#services', label: 'Services', sectionId: 'services' },
  { href: '/#packages', label: 'Packages', sectionId: 'packages' },
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
      { threshold: 0.3, rootMargin: "-40% 0px -40% 0px" } // Adjust threshold and rootMargin
    );

    navLinks.forEach(link => {
      if (link.sectionId) {
        const element = document.getElementById(link.sectionId);
        if (element) observer.observe(element);
      }
    });
    
    // Initial check for hash
    handleHashChange(); // Call on mount
    if (pathname === '/' && !window.location.hash) { // If on homepage and no hash, set activeHash to empty for 'Home' link
        setActiveHash('');
    }


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
  }, [pathname]); // Re-run effect if pathname changes, useful for initial load on a specific hash path.
  
  const isActive = (link: typeof navLinks[0]) => {
    if (link.href === '/') { // Home link
      return (pathname === '/' && !activeHash) ;
    }
    // For other section links, activeHash should match sectionId
    // and we should be on the homepage (pathname === '/')
    return pathname === '/' && activeHash === link.sectionId;
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
                // Calculate offset to account for sticky header
                const headerOffset = 80; // Adjust this value based on your header's height
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                if(window.location.hash !== `#${targetId}`) {
                    history.pushState(null, '', `#${targetId}`);
                }
                setActiveHash(targetId);
              }
            } else { // For root home link or other pages
                 setActiveHash(''); 
                 if (pathname !== '/') {
                    // Allow default navigation if not already on homepage
                 } else {
                    // If on homepage, scroll to top
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth'});
                    history.pushState(null, '', '/');
                 }
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
