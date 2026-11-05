import styles from './page.module.css';
import RevealOnScroll from './RevealOnScroll';
import Link from 'next/link';
import Image from 'next/image';
import ExecutiveFAQ from '../components/ExecutiveFAQ';
import RecentIntel from '../components/RecentIntel';
import FaqSection from '../components/FaqSection';
import Typewriter from '../components/Typewriter';
import { Star, Globe, ShieldCheck, Layout, TrendingUp, Zap, Target, Rocket, Code, Search, BarChart, PenTool, Bot, FileText, ChevronDown } from 'lucide-react';
import InteractiveHero from '../components/InteractiveHero';
import ClientCarousel from '../components/ClientCarousel';
import PlatformCarousel from '../components/PlatformCarousel';
import type { Metadata } from 'next';
import Hero3DWrapper from '../components/Hero3DWrapper';
import ApproachSection from '../components/ApproachSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseSection from '../components/WhyChooseSection';
import { getHomepageContent } from '@/lib/getHomepageContent';
import { defaultHomepageData } from '@/lib/homepageDefaults';

export async function generateMetadata(): Promise<Metadata> {
  const content = await getHomepageContent();
  const seo = content.seo || defaultHomepageData.seo;
  const title = seo.title || 'Digital Marketing Agency in Mangalore | Zaviroq';
  const description = seo.description || 'Zaviroq helps businesses grow with SEO, Google Ads, social media marketing, and web development in Mangalore, India, the UAE, and Saudi Arabia.';
  const ogImage = seo.ogImage || '/og-image.png';

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: seo.keywords,
    alternates: {
      canonical: seo.canonicalUrl || 'https://www.zaviroq.com/',
      languages: {
        'en-IN': 'https://www.zaviroq.com/',
        'ar': 'https://www.zaviroq.com/ar',
        'x-default': 'https://www.zaviroq.com/',
      },
    },
    openGraph: {
      title: seo.ogTitle || title,
      description: seo.ogDescription || description,
      url: seo.canonicalUrl || 'https://www.zaviroq.com/',
      siteName: 'Zaviroq',
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.ogTitle || title,
      description: seo.ogDescription || description,
      images: [ogImage],
      creator: '@zaviroq',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const homepageData = await getHomepageContent();

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
    { name: 'Real Estate', desc: 'Mangalore & Regional Markets', src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
    { name: 'Healthcare', desc: 'Surgical & Aesthetic Leads', src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800' },
    { name: 'E-Commerce', desc: 'High-Volume Retail', src: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800' },
    { name: 'SaaS & Tech', desc: 'B2B Software Scaling', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
    { name: 'Finance', desc: 'Fintech & Investment', src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800' },
    { name: 'Hospitality', desc: 'Luxury Travel & Hotels', src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800' }
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.zaviroq.com/#localbusiness-mangalore",
    "name": homepageData.seo?.businessName || "Zaviroq - Digital Marketing Agency in Mangalore",
    "url": homepageData.seo?.canonicalUrl || "https://www.zaviroq.com",
    "logo": homepageData.images?.logoDark || "https://www.zaviroq.com/logo.png",
    "image": homepageData.seo?.ogImage || "https://www.zaviroq.com/og-image.png",
    "description": homepageData.seo?.description || "Zaviroq helps businesses grow with SEO, Google Ads, social media marketing, and web development in Mangalore, India, the UAE, and Saudi Arabia.",
    "telephone": homepageData.seo?.phone || "+917483830582",
    "email": homepageData.seo?.email || "info@zaviroq.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": homepageData.seo?.addressLocality || "Mangalore",
      "addressRegion": homepageData.seo?.addressRegion || "Karnataka",
      "addressCountry": homepageData.seo?.addressCountry || "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9141,
      "longitude": 74.8560
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Mangalore" },
      { "@type": "AdministrativeArea", "name": "Karnataka" },
      { "@type": "Country", "name": "India" },
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "Country", "name": "Saudi Arabia" }
    ],
    "parentOrganization": {
      "@id": "https://www.zaviroq.com/#organization"
    }
  };

  return (
    <div className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* 🏠 NEW INTERACTIVE HERO SECTION */}
      <InteractiveHero content={homepageData.hero} />

      {/* 🚀 CLIENTS: 3D CAROUSEL */}
      <ClientCarousel />


      {/* 💎 TRUST / USP SECTION (NEW APPROACH) */}
      <RevealOnScroll>
        <ApproachSection content={homepageData.approach} />
      </RevealOnScroll>

      {/* 🛠️ SERVICES SECTION */}
      <RevealOnScroll>
        <ServicesSection content={homepageData.services_section} />
      </RevealOnScroll>

      {/* 🚀 WHY CHOOSE SECTION */}
      <RevealOnScroll>
        <WhyChooseSection content={homepageData.why_choose} />
      </RevealOnScroll>







      {/* 🚀 PLATFORMS WE WORK ACROSS */}
      <PlatformCarousel />

      {/* ❓ FAQ SECTION */}
      <RevealOnScroll>
        <FaqSection locale={locale} content={homepageData.faqs} />
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
