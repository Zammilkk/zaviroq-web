import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicesGrid from '../../components/ServicesGrid';
export const metadata: Metadata = {
  title: 'Digital Marketing & Web Development Services | Zaviroq',
  description: 'Comprehensive digital agency services: SEO, web development, Google Ads, performance marketing, and branding in Mangalore, India, the UAE, and Saudi Arabia.',
  alternates: {
    canonical: 'https://www.zaviroq.com/services',
  },
  openGraph: {
    title: 'Digital Marketing & Web Development Services | Zaviroq',
    description: 'Comprehensive digital agency services: SEO, web development, Google Ads, performance marketing, and branding in Mangalore, India, the UAE, and Saudi Arabia.',
    url: 'https://www.zaviroq.com/services',
    siteName: 'Zaviroq',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: 'https://www.zaviroq.com/og-image.png' }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { servicesMasterData } from '@/data/servicesMasterData';

const categoryColors: Record<string, string> = {
  'digital-marketing': '#8b5cf6',
  'seo': '#9d96ff',
  'paid-advertising': '#ff6b6b',
  'social-media-marketing': '#ec4899',
  'website-design': '#6366f1',
  'website-development': '#3B8BD4',
  'ecommerce-development': '#b88bff',
  'branding': '#ffd93d',
  'video-production': '#f97316',
  'email-marketing': '#06b6d4',
  'ai-automation': '#10b981',
  'business-software': '#a855f7',
};

const categoriesMeta = servicesMasterData.map(cat => ({
  key: cat.slug,
  label: cat.title,
  icon: cat.iconName,
  badge: cat.eyebrow.split(' ')[0] || 'Premium',
  desc: cat.tagline,
  services: cat.subservices.map(sub => ({
    slug: `${cat.slug}/${sub.slug}`,
    title: sub.title
  })),
  locations: [
    { path: `/services/${cat.slug}`, title: `${cat.shortTitle} Mangalore` },
  ]
}));

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  const totalServices = categoriesMeta.reduce((acc, cat) => acc + cat.services.length + cat.locations.length, 0);

  return (
    <div className={styles.page}>
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />
      <div className={styles.bgGlow3} />
      <div className={styles.gridPattern} />

      {/* Layer 2: Abstract fluid wave / contour background layer - fills from the very top of the page */}
      <div className={styles.heroBgLayer} aria-hidden="true" />

      {/* Header atmospheric glow filling behind topbar & navbar */}
      <div className={styles.heroHeaderAtmosphere} aria-hidden="true" />

      {/* Layer 1: Ambient mesh glows */}
      <div className={styles.heroAmbientGlow1} aria-hidden="true" />
      <div className={styles.heroAmbientGlow2} aria-hidden="true" />

      {/* Layer 3: Tech micro-dot precision grid */}
      <div className={styles.heroGridOverlay} aria-hidden="true" />

      <nav className={styles.breadcrumb}>
        <Link href="/">Home</Link>
        <span>/</span>
        <span>Services</span>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroAmbientGlow3} aria-hidden="true" />

        {/* Layer 4: Geometric perspective aura rings behind 3D artwork */}
        <div className={styles.heroAuraRings} aria-hidden="true" />

        <div className={styles.heroContainer}>
          <div className={styles.heroLeft}>
            <RevealOnScroll align="flex-start">
              <div className={styles.heroEyebrow}>
                <span className={styles.eyebrowLine}></span> OUR SERVICES
              </div>
              
              <h1 className={styles.heroTitle}>
                Digital Solutions<br />
                That Drive <span className={styles.heroHighlight}>Real Growth.</span>
              </h1>
              
              <p className={styles.heroSub}>
                From websites to marketing, we deliver end-to-end digital solutions to help businesses build a stronger online presence, attract the right audience, and achieve measurable growth.
              </p>
              
              <Link href="/services#all" className={styles.btnExplore}>
                Explore Our Services →
              </Link>
              
              <div className={styles.heroStatsRow}>
                <div className={styles.statItem}>
                  <div className={styles.statNum}>360+</div>
                  <div className={styles.statLabel}>Projects Delivered</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNum}>50+</div>
                  <div className={styles.statLabel}>Happy Clients</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNum}>3x</div>
                  <div className={styles.statLabel}>Average Growth</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNum}>100%</div>
                  <div className={styles.statLabel}>Results Focused</div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.imageWrapper}>
              {/* Backlight halo glow specifically behind the laptop */}
              <div className={styles.laptopBackdropAura} aria-hidden="true" />
              <div className={styles.laptopRadialSpot} aria-hidden="true" />

              {/* 3D Mockup Container with smooth levitation */}
              <div className={styles.heroImageContainer}>
                <img 
                  src="/assets/images/services-bg.png" 
                  alt="Zaviroq Digital Solutions & Marketing Ecosystem" 
                  className={styles.heroImage} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid categories={categoriesMeta} locale={locale} />


    </div>
  );
}