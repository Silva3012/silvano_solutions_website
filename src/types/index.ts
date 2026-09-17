export interface ProblemItem {
  id: string;
  title: string;
  description: string;
}

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
  badge: 'POC' | 'Demonstration / POC' | 'AI / NLP Project';
  badgeType: 'poc' | 'demo' | 'nlp';
  description: string;
  demonstrates: string[];
  repoUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  serviceInterest: string;
  message: string;
}
