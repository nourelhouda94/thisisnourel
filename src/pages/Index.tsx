import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { CaseStudies } from "@/components/portfolio/CaseStudies";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
