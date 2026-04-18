import { Metadata } from 'next';
import ServicePageContent from './ServicePageContent';

export const metadata: Metadata = {
  title: 'WordPress Website Design Services | Custom, Scalable & High Performance',
  description: 'Custom WordPress website design with fast performance, secure hardening, and fully unique custom themes. Built for GCC and India markets with ACF dynamic structures.',
  keywords: [
    'wordpress website design services',
    'wordpress website design services UAE',
    'wordpress website design services Dubai',
    'wordpress website design services KSA',
    'custom wordpress development',
    'wordpress cms development'
  ],
};

const pageData = {
  title: 'WordPress Website Design',
  slug: 'wordpress-website-design',
  primaryKeyword: 'wordpress website design services',
  heroTitle: 'WordPress Website Design Services | Custom CMS Solutions',
  heroSubtitle: 'Secure, custom-coded WordPress architectures optimized for speed and localized for the GCC and India markets.',
  introTitle: 'Custom WordPress Development for Business Growth',
  introDescription: 'Our WordPress website design services deliver secure, custom-coded WordPress solutions optimized for performance and business growth. We strip WordPress of external bloat, taking extreme security measures and building custom themes that pass Core Web Vitals while remaining easy to manage. Every WordPress website we create is 100% custom with secure hardening, speed optimization, and localized for your target market.',
  introKeywords: ['wordpress website design', 'wordpress development', 'custom wordpress', 'wordpress cms'],
  deliverables: [
    'Custom Theme Development',
    'Hardened WordPress Security',
    'Speed Optimization',
    'ACF Dynamic Structures',
    'Easy CMS Management',
    'Plugin Customization',
    'Responsive Design',
    'SEO Setup',
    'Security Hardening',
    'Performance Caching'
  ],
  processSteps: [
    { title: 'Discovery & Requirements', desc: 'We analyze your business goals, target audience, and technical requirements to define the WordPress architecture specifications.' },
    { title: 'Custom Theme Design', desc: 'We design and develop a fully custom WordPress theme tailored to your brand identity with no external dependencies.' },
    { title: 'Secure Development', desc: 'We implement enterprise-grade security hardening includingwp-config protection, file permissions, and firewall configurations.' },
    { title: 'Performance Optimization', desc: 'We optimize your WordPress site for sub-second load times through caching, image optimization, and code minimization.' },
    { title: 'Testing & Launch', desc: 'We perform comprehensive testing across devices and browsers before deploying with zero-downtime launch.' }
  ],
  features: [
    {
      title: 'Custom Theme Development',
      desc: '100% custom WordPress themes built from scratch with clean, maintainable code. No pre-made templates or external theme dependencies.'
    },
    {
      title: 'Security Hardening',
      desc: 'Enterprise-grade WordPress security including wp-config hardening, file permissions, login protection, firewall configuration, and malware prevention.'
    },
    {
      title: 'ACF Dynamic Structures',
      desc: 'Advanced Custom Fields (ACF) integration for easy content management. Create custom post types, flexible content layouts, and repeater fields.'
    },
    {
      title: 'Speed Optimization',
      desc: 'Sub-second load times through server-side caching, image optimization, code minimization, and Core Web Vitals optimization.'
    },
    {
      title: 'Easy Client Management',
      desc: 'Intuitive admin dashboard with custom WordPress functionality that makes content management easy for non-technical users.'
    },
    {
      title: 'Plugin Development',
      desc: 'Custom WordPress plugin development for unique business requirements without relying on third-party solutions.'
    }
  ],
  useCases: [
    'Business websites requiring custom WordPress solutions',
    'E-commerce stores using WooCommerce',
    'Membership sites with authentication',
    'Portfolio and agency showcase websites',
    'Blog platforms and content publishers',
    'Corporate CMS and intranet solutions'
  ],
  whyChooseUs: [
    'We build 100% custom themes — never use pre-made templates',
    'Enterprise-grade security hardening for WordPress',
    'Sub-second load times optimized for Core Web Vitals',
    'Easy content management with ACF integration',
    'SEO-optimized architecture from the ground up',
    'Ongoing support and maintenance packages'
  ],
  seoBenefits: [
    'Core Web Vitals optimized for Google ranking signals',
    'Fast loading speed under 2 seconds for improved user experience',
    'Mobile-first responsive design architecture',
    'Clean URL structure for better crawlability',
    'Schema markup integration for rich search results',
    'Local SEO optimized for GCC and India markets'
  ],
  internalLinks: [
    { href: '/custom-website-development', label: 'Custom Website Development' },
    { href: '/ecommerce-website-development', label: 'E-commerce Development' },
    { href: '/web-design-development', label: 'All Web Services' },
    { href: '/wordpress-development', label: 'WordPress Development' }
  ],
  faq: [
    {
      question: 'How is custom WordPress development different from using themes?',
      answer: 'Custom WordPress development means building everything from scratch — no pre-made themes, no external dependencies, and no bloat. This results in faster, more secure websites that are fully tailored to your brand and easy to manage.'
    },
    {
      question: 'What security measures do you implement for WordPress sites?',
      answer: 'We implement comprehensive security hardening including wp-config protection, strict file permissions, login security, firewall configuration, malware scanning, and regular security updates. Our hardened WordPress installations are enterprise-grade.'
    },
    {
      question: 'Can you integrate custom fields and dynamic content?',
      answer: 'Yes, we use Advanced Custom Fields (ACF) to create flexible content structures. This allows you to easily manage content without touching code, including custom post types, repeater fields, flexible content layouts, and conditional logic.'
    },
    {
      question: 'How fast will my custom WordPress website load?',
      answer: 'Our WordPress websites are optimized for sub-second load times. We implement server-side caching, image optimization, code minimization, and Core Web Vitals optimization to ensure fast loading speeds that pass Google performance metrics.'
    },
    {
      question: 'Will I be able to easily manage my WordPress website content?',
      answer: 'Absolutely. We build intuitive admin dashboards with custom WordPress functionality using ACF. This makes content management easy for non-technical users while maintaining the flexibility to handle complex content requirements.'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes, we offer comprehensive WordPress support and maintenance packages including security updates, performance monitoring, backups, and bug fixes. Our packages ensure your WordPress site remains secure and optimized.'
    }
  ]
};

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  return <ServicePageContent data={pageData} />;
}