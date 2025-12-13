import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/nourelhouda-el/",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/nourelhouda94",
    label: "GitHub",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/manragvp",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        toast({
          title: "Submission failed",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-sm font-medium text-primary mb-4 block uppercase tracking-wide">
              Get in Touch
            </span>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
              Let's create something amazing together
            </h2>

            <p className="text-muted-foreground max-w-md mb-10">
              Have a project in mind or just want to chat? I'm always open to
              discussing new opportunities and creative ideas.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Email</span>
                  <a
                    href="mailto:nourelhouda.el@gmail.com"
                    className="block font-medium hover:text-primary transition-colors"
                  >
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

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-foreground hover:text-foreground transition"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Input
                  name="name"
                  placeholder="Your name"
                  required
                  className="h-12 rounded-xl"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="h-12 rounded-xl"
                />
              </div>

              <Input
                name="subject"
                placeholder="Project inquiry"
                required
                className="h-12 rounded-xl"
              />

              <Textarea
                name="message"
                placeholder="Tell me about your project..."
                rows={6}
                required
                className="rounded-xl resize-none"
              />

              {/* Honeypot (anti-spam) */}
              <input type="text" name="_gotcha" className="hidden" />

              <Button
                type="submit"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
