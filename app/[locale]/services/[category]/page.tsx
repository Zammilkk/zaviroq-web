import React from 'react';
import styles from './page.module.css';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { servicesMasterData, ParentCategoryItem } from '@/data/servicesMasterData';
import { categoryEnhancedData } from '@/data/categoryEnhancedData';
import { routing } from '@/i18n/routing';
import { 
  CategoryPillarsTabs, 
  CategoryModulesCarousel,
  CategoryDiagnosticMatrix, 
  CategoryAiOverviewBox, 
  CategoryFaqAccordion 
} from './CategoryInteractiveWidgets';
import RevealOnScroll from '../../RevealOnScroll';
import { 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  ShieldCheck, 
  TrendingUp, 
  Sparkles, 
  Layers, 
  ChevronRight, 
  Check,
  Calendar,
  Play,
  BarChart3,
  Zap,
  Crosshair,
  Box,
  Scale,
  MessageSquare,
  Rocket,
  Crown,
  Megaphone
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string; category: string }>;
};

function getCategoryHeadline(slug: string, tagline: string) {
  switch (slug) {
    case 'digital-marketing':
      return (
        <>
          Maximize Return on Ad Spend with Precision{' '}
          <span className={styles.heroHighlightGradient}>
            PPC &amp; Conversion Funnels.
          </span>
        </>
      );
    case 'seo':
      return (
        <>
          Dominate Google Search and Get More{' '}
          <span className={styles.heroHighlightGradient}>
            Calls, Walk-Ins &amp; Real Revenue.
          </span>
        </>
      );
    case 'paid-advertising':
      return (
        <>
          Stop Wasting Ad Budgets on Broad Clicks. Scale with{' '}
          <span className={styles.heroHighlightGradient}>
            High-Converting PPC.
          </span>
        </>
      );
    case 'social-media-marketing':
      return (
        <>
          Build an Unforgettable Social Presence That{' '}
          <span className={styles.heroHighlightGradient}>
            Drives Client Inquiries.
          </span>
        </>
      );
    case 'website-design':
      return (
        <>
          Modern, Conversion-First Web Design That{' '}
          <span className={styles.heroHighlightGradient}>
            Elevates Your Brand.
          </span>
        </>
      );
    case 'website-development':
      return (
        <>
          Clean Code, Sub-Second Speed, and{' '}
          <span className={styles.heroHighlightGradient}>
            Future-Proof Web Architecture.
          </span>
        </>
      );
    case 'ecommerce-development':
      return (
        <>
          High-Converting Online Stores Engineered to{' '}
          <span className={styles.heroHighlightGradient}>
            Scale Sales Velocity.
          </span>
        </>
      );
    case 'branding':
      return (
        <>
          Memorable Brand Identities That{' '}
          <span className={styles.heroHighlightGradient}>
            Command Immediate Respect.
          </span>
        </>
      );
    case 'video-production':
      return (
        <>
          Cinematic Storytelling &amp; Fast-Paced Video That{' '}
          <span className={styles.heroHighlightGradient}>
            Captures Attention.
          </span>
        </>
      );
    case 'email-marketing':
      return (
        <>
          High-Converting Email Workflows That Drive{' '}
          <span className={styles.heroHighlightGradient}>
            Predictable Repeat Revenue.
          </span>
        </>
      );
    case 'ai-automation':
      return (
        <>
          Automate Repetitive Business Workflows with{' '}
          <span className={styles.heroHighlightGradient}>
            Practical AI Engineering.
          </span>
        </>
      );
    case 'business-software':
      return (
        <>
          Tailored Business Software Built to{' '}
          <span className={styles.heroHighlightGradient}>
            Run Your Operations Flawlessly.
          </span>
        </>
      );
    default:
      return tagline;
  }
}

function getCategoryWatermark(slug: string, shortTitle: string) {
  switch (slug) {
    case 'digital-marketing': return 'DIGITAL MARKETING';
    case 'seo': return 'SEARCH ENGINE OPTIMIZATION';
    case 'paid-advertising': return 'PAID ADVERTISING';
    case 'social-media-marketing': return 'SOCIAL MEDIA';
    case 'website-design': return 'WEBSITE DESIGN';
    case 'website-development': return 'WEB DEVELOPMENT';
    case 'ecommerce-development': return 'ECOMMERCE SYSTEMS';
    case 'branding': return 'BRANDING & IDENTITY';
    case 'video-production': return 'VIDEO PRODUCTION';
    case 'email-marketing': return 'EMAIL MARKETING';
    case 'ai-automation': return 'AI AUTOMATION';
    case 'business-software': return 'BUSINESS SOFTWARE';
    default: return shortTitle.toUpperCase();
  }
}

function getCategoryAgencyPill(slug: string) {
  switch (slug) {
    case 'digital-marketing': return 'Data-Driven Digital Growth Agency';
    case 'seo': return 'Top-Ranked Search Engine Optimization Agency';
    case 'paid-advertising': return 'Premier Google Ads & PPC Agency';
    case 'social-media-marketing': return 'High-Growth Social Media Agency';
    case 'website-design': return 'Award-Winning UI/UX & Web Design Studio';
    case 'website-development': return 'Full-Stack Web Engineering Agency';
    case 'ecommerce-development': return 'Enterprise E-Commerce Architects';
    case 'branding': return 'Strategic Brand Identity & Creative Studio';
    case 'video-production': return 'Cinematic Video Production Studio';
    case 'email-marketing': return 'Lifecycle Retention & Email Agency';
    case 'ai-automation': return 'Autonomous AI Systems & Workflow Engineers';
    case 'business-software': return 'Custom Enterprise Software Lab';
    default: return 'Data-Driven Digital Growth Agency';
  }
}

function getCategoryHeroGraphic(slug: string) {
  switch (slug) {
    case 'digital-marketing':
      return '/assets/images/digital-marketing-funnel-3d.png';
    case 'seo':
      return '/assets/images/service-seo-graphic.png';
    case 'paid-advertising':
      return '/assets/images/service-performance-graphic.png';
    case 'social-media-marketing':
      return '/assets/images/digital-marketing-funnel-3d.png';
    case 'website-design':
      return '/assets/images/service-web-dev-graphic.png';
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
      return '/assets/images/service-performance-graphic.png';
  }
}

// Generate static routes for all 12 parent categories across all active locales
export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    servicesMasterData.map((c) => ({
      locale,
      category: c.slug,
    }))
  );
}

// Search-optimized Dynamic Metadata for Google & AI Overviews (SGE)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const categoryData = servicesMasterData.find((c) => c.slug === category);

  if (!categoryData) {
    return { title: 'Service | Zaviroq' };
  }

  const canonicalUrl = `https://www.zaviroq.com/services/${categoryData.slug}`;

  return {
    title: {
      absolute: categoryData.metaTitle,
    },
    description: categoryData.metaDesc,
    keywords: categoryData.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: categoryData.metaTitle,
      description: categoryData.metaDesc,
      url: canonicalUrl,
      siteName: 'Zaviroq',
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: 'https://www.zaviroq.com/assets/images/service-performance-graphic.png',
          width: 1200,
          height: 630,
          alt: `${categoryData.title} - Zaviroq Mangalore`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: categoryData.metaTitle,
      description: categoryData.metaDesc,
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

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const data: ParentCategoryItem | undefined = servicesMasterData.find((c) => c.slug === category);

  if (!data) {
    notFound();
  }

  const enhanced = categoryEnhancedData[data.slug] || categoryEnhancedData['digital-marketing'];

  // Schema.org Structured Data
  const jsonLdProfessionalService = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness'],
    '@id': `https://www.zaviroq.com/services/${data.slug}/#organization`,
    name: `Zaviroq - ${data.shortTitle} Agency in Mangalore`,
    legalName: 'Zaviroq Digital Solutions',
    url: `https://www.zaviroq.com/services/${data.slug}`,
    logo: 'https://www.zaviroq.com/assets/images/logo.png',
    image: 'https://www.zaviroq.com/assets/images/service-performance-graphic.png',
    description: data.metaDesc,
    telephone: '+91 74 8383 0582',
    email: 'info@zaviroq.com',
    priceRange: '₹₹',
    openingHours: 'Mo,Tu,We,Th,Fr,Sa 09:00-19:00',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Light House Hill Road, Hampankatta',
      addressLocality: 'Mangalore',
      addressRegion: 'Karnataka',
      postalCode: '575001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.8703,
      longitude: 74.8436,
    },
    areaServed: [
      { '@type': 'City', name: 'Mangalore' },
      { '@type': 'City', name: 'Udupi' },
      { '@type': 'City', name: 'Surathkal' },
      { '@type': 'AdministrativeArea', name: 'Karnataka' },
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'Country', name: 'Qatar' },
    ],
    knowsAbout: data.keywords,
  };

  const jsonLdService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://www.zaviroq.com/services/${data.slug}/#service`,
    name: data.title,
    url: `https://www.zaviroq.com/services/${data.slug}`,
    serviceType: data.title,
    description: data.metaDesc,
    provider: {
      '@id': `https://www.zaviroq.com/services/${data.slug}/#organization`,
    },
    areaServed: [
      { '@type': 'City', name: 'Mangalore' },
      { '@type': 'AdministrativeArea', name: 'Karnataka' },
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Saudi Arabia' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${data.title} Modules`,
      itemListElement: data.subservices.map((sub) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: sub.title,
          description: sub.shortDesc,
          url: `https://www.zaviroq.com/services/${data.slug}/${sub.slug}`,
        },
      })),
    },
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
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
        name: data.shortTitle,
        item: `https://www.zaviroq.com/services/${data.slug}`,
      },
    ],
  };

  return (
    <div className={styles.page}>
      {/* Schema.org Injections */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProfessionalService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }} />

      {/* Atmospheric Glows */}
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />
      <div className={styles.gridPattern} />

      {/* Breadcrumb Navigation */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>›</span>
        <Link href="/services">Services</Link>
        <span>›</span>
        <span className={styles.breadcrumbCurrent}>{data.shortTitle}</span>
      </nav>

      {/* ── HERO SECTION (2-Column Architecture Matching User Mockup) ── */}
      <RevealOnScroll delay={50} yOffset={25}>
        <section className={styles.heroSection}>
          <div className={styles.watermarkBg} aria-hidden="true">
            {getCategoryWatermark(data.slug, data.shortTitle)}
          </div>

          {/* Top Eyebrow Pills Row */}
          <div className={styles.heroEyebrowRow}>
            <div className={styles.eyebrowPill}>
              <Sparkles size={14} />
              <span>{getCategoryAgencyPill(data.slug)}</span>
            </div>

            <div className={styles.eyebrowPill}>
              <Crosshair size={14} />
              <span>{data.eyebrow}</span>
            </div>
          </div>

          {/* 2-Column Hero Grid: Left Content + Right 3D Funnel Artwork */}
          <div className={styles.heroGridTwoCol}>
            <div className={styles.heroContentLeft}>
              <h1 className={styles.heroTitleTwoCol}>
                {getCategoryHeadline(data.slug, data.tagline)}
              </h1>

              <p className={styles.heroSubTwoCol}>
                {data.heroSub}
              </p>

              <div className={styles.heroBtnRow}>
                <Link href="/contact" className={styles.heroBtnSchedule}>
                  <Calendar size={18} />
                  <span>Schedule Strategic Consultation</span>
                  <ArrowRight size={18} />
                </Link>
                <a href="#pillars" className={styles.heroBtnExplore}>
                  <Layers size={16} />
                  <span>Explore Pillars</span>
                </a>
              </div>
            </div>

            <div className={styles.heroVisualContainer}>
              <div className={styles.heroVisualGlow} />
              <img 
                src={getCategoryHeroGraphic(data.slug)}
                alt={`Zaviroq ${data.shortTitle} Architecture Mangalore`}
                className={styles.funnelImg}
              />
            </div>
          </div>

          {/* 4 Impact Statistics Floating Bar */}
          <div className={styles.statsFloatingBar}>
            {data.stats.map((stat, i) => {
              const getStatIcon = (index: number) => {
                switch (index) {
                  case 0: return <BarChart3 size={22} />;
                  case 1: return <Layers size={22} />;
                  case 2: return <Zap size={22} />;
                  case 3: return <Target size={22} />;
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

      {/* ── GOOGLE AI OVERVIEW / ENTERPRISE-GRADE OVERVIEW CARD ── */}
      <RevealOnScroll delay={80} yOffset={30}>
        <CategoryAiOverviewBox 
          definition={enhanced.sgeDirectAnswer}
          serviceTitle={data.shortTitle}
          keyTakeaways={enhanced.keyTakeaways}
          overviewFeatures={enhanced.overviewFeatures}
          graphicUrl="/assets/images/digital-marketing-laptop-3d.png"
        />
      </RevealOnScroll>

      {/* ── CORE ENGINEERING PILLARS (Matches User Mockup) ── */}
      <RevealOnScroll delay={80} yOffset={30}>
        <section id="pillars" className={styles.sectionHeader}>
          <div className={styles.productionEyebrowPill}>
            <Layers size={14} />
            <span>PRODUCTION FRAMEWORK</span>
          </div>
          <h2 className={styles.sectionTitle}>
            The 4 Pillars of{' '}
            <span className={styles.heroHighlightGradient}>
              {data.shortTitle}
            </span>{' '}
            Mastery
          </h2>
          <p className={styles.sectionSubtitle}>
            A structured, performance-driven framework that combines strategy, data, and creative execution to deliver a measurable business advantage.
          </p>
        </section>

        <CategoryPillarsTabs pillars={enhanced.pillars} serviceTitle={data.shortTitle} />
      </RevealOnScroll>

      {/* ── SUB-SERVICES CAROUSEL (Matches User Mockup) ── */}
      <RevealOnScroll delay={80} yOffset={30}>
        <section id="subservices" className={styles.sectionHeader}>
          <div className={styles.productionEyebrowPill}>
            <Box size={14} />
            <span>SPECIALIZED CAPABILITIES</span>
          </div>
          <h2 className={styles.sectionTitle}>
            {data.slug === 'digital-marketing' ? (
              <>
                High-Impact Digital{' '}
                <span className={styles.heroHighlightGradient}>
                  Marketing Modules
                </span>
              </>
            ) : (
              <>
                High-Impact{' '}
                <span className={styles.heroHighlightGradient}>
                  {data.shortTitle} Modules
                </span>
              </>
            )}
          </h2>
          <p className={styles.sectionSubtitle}>
            Each module is engineered to address specific commercial bottlenecks and accelerate a qualified pipeline.
          </p>
        </section>

        <CategoryModulesCarousel 
          subservices={data.subservices}
          parentSlug={data.slug}
        />
      </RevealOnScroll>

      {/* ── DIAGNOSTIC MATRIX: TRADITIONAL AGENCIES VS ZAVIROQ (Matches Image 1) ── */}
      <RevealOnScroll delay={80} yOffset={30}>
        <section className={styles.sectionHeader}>
          <div className={styles.productionEyebrowPill}>
            <Scale size={14} />
            <span>MARKET COMPARISON</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Why Traditional Mangalore Agencies{' '}
            <span className={styles.heroHighlightGradient}>
              Fail vs. Zaviroq
            </span>
          </h2>
          <p className={styles.sectionSubtitle}>
            A clear comparison between legacy marketing agencies in Coastal Karnataka and our performance-engineering model.
          </p>
        </section>

        <CategoryDiagnosticMatrix rows={enhanced.comparisonRows} />
      </RevealOnScroll>

      {/* ── OUTCOMES: ENGINEERED FOR REVENUE (Matches Image 2) ── */}
      <RevealOnScroll delay={80} yOffset={30}>
        <section className={styles.sectionHeader}>
          <div className={styles.productionEyebrowPill}>
            <Zap size={14} />
            <span>WHY REGIONAL LEADERS CHOOSE ZAVIROQ</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Engineered for{' '}
            <span className={styles.heroHighlightGradient}>
              Revenue,
            </span>
            <br />
            Not Vanity Numbers
          </h2>
          <p className={styles.sectionSubtitle}>
            How we solve the most common frustrations experienced with generic digital marketing agencies.
          </p>
        </section>

        <div className={styles.outcomesTargetContainer}>
          {/* Left Column: 2 Cards */}
          <div className={styles.outcomesColLeft}>
            {data.outcomes.slice(0, 2).map((item, idx) => {
              const getOutcomeIcon = (i: number) => {
                if (i === 0) return <Megaphone size={20} />;
                return <Layers size={20} />;
              };

              return (
                <div key={idx} className={styles.targetOutcomeCard}>
                  <div className={styles.targetOutcomeHeader}>
                    <div className={styles.targetIconBadge}>
                      {getOutcomeIcon(idx)}
                    </div>
                    <h3 className={styles.targetCardTitle}>{item.title}</h3>
                  </div>
                  <p className={styles.targetCardDesc}>{item.desc}</p>
                  <div className={styles.targetFixPill}>
                    <Check size={14} className={styles.targetCheckIcon} />
                    <span>{item.fix}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Column: 3D Bullseye Dartboard Visual */}
          <div className={styles.outcomesCenterVisual}>
            <div className={styles.dartboardConnectorLeftTop} />
            <div className={styles.dartboardConnectorLeftBottom} />
            <div className={styles.dartboardConnectorRightTop} />
            <div className={styles.dartboardConnectorRightBottom} />
            <img 
              src="/assets/images/digital-marketing-dartboard-3d.png" 
              alt="Engineered for Revenue Target Zaviroq" 
              className={styles.dartboardImg}
            />
          </div>

          {/* Right Column: 2 Cards */}
          <div className={styles.outcomesColRight}>
            {data.outcomes.slice(2, 4).map((item, idx) => {
              const getOutcomeIcon = (i: number) => {
                if (i === 0) return <Crown size={20} />;
                return <TrendingUp size={20} />;
              };

              return (
                <div key={idx} className={styles.targetOutcomeCard}>
                  <div className={styles.targetOutcomeHeader}>
                    <div className={styles.targetIconBadge}>
                      {getOutcomeIcon(idx)}
                    </div>
                    <h3 className={styles.targetCardTitle}>{item.title}</h3>
                  </div>
                  <p className={styles.targetCardDesc}>{item.desc}</p>
                  <div className={styles.targetFixPill}>
                    <Check size={14} className={styles.targetCheckIcon} />
                    <span>{item.fix}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </RevealOnScroll>

      {/* ── FREQUENTLY ASKED QUESTIONS (Matches Image 3) ── */}
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
            Everything you need to know about our approach, delivery model, and commercial outcomes.
          </p>
        </section>

        <div className={styles.faqTwoColWrapper}>
          <div className={styles.faqGraphicLeftCol}>
            <img 
              src="/assets/images/digital-marketing-faq-3d.png" 
              alt="FAQ Strategy Help Zaviroq" 
              className={styles.faq3dBubbleImg}
            />
          </div>
          <div className={styles.faqAccordionRightCol}>
            <CategoryFaqAccordion faqs={data.faqs} />
          </div>
        </div>
      </RevealOnScroll>

      {/* ── STRATEGIC CONSULTATION CTA (Matches Image 3) ── */}
      <RevealOnScroll delay={80} yOffset={30}>
        <div className={styles.ctaBannerContainer}>
          <div className={styles.ctaBannerGrid}>
            <div className={styles.ctaBannerLeft}>
              <div className={styles.ctaBannerEyebrow}>
                <Rocket size={14} />
                <span>TAKE THE NEXT STEP</span>
              </div>
              <h2 className={styles.ctaBannerTitle}>
                Ready to Accelerate Your Commercial Growth?
              </h2>
              <p className={styles.ctaBannerText}>
                Speak directly with our strategy team in Mangalore. We&apos;ll analyse your current digital footprint, identify growth opportunities, and design a clear execution roadmap tailored to your business.
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
