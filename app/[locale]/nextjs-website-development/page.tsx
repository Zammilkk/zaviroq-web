import { Metadata } from 'next';
import ServicePageContent from './ServicePageContent';

export const metadata: Metadata = {
  title: 'Next.js Website Development Services | SSR & SEO Optimized',
  description: 'Server-side rendered Next.js applications designed for infinite scale and SEO perfection. Enterprise Next.js development with edge caching, ISR support, and optimal Core Web Vitals.',
  keywords: [
    'nextjs website development services',
    'nextjs website development Dubai',
    'nextjs website development UAE',
    'nextjs website development KSA',
    'next js development',
    'nextjs ssr development'
  ],
};

const pageData = {
  title: 'Next.js Website Development',
  slug: 'nextjs-website-development',
  primaryKeyword: 'nextjs website development services',
  heroTitle: 'Next.js Website Development Services | SSR & SEO Optimized',
  heroSubtitle: 'Server-side rendered Next.js applications designed for infinite scale and SEO perfection.',
  introTitle: 'Enterprise Next.js Development for Performance & SEO',
  introDescription: 'Our Next.js website development services deliver server-side rendered applications with exceptional SEO performance and infinite scalability. Using Next.js App Router, we build enterprise-grade solutions with edge caching, ISR support, and optimal Core Web Vitals. Every Next.js project is optimized for both user experience and search engine visibility.',
  introKeywords: ['nextjs development', 'next js website', 'server-side rendering', 'ssr development'],
  deliverables: [
    'Next.js App Router',
    'Server Component Optimization',
    'Edge Network Deployment',
    'Dynamic SEO Structuring',
    'ISR Support',
    'API Routes',
    'Performance Optimization',
    'Image Optimization',
    'Middleware Setup',
    'TypeScript Setup'
  ],
  processSteps: [
    { title: 'Strategy & Planning', desc: 'We define the project architecture, routing structure, and performance requirements for your Next.js application.' },
    { title: 'App Router Setup', desc: 'We configure Next.js App Router with proper folder structure, layouts, and server/client component boundaries.' },
    { title: 'Component Development', desc: 'We build optimized server components and client components with proper data fetching and state management.' },
    { title: 'API Integration', desc: 'We create API routes, implement server actions, and integrate with external services and databases.' },
    { title: 'Deployment & Optimization', desc: 'We deploy to edge networks, configure ISR, optimize images, and ensure optimal Core Web Vitals.' }
  ],
  features: [
    {
      title: 'Next.js App Router',
      desc: 'Modern App Router architecture with layouts, server components, and streaming for optimal performance and developer experience.'
    },
    {
      title: 'SSR & SSG Support',
      desc: 'Server-side rendering and static site generation with ISR for the perfect balance of dynamic content and cached performance.'
    },
    {
      title: 'Edge Deployment',
      desc: 'Deploy to global edge networks for sub-100ms latency worldwide with automatic scaling and zero cold starts.'
    },
    {
      title: 'SEO Optimization',
      desc: 'Built-in SEO features including automatic sitemap generation, metadata API, JSON-LD schema, and Open Graph tags.'
    },
    {
      title: 'ISR (Incremental Static Regeneration)',
      desc: 'Update static content without rebuilding the entire site — perfect for dynamic content that needs near-instant updates.'
    },
    {
      title: 'Performance Optimization',
      desc: 'Automatic image optimization, code splitting, font optimization, and bundle analysis for Core Web Vitals excellence.'
    }
  ],
  useCases: [
    'Enterprise websites requiring SSR for SEO',
    'E-commerce platforms with dynamic product catalogs',
    'SaaS applications needing fast initial loads',
    'Marketing sites requiring perfect Core Web Vitals',
    'Blog platforms with CMS integration',
    'Web applications with API backends'
  ],
  whyChooseUs: [
    'Expert Next.js developers with App Router experience',
    'Server-side rendering for superior SEO performance',
    'Edge deployment for global performance',
    'Infinite scale architecture',
    'TypeScript-first development',
    'Dedicated team with enterprise experience'
  ],
  seoBenefits: [
    'Server-side rendering for optimal search engine crawling',
    'Core Web Vitals optimized for Google ranking',
    'Fast initial page load for better user experience',
    'Clean URL structure with automatic optimization',
    'Schema markup and JSON-LD for rich search results',
    'Automatic sitemap and robots.txt generation'
  ],
  internalLinks: [
    { href: '/custom-website-development', label: 'Custom Website Development' },
    { href: '/react-development', label: 'React Development' },
    { href: '/web-design-development', label: 'All Web Services' },
    { href: '/headless-cms-development', label: 'Headless CMS Development' }
  ],
  faq: [
    {
      question: 'What is Next.js and why should I use it for my website?',
      answer: 'Next.js is a React framework that provides server-side rendering, static site generation, and edge deployment capabilities. It offers superior SEO performance, faster page loads, and infinite scalability. Perfect for websites that need both dynamic content and excellent search engine visibility.'
    },
    {
      question: 'What is the difference between SSR and SSG in Next.js?',
      answer: 'Server-Side Rendering (SSR) renders pages on each request, ideal for dynamic content. Static Site Generation (SSG) builds pages at build time, ideal for content that rarely changes. Next.js supports both plus Incremental Static Regeneration (ISR) which combines the benefits of both.'
    },
    {
      question: 'How does Next.js improve SEO compared to traditional React apps?',
      answer: 'Unlike client-side React apps that require JavaScript for content rendering, Next.js renders content on the server before sending it to browsers. This means search engines can fully index your content immediately, leading to better rankings and faster discovery.'
    },
    {
      question: 'Can you migrate my existing website to Next.js?',
      answer: 'Yes, we specialize in Next.js migrations from various platforms including WordPress, traditional HTML sites, and client-side React applications. We ensure preserved SEO value with proper 301 redirects and URL structure optimization.'
    },
    {
      question: 'What is ISR (Incremental Static Regeneration) in Next.js?',
      answer: 'ISR allows you to update static content without rebuilding the entire site. You set a revalidation interval, and Next.js will regenerate pages in the background when they are requested, providing static performance with dynamic capabilities.'
    },
    {
      question: 'How do you ensure Core Web Vitals with Next.js?',
      answer: 'We optimize all Core Web Vitals metrics: LCP (Largest Contentful Paint) through server components and edge deployment, FID (First Input Delay) through code splitting and minimal client-side JavaScript, and CLS (Cumulative Layout Shift) through proper image sizing and font loading strategies.'
    }
  ]
};

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  return <ServicePageContent data={pageData} />;
}