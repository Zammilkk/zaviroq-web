import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';
import { Metadata } from 'next';
import Link from 'next/link';
import expandedServices from '@/data/expandedServices.json';

export const metadata: Metadata = {
  title: 'All Services | ZAVIROQ — Digital Excellence',
  description: 'Premium digital services across Web Development, SEO, Marketing, and Design. Expert solutions for GCC and India markets.',
};

const categoryColors: Record<string, string> = {
  'core-seo': '#9d96ff',
  'seo-services': '#60a8e8',
  'core-web': '#3B8BD4',
  'web-platform': '#7F77DD',
  'web-ecommerce': '#b88bff',
  'web-systems': '#60a8e8',
  'web-migration': '#9d96ff',
  'web-security': '#7F77DD',
  'web-advanced': '#3B8BD4',
  'performance-marketing': '#ff6b6b',
  'branding-design': '#ffd93d',
  'social-media-marketing': '#6bcb77',
  'content-marketing': '#4d96ff',
};

const categoriesMeta = [
  { key: 'core-seo', label: 'Core SEO Services', icon: '⚙️', badge: 'Foundation', desc: 'Technical, On-Page, Off-Page, Audit & More' },
  { key: 'seo-services', label: 'Industry SEO Programs', icon: '🔍', badge: 'Organic Ranking', desc: 'Real Estate, Healthcare, SaaS, Ecommerce' },
  { key: 'core-web', label: 'Web Development', icon: '💻', badge: 'Core Build', desc: 'Custom, Business & Landing Pages' },
  { key: 'web-platform', label: 'Platform Engineering', icon: '🛠️', badge: 'Framework Stack', desc: 'WordPress, PHP, React & Next.js' },
  { key: 'web-ecommerce', label: 'Ecommerce Solutions', icon: '🛒', badge: 'Store Engines', desc: 'Online Stores & Custom Solutions' },
  { key: 'web-systems', label: 'Enterprise Systems', icon: '⚡', badge: 'Business Logic', desc: 'Dashboards, Web Apps & SaaS' },
  { key: 'web-migration', label: 'Migration & Redesign', icon: '🔄', badge: 'Transform', desc: 'Migration, Cloning & Redesign' },
  { key: 'web-security', label: 'Performance & Security', icon: '🛡️', badge: 'Protection', desc: 'Secure Dev & Performance' },
  { key: 'web-advanced', label: 'Advanced Engineering', icon: '🚀', badge: 'Innovation', desc: 'PWA, Headless, APIs & More' },
  { key: 'performance-marketing', label: 'Performance Marketing', icon: '📈', badge: 'Aggressive Growth', desc: 'Google, Meta, LinkedIn, TikTok & More' },
  { key: 'branding-design', label: 'Corporate Branding', icon: '🎨', badge: 'Creative Pitch', desc: 'Logo, Identity, Profiles & Print' },
  { key: 'social-media-marketing', label: 'Social Media Marketing', icon: '📱', badge: 'Engagement', desc: 'Management, Content & Strategy' },
  { key: 'content-marketing', label: 'Content Marketing', icon: '✍️', badge: 'Storytelling', desc: 'Blog, SEO, Copywriting & Web Content' },
];

interface ServiceEndpoint {
  slug: string;
  title: string;
  [key: string]: string | string[];
}

interface ServiceConfig {
  [key: string]: ServiceEndpoint[];
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const expandedConfigs = expandedServices as unknown as ServiceConfig;
  const totalServices = Object.values(expandedConfigs).reduce((acc, arr) => acc + (arr ? arr.length : 0), 0);

  return (
    <div className={styles.page}>
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />
      <div className={styles.bgGlow3} />
      <div className={styles.gridPattern} />

      <nav className={styles.breadcrumb}>
        <Link href={`/${locale}`}>Home</Link>
        <span>/</span>
        <span>Services</span>
      </nav>

      <section className={styles.hero}>
        <RevealOnScroll>
          <div className={styles.heroTag}>
            <span className={styles.tagPulse} />
            Comprehensive Service Suite
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={80}>
          <h1 className={styles.heroTitle}>
            Digital Services That <span className={styles.heroHighlight}>Drive Results</span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={140}>
          <p className={styles.heroSub}>
            From SEO dominance to stunning web experiences, we deliver end-to-end digital solutions 
            tailored for the GCC and India markets.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>{totalServices}+</span>
              <span className={styles.heroStatLabel}>Services</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>13</span>
              <span className={styles.heroStatLabel}>Categories</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>GCC</span>
              <span className={styles.heroStatLabel}>Markets</span>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.servicesContainer}>
          {categoriesMeta.map((cat, i) => {
            const endpoints = expandedConfigs[cat.key] || [];
            const accentColor = categoryColors[cat.key] || '#9d96ff';
            const isEven = i % 2 === 0;
            
            return (
              <RevealOnScroll key={cat.key} delay={i * 50}>
                <div 
                  className={`${styles.serviceCard} ${isEven ? styles.cardEven : styles.cardOdd}`}
                  style={{ '--accent': accentColor } as React.CSSProperties}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIconWrap}>
                      <span className={styles.cardIcon}>{cat.icon}</span>
                    </div>
                    <div className={styles.cardMeta}>
                      <span className={styles.cardBadge}>{cat.badge}</span>
                      <h3 className={styles.cardTitle}>{cat.label}</h3>
                      <p className={styles.cardDesc}>{cat.desc}</p>
                    </div>
                  </div>
                  
                  <div className={styles.cardServices}>
                    {endpoints.map((ep: ServiceEndpoint, j: number) => {
                      const linkPath = cat.key === 'core-seo'
                        ? `/${locale}/${ep.slug}` 
                        : `/${locale}/${cat.key}/${ep.slug}`;
                      return (
                        <Link 
                          key={j} 
                          href={linkPath} 
                          className={styles.serviceLink}
                        >
                          <span className={styles.serviceLinkIcon}>→</span>
                          <span className={styles.serviceLinkText}>{ep.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                  
                  <div className={styles.cardFooter}>
                    <span className={styles.serviceCount}>{endpoints.length} Services</span>
                    <Link 
                      href={cat.key === 'core-seo' ? `/${locale}/seo-services` : `/${locale}/${cat.key}`} 
                      className={styles.viewAllLink}
                    >
                      View All →
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow} />
        <RevealOnScroll>
          <div className={styles.ctaContent}>
            <span className={styles.ctaTag}>Ready to Start?</span>
            <h2 className={styles.ctaTitle}>Let&apos;s Build Something Amazing</h2>
            <p className={styles.ctaText}>
              Our team of experts is ready to help you achieve digital dominance. 
              Get in touch for a free consultation.
            </p>
            <Link href={`/${locale}/contact`} className={styles.ctaButton}>
              Get Started
              <span className={styles.ctaButtonIcon}>→</span>
            </Link>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
}