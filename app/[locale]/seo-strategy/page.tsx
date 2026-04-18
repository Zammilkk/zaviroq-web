import { Metadata } from 'next';
import RevealOnScroll from '../RevealOnScroll';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SEO Strategy & Consultation | Custom Roadmap | ZAVIROQ',
  description: 'Data-driven SEO roadmaps tailored to your business goals and market position. Quarterly planning and growth strategy.',
  keywords: 'SEO Strategy Dubai, SEO Consultation KSA, Digital Strategy, SEO Roadmap',
};

const sections = [
  { title: 'Competitor Analysis', desc: 'Deep-dive into competitor strategies— backlink profiles, content approaches, keyword targeting, and market positioning to identify your differentiation opportunities.' },
  { title: 'Market Positioning', desc: 'Define your unique market position. Build SEO strategies that capitalize on your strengths and exploit competitor weaknesses.' },
  { title: 'Growth Roadmap', desc: 'Quarterly execution plans with clear milestones, KPI targets, and resource allocation for sustainable growth.' },
  { title: 'Quarterly Planning', desc: 'Ongoing strategic review and optimization. Quarterly adjustments based on performance data and market shifts.' },
];

export default async function SEOStrategyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div style={{ width: '100%', minHeight: '100vh', background: 'var(--bg-color)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(59,139,212,0.08) 0%, transparent 60%)' }} />

      <nav style={{ position: 'relative', zIndex: 10, padding: '120px 48px 0', maxWidth: 1260, display: 'flex', gap: 8, fontSize: '0.82rem' }}>
        <Link href={`/${locale}`} style={{ color: '#454555', textDecoration: 'none' }}>Home</Link>
        <span style={{ color: '#2e2e3a' }}>›</span>
        <Link href={`/${locale}/seo-services`} style={{ color: '#454555', textDecoration: 'none' }}>SEO Services</Link>
        <span style={{ color: '#2e2e3a' }}>›</span>
        <span style={{ color: '#888' }}>SEO Strategy</span>
      </nav>

      <section style={{ position: 'relative', zIndex: 2, maxWidth: 1260, padding: '40px 48px 60px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 20 }}>
        <RevealOnScroll>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 18px', border: '1px solid rgba(59,139,212,0.3)', borderRadius: 100, background: 'rgba(59,139,212,0.07)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 3, color: '#6ab8f0' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary-blue)', boxShadow: '0 0 8px var(--primary-blue)' }} />
            Strategic Planning
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={60}>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: -1.8, color: '#fff', maxWidth: 700 }}>
            SEO Strategy <span style={{ background: 'linear-gradient(110deg, #60a8e8 0%, #9d96ff 55%, #60a8e8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>& Consultation</span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={110}>
          <p style={{ fontSize: '1.05rem', color: '#686878', lineHeight: 1.7, maxWidth: 560 }}>
            Every winning campaign starts with a strategy. We build custom roadmaps aligned with your business objectives—quarterly planning, competitor analysis, and continuous optimization for compounding results.
          </p>
        </RevealOnScroll>
      </section>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1260, padding: '0 48px', display: 'flex', alignItems: 'center', gap: 20 }}>
        <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(59,139,212,0.25), transparent)' }} />
        <span style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 4, color: '#444', whiteSpace: 'nowrap' }}>Strategy Components</span>
        <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(59,139,212,0.25), transparent)' }} />
      </div>

      <section style={{ position: 'relative', zIndex: 2, maxWidth: 1260, padding: '40px 48px 80px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20 }}>
        {sections.map((section, i) => (
          <RevealOnScroll key={i} delay={i * 70}>
            <div style={{ background: 'rgba(14,14,20,0.75)', border: '1px solid rgba(255,255,255,0.055)', borderRadius: 24, padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 12, transition: 'all 0.35s ease' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: 2, color: 'rgba(59,139,212,0.25)' }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(59,139,212,0.08)', border: '1px solid rgba(59,139,212,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>📊</span>
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#e8e8f0', letterSpacing: -0.3 }}>{section.title}</h3>
              <p style={{ fontSize: '0.92rem', color: '#686878', lineHeight: 1.65 }}>{section.desc}</p>
            </div>
          </RevealOnScroll>
        ))}
      </section>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1260, padding: '0 48px 100px' }}>
        <RevealOnScroll>
          <div style={{ border: '1px solid rgba(59,139,212,0.18)', borderRadius: 36, padding: '72px 60px', textAlign: 'center', background: 'rgba(14,14,22,0.6)', backdropFilter: 'blur(20px)' }}>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 4, color: '#5090cc', marginBottom: 18 }}>Strategic Partnership</p>
            <h2 style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.4rem)', fontWeight: 900, color: '#fff', letterSpacing: -1, marginBottom: 14 }}>Ready to build your SEO roadmap?</h2>
            <p style={{ fontSize: '1rem', color: '#5a5a72', lineHeight: 1.7, maxWidth: 480, margin: '0 auto 36px' }}>
              Get a custom strategy built for your business. Quarterly planning and strategic oversight for sustainable SEO growth.
            </p>
            <Link href={`/${locale}/contact`} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '15px 40px', background: 'linear-gradient(135deg, #3B8BD4 0%, #7F77DD 100%)', borderRadius: 100, fontSize: '0.95rem', fontWeight: 700, color: '#fff', textDecoration: 'none', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
              Get SEO Strategy ⚡
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}