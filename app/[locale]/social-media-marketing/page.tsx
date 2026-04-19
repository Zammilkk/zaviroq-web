import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';
import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Social Media Marketing Services | ZAVIROQ',
  description:
    'Expert social media marketing services. Management, content creation, Instagram & LinkedIn marketing, and strategic growth across GCC and India.',
};

interface ServiceEndpoint {
  slug: string;
  title: string;
  color: string;
  heroDesc: string;
  [key: string]: string | string[];
}

const socialLinks = [
  { slug: 'social-media-management', label: 'Social Media Management' },
  { slug: 'content-creation', label: 'Content Creation' },
  { slug: 'instagram-marketing', label: 'Instagram Marketing' },
  { slug: 'linkedin-marketing', label: 'LinkedIn Marketing' },
  { slug: 'social-media-strategy', label: 'Social Media Strategy' },
];

export default async function SocialMediaMarketingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const dbPath = path.join(process.cwd(), 'data', 'expandedServices.json');
  let smmServices: ServiceEndpoint[] = [];
  
  if (fs.existsSync(dbPath)) {
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    smmServices = db['social-media-marketing'] || [];
  }

  return (
    <div className={styles.page}>
      <h1 className="visually-hidden">ZAVIROQ Social Media Marketing Services</h1>

      <div className={styles.gridLines} aria-hidden="true" />

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href={`/${locale}`}>Home</Link>
        <span className={styles.breadSep}>›</span>
        <span className={styles.breadCurrent}>Social Media Marketing</span>
      </nav>

      <section className={styles.hero}>
        <RevealOnScroll>
          <div className={styles.heroTag}>
            <span className={styles.tagDot} />
            Engagement Engine
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={60}>
          <h1 className={styles.heroTitle}>
            Social Media Marketing That <span className={styles.gradText}>Engages & Converts</span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={110}>
          <p className={styles.heroSub}>
            Turn followers into customers. We build engaged communities, create scroll-stopping content, and drive real business results through strategic social media marketing across GCC and India.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={160}>
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statVal}>5</span>
              <span className={styles.statKey}>Core Services</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>10x</span>
              <span className={styles.statKey}>Engagement Growth</span>
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
            <h2>Why Social Media Marketing?</h2>
            <p>
              Social media is where your audience lives, scrolls, and makes decisions. Our data-driven strategies turn casual browsers into loyal followers and paying customers. We don&apos;t just post — we build communities.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      <div className={styles.dividerRow}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerLabel}>Our Services</span>
        <div className={styles.dividerLine} />
      </div>

      <section className={styles.coreGrid}>
        {socialLinks.map((item, i) => (
          <RevealOnScroll key={item.slug} delay={i * 70}>
            <Link href={`/${locale}/social-media-marketing/${item.slug}`} className={styles.coreCard}>
              <span className={styles.coreNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.coreTitle}>{item.label}</h3>
            </Link>
          </RevealOnScroll>
        ))}
      </section>

      <section className={styles.introSection}>
        <RevealOnScroll>
          <div className={styles.introBlock}>
            <h2>Platform-Specific Expertise</h2>
            <p>
              Each platform has its own algorithms, audiences, and best practices. We specialize in both visual platforms like Instagram and professional networks like LinkedIn to maximize your reach and conversions.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      <section className={styles.industryGrid}>
        {smmServices.map((service, i) => (
          <RevealOnScroll key={service.slug} delay={i * 70}>
            <Link href={`/${locale}/social-media-marketing/${service.slug}`} className={styles.industryCard}>
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
            <p className={styles.ctaEye}>Grow Your Presence</p>
            <h2>Ready to dominate social media?</h2>
            <p>
              Our social media experts are ready to build your brand presence and drive real business results.
            </p>
            <Link href={`/${locale}/contact`} className={`btn-primary ${styles.ctaBtn}`}>
              Start Growing ⚡
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}