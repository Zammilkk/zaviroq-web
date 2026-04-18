import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';
import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: 'All Services Directory | ZAVIROQ — Digital Dominance Engine',
  description:
    'Full directory of our 30+ specialized micro-services across Web Development, SEO, AI Automation, Marketing, and Security.',
};

const categoriesMeta = [
  { key: 'seo-services', label: 'SEO & Search Dominance', icon: '🔍', badge: 'Organic Ranking' },
  { key: 'web-development', label: 'Engineering & Development', icon: '💻', badge: 'Architecture' },
  { key: 'performance-marketing', label: 'Performance Marketing', icon: '📈', badge: 'Aggressive Growth' },
  { key: 'branding-design', label: 'Corporate Branding', icon: '🎨', badge: 'Creative Pitch' },
  { key: 'ai-automation', label: 'AI & Automations', icon: '🤖', badge: 'Next-Gen LLM' },
  { key: 'website-security', label: 'Security & Shields', icon: '🔐', badge: 'Enterprise Safe' }
];

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Load the expanded micro-services dynamically
  const dbPath = path.join(process.cwd(), 'data', 'expandedServices.json');
  let expandedConfigs: any = {};
  if (fs.existsSync(dbPath)) {
    expandedConfigs = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  }

  return (
    <div className={styles.page}>
      <h1 className="visually-hidden">ZAVIROQ Digital Services Directory — 30+ Micro-services</h1>

      {/* Atmospheric grid lines */}
      <div className={styles.gridLines} aria-hidden="true" />

      {/* ══ BREADCRUMB ══ */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <a href={`/${locale}`}>Home</a>
        <span className={styles.breadSep}>›</span>
        <span className={styles.breadCurrent}>Services Directory</span>
      </nav>

      {/* ══ COMPACT HERO ══ */}
      <section className={styles.hero}>
        <RevealOnScroll>
          <div className={styles.heroTag}>
            <span className={styles.tagDot} />
            Service Ecosystem Matrix
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={60}>
          <h1 className={styles.heroTitle}>
            Full Stack <span className={styles.gradText}>Service Directory</span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={110}>
          <p className={styles.heroSub}>
            Extensive routing across 30+ highly specialized micro-services. We orchestrate massive deployments seamlessly under 6 core pillars.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={160}>
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statVal}>39</span>
              <span className={styles.statKey}>Specialized Endpoints</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>6</span>
              <span className={styles.statKey}>Core Pillars</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>GCC</span>
              <span className={styles.statKey}>Market Focus</span>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* ══ DIVIDER ══ */}
      <div className={styles.dividerRow}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerLabel}>All Micro-Service Endpoints</span>
        <div className={styles.dividerLine} />
      </div>

      {/* ══ SERVICES GRID — Expanded ══ */}
      <section className={styles.gridSection}>
        <div className={styles.servicesGrid}>
          {categoriesMeta.map((cat, i) => {
            const endpoints = expandedConfigs[cat.key] || [];
            
            return (
              <div key={cat.key}>
                <RevealOnScroll delay={(i % 3) * 70}>
                  <div className={styles.card}>
                    {/* Index number */}
                    <span className={styles.cardNum}>{String(i + 1).padStart(2, '0')}</span>

                    {/* Icon */}
                    <div className={styles.cardIcon}>{cat.icon}</div>

                    {/* Badge */}
                    <span className={styles.cardBadge} style={{ marginBottom: '10px', display: 'inline-block' }}>{cat.badge}</span>

                    {/* Title */}
                    <h2 className={styles.cardTitle}>{cat.label}</h2>

                    {/* Rule */}
                    <div className={styles.cardRule} />

                    {/* Feature Micro-Links */}
                    <ul className={styles.featureList} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {endpoints.map((ep: any, j: number) => (
                        <li key={j}>
                           <a 
                             href={`/${locale}/${cat.key}/${ep.slug}`} 
                             className={styles.featureLink}
                           >
                             <span className={styles.featureLinkArrow}>›</span> {ep.title}
                           </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealOnScroll>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══ CTA ══ */}
      <div className={styles.ctaWrap}>
        <RevealOnScroll>
          <div className={styles.cta}>
            <p className={styles.ctaEye}>Deploy Architecture</p>
            <h2>Ready to initialize your stack?</h2>
            <p>
              Let our engineers map the exact combination of micro-services your business needs across the GCC and India.
            </p>
            <a
              href={`/${locale}/contact`}
              className={`btn-primary ${styles.ctaBtn}`}
            >
              Contact Command Center ⚡
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
