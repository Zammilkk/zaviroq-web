'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { 
  Check, 
  X, 
  ChevronDown, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  CheckCircle2,
  Clock,
  MapPin,
  Layers,
  BarChart2,
  Share2,
  Users,
  Target,
  ChevronLeft,
  ChevronRight,
  Crown,
  Megaphone
} from 'lucide-react';
import styles from './page.module.css';

// ==========================================
// 1. Dynamic Regional Location Typewriter
// ==========================================
const REGIONAL_HUBS = [
  "Mangalore (Hampankatta & Falnir)",
  "Kadri, Bejai & Mallikatte",
  "Deralakatte Medical Corridor",
  "Surathkal & Baikampady Belt",
  "Udupi & Manipal Academic Hub",
  "Dubai, Riyadh & GCC Corridors"
];

export function CategoryLocationTypewriter() {
  const [displayText, setDisplayText] = useState(REGIONAL_HUBS[0]);
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % REGIONAL_HUBS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.typewriterWrapper}>
      <span className={styles.typewriterPulse} />
      <span className={styles.typewriterPrefix}>Delivering Verified Growth in</span>
      <span className={styles.typewriterText}> {REGIONAL_HUBS[index]}</span>
    </div>
  );
}

// ==========================================
// 3. Interactive Tactical Pillars Tabs (Matches User Mockup)
// ==========================================
export interface PillarData {
  id: string;
  name: string;
  badge: string;
  summary: string;
  specs: string[];
  metric: string;
  metricLabel: string;
}

export function CategoryPillarsTabs({ 
  pillars, 
  serviceTitle 
}: { 
  pillars: PillarData[]; 
  serviceTitle?: string;
}) {
  const [activeId, setActiveId] = useState<string>(pillars[0]?.id || '');
  const activePillar = pillars.find((p) => p.id === activeId) || pillars[0];
  const activeIndex = pillars.findIndex((p) => p.id === (activePillar?.id || activeId));

  if (!pillars || pillars.length === 0) return null;

  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0: return <Target size={20} strokeWidth={2.2} />;
      case 1: return <Layers size={20} strokeWidth={2.2} />;
      case 2: return <BarChart2 size={20} strokeWidth={2.2} />;
      case 3: return <Sparkles size={20} strokeWidth={2.2} />;
      default: return <Target size={20} strokeWidth={2.2} />;
    }
  };

  const getGainPill = (index: number) => {
    switch (index) {
      case 0: return '↑ +320% Conversion Gain';
      case 1: return '↑ +280% Authority Score';
      case 2: return '↑ +195% Pipeline Velocity';
      case 3: return '100% Attribution Accuracy';
      default: return '↑ Verified Impact';
    }
  };

  return (
    <div className={styles.pillarsContainer}>
      {/* 4 Horizontal Tab Buttons */}
      <div className={styles.pillarsTabsRow}>
        {pillars.map((pillar, idx) => {
          const isActive = pillar.id === (activePillar?.id || activeId);
          return (
            <button
              key={pillar.id}
              type="button"
              className={`${styles.pillarTabBtn} ${isActive ? styles.pillarTabActive : ''}`}
              onClick={(e) => {
                setActiveId(pillar.id);
                const button = e.currentTarget;
                const container = button.parentElement;
                if (container && container.scrollWidth > container.clientWidth) {
                  const targetScroll = button.offsetLeft - (container.clientWidth / 2) + (button.offsetWidth / 2);
                  container.scrollTo({ left: targetScroll, behavior: 'smooth' });
                }
              }}
            >
              <div className={styles.pillarTabIconBox}>
                {getPillarIcon(idx)}
              </div>
              <div className={styles.pillarTabTextCol}>
                <span className={styles.pillarTabBadge}>{pillar.badge}</span>
                <span className={styles.pillarTabName}>{pillar.name}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Tab 2-Column Content Card */}
      {activePillar && (
        <div className={styles.pillarContentCard}>
          <div className={styles.pillarMainCol}>
            <div className={styles.pillarCardBadge}>{activePillar.badge}</div>
            <h3 className={styles.pillarCardTitle}>{activePillar.name}</h3>
            <p className={styles.pillarCardSummary}>{activePillar.summary}</p>

            <div className={styles.pillarSpecsTitle}>ARCHITECTURE &amp; EXECUTION DELIVERABLES</div>
            <ul className={styles.pillarSpecsList}>
              {activePillar.specs.map((spec, idx) => (
                <li key={idx} className={styles.pillarSpecItem}>
                  <CheckCircle2 size={18} strokeWidth={2.2} className={styles.specCheckIcon} />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.pillarVisualCol}>
            <div className={styles.pillarGraphicWrapper}>
              <img 
                src="/assets/images/digital-marketing-pillar-3d.png" 
                alt={`${activePillar.name} 3D Architecture`}
                className={styles.pillarGraphicImg}
              />
            </div>

            <div className={styles.pillarFloatingMetricCard}>
              <div className={styles.pillarMetricVal}>{activePillar.metric || '4.2x'}</div>
              <div className={styles.pillarMetricLabel}>{activePillar.metricLabel || 'Average Client ROAS'}</div>
              <div className={styles.pillarMetricGainBadge}>{getGainPill(activeIndex)}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// 4. Specialized Modules Interactive Carousel (Matches User Mockup)
// ==========================================
export interface CarouselSubServiceItem {
  slug: string;
  title: string;
  shortDesc: string;
  deliverables: string[];
}

export function CategoryModulesCarousel({
  subservices,
  parentSlug
}: {
  subservices: CarouselSubServiceItem[];
  parentSlug: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : subservices.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < subservices.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      const cardWidth = 330;
      scrollContainerRef.current.scrollTo({
        left: activeIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  const getModuleIcon = (idx: number) => {
    const iconNum = (idx % 5) + 1;
    return `/assets/images/module-icon-${iconNum}.png`;
  };

  return (
    <div className={styles.carouselWrapper}>
      {/* Left Navigation Arrow */}
      <button 
        type="button" 
        onClick={handlePrev} 
        className={styles.carouselNavBtnLeft}
        aria-label="Previous Module"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Horizontal Cards Track */}
      <div className={styles.carouselTrack} ref={scrollContainerRef}>
        {subservices.map((sub, idx) => {
          const isActive = idx === activeIndex;
          const moduleNum = String(idx + 1).padStart(2, '0');

          return (
            <div 
              key={sub.slug}
              className={`${styles.moduleCard} ${isActive ? styles.moduleCardActive : ''}`}
              onClick={() => setActiveIndex(idx)}
            >
              <div className={styles.moduleCardHeader}>
                <span className={styles.moduleNumBadge}>MODULE {moduleNum}</span>
                <img 
                  src={getModuleIcon(idx)} 
                  alt={`${sub.title} 3D Icon`} 
                  className={styles.module3dIcon}
                />
              </div>

              <h3 className={styles.moduleCardTitle}>{sub.title}</h3>
              <p className={styles.moduleCardDesc}>{sub.shortDesc}</p>

              <ul className={styles.moduleDeliverablesList}>
                {sub.deliverables.slice(0, 3).map((item, dIdx) => (
                  <li key={dIdx} className={styles.moduleDeliverableItem}>
                    <CheckCircle2 size={15} className={styles.moduleCheckIcon} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.moduleCardFooter}>
                <Link 
                  href={`/services/${parentSlug}/${sub.slug}`}
                  className={styles.moduleExploreBtn}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>Explore {sub.title}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Navigation Arrow */}
      <button 
        type="button" 
        onClick={handleNext} 
        className={styles.carouselNavBtnRight}
        aria-label="Next Module"
      >
        <ChevronRight size={20} />
      </button>

      {/* Pagination Indicator Dots */}
      <div className={styles.carouselPaginationDots}>
        {subservices.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`${styles.paginationDot} ${idx === activeIndex ? styles.paginationDotActive : ''}`}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 4. Local Pain-Points Diagnostic Matrix (Matches Image 1)
// ==========================================
export interface ComparisonItem {
  area: string;
  typical: string;
  zaviroq: string;
}

export function CategoryDiagnosticMatrix({ rows }: { rows: ComparisonItem[] }) {
  if (!rows || rows.length === 0) return null;

  const getDimensionIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Target size={18} />;
      case 1: return <BarChart2 size={18} />;
      case 2: return <Megaphone size={18} />;
      case 3: return <Users size={18} />;
      default: return <Target size={18} />;
    }
  };

  return (
    <div className={styles.matrixCardContainer}>
      {/* Column 1: Comparison Dimension */}
      <div className={styles.matrixColDimensions}>
        <div className={styles.matrixColHeaderLabel}>COMPARISON DIMENSION</div>
        <div className={styles.matrixDimensionRowsList}>
          {rows.map((row, idx) => (
            <div key={idx} className={styles.matrixDimensionItem}>
              <div className={styles.matrixDimIconBox}>
                {getDimensionIcon(idx)}
              </div>
              <span className={styles.matrixDimTitle}>{row.area}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Column 2: Typical Mangalore Agencies */}
      <div className={styles.matrixColTypicalCard}>
        <div className={styles.matrixTypicalHeader}>
          <Layers size={16} className={styles.matrixTypicalIcon} />
          <span>TYPICAL MANGALORE AGENCIES</span>
        </div>
        <div className={styles.matrixTypicalRowsList}>
          {rows.map((row, idx) => (
            <div key={idx} className={styles.matrixTypicalItem}>
              <div className={styles.matrixBadgeX}>
                <X size={15} />
              </div>
              <p className={styles.matrixTypicalText}>{row.typical}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Column 3: Zaviroq Performance Engineering */}
      <div className={styles.matrixColZaviroqCard}>
        {/* Crown Ribbon Badge */}
        <div className={styles.matrixCrownRibbon}>
          <Crown size={14} />
        </div>

        <div className={styles.matrixZaviroqHeader}>
          <div className={styles.matrixZaviroqLogoZ}>Z</div>
          <span>ZAVIROQ – PERFORMANCE ENGINEERING</span>
        </div>

        <div className={styles.matrixZaviroqRowsList}>
          {rows.map((row, idx) => (
            <div key={idx} className={styles.matrixZaviroqItem}>
              <div className={styles.matrixBadgeCheck}>
                <Check size={15} />
              </div>
              <p className={styles.matrixZaviroqText}>{row.zaviroq}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 5. Semantic Google AI Overview (SGE) Card
// ==========================================
export function CategoryAiOverviewBox({ 
  definition, 
  serviceTitle,
  keyTakeaways,
  overviewFeatures,
  graphicUrl
}: { 
  definition: string; 
  serviceTitle: string;
  keyTakeaways: string[];
  overviewFeatures?: Array<{ title: string; desc: string; icon: string }>;
  graphicUrl?: string;
}) {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers size={18} />;
      case 'BarChart2': return <BarChart2 size={18} />;
      case 'Share2': return <Share2 size={18} />;
      case 'Users': return <Users size={18} />;
      case 'ShieldCheck': return <ShieldCheck size={18} />;
      default: return <Sparkles size={18} />;
    }
  };

  if (overviewFeatures && overviewFeatures.length > 0) {
    return (
      <div id="overview" className={styles.enterpriseOverviewCard}>
        <div className={styles.overviewTopGrid}>
          <div className={styles.overviewContentLeft}>
            <div className={styles.overviewEyebrowPill}>
              <Sparkles size={14} />
              <span>ENTERPRISE-GRADE {serviceTitle.toUpperCase()} IN MANGALORE</span>
            </div>

            <h2 className={styles.overviewHeading}>
              What defines an enterprise-grade{' '}
              <span className={styles.heroHighlightGradient}>
                {serviceTitle} in Mangalore?
              </span>
            </h2>

            <p className={styles.overviewParagraph}>
              {definition}
            </p>
          </div>

          <div className={styles.overviewGraphicRight}>
            <img 
              src={graphicUrl || '/assets/images/digital-marketing-laptop-3d.png'} 
              alt={`Enterprise-Grade ${serviceTitle} in Mangalore - Zaviroq`} 
              className={styles.overviewLaptopImg} 
            />
          </div>
        </div>

        <div className={styles.overviewFeaturesRow}>
          {overviewFeatures.map((feat, idx) => (
            <div key={idx} className={styles.overviewFeatureItem}>
              <div className={styles.overviewFeatureIconBox}>
                {getFeatureIcon(feat.icon)}
              </div>
              <div className={styles.overviewFeatureText}>
                <div className={styles.overviewFeatureTitle}>{feat.title}</div>
                <div className={styles.overviewFeatureSubtitle}>{feat.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.aiOverviewCard}>
      <div className={styles.aiOverviewHeader}>
        <div className={styles.aiOverviewTag}>
          <Sparkles size={14} />
          <span>Google AI Overview • Semantic Definition Snapshot</span>
        </div>
        <span className={styles.aiOverviewStatus}>Direct Answer Architecture</span>
      </div>

      <h3 className={styles.aiOverviewTitle}>
        What defines an enterprise-grade {serviceTitle} in Mangalore?
      </h3>

      <p className={styles.aiOverviewText}>{definition}</p>

      <div className={styles.takeawaysGrid}>
        {keyTakeaways.map((takeaway, i) => (
          <div key={i} className={styles.takeawayItem}>
            <span className={styles.takeawayDot} />
            <span>{takeaway}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 6. Interactive FAQ Accordion (Matches Image 3)
// ==========================================
export function CategoryFaqAccordion({ faqs }: { faqs: Array<{ q: string; a: string }> }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const getFaqIcon = (idx: number) => {
    switch (idx % 3) {
      case 0: return <Sparkles size={16} />;
      case 1: return <BarChart2 size={16} />;
      case 2: return <Layers size={16} />;
      default: return <Sparkles size={16} />;
    }
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
              type="button"
              className={styles.faqQuestionBtn}
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
            >
              <div className={styles.faqIconBox}>
                {getFaqIcon(idx)}
              </div>
              <span className={styles.faqQuestionText}>{faq.q}</span>
              <span className={`${styles.faqArrow} ${isOpen ? styles.faqArrowOpen : ''}`}>
                <ChevronDown size={18} />
              </span>
            </button>
            {isOpen && (
              <div className={styles.faqAnswerBody}>
                <p className={styles.faqAnswerText}>{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
