import { SocialLinks } from '@/components/shared/SocialLinks';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card border-t border-border/50 mt-12 py-8">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <SocialLinks />
        <p className="text-sm mt-4">
          &copy; {currentYear} DankharaAbhi3D.com by Abhi Dankhara. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Contact: <a href="mailto:sitequickpersonal@gmail.com" className="hover:text-primary">sitequickpersonal@gmail.com</a> | Mobile: <a href="tel:+918320446826" className="hover:text-primary">8320446826</a>
        </p>
      </div>
    </footer>
  );
}
