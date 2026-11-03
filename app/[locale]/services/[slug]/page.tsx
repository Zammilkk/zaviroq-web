import styles from './page.module.css';
import { notFound } from 'next/navigation';
import RevealOnScroll from '../../RevealOnScroll';
import { Metadata } from 'next';
import servicesConfigs from '@/data/servicesConfigs.json';
import { routing } from '@/i18n/routing';
import type { ServiceConfig } from '@/types/services';

// ── Icon map for each deliverable phase ──
const phaseIcons = ['🎯', '⚡', '🔬', '📡', '🔒', '🚀'];

// ── Process steps per service type (fallback generic) ──
const processSteps = [
  { title: 'Discovery', desc: 'Audit your current setup and define clear success metrics.' },
  { title: 'Strategy', desc: 'Build a data-backed roadmap tailored to your market.' },
  { title: 'Execution', desc: 'Deploy with precision — on-time, on-spec, no shortcuts.' },
  { title: 'Optimize', desc: 'Iterate continuously for compounding performance gains.' },
];

// ── Color utility ──
function resolveColor(colorStr: string): string {
  if (colorStr === 'var(--primary-blue)') return '#3B8BD4';
  if (colorStr === 'var(--primary-purple)') return '#7F77DD';
  return colorStr || '#7F77DD';
}

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

// ── Generate static params ──
export async function generateStaticParams() {
  const configs = servicesConfigs as ServiceConfig[];
  
  return routing.locales.flatMap((locale) => 
    configs.map((c) => ({
      locale,
      slug: c.slug
    }))
  );
}

// ── Dynamic metadata ──
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const configs = servicesConfigs as ServiceConfig[];
  const service = configs.find((c) => c.slug === slug);

  if (!service) return { title: 'Service | Zaviroq' };

  return {
    title: {
      absolute: service.metaTitle.includes('ZAVIROQ') || service.metaTitle.includes('Zaviroq') ? service.metaTitle : `${service.metaTitle} | Zaviroq`,
    },
    description: service.metaDesc,
    alternates: {
      canonical: `https://www.zaviroq.com/services/${slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDesc,
      url: `https://www.zaviroq.com/services/${slug}`,
      siteName: 'Zaviroq',
      locale: 'en_IN',
      type: 'website',
      images: [{ url: 'https://www.zaviroq.com/og-image.png' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDesc,
      images: ['https://www.zaviroq.com/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ServiceDetailsPage({ params }: Props) {
  const { locale, slug } = await params;
  const configs = servicesConfigs as ServiceConfig[];
  const service = configs.find((c) => c.slug === slug);
  if (!service) notFound();

  const accentColor = resolveColor(service.color);

  // JSON-LD structured data with Service and BreadcrumbList
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        serviceType: service.title,
        name: service.title,
        provider: {
          '@type': 'Organization',
          '@id': 'https://www.zaviroq.com/#organization',
          name: 'Zaviroq',
          url: 'https://www.zaviroq.com',
        },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Mangalore' },
          { '@type': 'Country', name: 'India' },
          { '@type': 'Country', name: 'United Arab Emirates' },
          { '@type': 'Country', name: 'Saudi Arabia' },
        ],
        description: service.metaDesc,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.zaviroq.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: 'https://www.zaviroq.com/services',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: service.title,
          },
        ],
      },
    ],
  };

  return (
    <div className={styles.container}>
      {/* SEO JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      {/* ── Hero Background ── */}
      <div className={styles.glowBg} />
      
      <div className={styles.watermarkBg}>
        {service.title.toUpperCase()}
      </div>
      <div className={styles.gridOverlay} aria-hidden="true" />

      {/* ── Breadcrumb ── */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <a href={`/${locale}`}>Home</a>
        <span>›</span>
        <a href={`/${locale}/services`}>Services</a>
        <span>›</span>
        <span style={{ color: '#888' }}>{service.title}</span>
      </nav>

      {/* ══ HERO ══ */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <RevealOnScroll>
            <div
              className={styles.badge}
              style={{ color: accentColor, borderColor: `${accentColor}40` }}
            >
              <span className={styles.badgeDot} style={{ background: accentColor }} />
              System Initialized
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={80}>
            <h1 className={styles.title}>{service.title}</h1>
          </RevealOnScroll>

          <RevealOnScroll delay={140}>
            <p className={styles.subtitle}>{service.heroDesc}</p>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className={styles.heroCta}>
              <a href={`/${locale}/contact`} className={styles.heroBtn}>
                Get Started ↗
              </a>
              <a href={`/${locale}/services`} className={styles.heroLink}>
                ← All Services
              </a>
            </div>
          </RevealOnScroll>
        </div>

        {/* ── Visual Card ── */}
        <RevealOnScroll delay={100}>
          <div className={styles.heroVisual}>
            {/* Floating accent badges */}
            <div className={styles.floatBadge}>✅ ROI Tracked</div>
            <div className={styles.floatBadge}>🔥 Zero Downtime</div>

            <div className={styles.monitorWrapper}>
              <img src="/monitor-zaviroq.png" alt="Monitor" className={styles.monitorImage} />
              
              <div className={styles.monitorScreen}>
                <div className={styles.monitorContent}>
                  <div className={styles.monitorIcon}>
                    {service.slug === 'performance-marketing' ? '📈' :
                      service.slug.includes('seo') ? '🔍' :
                        service.slug.includes('web') ? '💻' :
                          service.slug === 'ui-ux' ? '🎨' :
                            service.slug === 'branding' ? '🎯' :
                              service.slug === 'website-maintenance' ? '🔄' :
                                service.slug === 'tech-security' ? '🔐' : '🌍'}
                  </div>
                  <h3 className={styles.monitorTitle}>{service.title}</h3>
                  <p className={styles.monitorSubtitle}>
                    {service.slug.includes('seo') 
                      ? 'Dominate Search Rankings & Drive Organic Traffic.'
                      : service.slug.includes('web') 
                      ? 'Scalable, High-Performance Digital Experiences.'
                      : 'Accelerate Your Digital Growth.'}
                  </p>
                  <div className={styles.monitorCta}>
                    Explore {service.title} ↗
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* ══ DELIVERABLES ══ */}
      <section className={styles.deliverablesSection}>
        <RevealOnScroll>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Tactical Scope</span>
            <h2 className={styles.sectionTitle}>What&apos;s Included in This Module</h2>
          </div>
        </RevealOnScroll>

        <div className={styles.deliverableGrid}>
          {service.deliverables.map((item: string, i: number) => (
            <RevealOnScroll key={i} delay={i * 100}>
              <div
                className={styles.delivCard}
                style={{ '--accent': accentColor } as React.CSSProperties}
              >
                <div className={styles.delivPhase}>Phase {String(i + 1).padStart(2, '0')}</div>
                <div
                  className={styles.delivIcon}
                  style={{ background: `${accentColor}12`, borderColor: `${accentColor}25` }}
                >
                  {phaseIcons[i % phaseIcons.length]}
                </div>
                <div className={styles.delivTitle}>{item}</div>
                <div className={styles.delivNum}>{String(i + 1).padStart(2, '0')}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ══ PROCESS STRIP ══ */}
      <section className={styles.processSection}>
        <RevealOnScroll>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>How We Work</span>
            <h2 className={styles.sectionTitle}>Our Execution Framework</h2>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className={styles.processStrip}>
            {processSteps.map((step, i) => (
              <div key={i} className={styles.processStep}>
                <div className={styles.processNum}>{String(i + 1).padStart(2, '0')}</div>
                <div className={styles.processStepTitle}>{step.title}</div>
                <div className={styles.processStepDesc}>{step.desc}</div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      {/* ══ CTA ══ */}
      <div className={styles.ctaSection}>
        <RevealOnScroll>
          <div className={styles.bottomCta}>
            <p className={styles.ctaEyebrow}>Let&apos;s Build Together</p>
            <h2>Ready to Deploy This Module?</h2>
            <p>
              Our engineers are standing by to connect this architecture directly to your business logic — tailored, fast, and built to scale.
            </p>
            <a href={`/${locale}/contact`} className={`btn-primary ${styles.ctaBtn}`}>
              Launch Integration ↗
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
