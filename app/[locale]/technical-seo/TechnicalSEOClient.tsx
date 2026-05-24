"use client";

import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Search, Zap, Smartphone, FileCode, Shield, Activity, BarChart, Gauge, GitBranch, Globe, Layers, Cog, Code2, Database, Server, Users, Building2, TrendingUp, Target, Sparkles, Briefcase, Plane, UtensilsCrossed, Rocket } from 'lucide-react';

const services = [
  { icon: Search, title: 'Technical SEO Audit', desc: 'We perform comprehensive technical SEO audits to identify hidden issues affecting search rankings and website performance. Our audit covers crawlability, indexing, site architecture, page speed, broken links, redirects, duplicate content, and technical errors.' },
  { icon: Gauge, title: 'Website Speed Optimization', desc: 'Website speed is a major ranking factor. We optimize loading performance by compressing images, improving caching, minimizing scripts, reducing render-blocking resources, and optimizing server response times.' },
  { icon: Activity, title: 'Core Web Vitals Optimization', desc: 'We improve Core Web Vitals metrics including Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS). Optimizing these metrics improves both SEO performance and user experience.' },
  { icon: GitBranch, title: 'Crawlability & Indexing Optimization', desc: 'Our team ensures search engines can properly crawl and index important pages by optimizing XML sitemaps, Robots.txt, internal linking, canonical tags, crawl depth, and redirect structures.' },
  { icon: Smartphone, title: 'Mobile SEO Optimization', desc: 'Mobile usability plays a critical role in modern SEO. We optimize websites for responsive design, mobile performance, usability, and mobile-first indexing standards.' },
  { icon: Database, title: 'Structured Data & Schema Markup', desc: 'We implement schema markup to help search engines better understand your content and improve rich result visibility. Schema types include Organization, FAQ, Service, Breadcrumb, Article, and Local Business.' },
  { icon: Shield, title: 'HTTPS & Website Security', desc: 'Secure websites improve trust and SEO performance. We ensure proper HTTPS implementation, SSL configuration, and secure technical practices.' },
];

const commonIssues = [
  'Slow website speed', 'Crawl errors', 'Broken internal links', 'Duplicate content',
  'Poor mobile usability', 'Redirect chains', 'Improper canonical tags', 'Missing schema markup',
  'Indexing problems', 'JavaScript rendering issues', 'Large image sizes', 'Server response delays',
  'Orphan pages', 'XML sitemap errors',
];

const processSteps = [
  { step: 'Step 1', title: 'Technical Website Audit', desc: 'We analyze your website structure, performance, indexing, and crawlability.' },
  { step: 'Step 2', title: 'Error Identification', desc: 'We identify technical SEO issues affecting rankings and user experience.' },
  { step: 'Step 3', title: 'Optimization & Fixes', desc: 'Our team implements technical improvements across the website.' },
  { step: 'Step 4', title: 'Performance Testing', desc: 'We monitor website speed, crawl efficiency, and SEO performance.' },
  { step: 'Step 5', title: 'Ongoing Optimization', desc: 'Technical SEO requires continuous monitoring and updates as algorithms evolve.' },
];

const tools = [
  { name: 'Google Search Console', cat: 'crawl' },
  { name: 'Screaming Frog', cat: 'crawl' },
  { name: 'Ahrefs', cat: 'analysis' },
  { name: 'SEMrush', cat: 'analysis' },
  { name: 'Google PageSpeed Insights', cat: 'performance' },
  { name: 'GTmetrix', cat: 'performance' },
  { name: 'Lighthouse', cat: 'performance' },
  { name: 'Cloudflare Analytics', cat: 'monitoring' },
];

const benefits = [
  { icon: TrendingUp, title: 'Higher Google Rankings', desc: 'Technical optimization directly improves your position in search results.' },
  { icon: Gauge, title: 'Faster Website Performance', desc: 'Optimized code, caching, and servers deliver sub-second load times.' },
  { icon: Users, title: 'Better User Experience', desc: 'Fast, responsive sites keep visitors engaged and reduce bounce rates.' },
  { icon: Globe, title: 'Improved Crawl Efficiency', desc: 'Search engines discover and index your content more effectively.' },
  { icon: Smartphone, title: 'Increased Mobile Usability', desc: 'Perfect mobile experience satisfies both users and Google.' },
  { icon: BarChart, title: 'Higher Organic Traffic', desc: 'Better rankings and visibility drive consistent organic growth.' },
  { icon: Target, title: 'Better Conversion Rates', desc: 'Optimized performance and usability turn visitors into customers.' },
  { icon: Shield, title: 'Enhanced Security', desc: 'SSL, HTTPS, and security best practices build trust and rankings.' },
  { icon: Layers, title: 'Stronger SEO Foundation', desc: 'A technically sound site supports all future marketing efforts.' },
];

const industries = [
  { name: 'Ecommerce', icon: ShoppingCart },
  { name: 'Healthcare', icon: Heart },
  { name: 'Real Estate', icon: Building2 },
  { name: 'SaaS', icon: Cloud },
  { name: 'Corporate', icon: Briefcase },
  { name: 'Travel & Tourism', icon: Plane },
  { name: 'Restaurants', icon: UtensilsCrossed },
  { name: 'Startups', icon: Rocket },
];

const faqs = [
  { q: 'What is technical SEO optimization?', a: 'Technical SEO optimization improves a website\'s infrastructure to help search engines crawl, index, and rank pages effectively. It focuses on backend elements like site speed, mobile usability, crawlability, and structured data rather than content or keywords.' },
  { q: 'Why is technical SEO important?', a: 'Technical SEO helps improve rankings, website speed, indexing, user experience, and overall search visibility. Without a strong technical foundation, even the best content may fail to rank effectively.' },
  { q: 'How long does technical SEO take?', a: 'Initial improvements can often be seen within a few weeks, while long-term SEO growth depends on website competition and optimization quality. Core Web Vitals fixes and crawl optimizations typically show results fastest.' },
  { q: 'Does website speed affect SEO?', a: 'Yes. Website speed and Core Web Vitals are important Google ranking factors. Google has confirmed that page experience signals, including loading performance, directly impact search rankings.' },
  { q: 'Do you provide technical SEO audits?', a: 'Yes. Zaviroq provides comprehensive technical SEO audits with detailed recommendations and optimization strategies. Each audit covers 100+ technical checkpoints across crawlability, indexing, performance, mobile, and security.' },
];

function ShoppingCart() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>; }
function Heart() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>; }
function Cloud() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>; }

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://zaviroq.com' },
    { '@type': 'ListItem', position: 2, name: 'SEO Services', item: 'https://zaviroq.com/seo-services' },
    { '@type': 'ListItem', position: 3, name: 'Technical SEO Optimization' },
  ],
};

const orgSchema = {
  '@context': 'https://schema.org', '@type': 'Organization',
  name: 'ZAVIROQ', url: 'https://zaviroq.com', logo: 'https://zaviroq.com/logo.png',
  description: 'ZAVIROQ is a technical SEO agency providing optimization services in Saudi Arabia.',
};

const svcSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'Technical SEO Optimization',
  provider: { '@type': 'Organization', name: 'ZAVIROQ' },
  areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  description: 'Technical SEO optimization services including Core Web Vitals, crawlability, indexing, site speed, and schema markup.',
};

export default function TechnicalSEOClient() {
  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(svcSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />

      <div className={styles.gridLines} aria-hidden="true" />

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className={styles.breadSep}>›</span>
        <Link href="/seo-services">SEO Services</Link>
        <span className={styles.breadSep}>›</span>
        <span className={styles.breadCurrent}>Technical SEO</span>
      </nav>

      {/* ══ HERO ══ */}
      <section className={styles.hero}>
        <div className={styles.heroGlowOrb} />
        <div className={styles.heroGlowOrb2} />
        <RevealOnScroll>
          <div className={styles.heroTag}>
            <span className={styles.tagDot} />
            Technical SEO
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={60}>
          <h1 className={styles.heroTitle}>Technical SEO <span className={styles.gradText}>Optimization Services</span></h1>
        </RevealOnScroll>
        <RevealOnScroll delay={110}>
          <p className={styles.heroSub}>Fix Technical SEO Issues &amp; Improve Google Rankings</p>
        </RevealOnScroll>
        <RevealOnScroll delay={140}>
          <p className={styles.heroDesc}>
            Zaviroq provides advanced technical SEO optimization services to improve website performance, crawlability, indexing, Core Web Vitals, and search engine visibility for businesses in Saudi Arabia and beyond.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={170}>
          <div className={styles.heroCta}>
            <Link href="/contact" className={styles.heroBtnPrimary}>Request Technical SEO Audit <ArrowRight size={16} /></Link>
            <Link href="/contact" className={styles.heroBtnSecondary}>Book Free Consultation</Link>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={200}>
          <div className={styles.trustPoints}>
            {['Core Web Vitals Optimization', 'Website Speed Improvements', 'Mobile SEO Optimization', 'Schema Markup Setup', 'Crawl & Index Optimization'].map((point, i) => (
              <motion.span key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.1 }}><Check size={14} /> {point}</motion.span>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      {/* ══ SECTION 1 — INTRODUCTION ══ */}
      <section className={styles.introSection}>
        <div className={styles.introLayout}>
          <RevealOnScroll>
            <div className={styles.introContent}>
              <span className={styles.sectionBadge}>Introduction</span>
              <h2>What is Technical SEO?</h2>
              <p>Technical SEO is the process of optimizing your website&apos;s infrastructure to help search engines crawl, index, and rank your pages more effectively. A technically optimized website improves user experience, website speed, mobile usability, security, and overall search visibility.</p>
              <p>At Zaviroq, we focus on identifying and fixing technical SEO problems that prevent websites from achieving higher rankings on Google. From website architecture and crawl errors to Core Web Vitals and schema markup, our technical SEO experts ensure your website is fully optimized for modern search engines.</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className={styles.introVisual}>
              <div className={styles.introStatCard}>
                <span className={styles.introStatNum}>100+</span>
                <span className={styles.introStatLabel}>Technical Checkpoints</span>
              </div>
              <div className={styles.introStatCard}>
                <span className={styles.introStatNum}>40%</span>
                <span className={styles.introStatLabel}>Avg. Speed Improvement</span>
              </div>
              <div className={styles.introStatCard}>
                <span className={styles.introStatNum}>3x</span>
                <span className={styles.introStatLabel}>Crawl Efficiency Gain</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ══ SECTION 2 — WHY IT MATTERS ══ */}
      <section className={styles.whySection}>
        <div className={styles.whyBgGlow} />
        <RevealOnScroll>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Why It Matters</span>
            <h2>Why Technical SEO is Important for Rankings</h2>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={80}>
          <p className={styles.whyLead}>Even high-quality content may struggle to rank if a website has technical SEO issues. Search engines prioritize websites that are fast, mobile-friendly, secure, and easy to crawl.</p>
        </RevealOnScroll>
        <div className={styles.whyGrid}>
          {[
            { icon: Zap, title: 'Speed', desc: 'Improve website loading speed' },
            { icon: GitBranch, title: 'Crawl', desc: 'Increase crawl efficiency' },
            { icon: FileCode, title: 'Index', desc: 'Fix indexing issues' },
            { icon: Smartphone, title: 'Mobile', desc: 'Enhance mobile usability' },
            { icon: Users, title: 'UX', desc: 'Improve user experience' },
            { icon: Layers, title: 'Structure', desc: 'Strengthen website architecture' },
            { icon: TrendingUp, title: 'Visibility', desc: 'Increase organic visibility' },
            { icon: Target, title: 'Growth', desc: 'Support long-term SEO growth' },
          ].map((item, i) => (
            <RevealOnScroll key={i} delay={i * 60}>
              <div className={styles.whyCard}>
                <div className={styles.whyCardIcon}><item.icon size={18} /></div>
                <div>
                  <span className={styles.whyCardTitle}>{item.title}</span>
                  <span className={styles.whyCardDesc}>{item.desc}</span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ══ SECTION 3 — SERVICES ══ */}
      <section className={styles.servicesSection}>
        <RevealOnScroll>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Our Services</span>
            <h2>Our Technical SEO Optimization Services</h2>
          </div>
        </RevealOnScroll>
        <div className={styles.servicesGrid}>
          {services.map((svc, i) => (
            <RevealOnScroll key={i} delay={i * 60}>
              <div className={styles.serviceCard} style={{ '--card-order': i } as React.CSSProperties}>
                <div className={styles.serviceCardTop}>
                  <div className={styles.serviceCardIcon}><svc.icon size={20} /></div>
                  <span className={styles.serviceCardNum}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ══ SECTION 4 — ISSUES ══ */}
      <section className={styles.issuesSection}>
        <div className={styles.issuesBgPattern} />
        <RevealOnScroll>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Issues We Fix</span>
            <h2>Common Technical SEO Problems We Fix</h2>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={80}>
          <div className={styles.issuesGrid}>
            {commonIssues.map((issue, i) => (
              <motion.div
                key={i}
                className={styles.issueItem}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <span className={styles.issueCross}><span className={styles.issueCrossInner} /></span>
                {issue}
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      {/* ══ SECTION 5 — PROCESS ══ */}
      <section className={styles.processSection}>
        <RevealOnScroll>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Process</span>
            <h2>Our Technical SEO Optimization Process</h2>
          </div>
        </RevealOnScroll>
        <div className={styles.processTimeline}>
          {processSteps.map((ps, i) => (
            <RevealOnScroll key={i} delay={i * 80}>
              <div className={styles.processStep}>
                <div className={styles.processStepConnector}>
                  <div className={styles.processStepDot}>
                    <span>{i + 1}</span>
                  </div>
                  {i < processSteps.length - 1 && <div className={styles.processStepLine} />}
                </div>
                <div className={styles.processStepCard}>
                  <span className={styles.processStepTag}>{ps.step}</span>
                  <h3>{ps.title}</h3>
                  <p>{ps.desc}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ══ SECTION 6 — TOOLS ══ */}
      <section className={styles.toolsSection}>
        <RevealOnScroll>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Tools</span>
            <h2>Technical SEO Tools We Use</h2>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={80}>
          <p className={styles.toolsLead}>Our technical SEO specialists use advanced SEO tools to identify weaknesses and optimize performance.</p>
        </RevealOnScroll>
        <div className={styles.toolsGrid}>
          {tools.map((tool, i) => (
            <RevealOnScroll key={i} delay={i * 50}>
              <div className={styles.toolCard}>
                <div className={styles.toolCardIcon}>
                  {tool.cat === 'crawl' ? <Search size={16} /> : tool.cat === 'analysis' ? <BarChart size={16} /> : tool.cat === 'performance' ? <Gauge size={16} /> : <Server size={16} />}
                </div>
                <span className={styles.toolCardName}>{tool.name}</span>
                <span className={styles.toolCardCat}>{tool.cat}</span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ══ SECTION 7 — BENEFITS ══ */}
      <section className={styles.benefitsSection}>
        <div className={styles.benefitsBgGlow} />
        <RevealOnScroll>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Benefits</span>
            <h2>Benefits of Technical SEO Optimization</h2>
          </div>
        </RevealOnScroll>
        <div className={styles.benefitsGrid}>
          {benefits.map((b, i) => (
            <RevealOnScroll key={i} delay={i * 60}>
              <div className={styles.benefitCard}>
                <div className={styles.benefitCardIcon}><b.icon size={20} /></div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ══ SECTION 8 — WHY ZAVIROQ ══ */}
      <section className={styles.whyZaviroqSection}>
        <RevealOnScroll>
          <div className={styles.whyZaviroqCard}>
            <div className={styles.whyZaviroqGlow} />
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>Why Zaviroq</span>
              <h2>Why Choose Zaviroq for Technical SEO Services</h2>
            </div>
            <p className={styles.whyZaviroqText}>Zaviroq delivers modern technical SEO solutions focused on long-term search visibility and website performance. Our team combines technical expertise, AI-driven analysis, and modern SEO strategies to optimize websites for both users and search engines.</p>
            <div className={styles.whyZaviroqGrid}>
              {[
                { icon: Check, text: 'Transparent SEO practices' },
                { icon: Check, text: 'White-hat optimization' },
                { icon: Check, text: 'Performance-focused solutions' },
                { icon: Check, text: 'Scalable SEO strategies' },
                { icon: Check, text: 'Advanced technical expertise' },
              ].map((item, i) => (
                <motion.div key={i} className={styles.whyZaviroqItem} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <span className={styles.whyZaviroqCheck}><item.icon size={14} /></span>
                  {item.text}
                </motion.div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* ══ SECTION 9 — INDUSTRIES ══ */}
      <section className={styles.industriesSection}>
        <RevealOnScroll>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Industries</span>
            <h2>Industries We Support</h2>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={80}>
          <div className={styles.industriesGrid}>
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                className={styles.industryCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <div className={styles.industryCardIcon}><ind.icon /></div>
                <span>{ind.name}</span>
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      {/* ══ SECTION 10 — FAQ ══ */}
      <section className={styles.faqSection}>
        <RevealOnScroll>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </div>
        </RevealOnScroll>
        <div className={styles.faqList}>
          {faqs.map((faq, i) => (
            <RevealOnScroll key={i} delay={i * 50}>
              <details className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  <span>{faq.q}</span>
                  <span className={styles.faqIcon}><Sparkles size={14} /></span>
                </summary>
                <p className={styles.faqAnswer}>{faq.a}</p>
              </details>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGlowOrb} />
        <div className={styles.ctaGlowOrb2} />
        <RevealOnScroll>
          <div className={styles.ctaInner}>
            <span className={styles.ctaBadge}>Get Started</span>
            <h2 className={styles.ctaTitle}>Ready to Improve Your Website&apos;s Technical SEO?</h2>
            <p className={styles.ctaText}>Partner with Zaviroq to optimize your website&apos;s performance, search visibility, and technical SEO foundation for long-term organic growth.</p>
            <div className={styles.ctaBtns}>
              <Link href="/contact" className={styles.ctaBtnPrimary}>Get Free SEO Audit <ArrowRight size={16} /></Link>
              <Link href="/contact" className={styles.ctaBtnOutline}>Contact Our SEO Team</Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
}
