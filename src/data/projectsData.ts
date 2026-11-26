import type { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'hair-business-platform',
    category: 'Business Application',
    title: 'Hair Business Platform',
    badge: 'Proof of concept',
    badgeType: 'poc',
    description: 'A custom digital platform designed around the operational needs of a growing hair business, addressing order tracking, inventory visibility, and client communication.',
    summary: 'Order tracking, inventory visibility and client communication in one platform for a growing hair business.',
    demonstrates: [
      'Full-stack development',
      'Business analysis',
      'Application architecture',
      'Business workflow thinking',
    ],
  },
  {
    id: 'south-african-language-nlp',
    category: 'AI / NLP',
    title: 'South African Language NLP',
    badge: 'Research project',
    badgeType: 'nlp',
    description: 'A natural language processing (NLP) initiative working with isiXhosa language data: computational linguistics, text processing, and building language resources for African languages.',
    summary: 'isiXhosa language data and text processing: groundwork for AI that works in South African languages.',
    demonstrates: [
      'AI and machine-learning pipelines',
      'Natural language processing (NLP)',
      'Data engineering',
      'Python development',
    ],
  },
  {
    id: 'business-operations-automation',
    category: 'Business Automation',
    title: 'Business Operations Automation',
    badge: 'Demonstration',
    badgeType: 'demo',
    description: 'A working demonstration showing how repetitive administrative workflows can be digitised, integrated, and automated to eliminate manual data entry errors.',
    summary: 'Repetitive admin workflows digitised and connected, so data moves automatically instead of being typed in twice.',
    demonstrates: [
      'Administrative digitisation',
      'Connecting systems through APIs',
      'Automated data routing',
      'Operational efficiency',
    ],
  },
];
