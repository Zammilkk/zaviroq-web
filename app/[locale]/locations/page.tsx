import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Markets & Global Presence | Zaviroq',
  description: 'Explore Zaviroq services across our key operating markets: Mangalore, Karnataka, Pan-India, Dubai (UAE), and Riyadh (Saudi Arabia).',
  alternates: {
    canonical: 'https://www.zaviroq.com/locations',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const marketLocations = [
  {
    city: 'Mangalore',
    region: 'Karnataka, India',
    desc: 'Our primary technical hub delivering advanced SEO, custom web development, and digital marketing for Karnataka and national enterprises.',
    href: '/locations/mangalore',
    tag: 'India Headquarters',
  },
  {
    city: 'Dubai',
    region: 'United Arab Emirates',
    desc: 'Bespoke Next.js web design, corporate branding, and enterprise SEO engineered for high-growth UAE businesses.',
    href: '/locations/dubai',
    tag: 'GCC Hub',
  },
  {
    city: 'Riyadh',
    region: 'Kingdom of Saudi Arabia',
    desc: 'Bilingual Arabic & English SEO, Google Ads management, and custom digital platforms aligned with Saudi Vision 2030.',
    href: '/locations/riyadh',
    tag: 'KSA Hub',
  },
  {
    city: 'Pan-India',
    region: 'National Market',
    desc: 'High-ROI performance marketing, Google & Meta ads management, and high-performance React web applications.',
    href: '/digital-marketing-india',
    tag: 'Pan-India Reach',
  },
];

export default async function LocationsIndexPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 24px 100px', minHeight: '75vh' }}>
      <nav aria-label="Breadcrumb" style={{ marginBottom: '24px', fontSize: '14px', color: '#888' }}>
        <Link href={`/${locale}`} style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
        <span style={{ margin: '0 8px' }}>›</span>
        <span style={{ color: 'var(--text-color, #fff)' }}>Markets</span>
      </nav>

      <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
        <div style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '8px', 
          padding: '6px 14px', 
          borderRadius: '999px', 
          border: '1px solid rgba(127, 119, 221, 0.3)', 
          background: 'rgba(127, 119, 221, 0.08)', 
          color: '#7F77DD', 
          fontSize: '13px', 
          fontWeight: 600, 
          marginBottom: '16px' 
        }}>
          <MapPin size={14} /> Global Presence & Operating Markets
        </div>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, marginBottom: '16px', lineHeight: 1.15 }}>
          Serving Brands Across <span style={{ background: 'var(--grad, linear-gradient(135deg, #7F77DD 0%, #3B8BD4 100%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Key Markets</span>
        </h1>
        <p style={{ color: '#888', fontSize: '17px', lineHeight: 1.6 }}>
          Explore our localized digital marketing, SEO, and custom web development architectures tailored to local buyer intent in India, the UAE, and Saudi Arabia.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
        {marketLocations.map((loc) => (
          <Link 
            key={loc.city} 
            href={loc.href} 
            style={{ 
              textDecoration: 'none', 
              color: 'inherit',
              display: 'flex',
              flexDirection: 'column',
              padding: '32px 28px',
              borderRadius: '16px',
              border: '1px solid var(--border-color, rgba(255, 255, 255, 0.08))',
              background: 'var(--card-bg, rgba(255, 255, 255, 0.02))',
              transition: 'transform 0.2s ease, border-color 0.2s ease',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '6px', background: 'rgba(127, 119, 221, 0.12)', color: '#7F77DD' }}>
                {loc.tag}
              </span>
              <ArrowRight size={18} style={{ color: '#888' }} />
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '6px' }}>{loc.city}</h2>
            <div style={{ fontSize: '14px', color: '#888', marginBottom: '16px' }}>{loc.region}</div>
            <p style={{ fontSize: '15px', color: '#aaa', lineHeight: 1.6, flexGrow: 1 }}>{loc.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
