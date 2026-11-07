'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import styles from './not-found.module.css';
import { 
  Compass, Building2, Sparkles, ArrowRight, Home, 
  Search, Rocket, AlertTriangle, Terminal, ChevronRight,
  ShieldAlert, RefreshCw, PhoneCall
} from 'lucide-react';

export default function NotFound() {
  const router = useRouter();
  const pathname = usePathname();
  const isArabic = pathname?.startsWith('/ar');
  const locale = isArabic ? 'ar' : 'en';
  const prefix = isArabic ? '/ar' : '';

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (!query) return;

    if (query.includes('indus') || query.includes('real estate') || query.includes('health') || query.includes('travel')) {
      router.push(`${prefix}/industries`);
    } else if (query.includes('serv') || query.includes('seo') || query.includes('dev') || query.includes('market')) {
      router.push(`${prefix}/services`);
    } else if (query.includes('port') || query.includes('work') || query.includes('case')) {
      router.push(`${prefix}/portfolio`);
    } else if (query.includes('blog') || query.includes('news') || query.includes('intel')) {
      router.push(`${prefix}/blog`);
    } else if (query.includes('contact') || query.includes('touch') || query.includes('call') || query.includes('hire')) {
      router.push(`${prefix}/#contact`);
    } else {
      router.push(`${prefix}/services`);
    }
  };

  const rescueCards = isArabic ? [
    {
      title: 'خدماتنا الرقمية',
      desc: 'استكشف استراتيجيات تحسين محركات البحث، وتطوير الويب، والتسويق عالي الأداء.',
      icon: Compass,
      link: `${prefix}/services`
    },
    {
      title: 'القطاعات والصناعات',
      desc: 'حلول متخصصة للعقارات، الرعاية الصحية، التجارة الإلكترونية والشركات.',
      icon: Building2,
      link: `${prefix}/industries`
    },
    {
      title: 'أعمالنا ونتائجنا',
      desc: 'شاهد دراسات الحالة الحقيقية ونمو العائد الاستثماري لشركائنا التجاريين.',
      icon: Sparkles,
      link: `${prefix}/portfolio`
    },
    {
      title: 'استشارة هندسية',
      desc: 'تواصل مع فريقنا في دبي ومانغالور لتصميم استراتيجية نمو أعمالك.',
      icon: PhoneCall,
      link: `${prefix}/#contact`
    }
  ] : [
    {
      title: 'Digital Services',
      desc: 'Full-funnel organic search SEO, performance media, engineering and content systems.',
      icon: Compass,
      link: `${prefix}/services`
    },
    {
      title: 'Industries We Power',
      desc: 'Tailored digital solutions for Real Estate, Healthcare, E-Commerce, and Corporate B2B.',
      icon: Building2,
      link: `${prefix}/industries`
    },
    {
      title: 'Portfolio & Case Studies',
      desc: 'Inspect audited performance metrics, brand transformations, and proven client ROI.',
      icon: Sparkles,
      link: `${prefix}/portfolio`
    },
    {
      title: 'Strategic Consultation',
      desc: 'Connect directly with our growth engineering teams in Dubai and Mangalore.',
      icon: PhoneCall,
      link: `${prefix}/#contact`
    }
  ];

  const quickChips = isArabic ? [
    { label: 'تحسين محركات البحث', url: `${prefix}/services/seo` },
    { label: 'التسويق بالأداء', url: `${prefix}/services/performance-marketing` },
    { label: 'تسويق المحتوى', url: `${prefix}/services/digital-marketing/content-marketing` },
    { label: 'تطوير البرمجيات والويب', url: `${prefix}/services/web-development` },
    { label: 'التسويق العقاري', url: `${prefix}/industries` },
    { label: 'تواصل معنا', url: `${prefix}/#contact` }
  ] : [
    { label: 'Technical SEO', url: `${prefix}/services/seo` },
    { label: 'Performance Marketing', url: `${prefix}/services/performance-marketing` },
    { label: 'Content Marketing', url: `${prefix}/services/digital-marketing/content-marketing` },
    { label: 'Web & App Engineering', url: `${prefix}/services/web-development` },
    { label: 'Real Estate Growth', url: `${prefix}/industries` },
    { label: 'Contact Architecture', url: `${prefix}/#contact` }
  ];

  return (
    <main className={styles.notFoundWrapper} dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Ambient background glows */}
      <div className={styles.ambientGlowPrimary} />
      <div className={styles.ambientGlowSecondary} />
      <div className={styles.gridPattern} />

      <div className={styles.contentContainer}>
        {/* Top telemetry status badge */}
        <div className={styles.statusBadge}>
          <span className={styles.pulseDot} />
          <span>{isArabic ? 'استثناء نظام // خطأ 404' : 'SYSTEM EXCEPTION // ERROR 404'}</span>
        </div>

        {/* 404 Visual with Orbit effect */}
        <div className={styles.visualFrame}>
          <h1 className={styles.glitchCode}>404</h1>
          <div className={styles.orbitRing} />
        </div>

        {/* Title and Description */}
        <h2 className={styles.title}>
          {isArabic ? 'المسار تائه في الفضاء الرقمي' : 'Lost in the Digital Expanse'}
        </h2>

        <p className={styles.description}>
          {isArabic 
            ? 'المسار أو الصفحة التي تبحث عنها غير متوفرة في بنية نظامنا الرقمية أو تم نقلها إلى عنوان جديد. لا تقلق، يمكنك استخدام محرك البحث السريع أو القفز إلى أحد الأقسام الرئيسية أدناه.'
            : "The coordinate or page you are attempting to reach has drifted beyond our perimeter. It may have been relocated, updated, or decommissioned. Let our navigation matrix guide you back."}
        </p>

        {/* Quick Search Form */}
        <div className={styles.searchBoxWrapper}>
          <form className={styles.searchBoxForm} onSubmit={handleSearch}>
            <Search size={18} className={styles.searchIcon} />
            <input 
              type="text" 
              className={styles.searchInput}
              placeholder={isArabic ? 'ابحث عن خدمة أو قطاع أو صفحة...' : 'Search services, industries, or keywords...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className={styles.searchBtn}>
              <span>{isArabic ? 'انتقال' : 'Navigate'}</span>
              <ArrowRight size={14} />
            </button>
          </form>
        </div>

        {/* Action Buttons */}
        <div className={styles.actionGroup}>
          <Link href={prefix || '/'} className={styles.btnPrimaryGlow}>
            <Home size={17} />
            <span>{isArabic ? 'العودة للمنصة الرئيسية' : 'Return to Control Center'}</span>
          </Link>

          <Link href={`${prefix}/services`} className={styles.btnSecondaryOutline}>
            <Compass size={17} />
            <span>{isArabic ? 'استعراض جميع الخدمات' : 'Explore All Services'}</span>
          </Link>
        </div>

        {/* Popular Quick Route Chips */}
        <div className={styles.rescueHeader}>
          {isArabic ? 'مسارات الوصول السريع' : 'High Priority Routes'}
        </div>
        <div className={styles.chipsRow}>
          {quickChips.map((chip, idx) => (
            <Link key={idx} href={chip.url} className={styles.chipItem}>
              {chip.label}
            </Link>
          ))}
        </div>

        {/* Quick Rescue Destination Cards Grid */}
        <div className={styles.rescueGrid}>
          {rescueCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Link key={idx} href={card.link} className={styles.rescueCard}>
                <div className={styles.rescueIconWrap}>
                  <Icon size={22} />
                </div>
                <h3 className={styles.rescueCardTitle}>
                  <span>{card.title}</span>
                  <ChevronRight size={16} className={styles.rescueCardArrow} />
                </h3>
                <p className={styles.rescueCardDesc}>{card.desc}</p>
              </Link>
            );
          })}
        </div>

        {/* Live Cyber Telemetry Strip */}
        <div className={styles.telemetryFooter}>
          <Terminal size={13} color="#818cf8" />
          <span>
            {isArabic 
              ? 'الخادم: دبي / الرياض / الولايات المتحدة • الحالة: تشغيل مستقر • التشفير: TLS 1.3' 
              : 'EDGE: DXB / RUH / US-EAST • PROTOCOL: TLS 1.3 • VECTOR: HTTP/3 ACTIVE'}
          </span>
        </div>
      </div>
    </main>
  );
}
