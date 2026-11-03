import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Zaviroq',
  description: 'Read the privacy policy for Zaviroq. Learn how we handle your personal data, project information, and respect your privacy.',
  alternates: {
    canonical: 'https://www.zaviroq.com/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 24px 100px', minHeight: '70vh' }}>
      <nav aria-label="Breadcrumb" style={{ marginBottom: '24px', fontSize: '14px', color: '#888' }}>
        <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
        <span style={{ margin: '0 8px' }}>›</span>
        <span style={{ color: 'var(--text-color, #fff)' }}>Privacy Policy</span>
      </nav>

      <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, marginBottom: '24px' }}>Privacy Policy</h1>
      <p style={{ color: '#888', marginBottom: '32px' }}>Last updated: October 2026</p>

      <div style={{ lineHeight: 1.8, fontSize: '16px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <section>
          <h2 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '12px' }}>1. Introduction</h2>
          <p>
            Zaviroq (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website at <a href="https://www.zaviroq.com" style={{ color: '#7F77DD' }}>zaviroq.com</a> or engage with our digital marketing and web development services.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '12px' }}>2. Information We Collect</h2>
          <p>
            We may collect information you provide directly to us through enquiry forms, email, telephone, or WhatsApp, including your name, email address, phone number, company name, and details regarding your marketing or development project. We also collect standard website analytics through Google Analytics to understand website performance and improve user experience.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '12px' }}>3. How We Use Your Information</h2>
          <p>
            We use your data solely to respond to your inquiries, deliver our digital marketing, SEO, and web development services, prepare proposals, and manage our business relationships across Mangalore, India, the UAE, and Saudi Arabia. We never sell or rent your data to third parties.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '12px' }}>4. Data Protection & Security</h2>
          <p>
            We implement appropriate administrative, technical, and physical security measures to protect your personal information against unauthorized access, alteration, or disclosure.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '12px' }}>5. Contact Us</h2>
          <p>
            If you have questions regarding this Privacy Policy, please contact us at <a href="mailto:info@zaviroq.com" style={{ color: '#7F77DD' }}>info@zaviroq.com</a> or call <a href="tel:+917483830582" style={{ color: '#7F77DD' }}>+91 74 8383 0582</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
