import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import portraitImg from "@/assets/nour-el-img-1.jpeg"; // Correct import

export function About() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "6+", label: "Years Experience" },
    { value: "20+", label: "Projects Completed" },
    { value: "10+", label: "Happy Clients" },
  ];

  return (
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <img
                alt="Portrait"
                className="w-full h-full object-cover"
                src={portraitImg}
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary/30 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-sm font-medium text-primary mb-4 block tracking-wide uppercase">
              About Me
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
              Blending creativity with technical expertise
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 6 years of experience in UI/UX design and frontend development, I specialize in creating intuitive digital experiences that bridge the gap between user needs and business goals.
              </p>
              <p>
                My approach combines research-driven design thinking with clean, efficient code to deliver products that not only look beautiful but perform flawlessly. I believe that great design should be invisible, it should feel natural and effortless to users.
              </p>
              <p>
                When I'm not designing or coding, you'll find me exploring new design trends, contributing to open-source projects, or mentoring aspiring designers.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-border">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <span className="font-heading text-3xl md:text-4xl font-medium text-foreground">
                    {stat.value}
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
