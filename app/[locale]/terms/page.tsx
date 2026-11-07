import { Metadata } from 'next';
import Link from 'next/link';
import styles from '../legal.module.css';
import { 
  FileText, ShieldCheck, CheckCircle2, ChevronRight, 
  MapPin, Phone, Mail, Globe, Lock, Scale, Award, Terminal
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service & Agency Engagement Charter | Zaviroq',
  description: 'Review the commercial terms, statement of work standards, code ownership, and service level agreements for engaging with Zaviroq digital agency.',
  alternates: {
    canonical: 'https://www.zaviroq.com/terms',
  },
  openGraph: {
    title: 'Terms of Service | Zaviroq',
    description: 'Commercial agreements, intellectual property transfer, and service level standards for Zaviroq agency clients.',
    url: 'https://www.zaviroq.com/terms',
    siteName: 'Zaviroq',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  const tableOfContents = [
    { id: 'section-1', title: '1. Agreement & Authority' },
    { id: 'section-2', title: '2. Scopes of Work (SOW)' },
    { id: 'section-3', title: '3. Retainers & Payments' },
    { id: 'section-4', title: '4. IP & Code Ownership' },
    { id: 'section-5', title: '5. Search Algorithm Safe-Harbor' },
    { id: 'section-6', title: '6. Mutual NDA & Confidentiality' },
    { id: 'section-7', title: '7. Client Dependencies & Approvals' },
    { id: 'section-8', title: '8. Liability & Warranties' },
    { id: 'section-9', title: '9. Term & Orderly Transition' },
    { id: 'section-10', title: '10. Jurisdiction & Registered Office' },
  ];

  return (
    <div className={styles.legalWrapper}>
      <div className={styles.ambientGlowTop} />

      <div className={styles.container}>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className={styles.breadcrumbNav}>
          <Link href="/" className={styles.breadcrumbLink}>Home</Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span className={styles.breadcrumbCurrent}>Terms of Service</span>
        </nav>

        {/* Hero Header */}
        <header className={styles.heroHeader}>
          <div className={styles.complianceBadge}>
            <Scale size={14} />
            <span>Commercial Master Service Agreement</span>
          </div>

          <h1 className={styles.pageTitle}>
            Terms of Service &amp; <span className={styles.gradientAccent}>Agency Engagement</span>
          </h1>

          <p className={styles.heroSubtitle}>
            These Terms of Service govern all business engagements, custom software engineering deliverables, performance marketing retainers, and technical consultations with Zaviroq.
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
              <strong>Applies To:</strong>
              <span>India, United Arab Emirates, Saudi Arabia &amp; Global Contracts</span>
            </div>
          </div>
        </header>

        {/* Main 2-Column Layout */}
        <div className={styles.layoutGrid}>
          {/* Left Sticky Table of Contents */}
          <aside className={styles.tocSidebar}>
            <h3 className={styles.tocTitle}>
              <FileText size={14} />
              <span>Agreement Index</span>
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
                <span>100% Code IP Transfer</span>
              </div>
              <div className={styles.trustPill}>
                <Lock size={14} />
                <span>Strict Mutual NDA</span>
              </div>
              <div className={styles.trustPill}>
                <Award size={14} />
                <span>SLA-Backed Milestones</span>
              </div>
            </div>
          </aside>

          {/* Right Detailed Content Area */}
          <main className={styles.contentArea}>
            {/* Key Commitment Callout */}
            <div className={styles.calloutBox}>
              <div className={styles.calloutIcon}>
                <Award size={20} />
              </div>
              <div>
                <h4 className={styles.calloutTitle}>Client Ownership &amp; Transparency Principle</h4>
                <p className={styles.calloutText}>
                  Upon invoice settlement, you own 100% of custom frontend codebases, marketing creative assets, copy, and database schemas engineered for your brand. Zaviroq never holds client intellectual property hostage.
                </p>
              </div>
            </div>

            {/* Section 1 */}
            <section id="section-1" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumBadge}>01</span>
                <h2 className={styles.sectionTitle}>Agreement to Terms &amp; Authority</h2>
              </div>
              <p className={styles.paragraph}>
                By accessing this website, signing a Statement of Work (SOW), issuing a corporate Purchase Order (PO), or approving an official proposal from <strong>Zaviroq</strong>, you confirm that you have the legal authority to bind yourself or the corporate entity you represent to these Terms of Service.
              </p>
              <p className={styles.paragraph}>
                These Terms constitute a legally binding agreement between you and <strong>Zaviroq</strong>. In the event of any direct conflict between these general Terms and an executed custom Statement of Work (SOW), the provisions of the specific SOW shall take precedence.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section-2" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumBadge}>02</span>
                <h2 className={styles.sectionTitle}>Scope of Services &amp; Statements of Work</h2>
              </div>
              <p className={styles.paragraph}>
                Zaviroq delivers high-performance digital marketing, algorithmic SEO, web application development, and brand strategy across diverse industries.
              </p>
              <div className={styles.pointsGrid}>
                <div className={styles.pointItem}>
                  <h4 className={styles.pointTitle}>Detailed Deliverables</h4>
                  <p className={styles.pointDesc}>Each project is governed by a defined SOW establishing exact phases, architecture blueprints, KPIs, milestones, and deliverable dates.</p>
                </div>
                <div className={styles.pointItem}>
                  <h4 className={styles.pointTitle}>Change Requests</h4>
                  <p className={styles.pointDesc}>Any requests to alter project parameters, add features, or adjust scope outside the initial SOW are managed via documented written Change Orders.</p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section-3" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumBadge}>03</span>
                <h2 className={styles.sectionTitle}>Commercial Retainers, Invoicing &amp; Payment Terms</h2>
              </div>
              <p className={styles.paragraph}>
                Unless otherwise explicitly agreed in writing within an active SOW:
              </p>
              <ul className={styles.bulletList}>
                <li><strong>Fixed-Scope Projects:</strong> Billed on a milestone basis (typically 50% mobilization deposit upon project initiation, 25% upon approved beta staging, and 25% prior to live production deployment).</li>
                <li><strong>Monthly Marketing Retainers:</strong> Invoiced in advance on the 1st of each calendar month with Net-15 payment terms. Ad spend budgets are paid directly by the client to advertising platforms (Google Ads, Meta Ads) unless managed spend arrangements are documented.</li>
                <li><strong>Taxes:</strong> Fees are exclusive of applicable Goods and Services Tax (GST in India) or Value Added Tax (VAT in UAE/KSA), which are added to invoices as mandated by tax authorities.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="section-4" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumBadge}>04</span>
                <h2 className={styles.sectionTitle}>Intellectual Property &amp; Code Ownership</h2>
              </div>
              <p className={styles.paragraph}>
                We believe in total client empowerment:
              </p>
              <ul className={styles.bulletList}>
                <li><strong>Client Deliverable IP:</strong> Upon receipt of full settlement for the corresponding milestone or contract, all right, title, and interest in bespoke code, designs, and content created specifically for the client transfer completely to the client.</li>
                <li><strong>Zaviroq Core IP:</strong> Pre-existing proprietary modules, internal deployment scripts, boilerplate architectures, and reusable frameworks developed by Zaviroq remain the intellectual property of Zaviroq. The client is granted a perpetual, non-exclusive, royalty-free license to use such elements as incorporated into their deliverable.</li>
                <li><strong>Client Materials:</strong> The client retains sole ownership of all pre-existing trademarks, assets, brand data, and collateral provided to Zaviroq for project execution.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="section-5" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumBadge}>05</span>
                <h2 className={styles.sectionTitle}>Search Algorithm &amp; Third-Party Platform Safe-Harbor</h2>
              </div>
              <p className={styles.paragraph}>
                While our marketing architects apply rigorous, white-hat engineering standards to maximize organic rankings and paid advertising returns:
              </p>
              <ul className={styles.bulletList}>
                <li>Search engine rankings, crawling frequency, and indexing timeframes are subject to third-party algorithm updates (Google Core Updates, Bing, AI search engines) that operate independently of any agency.</li>
                <li>Zaviroq does not make deceptive or fraudulent guarantees of permanent &quot;#1 rank overnight&quot;, but guarantees adherence to industry best practices, structured semantic markup, and measurable performance monitoring.</li>
                <li>Third-party platform policy enforcements, API changes, or ad account suspension by Google or Meta due to client product nature remain external contingencies outside agency control.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="section-6" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumBadge}>06</span>
                <h2 className={styles.sectionTitle}>Mutual Confidentiality &amp; Non-Disclosure (NDA)</h2>
              </div>
              <p className={styles.paragraph}>
                Both parties agree that any proprietary information, client customer records, trade secrets, unpublished financial numbers, and technical documentation shared during the engagement are strictly confidential.
              </p>
              <p className={styles.paragraph}>
                Neither party shall disclose confidential information to any third party without prior written authorization, except as required by applicable court subpoenas or law enforcement regulations.
              </p>
            </section>

            {/* Section 7 */}
            <section id="section-7" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumBadge}>07</span>
                <h2 className={styles.sectionTitle}>Client Dependencies &amp; Approvals</h2>
              </div>
              <p className={styles.paragraph}>
                Timely deliverable completion depends upon prompt client collaboration. The client agrees to provide necessary brand assets, DNS access, API credentials, and review approvals within agreed sprint review windows (typically 3 to 5 business days).
              </p>
            </section>

            {/* Section 8 */}
            <section id="section-8" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumBadge}>08</span>
                <h2 className={styles.sectionTitle}>Warranties &amp; Limitation of Liability</h2>
              </div>
              <p className={styles.paragraph}>
                Zaviroq warrants that all deliverables will be executed in a professional, workmanlike manner adhering to modern software engineering, accessibility, and cybersecurity guidelines.
              </p>
              <p className={styles.paragraph}>
                To the maximum extent permitted by applicable law, neither party shall be liable for indirect, incidental, or consequential damages (including loss of business profits or data interruption). In all circumstances, Zaviroq&apos;s total aggregate liability arising out of any engagement shall not exceed the total fees paid by the client under the specific SOW during the three (3) months preceding the claim.
              </p>
            </section>

            {/* Section 9 */}
            <section id="section-9" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumBadge}>09</span>
                <h2 className={styles.sectionTitle}>Term, Termination &amp; Orderly Transition</h2>
              </div>
              <p className={styles.paragraph}>
                Either party may terminate an ongoing service agreement upon thirty (30) days written notice. In the event of early termination, the client shall compensate Zaviroq for all completed milestones and approved hours incurred up to the termination date.
              </p>
              <p className={styles.paragraph}>
                Upon final settlement, Zaviroq will provide orderly code handover, repository ownership transfer, and credential transition.
              </p>
            </section>

            {/* Section 10 */}
            <section id="section-10" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumBadge}>10</span>
                <h2 className={styles.sectionTitle}>Governing Law &amp; Registered Office</h2>
              </div>
              <p className={styles.paragraph}>
                These Terms shall be governed by and construed in accordance with the substantive laws of India, or the laws of the jurisdiction specified in an individual SOW (such as the Emirate of Dubai for UAE contracts). Both parties agree to attempt amicable executive resolution prior to commencing arbitration proceedings.
              </p>

              <div className={styles.officeContactBox}>
                <h4 style={{ margin: '0 0 12px', fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main, #0f172a)' }}>
                  Zaviroq Commercial Contracting Office
                </h4>
                <div className={styles.officeContactGrid}>
                  <div className={styles.officeItem}>
                    <MapPin size={18} className={styles.officeIcon} />
                    <div>
                      <strong>Registered Headquarters:</strong>
                      <span>Jannath Complex, Naringana, Mangaluru, Konaje Proper, Karnataka 574199, India</span>
                    </div>
                  </div>

                  <div className={styles.officeItem}>
                    <Mail size={18} className={styles.officeIcon} />
                    <div>
                      <strong>Commercial Inquiries:</strong>
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
                      <strong>International Hubs:</strong>
                      <span>Dubai, United Arab Emirates &amp; Riyadh, Saudi Arabia</span>
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
