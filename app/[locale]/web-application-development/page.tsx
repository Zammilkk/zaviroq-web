import { Metadata } from 'next';
import ServicePageContent from './ServicePageContent';

export const metadata: Metadata = {
  title: 'Web Application Development Services | Custom Solutions',
  description: 'Custom web application development services in Dubai, UAE, and KSA. Fully custom solutions built for specific business needs - from internal tools to customer-facing platforms.',
  keywords: [
    'web application development services',
    'web application development Dubai',
    'web application development UAE',
    'web application development KSA',
    'custom web app',
    'saas mvp development'
  ],
};

const pageData = {
  title: 'Web Application Development',
  slug: 'web-application-development',
  primaryKeyword: 'web application development services',
  heroTitle: 'Web Application Development Services | Custom Solutions',
  heroSubtitle: 'Custom web applications built for specific business needs. From internal tools to customer-facing platforms.',
  introTitle: 'Custom Web Application Development for Business Requirements',
  introDescription: 'Our web application development services deliver fully custom solutions built for your specific business requirements. We do not use generic templates-every application is engineered uniquely to match your workflows, integrate with your systems, and scale with your growth. From internal tools to customer-facing platforms, we create software that solves your specific challenges.',
  introKeywords: ['web application development', 'custom web app', 'business application', 'web app development'],
  deliverables: [
    'Custom Functionality',
    'User Authentication',
    'Database Architecture',
    'API Development',
    'Real-time Features',
    'Third-party Integration',
    'Custom Workflows',
    'Admin Panel',
    'Reporting',
    'Deployment'
  ],
  processSteps: [
    { title: 'Discovery & Planning', desc: 'We analyze your business requirements, user flows, and technical specifications to create a detailed project roadmap.' },
    { title: 'Architecture Design', desc: 'We design scalable system architecture, database schemas, and API structures tailored to your specific needs.' },
    { title: 'Custom Development', desc: 'Our developers build every component from scratch using modern frameworks and clean code architecture.' },
    { title: 'Integration', desc: 'We integrate with your existing systems, third-party services, and any required business logic.' },
    { title: 'Testing & Launch', desc: 'We perform comprehensive testing including security, performance, and user acceptance testing before deployment.' }
  ],
  features: [
    {
      title: 'Custom Functionality',
      desc: 'Every feature is built specifically for your business workflows - no generic templates or pre-built constraints.'
    },
    {
      title: 'User Authentication',
      desc: 'Secure authentication systems including social login, SSO, MFA, and role-based access control.'
    },
    {
      title: 'Database Architecture',
      desc: 'Optimized database design for your specific data structures, queries, and scalability requirements.'
    },
    {
      title: 'API Development',
      desc: 'RESTful and GraphQL APIs designed for your integration needs with comprehensive documentation.'
    },
    {
      title: 'Real-time Features',
      desc: 'WebSocket connections, live notifications, and real-time collaboration capabilities.'
    },
    {
      title: 'Integrations',
      desc: 'Seamless integration with third-party services, payment gateways, CRMs, and existing business systems.'
    }
  ],
  useCases: [
    'Internal tools and dashboards',
    'Customer portals and self-service',
    'Business management platforms',
    'Booking and reservation systems',
    'Marketplace platforms',
    'Educational and learning platforms'
  ],
  whyChooseUs: [
    'Fully custom solutions - no templates or generic frameworks',
    'Scalable architecture designed for business growth',
    'Enterprise-grade security built from the ground up',
    'Seamless third-party integrations',
    'Expert team with industry experience',
    'Ongoing support and maintenance'
  ],
  seoBenefits: [
    'Fast performance with optimized load times',
    'Core Web Vitals compliance for better rankings',
    'Mobile-first responsive design',
    'Clean URL structure for better crawlability',
    'Schema markup for rich search results',
    'XML sitemap generation'
  ],
  internalLinks: [
    { href: '/admin-dashboard-development', label: 'Admin Dashboard Development' },
    { href: '/saas-website-development', label: 'SaaS Website Development' },
    { href: '/custom-website-development', label: 'Custom Website Development' }
  ],
  faq: [
    {
      question: 'How long does web application development take?',
      answer: 'Timeline varies based on complexity. A standard web application takes 8-12 weeks, while complex enterprise applications may take 3-6 months. We provide detailed timelines during the discovery phase.'
    },
    {
      question: 'What technology stack do you use?',
      answer: 'We use modern frameworks including React, Next.js, Node.js, TypeScript, and cloud platforms like AWS and Azure. Technology selection is based on your specific requirements and scalability needs.'
    },
    {
      question: 'Is the application secure?',
      answer: 'Security is built into every application we develop. We implement enterprise-grade security including encryption, secure authentication, input validation, XSS prevention, and regular security audits.'
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Yes, we specialize in seamless integration with existing systems including CRMs, ERPs, payment gateways, third-party APIs, and custom business logic. We ensure smooth data flow across all platforms.'
    },
    {
      question: 'Is the application mobile-responsive?',
      answer: 'All our web applications are built with responsive design, ensuring perfect functionality across desktop, tablet, and mobile devices.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer comprehensive ongoing support and maintenance packages including security updates, feature enhancements, performance optimization, and technical support.'
    }
  ]
};

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  return <ServicePageContent data={pageData} />;
}