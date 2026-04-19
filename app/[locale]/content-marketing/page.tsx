import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';
import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Content Marketing Services | ZAVIROQ',
  description:
    'Professional content marketing services. Blog writing, SEO content, copywriting, and website content that drives engagement and conversions.',
};

interface ServiceEndpoint {
  slug: string;
  title: string;
  color: string;
  heroDesc: string;
  [key: string]: string | string[];
}

const contentLinks = [
  { slug: 'blog-writing-services', label: 'Blog Writing' },
  { slug: 'seo-content-writing', label: 'SEO Content' },
  { slug: 'copywriting-services', label: 'Copywriting' },
  { slug: 'website-content-writing', label: 'Website Content' },
];

export default async function ContentMarketingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const dbPath = path.join(process.cwd(), 'data', 'expandedServices.json');
  let contentServices: ServiceEndpoint[] = [];
  
  if (fs.existsSync(dbPath)) {
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    contentServices = db['content-marketing'] || [];
  }

  return (
    <div className={styles.page}>
      <h1 className="visually-hidden">ZAVIROQ Content Marketing Services</h1>

      <div className={styles.gridLines} aria-hidden="true" />

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href={`/${locale}`}>Home</Link>
        <span className={styles.breadSep}>›</span>
        <span className={styles.breadCurrent}>Content Marketing</span>
      </nav>

      <section className={styles.hero}>
        <RevealOnScroll>
          <div className={styles.heroTag}>
            <span className={styles.tagDot} />
            Content Authority
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={60}>
          <h1 className={styles.heroTitle}>
            Content Marketing That <span className={styles.gradText}>Builds Authority</span> &amp; Drives Growth
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={110}>
          <p className={styles.heroSub}>
            Compelling content is the foundation of digital marketing. We create SEO-optimized, conversion-focused content that establishes your brand as an industry authority and drives measurable business results.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={160}>
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statVal}>4</span>
              <span className={styles.statKey}>Content Services</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>10x</span>
              <span className={styles.statKey}>Organic Traffic</span>
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
            <h2>Why Content Marketing?</h2>
            <p>
              Quality content is the currency of digital marketing. It builds trust, improves SEO, and nurtures leads through the sales funnel. Our expert content team creates material that resonates with your audience and drives real business outcomes.
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
        {contentLinks.map((item, i) => (
          <RevealOnScroll key={item.slug} delay={i * 70}>
            <Link href={`/${locale}/content-marketing/${item.slug}`} className={styles.coreCard}>
              <span className={styles.coreNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.coreTitle}>{item.label}</h3>
            </Link>
          </RevealOnScroll>
        ))}
      </section>

      <section className={styles.introSection}>
        <RevealOnScroll>
          <div className={styles.introBlock}>
            <h2>Content That Converts</h2>
            <p>
              Great content isn&apos;t just well-written — it&apos;s strategic. Every piece we create is designed with specific goals in mind, whether it&apos;s ranking for competitive keywords, nurturing leads, or driving conversions.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      <section className={styles.industryGrid}>
        {contentServices.map((service, i) => (
          <RevealOnScroll key={service.slug} delay={i * 70}>
            <Link href={`/${locale}/content-marketing/${service.slug}`} className={styles.industryCard}>
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
            <p className={styles.ctaEye}>Create Compelling Content</p>
            <h2>Ready to tell your story?</h2>
            <p>
              Our content experts are ready to create compelling content that establishes your brand as an authority and drives real results.
            </p>
            <Link href={`/${locale}/contact`} className={`btn-primary ${styles.ctaBtn}`}>
              Start Creating ⚡
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}