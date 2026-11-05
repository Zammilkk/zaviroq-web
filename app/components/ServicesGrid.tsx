'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  LayoutGrid, Laptop, Megaphone, Palette, Layers, 
  Search, Code, PenTool, TrendingUp, ShoppingCart, ArrowRight 
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
    id: 'seo',
    key: 'seo',
    categoryKey: 'digital-marketing',
    title: 'SEO',
    desc: 'Boost visibility, rank higher, and get more customers.',
    icon: Search,
    href: '/services/seo',
    graphic: '/assets/images/service-seo-graphic.png',
  },
  {
    id: 'web-development',
    key: 'web-development',
    categoryKey: 'web-development',
    title: 'Web Development',
    desc: 'Custom, scalable, and high-performance websites.',
    icon: Code,
    href: '/services/web-development',
    graphic: '/assets/images/service-web-dev-graphic.png',
  },
  {
    id: 'branding-design',
    key: 'branding-design',
    categoryKey: 'creative-media',
    title: 'Branding & Design',
    desc: 'Build a strong and memorable brand identity.',
    icon: PenTool,
    href: '/services/branding-design',
    graphic: '/assets/images/service-branding-graphic.png',
  },
  {
    id: 'performance-marketing',
    key: 'performance-marketing',
    categoryKey: 'digital-marketing',
    title: 'Performance Marketing',
    desc: 'Drive targeted traffic, leads, and real ROI.',
    icon: TrendingUp,
    href: '/services/performance-marketing',
    graphic: '/assets/images/service-performance-graphic.png',
  },
  {
    id: 'ecommerce-systems',
    key: 'ecommerce-systems',
    categoryKey: 'business-solutions',
    title: 'Ecommerce & Systems',
    desc: 'Build, manage, and scale your online store effortlessly.',
    icon: ShoppingCart,
    href: '/services/ecommerce-systems',
    graphic: '/assets/images/service-ecommerce-graphic.png',
  },
  {
    id: 'business-solutions',
    key: 'business-solutions',
    categoryKey: 'business-solutions',
    title: 'Business Solutions',
    desc: 'Smart digital systems to streamline and grow your business.',
    icon: Layers,
    href: '/services/ecommerce-systems',
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
    : activeTab === 'web-development'
    ? defaultServices.filter(s => s.categoryKey === 'web-development' || s.id === 'ecommerce-systems')
    : activeTab === 'business-solutions'
    ? defaultServices.filter(s => s.categoryKey === 'business-solutions')
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
              viewBox="0 0 280 22" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path 
                d="M4 16C62 6 182 2 276 8C202 14 92 18 4 16Z" 
                fill="url(#brushGrad)" 
              />
              <defs>
                <linearGradient id="brushGrad" x1="4" y1="10" x2="276" y2="10" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7B61FF" />
                  <stop offset="1" stopColor="#A855F7" />
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
          const destination = `/${locale}${service.href}`;

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
