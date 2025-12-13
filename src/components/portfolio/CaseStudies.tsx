// src/components/portfolio/CaseStudies.tsx
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CaseStudyModal } from "./CaseStudyModal";
import { CaseStudy } from "../../types/caseStudy";
import { caseStudies } from "../data/caseStudies";

export function CaseStudies() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (study: CaseStudy) => {
    setSelectedStudy(study);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStudy(null);
  };

  return (
    <section id="case-studies" className="py-24 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-primary mb-4 block tracking-wide uppercase">
            Case Studies
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
            Deep dives into my process
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Explore detailed breakdowns of how I approach complex design challenges and deliver measurable results.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-background rounded-3xl overflow-hidden border border-border card-hover"
            >
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-heading text-2xl md:text-3xl font-medium mb-4 group-hover:text-primary transition-colors duration-300">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">{study.excerpt}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="flex justify-center mb-2">
                          <metric.icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="block font-heading text-base sm:text-2xl font-medium">{metric.value}</span>
                        <span className="text-sm sm:text-xs text-muted-foreground">{metric.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Read Case Study Button */}
                  <Button
                    variant="outline"
                    className="w-fit group/btn"
                    onClick={() => openModal(study)}
                  >
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal */}
      <CaseStudyModal isOpen={isModalOpen} onClose={closeModal} study={selectedStudy} />
    </section>
  );
}
