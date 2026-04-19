import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';
import { Metadata } from 'next';
import Link from 'next/link';
import expandedServices from '@/data/expandedServices.json';

export const metadata: Metadata = {
  title: 'SEO Services That Build Search Authority & Drive Organic Growth | ZAVIROQ',
  description:
    'Comprehensive SEO services including Technical SEO, On-Page Optimization, Off-Page Link Building, Keyword Research, and AI SEO. Drive organic growth across GCC and India.',
};

interface ServiceEndpoint {
  slug: string;
  title: string;
  color: string;
  heroDesc: string;
  [key: string]: string | string[];
}

const coreSeoLinks = [
  { slug: 'technical-seo', label: 'Technical SEO' },
  { slug: 'on-page-seo', label: 'On-Page SEO' },
  { slug: 'off-page-seo', label: 'Off-Page SEO' },
  { slug: 'seo-audit', label: 'SEO Audit & Reporting' },
  { slug: 'keyword-research', label: 'Keyword Research & Search Intent' },
  { slug: 'ai-seo-optimization', label: 'AI SEO (AIO Optimization 🔥)' },
];

export default async function SEOServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const seoServices = ((expandedServices as any)['seo-services'] || []) as ServiceEndpoint[];

  return (
    <div className={styles.page}>
      <h1 className="visually-hidden">ZAVIROQ SEO Services — Build Search Authority & Drive Organic Growth</h1>

      <div className={styles.gridLines} aria-hidden="true" />

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href={`/${locale}`}>Home</Link>
        <span className={styles.breadSep}>›</span>
        <span className={styles.breadCurrent}>SEO Services</span>
      </nav>

      <section className={styles.hero}>
        <RevealOnScroll>
          <div className={styles.heroTag}>
            <span className={styles.tagDot} />
            Search Authority Engine
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={60}>
          <h1 className={styles.heroTitle}>
            SEO Services That Build <span className={styles.gradText}>Search Authority</span> &amp; Drive Organic Growth
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={110}>
          <p className={styles.heroSub}>
            Comprehensive search engine optimization spanning technical architecture, semantic content structuring, and aggressive link acquisition. We build lasting organic dominance across GCC and India.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={160}>
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statVal}>7</span>
              <span className={styles.statKey}>Core Services</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>6</span>
              <span className={styles.statKey}>Industry Programs</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>GCC</span>
              <span className={styles.statKey}>Market Focus</span>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className={styles.introSection}>
        <RevealOnScroll>
          <div className={styles.introBlock}>
            <h2>What is SEO &amp; Why It Matters</h2>
            <p>
              Search Engine Optimization is the foundation of sustainable digital growth. Unlike paid advertising that stops when you stop paying, SEO builds lasting authority that compounds over time. We engineer complete search ecosystems that dominate rankings and capture high-intent traffic across the GCC and India.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      <div className={styles.dividerRow}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerLabel}>Core SEO Services</span>
        <div className={styles.dividerLine} />
      </div>

      <section className={styles.coreGrid}>
        {coreSeoLinks.map((item, i) => (
          <RevealOnScroll key={item.slug} delay={i * 70}>
            <Link href={`/${locale}/${item.slug}`} className={styles.coreCard}>
              <span className={styles.coreNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.coreTitle}>{item.label}</h3>
            </Link>
          </RevealOnScroll>
        ))}
      </section>

      <section className={styles.introSection}>
        <RevealOnScroll>
          <div className={styles.introBlock}>
            <h2>Industry SEO Programs</h2>
            <p>
              Specialized SEO strategies tailored for specific industries. We build targeted semantic hubs that capture high-intent local traffic and drive conversions in your market.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      <section className={styles.industryGrid}>
        {seoServices.map((service, i) => (
          <RevealOnScroll key={service.slug} delay={i * 70}>
            <Link href={`/${locale}/seo-services/${service.slug}`} className={styles.industryCard}>
              <span className={styles.indNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.indTitle}>{service.title}</h3>
              <p className={styles.indDesc}>{service.heroDesc}</p>
            </Link>
          </RevealOnScroll>
        ))}
      </section>

      <div className={styles.ctaWrap}>
        <RevealOnScroll>
          <div className={styles.cta}>
            <p className={styles.ctaEye}>Deploy Your SEO Stack</p>
            <h2>Ready to dominate search rankings?</h2>
            <p>
              Our SEO engineers build complete architectures that capture high-intent traffic and convert visits into revenue. Let&apos;s map your path to #1.
            </p>
            <Link href={`/${locale}/contact`} className={`btn-primary ${styles.ctaBtn}`}>
              Start SEO Audit ⚡
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}