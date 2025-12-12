import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Figma, 
  Code2, 
  Palette, 
  Smartphone, 
  Globe, 
  Layers,
  Sparkles,
  Zap
} from "lucide-react";

const skills = [
  {
    icon: Figma,
    name: "UI/UX Design",
    description: "Creating intuitive user experiences with Figma, Sketch, and Adobe XD",
  },
  {
    icon: Code2,
    name: "Frontend Development",
    description: "Building responsive interfaces with React, TypeScript, and modern CSS",
  },
  {
    icon: Palette,
    name: "Visual Design",
    description: "Crafting beautiful brand identities, icons, and illustration systems",
  },
  {
    icon: Smartphone,
    name: "Responsive Design",
    description: "Ensuring seamless experiences across all devices and screen sizes",
  },
  {
    icon: Globe,
    name: "Web Performance",
    description: "Optimizing for speed, accessibility, and search engine visibility",
  },
  {
    icon: Layers,
    name: "Design Systems",
    description: "Building scalable component libraries and design tokens",
  },
];

const tools = [
  "Figma", "React", "TypeScript", "Tailwind CSS", "Adobe Creative Suite",
  "Next.js", "Node.js", "Git", "Storybook", "Webflow"
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-primary mb-4 block tracking-wide uppercase">
            Skills & Tools
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
            What I bring to the table
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A versatile skill set combining design thinking with technical implementation 
            to deliver complete digital solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-background border border-border card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <skill.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-medium mb-2">{skill.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wide">
            Tools I Use Daily
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="px-4 py-2 rounded-full bg-background border border-border text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors duration-300 cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
