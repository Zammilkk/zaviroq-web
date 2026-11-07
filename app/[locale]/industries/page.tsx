import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  Target, 
  Layers, 
  BarChart3, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';
import RevealOnScroll from '../RevealOnScroll';
import { 
  HeroFloatingCollage, 
  IndustryGridAndSpotlight 
} from './IndustriesInteractive';

export const metadata: Metadata = {
  title: 'Digital Growth Solutions for Diverse Industries | Zaviroq',
  description: 'Industry-focused digital marketing, SEO, web development, and performance technology designed for real business outcomes across Real Estate, Healthcare, E-Commerce, Hospitality, and Corporate B2B.',
  alternates: {
    canonical: 'https://www.zaviroq.com/industries',
  },
  openGraph: {
    title: 'Digital Growth Solutions for Diverse Industries | Zaviroq',
    description: 'Industry-focused digital marketing, SEO, and web development strategies tailored for real business growth.',
    url: 'https://www.zaviroq.com/industries',
    siteName: 'Zaviroq',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: 'https://www.zaviroq.com/og-image.png', width: 1200, height: 630, alt: 'Zaviroq Industry Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Growth Solutions for Diverse Industries | Zaviroq',
    description: 'Industry-focused digital marketing, SEO, and web development strategies tailored for real business growth.',
    images: ['https://www.zaviroq.com/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function IndustriesPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Schema.org Injections
  const jsonLdWebPage = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Industry Digital Growth Solutions',
    url: 'https://www.zaviroq.com/industries',
    description: 'Industry-focused digital marketing, web, and technology solutions designed for real business outcomes.',
    publisher: {
      '@type': 'Organization',
      name: 'Zaviroq',
      url: 'https://www.zaviroq.com',
    },
  };

  const jsonLdBreadcrumb = {
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
        name: 'Industries',
        item: 'https://www.zaviroq.com/industries',
      },
    ],
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Schema.org Injections */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Atmospheric Ambient Glows & Grid */}
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />
      <div className={styles.gridPattern} />

      {/* Breadcrumb Navigation */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>›</span>
        <span className={styles.breadcrumbCurrent}>Industries</span>
      </nav>

      {/* ── 1. HERO SECTION (2-Column Architecture Matching Mockup) ── */}
      <RevealOnScroll delay={50} yOffset={25}>
        <section className={styles.heroSection}>
          {/* Left Column Content */}
          <div className={styles.heroContentLeft}>
            <div className={styles.heroEyebrowPill}>
              <Layers size={14} />
              <span>Industries We Serve</span>
            </div>

            <h1 className={styles.heroTitle}>
              Digital Growth Solutions<br />
              for <span className={styles.heroHighlight}>Diverse Industries</span>
            </h1>

            <p className={styles.heroSub}>
              Industry-focused digital marketing, web, and technology solutions designed for real business outcomes.
            </p>

            <div className={styles.heroBtnRow}>
              <Link href="/contact" className={styles.btnPrimary}>
                <span>Discuss Your Industry Needs</span>
                <ArrowRight size={17} />
              </Link>

              <Link href="/portfolio" className={styles.btnSecondary}>
                <Play size={13} fill="currentColor" />
                <span>See Our Work</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 3D Floating Cards Collage */}
          <HeroFloatingCollage />
        </section>
      </RevealOnScroll>

      {/* ── 2. "INDUSTRIES WE POWER" & SPOTLIGHT SECTION ── */}
      <RevealOnScroll delay={80} yOffset={30}>
        <section className={styles.sectionContainer}>
          {/* Centered Section Header */}
          <div className={styles.sectionHeaderCenter}>
            <span className={styles.sectionEyebrowBadge}>OUR EXPERTISE</span>
            <h2 className={styles.sectionMainTitle}>
              Industries <span className={styles.heroHighlight}>We Power</span>
            </h2>
            <p className={styles.sectionSubText}>
              From real estate to healthcare, we help businesses across sectors build a stronger digital presence, generate qualified leads, and scale revenue.
            </p>
          </div>

          {/* 8-Card Grid + Interactive Spotlight */}
          <IndustryGridAndSpotlight />

          {/* ── 4. 4 KEY VALUE PROPOSITIONS ROW ── */}
          <div className={styles.differentiatorsGrid}>
            <div className={styles.differentiatorItem}>
              <div className={styles.diffIconCircle}>
                <Target size={22} />
              </div>
              <h3 className={styles.diffTitle}>Industry Expertise</h3>
              <p className={styles.diffDesc}>
                Deep understanding of your market and customer behavior.
              </p>
            </div>

            <div className={styles.differentiatorItem}>
              <div className={styles.diffIconCircle}>
                <Layers size={22} />
              </div>
              <h3 className={styles.diffTitle}>Tailored Strategies</h3>
              <p className={styles.diffDesc}>
                Custom plans for your industry, not a one-size-fits-all approach.
              </p>
            </div>

            <div className={styles.differentiatorItem}>
              <div className={styles.diffIconCircle}>
                <BarChart3 size={22} />
              </div>
              <h3 className={styles.diffTitle}>Measurable Results</h3>
              <p className={styles.diffDesc}>
                Performance-driven campaigns with clear business impact.
              </p>
            </div>

            <div className={styles.differentiatorItem}>
              <div className={styles.diffIconCircle}>
                <ShieldCheck size={22} />
              </div>
              <h3 className={styles.diffTitle}>Long-Term Growth</h3>
              <p className={styles.diffDesc}>
                Build a strong, sustainable digital presence.
              </p>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* ── 5. BOTTOM CTA BANNER (Luminous Purple Stage with 3D Growth Card) ── */}
      <RevealOnScroll delay={100} yOffset={30}>
        <div className={styles.bottomCtaWrapper}>
          <div className={styles.bottomCtaCard}>
            <div className={styles.ctaGlowSphere} />

            {/* Left Content */}
            <div className={styles.ctaLeftCol}>
              <div className={styles.ctaPillBadge}>
                <Sparkles size={13} />
                <span>Let&apos;s Grow Your Industry Presence</span>
              </div>

              <h2 className={styles.ctaHeadline}>
                Ready to Grow Your Business<br />
                in Your Industry?
              </h2>

              <p className={styles.ctaSubtitle}>
                Get a customized digital strategy tailored to your industry, goals, and market.
              </p>

              <div className={styles.ctaBtnRow}>
                <Link href="/contact" className={styles.ctaBtnWhite}>
                  <span>Talk to Our Experts</span>
                  <ArrowRight size={17} />
                </Link>

                <Link href="/portfolio" className={styles.ctaBtnGhost}>
                  <Play size={13} fill="currentColor" />
                  <span>View Our Portfolio</span>
                </Link>
              </div>
            </div>

            {/* Right 3D Glass Growth Card */}
            <div className={styles.ctaRightCol}>
              <div className={styles.growthGlassCard}>
                <div className={styles.growthCardHeader}>
                  <div className={styles.growthBrandEmblem}>Z</div>
                  <ArrowUpRight size={24} className={styles.growthArrowIcon} />
                </div>

                <div className={styles.growthBarsContainer}>
                  <div className={`${styles.barCol} ${styles.bar1}`} />
                  <div className={`${styles.barCol} ${styles.bar2}`} />
                  <div className={`${styles.barCol} ${styles.bar3}`} />
                  <div className={`${styles.barCol} ${styles.bar4}`} />
                  <div className={`${styles.barCol} ${styles.bar5}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}
