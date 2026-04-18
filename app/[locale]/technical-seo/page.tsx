"use client";

import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';
import Link from 'next/link';

export default function TechnicalSEOPage() {
  const sections = [
    { title: 'Site Speed Optimization', desc: 'We analyze and eliminate render-blocking resources, optimize images with modern formats (WebP, AVIF), implement advanced caching strategies, and leverage CDN edge networks to achieve sub-second load times across all devices.' },
    { title: 'Core Web Vitals', desc: 'Complete LCP, FID, and CLS optimization. We ensure your metrics meet Google threshold for ranking signals—delivering excellent user experience that search algorithms reward.' },
    { title: 'Crawlability & Indexing', desc: 'Proper robots directives, clean crawl path architecture, and index coverage monitoring. We ensure Google accesses your most important content while ignoring the pages that waste crawl budget.' },
    { title: 'XML Sitemap & Robots.txt', desc: 'Dynamic sitemap generation with proper priority signals, change frequencies, and last modified dates. Perfect robots.txt configuration for optimal crawling behavior.' },
    { title: 'Schema Markup', desc: 'Comprehensive JSON-LD structured data implementation—products, reviews, FAQs, local business, organization, and article schemas for rich search results.' },
  ];

  return (
    <div className={styles.page}>
      <h1 className="visually-hidden">Technical SEO Optimization | ZAVIROQ</h1>

      <div className={styles.gridLines} aria-hidden="true" />

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className={styles.breadSep}>›</span>
        <Link href="/seo-services">SEO Services</Link>
        <span className={styles.breadSep}>›</span>
        <span className={styles.breadCurrent}>Technical SEO</span>
      </nav>

      <section className={styles.hero}>
        <RevealOnScroll>
          <div className={styles.heroTag}>
            <span className={styles.tagDot} />
            Foundation Layer
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={60}>
          <h1 className={styles.heroTitle}>
            Technical SEO <span className={styles.gradText}>Optimization</span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={110}>
          <p className={styles.heroSub}>
            If Google cannot crawl your site, you do not exist. We build flawless technical foundations—optimizing crawl budgets, eliminating JavaScript bloat, and maximizing Core Web Vitals for absolute indexing dominance.
          </p>
        </RevealOnScroll>
      </section>

      <div className={styles.dividerRow}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerLabel}>What We Optimize</span>
        <div className={styles.dividerLine} />
      </div>

      <section className={styles.contentGrid}>
        {sections.map((section, i) => (
          <RevealOnScroll key={i} delay={i * 70}>
            <div className={styles.contentCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNum}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.cardIcon}>⚡</span>
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
            <p className={styles.ctaEye}>Technical Foundation</p>
            <h2>Ready to fix your technical foundation?</h2>
            <p>
              Our technical SEO engineers audit, diagnose, and fix the critical底层 issues blocking your rankings. Get a complete technical health report.
            </p>
            <Link href="/contact" className={`btn-primary ${styles.ctaBtn}`}>
              Get Technical Audit ⚡
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}