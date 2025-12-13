import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";

export function Hero() {
  return <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-24 pb-12">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="max-w-xl">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}>
              <span className="inline-block text-sm font-medium text-primary mb-6 tracking-wide uppercase">
                UI/UX Designer & Frontend Developer
              </span>
            </motion.div>

            <motion.h1 initial={{
            opacity: 0,
            y: 40
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1]
          }} className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-8">
              Crafting digital
              <br />
              experiences that
              <br />
              <span className="text-primary">inspire & engage</span>
            </motion.h1>

            <motion.p initial={{
            opacity: 0,
            y: 40
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1]
          }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
              I design and build beautiful, user-centered digital products that solve 
              real problems and create meaningful connections between brands and people.
            </motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 40
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1]
          }} className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="#work">View My Work</a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </motion.div>
          </div>

          {/* Right illustration */}
          <motion.div initial={{
          opacity: 0,
          x: 40
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1]
        }} className="hidden lg:flex justify-center items-center">
            <img alt="UI/UX Designer illustration showing creative design process" className="w-full max-w-lg object-contain" src={heroIllustration} />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1,
      duration: 0.6
    }} className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <motion.a href="#about" animate={{
        y: [0, 8, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.a>
      </motion.div>
    </section>;
}