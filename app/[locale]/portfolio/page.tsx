import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';
import PortfolioGrid from './PortfolioGrid';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Layers, ArrowRight, Play, Users, BarChart3, 
  Trophy, Sparkles, CheckCircle2, ArrowUpRight,
  ShieldCheck, Gem
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Portfolio | Crafting Digital Experiences That Drive Real Results | Zaviroq',
  description: 'Explore our portfolio of modern websites, creative designs, and digital solutions built to help businesses grow, engage, and stand out across India and the GCC.',
  alternates: {
    canonical: 'https://www.zaviroq.com/portfolio',
  },
  openGraph: {
    title: 'Our Portfolio | Zaviroq Deployments',
    description: 'Explore our portfolio of modern websites, creative designs, and digital solutions built to help businesses grow, engage, and stand out.',
    url: 'https://www.zaviroq.com/portfolio',
    siteName: 'Zaviroq',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function PortfolioPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;

  return (
    <div className={styles.pageContainer}>
      
      {/* 🧭 FLUSH-LEFT BREADCRUMB NAVIGATION */}
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <Link href="/">Home</Link>
        <span>/</span>
        <span className={styles.breadcrumbCurrent}>Portfolio</span>
      </nav>

      {/* 🚀 EXACT HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroWrapper}>
          
          {/* Left Hero Column */}
          <div className={styles.heroLeftCol}>
            <RevealOnScroll align="flex-start">
              
              {/* Badge: Our Portfolio */}
              <div className={styles.portfolioBadge}>
                <Layers size={14} className={styles.badgeIcon} />
                <span>Our Portfolio</span>
              </div>

              {/* Main Headline */}
              <h1 className={styles.heroTitle}>
                Crafting Digital<br />
                Experiences That<br />
                <span className={styles.highlightText}>Drive Real Results</span>
              </h1>

              {/* Subtitle */}
              <p className={styles.heroSubtitle}>
                Explore our portfolio of modern websites, creative designs, and digital solutions built to help businesses grow, engage, and stand out.
              </p>

              {/* Action Buttons */}
              <div className={styles.heroButtonRow}>
                <a href="#projects-grid" className={styles.btnPrimaryView}>
                  <span>View Our Projects</span>
                  <ArrowRight size={17} />
                </a>

                <Link href="/services" className={styles.btnSecondaryProcess}>
                  <div className={styles.playIconCircle}>
                    <Play size={12} fill="currentColor" />
                  </div>
                  <span>Watch Our Process</span>
                </Link>
              </div>

            </RevealOnScroll>
          </div>

          {/* Right Hero Column: 3D Multi-Device Showcase Stage */}
          <div className={styles.heroRightCol}>
            <RevealOnScroll delay={100} align="stretch">
              <div className={styles.heroMockupStage}>
                
                {/* 3D Devices Image */}
                <div className={styles.deviceImageContainer}>
                  <Image 
                    src="/assets/portfolio-exact/hero-devices-hd.png"
                    alt="Zaviroq Portfolio Multi-Device Showcase"
                    width={850}
                    height={480}
                    priority
                    className={styles.devicesImage}
                  />
                </div>

                {/* Floating Glass Feature Badge */}
                <div className={styles.floatingFeatureCard}>
                  <div className={styles.floatingCardIcon}>
                    <Gem size={18} />
                  </div>
                  <div className={styles.floatingCardText}>
                    <strong>Modern Design</strong>
                    <span>Fast Performance</span>
                    <span>Real Business Impact</span>
                  </div>
                </div>

              </div>
            </RevealOnScroll>
          </div>

        </div>
      </section>

      {/* 🧊 3x3 PORTFOLIO WORK GRID & FILTER TABS */}
      <section className={styles.gridSection}>
        <div className={styles.gridContainer}>
          <PortfolioGrid locale={locale} />
        </div>
      </section>

      {/* 📊 EXACT 4-COLUMN STATS / IMPACT BAR */}
      <section className={styles.statsSection}>
        <div className={styles.statsContainer}>
          <RevealOnScroll align="stretch">
            <div className={styles.statsCardGrid}>
              
              {/* Stat 1 */}
              <div className={styles.statColumn}>
                <div className={styles.statIconBox}>
                  <Layers size={22} />
                </div>
                <div className={styles.statValue}>50+</div>
                <div className={styles.statTitle}>Successful Projects</div>
                <div className={styles.statSub}>
                  From startups to established brands, we&apos;ve done it all.
                </div>
              </div>

              {/* Stat 2 */}
              <div className={styles.statColumn}>
                <div className={styles.statIconBox}>
                  <Users size={22} />
                </div>
                <div className={styles.statValue}>12+</div>
                <div className={styles.statTitle}>Industries Served</div>
                <div className={styles.statSub}>
                  Diverse industries. One digital partner.
                </div>
              </div>

              {/* Stat 3 */}
              <div className={styles.statColumn}>
                <div className={styles.statIconBox}>
                  <BarChart3 size={22} />
                </div>
                <div className={styles.statValue}>4.8x</div>
                <div className={styles.statTitle}>Avg. Client ROAS</div>
                <div className={styles.statSub}>
                  Turning clicks into customers.
                </div>
              </div>

              {/* Stat 4 */}
              <div className={styles.statColumn}>
                <div className={styles.statIconBox}>
                  <Trophy size={22} />
                </div>
                <div className={styles.statValue}>98%</div>
                <div className={styles.statTitle}>Client Satisfaction</div>
                <div className={styles.statSub}>
                  Long-term partnerships that matter.
                </div>
              </div>

            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 📞 EXACT BOTTOM CTA BANNER ("Ready to Start Your Next Project?") */}
      <section className={styles.ctaBannerSection}>
        <div className={styles.ctaBannerContainer}>
          <RevealOnScroll yOffset={25} align="stretch">
            <div className={styles.ctaBannerCard}>
              
              {/* Left Column: Copy & Actions */}
              <div className={styles.ctaBannerLeft}>
                
                <div className={styles.ctaPillBadge}>
                  <Sparkles size={13} className={styles.ctaSparkleIcon} />
                  <span>Let&apos;s Build Something Great</span>
                </div>

                <h2 className={styles.ctaMainTitle}>
                  Ready to Start Your<br />
                  <span className={styles.ctaTitleGradient}>Next Project?</span>
                </h2>

                <p className={styles.ctaMainSub}>
                  Let&apos;s turn your ideas into digital success. Get in touch and let&apos;s create something amazing together.
                </p>

                <div className={styles.ctaBtnRow}>
                  <Link href="/contact" className={styles.ctaBtnConsult}>
                    <span>Get a Free Consultation</span>
                    <ArrowRight size={16} />
                  </Link>

                  <Link href="/services" className={styles.ctaBtnServices}>
                    <div className={styles.ctaPlayIconWrap}>
                      <Play size={11} fill="currentColor" />
                    </div>
                    <span>View Our Services</span>
                  </Link>
                </div>

              </div>

              {/* Right Column: 3D Rising Financial Bars Visual */}
              <div className={styles.ctaBannerRight}>
                <Image 
                  src="/assets/portfolio-exact/cta-chart-hd.png"
                  alt="Zaviroq Financial Growth 3D Bars"
                  width={340}
                  height={190}
                  className={styles.ctaChartImg}
                />
              </div>

            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
}
