import styles from './page.module.css';
import { notFound } from 'next/navigation';
import RevealOnScroll from '../../RevealOnScroll';
import { Metadata } from 'next';
import servicesConfigs from '@/data/servicesConfigs.json';
import { routing } from '@/i18n/routing';

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
  const configs = servicesConfigs as any[];
  
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
  const configs = servicesConfigs as any[];
  const service = configs.find((c) => c.slug === slug);

  if (!service) return { title: 'Service | ZAVIROQ' };

  return {
    title: service.metaTitle,
    description: service.metaDesc,
    keywords: service.keywords,
  };
}

export default async function ServiceDetailsPage({ params }: Props) {
  const { locale, slug } = await params;
  const configs = servicesConfigs as any[];
  const service = configs.find((c) => c.slug === slug);
  if (!service) notFound();

  const accentColor = resolveColor(service.color);

  // JSON-LD structured data
  const schemaMarkup = {
    '@context': 'https://schema.org/',
    '@type': 'Service',
    serviceType: service.title,
    provider: {
      '@type': 'LocalBusiness',
      name: 'ZAVIROQ',
      image: 'https://zaviroq.com/logo.png',
    },
    areaServed: [
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'India' },
    ],
    description: service.metaDesc,
  };

  return (
    <div className={styles.container}>
      {/* SEO JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      {/* ── Glow background ── */}
      <div
        className={styles.glowBg}
        style={{ background: `radial-gradient(ellipse, ${accentColor}22 0%, transparent 65%)` }}
      />
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

            <div className={styles.visualCard}>
              <div className={styles.visualIcon}>
                {service.slug === 'performance-marketing' ? '📈' :
                  service.slug === 'seo-mastery' ? '🔍' :
                    service.slug === 'web-development' ? '💻' :
                      service.slug === 'ui-ux' ? '🎨' :
                        service.slug === 'branding' ? '🎯' :
                          service.slug === 'website-maintenance' ? '🔄' :
                            service.slug === 'tech-security' ? '🔐' : '🌍'}
              </div>

              <div>
                <div className={styles.visualLabel}>Service Module</div>
                <div className={styles.visualTitle}>{service.title}</div>
              </div>

              <div className={styles.visualDivider} />

              <div className={styles.visualMeta}>
                <div className={styles.metaRow}>
                  <span className={styles.metaKey}>Focus Markets</span>
                  <span className={styles.metaVal}>GCC + India</span>
                </div>
                <div className={styles.metaRow}>
                  <span className={styles.metaKey}>Delivery Model</span>
                  <span className={styles.metaVal}>Retainer / Project</span>
                </div>
                <div className={styles.metaRow}>
                  <span className={styles.metaKey}>Deliverables</span>
                  <span className={styles.metaVal} style={{ color: accentColor }}>
                    {service.deliverables.length} Modules
                  </span>
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
