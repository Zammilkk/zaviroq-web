"use client";

import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';
import Link from 'next/link';

const sections = [
  { title: 'Search Intent Analysis', desc: 'Map keywords to intent stages—informational, navigational, commercial, and transactional. We find your high-conversion opportunities.' },
  { title: 'Keyword Clustering', desc: 'Group semantically related keywords into topic hubs for efficient content creation and silo architecture.' },
  { title: 'Long-tail Keywords', desc: 'Target zero-volume gems with high conversion intent—low competition, ultra-specific queries from ready-to-buy customers.' },
  { title: 'Competitor Keyword Gap', desc: 'Reverse engineer competitor keyword profiles to identify missed opportunities you can capture immediately.' },
];

export default function KeywordResearchPage() {
  return (
    <div className={styles.page}>
      <h1 className="visually-hidden">Keyword Research & Search Intent | ZAVIROQ</h1>

      <div className={styles.gridLines} aria-hidden="true" />

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className={styles.breadSep}>›</span>
        <Link href="/seo-services">SEO Services</Link>
        <span className={styles.breadSep}>›</span>
        <span className={styles.breadCurrent}>Keyword Research</span>
      </nav>

      <section className={styles.hero}>
        <RevealOnScroll>
          <div className={styles.heroTag}>
            <span className={styles.tagDot} />
            Intelligence
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={60}>
          <h1 className={styles.heroTitle}>
            Keyword Research <span className={styles.gradText}>&amp; Search Intent</span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={110}>
          <p className={styles.heroSub}>
            We do not target vanity metrics. We mine the absolute bottom-of-the-funnel commercial keywords that guarantee high conversion and rapid ROI for your business.
          </p>
        </RevealOnScroll>
      </section>

      <div className={styles.dividerRow}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerLabel}>Research Areas</span>
        <div className={styles.dividerLine} />
      </div>

      <section className={styles.contentGrid}>
        {sections.map((section, i) => (
          <RevealOnScroll key={i} delay={i * 70}>
            <div className={styles.contentCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNum}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.cardIcon}>🎯</span>
              </div>
              <h3 className={styles.cardTitle}>{section.title}</h3>
              <p className={styles.cardDesc}>{section.desc}</p>
            </div>
          </RevealOnScroll>
        ))}
      </section>

      <div className={styles.ctaWrap}>
        <RevealOnScroll>
          <div className={styles.cta}>
            <p className={styles.ctaEye}>Keyword Intelligence</p>
            <h2>Find your high-conversion keywords?</h2>
            <p>
              We uncover the keywords your competitors missed. Get a complete keyword map with content recommendations.
            </p>
            <Link href="/contact" className={`btn-primary ${styles.ctaBtn}`}>
              Get Keyword Research ⚡
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}