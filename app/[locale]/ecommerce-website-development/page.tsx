import { Metadata } from 'next';
import ServicePageContent from './ServicePageContent';

export const metadata: Metadata = {
  title: 'Ecommerce Website Development Services | Scalable Online Stores',
  description: 'Full-featured ecommerce websites with secure payments, inventory management, and conversion-optimized design. Built for businesses in UAE, KSA, and India.',
  keywords: [
    'ecommerce website development services',
    'ecommerce website development Dubai',
    'ecommerce website development UAE',
    'ecommerce website development KSA',
    'online store development',
    'ecommerce development company'
  ],
};

const pageData = {
  title: 'Ecommerce Website Development',
  slug: 'ecommerce-website-development',
  primaryKeyword: 'ecommerce website development services',
  heroTitle: 'Ecommerce Website Development Services | Scalable Online Stores',
  heroSubtitle: 'Full-featured ecommerce websites with secure payments, inventory management, and conversion-optimized design.',
  introTitle: 'Custom Ecommerce Development for Online Sales',
  introDescription: 'Our ecommerce website development services deliver full-featured online stores with secure payments, inventory management, and conversion-optimized design. Every ecommerce solution is custom-built to match your product catalog, payment requirements, and business workflow. We create mobile-first shopping experiences that convert visitors into customers.',
  introKeywords: ['ecommerce development', 'online store development', 'ecommerce website', 'shopping cart development'],
  deliverables: [
    'Custom Store Design',
    'Secure Payment Gateway',
    'Inventory Management',
    'Order Tracking',
    'Mobile-First UI',
    'SEO Optimized',
    'Product Management',
    'Customer Accounts',
    'Shipping Integration',
    'Analytics Dashboard'
  ],
  processSteps: [
    { title: 'Store Planning', desc: 'We analyze your product catalog, target audience, and business requirements to define your ecommerce strategy.' },
    { title: 'Design & UI', desc: 'We create conversion-optimized store designs with intuitive navigation and compelling product presentations.' },
    { title: 'Development', desc: 'Our developers build your online store with custom features, payment integrations, and scalable architecture.' },
    { title: 'Payment Setup', desc: 'We configure secure payment gateways, shipping methods, and tax calculations for seamless checkout.' },
    { title: 'Launch & Training', desc: 'We deploy your store, provide admin training, and ensure a smooth launch with ongoing support.' }
  ],
  features: [
    {
      title: 'Secure Payment Processing',
      desc: 'Integrated with Stripe, PayPal, and local payment gateways for secure transactions with PCI compliance.'
    },
    {
      title: 'Inventory Management',
      desc: 'Real-time stock tracking, low-stock alerts, and automated inventory updates across all sales channels.'
    },
    {
      title: 'Order Management',
      desc: 'Complete order processing from checkout to fulfillment with tracking, notifications, and status updates.'
    },
    {
      title: 'Mobile-First Design',
      desc: 'Responsive storefronts optimized for all devices with fast loading and seamless mobile shopping experience.'
    },
    {
      title: 'SEO Optimization',
      desc: 'Built-in SEO features including clean URLs, schema markup, meta tags, and fast Core Web Vitals scores.'
    },
    {
      title: 'Analytics Dashboard',
      desc: 'Comprehensive analytics tracking sales, visitor behavior, conversion rates, and business performance.'
    }
  ],
  useCases: [
    'Retail stores selling physical products online',
    'Fashion and apparel ecommerce platforms',
    'Electronics and gadgets online stores',
    'Food delivery and grocery platforms',
    'Digital products and software sales',
    'Subscription box and membership services'
  ],
  whyChooseUs: [
    'Custom-built ecommerce solutions tailored to your business',
    'Secure payment processing with multiple gateway options',
    'Comprehensive inventory and order management system',
    'Mobile-first design for optimal shopping experience',
    'SEO-optimized architecture for better search rankings',
    'Expert team with years of ecommerce development experience'
  ],
  seoBenefits: [
    'Product schema markup for rich search results',
    'Category and collection page SEO optimization',
    'Mobile-first indexing ready architecture',
    'Fast checkout flow for better conversion',
    'Clean URL structure for better crawlability',
    'Integrated schema markup for ecommerce'
  ],
  internalLinks: [
    { href: '/custom-ecommerce-development', label: 'Custom Ecommerce Development' },
    { href: '/web-design-development', label: 'Web Design & Development' },
    { href: '/digital-marketing', label: 'Digital Marketing Services' }
  ],
  faq: [
    {
      question: 'How long does it take to develop an ecommerce website?',
      answer: 'A standard ecommerce website typically takes 6-10 weeks, depending on complexity, number of products, and integrations required. We provide detailed timelines during the planning phase.'
    },
    {
      question: 'What payment gateways do you support?',
      answer: 'We support all major payment gateways including Stripe, PayPal, Apple Pay, Google Pay, and regional options like COD, KNET, and MADA for Middle East markets.'
    },
    {
      question: 'Can you migrate my existing ecommerce store?',
      answer: 'Yes, we offer complete ecommerce migration services with zero downtime. We transfer products, customers, orders, and SEO value while improving performance.'
    },
    {
      question: 'Do you provide inventory management features?',
      answer: 'Yes, our ecommerce solutions include comprehensive inventory management with real-time stock tracking, low-stock alerts, and multi-location inventory support.'
    },
    {
      question: 'Is the ecommerce website mobile-responsive?',
      answer: 'Absolutely. All our ecommerce websites are built with mobile-first design, ensuring seamless shopping experience across all devices from phones to desktops.'
    },
    {
      question: 'Do you offer ongoing support and maintenance?',
      answer: 'Yes, we provide ongoing support packages including security updates, feature enhancements, performance monitoring, and technical support for your ecommerce platform.'
    }
  ]
};

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  return <ServicePageContent data={pageData} />;
}