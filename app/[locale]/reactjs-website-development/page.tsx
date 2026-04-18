import { Metadata } from 'next';
import ServicePageContent from './ServicePageContent';

export const metadata: Metadata = {
  title: 'React.js Website Development Services | Modern Interactive UI',
  description: 'React.js website development services for modern, interactive UI and lightning-fast performance. Enterprise-grade React applications in Dubai, UAE, KSA.',
  keywords: [
    'reactjs website development services',
    'reactjs website development Dubai',
    'reactjs website development UAE',
    'reactjs website development KSA',
    'react js development',
    'react frontend development'
  ],
};

const pageData = {
  title: 'React.js Website Development',
  slug: 'reactjs-website-development',
  primaryKeyword: 'reactjs website development services',
  heroTitle: 'React.js Website Development Services | Modern Interactive UI',
  heroSubtitle: 'Modern React.js applications with interactive UI and lightning-fast performance for enterprise-grade websites.',
  introTitle: 'Modern React Development for Interactive Experiences',
  introDescription: 'Our React.js website development services deliver modern, interactive applications with smooth animations and blazing-fast performance. Every React.js solution is built with component-based architecture for reusability, maintainability, and scale. We create immersive user experiences that impress visitors and drive conversions.',
  introKeywords: ['reactjs development', 'react js website', 'react frontend', 'interactive ui development'],
  deliverables: [
    'React Component Architecture',
    'Interactive UI',
    'State Management',
    'API Integration',
    'Fast Rendering',
    'Responsive Design',
    'Animation Integration',
    'Performance Optimization',
    'Testing Setup',
    'Deployment'
  ],
  processSteps: [
    { title: 'UI/UX Planning', desc: 'We design intuitive user interfaces and plan the component architecture for your React.js application.' },
    { title: 'Component Architecture', desc: 'We build scalable component hierarchies with proper state management and reusability patterns.' },
    { title: 'Development', desc: 'Our developers implement interactive features, animations, and integrate APIs with clean code.' },
    { title: 'Integration', desc: 'We connect your React app with backend services, databases, and third-party APIs.' },
    { title: 'Testing & Launch', desc: 'We perform comprehensive testing across devices and browsers before deploying to production.' }
  ],
  features: [
    {
      title: 'Component-Based Architecture',
      desc: 'Reusable React components built with modern patterns for maintainability and scalability across your application.'
    },
    {
      title: 'Interactive UI Development',
      desc: 'Dynamic user interfaces with smooth animations, transitions, and engaging interactions that captivate users.'
    },
    {
      title: 'State Management',
      desc: 'Robust state management solutions using React Context, Redux, or Zustand for predictable data flow.'
    },
    {
      title: 'API Integration',
      desc: 'Seamless REST and GraphQL API integration with proper error handling and data transformation.'
    },
    {
      title: 'Performance Optimization',
      desc: 'Code splitting, lazy loading, and Virtual DOM optimization for lightning-fast rendering and load times.'
    },
    {
      title: 'Animation Integration',
      desc: 'Smooth animations using Framer Motion, GSAP, or CSS animations for polished user experiences.'
    }
  ],
  useCases: [
    'Interactive dashboards with real-time data visualization',
    'Complex web applications with dynamic content',
    'Single Page Application (SPA) development',
    'Portfolio and showcase websites',
    'Business management applications',
    'API-driven web platforms'
  ],
  whyChooseUs: [
    'We use the modern React stack with latest features and best practices',
    'Component reusability reduces development time and maintenance costs',
    'Performance-focused development with optimized rendering',
    'Interactive UI that engages users and improves conversion rates',
    'Scalable architecture ready for future feature expansion',
    'Expert team with extensive React.js experience'
  ],
  seoBenefits: [
    'Fast load times with optimized React rendering',
    'Core Web Vitals optimized for better search rankings',
    'Mobile-first responsive design for all devices',
    'Clean URL structures for better crawlability',
    'Schema markup implementation for rich search results',
    'JavaScript SEO best practices for content indexing'
  ],
  internalLinks: [
    { href: '/custom-website-development', label: 'Custom Website Development' },
    { href: '/nextjs-development', label: 'Next.js Development' },
    { href: '/web-design-development', label: 'All Web Services' },
    { href: '/frontend-development', label: 'Frontend Development' }
  ],
  faq: [
    {
      question: 'What is React.js and why should I use it for my website?',
      answer: 'React.js is a powerful JavaScript library for building user interfaces. It offers component-based architecture, virtual DOM for fast rendering, and a vast ecosystem of tools. It\'s ideal for interactive websites, SPAs, and complex web applications that require dynamic content and smooth user experiences.'
    },
    {
      question: 'How long does it take to develop a React.js website?',
      answer: 'The timeline depends on complexity. A standard React.js website typically takes 4-8 weeks, while complex web applications with advanced features may take 8-16 weeks. We provide detailed timelines after analyzing your requirements.'
    },
    {
      question: 'Can React.js websites be SEO-friendly?',
      answer: 'Absolutely. We implement JavaScript SEO best practices including server-side rendering (SSR) or static site generation (SSG), proper meta tags, clean URL structures, and schema markup to ensure search engines can crawl and index your React website effectively.'
    },
    {
      question: 'Do you provide React.js maintenance and updates?',
      answer: 'Yes, we offer ongoing maintenance services including React version updates, performance optimizations, security patches, and feature enhancements to keep your application current and performing optimally.'
    },
    {
      question: 'What type of applications can be built with React.js?',
      answer: 'React.js is versatile and can build anything from simple landing pages to complex web applications including e-commerce platforms, SaaS dashboards, social networks, learning management systems, and enterprise portals with real-time features.'
    },
    {
      question: 'How do you ensure React application performance?',
      answer: 'We implement multiple optimization strategies including code splitting, lazy loading, memoization, virtual DOM, efficient state management, and performance monitoring. We also optimize Core Web Vitals for fast load times and smooth user experiences.'
    }
  ]
};

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  return <ServicePageContent data={pageData} />;
}