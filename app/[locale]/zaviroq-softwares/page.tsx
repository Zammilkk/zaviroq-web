import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';
import { Bot, LineChart, Building, UtensilsCrossed, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default async function ZaviroqSoftwares({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className={styles.pageContainer}>
      
      {/* 🚀 HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroBgGlow}></div>
        <div className={styles.container}>
          <RevealOnScroll>
            <div className={styles.heroContent}>
              <div className={styles.eyebrow}>
                <span className={styles.pulseDot}></span>
                Next-Gen Infrastructure
              </div>
              <h1 className={styles.heroTitle}>
                Zaviroq <span className={styles.gradientText}>Softwares</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Empower your business with enterprise-grade automation, intelligent ERPs, and seamless management systems designed to scale globally.
              </p>
              <div className={styles.heroActions}>
                <Link href="/contact" className={styles.btnPrimary}>
                  Request a Demo <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 💻 SOFTWARE SUITE BENTO GRID */}
      <section className={styles.suiteSection}>
        <div className={styles.container}>
          
          <div className={styles.sectionHeader}>
            <h2>Our Proprietary <span className={styles.gradientText}>Ecosystem</span></h2>
            <p>Future-proof solutions built for maximum operational efficiency.</p>
          </div>

          <div className={styles.bentoGrid}>

            {/* 1. AI Automation Blog */}
            <RevealOnScroll delay={100} className={styles.bentoItemLarge}>
              <div className={styles.card}>
                <div className={styles.cardGlow}></div>
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}><Bot size={24} /></div>
                  <h3>Zaviroq AI Automation Blog Setup</h3>
                </div>
                <p className={styles.cardDesc}>
                  Deploy a self-running, AI-powered content engine that autonomously researches, writes, and publishes highly optimized SEO blogs to drive organic traffic while you sleep.
                </p>
                <ul className={styles.featureList}>
                  <li><CheckCircle2 size={16}/> Auto-Content Generation</li>
                  <li><CheckCircle2 size={16}/> SEO & Keyword Optimization</li>
                  <li><CheckCircle2 size={16}/> Auto-Publishing Workflow</li>
                </ul>
              </div>
            </RevealOnScroll>

            {/* 2. Enterprise ERP */}
            <RevealOnScroll delay={200} className={styles.bentoItemMedium}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}><LineChart size={24} /></div>
                  <h3>Enterprise ERP System</h3>
                </div>
                <p className={styles.cardDesc}>
                  Centralize your operations, financials, and supply chain in one robust dashboard with real-time analytics and scalable architecture.
                </p>
                <div className={styles.tags}>
                  <span>Finance</span><span>HR</span><span>Inventory</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* 3. Hotel Booking ERP */}
            <RevealOnScroll delay={300} className={styles.bentoItemMedium}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}><Building size={24} /></div>
                  <h3>Hotel Booking ERP</h3>
                </div>
                <p className={styles.cardDesc}>
                  Complete property management system bridging guest reservations, channel management, housekeeping, and dynamic pricing.
                </p>
                <div className={styles.tags}>
                  <span>Booking Engine</span><span>Channel Manager</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* 4. Menu ERP System */}
            <RevealOnScroll delay={400} className={styles.bentoItemWide}>
              <div className={styles.card}>
                <div className={styles.cardContentWrapper}>
                  <div className={styles.cardText}>
                    <div className={styles.iconBox}><UtensilsCrossed size={24} /></div>
                    <h3>Menu ERP System</h3>
                    <p className={styles.cardDesc}>
                      Modern restaurant management featuring digital QR menus, kitchen display routing, smart inventory tracking, and integrated POS.
                    </p>
                    <ul className={styles.featureListRow}>
                      <li><Zap size={16}/> Digital QR Menus</li>
                      <li><Zap size={16}/> Smart Inventory</li>
                      <li><Zap size={16}/> Table Management</li>
                    </ul>
                  </div>
                  <div className={styles.cardVisual}>
                    <div className={styles.mockupUi}>
                      <div className={styles.mockupHeader}><span></span><span></span><span></span></div>
                      <div className={styles.mockupBody}>
                        <div className={styles.mockupLine}></div>
                        <div className={styles.mockupLineShort}></div>
                        <div className={styles.mockupGrid}><div></div><div></div><div></div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <RevealOnScroll>
          <div className={styles.ctaBox}>
            <h2>Ready to Upgrade Your Tech Stack?</h2>
            <p>Join visionary businesses leveraging Zaviroq Softwares for explosive growth.</p>
            <Link href="/contact" className={styles.btnPrimary}>
              Get Started Now <ArrowRight size={18} />
            </Link>
          </div>
        </RevealOnScroll>
      </section>

    </div>
  );
}
