export interface Metric {
  icon: React.ComponentType<any>;
  value: string;
  label: string;
}

export interface ApproachStep {
  step: string;
  description: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  metrics: Metric[];
  tags: string[];
  overview?: string;
  role?: string;
  timeline?: string;
  deliverables?: string;
  challenge?: string[];
  approach?: ApproachStep[];
  beforeAfter?: { before: string; after: string };
  outcome?: string;
  nextSteps?: string[];
  cta?: string;
}
