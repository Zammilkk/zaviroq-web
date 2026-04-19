import styles from './page.module.css';
import { notFound } from 'next/navigation';
import RevealOnScroll from '../../RevealOnScroll';
import { Metadata } from 'next';
import locationsConfigs from '@/data/locationsConfigs.json';
import { routing } from '@/i18n/routing';

interface LocationConfig {
  slug: string;
  metaTitle: string;
  metaDesc: string;
  keywords: string;
  cityName: string;
  heroTitle: string;
  heroDesc: string;
  color: string;
  coordinates: {
    lat: string;
    lon: string;
  };
  tactics: string[];
}

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const configs = locationsConfigs as LocationConfig[];
  
  return routing.locales.flatMap((locale) => 
    configs.map((c) => ({
      locale,
      slug: c.slug
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const configs = locationsConfigs as LocationConfig[];
  const loc = configs.find((c) => c.slug === slug);
  
  if (!loc) return { title: 'Region Not Found' };

  return {
    title: loc.metaTitle,
    description: loc.metaDesc,
    keywords: loc.keywords,
  };
}

export default async function LocationDetailedPage({ params }: Props) {
  const { locale, slug } = await params;
  const configs = locationsConfigs as LocationConfig[];
  const loc = configs.find((c) => c.slug === slug);

  if (!loc) notFound();

  // LocalBusiness GeoSchema explicitly mapping location metrics
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `ZAVIROQ ${loc.cityName}`,
    "url": "https://zaviroq.com",
    "logo": "https://zaviroq.com/logo.png",
    "image": "https://zaviroq.com/logo.png",
    "description": loc.metaDesc,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": loc.coordinates.lat,
      "longitude": loc.coordinates.lon
    },
    // We target broader area served to scoop Map intents
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": loc.cityName
    }
  };

  return (
    <div className={styles.container}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />

      <div className={styles.glowBg} style={{ background: `radial-gradient(circle, ${loc.color.replace('var(--', '').replace(')', '') === 'primary-blue' ? 'rgba(59, 139, 212, 0.15)' : 'rgba(127, 119, 221, 0.15)'} 0%, transparent 50%)`}}></div>

      <div className={styles.hero}>
        <RevealOnScroll>
          <div className={styles.badge} style={{ borderColor: loc.color, color: loc.color }}>Targeted Zone: {loc.cityName}</div>
          <h1 className={styles.title}>{loc.heroTitle}</h1>
          <p className={styles.subtitle}>{loc.heroDesc}</p>
        </RevealOnScroll>
      </div>

      <div className={styles.contentGrid}>
         <RevealOnScroll yOffset={50}>
           <div className={styles.glassBlock}>
             <h3 className={styles.blockTitle}>Executing Tactics in {loc.cityName}</h3>
             <ul className={styles.tacticsList}>
               {loc.tactics.map((tactic: string, idx: number) => (
                 <li key={idx}>
                   <span className={styles.checkIcon} style={{ color: loc.color }}>⬢</span> 
                   {tactic}
                 </li>
               ))}
             </ul>
           </div>
         </RevealOnScroll>

         <RevealOnScroll delay={100} yOffset={50}>
           <div className={styles.glassBlock}>
             <h3 className={styles.blockTitle}>The Architectural Blueprint</h3>
             <p className={styles.blockText}>
               General marketing doesn&apos;t work for localized monopolies. ZAVIROQ engineers highly specialized architectures mapping directly to the exact search queries and consumer psychology specific to <strong>{loc.cityName}</strong>.
             </p>
             <p className={styles.blockText}>
               Our native JSON-LD routing pipelines combined with Next.js SSR configurations allow your business logic to outpace older WordPress arrays instantly.
             </p>
             <a href={`/${locale}/contact`} className={`btn-primary ${styles.innerCta}`}>Secure Your Market Share ⚡</a>
           </div>
         </RevealOnScroll>
      </div>
    </div>
  );
}
