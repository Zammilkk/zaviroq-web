"use client";

import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';
import Link from 'next/link';

const sections = [
  { title: 'Title & Meta Optimization', desc: 'Compelling title tags and meta descriptions engineered for click-through rate dominance and perfect algorithmic alignment with search intent.' },
  { title: 'Heading Structure', desc: 'Hierarchical H1-H6 structure that guides both users and search engine crawlers through your content architecture for optimal understanding.' },
  { title: 'Content Optimization', desc: 'NLP-entity focused content that maps directly to search intent while maintaining natural readability and E-E-A-T signals.' },
  { title: 'Internal Linking', desc: 'Strategic siloed link architecture that distributes authority evenly and guides users through conversion funnels seamlessly.' },
  { title: 'Keyword Placement', desc: 'Strategic LSI and semantic keyword integration at optimal density—zero stuffing, maximum relevance and topical coverage.' },
];

export default function OnPageSEOPage() {
  return (
    <div className={styles.page}>
      <h1 className="visually-hidden">On-Page SEO Strategy | ZAVIROQ</h1>

      <div className={styles.gridLines} aria-hidden="true" />

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className={styles.breadSep}>›</span>
        <Link href="/seo-services">SEO Services</Link>
        <span className={styles.breadSep}>›</span>
        <span className={styles.breadCurrent}>On-Page SEO</span>
      </nav>

      <section className={styles.hero}>
        <RevealOnScroll>
          <div className={styles.heroTag}>
            <span className={styles.tagDot} />
            Content Layer
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={60}>
          <h1 className={styles.heroTitle}>
            On-Page SEO <span className={styles.gradText}>Strategy</span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={110}>
          <p className={styles.heroSub}>
            We map your content directly to Google&apos;s NLP entities. Zero keyword stuffing—just pure algorithmic alignment that drives extreme topical authority and dominates semantic search results.
          </p>
        </RevealOnScroll>
      </section>

      <div className={styles.dividerRow}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerLabel}>Optimization Areas</span>
        <div className={styles.dividerLine} />
      </div>

      <section className={styles.contentGrid}>
        {sections.map((section, i) => (
          <RevealOnScroll key={i} delay={i * 70}>
            <div className={styles.contentCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNum}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.cardIcon}>📝</span>
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
            <p className={styles.ctaEye}>Content Authority</p>
            <h2>Content that ranks and converts?</h2>
            <p>
              We optimize every element on your pages for both search engines and human users. Get complete on-page SEO restructuring.
            </p>
            <Link href="/contact" className={`btn-primary ${styles.ctaBtn}`}>
              Optimize My Content ⚡
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}