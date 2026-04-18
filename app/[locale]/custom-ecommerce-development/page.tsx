import { Metadata } from 'next';
import ServicePageContent from './ServicePageContent';

export const metadata: Metadata = {
  title: 'Custom Ecommerce Development Services | Bespoke Solutions',
  description: 'Fully custom ecommerce solutions tailored to your unique business model. No templates, unlimited possibilities. Built for businesses in UAE, KSA, and India.',
  keywords: [
    'custom ecommerce development services',
    'bespoke ecommerce development',
    'custom shopping cart development',
    'custom checkout development'
  ],
};

const pageData = {
  title: 'Custom Ecommerce Development',
  slug: 'custom-ecommerce-development',
  primaryKeyword: 'custom ecommerce development services',
  heroTitle: 'Custom Ecommerce Development Services | Bespoke Solutions',
  heroSubtitle: 'Fully custom ecommerce solutions tailored to your unique business model. No templates, unlimited possibilities.',
  introTitle: 'Bespoke Ecommerce Development for Unique Business Models',
  introDescription: 'Our custom ecommerce development services deliver fully bespoke solutions tailored to your unique business model. We never use templates-every ecommerce solution is built uniquely for your specific requirements. From custom checkout flows to advanced product configurators, we create unlimited possibilities that standard platforms cannot match.',
  introKeywords: ['custom ecommerce development', 'bespoke ecommerce', 'custom shopping cart', 'custom checkout development'],
  deliverables: [
    'Bespoke Checkout Flow',
    'Custom Product Configurator',
    'Advanced Inventory',
    'Multi-vendor Support',
    'Third-party Integrations',
    'Custom Pricing',
    'Subscription Systems',
    'B2B Catalogues',
    'API Development',
    'White-label Solutions'
  ],
  processSteps: [
    { title: 'Requirement Analysis', desc: 'We analyze your unique business model, workflows, and specific requirements to define the project scope.' },
    { title: 'Solution Design', desc: 'We design custom architecture tailored to your business logic, including custom checkout, pricing, and workflows.' },
    { title: 'Custom Development', desc: 'Our developers build every component from scratch, creating unique features that standard platforms cannot offer.' },
    { title: 'Integration Setup', desc: 'We integrate with your existing systems, third-party services, and custom APIs for seamless operations.' },
    { title: 'Launch & Support', desc: 'We deploy your custom solution with comprehensive training and ongoing support for your team.' }
  ],
  features: [
    {
      title: 'Bespoke Checkout Flow',
      desc: 'Completely custom checkout experience with unique payment options, pricing tiers, and checkout workflows designed for your specific business.'
    },
    {
      title: 'Custom Product Configurator',
      desc: 'Build-to-order systems, product customization tools, and advanced configurators for complex products and services.'
    },
    {
      title: 'Advanced Inventory System',
      desc: 'Multi-warehouse inventory, reserved stock, advanced analytics, and custom inventory workflows tailored to your operations.'
    },
    {
      title: 'Multi-vendor Marketplace',
      desc: 'Full multi-vendor marketplace capabilities with vendor dashboards, commission structures, and vendor management tools.'
    },
    {
      title: 'API-First Architecture',
      desc: 'RESTful and GraphQL APIs for seamless integration with ERP, CRM, POS, and custom business systems.'
    },
    {
      title: 'White-label Solutions',
      desc: 'Fully white-labeled ecommerce platforms that can be rebranded and resold under your own brand.'
    }
  ],
  useCases: [
    'Multi-vendor marketplaces connecting multiple sellers',
    'B2B ecommerce platforms with custom pricing and catalogues',
    'Subscription and membership-based businesses',
    'Custom products with advanced configurators',
    'Wholesale and bulk ordering platforms',
    'Digital goods and software distribution platforms'
  ],
  whyChooseUs: [
    'No templates - every solution is uniquely built for your business',
    'Unlimited customization possibilities beyond platform constraints',
    'Scalable architecture designed for growth',
    'Custom workflows tailored to your business processes',
    'API-first approach for seamless integrations',
    'Expert team with deep ecommerce development experience'
  ],
  seoBenefits: [
    'Custom URL structures optimized for your business',
    'Product schema markup for rich search results',
    'Category and collection page optimization',
    'Review schema integration for social proof',
    'FAQ schema for enhanced search visibility',
    'Complete schema markup for ecommerce SEO'
  ],
  internalLinks: [
    { href: '/ecommerce-website-development', label: 'Ecommerce Website Development' },
    { href: '/web-design-development', label: 'Web Design & Development' }
  ],
  faq: [
    {
      question: 'How is custom ecommerce different from platform-based solutions?',
      answer: 'Custom ecommerce is built from scratch specifically for your business, offering unlimited customization that platform-based solutions cannot match. You get complete control over every aspect - from checkout flows to inventory management - without platform limitations.'
    },
    {
      question: 'Can custom ecommerce solutions integrate with our existing systems?',
      answer: 'Yes, our custom ecommerce solutions are built with API-first architecture, enabling seamless integration with ERP systems, CRM platforms, POS systems, accounting software, and any custom business logic you require.'
    },
    {
      question: 'Do you offer multi-vendor marketplace functionality?',
      answer: 'Absolutely. We build complete multi-vendor marketplace solutions with vendor management, commission tracking, vendor dashboards, product approval workflows, and comprehensive marketplace analytics.'
    },
    {
      question: 'How long does custom ecommerce development take?',
      answer: 'Custom ecommerce development typically takes 10-16 weeks depending on complexity. Simple custom stores take 8-10 weeks, while complex multi-vendor marketplaces or B2B platforms may take 12-16 weeks.'
    },
    {
      question: 'Can you create custom product configurators?',
      answer: 'Yes, we specialize in building custom product configurators for made-to-order products, customizations, bundles, and complex product options that allow customers to build their own products.'
    },
    {
      question: 'Do you provide white-label ecommerce solutions?',
      answer: 'Yes, we offer fully white-labeled ecommerce platforms that you can rebrand and resell to your own clients. These solutions include complete admin controls and branding options.'
    }
  ]
};

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  return <ServicePageContent data={pageData} />;
}