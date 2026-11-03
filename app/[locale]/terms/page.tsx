import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Zaviroq',
  description: 'Review the terms and conditions for engaging with Zaviroq digital marketing, SEO, and web development agency services.',
  alternates: {
    canonical: 'https://www.zaviroq.com/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 24px 100px', minHeight: '70vh' }}>
      <nav aria-label="Breadcrumb" style={{ marginBottom: '24px', fontSize: '14px', color: '#888' }}>
        <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
        <span style={{ margin: '0 8px' }}>›</span>
        <span style={{ color: 'var(--text-color, #fff)' }}>Terms of Service</span>
      </nav>

      <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, marginBottom: '24px' }}>Terms of Service</h1>
      <p style={{ color: '#888', marginBottom: '32px' }}>Last updated: October 2026</p>

      <div style={{ lineHeight: 1.8, fontSize: '16px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <section>
          <h2 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '12px' }}>1. Agreement to Terms</h2>
          <p>
            By accessing or using the website at <a href="https://www.zaviroq.com" style={{ color: '#7F77DD' }}>zaviroq.com</a> or contracting services from Zaviroq, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '12px' }}>2. Services Provided</h2>
          <p>
            Zaviroq provides professional digital agency services including search engine optimization (SEO), web application and custom website development, Google Ads and performance marketing management, and branding/design services. Specific scopes, deliverables, timelines, and payment terms are detailed in formal client proposals and service agreements.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '12px' }}>3. Intellectual Property</h2>
          <p>
            All custom deliverables developed for clients become client property upon full settlement of agreed contract fees, unless otherwise specified in the service agreement. Pre-existing proprietary libraries, frameworks, tools, and methodologies remain the intellectual property of Zaviroq.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '12px' }}>4. Limitation of Liability</h2>
          <p>
            While we apply best industry standards to achieve optimal results, search engine ranking algorithms and third-party advertising platforms (such as Google and Meta) are subject to external changes beyond our direct control. Zaviroq shall not be liable for indirect or consequential damages.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '12px' }}>5. Contact Information</h2>
          <p>
            For inquiries regarding our terms, reach us at <a href="mailto:info@zaviroq.com" style={{ color: '#7F77DD' }}>info@zaviroq.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
