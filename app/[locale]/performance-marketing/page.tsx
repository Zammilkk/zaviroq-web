import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';
import { Metadata } from 'next';
import Link from 'next/link';
import expandedServices from '@/data/expandedServices.json';
import type { ServiceConfig } from '@/types/services';

export const metadata: Metadata = {
  title: 'Performance Marketing Services That Drive Measurable ROI | ZAVIROQ',
  description:
    'Aggressive paid advertising across Google, Meta, LinkedIn, TikTok, YouTube, and more. We capture high-intent traffic and convert it into revenue across GCC and India.',
};

const adChannelLinks = [
  { slug: 'google-ads-agency', label: 'Google Ads' },
  { slug: 'meta-ads-agency', label: 'Meta Ads' },
  { slug: 'linkedin-ads-agency', label: 'LinkedIn Ads' },
  { slug: 'tiktok-ads-agency', label: 'TikTok Ads' },
  { slug: 'youtube-ads-agency', label: 'YouTube Ads' },
  { slug: 'taboola-ads', label: 'Taboola Ads' },
];

export default async function PerformanceMarketingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const pmServices = (expandedServices['performance-marketing'] as ServiceConfig[]) || [];

  return (
    <div className={styles.page}>
      <h1 className="visually-hidden">ZAVIROQ Performance Marketing — Paid Advertising That Delivers Real Results</h1>

      <div className={styles.gridLines} aria-hidden="true" />

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href={`/${locale}`}>Home</Link>
        <span className={styles.breadSep}>›</span>
        <span className={styles.breadCurrent}>Performance Marketing</span>
      </nav>

      <section className={styles.hero}>
        <RevealOnScroll>
          <div className={styles.heroTag}>
            <span className={styles.tagDot} />
            Paid Growth Engine
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={60}>
          <h1 className={styles.heroTitle}>
            Performance Marketing That <span className={styles.gradText}>Scales Revenue</span> &amp; Dominates Markets
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={110}>
          <p className={styles.heroSub}>
            We don&apos;t just run ads — we engineer revenue machines. From Google Search to TikTok, our data-driven campaigns capture high-intent audiences and convert them into paying customers across GCC and India.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={160}>
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statVal}>10</span>
              <span className={styles.statKey}>Ad Platforms</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>500%+</span>
              <span className={styles.statKey}>Avg. ROAS</span>
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
            <h2>Why Performance Marketing?</h2>
            <p>
              Paid advertising is the fastest path to revenue. Unlike organic marketing that takes months to compound, performance marketing delivers immediate, measurable results. We build entire paid ecosystems that work 24/7 to fill your pipeline with qualified leads and customers.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      <div className={styles.dividerRow}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerLabel}>Ad Channel Mastery</span>
        <div className={styles.dividerLine} />
      </div>

      <section className={styles.coreGrid}>
        {adChannelLinks.map((item, i) => (
          <RevealOnScroll key={item.slug} delay={i * 70}>
            <Link href={`/${locale}/performance-marketing/${item.slug}`} className={styles.coreCard}>
              <span className={styles.coreNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.coreTitle}>{item.label}</h3>
            </Link>
          </RevealOnScroll>
        ))}
      </section>

      <section className={styles.introSection}>
        <RevealOnScroll>
          <div className={styles.introBlock}>
            <h2>Full-Funnel Optimization</h2>
            <p>
              It&apos;s not just about getting clicks — it&apos;s about converting them. We optimize every stage of the customer journey, from first impression to final purchase, using advanced tracking, A/B testing, and psychological triggers.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      <section className={styles.industryGrid}>
        {pmServices.map((service, i) => (
          <RevealOnScroll key={service.slug} delay={i * 70}>
            <Link href={`/${locale}/performance-marketing/${service.slug}`} className={styles.industryCard}>
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
            <p className={styles.ctaEye}>Scale Your Revenue</p>
            <h2>Ready to explode your growth?</h2>
            <p>
              Our performance marketing experts are ready to build a custom paid growth system tailored to your business goals. Let&apos;s turn your ad spend into revenue.
            </p>
            <Link href={`/${locale}/contact`} className={`btn-primary ${styles.ctaBtn}`}>
              Start Campaign ⚡
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}