import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'All Services | ZAVIROQ — Digital Excellence',
  description: 'Premium digital services across Web Development, SEO, Marketing, and Design. Expert solutions for GCC and India markets.',
};

const categoryColors: Record<string, string> = {
  'seo': '#9d96ff',
  'web-development': '#3B8BD4',
  'branding-design': '#ffd93d',
  'performance-marketing': '#ff6b6b',
  'ecommerce-systems': '#b88bff',
};

const categoriesMeta = [
  { 
    key: 'seo', 
    label: 'SEO', 
    icon: '🔍', 
    badge: 'Organic Ranking', 
    desc: 'Technical, On-Page, Off-Page, Local & Global SEO',
    services: [
      { slug: 'technical-seo', title: 'Technical SEO' },
      { slug: 'on-page-seo', title: 'On-Page SEO' },
      { slug: 'off-page-seo', title: 'Off-Page SEO' },
      { slug: 'seo-audit', title: 'SEO Audit' },
      { slug: 'keyword-research', title: 'Keyword Research' },
      { slug: 'ai-seo', title: 'AI SEO' },
      { slug: 'seo-strategy', title: 'SEO Strategy' },
      { slug: 'agency-seo', title: 'Agency SEO' },
    ],
    locations: [
      { path: '/services/seo/dubai', title: 'SEO Dubai' },
      { path: '/services/seo/riyadh', title: 'SEO Riyadh' },
      { path: '/services/seo/mangalore', title: 'SEO Mangalore' },
      { path: '/services/agency-seo/dubai', title: 'Agency SEO Dubai' },
      { path: '/services/agency-seo/riyadh', title: 'Agency SEO Riyadh' },
      { path: '/services/agency-seo/mangalore', title: 'Agency SEO Mangalore' },
    ]
  },
  { 
    key: 'web-development', 
    label: 'Web Development', 
    icon: '💻', 
    badge: 'Core Build', 
    desc: 'Custom, Business, Next.js & React Development',
    services: [
      { slug: 'custom-website', title: 'Custom Website' },
      { slug: 'business-website', title: 'Business Website' },
      { slug: 'landing-page', title: 'Landing Page' },
      { slug: 'wordpress-development', title: 'WordPress Development' },
      { slug: 'react-development', title: 'React Development' },
      { slug: 'nextjs-development', title: 'Next.js Development' },
    ],
    locations: [
      { path: '/services/web-development/dubai', title: 'Web Development Dubai' },
      { path: '/services/web-development/riyadh', title: 'Web Development Riyadh' },
      { path: '/services/web-development/mangalore', title: 'Web Development Mangalore' },
    ]
  },
  { 
    key: 'branding-design', 
    label: 'Branding & Design', 
    icon: '🎨', 
    badge: 'Creative Pitch', 
    desc: 'Logo, Identity, Profiles & Social Media Design',
    services: [
      { slug: 'logo-design', title: 'Logo Design' },
      { slug: 'brand-identity', title: 'Brand Identity' },
      { slug: 'company-profile', title: 'Company Profile' },
      { slug: 'social-media-design', title: 'Social Media Design' },
    ],
    locations: [
      { path: '/services/branding-design/logo-design/dubai', title: 'Logo Design Dubai' },
      { path: '/services/branding-design/logo-design/riyadh', title: 'Logo Design Riyadh' },
      { path: '/services/branding-design/logo-design/mangalore', title: 'Logo Design Mangalore' },
    ]
  },
  { 
    key: 'performance-marketing', 
    label: 'Performance Marketing', 
    icon: '📈', 
    badge: 'Aggressive Growth', 
    desc: 'Google, Meta, LinkedIn, TikTok & PPC',
    services: [
      { slug: 'google-ads', title: 'Google Ads' },
      { slug: 'meta-ads', title: 'Meta Ads' },
      { slug: 'linkedin-ads', title: 'LinkedIn Ads' },
      { slug: 'tiktok-ads', title: 'TikTok Ads' },
      { slug: 'youtube-ads', title: 'YouTube Ads' },
      { slug: 'ppc-management', title: 'PPC Management' },
    ],
    locations: [
      { path: '/services/performance-marketing/google-ads/dubai', title: 'Google Ads Dubai' },
      { path: '/services/performance-marketing/google-ads/riyadh', title: 'Google Ads Riyadh' },
      { path: '/services/performance-marketing/google-ads/mangalore', title: 'Google Ads Mangalore' },
    ]
  },
  { 
    key: 'ecommerce-systems', 
    label: 'Ecommerce & Systems', 
    icon: '🛒', 
    badge: 'Store Engines', 
    desc: 'Ecommerce, Custom Dashboards & SaaS Platforms',
    services: [
      { slug: 'ecommerce-development', title: 'Ecommerce Development' },
      { slug: 'custom-ecommerce', title: 'Custom Ecommerce' },
      { slug: 'admin-dashboard', title: 'Admin Dashboard' },
      { slug: 'web-application', title: 'Web Application' },
      { slug: 'saas-platform', title: 'SaaS Platform' },
    ],
    locations: []
  }
];

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
              <span className={styles.heroStatNum}>{categoriesMeta.length}</span>
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
                    <h4 style={{ color: '#aaa', fontSize: '0.85rem', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Core Offerings</h4>
                    {cat.services.map((ep, j) => {
                      const linkPath = `/${locale}/services/${cat.key}/${ep.slug}`;
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
                    
                    {cat.locations.length > 0 && (
                      <>
                        <h4 style={{ color: '#aaa', fontSize: '0.85rem', margin: '20px 0 10px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>Local Markets</h4>
                        {cat.locations.map((loc, j) => (
                          <Link 
                            key={`loc-${j}`} 
                            href={`/${locale}${loc.path}`} 
                            className={styles.serviceLink}
                          >
                            <span className={styles.serviceLinkIcon}>📍</span>
                            <span className={styles.serviceLinkText}>{loc.title}</span>
                          </Link>
                        ))}
                      </>
                    )}
                  </div>
                  
                  <div className={styles.cardFooter}>
                    <span className={styles.serviceCount}>{cat.services.length + cat.locations.length} Solutions</span>
                    <Link 
                      href={`/${locale}/services/${cat.key}`} 
                      className={styles.viewAllLink}
                    >
                      View Category →
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
            <h2 className={styles.ctaTitle}>Let's Build Something Amazing</h2>
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