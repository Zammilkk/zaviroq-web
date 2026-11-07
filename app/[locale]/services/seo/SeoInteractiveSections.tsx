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
  "Bangalore & Pan-India",
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
        }, 85);
        return () => clearTimeout(timer);
      } else {
        const pause = setTimeout(() => setIsTyping(false), 2400);
        return () => clearTimeout(pause);
      }
    } else {
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
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
// 2. 6 Core SEO Pillars (Humanized & Grounded)
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
    id: "local-seo-mangalore",
    title: "Local SEO & Google Maps 3-Pack",
    badge: "Mangalore & Coastal Hubs",
    icon: MapPin,
    metricValue: "Top 3",
    metricLabel: "Google Maps Pack Visibility Across Mangalore Pin Codes",
    tagline: "Capture customers searching for your services across Mangalore, Udupi, and Coastal Karnataka.",
    description: "When someone in Mangalore searches for a doctor, real estate developer, lawyer, or showroom, Google displays the Maps 3-Pack before any standard website links. We optimize your Google Business Profile, audit your Name, Address, and Phone (NAP) citations across 60+ local directories, eliminate duplicate listings, and build localized landing pages targeting key commercial areas like Hampankatta, Kadri, Kottara Chowki, Kankanady, Bejai, Deralakatte, and Surathkal. The result is consistent inbound phone calls, store directions, and direct customer walk-ins.",
    deliverables: [
      "Complete Google Business Profile (GBP) audit, primary & secondary category selection, and geo-grid rank verification",
      "NAP consistency cleanup across Indiamart, Justdial, Sulekha, Yellow Pages, and 50+ local citations to fix split ranking signals",
      "Hyper-local landing page architecture targeting Mangalore, Udupi, Manipal, Surathkal, and Deralakatte",
      "Automated client review collection system with direct review shortlinks and Google guideline compliance",
      "Local geo-grid ranking reports showing your exact Google Maps rank across individual postal areas (575001 to 575030)"
    ],
    bestFor: "Hospitals, Clinics, Real Estate Builders, Retail Showrooms, Legal & Regional Service Providers"
  },
  {
    id: "technical-seo-speed",
    title: "Technical SEO & Core Web Vitals",
    badge: "Sub-Second Infrastructure",
    icon: Cpu,
    metricValue: "100/100",
    metricLabel: "Target Google PageSpeed & Core Web Vitals Score",
    tagline: "Eliminate code bloat, fix crawl errors, and ensure Googlebot renders your pages in milliseconds.",
    description: "Search engines cannot rank what they cannot efficiently crawl and understand. Traditional WordPress websites in Mangalore frequently suffer from slow hosting, render-blocking plugins, broken redirect chains, and failing Core Web Vitals. Our engineering team audits your site with Screaming Frog and Google Search Console to fix 404 errors, eliminate duplicate content via canonical tags, resolve Cumulative Layout Shift (CLS), accelerate Largest Contentful Paint (LCP), and deploy rich Schema.org JSON-LD microdata so Google understands your business entities immediately.",
    deliverables: [
      "Core Web Vitals remediation: Achieving sub-second LCP, sub-200ms INP, and zero layout shift (CLS)",
      "Advanced Schema.org JSON-LD microdata: LocalBusiness, MedicalOrganization, RealEstateAgent, FAQPage, and BreadcrumbList",
      "Crawl budget optimization: Dynamic XML sitemaps, robots.txt directives, canonical tag audits, and 301 redirect chain cleanups",
      "Mobile-first indexing audit: Server-side rendering (SSR) acceleration, touch target sizing, and viewport performance",
      "Search Console hygiene: Fixing indexation exclusions, soft 404s, page redirect anomalies, and schema validation errors"
    ],
    bestFor: "Businesses with slow websites, complex catalogs, custom web apps, or recent traffic drops"
  },
  {
    id: "on-page-semantic-seo",
    title: "On-Page SEO & Intent Clustering",
    badge: "AI Overview & Semantic Ready",
    icon: FileText,
    metricValue: "Top 1%",
    metricLabel: "Topical Depth & Natural Language Processing Relevance",
    tagline: "Structure content that answers search intent so thoroughly that Google and AI Overviews cite you first.",
    description: "Google's ranking systems have moved beyond basic keyword matching. Modern search algorithms evaluate topical authority, search intent (informational, commercial, or transactional), and entity relationships. We build topical content clusters around your core offerings, rewrite your title tags and meta descriptions to maximize click-through rates (CTR), optimize heading structures (H1 to H4), and interlink supporting articles to pass PageRank directly to your highest-value money pages.",
    deliverables: [
      "Commercial intent keyword mapping: Separating informational research queries from high-intent purchase searches",
      "Topical cluster architecture: Creating comprehensive pillar pages and interlinked supporting topic hubs",
      "CTR-engineered Title Tags and Meta Descriptions tested against real Google search behavior in Karnataka",
      "Semantic header hierarchy (H1-H4) structured to capture Google Featured Snippets and AI Overviews",
      "Image SEO: Next-generation WebP/AVIF compression, descriptive alt text, and contextual file naming"
    ],
    bestFor: "B2B companies, industrial manufacturers, professional consultants, and service firms"
  },
  {
    id: "authority-digital-pr",
    title: "Authority Link Building & Digital PR",
    badge: "100% White-Hat Only",
    icon: Globe,
    metricValue: "0 Penalties",
    metricLabel: "Guaranteed Zero Private Blog Networks (PBNs) or Spam Links",
    tagline: "Build genuine industry authority with verified editorial placements on real websites.",
    description: "Low-quality link building destroys businesses. Buying bulk links on Fiverr or spam directory blast networks will eventually trigger a manual action or algorithmic penalty from Google. Zaviroq operates an authentic digital PR and editorial outreach process. We identify high-authority industry journals, regional Karnataka news publications, and reputable trade portals to earn contextual backlinks that build defensible domain rating (DR) and drive qualified referral visits.",
    deliverables: [
      "Strict white-hat policy: Zero private blog networks (PBNs), zero link farms, and zero comment spam",
      "Contextual editorial placements on legitimate, high-DR news and industry-specific websites",
      "Competitor backlink gap analysis: Reverse-engineering competitor links to secure higher-authority placements",
      "Unlinked brand mention reclamation and local business chamber association link building",
      "Itemized monthly backlink ledger: Every single acquired URL is shared with live anchor text and domain metrics"
    ],
    bestFor: "Established brands competing against entrenched regional competitors in high-stakes industries"
  },
  {
    id: "ecommerce-catalog-seo",
    title: "E-Commerce SEO & Revenue Velocity",
    badge: "High-Intent Sales Focus",
    icon: TrendingUp,
    metricValue: "+260%",
    metricLabel: "Average Increase in Organic Product Category Transactions",
    tagline: "Turn your online store catalog into a predictable, non-paid customer acquisition channel.",
    description: "Ranking an e-commerce website requires a specialized approach. Online stores frequently suffer from duplicate content caused by faceted navigation, thin product descriptions, and unoptimized category hierarchies. We configure canonical tags across product filters, add Product and Offer schema with live stock and pricing indicators, optimize category titles for commercial intent, and integrate your store with Google Merchant Center to capture free organic product listings.",
    deliverables: [
      "Faceted navigation and URL filter optimization without creating index bloat or duplicate content penalties",
      "Product structured data schema with live pricing, stock availability, and verified customer review aggregates",
      "High-intent transactional keyword optimization across product collection headers and descriptions",
      "Google Merchant Center organic product feed synchronization and rich snippet enhancement",
      "Category page architecture designed to convert searchers into completed checkout transactions"
    ],
    bestFor: "D2C brands, Shopify & WooCommerce store owners, regional retailers, and niche marketplaces"
  },
  {
    id: "enterprise-international-seo",
    title: "Enterprise & Global Multi-Region SEO",
    badge: "Gulf & International Expansion",
    icon: Layers,
    metricValue: "Multi-Market",
    metricLabel: "Targeted Search Domination Across India, UAE & Saudi Arabia",
    tagline: "Help your Mangalore business win high-value corporate clients across Dubai, Riyadh, and Western markets.",
    description: "Mangalore has deep commercial ties with the Middle East. Many local firms in healthcare, education, construction, and IT seek clients in the UAE (Dubai, Abu Dhabi), Saudi Arabia (Riyadh, Jeddah), and Qatar. We implement multi-region international SEO with precise hreflang tags, subfolder or ccTLD localization, and regional content targeting to ensure your business ranks in Gulf searches without cross-cannibalizing your Indian rankings.",
    deliverables: [
      "Correct hreflang implementation for regional targeting across India, UAE, Saudi Arabia, Qatar, and USA",
      "Multi-market taxonomy structure preventing keyword cannibalization between Indian and Gulf landing pages",
      "Bilingual search optimization support (English and Arabic search intent alignment)",
      "Enterprise technical monitoring to detect and fix indexation anomalies across thousands of URLs",
      "Executive bi-weekly reporting focused on international lead volume, pipeline value, and return on investment"
    ],
    bestFor: "Medical tourism hospitals, educational institutions, export manufacturers, and IT firms"
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
              <span className={styles.pillarSubtag}>Focus: {currentPillar.bestFor.split(',')[0]}</span>
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
              <Sparkles size={16} /> Verified Deliverables Included:
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
              <strong>Recommended For:</strong> {currentPillar.bestFor}
            </div>
            <Link 
              href={`/contact?service=${currentPillar.id}`}
              className={styles.pillarActionBtn}
            >
              Discuss This Service <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. SEO Diagnostic Matrix (Realistic Comparison)
// ==========================================
const COMPARISONS = [
  {
    feature: "Keyword Strategy",
    traditional: "Stuffs exact-match keywords into low-quality pages. Chases vanity terms with zero buyer intent.",
    zaviroq: "Maps high-intent commercial and transactional queries in Mangalore directly to specific service pages."
  },
  {
    feature: "Local Google Maps",
    traditional: "Sets up a basic Google profile and abandons it. Ignores citation errors and postal geo-grids.",
    zaviroq: "Optimizes categories, standardizes NAP across 60+ directories, and tracks rankings across all Mangalore pin codes."
  },
  {
    feature: "Technical Performance",
    traditional: "Relies on generic WordPress plugins that add bloat, slow down mobile pages, and fail Core Web Vitals.",
    zaviroq: "Engineers clean code, achieves sub-second load times, fixes crawl issues, and configures Schema.org microdata."
  },
  {
    feature: "Backlink Acquisition",
    traditional: "Purchases cheap automated links from spam networks and PBNs, exposing your site to Google penalties.",
    zaviroq: "Secures genuine editorial placements, trade citations, and regional news coverage with complete URL transparency."
  },
  {
    feature: "Reporting & Transparency",
    traditional: "Sends auto-generated PDF reports weeks late filled with confusing technical metrics and no clear takeaways.",
    zaviroq: "Provides real-time 24/7 dashboard access, weekly rank tracking, and scheduled review calls with your strategist."
  },
  {
    feature: "Commercial Focus",
    traditional: "Focuses on impressions and raw traffic counts that fail to generate actual phone calls or customer inquiries.",
    zaviroq: "Measures success by inbound phone calls, qualified consultation inquiries, and verifiable business revenue."
  }
];

export function SeoDiagnosticMatrix() {
  return (
    <div className={styles.matrixWrapper}>
      <div className={styles.matrixHeaderRow}>
        <div className={styles.matrixColFeature}>Evaluation Criteria</div>
        <div className={styles.matrixColBad}>Traditional Agency Approach in Mangalore</div>
        <div className={styles.matrixColGood}>Zaviroq Technical Performance Framework</div>
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
// 4. 90-Day Execution Roadmap (Realistic Milestones)
// ==========================================
const ROADMAP_MONTHS = [
  {
    month: "Month 01",
    phase: "Audit, Foundation & Technical Cleanup",
    focus: "Eliminating Crawl Roadblocks & Aligning Local Profiles",
    highlight: "150-Point Deep Crawl & Fixes",
    milestones: [
      "Run a 150-point technical crawl to uncover 404s, redirect chains, indexation blocks, and canonical issues",
      "Benchmark mobile Core Web Vitals (LCP, INP, CLS) and deploy server-level speed optimizations",
      "Conduct in-depth competitor gap analysis across top-ranking websites in Mangalore and Karnataka",
      "Audit and standardize Google Business Profile categories, hours, address, and local directory citations",
      "Define primary high-intent commercial keywords and map each query to a designated landing page"
    ]
  },
  {
    month: "Month 02",
    phase: "On-Page Restructuring & Local Landing Pages",
    focus: "Topical Content Authority & Schema Architecture",
    highlight: "Content & Entity Optimization",
    milestones: [
      "Rewrite Title tags, Meta descriptions, and H1/H2 header hierarchies for maximum click-through rates",
      "Deploy localized landing pages for key commercial hubs: Mangalore, Hampankatta, Kadri, Deralakatte, and Udupi",
      "Implement comprehensive Schema.org JSON-LD structured data (LocalBusiness, Service, and FAQPage)",
      "Restructure internal linking to funnel PageRank authority directly to high-converting service offerings",
      "Publish authoritative, helpful topical content pieces answering real customer questions"
    ]
  },
  {
    month: "Month 03",
    phase: "Authority Building, Maps Push & Lead Optimization",
    focus: "Digital PR Outreach, Review Flywheel & Conversion Rate Testing",
    highlight: "Maps 3-Pack & Rank Elevation",
    milestones: [
      "Execute targeted white-hat editorial outreach on authoritative regional and industry trade websites",
      "Activate automated customer review collection flywheel to increase Google 5-star sentiment safely",
      "Audit and refine user conversion funnels: CTA placement, click-to-call buttons, and contact form performance",
      "Review bi-weekly ranking movements across desktop, mobile, and Google Maps local 3-pack grids",
      "Plan expansion strategies for multi-region targeting across Karnataka, Bangalore, and Gulf markets"
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
