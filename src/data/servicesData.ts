import type { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'application-development',
    title: 'Application Development',
    shortDescription: 'Custom web and mobile applications designed around business processes, customers and goals.',
    detailedDescription: 'We design and develop bespoke software applications that fit your specific operational models. Rather than forcing your business into rigid off-the-shelf templates, we build targeted applications that streamline customer interactions and internal operations.',
    typicalProblems: [
      'Off-the-shelf software does not fit your operational workflow',
      'Customer-facing interactions are fragmented across spreadsheets and messages',
      'Existing systems cannot handle higher order volumes or user activity',
    ],
    whatWeDeliver: [
      'Custom web applications and client portals',
      'Internal operational dashboards and admin tools',
      'Business interfaces that work well on phones and desktops',
      'Reliable back-end systems and data structures',
    ],
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    shortDescription: 'Practical AI implementations integrated into real business workflows — from intelligent automation to AI-powered applications.',
    detailedDescription: 'Practical AI is not about hype or buzzwords; it is about solving specific, time-consuming business bottlenecks. We implement AI and machine learning capabilities that plug directly into existing business processes to reduce manual overhead.',
    typicalProblems: [
      'High volume of unstructured emails, documents, or support queries',
      'Time-consuming manual sorting, document processing and drafting',
      'Proprietary business knowledge trapped in disparate documents and drives',
    ],
    whatWeDeliver: [
      'Systems that read documents and pull out the information you need',
      'Language AI for South African languages (in development)',
      'Assistants that find answers in your internal documents',
      'Automatic sorting and routing of incoming requests',
    ],
  },
  {
    id: 'automation-integrations',
    title: 'Automation & Integrations',
    shortDescription: 'Connect systems, eliminate repetitive tasks and create workflows that reduce manual effort.',
    detailedDescription: 'Disconnected tools waste valuable hours and introduce human error. We integrate your software stack—CRM, accounting, communication, and operational tools—so information moves automatically where it needs to without manual copying and pasting.',
    typicalProblems: [
      'Staff spending hours moving data manually between separate software tools',
      'Sync errors between sales, billing, communication, and inventory',
      'Slow response times caused by manual notification bottlenecks',
    ],
    whatWeDeliver: [
      'Custom connections between the tools you already use',
      'Automatic syncing of data between tools',
      'Repetitive administrative task automation',
      'Custom notifications and event-driven alerts',
    ],
  },
  {
    id: 'software-engineering',
    title: 'Software Engineering',
    shortDescription: 'Build, improve or modernise the technical systems behind a business.',
    detailedDescription: 'Strong businesses need solid technical foundations. We build, refactor, and maintain reliable software architectures that reduce technical debt, improve reliability, and ensure your business technology runs smoothly day after day.',
    typicalProblems: [
      'Legacy software that is slow, brittle, or difficult to maintain and extend',
      'Unstable databases or unscalable application logic prone to outages',
      'Security risks and technical debt accumulating as the business grows',
    ],
    whatWeDeliver: [
      'Back-end systems and API design',
      'Database design, performance tuning and migrations',
      'Cleaning up, testing and modernising existing code',
      'Automated cloud deployment and ongoing maintenance',
    ],
  },
  {
    id: 'technology-consulting',
    title: 'Technology Consulting',
    shortDescription: 'Turn a business problem or idea into a practical technical roadmap before investing heavily in development.',
    detailedDescription: 'Building the wrong thing is the most expensive mistake in technology. We help founders and business leaders evaluate their requirements, audit existing tools, and chart a pragmatic roadmap before committing significant capital.',
    typicalProblems: [
      'Uncertainty about whether to buy existing software or build custom tools',
      'Conflicting technology options with unclear costs and return on investment',
      'Lack of technical direction when launching a new business initiative',
    ],
    whatWeDeliver: [
      'Architecture reviews and feasibility studies',
      'Build-vs-buy evaluations and tool audits',
      'Pragmatic technical roadmaps and project scoping',
      'Technical advisory for founders and growing businesses',
    ],
  },
];
