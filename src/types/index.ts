export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  typicalProblems: string[];
  whatWeDeliver: string[];
}

export interface AudienceItem {
  id: string;
  title: string;
  description: string;
}

export interface ProcessStage {
  step: string;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  category: string;
  title: string;
  badge: 'Public beta' | 'Proof of concept' | 'Demonstration' | 'Research project';
  badgeType: 'beta' | 'poc' | 'demo' | 'nlp';
  description: string;
  /** One-line outcome used on the homepage's compact cards. */
  summary: string;
  /** What the project does, in business terms (shown on the Work page). */
  outcomes: string[];
  /** Live destination (opens in a new tab). Only link to something real and public. */
  link?: { href: string; label: string };
  /** Real screenshot of the project; never a mock-up or stock image. */
  image?: { src: string; alt: string; width: number; height: number };
  /** Shown as a wide card spanning the grid, with the image beside the text. */
  featured?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  serviceInterest: string;
  message: string;
}
