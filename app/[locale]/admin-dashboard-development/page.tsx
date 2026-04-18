import { Metadata } from 'next';
import ServicePageContent from './ServicePageContent';

export const metadata: Metadata = {
  title: 'Admin Dashboard Development Services | Custom CRM Solutions',
  description: 'Custom admin dashboard and CRM development services in Dubai, UAE, and KSA. Build powerful internal dashboards with real-time data visualization.',
  keywords: [
    'admin dashboard development services',
    'admin dashboard development Dubai',
    'admin dashboard development UAE',
    'admin dashboard development KSA',
    'crm development',
    'internal dashboard development'
  ],
};

const pageData = {
  title: 'Admin Dashboard Development',
  slug: 'admin-dashboard-development',
  primaryKeyword: 'admin dashboard development services',
  heroTitle: 'Admin Dashboard Development Services | Custom CRM Solutions',
  heroSubtitle: 'Visualize your data with custom admin dashboards and CRM systems tailored to your exact operational logic.',
  introTitle: 'Custom Admin Dashboard Development for Business Control',
  introDescription: 'Our admin dashboard development services deliver custom command centers that visualize your data and streamline operations. Every dashboard is built with your exact workflows in mind, providing real-time insights into users, revenue, inventory, and content. We create intuitive interfaces that empower your team to make data-driven decisions.',
  introKeywords: ['admin dashboard development', 'crm development', 'internal dashboard', 'admin panel development'],
  deliverables: [
    'Data Visualization Graphs',
    'Real-time Socket Updates',
    'Role-based Encryption',
    'Custom CRUD APIs',
    'User Management',
    'Reporting System',
    'Audit Logs',
    'Widget System',
    'Export Features',
    'Notification System'
  ],
  processSteps: [
    { title: 'Requirements Analysis', desc: 'We analyze your business processes, data requirements, and operational workflows to define clear dashboard specifications.' },
    { title: 'UI/UX Design', desc: 'We create intuitive interface designs with focused user journeys, ensuring ease of navigation and data accessibility.' },
    { title: 'Development', desc: 'Our developers build custom dashboard components, APIs, and real-time features using modern frameworks.' },
    { title: 'API Integration', desc: 'We integrate with your existing systems, databases, and third-party services for unified data access.' },
    { title: 'Testing & Training', desc: 'We perform comprehensive testing and provide training sessions for your team to maximize dashboard adoption.' }
  ],
  features: [
    {
      title: 'Data Visualization',
      desc: 'Interactive charts, graphs, and dashboards that transform complex data into actionable visual insights.'
    },
    {
      title: 'Real-time Updates',
      desc: 'Live data streaming via WebSocket technology ensuring your dashboard always reflects the latest information.'
    },
    {
      title: 'Role-based Security',
      desc: 'Granular permission controls with encrypted data access, ensuring each user sees only what they need to.'
    },
    {
      title: 'Custom CRUD Operations',
      desc: 'Full Create, Read, Update, Delete capabilities with custom business logic tailored to your processes.'
    },
    {
      title: 'Advanced Reporting',
      desc: 'Generate detailed reports with filtering, sorting, and export options in multiple formats.'
    },
    {
      title: 'Smart Notifications',
      desc: 'Automated alerts and notifications based on custom triggers and threshold configurations.'
    }
  ],
  useCases: [
    'Business analytics dashboards',
    'Content management systems',
    'User administration panels',
    'Inventory control systems',
    'Sales tracking dashboards',
    'Support ticket management'
  ],
  whyChooseUs: [
    'Custom workflows designed around your specific business logic',
    'Real-time data updates for immediate decision-making',
    'Secure platform with role-based access controls',
    'Intuitive UI designed for ease of use',
    'Scalable architecture ready for growth',
    'Expert team with dashboard development experience'
  ],
  seoBenefits: [
    'Fast loading speed for improved productivity',
    'Secure architecture with encryption best practices',
    'Role-based SEO for permissioned content visibility',
    'Clean URL structure for easy navigation',
    'Schema markup for structured dashboard data',
    'Performance optimization for large datasets'
  ],
  internalLinks: [
    { href: '/web-application-development', label: 'Web Application Development' },
    { href: '/saas-website-development', label: 'SaaS Development' },
    { href: '/web-design-development', label: 'Web Design & Development' }
  ],
  faq: [
    {
      question: 'How long does admin dashboard development take?',
      answer: 'Timeline depends on complexity. A standard admin dashboard typically takes 6-10 weeks, while complex CRM systems with custom workflows may take 10-16 weeks. We provide detailed timelines during requirements analysis.'
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Yes, we specialize in integrating with existing databases, ERPs, CRMs, and third-party APIs. We ensure seamless data flow between your systems for a unified dashboard experience.'
    },
    {
      question: 'Is the dashboard data secure?',
      answer: 'Absolutely. We implement enterprise-grade security including role-based access control, data encryption, audit logging, and compliance with security best practices to protect your sensitive business data.'
    },
    {
      question: 'Can we access the dashboard on mobile devices?',
      answer: 'Yes, all our dashboards are fully responsive and accessible on tablets and mobile devices, allowing your team to monitor and manage operations from anywhere.'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes, we offer comprehensive support and maintenance packages including bug fixes, feature enhancements, security updates, and performance optimizations to keep your dashboard running smoothly.'
    },
    {
      question: 'Can the dashboard be customized as our business grows?',
      answer: 'Absolutely. Our dashboards are built on scalable architecture, allowing easy addition of new features, integrations, and user capacities as your business requirements evolve.'
    }
  ]
};

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  return <ServicePageContent data={pageData} />;
}