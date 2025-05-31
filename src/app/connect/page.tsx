import { ContactForm } from '@/components/connect/ContactForm';
import { ReviewsSection } from '@/components/connect/ReviewsSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Send } from 'lucide-react';

export default function ConnectPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-headline font-bold mb-4">Connect With Me</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have a question, project idea, or just want to say hi? I'd love to hear from you!
        </p>
      </section>

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
    </div>
  );
}
