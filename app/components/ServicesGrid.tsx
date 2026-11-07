'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  LayoutGrid, Laptop, Megaphone, Palette, Layers, 
  Search, Code, PenTool, TrendingUp, ShoppingCart, ArrowRight,
  Share2, Layout, Video, Mail, Cpu
} from 'lucide-react';
import styles from './ServicesGrid.module.css';

interface ServiceCategory {
  key: string;
  label: string;
  icon?: string;
  badge?: string;
  desc: string;
  image?: string;
  services?: { slug: string; title: string }[];
  locations?: { path: string; title: string }[];
}

interface ServiceCardItem {
  id: string;
  key: string;
  categoryKey: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  href: string;
  graphic: string;
}

const defaultServices: ServiceCardItem[] = [
  {
    id: 'digital-marketing',
    key: 'digital-marketing',
    categoryKey: 'digital-marketing',
    title: 'Digital Marketing',
    desc: 'Turn searchers into qualified buyers with ROI-focused funnels.',
    icon: Megaphone,
    href: '/services/digital-marketing',
    graphic: '/assets/images/service-performance-graphic.png',
  },
  {
    id: 'seo',
    key: 'seo',
    categoryKey: 'digital-marketing',
    title: 'SEO Services',
    desc: 'Dominate Google rankings, Local Maps 3-Pack, and organic traffic.',
    icon: Search,
    href: '/services/seo',
    graphic: '/assets/images/service-seo-graphic.png',
  },
  {
    id: 'paid-advertising',
    key: 'paid-advertising',
    categoryKey: 'digital-marketing',
    title: 'Google & Paid Ads',
    desc: 'High-intent PPC, Meta Ads, and YouTube acquisition campaigns.',
    icon: TrendingUp,
    href: '/services/paid-advertising',
    graphic: '/assets/images/service-performance-graphic.png',
  },
  {
    id: 'social-media-marketing',
    key: 'social-media-marketing',
    categoryKey: 'digital-marketing',
    title: 'Social Media Marketing',
    desc: 'Engaging content, viral reels, and targeted social growth.',
    icon: Share2,
    href: '/services/social-media-marketing',
    graphic: '/assets/images/graphic1.png',
  },
  {
    id: 'website-design',
    key: 'website-design',
    categoryKey: 'web-development',
    title: 'Website Design',
    desc: 'Bespoke UI/UX, conversion landing pages, and corporate redesigns.',
    icon: Layout,
    href: '/services/website-design',
    graphic: '/assets/images/service-web-dev-graphic.png',
  },
  {
    id: 'website-development',
    key: 'website-development',
    categoryKey: 'web-development',
    title: 'Website Development',
    desc: 'Next.js, React, and custom fast websites built for scale.',
    icon: Code,
    href: '/services/website-development',
    graphic: '/assets/images/service-web-dev-graphic.png',
  },
  {
    id: 'ecommerce-development',
    key: 'ecommerce-development',
    categoryKey: 'web-development',
    title: 'E-commerce Development',
    desc: 'High-converting Shopify, WooCommerce, and custom stores.',
    icon: ShoppingCart,
    href: '/services/ecommerce-development',
    graphic: '/assets/images/service-ecommerce-graphic.png',
  },
  {
    id: 'branding',
    key: 'branding',
    categoryKey: 'creative-media',
    title: 'Branding & Design',
    desc: 'Build a memorable visual identity, logos, and corporate profiles.',
    icon: PenTool,
    href: '/services/branding',
    graphic: '/assets/images/service-branding-graphic.png',
  },
  {
    id: 'video-production',
    key: 'video-production',
    categoryKey: 'creative-media',
    title: 'Video Production',
    desc: 'High-impact promotional videos, social reels, and corporate edits.',
    icon: Video,
    href: '/services/video-production',
    graphic: '/assets/images/graphic2.png',
  },
  {
    id: 'email-marketing',
    key: 'email-marketing',
    categoryKey: 'digital-marketing',
    title: 'Email Marketing',
    desc: 'Automated drip flows, newsletter retention, and B2B cold outreach.',
    icon: Mail,
    href: '/services/email-marketing',
    graphic: '/assets/images/graphic3.png',
  },
  {
    id: 'ai-automation',
    key: 'ai-automation',
    categoryKey: 'business-solutions',
    title: 'AI Automation',
    desc: 'Intelligent chatbots, blog automations, and operational workflows.',
    icon: Cpu,
    href: '/services/ai-automation',
    graphic: '/assets/images/service-business-graphic.png',
  },
  {
    id: 'business-software',
    key: 'business-software',
    categoryKey: 'business-solutions',
    title: 'Business Software',
    desc: 'Custom ERPs, hotel management systems, and executive dashboards.',
    icon: Layers,
    href: '/services/business-software',
    graphic: '/assets/images/service-business-graphic.png',
  },
];

const filterTabs = [
  { key: 'all', label: 'All Services', Icon: LayoutGrid },
  { key: 'web-development', label: 'Web & Development', Icon: Laptop },
  { key: 'digital-marketing', label: 'Digital Marketing', Icon: Megaphone },
  { key: 'creative-media', label: 'Creative & Media', Icon: Palette },
  { key: 'business-solutions', label: 'Business Solutions', Icon: Layers },
];

export default function ServicesGrid({ 
  categories, 
  locale = 'en'
}: { 
  categories?: ServiceCategory[];
  locale?: string;
}) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredServices = activeTab === 'all' 
    ? defaultServices 
    : defaultServices.filter(s => s.categoryKey === activeTab);

  return (
    <section className={styles.servicesSection} id="all">
      {/* SECTION HEADER */}
      <div className={styles.sectionHeader}>
        <div className={styles.eyebrowBadge}>
          <span className={styles.eyebrowDash}>—</span> OUR SERVICES <span className={styles.eyebrowDash}>—</span>
        </div>

        <h2 className={styles.sectionTitle}>
          End-to-End{' '}
          <span className={styles.titleHighlight}>
            Digital Solutions
            <svg 
              className={styles.titleUnderline} 
              viewBox="0 0 280 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Soft pulsing ambient neon underglow */}
              <path 
                className={styles.underlineGlow}
                d="M4 16C62 6 182 2 276 8C202 14 92 18 4 16Z" 
                fill="url(#brushGrad)" 
              />
              {/* Main organic hand-drawn brush stroke */}
              <path 
                className={styles.underlineBrush}
                d="M4 16C62 6 182 2 276 8C202 14 92 18 4 16Z" 
                fill="url(#brushGrad)" 
              />
              {/* Traveling neon light shimmer beam along the ridge */}
              <path 
                className={styles.underlineHighlight}
                d="M6 14C65 5 180 3 274 8"
                stroke="url(#shimmerGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="brushGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7B61FF" />
                  <stop offset="50%" stopColor="#9333EA" />
                  <stop offset="100%" stopColor="#C084FC" />
                </linearGradient>
                <linearGradient id="shimmerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                  <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.95" />
                  <stop offset="55%" stopColor="#E9D5FF" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h2>

        <p className={styles.sectionSubtitle}>
          Powerful, creative, and results-driven services to grow your business online.
        </p>
      </div>

      {/* FILTER BAR */}
      <div className={styles.filterBarWrapper}>
        <div className={styles.filterBar}>
          {filterTabs.map(({ key, label, Icon }) => {
            const isActive = activeTab === key;
            return (
              <button 
                key={key}
                type="button"
                className={`${styles.filterTab} ${isActive ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(key)}
                aria-pressed={isActive}
              >
                <Icon size={16} className={styles.tabIcon} />
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* SERVICES GRID */}
      <div className={styles.servicesGrid}>
        {filteredServices.map((service) => {
          const ServiceIcon = service.icon;
          const destination = service.href;

          return (
            <Link 
              key={service.id} 
              href={destination}
              className={styles.serviceCard}
            >
              {/* Card Left: Icon + Content + CTA */}
              <div className={styles.cardLeft}>
                <div className={styles.iconSquare}>
                  <ServiceIcon size={19} />
                </div>
                
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
                
                <div className={styles.learnMoreRow}>
                  <span>Learn More</span>
                  <div className={styles.learnMoreCircle}>
                    <ArrowRight size={11} strokeWidth={2.8} />
                  </div>
                </div>
              </div>

              {/* Card Right: 3D Artwork Illustration */}
              <div className={styles.cardRight}>
                <div className={styles.graphicAura} aria-hidden="true" />
                <img 
                  src={service.graphic} 
                  alt={`${service.title} Illustration`} 
                  className={styles.cardGraphic} 
                  loading="lazy"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
