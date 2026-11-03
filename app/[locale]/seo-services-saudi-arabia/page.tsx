import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Services in Saudi Arabia | KSA Search Engine Agency | Zaviroq',
  description: 'Enterprise SEO services across Saudi Arabia, Riyadh, and Jeddah. Arabic semantic optimization, local citations, and high-impact organic traffic growth.',
  alternates: {
    canonical: 'https://www.zaviroq.com/seo-services-saudi-arabia',
  },
  openGraph: {
    title: 'SEO Services in Saudi Arabia | KSA Search Engine Agency | Zaviroq',
    description: 'Enterprise SEO services across Saudi Arabia, Riyadh, and Jeddah. Arabic semantic optimization, local citations, and high-impact organic traffic growth.',
    url: 'https://www.zaviroq.com/seo-services-saudi-arabia',
    siteName: 'Zaviroq',
    locale: 'en_SA',
    type: 'website',
    images: [{ url: 'https://www.zaviroq.com/og-image.png' }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LocationLandingPage() {
  // A generic SEO landing page template
  return (
    <div className="animated-gradient-bg" style={{ minHeight: '100vh', padding: '80px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="glass-card" style={{ maxWidth: '800px', width: '100%', textAlign: 'center' }}>
        <h1 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Rank #1 for SEO Services in Saudi Arabia</h1>
        <p style={{ color: 'var(--text-muted)' }}>Drive targeted GCC traffic to your local business and skyrocket conversions.</p>

        <section style={{ marginTop: '40px', textAlign: 'left' }}>
          <h3>Specialized Saudi SEO Strategy</h3>
          <p style={{ marginTop: '10px' }}>Our technical SEO experts implement advanced hreflang tags, schema markups, and local citations specific to Riyadh, Jeddah, and the wider KSA market.</p>
        </section>

        <section style={{ marginTop: '30px', textAlign: 'left' }}>
          <h3>Local Schema Execution</h3>
          <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
            <li>Arabic semantic search optimization</li>
            <li>Google Maps domination for local Saudi queries</li>
            <li>High DA local Saudi Arabian link-building</li>
          </ul>
        </section>

        <button className="btn-primary" style={{ marginTop: '30px', fontSize: '1.2rem', padding: '15px 30px' }}>Get Free Saudi SEO Audit</button>
      </div>
    </div>
  );
}
