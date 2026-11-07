import React from 'react';
import styles from './page.module.css';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { servicesMasterData, SubServiceItem, ParentCategoryItem } from '@/data/servicesMasterData';
import { routing } from '@/i18n/routing';
import RevealOnScroll from '../../../RevealOnScroll';
import { CategoryFaqAccordion, CategoryDiagnosticMatrix } from '../CategoryInteractiveWidgets';
import { SubServiceDeliverablesCarousel, DeliverableCardData } from './SubServiceDeliverablesCarousel';
import { 
  ArrowRight, 
  Layers, 
  Calendar, 
  ShieldCheck, 
  TrendingUp, 
  Sparkles,
  Zap,
  BarChart3,
  Crosshair,
  MessageSquare,
  Scale,
  Rocket
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string; category: string; subservice: string }>;
};

// Generate static parameters for all sub-services across all locales
export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    servicesMasterData.flatMap((cat) =>
      cat.subservices.map((sub) => ({
        locale,
        category: cat.slug,
        subservice: sub.slug,
      }))
    )
  );
}

// Sub-Service Dynamic Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, subservice } = await params;
  const parent = servicesMasterData.find((c) => c.slug === category);
  if (!parent) return { title: 'Service | Zaviroq' };

  const sub = parent.subservices.find((s) => s.slug === subservice);
  if (!sub) return { title: 'Service | Zaviroq' };

  const canonicalUrl = `https://www.zaviroq.com/services/${parent.slug}/${sub.slug}`;

  return {
    title: {
      absolute: sub.metaTitle,
    },
    description: sub.metaDesc,
    keywords: sub.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: sub.metaTitle,
      description: sub.metaDesc,
      url: canonicalUrl,
      siteName: 'Zaviroq',
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: 'https://www.zaviroq.com/assets/images/service-performance-graphic.png',
          width: 1200,
          height: 630,
          alt: `${sub.title} - Zaviroq Mangalore`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: sub.metaTitle,
      description: sub.metaDesc,
      images: ['https://www.zaviroq.com/assets/images/service-performance-graphic.png'],
    },
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  };
}

// Helper: Dynamic Subservice Headline with Two-Tone Gradient
function getSubserviceHeadline(slug: string, title: string) {
  switch (slug) {
    case 'content-marketing':
      return (
        <>
          Publish Authoritative Content That Ranks on Google &amp;{' '}
          <span className={styles.heroHighlightGradient}>
            Converts Readers into Buyers.
          </span>
        </>
      );
    case 'lead-generation':
      return (
        <>
          Fill Your Sales Pipeline with High-Intent Inbound{' '}
          <span className={styles.heroHighlightGradient}>
            Decision-Maker Inquiries.
          </span>
        </>
      );
    case 'digital-strategy':
      return (
        <>
          Build an Unbeatable Market Advantage with a{' '}
          <span className={styles.heroHighlightGradient}>
            Disciplined Commercial Blueprint.
          </span>
        </>
      );
    case 'marketing-automation':
      return (
        <>
          Automate Lead Follow-Up &amp; Sales Pipelines with{' '}
          <span className={styles.heroHighlightGradient}>
            Intelligent CRM Workflows.
          </span>
        </>
      );
    case 'online-reputation-management':
      return (
        <>
          Protect Your Brand Authority &amp; Automate{' '}
          <span className={styles.heroHighlightGradient}>
            5-Star Google Reviews.
          </span>
        </>
      );
    case 'on-page-seo':
      return (
        <>
          Optimize Headings, Entity Keywords &amp; Content for{' '}
          <span className={styles.heroHighlightGradient}>
            Page 1 Google Rankings.
          </span>
        </>
      );
    case 'technical-seo':
      return (
        <>
          Eliminate Crawl Bottlenecks &amp; Achieve Sub-Second{' '}
          <span className={styles.heroHighlightGradient}>
            Core Web Vitals Speed.
          </span>
        </>
      );
    case 'local-seo':
      return (
        <>
          Dominate Local Search &amp; Capture High-Intent Buyers with{' '}
          <span className={styles.heroHighlightGradient}>
            Google Maps 3-Pack Rankings.
          </span>
        </>
      );
    case 'ecommerce-seo':
      return (
        <>
          Rank Your Product Catalog &amp; Scale Organic Revenue with{' '}
          <span className={styles.heroHighlightGradient}>
            E-Commerce SEO Architecture.
          </span>
        </>
      );
    case 'google-ads':
      return (
        <>
          Stop Budget Bleeding &amp; Capture High-Intent Searchers with{' '}
          <span className={styles.heroHighlightGradient}>
            Precision Google Ads.
          </span>
        </>
      );
    case 'meta-ads':
      return (
        <>
          Scale Profitable Customer Acquisition with High-Converting{' '}
          <span className={styles.heroHighlightGradient}>
            Meta Performance Ads.
          </span>
        </>
      );
    case 'custom-website-development':
      return (
        <>
          Deploy Clean Code, Sub-Second Speed &amp; Scalable{' '}
          <span className={styles.heroHighlightGradient}>
            Custom Web Architecture.
          </span>
        </>
      );
    case 'nextjs-development':
      return (
        <>
          Engineer High-Performance Web Applications with{' '}
          <span className={styles.heroHighlightGradient}>
            Modern Next.js &amp; React.
          </span>
        </>
      );
    case 'wordpress-development':
      return (
        <>
          Custom, Secure &amp; Ultra-Fast WordPress Websites with{' '}
          <span className={styles.heroHighlightGradient}>
            Zero Plugin Bloat.
          </span>
        </>
      );
    case 'shopify-development':
      return (
        <>
          High-Converting Shopify Stores Engineered to{' '}
          <span className={styles.heroHighlightGradient}>
            Maximize Average Order Value.
          </span>
        </>
      );
    case 'logo-design':
      return (
        <>
          Create a Distinctive Visual Identity That Commands{' '}
          <span className={styles.heroHighlightGradient}>
            Immediate Customer Trust.
          </span>
        </>
      );
    case 'brand-identity':
      return (
        <>
          Comprehensive Brand Identity Guidelines Built for{' '}
          <span className={styles.heroHighlightGradient}>
            Unshakable Market Authority.
          </span>
        </>
      );
    case 'video-editing':
      return (
        <>
          Cinematic Storytelling &amp; Fast-Paced Video That{' '}
          <span className={styles.heroHighlightGradient}>
            Captures Buyer Attention.
          </span>
        </>
      );
    case 'ai-blog-automation':
      return (
        <>
          Scale Authoritative Organic Publishing with{' '}
          <span className={styles.heroHighlightGradient}>
            Enterprise AI Content Workflows.
          </span>
        </>
      );
    case 'business-process-automation':
      return (
        <>
          Eliminate Repetitive Manual Bottlenecks with{' '}
          <span className={styles.heroHighlightGradient}>
            Autonomous Workflow Automation.
          </span>
        </>
      );
    case 'hotel-erp-system':
      return (
        <>
          Streamline Bookings, Operations &amp; Guest Folios with a{' '}
          <span className={styles.heroHighlightGradient}>
            Tailored Hospitality ERP.
          </span>
        </>
      );
    default:
      return (
        <>
          Scale Your Pipeline with Precision{' '}
          <span className={styles.heroHighlightGradient}>
            {title} Architecture.
          </span>
        </>
      );
  }
}

// Helper: Eyebrow Badge 1
function getSubserviceEyebrow(slug: string, shortDesc: string) {
  switch (slug) {
    case 'content-marketing': return 'Research-Backed Editorial & SEO Content';
    case 'lead-generation': return 'High-Intent Inbound B2B & B2C Acquisition';
    case 'digital-strategy': return 'Data-Driven Enterprise Commercial Blueprint';
    case 'marketing-automation': return 'Autonomous CRM & Multi-Channel Workflows';
    case 'online-reputation-management': return 'Google 5-Star Reputation & Review Shield';
    case 'on-page-seo': return 'High-Ranking Semantic Entity Optimization';
    case 'technical-seo': return 'Sub-Second Core Web Vitals & Speed Lab';
    case 'local-seo': return 'Google Maps 3-Pack Regional Domination';
    case 'ecommerce-seo': return 'E-Commerce Catalog & Transactional Search';
    case 'google-ads': return 'Precision Pay-Per-Click & High-ROAS Search';
    case 'meta-ads': return 'Full-Funnel Meta & Social Performance Ads';
    case 'ui-ux-design': return 'Award-Winning Conversion-First UI/UX Design';
    case 'custom-website-development': return 'Full-Stack Web Engineering & Next.js Architecture';
    case 'shopify-development': return 'High-Velocity Shopify Stores & Checkout';
    case 'logo-design': return 'Distinctive Corporate Logo & Visual Identity';
    case 'video-editing': return 'High-Retention Commercial Video & Reels';
    case 'ai-blog-automation': return 'Autonomous AI Content & Knowledge Publishing';
    case 'hotel-erp-system': return 'Tailored Hotel, Resort & Property ERP Systems';
    default: return shortDesc.length > 50 ? shortDesc.substring(0, 48) + '...' : shortDesc;
  }
}

// Helper: 3D Graphic Image
function getSubserviceHeroGraphic(parentSlug: string) {
  switch (parentSlug) {
    case 'digital-marketing':
      return '/assets/images/digital-marketing-laptop-3d.png';
    case 'seo':
      return '/assets/images/service-seo-graphic.png';
    case 'paid-advertising':
      return '/assets/images/service-performance-graphic.png';
    case 'social-media-marketing':
      return '/assets/images/digital-marketing-funnel-3d.png';
    case 'website-design':
    case 'website-development':
      return '/assets/images/service-web-dev-graphic.png';
    case 'ecommerce-development':
      return '/assets/images/service-ecommerce-graphic.png';
    case 'branding':
      return '/assets/images/service-branding-graphic.png';
    case 'video-production':
      return '/assets/images/digital-marketing-funnel-3d.png';
    case 'email-marketing':
      return '/assets/images/service-performance-graphic.png';
    case 'ai-automation':
      return '/assets/images/cta-laptop-3d.png';
    case 'business-software':
      return '/assets/images/service-business-graphic.png';
    default:
      return '/assets/images/digital-marketing-laptop-3d.png';
  }
}

// Helper: Floating Metric Badge
function getSubserviceFloatingMetric(parentSlug: string) {
  switch (parentSlug) {
    case 'digital-marketing': return { val: '+280%', label: 'Topical Authority Lift' };
    case 'seo': return { val: '#1', label: 'Google Maps 3-Pack' };
    case 'paid-advertising': return { val: '4.8x', label: 'Average Client ROAS' };
    case 'social-media-marketing': return { val: '+320%', label: 'Inbound Inquiry Lift' };
    case 'website-design': return { val: '+38%', label: 'Conversion Rate Lift' };
    case 'website-development': return { val: '< 0.8s', label: 'Mobile Page Speed' };
    case 'ecommerce-development': return { val: '+240%', label: 'Checkout Velocity' };
    case 'branding': return { val: '100%', label: 'Vector Brand Assets' };
    case 'video-production': return { val: '+350%', label: 'Video Watch Time' };
    case 'email-marketing': return { val: '38%', label: 'Average Open Rate' };
    case 'ai-automation': return { val: '15+ Hrs', label: 'Weekly Time Saved' };
    case 'business-software': return { val: '99.9%', label: 'Operational Uptime' };
    default: return { val: '↑ Verified', label: 'Performance Metric' };
  }
}

// Helper: 4 Impact Stats by Category
function getSubserviceStats(parentSlug: string) {
  switch (parentSlug) {
    case 'digital-marketing':
    case 'paid-advertising':
    case 'social-media-marketing':
    case 'email-marketing':
      return [
        { number: '4.6x', label: 'Average ROAS', desc: 'Achieved across high-intent search and conversion campaigns.' },
        { number: '+280%', label: 'Qualified Pipeline', desc: 'Inbound buyer inquiry growth achieved within 60 days.' },
        { number: '-38%', label: 'CPA Reduction', desc: 'Cost-per-acquisition decrease through negative keyword sculpting.' },
        { number: '99.4%', label: 'Attribution Accuracy', desc: 'Server-side conversion API tracking for transparent ROI.' }
      ];
    case 'seo':
      return [
        { number: '#1', label: 'Google Maps 3-Pack', desc: 'Top-tier local 3-pack visibility for commercial buyer searches in Mangalore.' },
        { number: '+340%', label: 'Organic Search Lift', desc: 'Average organic impression and click growth within 90 days.' },
        { number: '98/100', label: 'Core Web Vitals', desc: 'Sub-second mobile loading speeds engineered for Google indexing.' },
        { number: '92%', label: 'Page 1 Retention', desc: 'Topical cluster ranking retention across Google core algorithm updates.' }
      ];
    case 'website-design':
    case 'website-development':
    case 'ecommerce-development':
      return [
        { number: '< 0.8s', label: 'Average Page Load', desc: 'Sub-second mobile LCP speed engineered with Next.js & React.' },
        { number: '+320%', label: 'Conversion Velocity', desc: 'Lift in checkout and enquiry completions from responsive UI/UX.' },
        { number: '100%', label: 'Clean Architecture', desc: 'Zero template bloat, accessible semantic HTML, and enterprise code.' },
        { number: '99.9%', label: 'Uptime SLA', desc: 'High-availability cloud infrastructure with automated monitoring.' }
      ];
    case 'branding':
    case 'video-production':
      return [
        { number: '+290%', label: 'Brand Recall Lift', desc: 'Measurable increase in customer recognition and commercial trust.' },
        { number: '98.6%', label: 'Audience Retention', desc: 'High engagement and completion rates on commercial video assets.' },
        { number: '100%', label: 'Vector Fidelity', desc: 'Scalable master vector assets and complete brand governance guides.' },
        { number: '5.0 ★', label: 'Client Satisfaction', desc: 'Verified executive satisfaction across Coastal Karnataka and GCC.' }
      ];
    case 'ai-automation':
    case 'business-software':
    default:
      return [
        { number: '15+ Hrs', label: 'Weekly Time Saved', desc: 'Manual administrative hours eliminated per team member via automation.' },
        { number: '99.9%', label: 'Data Accuracy', desc: 'Zero human error in automated CRM, invoice, and workflow pipelines.' },
        { number: '< 1.2s', label: 'AI Execution Speed', desc: 'Autonomous AI agent response time for customer and operational queries.' },
        { number: '3.8x', label: 'Operational ROI', desc: 'Measurable reduction in software licensing and operational overhead.' }
      ];
  }
}

// Helper: Detailed Deliverable Specs
function getDetailedDeliverableSpecs(deliverableTitle: string, index: number): string[] {
  const titleLower = deliverableTitle.toLowerCase();
  
  if (titleLower.includes('content') || titleLower.includes('seo') || titleLower.includes('keyword')) {
    return [
      'Granular search intent keyword mapping for Coastal Karnataka & GCC buyers.',
      'Hub-and-spoke topic cluster architecture to dominate broad commercial categories.',
      'Rich Schema.org structured data (Article, FAQPage, Service) for Google rich results.',
      'Sub-second mobile typography and responsive readability optimization.'
    ];
  }
  if (titleLower.includes('lead') || titleLower.includes('funnel') || titleLower.includes('landing')) {
    return [
      'Sub-second, mobile-first landing pages with high-intent commercial CTAs.',
      'Multi-stage lead qualification filters eliminating low-intent inquiries.',
      'Instant WhatsApp API and CRM sync routing hot leads to sales within 30 seconds.',
      'Continuous conversion rate optimization (CRO) through heatmaps and A/B tests.'
    ];
  }
  if (titleLower.includes('code') || titleLower.includes('develop') || titleLower.includes('react') || titleLower.includes('next')) {
    return [
      'Server-side rendered Next.js / React components for instantaneous loading.',
      'Zero layout shift (CLS < 0.05) and sub-second Largest Contentful Paint (LCP).',
      'Clean TypeScript architecture with strict linting and accessible ARIA attributes.',
      'Automated CI/CD deployment pipelines with zero-downtime rolling updates.'
    ];
  }
  if (titleLower.includes('design') || titleLower.includes('ui') || titleLower.includes('brand') || titleLower.includes('logo')) {
    return [
      'Custom vector iconography and typography systems built for digital screens.',
      'Comprehensive brand style guidelines, color palettes, and contrast accessibility.',
      'Interactive Figma prototypes with fluid responsive breakpoint specifications.',
      'Exported master production assets ready for digital and print distribution.'
    ];
  }
  if (titleLower.includes('automati') || titleLower.includes('crm') || titleLower.includes('workflow') || titleLower.includes('ai')) {
    return [
      'Custom webhook integration connecting web forms directly to Zoho/HubSpot/Slack.',
      'Multi-stage automated email and WhatsApp nurturing sequences.',
      'Zero data loss safeguards with automated error retries and error logging.',
      '24/7 executive reporting dashboard tracking lead velocity and pipeline health.'
    ];
  }
  
  return [
    `Enterprise specification and scoping aligned to ${deliverableTitle}.`,
    'Rigorous multi-device quality control and compliance verification.',
    'Transparent milestone reviews with direct access to senior practitioners.',
    'Continuous post-deployment optimization to ensure sustained performance.'
  ];
}

// Helper: Diagnostic Comparison Rows by Category
function getDiagnosticComparisonRows(parentSlug: string) {
  switch (parentSlug) {
    case 'seo':
      return [
        {
          area: 'Core Search Objective',
          typical: 'Focuses on vanity keyword rankings with zero buyer intent or commercial sales impact.',
          zaviroq: 'Engineers localized Google Maps 3-Pack and high-intent commercial visibility that drives real customer calls and bookings.'
        },
        {
          area: 'Technical Architecture & Speed',
          typical: 'Slow WordPress themes overloaded with 30+ plugins causing 4+ second load times and Core Web Vitals failures.',
          zaviroq: 'Modern, sub-second Next.js architecture with 95+ PageSpeed scores, zero layout shift, and clean code.'
        },
        {
          area: 'Link Building & Authority',
          typical: 'Risky automated directory blasts, forum spam, and private blog networks (PBNs) prone to Google penalties.',
          zaviroq: '100% white-hat editorial digital PR, regional business associations, and authoritative citation consistency.'
        },
        {
          area: 'Reporting & Client Accountability',
          typical: 'Confusing monthly PDF exports with generic charts and no strategic commentary or ROI tracking.',
          zaviroq: 'Live 24/7 keyword and lead dashboard with bi-weekly executive growth consultations and transparent metrics.'
        }
      ];
    case 'website-development':
    case 'website-design':
    case 'ecommerce-development':
      return [
        {
          area: 'Code Quality & Tech Stack',
          typical: 'Generic pre-made theme templates with bloated page builders, heavy databases, and security vulnerabilities.',
          zaviroq: 'Handcrafted Next.js & React architecture, clean semantic HTML, robust security headers, and sub-second load times.'
        },
        {
          area: 'Mobile Responsiveness & CRO',
          typical: 'Awkward mobile scaling, broken touch targets, and generic forms resulting in high visitor bounce rates.',
          zaviroq: 'Mobile-first conversion funnels, sticky action bars, WhatsApp integrations, and sub-second checkout speeds.'
        },
        {
          area: 'SEO & Structured Data',
          typical: 'Missing metadata, zero Schema.org structured data, and broken canonical routes causing indexing failures.',
          zaviroq: 'Comprehensive Schema.org microdata, optimized OpenGraph cards, automated XML sitemaps, and clean canonical routes.'
        },
        {
          area: 'Ongoing Maintenance & Support',
          typical: 'Disappears after launch; leaves you stranded with outdated plugins and broken updates.',
          zaviroq: 'Dedicated technical SLA support, automated uptime monitoring, cloud backups, and ongoing performance tuning.'
        }
      ];
    default:
      return [
        {
          area: 'Strategy & Intent Alignment',
          typical: 'Runs generic, unsegmented campaigns targeting wide audiences with no clear customer journey or intent mapping.',
          zaviroq: 'Targets high-intent commercial prospects using data, behavior, and regional signals to maximize qualified inquiries.'
        },
        {
          area: 'Quality of Deliverables',
          typical: 'Outsources work to low-cost junior freelancers or unedited AI tools producing repetitive, low-impact output.',
          zaviroq: 'Crafted by senior in-house practitioners with verified sector experience, custom design systems, and rigorous QA.'
        },
        {
          area: 'Conversion & Revenue Focus',
          typical: 'Celebrates vanity metrics (likes, impressions, traffic spikes) with zero accountability for business sales.',
          zaviroq: 'Engineers every asset to convert attention into verified leads, customer inquiries, and commercial revenue.'
        },
        {
          area: 'Communication & Partnership',
          typical: 'Slow email response times, opaque billing, and transactional vendor mindset with zero strategic insight.',
          zaviroq: 'Transparent project management, direct access to senior strategists, and proactive growth recommendations.'
        }
      ];
  }
}

export default async function SubServicePage({ params }: Props) {
  const { category, subservice } = await params;
  const parent = servicesMasterData.find((c) => c.slug === category);
  if (!parent) notFound();

  const sub = parent.subservices.find((s) => s.slug === subservice);
  if (!sub) notFound();

  // Schema.org Structured Data
  const jsonLdService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://www.zaviroq.com/services/${parent.slug}/${sub.slug}/#service`,
    name: sub.title,
    serviceType: sub.title,
    description: sub.metaDesc,
    url: `https://www.zaviroq.com/services/${parent.slug}/${sub.slug}`,
    provider: {
      '@type': 'Organization',
      '@id': 'https://www.zaviroq.com/#organization',
      name: 'Zaviroq Digital Solutions',
      url: 'https://www.zaviroq.com',
      logo: 'https://www.zaviroq.com/assets/images/logo.png',
      telephone: '+91 74 8383 0582',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Light House Hill Road, Hampankatta',
        addressLocality: 'Mangalore',
        addressRegion: 'Karnataka',
        postalCode: '575001',
        addressCountry: 'IN',
      },
    },
    areaServed: [
      { '@type': 'City', name: 'Mangalore' },
      { '@type': 'City', name: 'Udupi' },
      { '@type': 'AdministrativeArea', name: 'Karnataka' },
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Saudi Arabia' },
    ],
  };

  const jsonLdBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.zaviroq.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://www.zaviroq.com/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: parent.shortTitle,
        item: `https://www.zaviroq.com/services/${parent.slug}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: sub.title,
        item: `https://www.zaviroq.com/services/${parent.slug}/${sub.slug}`,
      },
    ],
  };

  const subFaqs = sub.faqs && sub.faqs.length > 0 ? sub.faqs : parent.faqs;

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: subFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  const deliverableCards: DeliverableCardData[] = sub.deliverables.map((item, idx) => ({
    title: item,
    phase: `Phase ${String(idx + 1).padStart(2, '0')} • Production`,
    desc: `Engineered according to rigorous industry benchmarks, conversion funnels, and enterprise quality assurance standards.`,
    specs: getDetailedDeliverableSpecs(item, idx),
  }));

  const executionSteps = [
    { 
      num: '01', 
      title: 'Commercial Intent & Discovery', 
      desc: `We audit existing market bottlenecks, target customer objections, and competitor benchmarks in Mangalore and target regions.` 
    },
    { 
      num: '02', 
      title: 'Architecture & Technical Blueprint', 
      desc: `Our senior specialists map out exact deliverables, technical specifications, and timeline milestones aligned to your business KPIs.` 
    },
    { 
      num: '03', 
      title: 'Precision Production Execution', 
      desc: `We engineer and deploy deliverables cleanly with strict quality control, multi-device responsiveness, and enterprise standards.` 
    },
    { 
      num: '04', 
      title: 'Refinement & Revenue Attribution', 
      desc: `We monitor analytics, user conversion rates, and revenue performance to optimize continuously for maximum commercial ROI.` 
    },
  ];

  const subStats = getSubserviceStats(parent.slug);
  const floatingMetric = getSubserviceFloatingMetric(parent.slug);

  return (
    <div className={styles.container}>
      {/* Schema.org Injections */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* Atmospheric Glows */}
      <div className={styles.glowBg} />
      <div className={styles.gridOverlay} />

      {/* Breadcrumb Navigation */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>›</span>
        <Link href="/services">Services</Link>
        <span>›</span>
        <Link href={`/services/${parent.slug}`}>{parent.shortTitle}</Link>
        <span>›</span>
        <span className={styles.breadcrumbCurrent}>{sub.title}</span>
      </nav>

      {/* ── HERO SECTION (2-Column Architecture with Floating Stats Bar) ── */}
      <RevealOnScroll delay={50} yOffset={25}>
        <section className={styles.heroSection}>
          {/* Subtle Background Watermark */}
          <div className={styles.watermarkBg} aria-hidden="true">
            {sub.title.toUpperCase()}
          </div>

          {/* Top Eyebrow Pills Row - Left-Aligned & Single-Row Scroll on Mobile */}
          <div className={styles.heroEyebrowRow}>
            <div className={styles.eyebrowPill}>
              <Sparkles size={14} />
              <span>{getSubserviceEyebrow(sub.slug, sub.shortDesc)}</span>
            </div>

            <div className={styles.eyebrowPill}>
              <Crosshair size={14} />
              <span>#1 RATED {sub.title.toUpperCase()} IN MANGALORE &amp; KARNATAKA</span>
            </div>
          </div>

          {/* 2-Column Hero Grid: Left Content + Right 3D Visual */}
          <div className={styles.heroGridTwoCol}>
            <div className={styles.heroContentLeft}>
              <h1 className={styles.heroTitleTwoCol}>
                {getSubserviceHeadline(sub.slug, sub.title)}
              </h1>

              <p className={styles.heroSubTwoCol}>
                {sub.heroDesc}
              </p>

              <div className={styles.heroBtnRow}>
                <Link href="/contact" className={styles.heroBtnSchedule}>
                  <Calendar size={18} />
                  <span>Schedule Strategic Consultation</span>
                  <ArrowRight size={18} />
                </Link>
                <a href="#deliverables" className={styles.heroBtnExplore}>
                  <Layers size={16} />
                  <span>Explore Deliverables</span>
                </a>
              </div>
            </div>

            <div className={styles.heroVisualContainer}>
              <div className={styles.heroVisualGlow} />
              <img 
                src={getSubserviceHeroGraphic(parent.slug)}
                alt={`Zaviroq ${sub.title} Framework Mangalore`}
                className={styles.funnelImg}
              />
              <div className={styles.floatingMetricCard}>
                <div className={styles.floatingMetricVal}>{floatingMetric.val}</div>
                <div className={styles.floatingMetricLabel}>{floatingMetric.label}</div>
              </div>
            </div>
          </div>

          {/* 4 Impact Statistics Floating Bar */}
          <div className={styles.statsFloatingBar}>
            {subStats.map((stat, i) => {
              const getStatIcon = (index: number) => {
                switch (index) {
                  case 0: return <BarChart3 size={22} />;
                  case 1: return <Layers size={22} />;
                  case 2: return <Zap size={22} />;
                  case 3: return <ShieldCheck size={22} />;
                  default: return <Sparkles size={22} />;
                }
              };

              return (
                <div key={i} className={styles.statColItem}>
                  <div className={styles.statHeaderRow}>
                    <div className={styles.statIconBadge}>
                      {getStatIcon(i)}
                    </div>
                    <div className={styles.statHeadingGroup}>
                      <div className={styles.statColNumber}>{stat.number}</div>
                      <div className={styles.statColLabel}>{stat.label}</div>
                    </div>
                  </div>
                  <div className={styles.statColDesc}>{stat.desc}</div>
                </div>
              );
            })}
          </div>
        </section>
      </RevealOnScroll>

      {/* ── TACTICAL DELIVERABLES SECTION (ONE-ROW SCROLLABLE) ── */}
      <RevealOnScroll delay={80} yOffset={30}>
        <section id="deliverables" className={styles.sectionHeader}>
          <div className={styles.productionEyebrowPill}>
            <Layers size={14} />
            <span>PRODUCTION FRAMEWORK</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Enterprise {sub.title}{' '}
            <span className={styles.heroHighlightGradient}>
              Deliverables
            </span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Every module is engineered by senior subject-matter practitioners to eliminate customer bottlenecks, elevate brand authority, and accelerate sales velocity.
          </p>
        </section>

        <SubServiceDeliverablesCarousel cards={deliverableCards} />
      </RevealOnScroll>

      {/* ── 4-STAGE DELIVERY PROCESS ENGINE ── */}
      <RevealOnScroll delay={80} yOffset={30}>
        <section className={styles.sectionHeader}>
          <div className={styles.productionEyebrowPill}>
            <Zap size={14} />
            <span>DELIVERY ENGINE</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Our 4-Stage {sub.title}{' '}
            <span className={styles.heroHighlightGradient}>
              Execution Process
            </span>
          </h2>
          <p className={styles.sectionSubtitle}>
            A disciplined, revenue-focused engineering lifecycle from initial commercial intent discovery to continuous performance attribution.
          </p>
        </section>

        <div className={styles.processStrip}>
          {executionSteps.map((step, idx) => (
            <div key={idx} className={styles.processStep}>
              <div className={styles.processNum}>{step.num}</div>
              <h3 className={styles.processStepTitle}>{step.title}</h3>
              <p className={styles.processStepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </RevealOnScroll>

      {/* ── MARKET COMPARISON MATRIX ── */}
      <RevealOnScroll delay={80} yOffset={30}>
        <section className={styles.sectionHeader}>
          <div className={styles.productionEyebrowPill}>
            <Scale size={14} />
            <span>MARKET COMPARISON</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Why Generic Agencies &amp; Freelancers{' '}
            <span className={styles.heroHighlightGradient}>
              Fail vs. Zaviroq
            </span>
          </h2>
          <p className={styles.sectionSubtitle}>
            A clear comparison between low-cost shortcuts and our commercial, performance-driven engineering model.
          </p>
        </section>

        <div className={styles.matrixWrapper}>
          <CategoryDiagnosticMatrix rows={getDiagnosticComparisonRows(parent.slug)} />
        </div>
      </RevealOnScroll>

      {/* ── FREQUENTLY ASKED QUESTIONS (2-Column with 3D Speech Bubble) ── */}
      <RevealOnScroll delay={80} yOffset={30}>
        <section className={styles.sectionHeader}>
          <div className={styles.productionEyebrowPill}>
            <MessageSquare size={14} />
            <span>CLEAR ANSWERS</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Frequently Asked{' '}
            <span className={styles.heroHighlightGradient}>
              Questions
            </span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Direct answers to help you evaluate if our approach matches your commercial and technical requirements.
          </p>
        </section>

        <div className={styles.faqTwoColWrapper}>
          <div className={styles.faqGraphicLeftCol}>
            <img 
              src="/assets/images/digital-marketing-faq-3d.png" 
              alt={`${sub.title} FAQ Strategy Zaviroq`} 
              className={styles.faq3dBubbleImg}
            />
          </div>
          <div className={styles.faqAccordionRightCol}>
            <CategoryFaqAccordion faqs={subFaqs} />
          </div>
        </div>
      </RevealOnScroll>

      {/* ── STRATEGIC CONSULTATION CTA (3D Stage Banner) ── */}
      <RevealOnScroll delay={80} yOffset={30}>
        <div className={styles.ctaBannerContainer}>
          <div className={styles.ctaBannerGrid}>
            <div className={styles.ctaBannerLeft}>
              <div className={styles.ctaBannerEyebrow}>
                <Rocket size={14} />
                <span>TAKE THE NEXT STEP</span>
              </div>
              <h2 className={styles.ctaBannerTitle}>
                Ready to Deploy {sub.title} for Your Business?
              </h2>
              <p className={styles.ctaBannerText}>
                Speak directly with our senior technical consultants in Mangalore. We will analyze your current digital presence, identify key growth opportunities, and provide a clear execution roadmap.
              </p>
              <Link href="/contact" className={styles.ctaBannerButton}>
                <span>Request Your Strategic Consultation</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className={styles.ctaBannerRight}>
              <img 
                src="/assets/images/digital-marketing-cta-stage-3d.png" 
                alt="Accelerate Commercial Growth Zaviroq" 
                className={styles.ctaStageGraphic}
              />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}
