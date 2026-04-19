import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';
import { Metadata } from 'next';
import Link from 'next/link';
import expandedServices from '@/data/expandedServices.json';

export const metadata: Metadata = {
  title: 'Corporate Branding & Design Services | ZAVIROQ',
  description:
    'Premium branding design services including logo design, brand identity, company profiles, and creative collateral. Build lasting brand authority across GCC and India.',
};

interface ServiceEndpoint {
  slug: string;
  title: string;
  color: string;
  heroDesc: string;
  [key: string]: string | string[];
}

const brandingLinks = [
  { slug: 'logo-design', label: 'Logo Design' },
  { slug: 'brand-identity-design', label: 'Brand Identity' },
  { slug: 'company-profile-design', label: 'Company Profile' },
  { slug: 'business-card-design', label: 'Business Cards' },
  { slug: 'brochure-design', label: 'Brochure Design' },
  { slug: 'tariff-card-design', label: 'Tariff Cards' },
  { slug: 'social-media-design', label: 'Social Media' },
  { slug: 'portfolio-design', label: 'Portfolio Design' },
  { slug: 'presentation-design', label: 'Presentations' },
  { slug: 'packaging-design', label: 'Packaging Design' },
  { slug: 'banner-poster-design', label: 'Banners & Posters' },
  { slug: 'invoice-design', label: 'Invoice Design' },
];

export default async function BrandingDesignPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const brandingServices = ((expandedServices as any)['branding-design'] || []) as ServiceEndpoint[];

  return (
    <div className={styles.page}>
      <h1 className="visually-hidden">ZAVIROQ Corporate Branding & Design Services</h1>

      <div className={styles.gridLines} aria-hidden="true" />

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href={`/${locale}`}>Home</Link>
        <span className={styles.breadSep}>›</span>
        <span className={styles.breadCurrent}>Branding Design</span>
      </nav>

      <section className={styles.hero}>
        <RevealOnScroll>
          <div className={styles.heroTag}>
            <span className={styles.tagDot} />
            Brand Engineering
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={60}>
          <h1 className={styles.heroTitle}>
            Corporate Branding That <span className={styles.gradText}>Commands Authority</span> &amp; Builds Trust
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={110}>
          <p className={styles.heroSub}>
            From logos to packaging, we craft complete brand identities that communicate your value instantly. Every visual touchpoint is engineered to build trust and drive business growth across GCC and India.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={160}>
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statVal}>12</span>
              <span className={styles.statKey}>Design Services</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>500+</span>
              <span className={styles.statKey}>Brands Created</span>
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
            <h2>Why Branding Matters</h2>
            <p>
              Your brand is the immediate impression prospects have of your business. Strong branding builds trust, differentiates you from competitors, and creates lasting emotional connections. We engineer complete visual identities that position you as the obvious choice.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      <div className={styles.dividerRow}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerLabel}>Core Design Services</span>
        <div className={styles.dividerLine} />
      </div>

      <section className={styles.coreGrid}>
        {brandingLinks.map((item, i) => (
          <RevealOnScroll key={item.slug} delay={i * 70}>
            <Link href={`/${locale}/branding-design/${item.slug}`} className={styles.coreCard}>
              <span className={styles.coreNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.coreTitle}>{item.label}</h3>
            </Link>
          </RevealOnScroll>
        ))}
      </section>

      <section className={styles.introSection}>
        <RevealOnScroll>
          <div className={styles.introBlock}>
            <h2>Complete Brand Ecosystems</h2>
            <p>
              Every design we create works together as part of a cohesive brand system. From your logo to your invoice, every touchpoint reinforces your value proposition and builds brand equity.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      <section className={styles.industryGrid}>
        {brandingServices.map((service, i) => (
          <RevealOnScroll key={service.slug} delay={i * 70}>
            <Link href={`/${locale}/branding-design/${service.slug}`} className={styles.industryCard}>
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
            <p className={styles.ctaEye}>Build Your Brand</p>
            <h2>Ready to create a powerful brand?</h2>
            <p>
              Our branding experts are ready to craft a visual identity that sets you apart from the competition and drives business growth.
            </p>
            <Link href={`/${locale}/contact`} className={`btn-primary ${styles.ctaBtn}`}>
              Start Branding ⚡
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}