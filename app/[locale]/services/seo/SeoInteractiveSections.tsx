"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Search, 
  MapPin, 
  Cpu, 
  FileText, 
  Globe, 
  TrendingUp, 
  Layers, 
  CheckCircle2, 
  XCircle, 
  ChevronDown, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  Clock, 
  Award,
  Sparkles
} from 'lucide-react';
import styles from './page.module.css';

// ==========================================
// 1. Dynamic Location Typewriter
// ==========================================
const LOCATIONS = [
  "Mangalore",
  "Udupi & Manipal",
  "Coastal Karnataka",
  "Pan-India",
  "Dubai & UAE",
  "Saudi Arabia & GCC"
];

export function SeoLocationTypewriter() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentLoc = LOCATIONS[currentIndex];

    if (isTyping) {
      if (displayText.length < currentLoc.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentLoc.slice(0, displayText.length + 1));
        }, 90);
        return () => clearTimeout(timer);
      } else {
        const pause = setTimeout(() => setIsTyping(false), 2200);
        return () => clearTimeout(pause);
      }
    } else {
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 45);
        return () => clearTimeout(timer);
      } else {
        setCurrentIndex((prev) => (prev + 1) % LOCATIONS.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, currentIndex]);

  return (
    <span className={styles.typewriterWrapper}>
      <span className={styles.typewriterText}>{displayText}</span>
      <span className={styles.typewriterCursor}>|</span>
    </span>
  );
}

// ==========================================
// 2. Interactive 6-Pillar Tab Showcase
// ==========================================
interface Pillar {
  id: string;
  title: string;
  badge: string;
  icon: any;
  metricLabel: string;
  metricValue: string;
  tagline: string;
  description: string;
  deliverables: string[];
  bestFor: string;
}

const PILLARS: Pillar[] = [
  {
    id: "local-seo",
    title: "Local SEO & Google Maps 3-Pack",
    badge: "Mangalore & Regional Leader",
    icon: MapPin,
    metricValue: "3.8x",
    metricLabel: "More Direct Inbound Phone Calls & Store Footfall",
    tagline: "Be the first business customers discover when searching in Mangalore & Karnataka.",
    description: "Dominating local search requires far more than claiming a Google Business Profile. We implement deep local geo-grid optimization, citation harmonization, localized landing pages for Mangalore hubs (Hampankatta, Kadri, Deralakatte, Surathkal, Kankanady), and an automated review acquisition flywheel that secures your permanent spot in Google's coveted Maps 3-Pack.",
    deliverables: [
      "Google Business Profile (GBP) deep audit, verification & multi-attribute optimization",
      "Local NAP (Name, Address, Phone) consistency across 60+ premier directories",
      "Localized geo-target landing pages tailored to Mangalore, Udupi & Coastal hubs",
      "Reputation flywheel: Automated customer review gathering & 5-star sentiment strategy",
      "Hyper-local geo-grid ranking tracking across individual postal pin codes"
    ],
    bestFor: "Clinics, Hospitals, Real Estate, Retail Showrooms, Legal & Local Service Providers"
  },
  {
    id: "technical-seo",
    title: "Technical SEO & Core Web Vitals",
    badge: "Sub-Second Performance",
    icon: Cpu,
    metricValue: "100/100",
    metricLabel: "Target Google PageSpeed & Core Web Vitals Pass Rate",
    tagline: "Engineering search architectures that search engine crawlers crawl, render, and reward.",
    description: "Google refuses to rank slow, clunky websites. Our technical engineers eliminate render-blocking scripts, optimize First Contentful Paint (FCP) and Cumulative Layout Shift (CLS), construct comprehensive Schema.org JSON-LD microdata, and fix crawl budget bottlenecks so your pages get indexed and updated instantly.",
    deliverables: [
      "Core Web Vitals remediation: INP, LCP, and CLS optimized to sub-second thresholds",
      "Advanced Schema.org JSON-LD implementation (Organization, LocalBusiness, FAQ, Service)",
      "Crawl budget optimization, XML sitemaps, robots.txt, and clean URL canonicalization",
      "Next.js SSR & static prerendering architecture for lightning-fast Googlebot indexing",
      "Comprehensive site hygiene: 404 elimination, 301 redirect chains & orphan page fixes"
    ],
    bestFor: "Modern Web Apps, SaaS Platforms, High-Traffic Portals & Complex Websites"
  },
  {
    id: "on-page-seo",
    title: "On-Page SEO & Semantic Intent",
    badge: "AI & NLP Ready",
    icon: FileText,
    metricValue: "+84%",
    metricLabel: "Average Surge in Search Intent Relevance & Dwell Time",
    tagline: "Aligning your content with the exact language and intent of your highest-value buyers.",
    description: "Modern search engines do not look for repeated keywords; they understand semantic entities, user intent, and topical depth. We rebuild your on-page architecture with Natural Language Processing (NLP) models, compelling commercial headlines, internal link silos, and conversion-engineered layouts that turn searchers into paying clients.",
    deliverables: [
      "Commercial & Transactional search intent mapping for maximum conversion value",
      "Semantic topic cluster architecture establishing topical authority across your niche",
      "CTR-engineered Title Tags, Meta Descriptions, and H1-H4 semantic header structures",
      "Strategic internal linking silos that channel link equity to highest-converting pages",
      "Full image SEO: Next-gen AVIF/WebP formats, responsive sizing, and descriptive ALT tagging"
    ],
    bestFor: "B2B Companies, Professional Services, Agencies & Enterprise Brands"
  },
  {
    id: "authority-pr",
    title: "Authority Link Building & Digital PR",
    badge: "100% White-Hat Only",
    icon: Globe,
    metricValue: "+140%",
    metricLabel: "Domain Authority & Organic Referral Footprint Growth",
    tagline: "Earning editorial placements and digital PR mentions that make your brand an undisputed authority.",
    description: "Cheap spam links can permanently destroy your search rankings. Zaviroq executes authentic, editorial digital PR campaigns. We secure contextual links on reputable news outlets, industry journals, and regional business publications that boost your domain rating and protect your rankings from algorithmic penalties.",
    deliverables: [
      "Strict zero-spam, zero-PBN policy: Only genuine, high-authority editorial links",
      "Digital PR outreach pitch campaigns targeting national and industry-specific publishers",
      "Competitive backlink gap audits to cannibalize high-value competitor placements",
      "Unlinked brand mention reclamation and authoritative partner citation building",
      "Full transparent backlink reporting ledger with live URLs, DR/DA, and anchor text"
    ],
    bestFor: "Businesses seeking sustainable, defensible Page 1 rankings against entrenched rivals"
  },
  {
    id: "ecommerce-seo",
    title: "Ecommerce SEO & Revenue Velocity",
    badge: "Commercial Transaction Focus",
    icon: TrendingUp,
    metricValue: "5.4x",
    metricLabel: "Organic Revenue & Add-to-Cart Conversion Multiplier",
    tagline: "Turn your product catalog into a 24/7 customer acquisition machine.",
    description: "For online stores, ranking collections and high-margin product pages is the difference between surviving and dominating. We optimize faceted navigation, implement live stock & price schema, fix thin-content duplicate issues on Shopify/WooCommerce, and capture high-intent transactional queries.",
    deliverables: [
      "Faceted navigation & filter taxonomy optimization without index bloat",
      "Product rich snippet schema with real-time in-stock, pricing, and review ratings",
      "Google Merchant Center organic product feed synchronization & enhancement",
      "High-intent transactional keyword targeting for collections and seasonal sales",
      "Conversion Rate Optimization (CRO) audits on product pages to reduce cart abandonment"
    ],
    bestFor: "D2C Brands, Shopify Stores, WooCommerce Sellers, and Multi-Category Marketplaces"
  },
  {
    id: "enterprise-seo",
    title: "Enterprise & Global Multi-Region SEO",
    badge: "Global Scalability",
    icon: Layers,
    metricValue: "Global",
    metricLabel: "Multi-Market Domination (India, UAE, Saudi Arabia & Worldwide)",
    tagline: "Scale across regional languages, international currencies, and thousands of pages seamlessly.",
    description: "Whether you're expanding your Mangalore business into the Middle East (Dubai, Abu Dhabi, Riyadh) or managing a 50,000-page web portal, our enterprise SEO strategies deploy flawless hreflang attributes, multi-region CDN routing, and automated health monitoring to capture international market share.",
    deliverables: [
      "Multi-country hreflang architecture for India, UAE, Saudi Arabia, Qatar, and USA",
      "Scalable taxonomy and programmatic SEO templates for large product catalogs",
      "Multi-language SEO optimization (English, Arabic, Kannada, Hindi)",
      "Automated algorithmic change monitoring and weekly regression testing",
      "Dedicated Enterprise Account Director & C-Suite strategic executive reporting"
    ],
    bestFor: "Export-Import Firms, Healthcare Tourism, Multi-Location Franchises & Tech Companies"
  }
];

export function SeoPillarsTabs({ locale }: { locale: string }) {
  const [activeTab, setActiveTab] = useState(0);
  const currentPillar = PILLARS[activeTab];
  const IconComponent = currentPillar.icon;

  return (
    <div className={styles.pillarsContainer}>
      {/* Tab Navigation Pill Bar */}
      <div className={styles.pillarTabsTrack} role="tablist">
        {PILLARS.map((pillar, idx) => {
          const TabIcon = pillar.icon;
          const isActive = idx === activeTab;
          return (
            <button
              key={pillar.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(idx)}
              className={`${styles.pillarTabBtn} ${isActive ? styles.pillarTabBtnActive : ''}`}
            >
              <TabIcon size={18} className={styles.pillarTabIcon} />
              <span>{pillar.title.split(' & ')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Active Pillar Card Display */}
      <div className={styles.pillarContentCard}>
        <div className={styles.pillarCardHeader}>
          <div className={styles.pillarHeaderLeft}>
            <div className={styles.pillarBadgeRow}>
              <span className={styles.pillarBadge}>{currentPillar.badge}</span>
              <span className={styles.pillarSubtag}>Target: {currentPillar.bestFor.split(',')[0]}</span>
            </div>
            <h3 className={styles.pillarTitle}>
              <IconComponent size={28} className={styles.pillarTitleIcon} />
              {currentPillar.title}
            </h3>
            <p className={styles.pillarTagline}>{currentPillar.tagline}</p>
          </div>

          <div className={styles.pillarMetricBox}>
            <div className={styles.pillarMetricValue}>{currentPillar.metricValue}</div>
            <div className={styles.pillarMetricLabel}>{currentPillar.metricLabel}</div>
          </div>
        </div>

        <div className={styles.pillarBodyDivider}></div>

        <div className={styles.pillarBody}>
          <p className={styles.pillarDescription}>{currentPillar.description}</p>

          <div className={styles.pillarDeliverablesSection}>
            <h4 className={styles.deliverablesHeading}>
              <Sparkles size={16} /> Key Strategic Deliverables Included:
            </h4>
            <div className={styles.deliverablesGrid}>
              {currentPillar.deliverables.map((item, dIdx) => (
                <div key={dIdx} className={styles.deliverableItem}>
                  <CheckCircle2 size={18} className={styles.deliverableCheck} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.pillarCardFooter}>
            <div className={styles.bestForNote}>
              <strong>Ideal For:</strong> {currentPillar.bestFor}
            </div>
            <Link 
              href={`/${locale}/contact?service=${currentPillar.id}`}
              className={styles.pillarActionBtn}
            >
              Deploy This Pillar <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. SEO Diagnostic Matrix (Comparison)
// ==========================================
const COMPARISONS = [
  {
    feature: "Keyword Strategy",
    traditional: "Random keyword stuffing & vanity rankings for low-intent zero-search terms.",
    zaviroq: "Deep search intent clustering (Commercial & Transactional) mapped to revenue outcomes."
  },
  {
    feature: "Technical Performance",
    traditional: "Basic WordPress plugins, slow hosting, ignored Core Web Vitals and heavy bloated code.",
    zaviroq: "Sub-second Next.js server-side rendering, 100/100 Core Web Vitals, and zero CLS layout shifts."
  },
  {
    feature: "Local Search & Maps",
    traditional: "Simple Google map verification with no geo-grid tracking or citation consistency.",
    zaviroq: "Hyper-local geo-grid optimization across Mangalore & Udupi pin codes with review acquisition."
  },
  {
    feature: "Backlink Acquisition",
    traditional: "Spam directory submissions, comment links, and dangerous PBNs risking Google penalties.",
    zaviroq: "100% white-hat editorial digital PR, regional industry mentions, and verified authoritative links."
  },
  {
    feature: "Reporting & Transparency",
    traditional: "Confusing monthly PDF charts sent weeks late with zero actionable business insights.",
    zaviroq: "Real-time 24/7 analytics dashboard, live rank tracking, and bi-weekly executive review calls."
  },
  {
    feature: "Primary Goal",
    traditional: "Just traffic numbers and impressions that never turn into phone calls or orders.",
    zaviroq: "Qualified inbound pipeline leads, phone inquiries, store visits, and measurable ROI."
  }
];

export function SeoDiagnosticMatrix() {
  return (
    <div className={styles.matrixWrapper}>
      <div className={styles.matrixHeaderRow}>
        <div className={styles.matrixColFeature}>Evaluation Criteria</div>
        <div className={styles.matrixColBad}>Traditional Agencies in Mangalore</div>
        <div className={styles.matrixColGood}>Zaviroq Performance SEO Engine</div>
      </div>

      <div className={styles.matrixList}>
        {COMPARISONS.map((row, idx) => (
          <div key={idx} className={styles.matrixRow}>
            <div className={styles.matrixFeatureCell}>
              <span className={styles.featureTitle}>{row.feature}</span>
            </div>
            <div className={styles.matrixBadCell}>
              <XCircle size={18} className={styles.badIcon} />
              <span>{row.traditional}</span>
            </div>
            <div className={styles.matrixGoodCell}>
              <CheckCircle2 size={18} className={styles.goodIcon} />
              <span>{row.zaviroq}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 4. Interactive 90-Day Execution Roadmap
// ==========================================
const ROADMAP_MONTHS = [
  {
    month: "Month 01",
    phase: "Discovery & Technical Foundation",
    focus: "Eliminating Crawl Roadblocks & Mapping Commercial Queries",
    highlight: "150-Point Full Audit & Technical Cleanup",
    milestones: [
      "Complete 150-point technical site crawl & Google Search Console anomaly audit",
      "Core Web Vitals remediation (LCP, INP, CLS) & server response time acceleration",
      "Full competitor search footprint & backlink gap analysis in Mangalore & Karnataka",
      "Comprehensive commercial keyword intent research & mapping across core URLs",
      "Google Business Profile (GBP) audit, categorization & local citation synchronization"
    ]
  },
  {
    month: "Month 02",
    phase: "On-Page Overhaul & Content Velocity",
    focus: "Topical Authority Clustering & Local Page Deployment",
    highlight: "Semantic Intent & Content Infrastructure",
    milestones: [
      "Rewriting & optimization of high-priority Title tags, Meta descriptions & H-tags",
      "Publication of high-intent topical authority pillar pages and service hubs",
      "Deployment of localized geo-landing pages for Mangalore, Udupi & nearby commercial hubs",
      "Internal linking architecture restructuring to channel PageRank to commercial pages",
      "Implementation of rich JSON-LD Schema markup across all service & product categories"
    ]
  },
  {
    month: "Month 03",
    phase: "Authority Building, PR & Revenue Scale",
    focus: "Digital PR Outreach, Map Pack Dominance & CRO",
    highlight: "Market Dominance & Conversion Optimization",
    milestones: [
      "Tier-1 editorial outreach and digital PR placements on authoritative industry domains",
      "Local Maps 3-Pack citation push and customer review acquisition system activation",
      "Conversion Rate Optimization (CRO) heatmaps, CTA testing, and lead form optimization",
      "Bi-weekly executive ROI review: Keyword rankings, organic pipeline leads & revenue",
      "Roadmap expansion for multi-region or global markets (UAE, Saudi Arabia, International)"
    ]
  }
];

export function SeoRoadmapTimeline() {
  const [activeMonth, setActiveMonth] = useState(0);

  return (
    <div className={styles.roadmapContainer}>
      <div className={styles.roadmapNav}>
        {ROADMAP_MONTHS.map((m, idx) => (
          <button
            key={idx}
            onClick={() => setActiveMonth(idx)}
            className={`${styles.roadmapNavBtn} ${idx === activeMonth ? styles.roadmapNavBtnActive : ''}`}
          >
            <span className={styles.roadmapNavBadge}>{m.month}</span>
            <span className={styles.roadmapNavTitle}>{m.phase.split(' & ')[0]}</span>
          </button>
        ))}
      </div>

      <div className={styles.roadmapCard}>
        <div className={styles.roadmapCardHeader}>
          <div>
            <span className={styles.roadmapPhaseBadge}>{ROADMAP_MONTHS[activeMonth].month} : {ROADMAP_MONTHS[activeMonth].phase}</span>
            <h3 className={styles.roadmapCardTitle}>{ROADMAP_MONTHS[activeMonth].focus}</h3>
          </div>
          <div className={styles.roadmapHighlightPill}>
            <Clock size={16} />
            <span>{ROADMAP_MONTHS[activeMonth].highlight}</span>
          </div>
        </div>

        <div className={styles.roadmapList}>
          {ROADMAP_MONTHS[activeMonth].milestones.map((item, mIdx) => (
            <div key={mIdx} className={styles.roadmapListItem}>
              <div className={styles.roadmapStepNum}>{mIdx + 1}</div>
              <p className={styles.roadmapStepText}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 5. Interactive FAQ Accordion
// ==========================================
interface FaqItem {
  q: string;
  a: string;
}

export function SeoFaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className={styles.faqList}>
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div 
            key={idx} 
            className={`${styles.faqCard} ${isOpen ? styles.faqCardOpen : ''}`}
          >
            <button
              onClick={() => toggle(idx)}
              className={styles.faqQuestionBtn}
              aria-expanded={isOpen}
            >
              <span className={styles.faqQuestionText}>{faq.q}</span>
              <span className={styles.faqChevron}>
                <ChevronDown size={20} className={`${styles.chevronIcon} ${isOpen ? styles.chevronRotated : ''}`} />
              </span>
            </button>
            {isOpen && (
              <div className={styles.faqAnswerBody}>
                <p>{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
