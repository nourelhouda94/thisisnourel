import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform Redesign",
    category: "UI/UX Design",
    description: "Rebuilt the full e-commerce flow with senior-friendly UX, product discoverability, and cleaner navigation using WooCommerce.",
    image: "../src/components/portfolio/img/rgd.png",
    tags: ["Figma", "Wordpress", "WooCommerce"],
  },
  {
    id: 2,
    title: "Data Intelligence Dashboard",
    category: "Frontend Development",
    description: "Created a dark-mode dashboard to visualize corporate sentiment using rich data filters and charts. Intuitive, component-based layout with advanced filtering.",
    image: "../src/components/portfolio/img/nostradamus.png",
    tags: ["Figma", "Prototyping", "User Research"],
  },
  {
    id: 3,
    title: "Healthcare Branding & Website",
    category: "UI/UX Design",
    description: "Redesigned the brand and website to improve trust and accessibility in the pharmaceutical space. Clean healthcare-focused UI and optimized mobile experience.",
    image: "../src/components/portfolio/img/rxfarma.png",
    tags: ["Figma", "Photoshop/Illustrator", "User Research"],
  },
  {
    id: 4,
    title: "Service Booking Web Application",
    category: "UI/UX Design & Frontend Development",
    description: "Designed and built a responsive web app to simplify booking services with trainers and professionals. Focused on mobile-first UX, intuitive navigation, and real-time reservation management. Delivered both client-facing interfaces and a back-office dashboard for providers.",
    image: "../src/components/portfolio/img/bookme.png",
    tags: ["Figma", "Next.js", "Tailwind"],
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-sm font-medium text-primary mb-4 block tracking-wide uppercase">
              Selected Work
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
              Featured Projects
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            A curated selection of projects showcasing my approach to design and development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                
                {/* Hover Arrow */}
                {/* <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="h-5 w-5 text-foreground" />
                </div> */}
              </div>

              {/* Content */}
              <span className="text-sm text-primary font-medium">{project.category}</span>
              <h3 className="font-heading text-2xl font-medium mt-2 mb-3 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
