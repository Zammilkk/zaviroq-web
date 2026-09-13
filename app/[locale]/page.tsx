import styles from './page.module.css';
import RevealOnScroll from './RevealOnScroll';
import Link from 'next/link';
import Image from 'next/image';
import ExecutiveFAQ from '../components/ExecutiveFAQ';
import RecentIntel from '../components/RecentIntel';
import StartupOffer from '../components/StartupOffer';
import FaqSection from '../components/FaqSection';
import Typewriter from '../components/Typewriter';
import { Star, Globe, ShieldCheck, Layout, TrendingUp, Zap, Target, Rocket, Code, Search, BarChart, PenTool, Bot, FileText, ChevronDown } from 'lucide-react';
import Riyadh3DSkyline from '../components/Riyadh3DSkyline';
import InteractiveHero from '../components/InteractiveHero';
import type { Metadata } from 'next';
import Hero3DWrapper from '../components/Hero3DWrapper';
import ApproachSection from '../components/ApproachSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseSection from '../components/WhyChooseSection';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Digital Marketing Agency in Riyadh, Saudi Arabia | Zaviroq',
    description: 'Zaviroq is a leading digital marketing agency in Riyadh offering SEO, web development, Google Ads, branding, and AI-driven marketing solutions for businesses in Saudi Arabia.',
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const PARTNERS = [
    { name: "Google Ads", icon: "https://cdn.simpleicons.org/googleads/4285F4", color: "#4285F4" },
    { name: "Meta Ads", icon: "https://cdn.simpleicons.org/meta/0668E1", color: "#0668E1" },
    { name: "Google AdX", icon: "https://cdn.simpleicons.org/google/EA4335", color: "#EA4335" },
    { name: "AdSense", icon: "https://cdn.simpleicons.org/googleadsense/FBBC05", color: "#FBBC05" },
    { name: "Zoho Catalyst", icon: "https://cdn.simpleicons.org/zoho/119859", color: "#119859" },
    { name: "TikTok For Business", icon: "https://cdn.simpleicons.org/tiktok/ffffff", color: "#ffffff" },
    { name: "LinkedIn Ads", icon: "https://img.icons8.com/color/512/linkedin.png", color: "#0A66C2" },
    { name: "Microsoft Advertising", icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", color: "#00A4EF" }
  ];

  const INDUSTRIES = [
    { name: 'Real Estate', desc: 'UAE & Saudi Markets', src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
    { name: 'Healthcare', desc: 'Surgical & Aesthetic Leads', src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800' },
    { name: 'E-Commerce', desc: 'High-Volume Retail', src: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800' },
    { name: 'SaaS & Tech', desc: 'B2B Software Scaling', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
    { name: 'Finance', desc: 'Fintech & Investment', src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800' },
    { name: 'Hospitality', desc: 'Luxury Travel & Hotels', src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800' }
  ];

  return (
    <div className={styles.container}>
      <h1 className="visually-hidden">AI-Driven Digital Marketing Agency in Riyadh</h1>

      {/* 🏠 NEW INTERACTIVE HERO SECTION */}
      <InteractiveHero />

      {/* 🚀 TRUST SIGNALS: TECHNOLOGY PARTNERS */}
      <div className={styles.partnersSection}>
        <div className={styles.partnerMarquee}>
          {/* Loop from 1 to 9 */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <div key={num} className={styles.partnerItem}>
              <img
                src={`/partners/${num}.webp`}
                alt={`Partner ${num}`}
                className={styles.partnerIcon}
              />
            </div>
          ))}
          {/* Duplicated for the infinite scroll animation */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <div key={`dup-${num}`} className={styles.partnerItem} aria-hidden="true">
              <img
                src={`/partners/${num}.webp`}
                alt={`Partner ${num}`}
                className={styles.partnerIcon}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 🚀 TRUST SIGNALS: TECHNOLOGY PARTNERS */}
      <div className={styles.partnersSection}>
        <div className={styles.partnerMarquee}>
          {PARTNERS.map((partner, index) => (
            <div key={index} className={styles.partnerItem}>
              <img src={partner.icon} alt={`${partner.name} logo`} className={styles.partnerIcon} />
              <div className={styles.partnerDivider}></div>
              <span className={styles.partnerDot} style={{ background: partner.color, boxShadow: `0 0 12px ${partner.color}` }}></span>
              <span className={styles.partnerText}>{partner.name}</span>
            </div>
          ))}
          {PARTNERS.map((partner, index) => (
            <div key={`dup-${index}`} className={styles.partnerItem} aria-hidden="true">
              <img src={partner.icon} alt={`${partner.name} logo`} className={styles.partnerIcon} />
              <div className={styles.partnerDivider}></div>
              <span className={styles.partnerDot} style={{ background: partner.color, boxShadow: `0 0 12px ${partner.color}` }}></span>
              <span className={styles.partnerText}>{partner.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 💎 TRUST / USP SECTION (NEW APPROACH) */}
      <RevealOnScroll>
        <ApproachSection />
      </RevealOnScroll>

      {/* 🛠️ SERVICES SECTION */}
      <RevealOnScroll>
        <ServicesSection />
      </RevealOnScroll>

      {/* 🚀 WHY CHOOSE SECTION */}
      <RevealOnScroll>
        <WhyChooseSection />
      </RevealOnScroll>







      {/* 🚀 STARTUP IGNITION OFFER */}
      <RevealOnScroll>
        <StartupOffer locale={locale} />
      </RevealOnScroll>

      {/* ❓ FAQ SECTION */}
      <RevealOnScroll>
        <FaqSection locale={locale} />
      </RevealOnScroll>

      {/* 💻 CASE STUDIES / FEATURED WORK */}
      {/* 
      <section className={styles.section}>
        <RevealOnScroll>
          <div className={styles.sectionHeader}>
            <div className="badge-outline">Elite Portfolio</div>
            <h2>Premium Strategic Works</h2>
            <p>High-performance deployments that shattered industry conversion standards.</p>
          </div>
        </RevealOnScroll>

        <div className={styles.portfolioGrid}>
          {/* PROJECT 1 */ /*}
          <RevealOnScroll delay={50} className={styles.portfolioItemLarge}>
            <div className={styles.portfolioCard}>
              <div className={styles.kpiBadge}>+400% Sales</div>
              <div className={styles.portfolioImg}>
                <Image src="/projects/1.png" alt="E-Commerce React Portal" fill unoptimized />
              </div>
              <div className={styles.portfolioOverlay}>
                <div className={styles.glassInfo}>
                  <div className={styles.tagRow}>
                    <span className={styles.tag}>Next.js</span>
                    <span className={styles.tag}>E-Commerce</span>
                  </div>
                  <h3>E-Commerce React Portal</h3>
                  <p>A full-scale architecture migration from legacy systems into a headless Next.js environment, optimizing for sub-second checkouts.</p>
                  <a href={`/${locale}/portfolio`} className="link-arrow">View Case Study ↗</a>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* PROJECT 2 */ /*}
          <RevealOnScroll delay={150} className={styles.portfolioItemLarge}>
            <div className={styles.portfolioCard}>
              <div className={styles.kpiBadge}>#1 Rankings</div>
              <div className={styles.portfolioImg}>
                <Image src="/industries/healthcare.webp" alt="Healthcare" fill className={styles.industryImg} unoptimized />
              </div>
              <div className={styles.portfolioOverlay}>
                <div className={styles.glassInfo}>
                  <div className={styles.tagRow}>
                    <span className={styles.tag}>SEO</span>
                    <span className={styles.tag}>Medical</span>
                  </div>
                  <h3>Dubai Healthcare Setup</h3>
                  <p>Dominating localized search for premium clinics.</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      */}











    </div>
  );
}
