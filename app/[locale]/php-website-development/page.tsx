import { Metadata } from 'next';
import ServicePageContent from './ServicePageContent';

export const metadata: Metadata = {
  title: 'PHP Website Development Services | Laravel Backend Solutions',
  description: 'PHP website development services delivering robust Laravel backend solutions for complex business requirements. Expert PHP developers in Dubai, UAE, and KSA.',
  keywords: [
    'php website development services',
    'php website development services Dubai',
    'php website development services UAE',
    'php website development services KSA',
    'laravel development',
    'php backend development'
  ],
};

const pageData = {
  title: 'PHP Website Development',
  slug: 'php-website-development',
  primaryKeyword: 'php website development services',
  heroTitle: 'PHP Website Development Services | Laravel Backend Solutions',
  heroSubtitle: 'Heavy backend logic scaling. We engineer robust, server-side Laravel architectures for complex business logic.',
  introTitle: 'Custom PHP Development for Complex Business Requirements',
  introDescription: 'Our PHP website development services deliver robust, server-side solutions for complex business requirements. When standard frameworks fail, we deploy raw PHP and Laravel systems built specifically to process massive data loads securely. Every PHP solution is custom-engineered with clean, maintainable code optimized for performance and scalability.',
  introKeywords: ['php website development', 'laravel development', 'php backend', 'server-side development'],
  deliverables: [
    'Laravel Ecosystem Setup',
    'Custom API Endpoints',
    'Database Architecture',
    'Legacy Code Refactoring',
    'Secure Backend',
    'REST API Development',
    'Performance Optimization',
    'Security Hardening',
    'Third-party Integration',
    'Scalable Architecture'
  ],
  processSteps: [
    { title: 'Requirement Analysis', desc: 'We analyze your business requirements, data structures, and scalability objectives to define the optimal PHP architecture.' },
    { title: 'Architecture Design', desc: 'We design robust Laravel architectures with clean code patterns, database schemas, and API blueprints.' },
    { title: 'Custom Development', desc: 'Our PHP developers build custom Laravel applications with secure authentication and business logic.' },
    { title: 'API Development', desc: 'We develop RESTful APIs with proper documentation, authentication, and rate limiting.' },
    { title: 'Testing & Deployment', desc: 'We perform comprehensive testing including unit tests, security audits, and deploy to production.' }
  ],
  features: [
    {
      title: 'Laravel Ecosystem',
      desc: 'Full Laravel development with MVC architecture, Eloquent ORM, and Blade templating for maintainable code.'
    },
    {
      title: 'Custom API Development',
      desc: 'RESTful and GraphQL API development with proper authentication, versioning, and documentation.'
    },
    {
      title: 'Database Architecture',
      desc: 'Optimized database design with indexing, query optimization, and scalable architecture for massive data loads.'
    },
    {
      title: 'Security Hardening',
      desc: 'Enterprise security practices including XSS prevention, SQL injection protection, CSRF tokens, and secure authentication.'
    },
    {
      title: 'Performance Optimization',
      desc: 'PHP performance tuning with opcache optimization, query caching, and lazy loading for sub-second response times.'
    },
    {
      title: 'Scalable Architecture',
      desc: 'Horizontal and vertical scaling strategies with load balancing, caching layers, and queue processing.'
    }
  ],
  useCases: [
    'Enterprise applications requiring complex business logic',
    'E-commerce platforms with high transaction volumes',
    'CRM systems with custom workflows',
    'Business portals with role-based access',
    'API backends for mobile and web applications',
    'Legacy system modernization'
  ],
  whyChooseUs: [
    'Custom Laravel solutions built specifically for your requirements',
    'Secure architecture with industry best practices',
    'Performance-optimized code for fast load times',
    'Scalable architecture ready for business growth',
    'Clean, maintainable code following PSR standards',
    'Expert PHP developers with enterprise experience'
  ],
  seoBenefits: [
    'Fast server-side rendering for improved load times',
    'Clean URL structures for better crawlability',
    'Schema markup integration for rich search results',
    'Mobile-first responsive architecture',
    'Core Web Vitals optimized performance',
    'CDN-ready static asset delivery'
  ],
  internalLinks: [
    { href: '/custom-website-development', label: 'Custom Website Development' },
    { href: '/wordpress-development', label: 'WordPress Development' },
    { href: '/web-design-development', label: 'All Web Services' },
    { href: '/api-development', label: 'API Development' }
  ],
  faq: [
    {
      question: 'What are the advantages of Laravel over other PHP frameworks?',
      answer: 'Laravel provides elegant syntax, built-in authentication, queue processing, caching, and a powerful Eloquent ORM. It follows MVC patterns making code maintainable and scalable for enterprise applications.'
    },
    {
      question: 'Can you migrate legacy PHP code to Laravel?',
      answer: 'Yes, we offer legacy PHP modernization services, refactoring old codebases to modern Laravel architectures while preserving business logic and data integrity.'
    },
    {
      question: 'How do you ensure security in PHP applications?',
      answer: 'We implement enterprise security practices including input validation, parameterized queries, CSRF protection, XSS prevention, secure session management, and regular security audits.'
    },
    {
      question: 'Do you provide ongoing Laravel maintenance and support?',
      answer: 'Yes, we offer ongoing maintenance including security updates, performance monitoring, bug fixes, and feature enhancements for Laravel applications.'
    },
    {
      question: 'Can Laravel handle high-traffic applications?',
      answer: 'Absolutely. Laravel scales horizontally with load balancing, uses queue processing for async tasks, and supports Redis caching for high-performance applications.'
    },
    {
      question: 'What types of APIs can you build with Laravel?',
      answer: 'We build RESTful APIs, GraphQL APIs, and webhook integrations with proper authentication (JWT, OAuth), rate limiting, versioning, and comprehensive API documentation.'
    }
  ]
};

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  return <ServicePageContent data={pageData} />;
}