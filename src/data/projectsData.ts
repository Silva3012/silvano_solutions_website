import type { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'hair-business-platform',
    category: 'Business Application',
    title: 'Hair Business Platform',
    badge: 'POC',
    badgeType: 'poc',
    description: 'A custom digital platform designed around the operational needs of a growing hair business, addressing order tracking, inventory visibility, and client communication.',
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
    badge: 'AI / NLP Project',
    badgeType: 'nlp',
    description: 'A natural language processing initiative involving isiXhosa language data, focusing on computational linguistics, tokenization, and resource development for African languages.',
    demonstrates: [
      'AI / ML pipelines',
      'Natural Language Processing (NLP)',
      'Data engineering',
      'Python development',
    ],
  },
  {
    id: 'business-operations-automation',
    category: 'Business Automation',
    title: 'Business Operations Automation',
    badge: 'Demonstration / POC',
    badgeType: 'demo',
    description: 'A working demonstration showing how repetitive administrative workflows can be digitised, integrated, and automated to eliminate manual data entry errors.',
    demonstrates: [
      'Administrative digitisation',
      'API & webhook integration',
      'Automated data routing',
      'Operational efficiency',
    ],
  },
];
