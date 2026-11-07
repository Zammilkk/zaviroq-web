import { Metadata } from 'next';
import Link from 'next/link';
import styles from '../legal.module.css';
import { 
  ShieldCheck, Lock, Eye, FileText, CheckCircle2, 
  MapPin, Phone, Mail, Globe, ArrowRight, ChevronRight,
  Server, UserCheck, AlertCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy & Data Governance Policy | Zaviroq',
  description: 'Read the comprehensive data privacy and compliance framework for Zaviroq. Transparent data processing aligned with India DPDP, UAE Decree-Law No. 45, and Saudi PDPL.',
  alternates: {
    canonical: 'https://www.zaviroq.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy & Data Governance | Zaviroq',
    description: 'Our commitment to zero data brokering, enterprise encryption, and compliance across India, the UAE, and Saudi Arabia.',
    url: 'https://www.zaviroq.com/privacy',
    siteName: 'Zaviroq',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  const tableOfContents = [
    { id: 'section-1', title: '1. Introduction & Scope' },
    { id: 'section-2', title: '2. Information We Collect' },
    { id: 'section-3', title: '3. Legal Basis & Purpose' },
    { id: 'section-4', title: '4. Zero Data Brokering Promise' },
    { id: 'section-5', title: '5. Cookies & Analytics' },
    { id: 'section-6', title: '6. Encryption & Storage' },
    { id: 'section-7', title: '7. Cross-Border Transfers' },
    { id: 'section-8', title: '8. Your Statutory Rights' },
    { id: 'section-9', title: '9. Data Protection Contact' },
  ];

  return (
    <div className={styles.legalWrapper}>
      <div className={styles.ambientGlowTop} />

      <div className={styles.container}>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className={styles.breadcrumbNav}>
          <Link href="/" className={styles.breadcrumbLink}>Home</Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span className={styles.breadcrumbCurrent}>Privacy Policy</span>
        </nav>

        {/* Hero Header */}
        <header className={styles.heroHeader}>
          <div className={styles.complianceBadge}>
            <ShieldCheck size={14} />
            <span>Data Privacy &amp; Governance Charter</span>
          </div>

          <h1 className={styles.pageTitle}>
            Privacy &amp; <span className={styles.gradientAccent}>Data Protection</span> Policy
          </h1>

          <p className={styles.heroSubtitle}>
            Zaviroq is committed to transparent data practices, rigorous cybersecurity controls, and uncompromising client confidentiality across all digital marketing, engineering, and cloud operations.
          </p>

          <div className={styles.metaStrip}>
            <div className={styles.metaItem}>
              <strong>Effective Date:</strong>
              <span>November 2026</span>
            </div>
            <span className={styles.metaDot}>•</span>
            <div className={styles.metaItem}>
              <strong>Version:</strong>
              <span>3.2 Enterprise</span>
            </div>
            <span className={styles.metaDot}>•</span>
            <div className={styles.metaItem}>
              <strong>Jurisdictions:</strong>
              <span>India (DPDP) • UAE (Decree 45/2021) • Saudi Arabia (PDPL) • Global</span>
            </div>
          </div>
        </header>

        {/* Main 2-Column Layout */}
        <div className={styles.layoutGrid}>
          {/* Left Sticky Table of Contents */}
          <aside className={styles.tocSidebar}>
            <h3 className={styles.tocTitle}>
              <FileText size={14} />
              <span>Policy Index</span>
            </h3>

            <ul className={styles.tocList}>
              {tableOfContents.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className={styles.tocLink}>
                    <span>{item.title}</span>
                    <ChevronRight size={13} className={styles.tocBadge} />
                  </a>
                </li>
              ))}
            </ul>

            <div className={styles.sidebarTrustBox}>
              <div className={styles.trustPill}>
                <CheckCircle2 size={14} />
                <span>Zero Third-Party Data Sale</span>
              </div>
              <div className={styles.trustPill}>
                <Lock size={14} />
                <span>256-Bit TLS Transmission</span>
              </div>
              <div className={styles.trustPill}>
                <Server size={14} />
                <span>Encrypted Edge Storage</span>
              </div>
            </div>
          </aside>

          {/* Right Detailed Content Area */}
          <main className={styles.contentArea}>
            {/* Key Assurance Callout */}
            <div className={styles.calloutBox}>
              <div className={styles.calloutIcon}>
                <Lock size={20} />
              </div>
              <div>
                <h4 className={styles.calloutTitle}>Our Zero-Monetization Data Guarantee</h4>
                <p className={styles.calloutText}>
                  Zaviroq does not monetize, sell, lease, broker, or trade client information, confidential codebases, marketing telemetry, or customer lead databases to any third party under any circumstances.
                </p>
              </div>
            </div>

            {/* Section 1 */}
            <section id="section-1" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumBadge}>01</span>
                <h2 className={styles.sectionTitle}>Introduction &amp; Scope</h2>
              </div>
              <p className={styles.paragraph}>
                This Privacy Policy outlines how <strong>Zaviroq</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, processes, and safeguards personal data and proprietary client business telemetry when you access our website at <Link href="/" style={{ color: '#4f46e5', fontWeight: 600 }}>zaviroq.com</Link>, use our digital platforms, or engage our digital agency services.
              </p>
              <p className={styles.paragraph}>
                We operate across primary commercial hubs in India, the United Arab Emirates (UAE), and the Kingdom of Saudi Arabia (KSA). We adhere to the India Digital Personal Data Protection Act (DPDPA), the UAE Federal Decree-Law No. 45/2021 regarding Personal Data Protection, the Saudi Arabia Personal Data Protection Law (PDPL), and internationally accepted data ethics standards.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section-2" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumBadge}>02</span>
                <h2 className={styles.sectionTitle}>Categories of Information We Collect</h2>
              </div>
              <p className={styles.paragraph}>
                To provide tailored digital marketing, search engine optimization (SEO), and bespoke Next.js web applications, we collect limited categories of information:
              </p>
              <div className={styles.pointsGrid}>
                <div className={styles.pointItem}>
                  <h4 className={styles.pointTitle}>Direct Inquiries &amp; Lead Data</h4>
                  <p className={styles.pointDesc}>Name, professional corporate email, phone number, company name, project objectives, and budget allocations submitted via inquiry forms.</p>
                </div>
                <div className={styles.pointItem}>
                  <h4 className={styles.pointTitle}>Technical Telemetry</h4>
                  <p className={styles.pointDesc}>IP addresses, approximate geographic location, browser engine, operating system, and HTTP referrers to optimize latency and prevent cyber-abuse.</p>
                </div>
                <div className={styles.pointItem}>
                  <h4 className={styles.pointTitle}>Client Project Assets</h4>
                  <p className={styles.pointDesc}>Brand identity assets, API endpoints, analytics read tokens, and staging credentials supplied explicitly under strict mutual non-disclosure agreements.</p>
                </div>
                <div className={styles.pointItem}>
                  <h4 className={styles.pointTitle}>Communication Records</h4>
                  <p className={styles.pointDesc}>Meeting transcripts, strategic briefing notes, email correspondence, and verified service agreement specifications.</p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section-3" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumBadge}>03</span>
                <h2 className={styles.sectionTitle}>Legal Basis &amp; Purpose of Processing</h2>
              </div>
              <p className={styles.paragraph}>
                We only process personal and business data where there is a clearly established, legitimate legal ground:
              </p>
              <ul className={styles.bulletList}>
                <li><strong>Contractual Execution:</strong> Delivering agreed digital deliverables, custom software builds, performance marketing campaign architectures, and technical SEO audits.</li>
                <li><strong>Legitimate Commercial Interest:</strong> Responding to inbound RFPs, generating customized scopes of work, auditing Core Web Vitals, and preventing malicious security incidents.</li>
                <li><strong>Explicit Consent:</strong> Sending requested newsletters, case study intelligence reports, or marketing communications that you have actively opted in to receive.</li>
                <li><strong>Legal Compliance:</strong> Meeting statutory tax reporting, corporate invoicing obligations, and anti-fraud protocols under regional corporate laws.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="section-4" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumBadge}>04</span>
                <h2 className={styles.sectionTitle}>Zero Data Brokering Promise</h2>
              </div>
              <p className={styles.paragraph}>
                In an era of rampant data harvesting, Zaviroq maintains an absolute ethical barrier:
              </p>
              <ul className={styles.bulletList}>
                <li>We <strong>never sell, lease, broker, or monetize</strong> client lists, prospect contact details, or marketing campaign analytics to data brokers or ad networks.</li>
                <li>Customer lead data generated through client landing pages belongs exclusively to the contracting client.</li>
                <li>Authorized sub-processors (such as cloud hosting providers Vercel, Cloudflare, and Supabase) are strictly vetted under Enterprise Data Processing Addendums (DPAs).</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="section-5" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumBadge}>05</span>
                <h2 className={styles.sectionTitle}>Cookies &amp; Analytical Pixels</h2>
              </div>
              <p className={styles.paragraph}>
                Our website utilizes minimal, security-first cookies designed to maintain user state and measure aggregate site performance:
              </p>
              <ul className={styles.bulletList}>
                <li><strong>Essential Security Cookies:</strong> Required to authenticate sessions, prevent Cross-Site Request Forgery (CSRF), and maintain CDN edge caching.</li>
                <li><strong>Performance Analytics (Google Analytics 4):</strong> Anonymized telemetry to examine aggregate bounce rates, popular service pages, and mobile responsiveness.</li>
                <li><strong>Conversion Tags:</strong> Optional conversion verification for LinkedIn Ads or Google Ads to evaluate marketing effectiveness for visitors who consent.</li>
              </ul>
              <p className={styles.paragraph}>
                You can configure your browser preferences to refuse cookies or notify you when cookies are placed. Disabling cookies will not restrict your access to core informational content on our website.
              </p>
            </section>

            {/* Section 6 */}
            <section id="section-6" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumBadge}>06</span>
                <h2 className={styles.sectionTitle}>Encryption, Storage &amp; Retention</h2>
              </div>
              <p className={styles.paragraph}>
                We apply comprehensive, defense-in-depth technical safeguards to preserve data integrity:
              </p>
              <ul className={styles.bulletList}>
                <li><strong>Encryption in Transit:</strong> All HTTP traffic is forcefully routed through TLS 1.3 with modern cipher suites and Strict-Transport-Security (HSTS).</li>
                <li><strong>Encryption at Rest:</strong> Database records, inquiries, and backups are encrypted utilizing AES-256 standards with automated key rotation.</li>
                <li><strong>Access Control:</strong> Administrative access follows Zero-Trust Architecture, requiring role-based permissions and hardware-backed multi-factor authentication.</li>
                <li><strong>Retention Schedule:</strong> General prospective client inquiries are retained for up to 24 months, after which they are securely purged unless active contractual engagements require longer statutory archiving.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="section-7" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumBadge}>07</span>
                <h2 className={styles.sectionTitle}>Cross-Border Data Transfers</h2>
              </div>
              <p className={styles.paragraph}>
                Because Zaviroq operates internationally, data may occasionally be transferred across jurisdictional boundaries between our engineering centers in India and our client success hubs in the UAE and Saudi Arabia.
              </p>
              <p className={styles.paragraph}>
                All international transfers are executed pursuant to Standard Contractual Clauses (SCCs) and regional adequacy guidelines, guaranteeing equivalent levels of data subject protection regardless of geographic processing location.
              </p>
            </section>

            {/* Section 8 */}
            <section id="section-8" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumBadge}>08</span>
                <h2 className={styles.sectionTitle}>Your Statutory Data Rights</h2>
              </div>
              <p className={styles.paragraph}>
                Depending on your country of residence, you possess specific legal rights regarding your personal information:
              </p>
              <ul className={styles.bulletList}>
                <li><strong>Right to Access:</strong> You may request an audit copy of any personal data we hold concerning your identity.</li>
                <li><strong>Right to Rectification:</strong> You may request immediate correction of inaccurate or outdated information.</li>
                <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> You may request deletion of your information when it is no longer necessary for contractual purposes.</li>
                <li><strong>Right to Restrict or Object:</strong> You can opt out of direct marketing communications at any time with a single click.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section id="section-9" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumBadge}>09</span>
                <h2 className={styles.sectionTitle}>Data Protection Contact &amp; Registered Office</h2>
              </div>
              <p className={styles.paragraph}>
                If you have questions, require statutory disclosures, or wish to exercise your legal data rights, contact our Data Protection Officer:
              </p>

              <div className={styles.officeContactBox}>
                <h4 style={{ margin: '0 0 12px', fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main, #0f172a)' }}>
                  Zaviroq Corporate Headquarters
                </h4>
                <div className={styles.officeContactGrid}>
                  <div className={styles.officeItem}>
                    <MapPin size={18} className={styles.officeIcon} />
                    <div>
                      <strong>Registered Address:</strong>
                      <span>Jannath Complex, Naringana, Mangaluru, Konaje Proper, Karnataka 574199, India</span>
                    </div>
                  </div>

                  <div className={styles.officeItem}>
                    <Mail size={18} className={styles.officeIcon} />
                    <div>
                      <strong>Privacy Inquiries:</strong>
                      <a href="mailto:info@zaviroq.com">info@zaviroq.com</a>
                    </div>
                  </div>

                  <div className={styles.officeItem}>
                    <Phone size={18} className={styles.officeIcon} />
                    <div>
                      <strong>Direct Phone:</strong>
                      <a href="tel:+917483830582">+91 74 8383 0582</a>
                    </div>
                  </div>

                  <div className={styles.officeItem}>
                    <Globe size={18} className={styles.officeIcon} />
                    <div>
                      <strong>Regional Office (GCC):</strong>
                      <span>Dubai, United Arab Emirates &amp; Riyadh, KSA</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
