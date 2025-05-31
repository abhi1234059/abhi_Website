import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Linkedin, Youtube, MessageSquare } from "lucide-react"; // Assuming Youtube is a social link.

const socialLinks = [
  { name: "WhatsApp", Icon: MessageSquare, href: "https://wa.me/918320446826", color: "text-green-500 hover:text-green-600" },
  { name: "Instagram", Icon: Instagram, href: "https://instagram.com/yourprofile", color: "text-pink-600 hover:text-pink-700" },
  { name: "Facebook", Icon: Facebook, href: "https://facebook.com/yourprofile", color: "text-blue-600 hover:text-blue-700" },
  { name: "LinkedIn", Icon: Linkedin, href: "https://linkedin.com/in/yourprofile", color: "text-sky-700 hover:text-sky-800" },
];

export function SocialLinks() {
  return (
    <div className="flex justify-center space-x-4">
      {socialLinks.map((link) => (
        <Button key={link.name} variant="ghost" size="icon" asChild className="rounded-full transition-transform hover:scale-110">
          <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name} className={link.color}>
            <link.Icon className="w-6 h-6" />
          </a>
        </Button>
      ))}
    </div>
  );
}
