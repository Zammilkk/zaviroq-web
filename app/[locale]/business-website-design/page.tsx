import { Metadata } from 'next';
import ServicePageContent from './ServicePageContent';

export const metadata: Metadata = {
  title: 'Business Website Design Services | Professional & Scalable',
  description: 'Professional business website design with fast performance, secure architecture, and fully custom design. Built for B2B and enterprise clients in UAE, KSA, and India.',
  keywords: [
    'business website design services',
    'business website design services Dubai',
    'business website design services UAE',
    'business website design services KSA',
    'corporate website design services',
    'professional business website',
    'B2B website design services'
  ],
};

const pageData = {
  title: 'Business Website Design',
  slug: 'business-website-design',
  primaryKeyword: 'business website design services',
  heroTitle: 'Business Website Design for Professional Corporate Online Presence',
  heroSubtitle: 'Professional business websites that establish credibility and generate leads. Fully custom designs that represent your brand perfectly.',
  introTitle: 'Professional Business Website Design That Builds Trust',
  introDescription: 'Our business website design services create powerful corporate online presences that establish trust, showcase your expertise, and convert visitors into clients. Every business website we design is 100% custom-crafted to reflect your unique brand identity, values, and market position. We combine professional UI/UX design with lead generation optimization to deliver websites that not only look impressive but drive real business results. From corporate presentations to B2B lead generation platforms, our business website design company delivers exceptional results for companies across UAE, Saudi Arabia, and India.',
  introKeywords: ['business website design', 'business website design services', 'corporate website design', 'professional business website'],
  deliverables: [
    '100% Custom Business Design (No Template)',
    'Professional Corporate UI/UX',
    'Lead Generation Optimization',
    'Responsive Mobile-First Design',
    'SEO-Friendly Structure',
    'Fast Loading Performance',
    'Secure Business Architecture',
    'Scalable for Growth',
    'Business Analytics Integration',
    'Contact & Inquiry Forms'
  ],
  processSteps: [
    { title: 'Brand Analysis', desc: 'We analyze your brand positioning, target audience, and competitive landscape to define design direction.' },
    { title: 'Corporate UI/UX Design', desc: 'We create professional wireframes and design prototypes that establish credibility and trust.' },
    { title: 'Custom Development', desc: 'Our developers build every component from scratch using clean, scalable code.' },
    { title: 'Lead Generation Setup', desc: 'We integrate conversion optimization tools, analytics, and lead capture forms.' },
    { title: 'Testing & Launch', desc: 'We perform comprehensive testing and deploy with zero downtime.' }
  ],
  features: [
    {
      title: 'Professional Corporate Design',
      desc: 'Custom-designed interfaces that establish immediate credibility and trust with your target audience.'
    },
    {
      title: 'Lead Generation Optimization',
      desc: 'Strategically placed CTAs, forms, and conversion pathways designed to maximize qualified lead generation.'
    },
    {
      title: 'Business Analytics Integration',
      desc: 'Complete tracking setup for visitor behavior, lead sources, and conversion analytics.'
    },
    {
      title: 'Team & About Sections',
      desc: 'Professional layouts to showcase your team, company story, and credentials.'
    },
    {
      title: 'Service Presentation',
      desc: 'Compelling service pages designed to demonstrate expertise and encourage inquiries.'
    },
    {
      title: 'Contact Integration',
      desc: 'Multiple contact options including forms, chat, Calendly, and business directories.'
    }
  ],
  useCases: [
    'Corporate websites for B2B companies',
    'Professional services firms (law, finance, consulting)',
    'Medical and healthcare practices',
    'Real estate and property companies',
    'Financial services and banking',
    'Enterprise company websites'
  ],
  whyChooseUs: [
    'We never reuse designs — every business website is built uniquely for your brand',
    '100% custom code written specifically for your business needs',
    'Professional UI/UX that establishes immediate credibility',
    'Lead generation optimization built in from the start',
    'Fast, secure, and scalable for business growth',
    'Dedicated project manager and transparent communication'
  ],
  seoBenefits: [
    'Fast loading speed for better user experience and SEO rankings',
    'Core Web Vitals optimized for Google ranking signals',
    'Mobile-first indexing ready architecture',
    'Clean URL structure for better crawlability',
    'Semantic HTML and schema markup for rich search results',
    'Local SEO optimization for regional business visibility'
  ],
  internalLinks: [
    { href: '/custom-website-development', label: 'Custom Website Development' },
    { href: '/landing-page-design', label: 'Landing Page Design' },
    { href: '/web-design-development', label: 'All Web Services' },
    { href: '/wordpress-development', label: 'WordPress Development' }
  ],
  faq: [
    {
      question: 'How long does business website design take?',
      answer: 'A professional business website typically takes 4-8 weeks from concept to launch. The timeline depends on complexity, number of pages, and custom functionality requirements. We provide detailed timelines during the planning phase.'
    },
    {
      question: 'Will my business website be mobile-responsive?',
      answer: 'Absolutely. All our business websites are built with mobile-first responsive design, ensuring perfect display and functionality across all devices — from smartphones to desktop computers.'
    },
    {
      question: 'Do you offer B2B website design?',
      answer: 'Yes, we specialize in B2B website design with lead generation optimization. Our business websites include strategic CTAs, qualification forms, and integration with your CRM and sales pipelines.'
    },
    {
      question: 'Can you help with business website content?',
      answer: 'Yes, we can assist with content strategy and copywriting. Our team can help craft compelling messaging that resonates with your target audience and drives conversions.'
    },
    {
      question: 'Do you provide website maintenance?',
      answer: 'Yes, we offer ongoing website maintenance packages including security updates, content updates, performance monitoring, and technical support.'
    },
    {
      question: 'Will my website support business growth?',
      answer: 'Absolutely. Our business websites are built on scalable architecture that grows with your business. We use clean, maintainable code that makes future expansion straightforward.'
    }
  ]
};

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  return <ServicePageContent data={pageData} />;
}