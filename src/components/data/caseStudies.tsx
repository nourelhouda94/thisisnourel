import { ArrowRight } from "lucide-react";
import { CaseStudy } from "../../types/caseStudy";

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Redesigning an Onboarding Flow for a SaaS Platform",
    excerpt: "I redesigned a complex onboarding flow for a SaaS platform, simplifying the steps, improving clarity, and reducing user friction.",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200&h=600&fit=crop",
    metrics: [
      { icon: ArrowRight, value: "Streamlined flow", label: "Reduced unnecessary steps" },
      { icon: ArrowRight, value: "Improved clarity", label: "Better instructions & hierarchy" },
      { icon: ArrowRight, value: "Faster completion", label: "Quicker first-time setup" },
    ],
    tags: ["UX Design", "Interaction Design", "A/B Testing"],

    // required fields for modal
    overview: "The client’s onboarding flow was long, unclear, and caused new users to drop off before completing the setup.",
    role: "UX/UI Design, UX Engineering, Flow Optimization",
    timeline: "1–2 weeks",
    deliverables: "Redesigned onboarding screens (web + mobile), UI components, and developer-ready notes.",
    challenge: [
      "Too many steps",
      "Unclear instructions",
      "Inconsistent UI patterns",
      "No clear sense of progress",
      "Friction during form inputs and choices",
    ],
    approach: [
      { step: "Evaluate the Existing Flow", description: "Mapped journey, captured screenshots, noted issues." },
      { step: "Simplify the Flow", description: "Merged steps, reordered, added helper text and progress stepper." },
      { step: "Redesign the UI", description: "Clean UI, clear hierarchy, mobile-friendly, fewer fields." },
    ],
    beforeAfter: { before: "Busy screens", after: "Simpler, clearer steps" },
    outcome: "Faster completion and better clarity for new users.",
    nextSteps: ["Add micro-animations", "Introduce tooltips", "Run usability tests"],
    cta: "Want to improve a key flow in your SaaS product? → Let’s work together",
  },
  {
    id: 2,
    title: "Creating a Lean Design System for a Multi-Feature Web App",
    excerpt: "I built a lightweight design system from scratch...",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=600&fit=crop",
    metrics: [
      { icon: ArrowRight, value: "Consistent UI", label: "Unified look & feel across pages" },
      { icon: ArrowRight, value: "Reusable components", label: "Faster development with modular parts" },
      { icon: ArrowRight, value: "Developer-ready structure", label: "Easier handoff and implementation" },
    ],
    tags: ["Design Systems", "Frontend Implementation", "UI Components"],

    overview: "Client had inconsistent UI patterns; I created a scalable design system...",
    role: "Design System Creation, UI Design, Frontend Alignment",
    timeline: "3–4 weeks",
    deliverables: "Component library, style tokens, documentation",
    challenge: ["No shared design language", "Inconsistent components", "Slow onboarding for devs"],
    approach: [
      { step: "Audit & Collect UI Elements", description: "Extracted components, identified duplicates." },
      { step: "Define Foundation", description: "Set colors, typography, spacing, grid, icon rules." },
      { step: "Build Component Library", description: "Modular, consistent components for devs." },
      { step: "Document System", description: "Usage rules, accessibility, dev notes." },
    ],
    beforeAfter: { before: "Disorganized UI", after: "Clean, consistent components" },
    outcome: "Faster dev handoff and reusable UI across pages.",
    nextSteps: ["Add motion guidelines", "Accessibility variants", "Build code-based library"],
    cta: "Need a clean, practical design system for your product? → Let’s build one together",
  },
];
export { caseStudies };