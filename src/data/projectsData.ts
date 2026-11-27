import type { ProjectItem } from '../types';

/** Silvano Commerce demo store (public beta, staging). Change here if the address moves to a custom domain. */
const SILVANO_COMMERCE_DEMO_URL =
  'https://ca-silvano-staging-frontend.nicepond-e1178618.southafricanorth.azurecontainerapps.io/s/marula-lane';

export const projectsData: ProjectItem[] = [
  {
    id: 'silvano-commerce',
    category: 'E-commerce Platform',
    title: 'Silvano Commerce',
    badge: 'Public beta',
    badgeType: 'beta',
    description:
      'An online store platform for small businesses, with AI built in where it helps: search and a back-office assistant, both grounded in each store’s own data. Built first for a hair-product retailer, designed to work for any small business.',
    summary:
      'An online store platform with AI search and a back-office assistant, both grounded in each store’s own catalogue. Now in public beta.',
    outcomes: [
      'Gives a small business its own online store: products, stock and a cart',
      'Lets shoppers search in their own words, matched against the real catalogue',
      'Takes PayFast payments, with no account needed to check out',
      'Answers the owner’s questions about stock, orders and sales',
    ],
    link: { href: SILVANO_COMMERCE_DEMO_URL, label: 'Open the demo store' },
    image: {
      src: '/work/silvano-commerce-demo-store.webp',
      alt: 'The Marula Lane demo store on Silvano Commerce: a storefront with an AI search box suggesting “a linen dress in a medium under R1000”.',
      width: 1920,
      height: 1200,
    },
    featured: true,
  },
  {
    id: 'south-african-language-nlp',
    category: 'AI / NLP',
    title: 'South African Language NLP',
    badge: 'Research project',
    badgeType: 'nlp',
    description:
      'A public isiXhosa–English dataset on Hugging Face for natural language processing (NLP): about 75,800 rows of isiXhosa text and 142,000 isiXhosa–English sentence pairs, prepared for translation, text generation and token classification.',
    summary:
      'A public isiXhosa–English dataset of over 200,000 rows: groundwork for AI that works in South African languages.',
    outcomes: [
      'Provides isiXhosa–English data for training translation and language models',
      'Is public on Hugging Face, so others can build on it',
    ],
    link: {
      href: 'https://huggingface.co/datasets/silvanosolutions/xhosa-nlp-dataset',
      label: 'View the dataset on Hugging Face',
    },
  },
  {
    id: 'business-operations-automation',
    category: 'Business Automation',
    title: 'Business Operations Automation',
    badge: 'Demonstration',
    badgeType: 'demo',
    description:
      'A working demonstration showing how repetitive administrative workflows can be digitised, integrated, and automated to eliminate manual data entry errors.',
    summary:
      'Repetitive admin workflows digitised and connected, so data moves automatically instead of being typed in twice.',
    outcomes: [
      'Stops the same data being typed into two systems',
      'Moves information between admin tools automatically',
      'Cuts manual data-entry errors',
    ],
  },
];
