import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
const socialLinks = [{
  icon: Linkedin,
  href: "#",
  label: "LinkedIn"
}, {
  icon: Github,
  href: "#",
  label: "GitHub"
}, {
  icon: Twitter,
  href: "#",
  label: "Twitter"
}];
export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon."
    });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };
  return <section id="contact" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Info */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1]
        }}>
            <span className="text-sm font-medium text-primary mb-4 block tracking-wide uppercase">
              Get in Touch
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
              Let's create something amazing together
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
              Have a project in mind or just want to chat? I'm always open to discussing 
              new opportunities and creative ideas.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Email</span>
                  <a className="block font-medium hover:text-primary transition-colors" href="mailto:nourelhouda.el@gmail.com">
                    nourelhouda.el@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Location</span>
                  <span className="block font-medium">Munich, Germany</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map(social => <a key={social.label} href={social.href} aria-label={social.label} className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300">
                  <social.icon className="h-5 w-5" />
                </a>)}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1]
        }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" name="name" placeholder="Your name" required className="h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" required className="h-12 rounded-xl" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" name="subject" placeholder="Project inquiry" required className="h-12 rounded-xl" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" name="message" placeholder="Tell me about your project..." required rows={6} className="rounded-xl resize-none" />
              </div>
              <Button type="submit" size="xl" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
}