import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicesGrid from '../../components/ServicesGrid';
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
    image: '/assets/images/seo-service.avif',
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
        <div className={styles.heroBgLayer}></div>
        <div className={styles.heroContainer}>
          <div className={styles.heroLeft}>
            <RevealOnScroll>
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
              
              <Link href={`/${locale}/services#all`} className={styles.btnExplore}>
                Explore Our Services →
              </Link>
              
              <div className={styles.heroStatsRow}>
                <div className={styles.statItem}>
                  <div className={styles.statIconBox}>📦</div>
                  <div className={styles.statNum}>360+</div>
                  <div className={styles.statLabel}>Projects Delivered</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statIconBox}>👥</div>
                  <div className={styles.statNum}>50+</div>
                  <div className={styles.statLabel}>Happy Clients</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statIconBox}>📈</div>
                  <div className={styles.statNum}>3x</div>
                  <div className={styles.statLabel}>Average Growth</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statIconBox}>🎯</div>
                  <div className={styles.statNum}>100%</div>
                  <div className={styles.statLabel}>Results Focused</div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
          <div className={styles.heroRight}>
            {/* The user can place the mockup image here. For now we use the uploaded image as a placeholder. */}
            <div className={styles.imageWrapper}>
              <img src="/assets/images/services-bg.png" alt="Services Mockup" className={styles.heroImage} />
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid categories={categoriesMeta} locale={locale} />


    </div>
  );
}