"use client";

import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';
import Link from 'next/link';

const sections = [
  { title: 'Website Analysis', desc: 'Complete crawl audit—indexation status, URL parameters, duplicate content detection, and site architecture health.' },
  { title: 'Technical Errors', desc: 'Identify crawl errors, render blocking issues, JavaScript bloat, Core Web Vitals failures, and server response codes.' },
  { title: 'Content Gaps', desc: 'Analyze content coverage vs keyword opportunities—identify missing pages, thin content, and cannibalization issues.' },
  { title: 'Competitor Audit', desc: 'Reverse engineer competitor rankings—backlink profiles, content strategies, and keyword gaps you can exploit for quick wins.' },
];

export default function SEOAuditPage() {
  return (
    <div className={styles.page}>
      <h1 className="visually-hidden">SEO Audit & Reporting | ZAVIROQ</h1>

      <div className={styles.gridLines} aria-hidden="true" />

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className={styles.breadSep}>›</span>
        <Link href="/seo-services">SEO Services</Link>
        <span className={styles.breadSep}>›</span>
        <span className={styles.breadCurrent}>SEO Audit</span>
      </nav>

      <section className={styles.hero}>
        <RevealOnScroll>
          <div className={styles.heroTag}>
            <span className={styles.tagDot} />
            Diagnostic
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={60}>
          <h1 className={styles.heroTitle}>
            SEO Audit <span className={styles.gradText}>&amp; Reporting</span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={110}>
          <p className={styles.heroSub}>
            Stop guessing why your traffic dropped. We execute forensic algorithmic audits to uncover silent penalties, cannibalization, and technical roadblocks hiding in your site architecture.
          </p>
        </RevealOnScroll>
      </section>

      <div className={styles.dividerRow}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerLabel}>Audit Areas</span>
        <div className={styles.dividerLine} />
      </div>

      <section className={styles.contentGrid}>
        {sections.map((section, i) => (
          <RevealOnScroll key={i} delay={i * 70}>
            <div className={styles.contentCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNum}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.cardIcon}>🔍</span>
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
            <p className={styles.ctaEye}>Diagnostic Analysis</p>
            <h2>What is blocking your rankings?</h2>
            <p>
              Get a complete forensic audit with actionable fixes. We diagnose the hidden issues killing your search visibility.
            </p>
            <Link href="/contact" className={`btn-primary ${styles.ctaBtn}`}>
              Get SEO Audit ⚡
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}