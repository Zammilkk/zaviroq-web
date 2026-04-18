"use client";

import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';
import Link from 'next/link';

const sections = [
  { title: 'AI Search (Google AI Overview)', desc: 'Optimize for Google AI Overview and ChatGPT Search. Structure your data to feed directly into LLM responses for maximum visibility in AI-generated answers.' },
  { title: 'Conversational SEO', desc: 'Target question-based queries and voice search patterns. Optimize for natural language that AI systems pull from for conversational search results.' },
  { title: 'Entity-based SEO', desc: 'Build entity authority—structured knowledge graphs that AI systems recognize as authoritative sources in your industry niche.' },
  { title: 'Semantic Search', desc: 'Go beyond keywords. Create semantically rich content that matches search intent at the conceptual level AI understands and indexes.' },
];

export default function AISEOPage() {
  return (
    <div className={styles.page}>
      <h1 className="visually-hidden">AI SEO Optimization | ZAVIROQ</h1>

      <div className={styles.gridLines} aria-hidden="true" />

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className={styles.breadSep}>›</span>
        <Link href="/seo-services">SEO Services</Link>
        <span className={styles.breadSep}>›</span>
        <span className={styles.breadCurrent}>AI SEO</span>
      </nav>

      <section className={styles.hero}>
        <RevealOnScroll>
          <div className={styles.heroTag}>
            <span className={styles.tagDot} />
            AI Search Era 🔥
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={60}>
          <h1 className={styles.heroTitle}>
            AI SEO <span className={styles.gradText}>Optimization 🔥</span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={110}>
          <p className={styles.heroSub}>
            Google is evolving into an AI assistant. We structure your datasets and content to feed directly into Search Generative Experience LLMs for massive visibility in the new AI search era.
          </p>
        </RevealOnScroll>
      </section>

      <div className={styles.dividerRow}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerLabel}>AI Search Strategy</span>
        <div className={styles.dividerLine} />
      </div>

      <section className={styles.contentGrid}>
        {sections.map((section, i) => (
          <RevealOnScroll key={i} delay={i * 70}>
            <div className={styles.contentCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNum}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.cardIcon}>🤖</span>
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
            <p className={styles.ctaEye}>Next-Gen Search 🔥</p>
            <h2>Ready for the AI search era?</h2>
            <p>
              Get ahead of the curve. We optimize your brand for AI Overview and conversational search before your competitors do.
            </p>
            <Link href="/contact" className={`btn-primary ${styles.ctaBtn}`}>
              Optimize for AI Search 🔥
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}