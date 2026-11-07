'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Plane, 
  Hotel, 
  HeartPulse, 
  Factory, 
  ShoppingBag, 
  GraduationCap, 
  Briefcase, 
  TrendingUp, 
  ArrowRight, 
  Play, 
  BarChart3, 
  Target, 
  ShieldCheck, 
  Layers, 
  Percent, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import styles from './page.module.css';

export interface IndustryItem {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  image: string;
  spotlightImage: string;
  spotlightTitle: string;
  spotlightHighlight: string;
  spotlightDesc: string;
  spotlightStats: {
    val: string;
    label: string;
    icon: string;
  }[];
  ctaText: string;
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'real-estate',
    title: 'Real Estate',
    tagline: 'Generate qualified leads and drive property inquiries.',
    iconName: 'Building2',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    spotlightImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    spotlightTitle: 'Real Estate',
    spotlightHighlight: 'Marketing',
    spotlightDesc: 'End-to-end digital growth for real estate brands — from lead generation and project promotions to a high-performing online presence.',
    spotlightStats: [
      { val: '3.8x', label: 'Lead Growth', icon: 'BarChart3' },
      { val: '-42%', label: 'Cost Per Lead', icon: 'Percent' },
      { val: '+65%', label: 'Site Conversions', icon: 'Target' }
    ],
    ctaText: 'Explore Real Estate Solutions'
  },
  {
    id: 'travel-tourism',
    title: 'Travel & Tourism',
    tagline: 'Drive bookings and build a global presence.',
    iconName: 'Plane',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop',
    spotlightImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    spotlightTitle: 'Travel & Tourism',
    spotlightHighlight: 'Growth',
    spotlightDesc: 'High-converting itinerary booking engines, international PPC campaigns, and inspiring visual storytelling designed to maximize tourist bookings.',
    spotlightStats: [
      { val: '4.2x', label: 'Direct Bookings', icon: 'BarChart3' },
      { val: '-35%', label: 'Booking CPA', icon: 'Percent' },
      { val: '120k+', label: 'Global Travelers', icon: 'Target' }
    ],
    ctaText: 'Explore Tourism Solutions'
  },
  {
    id: 'hospitality-hotels',
    title: 'Hospitality & Hotels',
    tagline: 'Increase direct bookings and brand visibility.',
    iconName: 'Hotel',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    spotlightImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
    spotlightTitle: 'Hospitality & Hotels',
    spotlightHighlight: 'Strategy',
    spotlightDesc: 'Luxury boutique hotel positioning, commission-free direct booking funnels, and local SEO that outranks third-party OTAs.',
    spotlightStats: [
      { val: '+88%', label: 'Direct Bookings', icon: 'BarChart3' },
      { val: '₹1.8Cr+', label: 'OTA Commission Saved', icon: 'Percent' },
      { val: '4.9★', label: 'Guest Sentiment', icon: 'Target' }
    ],
    ctaText: 'Explore Hospitality Solutions'
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    tagline: 'Build trust, attract patients, and grow your practice.',
    iconName: 'HeartPulse',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop',
    spotlightImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop',
    spotlightTitle: 'Healthcare & Clinic',
    spotlightHighlight: 'Acquisition',
    spotlightDesc: 'HIPAA-compliant patient acquisition funnels, local doctor SEO, reputation management, and automated appointment scheduling.',
    spotlightStats: [
      { val: '280+', label: 'Monthly Patient Calls', icon: 'BarChart3' },
      { val: '-48%', label: 'Cost Per Inquiry', icon: 'Percent' },
      { val: '99.4%', label: 'Verified Inquiries', icon: 'Target' }
    ],
    ctaText: 'Explore Healthcare Solutions'
  },
  {
    id: 'industrial-manufacturing',
    title: 'Industrial & Manufacturing',
    tagline: 'Strengthen brand presence and generate B2B leads.',
    iconName: 'Factory',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    spotlightImage: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop',
    spotlightTitle: 'Industrial & B2B',
    spotlightHighlight: 'Manufacturing',
    spotlightDesc: 'Precision technical SEO for OEM catalogs, international distributor acquisition, and enterprise-grade procurement inquiry pipelines.',
    spotlightStats: [
      { val: '₹24Cr+', label: 'B2B Pipeline Won', icon: 'BarChart3' },
      { val: '14+', label: 'Export Markets', icon: 'Target' },
      { val: '+135%', label: 'RFQ Inquiries', icon: 'Percent' }
    ],
    ctaText: 'Explore Manufacturing Solutions'
  },
  {
    id: 'ecommerce-retail',
    title: 'E-commerce & Retail',
    tagline: 'Build high-converting stores and increase online sales.',
    iconName: 'ShoppingBag',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop',
    spotlightImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
    spotlightTitle: 'E-Commerce & Retail',
    spotlightHighlight: 'Velocity',
    spotlightDesc: 'Headless Next.js and Shopify architectures, Google Shopping Performance Max mastery, and cart-recovery automation with high ROAS.',
    spotlightStats: [
      { val: '5.4x', label: 'Average ROAS', icon: 'BarChart3' },
      { val: '+74%', label: 'Checkout Rate', icon: 'Target' },
      { val: '0.8s', label: 'Storefront Load Speed', icon: 'Percent' }
    ],
    ctaText: 'Explore E-Commerce Solutions'
  },
  {
    id: 'education-training',
    title: 'Education & Training',
    tagline: 'Attract more students and grow enrollments.',
    iconName: 'GraduationCap',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop',
    spotlightImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop',
    spotlightTitle: 'Education & Academic',
    spotlightHighlight: 'Enrollments',
    spotlightDesc: 'Admissions funnel engineering, institutional trust positioning, student inquiry retargeting, and regional multi-campus Google Ads.',
    spotlightStats: [
      { val: '+165%', label: 'Application Volume', icon: 'BarChart3' },
      { val: '-38%', label: 'CPA Per Application', icon: 'Percent' },
      { val: '92%', label: 'Enrollment Conversion', icon: 'Target' }
    ],
    ctaText: 'Explore Education Solutions'
  },
  {
    id: 'corporate-b2b',
    title: 'Corporate & B2B',
    tagline: 'Drive brand authority and long-term business growth.',
    iconName: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    spotlightImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    spotlightTitle: 'Corporate & B2B',
    spotlightHighlight: 'Authority',
    spotlightDesc: 'Executive thought leadership, bespoke React web platforms, ABM LinkedIn advertising, and high-value decision-maker acquisition.',
    spotlightStats: [
      { val: '3.6x', label: 'C-Suite Lead Growth', icon: 'BarChart3' },
      { val: '98.5%', label: 'Topical Authority', icon: 'Target' },
      { val: '₹8Cr+', label: 'Enterprise Contract Value', icon: 'Percent' }
    ],
    ctaText: 'Explore Corporate Solutions'
  }
];

function getIndustryIcon(name: string, size = 20) {
  switch (name) {
    case 'Building2': return <Building2 size={size} />;
    case 'Plane': return <Plane size={size} />;
    case 'Hotel': return <Hotel size={size} />;
    case 'HeartPulse': return <HeartPulse size={size} />;
    case 'Factory': return <Factory size={size} />;
    case 'ShoppingBag': return <ShoppingBag size={size} />;
    case 'GraduationCap': return <GraduationCap size={size} />;
    case 'Briefcase': return <Briefcase size={size} />;
    default: return <Building2 size={size} />;
  }
}

function getStatIcon(name: string) {
  switch (name) {
    case 'BarChart3': return <BarChart3 size={18} />;
    case 'Percent': return <Percent size={18} />;
    case 'Target': return <Target size={18} />;
    default: return <TrendingUp size={18} />;
  }
}

export function HeroFloatingCollage() {
  return (
    <div className={styles.heroCollageWrapper}>
      {/* Background Luminous Purple Ribbon Ring */}
      <div className={styles.luminousRingGlow} />
      <div className={styles.orbitalRibbon} />

      {/* 4 Floating Cards in Perspective */}
      <div className={`${styles.floatingCard} ${styles.cardSkyscraper}`}>
        <img 
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop" 
          alt="Corporate Skyscraper Architecture"
          className={styles.floatingCardImg}
        />
        <div className={styles.floatingCardGlass}>
          <div className={styles.floatingCardBadge}>
            <Building2 size={13} />
            <span>Corporate</span>
          </div>
        </div>
      </div>

      <div className={`${styles.floatingCard} ${styles.cardPlane}`}>
        <img 
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop" 
          alt="Travel and Tourism Flight"
          className={styles.floatingCardImg}
        />
        <div className={styles.floatingCardGlass}>
          <div className={styles.floatingCardBadge}>
            <Plane size={13} />
            <span>Tourism</span>
          </div>
        </div>
      </div>

      <div className={`${styles.floatingCard} ${styles.cardVilla}`}>
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop" 
          alt="Luxury Real Estate Villa"
          className={styles.floatingCardImg}
        />
        <div className={styles.floatingCardGlass}>
          <div className={styles.floatingCardBadge}>
            <Hotel size={13} />
            <span>Real Estate</span>
          </div>
        </div>
      </div>

      <div className={`${styles.floatingCard} ${styles.cardStethoscope}`}>
        <img 
          src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600&auto=format&fit=crop" 
          alt="Healthcare Stethoscope"
          className={styles.floatingCardImg}
        />
        <div className={styles.floatingCardGlass}>
          <div className={styles.floatingCardBadge}>
            <HeartPulse size={13} />
            <span>Healthcare</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function IndustryGridAndSpotlight() {
  const [activeId, setActiveId] = useState<string>('real-estate');
  const activeItem = INDUSTRIES_DATA.find((i) => i.id === activeId) || INDUSTRIES_DATA[0];

  const handleSelectIndustry = (id: string) => {
    setActiveId(id);
    const spotlightEl = document.getElementById('industry-spotlight');
    if (spotlightEl) {
      spotlightEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <>
      {/* 8 Industry Cards Grid Matching User Mockup */}
      <div className={styles.industriesGrid8}>
        {INDUSTRIES_DATA.map((ind) => {
          const isActive = ind.id === activeId;
          return (
            <div
              key={ind.id}
              className={`${styles.industryCard8} ${isActive ? styles.industryCardActive : ''}`}
              onClick={() => handleSelectIndustry(ind.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleSelectIndustry(ind.id);
                }
              }}
            >
              {/* Top Text & Icon */}
              <div className={styles.cardTopContent}>
                <div className={styles.cardIconBox}>
                  {getIndustryIcon(ind.iconName, 18)}
                </div>
                <h3 className={styles.cardTitle}>{ind.title}</h3>
                <p className={styles.cardTagline}>{ind.tagline}</p>
              </div>

              {/* Bottom Photo Preview Window */}
              <div className={styles.cardPhotoWrapper}>
                <img 
                  src={ind.image} 
                  alt={`${ind.title} Digital Marketing`}
                  className={styles.cardPhotoImg}
                  loading="lazy"
                />
                <div className={styles.cardPhotoGradient} />
              </div>

              {/* Subtle Active Indicator Pill */}
              {isActive && (
                <div className={styles.activeCheckPill}>
                  <Sparkles size={11} />
                  <span>Selected</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── SECTION 3: INDUSTRY SPOTLIGHT SHOWCASE ── */}
      <div id="industry-spotlight" className={styles.spotlightContainer}>
        <div className={styles.spotlightCard}>
          {/* Left Large Showcase Image */}
          <div className={styles.spotlightVisualCol}>
            <div className={styles.spotlightImgWrap}>
              <img 
                src={activeItem.spotlightImage} 
                alt={`${activeItem.title} Marketing Spotlight`}
                className={styles.spotlightLargeImg}
              />
              <div className={styles.spotlightVisualGlow} />
            </div>
          </div>

          {/* Right Content Column */}
          <div className={styles.spotlightContentCol}>
            <div className={styles.spotlightBadge}>
              <Sparkles size={13} />
              <span>Industry Spotlight</span>
            </div>

            <h2 className={styles.spotlightTitle}>
              {activeItem.spotlightTitle}{' '}
              <span className={styles.headlineGradient}>
                {activeItem.spotlightHighlight}
              </span>
            </h2>

            <p className={styles.spotlightDesc}>
              {activeItem.spotlightDesc}
            </p>

            {/* 3 Impact Stat Metrics */}
            <div className={styles.spotlightStatsRow}>
              {activeItem.spotlightStats.map((stat, idx) => (
                <div key={idx} className={styles.spotlightStatItem}>
                  <div className={styles.spotlightStatHeader}>
                    <div className={styles.statIconBadge}>
                      {getStatIcon(stat.icon)}
                    </div>
                    <div className={styles.spotlightStatVal}>{stat.val}</div>
                  </div>
                  <div className={styles.spotlightStatLabel}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className={styles.spotlightActionRow}>
              <Link href="/contact" className={styles.btnSpotlightCta}>
                <span>{activeItem.ctaText}</span>
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
