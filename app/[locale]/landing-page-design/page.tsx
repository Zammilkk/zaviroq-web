import { Metadata } from 'next';
import ServicePageContent from './ServicePageContent';

export const metadata: Metadata = {
  title: 'Landing Page Design Services | High-Converting',
  description: 'High-converting landing page design for campaigns, product launches, and lead generation. Built for maximum ROI and campaign performance.',
  keywords: [
    'landing page design services',
    'landing page design services UAE',
    'landing page design services Dubai',
    'landing page design services KSA',
    'high converting landing page',
    'campaign landing page design',
    'lead generation landing page'
  ],
};

const pageData = {
  title: 'Landing Page Design',
  slug: 'landing-page-design',
  primaryKeyword: 'landing page design services',
  heroTitle: 'High-Converting Landing Page Design for Maximum ROI',
  heroSubtitle: 'Conversion-focused landing pages built to maximize your campaign ROI. Every element optimized for action.',
  introTitle: 'Landing Page Design That Converts Visitors Into Customers',
  introDescription: 'Our landing page design services deliver high-converting pages optimized for your specific campaign objectives. Whether you need lead generation, product sales, app downloads, or event registrations, we design landing pages that turn visitors into actionable results. Every landing page we create follows conversion rate optimization best practices, including strategic layout, compelling CTAs, social proof, and performance-optimized code. We A/B test our designs to ensure maximum ROI from your campaign traffic.',
  introKeywords: ['landing page design', 'landing page design services', 'high converting landing page', 'campaign landing page'],
  deliverables: [
    '100% Custom Landing Page Design',
    'Conversion-Optimized Layout',
    'Strategic CTA Placement',
    'A/B Testing Setup',
    'Mobile-First Responsive Design',
    'Fast Loading Speed',
    'Lead Capture Forms',
    ' Campaign Analytics',
    'Social Proof Elements',
    'Performance Tracking'
  ],
  processSteps: [
    { title: 'Conversion Strategy', desc: 'We define clear conversion goals and map the optimal user journey for your campaign.' },
    { title: 'Wireframe & Design', desc: 'We create conversion-focused wireframes and visual designs optimized for action.' },
    { title: 'Custom Development', desc: 'Our developers build high-performance landing pages with clean code.' },
    { title: 'A/B Testing', desc: 'We set up split testing variants to optimize conversion rates.' },
    { title: 'Campaign Launch', desc: 'We deploy with tracking integration and provide ongoing optimization recommendations.' }
  ],
  features: [
    {
      title: 'Conversion-First Design',
      desc: 'Every element strategically placed to guide visitors toward your conversion goal.'
    },
    {
      title: 'A/B Testing Framework',
      desc: 'Built-in testing capabilities to continuously optimize for better conversion rates.'
    },
    {
      title: 'Fast Loading Speed',
      desc: 'Lightning-fast pages that minimize bounce rates and maximize conversions.'
    },
    {
      title: 'Lead Capture Integration',
      desc: 'Seamless form integration with your CRM, email marketing, and lead management tools.'
    },
    {
      title: 'Social Proof Elements',
      desc: 'Testimonials, reviews, client logos, and trust signals built into the design.'
    },
    {
      title: 'Campaign Analytics',
      desc: 'Complete tracking setup for conversion sources, user behavior, and ROI measurement.'
    }
  ],
  useCases: [
    'Product launch campaigns',
    'Lead generation campaigns',
    'Webinar and event registrations',
    'App download promotions',
    ' Ebook and content downloads',
    'Special offer promotions'
  ],
  whyChooseUs: [
    'We never reuse designs — every landing page is built uniquely for your campaign',
    '100% custom code optimized for conversion performance',
    'A/B testing setup included to optimize ROI',
    'Fast loading speed for better conversion rates',
    'Complete analytics and tracking integration',
    'Ongoing optimization support available'
  ],
  seoBenefits: [
    'Fast loading speed reduces bounce rates and improves conversions',
    'Core Web Vitals optimized for better ad quality scores',
    'Mobile-first design for mobile traffic optimization',
    'Clean, crawlable structure for ad platform approval',
    'Proper tracking pixel integration for ad platforms',
    'Conversion-focused user experience'
  ],
  internalLinks: [
    { href: '/custom-website-development', label: 'Custom Website Development' },
    { href: '/business-website-design', label: 'Business Website Design' },
    { href: '/web-design-development', label: 'All Web Services' },
    { href: '/performance-marketing', label: 'Performance Marketing' }
  ],
  faq: [
    {
      question: 'How long does landing page design take?',
      answer: 'A conversion-optimized landing page typically takes 1-3 weeks, depending on complexity and testing requirements. We offer expedited timelines for time-sensitive campaigns.'
    },
    {
      question: 'Do you provide A/B testing with landing page design?',
      answer: 'Yes, A/B testing setup is included in our landing page design services. We create variant pages and configure testing to optimize for your conversion goals.'
    },
    {
      question: 'Can you integrate with my marketing tools?',
      answer: 'Absolutely. We integrate with all major CRM systems, email marketing platforms, advertising pixels, and tracking tools including Google Analytics, Meta, LinkedIn, and more.'
    },
    {
      question: 'How do you optimize for conversion?',
      answer: 'We use proven CRO best practices including strategic CTA placement, compelling headlines, social proof elements, urgency triggers, and clean visual hierarchies. Every decision is data-driven.'
    },
    {
      question: 'Do you offer ongoing landing page optimization?',
      answer: 'Yes, we offer ongoing optimization packages including A/B test analysis, conversion rate improvements, and performance monitoring.'
    },
    {
      question: 'Can I update the landing page content myself?',
      answer: 'Yes, we provide easy-to-use content management options so you can update text, images, and offers without technical knowledge.'
    }
  ]
};

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  return <ServicePageContent data={pageData} />;
}