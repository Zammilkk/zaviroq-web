import { Metadata } from 'next';
import ServicePageContent from './ServicePageContent';

export const metadata: Metadata = {
  title: 'Custom Website Development Services | Custom, Scalable & High Performance',
  description: 'Custom website development with fast performance, secure architecture, and fully unique design. Built for scalability and business growth in UAE, KSA, and India.',
  keywords: [
    'custom website development services',
    'custom website development services UAE',
    'custom website development services Dubai',
    'custom website development services KSA',
    'bespoke web development',
    'custom website design services',
    'fully custom website development',
    'no template website development'
  ],
};

const pageData = {
  title: 'Custom Website Development',
  slug: 'custom-website-development',
  primaryKeyword: 'custom website development services',
  heroTitle: 'Custom Website Development for High-Performance, Scalable Websites',
  heroSubtitle: 'Custom-built solutions with modern UI/UX, fast loading speed, and secure architecture — designed uniquely for every business.',
  introTitle: 'Custom Website Development That Stands Out',
  introDescription: 'Our custom website development services deliver 100% unique, fully bespoke websites that never use templates or pre-built themes. We engineer each solution from scratch to match your exact business requirements, brand identity, and growth objectives. Every website we create is built with clean, scalable code optimized for sub-second load times and Enterprise-grade security. Whether you need a corporate presence, lead generation platform, or complex web application, our custom website development company delivers exceptional results across UAE, Saudi Arabia, and India markets.',
  introKeywords: ['custom website development', 'custom website development services', 'bespoke web development', 'custom website design services'],
  deliverables: [
    '100% Custom Design (No Template Reuse)',
    'Responsive Mobile-First Design',
    'SEO-Friendly Architecture',
    'Fast Loading Speed Optimization',
    'Secure Architecture with Best Practices',
    'Scalable System Design',
    'Modern UI/UX Interface',
    'Clean & Maintainable Code'
  ],
  processSteps: [
    { title: 'Requirement Analysis', desc: 'We analyze your business goals, target audience, and competitive landscape to define clear project specifications.' },
    { title: 'UI/UX Planning', desc: 'We create detailed wireframes and design prototypes that align with your brand identity and user experience objectives.' },
    { title: 'Custom Development', desc: 'Our developers build every component from scratch using modern frameworks and clean code architecture.' },
    { title: 'Quality Testing', desc: 'We perform comprehensive testing across devices, browsers, and performance benchmarks to ensure excellence.' },
    { title: 'Deployment & Launch', desc: 'We deploy to production with optimized hosting, configure analytics, and ensure zero-downtime launch.' }
  ],
  features: [
    {
      title: 'Modern Framework Development',
      desc: 'Built with React, Next.js, or custom solutions based on your specific requirements for maximum performance and scalability.'
    },
    {
      title: 'Performance Optimization',
      desc: 'Every website is optimized for Core Web Vitals — sub-second load times, minimal CLS, and optimal FID scores.'
    },
    {
      title: 'Responsive Design',
      desc: 'Mobile-first approach ensuring perfect display across all devices from phones to large desktop monitors.'
    },
    {
      title: 'SEO-Ready Architecture',
      desc: 'Clean URL structures, proper heading hierarchy, semantic HTML, and schema markup integrated from the ground up.'
    },
    {
      title: 'Secure Development',
      desc: 'Enterprise security practices including input validation, XSS prevention, CSRF tokens, and secure authentication.'
    },
    {
      title: 'API Integration',
      desc: 'Seamless integration with third-party services, payment gateways, CRM systems, and custom business logic.'
    }
  ],
  useCases: [
    'Corporate business websites requiring unique brand presence',
    'Professional services firms needing Credibility',
    'Lead generation websites for B2B and B2C',
    'Portfolio and agency showcase websites',
    'Complex web applications and platforms',
    'Membership and authentication-based sites'
  ],
  whyChooseUs: [
    'We never reuse designs — every website is built uniquely for your brand',
    '100% custom code written specifically for your project',
    'Clean, scalable architecture ready for future growth',
    'Performance-focused development with Core Web Vitals optimization',
    'Future-ready technology stack',
    'Dedicated project manager and transparent communication'
  ],
  seoBenefits: [
    'Fast loading speed under 2 seconds for improved user experience',
    'Core Web Vitals optimized for Google ranking signals',
    'Mobile-first indexing ready architecture',
    'Clean URL structure for better crawlability',
    'Semantic HTML and schema markup for rich search results',
    'Proper heading hierarchy and keyword placement'
  ],
  internalLinks: [
    { href: '/business-website-design', label: 'Business Website Design' },
    { href: '/landing-page-design', label: 'Landing Page Design' },
    { href: '/web-design-development', label: 'All Web Services' },
    { href: '/wordpress-development', label: 'WordPress Development' }
  ],
  faq: [
    {
      question: 'How long does custom website development take?',
      answer: 'The timeline varies based on complexity. A standard custom business website typically takes 4-8 weeks, while complex web applications may take 8-16 weeks. We provide detailed timelines during the requirement analysis phase.'
    },
    {
      question: 'Do you use templates or pre-built themes?',
      answer: 'Never. Every website we build is 100% custom-designed and coded from scratch. We do not reuse any designs, themes, or templates — each project is unique to your brand.'
    },
    {
      question: 'What technologies do you use for custom website development?',
      answer: 'We use modern frameworks including React, Next.js, TypeScript, and custom solutions depending on your requirements. Our technology selection is based on performance, scalability, and your specific business needs.'
    },
    {
      question: 'Will my custom website be mobile-responsive?',
      answer: 'Absolutely. All our websites are built with a mobile-first approach, ensuring perfect display and functionality across all devices — from smartphones to large desktop monitors.'
    },
    {
      question: 'Do you provide SEO services with custom website development?',
      answer: 'Yes, all our custom websites include SEO-ready architecture with clean URL structures, proper heading hierarchy, semantic HTML, schema markup, and Core Web Vitals optimization for better search rankings.'
    },
    {
      question: 'Can you migrate my existing website to a custom solution?',
      answer: 'Yes, we offer website migration services with zero downtime and preserved SEO value. We handle the entire process including 301 redirect mapping and post-launch SEO audit.'
    }
  ]
};

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  return <ServicePageContent data={pageData} />;
}