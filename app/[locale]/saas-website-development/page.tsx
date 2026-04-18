import { Metadata } from 'next';
import ServicePageContent from './ServicePageContent';

export const metadata: Metadata = {
  title: 'SaaS Website Development Services | SaaS Platform Development',
  description: 'Expert SaaS website development services for multi-tenant platforms with secure architecture and subscription management. Serving UAE, KSA, and India.',
  keywords: [
    'saas website development services',
    'saas website development Dubai',
    'saas website development UAE',
    'saas website development KSA',
    'saas platform development',
    'multi-tenant development'
  ],
};

const pageData = {
  title: 'SaaS Website Development',
  slug: 'saas-website-development',
  primaryKeyword: 'saas website development services',
  heroTitle: 'SaaS Website Development Services | Multi-tenant Platforms',
  heroSubtitle: 'From MVP to Enterprise SaaS platforms with secure multi-tenant architecture and subscription management.',
  introTitle: 'Enterprise SaaS Development for Subscription Revenue',
  introDescription: 'Our SaaS website development services deliver enterprise-grade multi-tenant platforms with secure architecture and integrated subscription management. From MVP to scale-up, we engineer hyper-secure multi-tenant logic, Stripe integration, and seamless tenant dashboards from day one. Every SaaS solution is built for recurring revenue with optimal conversion and retention features.',
  introKeywords: ['saas development', 'saas platform', 'multi-tenant', 'subscription management'],
  deliverables: [
    'Multi-tenant Setup',
    'Stripe Integration',
    'User Role Protocols',
    'Subscription Management',
    'Serverless APIs',
    'Tenant Dashboards',
    'Usage Tracking',
    'Billing System',
    'Webhooks',
    'API Access'
  ],
  processSteps: [
    { title: 'Product Strategy', desc: 'We define your SaaS product vision, target market, monetization model, and feature roadmap for successful subscription revenue.' },
    { title: 'Architecture Design', desc: 'We design scalable multi-tenant architecture with secure tenant isolation, database schema, and API infrastructure.' },
    { title: 'Multi-tenant Development', desc: 'Our developers build the core multi-tenant logic, tenant onboarding flows, and role-based access control systems.' },
    { title: 'Payment Integration', desc: 'We integrate Stripe, configure subscription plans, handle trials, upgrades, and implement automated billing workflows.' },
    { title: 'Launch & Onboarding', desc: 'We deploy your SaaS platform, test tenant isolation, configure onboarding emails, and ensure smooth go-live.' }
  ],
  features: [
    {
      title: 'Secure Multi-tenant Architecture',
      desc: 'Complete tenant isolation with separate data workspaces, row-level security, and encrypted tenant boundaries for enterprise data privacy.'
    },
    {
      title: 'Stripe Payment Integration',
      desc: 'Full Stripe integration with subscription plans, trial periods, usage-based billing, invoice generation, and automated payment retry logic.'
    },
    {
      title: 'Role-Based Access Control',
      desc: 'Granular permission system with admin, manager, and user roles with tenant-specific access controls and audit logging.'
    },
    {
      title: 'Subscription Management',
      desc: 'Complete subscription lifecycle management including plan upgrades, downgrades, pauses, cancellations, and retention hooks.'
    },
    {
      title: 'Serverless APIs',
      desc: 'Scalable serverless API architecture handling tenant-specific routes, webhooks, and third-party integrations efficiently.'
    },
    {
      title: 'Auto-scaling Infrastructure',
      desc: 'Cloud-native auto-scaling that adapts to tenant growth, handles traffic spikes, and maintains performance at any scale.'
    }
  ],
  useCases: [
    'SaaS startups building their first product',
    'Enterprise tools requiring multi-user access',
    'Marketplaces with seller dashboards',
    'Educational platforms with course access',
    'HR systems with employee portals',
    'Financial tools with client workspaces'
  ],
  whyChooseUs: [
    'Multi-tenant architecture from day one',
    'Stripe payment integration built-in',
    'Enterprise-grade security',
    'Scalable from MVP to enterprise',
    'Expert SaaS development team',
    'Full MVP to enterprise path'
  ],
  seoBenefits: [
    'Fast load times for user productivity',
    'Clean URL structures per tenant',
    'Schema markup for SaaS features',
    'Core Web Vitals optimized',
    'Mobile-first platform design',
    'Performance at scale'
  ],
  internalLinks: [
    { href: '/web-application-development', label: 'Web Application Development' },
    { href: '/admin-dashboard-development', label: 'Admin Dashboard Development' },
    { href: '/ecommerce-website-development', label: 'Ecommerce Website Development' }
  ],
  faq: [
    {
      question: 'What pricing models do you support for SaaS platforms?',
      answer: 'We support all pricing models including subscription (monthly/annual), usage-based pricing, per-seat licensing, freemium with paid upgrades, and custom enterprise pricing with negotiation workflows.'
    },
    {
      question: 'How does multi-tenant architecture work?',
      answer: 'Multi-tenant architecture allows multiple tenants (customers) to share the same application infrastructure while keeping their data completely isolated. We implement this using row-level security, separate database schemas, or dedicated database per tenant based on your security requirements.'
    },
    {
      question: 'How do you ensure data security in multi-tenant systems?',
      answer: 'We implement enterprise-grade security including tenant isolation at database level, encrypted data storage, API-level access controls, audit logging, regular security audits, and compliance with data protection regulations.'
    },
    {
      question: 'Can you integrate Stripe for payments?',
      answer: 'Yes, we provide complete Stripe integration including subscription management, one-time payments, usage-based billing, invoice generation, payment webhooks, automated receipts, and dunning management for failed payments.'
    },
    {
      question: 'Can you migrate my existing SaaS to a new platform?',
      answer: 'Yes, we perform comprehensive migrations from legacy platforms with zero downtime, preserve all tenant data and configurations, handle historical billing data, and ensure seamless tenant onboarding to the new system.'
    },
    {
      question: 'How do you handle scaling for growing SaaS platforms?',
      answer: 'We build auto-scaling infrastructure using cloud-native technologies that automatically handle increased tenant load, traffic spikes, and database growth while maintaining performance and cost efficiency.'
    }
  ]
};

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  return <ServicePageContent data={pageData} />;
}