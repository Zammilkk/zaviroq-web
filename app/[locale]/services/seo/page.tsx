import styles from './page.module.css';
import RevealOnScroll from '../../RevealOnScroll';
import Link from 'next/link';
import IndustriesCarousel from './IndustriesCarousel';
import type { Metadata } from 'next';
import { 
  SeoLocationTypewriter, 
  SeoPillarsTabs, 
  SeoDiagnosticMatrix, 
  SeoRoadmapTimeline, 
  SeoFaqAccordion 
} from './SeoInteractiveSections';
import { 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Award, 
  ShieldCheck, 
  BarChart3, 
  MapPin, 
  FileCheck, 
  Layers, 
  Zap,
  Globe,
  Compass,
  Target,
  Users
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best SEO Agency in Mangalore | #1 Result-Driven SEO Company - Zaviroq',
  description: 'Zaviroq is the premier SEO agency in Mangalore helping ambitious brands dominate Google Search, Local Maps 3-Pack, and organic conversions with data-driven Search Engine Optimization.',
  keywords: [
    'seo agency in mangalore',
    'best seo company in mangalore',
    'seo services in mangalore',
    'search engine optimization company in mangalore',
    'local seo services mangalore',
    'technical seo mangalore',
    'ecommerce seo mangalore',
    'top seo experts mangalore',
    'seo consultants karnataka'
  ],
  alternates: {
    canonical: 'https://www.zaviroq.com/services/seo',
  },
  openGraph: {
    title: 'Best SEO Agency in Mangalore | #1 Result-Driven SEO Company - Zaviroq',
    description: 'Dominate Google Search and Local Maps. Zaviroq engineers data-driven SEO, sub-second technical speed, and authoritative digital PR across Mangalore, Karnataka, UAE & Global.',
    url: 'https://www.zaviroq.com/services/seo',
    siteName: 'Zaviroq',
    locale: 'en_IN',
    type: 'website',
    images: [{ 
      url: 'https://www.zaviroq.com/assets/images/seo-hero-graphic.png',
      width: 1200,
      height: 630,
      alt: 'Zaviroq - Best SEO Agency in Mangalore'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best SEO Agency in Mangalore | #1 Result-Driven SEO Company - Zaviroq',
    description: 'Dominate Google Search and Local Maps with Zaviroq. Proven Technical SEO, Local 3-Pack rankings, and measurable revenue growth.',
    images: ['https://www.zaviroq.com/assets/images/seo-hero-graphic.png'],
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
};

export default async function ServicesSeoIndexPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;

  const faqs = [
    {
      q: "Why is Zaviroq considered the best SEO agency in Mangalore?",
      a: "Unlike traditional agencies that rely on outdated keyword stuffing and low-quality spam directory links, Zaviroq combines sub-second technical engineering (Next.js SSR, Core Web Vitals), Natural Language Processing (NLP) semantic clustering, and genuine editorial digital PR. We focus on real commercial outcomes: inbound phone calls, qualified leads, and measurable revenue growth."
    },
    {
      q: "How long does it take to see top page rankings on Google in Mangalore?",
      a: "For local search queries and Google Maps 3-Pack rankings in Mangalore (e.g., Hampankatta, Kadri, Deralakatte, Surathkal, Kankanady), initial ranking improvements typically occur within 30 to 60 days. Highly competitive state-wide or national commercial keywords typically take 3 to 6 months of disciplined technical optimization, topical clustering, and authoritative link acquisition."
    },
    {
      q: "What is the difference between Local SEO and Organic National SEO?",
      a: "Local SEO focuses on capturing geographically constrained searches (like 'best hospital in Mangalore' or 'real estate builders near me') through Google Business Profile optimization, local citations, and geo-targeted landing pages. Organic SEO targets broader national and international search queries without geographic limits, establishing broad topical authority across your entire industry."
    },
    {
      q: "Do you guarantee the #1 ranking on Google?",
      a: "Google's official Webmaster Guidelines state that no ethical agency can guarantee an absolute permanent #1 spot due to continuous algorithm updates. What Zaviroq guarantees is a 100% white-hat, data-backed execution framework that has consistently propelled 92%+ of our client websites into Google Page 1 and Maps 3-Pack positions."
    },
    {
      q: "How do you select target keywords for our business?",
      a: "We don't target random vanity keywords with zero commercial value. We analyze high-intent transactional search queries (terms used by buyers ready to purchase), competitor ranking gaps, search volume across Mangalore, Karnataka, and Gulf markets, and cost-per-click (CPC) commercial value to ensure every targeted keyword translates into paying customers."
    },
    {
      q: "Can Zaviroq help our Mangalore business acquire clients in the UAE and Saudi Arabia?",
      a: "Yes, absolutely. Zaviroq operates an active international footprint across India, the United Arab Emirates (Dubai, Abu Dhabi), Saudi Arabia (Riyadh), and Qatar. We implement international hreflang tags, multi-currency optimization, and localized content strategies to capture high-value Gulf business inquiries."
    },
    {
      q: "What happens when Google releases a Core Algorithm Update?",
      a: "Because Zaviroq strictly implements 100% white-hat SEO, sub-second Core Web Vitals, and authoritative editorial backlinks, our client websites consistently gain ranking authority during Google Core and Helpful Content updates while competitor sites using spam techniques suffer severe traffic losses."
    }
  ];

  const industries = [
    { title: "Healthcare & Clinics", icon: "⚕️", img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=600&q=80" },
    { title: "Real Estate & Builders", icon: "🏢", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80" },
    { title: "E-Commerce & Retail", icon: "🛒", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80" },
    { title: "Education & Academies", icon: "🎓", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80" },
    { title: "Hospitality & Resorts", icon: "🛏️", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80" },
    { title: "Travel & Tourism", icon: "✈️", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80" },
    { title: "Manufacturing & Export", icon: "⚙️", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" },
    { title: "IT & Technology", icon: "💻", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" },
  ];

  // Structured Data JSON-LD
  const jsonLdProfessionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.zaviroq.com/#organization",
    "name": "Zaviroq",
    "legalName": "Zaviroq Digital Solutions",
    "url": "https://www.zaviroq.com/",
    "logo": "https://www.zaviroq.com/assets/images/logo.png",
    "image": "https://www.zaviroq.com/assets/images/seo-hero-graphic.png",
    "description": "Zaviroq is the premier SEO agency in Mangalore offering result-driven Search Engine Optimization, Technical SEO audits, Local Maps 3-Pack rankings, and international search growth.",
    "telephone": "+91 74 8383 0582",
    "email": "info@zaviroq.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Zaviroq Digital HQ, Light House Hill Road",
      "addressLocality": "Mangalore",
      "addressRegion": "Karnataka",
      "postalCode": "575001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.8703,
      "longitude": 74.8436
    },
    "areaServed": [
      { "@type": "City", "name": "Mangalore" },
      { "@type": "City", "name": "Udupi" },
      { "@type": "City", "name": "Surathkal" },
      { "@type": "AdministrativeArea", "name": "Karnataka" },
      { "@type": "Country", "name": "India" },
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "Country", "name": "Saudi Arabia" },
      { "@type": "Country", "name": "Qatar" }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/zaviroq",
      "https://www.instagram.com/zaviroq",
      "https://twitter.com/zaviroq"
    ]
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.zaviroq.com/services/seo/#service",
    "name": "SEO Agency in Mangalore | Result-Driven Search Engine Optimization",
    "url": "https://www.zaviroq.com/services/seo",
    "serviceType": "Search Engine Optimization (SEO) Services",
    "description": "Enterprise and local SEO services across Mangalore, Karnataka, India, UAE, and Saudi Arabia. Drive qualified organic search traffic with technical, on-page, and authority SEO.",
    "provider": {
      "@id": "https://www.zaviroq.com/#organization"
    },
    "areaServed": [
      { "@type": "City", "name": "Mangalore" },
      { "@type": "City", "name": "Udupi" },
      { "@type": "AdministrativeArea", "name": "Karnataka" },
      { "@type": "Country", "name": "India" }
    ]
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.zaviroq.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.zaviroq.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "SEO Agency in Mangalore",
        "item": "https://www.zaviroq.com/services/seo"
      }
    ]
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProfessionalService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* ========================================================= */}
      {/* HERO SECTION WITH DYNAMIC LOCATION TYPEWRITER */}
      {/* ========================================================= */}
      <section className={styles.heroTop}>
        <div className={styles.heroTopBgLayer}></div>
        <div className={styles.watermarkBg}>RANK #1</div>
        
        <div className={styles.heroTopContainer}>
          <div className={styles.heroTopLeft}>
            {/* Breadcrumb Navigation */}
            <div className={styles.breadcrumbBar}>
              <Link href={`/${locale}`}>Home</Link>
              <span className={styles.breadcrumbSep}>/</span>
              <Link href={`/${locale}/services`}>Services</Link>
              <span className={styles.breadcrumbSep}>/</span>
              <span className={styles.breadcrumbCurrent}>SEO Agency in Mangalore</span>
            </div>

            {/* Eyebrow Badge */}
            <div className={styles.heroEyebrow}>
              <span className={styles.heroEyebrowPulse}></span>
              <span className={styles.eyebrowLine}></span> 
              <span>#1 RESULT-DRIVEN SEO AGENCY IN MANGALORE</span>
            </div>
            
            {/* Main Headline */}
            <h1 className={styles.heroTopTitle}>
              Dominate Google Search in <SeoLocationTypewriter /><br />
              <span className={styles.heroHighlight}>Scale Real Revenue.</span>
            </h1>
            
            {/* Supporting Copy */}
            <p className={styles.heroTopSub}>
              Stop losing high-value customers to competitors on Google Page 1. Zaviroq engineers sub-second technical speed, high-intent semantic keyword dominance, and white-hat digital PR that place your business at the very top of Google Search and Google Maps.
            </p>

            {/* CTAs */}
            <div className={styles.heroCtaGroup}>
              <Link href={`/${locale}/contact?service=seo-audit`} className={styles.heroCtaPrimary}>
                <span>Claim Free 150-Point SEO Audit</span>
                <ArrowRight size={18} className={styles.btnArrow} />
              </Link>
              <a href="#seo-pillars" className={styles.heroCtaSecondary}>
                <span>Explore Core Pillars</span>
                <span className={styles.downArrow}>↓</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className={styles.heroTrustGrid}>
              <div className={styles.heroTrustItem}>
                <CheckCircle2 size={16} className={styles.trustCheck} />
                <span>100% White-Hat Google Compliant</span>
              </div>
              <div className={styles.heroTrustItem}>
                <CheckCircle2 size={16} className={styles.trustCheck} />
                <span>Local 3-Pack & National Domination</span>
              </div>
              <div className={styles.heroTrustItem}>
                <CheckCircle2 size={16} className={styles.trustCheck} />
                <span>Live 24/7 Keyword Tracker Dashboard</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Right Side */}
          <div className={styles.heroTopRight}>
            <div className={styles.heroVisualCard}>
              <div className={styles.heroVisualGlow}></div>
              <img 
                src="/assets/images/seo-hero-graphic.png" 
                alt="Zaviroq SEO Services Strategy Mangalore" 
                className={styles.heroTopImage} 
              />
              
              {/* Floating Glassmorphic Badges */}
              <div className={`${styles.floatingPill} ${styles.pillTopRight}`}>
                <div className={styles.pillIconBox}>
                  <Award size={18} />
                </div>
                <div>
                  <div className={styles.pillBold}>#1 Google Rankings</div>
                  <div className={styles.pillSub}>Mangalore & Udupi Maps</div>
                </div>
              </div>

              <div className={`${styles.floatingPill} ${styles.pillBottomLeft}`}>
                <div className={styles.pillIconBoxAccent}>
                  <TrendingUp size={18} />
                </div>
                <div>
                  <div className={styles.pillBold}>+340% Traffic Surge</div>
                  <div className={styles.pillSub}>Average 90-Day Organic ROI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4 GLOWING GLASSMORPHIC STATS COUNTERS */}
      {/* ========================================================= */}
      <section className={styles.statsSection}>
        <div className={styles.statsContainer}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>10+</div>
            <div className={styles.statLabel}>Years Industry Mastery</div>
            <p className={styles.statDesc}>Battle-tested SEO methodologies across competitive verticals.</p>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statNumber}>360+</div>
            <div className={styles.statLabel}>Projects Delivered</div>
            <p className={styles.statDesc}>Websites optimized, ranked, and generating continuous inbound leads.</p>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statNumber}>100+</div>
            <div className={styles.statLabel}>Happy Ambitious Brands</div>
            <p className={styles.statDesc}>Trusted by healthcare, real estate, ecommerce & B2B leaders.</p>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statNumber}>10,000+</div>
            <div className={styles.statLabel}>Top 3 Google Keywords</div>
            <p className={styles.statDesc}>High-intent commercial queries captured across regional & global search.</p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTERACTIVE 6 CORE SEO PILLARS */}
      {/* ========================================================= */}
      <section id="seo-pillars" className={styles.solutionsSection}>
        <div className={styles.solutionsHeader}>
          <span className={styles.solutionsEyebrow}>— OUR 6-PILLAR SEO ARCHITECTURE</span>
          <h2 className={styles.solutionsTitle}>
            Engineered For <span className={styles.solutionsHighlight}>Dominant Search Visibility</span>
          </h2>
          <p className={styles.solutionsSub}>
            Google algorithms reward technical perfection, topical authority, and genuine brand trust.<br/>
            Here is how we turn your website into a perpetual organic revenue driver in Mangalore and beyond.
          </p>
        </div>

        <SeoPillarsTabs locale={locale} />
      </section>

      {/* ========================================================= */}
      {/* GOAL-BASED SEO GROWTH (SOLVING BUSINESS CHALLENGES) */}
      {/* ========================================================= */}
      <section className={styles.goalsSection}>
        <div className={styles.solutionsHeader}>
          <span className={styles.solutionsEyebrow}>— STRATEGIC BUSINESS OUTCOMES</span>
          <h2 className={styles.solutionsTitle}>
            What Does Your Business <span className={styles.solutionsHighlight}>Need to Achieve?</span>
          </h2>
          <p className={styles.solutionsSub}>
            We don&apos;t practice one-size-fits-all SEO. Every campaign is customized to your exact commercial growth goals.
          </p>
        </div>

        <div className={styles.goalsGrid}>
          <div className={styles.goalCard}>
            <div className={styles.goalIconBox}>
              <MapPin size={24} />
            </div>
            <h3 className={styles.goalTitle}>Capture Inbound Footfall & Calls in Mangalore</h3>
            <p className={styles.goalDesc}>
              For clinics, hospitals, showrooms, and local service providers needing customers in Mangalore, Hampankatta, Kadri, Deralakatte, and Surathkal to call and visit immediately.
            </p>
            <div className={styles.goalSolution}>
              <strong>Solution:</strong> Hyper-Local Geo-Grid SEO & Google Maps 3-Pack Domination.
            </div>
          </div>

          <div className={styles.goalCard}>
            <div className={styles.goalIconBox}>
              <Target size={24} />
            </div>
            <h3 className={styles.goalTitle}>Outrank Aggressive Regional Competitors</h3>
            <p className={styles.goalDesc}>
              If entrenched competitors are currently stealing your market share on high-value keywords, we conduct reverse-gap engineering to outrank them and win the highest-intent clicks.
            </p>
            <div className={styles.goalSolution}>
              <strong>Solution:</strong> Competitor Gap Cannibalization & Topical Authority Expansion.
            </div>
          </div>

          <div className={styles.goalCard}>
            <div className={styles.goalIconBox}>
              <ShieldCheck size={24} />
            </div>
            <h3 className={styles.goalTitle}>Recover From Google Algorithm Penalties</h3>
            <p className={styles.goalDesc}>
              Did your organic traffic suddenly drop after a Google Core or Helpful Content update? We perform forensic audits to remove spam backlinks, fix technical debt, and restore rankings.
            </p>
            <div className={styles.goalSolution}>
              <strong>Solution:</strong> 150-Point Technical Cleanup & Disavow Remediation.
            </div>
          </div>

          <div className={styles.goalCard}>
            <div className={styles.goalIconBox}>
              <Users size={24} />
            </div>
            <h3 className={styles.goalTitle}>Generate High-Ticket B2B & Corporate Leads</h3>
            <p className={styles.goalDesc}>
              Attract CEOs, procurement directors, and enterprise decision-makers searching for commercial services, manufacturing capabilities, and professional consultancy.
            </p>
            <div className={styles.goalSolution}>
              <strong>Solution:</strong> B2B High-Intent Content Funnels & Executive Thought Leadership.
            </div>
          </div>

          <div className={styles.goalCard}>
            <div className={styles.goalIconBox}>
              <Globe size={24} />
            </div>
            <h3 className={styles.goalTitle}>Expand Across the Gulf (UAE & Saudi Arabia)</h3>
            <p className={styles.goalDesc}>
              Scale your business beyond Coastal Karnataka into Dubai, Abu Dhabi, Riyadh, and Qatar with multi-region international search optimization and bilingual targeting.
            </p>
            <div className={styles.goalSolution}>
              <strong>Solution:</strong> Multi-Country Hreflang SEO & Gulf GCC Search Infrastructure.
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6-POINT SEO DIAGNOSTIC MATRIX (TRADITIONAL VS ZAVIROQ) */}
      {/* ========================================================= */}
      <section className={styles.diagnosticSection}>
        <div className={styles.solutionsHeader}>
          <span className={styles.solutionsEyebrow}>— WHY TRADITIONAL SEO FAILS</span>
          <h2 className={styles.solutionsTitle}>
            The Difference Between <span className={styles.solutionsHighlight}>Average Agencies & Zaviroq</span>
          </h2>
          <p className={styles.solutionsSub}>
            Most digital agencies in Mangalore use automated tools and cheap tactics from 2015.<br/>
            Here is why modern enterprise brands choose Zaviroq&apos;s data-backed performance framework.
          </p>
        </div>

        <SeoDiagnosticMatrix />
      </section>

      {/* ========================================================= */}
      {/* THE 90-DAY EXECUTION ROADMAP */}
      {/* ========================================================= */}
      <section className={styles.roadmapSection}>
        <div className={styles.solutionsHeader}>
          <span className={styles.solutionsEyebrow}>— TRANSPARENT EXECUTION ROADMAP</span>
          <h2 className={styles.solutionsTitle}>
            Our 90-Day <span className={styles.solutionsHighlight}>Roadmap to Page 1 Dominance</span>
          </h2>
          <p className={styles.solutionsSub}>
            SEO is not magic — it is methodical engineering. Here is our exact milestone-driven 90-day execution framework.
          </p>
        </div>

        <SeoRoadmapTimeline />
      </section>

      {/* ========================================================= */}
      {/* MONTHLY SEO DELIVERABLES & TRANSPARENCY GUARANTEE */}
      {/* ========================================================= */}
      <section className={styles.deliverablesCardSection}>
        <div className={styles.solutionsHeader}>
          <span className={styles.solutionsEyebrow}>— 100% ACCOUNTABILITY GUARANTEE</span>
          <h2 className={styles.solutionsTitle}>
            What You Receive <span className={styles.solutionsHighlight}>Every Single Month</span>
          </h2>
          <p className={styles.solutionsSub}>
            No vague promises. No hidden work. You receive complete transparency with verifiable proof of growth.
          </p>
        </div>

        <div className={styles.deliverablesGridSix}>
          <div className={styles.delivBox}>
            <div className={styles.delivIcon}><BarChart3 size={24} /></div>
            <h3>24/7 Live Analytics Dashboard</h3>
            <p>Access your real-time ranking tracker, organic traffic sessions, and goal conversions at any hour of the day.</p>
          </div>

          <div className={styles.delivBox}>
            <div className={styles.delivIcon}><Compass size={24} /></div>
            <h3>Bi-Weekly Ranking Movements</h3>
            <p>Detailed reports showing exact ranking progressions for primary commercial keywords on Desktop and Mobile.</p>
          </div>

          <div className={styles.delivBox}>
            <div className={styles.delivIcon}><Zap size={24} /></div>
            <h3>Core Web Vitals Monitoring</h3>
            <p>Continuous automated health monitoring ensuring your site never suffers speed slowdowns or broken pages.</p>
          </div>

          <div className={styles.delivBox}>
            <div className={styles.delivIcon}><FileCheck size={24} /></div>
            <h3>Semantic Content & Landing Pages</h3>
            <p>Fresh, thoroughly researched topical authority articles and localized geo-landing pages crafted by expert writers.</p>
          </div>

          <div className={styles.delivBox}>
            <div className={styles.delivIcon}><Globe size={24} /></div>
            <h3>Transparent Backlink Ledger</h3>
            <p>Every single acquired backlink is itemized in a shared ledger with live URL, Domain Rating (DR), and anchor text.</p>
          </div>

          <div className={styles.delivBox}>
            <div className={styles.delivIcon}><Users size={24} /></div>
            <h3>Dedicated SEO Strategist</h3>
            <p>Direct communication with your senior technical SEO strategist via bi-weekly strategy calls and instant messaging.</p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INDUSTRIES WE DOMINATE IN MANGALORE & BEYOND */}
      {/* ========================================================= */}
      <section className={styles.solutionsSection}>
        <div className={styles.solutionsHeader}>
          <span className={styles.solutionsEyebrow}>— LOCAL & GLOBAL SPECIALIZATION</span>
          <h2 className={styles.solutionsTitle}>
            Industries We Help <span className={styles.solutionsHighlight}>Lead in Google Search</span>
          </h2>
          <p className={styles.solutionsSub}>
            Deep domain expertise across Mangalore&apos;s thriving economic sectors, pan-India markets, and the Middle East.
          </p>
        </div>
        
        <IndustriesCarousel industries={industries} />
      </section>

      {/* ========================================================= */}
      {/* COMPREHENSIVE SEO FAQ (SCHEMA.ORG RICH SNIPPET READY) */}
      {/* ========================================================= */}
      <section className={styles.faqSection}>
        <div className={styles.solutionsHeader}>
          <span className={styles.solutionsEyebrow}>— FREQUENTLY ASKED QUESTIONS</span>
          <h2 className={styles.solutionsTitle}>
            Everything You Need to Know About <span className={styles.solutionsHighlight}>SEO in Mangalore</span>
          </h2>
          <p className={styles.solutionsSub}>
            Straight answers to common questions about timelines, Google algorithms, pricing, and guaranteed deliverables.
          </p>
        </div>

        <SeoFaqAccordion faqs={faqs} />
      </section>
      
      {/* ========================================================= */}
      {/* HIGH-CONVERSION BOTTOM CTA SECTION */}
      {/* ========================================================= */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          
          <div className={styles.ctaLeft}>
            <span className={styles.ctaEyebrow}>— START OUTRANKING COMPETITORS TODAY</span>
            <h2 className={styles.ctaTitle}>
              Ready to Claim <span className={styles.ctaHighlight}>Google Page 1 in Mangalore?</span>
            </h2>
            <p className={styles.ctaDesc}>
              Request a comprehensive 150-Point Technical SEO Audit & Competitor Gap Analysis for your website. Valued at ₹15,000 — 100% complimentary with no obligation.
            </p>
            
            <div className={styles.ctaButtonGroup}>
              <Link href={`/${locale}/contact?service=seo-audit`} className={styles.ctaBtnPrimary}>
                <span>Claim Free SEO Audit</span>
                <span className={styles.btnArrow}>→</span>
              </Link>
              <a 
                href="https://wa.me/917483830582?text=Hello%20Zaviroq%2C%20I%20would%20like%20to%20get%20a%20free%20SEO%20audit%20for%20my%20business." 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.ctaBtnSecondary}
              >
                <span>💬 WhatsApp Our SEO Lead</span>
              </a>
            </div>

            <div className={styles.ctaFeatures}>
              <div className={styles.ctaFeatureItem}>
                <div className={styles.ctaFeatureIcon}>⚡</div>
                <div className={styles.ctaFeatureText}>48-Hour<br/>Delivery</div>
              </div>
              <div className={styles.ctaFeatureItem}>
                <div className={styles.ctaFeatureIcon}>🛡️</div>
                <div className={styles.ctaFeatureText}>100% White-Hat<br/>Methods</div>
              </div>
              <div className={styles.ctaFeatureItem}>
                <div className={styles.ctaFeatureIcon}>📈</div>
                <div className={styles.ctaFeatureText}>Revenue<br/>Focused</div>
              </div>
            </div>
          </div>

          <div className={styles.ctaRight}>
            <img 
              src="/assets/images/cta-laptop-3d.png" 
              alt="Zaviroq SEO Performance Strategy Dashboard" 
              className={styles.ctaLaptopImg} 
            />
          </div>
          
        </div>
      </section>
    </div>
  );
}
