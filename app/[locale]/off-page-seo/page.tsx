"use client";

import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';
import Link from 'next/link';

const sections = [
  { title: 'Link Building', desc: 'White-hat outreach campaigns securing editorial links from DR 70+ publications in your niche across GCC and international markets.' },
  { title: 'Authority Signals', desc: 'Building brand mentions, citations, and trust signals that establish domain credibility within search algorithms.' },
  { title: 'Backlinks Strategy', desc: 'Custom link acquisition roadmaps—competitor analysis, gap identification, and tiered link building campaigns.' },
  { title: 'Anchor Optimization', desc: 'Natural anchor text distribution that avoids over-optimization penalties while maximizing link equity passing.' },
];

export default function OffPageSEOPage() {
  return (
    <div className={styles.page}>
      <h1 className="visually-hidden">Off-Page SEO & Link Building | ZAVIROQ</h1>

      <div className={styles.gridLines} aria-hidden="true" />

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className={styles.breadSep}>›</span>
        <Link href="/seo-services">SEO Services</Link>
        <span className={styles.breadSep}>›</span>
        <span className={styles.breadCurrent}>Off-Page SEO</span>
      </nav>

      <section className={styles.hero}>
        <RevealOnScroll>
          <div className={styles.heroTag}>
            <span className={styles.tagDot} />
            Authority Layer
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={60}>
          <h1 className={styles.heroTitle}>
            Off-Page SEO <span className={styles.gradText}>&amp; Link Building</span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={110}>
          <p className={styles.heroSub}>
            We build structural trust via aggressive off-page outreach. By securing high-DR editorial placements, we inject massive domain authority straight into your target pages for compounding rankings.
          </p>
        </RevealOnScroll>
      </section>

      <div className={styles.dividerRow}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerLabel}>Link Acquisition</span>
        <div className={styles.dividerLine} />
      </div>

      <section className={styles.contentGrid}>
        {sections.map((section, i) => (
          <RevealOnScroll key={i} delay={i * 70}>
            <div className={styles.contentCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNum}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.cardIcon}>🔗</span>
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
            <p className={styles.ctaEye}>Domain Authority</p>
            <h2>Build links that move the needle?</h2>
            <p>
              We secure editorial backlinks from authority publications. Get a custom link building strategy that scales your domain authority.
            </p>
            <Link href="/contact" className={`btn-primary ${styles.ctaBtn}`}>
              Start Link Campaign ⚡
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}