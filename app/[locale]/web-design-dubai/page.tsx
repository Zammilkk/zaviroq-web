import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Design Agency in Dubai, UAE | Custom Websites | Zaviroq',
  description: 'Premium web design and Next.js development agency in Dubai. High-converting, bespoke web applications engineered for elite brands across the UAE.',
  alternates: {
    canonical: 'https://www.zaviroq.com/web-design-dubai',
  },
  openGraph: {
    title: 'Web Design Agency in Dubai, UAE | Custom Websites | Zaviroq',
    description: 'Premium web design and Next.js development agency in Dubai. High-converting, bespoke web applications engineered for elite brands across the UAE.',
    url: 'https://www.zaviroq.com/web-design-dubai',
    siteName: 'Zaviroq',
    locale: 'en_AE',
    type: 'website',
    images: [{ url: 'https://www.zaviroq.com/og-image.png' }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WebDesignDubaiPage() {
  return (
    <div className="animated-gradient-bg" style={{ minHeight: '100vh', padding: '80px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="glass-card" style={{ maxWidth: '800px', width: '100%', textAlign: 'center' }}>
        <h1 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Premium Web Design in Dubai</h1>
        <p style={{ color: 'var(--text-muted)' }}>High-converting, glassmorphic Next.js web applications tailored for the UAE market.</p>

        <section style={{ marginTop: '40px', textAlign: 'left' }}>
          <h3>Dubai Digital Experiences</h3>
          <p style={{ marginTop: '10px' }}>In the fast-paced Dubai ecosystem, your digital storefront needs to instantly communicate luxury and performance. We build cutting-edge user interfaces and integrate robust PHP backends for real estate, e-commerce, and enterprise clients in the UAE.</p>
        </section>

        <button className="btn-primary" style={{ marginTop: '30px', fontSize: '1.2rem', padding: '15px 30px' }}>Get Free Website Mockup</button>
      </div>
    </div>
  );
}
