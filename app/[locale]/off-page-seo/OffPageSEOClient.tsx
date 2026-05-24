"use client";

import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Search, Link2, Globe, Users, FileText, BookOpen, Share2, BarChart, TrendingUp, Target, Sparkles, Shield, Award, Building2, Smartphone, Eye, Zap, Radio, ExternalLink, MessageSquare, Star, Briefcase, Plane, Rocket } from 'lucide-react';

const services = [
  { icon: Shield, title: 'White-Hat Link Building', desc: 'We build high-quality backlinks using ethical SEO practices focused on relevance, authority, and long-term ranking stability. Our backlink strategy focuses on niche relevance, authority websites, natural anchor text, contextual backlinks, and long-term SEO safety.' },
  { icon: BookOpen, title: 'Guest Posting Services', desc: 'Guest posting helps improve authority and online visibility through relevant industry publications and high-quality websites. We create valuable content and secure placements on trusted websites to improve backlink profiles naturally.' },
  { icon: Radio, title: 'Digital PR & Brand Mentions', desc: 'Digital PR helps businesses gain exposure across authoritative websites, media publications, and online platforms. We help brands build visibility through online mentions, PR outreach, media coverage, authority publications, and branded visibility campaigns.' },
  { icon: Building2, title: 'Local Citation Building', desc: 'Local citations improve local SEO performance by ensuring consistent business information across directories and local listing platforms. We optimize business directories, local listings, map citations, NAP consistency, and regional business profiles.' },
  { icon: Search, title: 'Competitor Backlink Analysis', desc: 'We analyze competitor backlink profiles to identify high-value link opportunities and authority gaps within your industry. This helps build smarter and more competitive off-page SEO campaigns.' },
  { icon: Share2, title: 'Social Signals & Brand Visibility', desc: 'Social engagement and online brand visibility contribute to overall digital authority. We help strengthen online presence through strategic brand exposure and content promotion.' },
  { icon: BarChart, title: 'Link Profile Audit', desc: 'We analyze backlink quality, anchor text distribution, toxic links, and overall domain authority to ensure your backlink profile remains healthy and penalty-free.' },
];

const whyFactors = [
  'Increase domain authority', 'Improve keyword rankings', 'Build brand credibility',
  'Increase organic traffic', 'Improve local SEO visibility', 'Strengthen trust signals',
  'Support long-term SEO growth', 'Improve search engine trust',
];

const processSteps = [
  { step: 'Step 1', title: 'Website & Competitor Analysis', desc: 'We analyze your website authority, backlink profile, and competitors.' },
  { step: 'Step 2', title: 'Strategy Development', desc: 'We create a customized off-page SEO strategy aligned with your business goals.' },
  { step: 'Step 3', title: 'Outreach & Link Acquisition', desc: 'We build authority through outreach, guest posting, PR campaigns, and citations.' },
  { step: 'Step 4', title: 'Link Monitoring', desc: 'We monitor backlink quality, authority metrics, and overall SEO impact.' },
  { step: 'Step 5', title: 'Continuous Optimization', desc: 'Off-page SEO requires ongoing authority building and monitoring for long-term growth.' },
];

const benefits = [
  { icon: TrendingUp, title: 'Increase Domain Authority', desc: 'Strong backlinks directly improve your website authority and trust.' },
  { icon: Target, title: 'Improve Search Rankings', desc: 'Authority signals help pages rank higher in competitive search results.' },
  { icon: Globe, title: 'Build Online Credibility', desc: 'Mentions on authoritative sites build brand trust and recognition.' },
  { icon: Users, title: 'Generate Organic Traffic', desc: 'Higher rankings and referral traffic drive sustainable organic growth.' },
  { icon: Eye, title: 'Strengthen Brand Awareness', desc: 'Digital PR and placements increase brand visibility across the web.' },
  { icon: Building2, title: 'Improve Local SEO', desc: 'Citations and local links strengthen regional search presence.' },
  { icon: ExternalLink, title: 'Increase Referral Traffic', desc: 'Backlinks from relevant sites send targeted referral visitors.' },
  { icon: Award, title: 'Support Long-Term Growth', desc: 'Sustainable authority building compounds over time.' },
];

const industries = [
  { name: 'Ecommerce', icon: ShoppingCart },
  { name: 'Healthcare', icon: Heart },
  { name: 'Real Estate', icon: Building2 },
  { name: 'SaaS', icon: CloudIcon },
  { name: 'Travel & Tourism', icon: Plane },
  { name: 'Corporate', icon: Briefcase },
  { name: 'Hospitality', icon: Hotel },
  { name: 'Startups', icon: Rocket },
];

const whyItems = [
  'White-hat SEO strategies', 'Transparent reporting', 'Quality-focused link building',
  'Long-term SEO solutions', 'AI-driven SEO insights', 'Niche-specific outreach campaigns',
];

const faqs = [
  { q: 'What is off-page SEO?', a: 'Off-page SEO refers to optimization activities outside your website that improve authority, trust, and search rankings. This includes backlinks, brand mentions, citations, and social signals.' },
  { q: 'Why are backlinks important for SEO?', a: 'Backlinks help search engines understand website authority and credibility, which can improve rankings. Quality backlinks from relevant sites signal trust and expertise to Google.' },
  { q: 'Are all backlinks good for SEO?', a: 'No. Low-quality or spam backlinks can harm rankings. Quality and relevance matter more than quantity. We focus exclusively on white-hat, high-authority link building.' },
  { q: 'What is white-hat link building?', a: 'White-hat link building uses ethical SEO strategies to earn high-quality backlinks naturally and safely. It avoids spam, PBNs, and manipulative tactics that could trigger Google penalties.' },
  { q: 'How long does off-page SEO take?', a: 'Off-page SEO is a long-term strategy, and results usually improve gradually over several months as new backlinks are indexed and authority compounds over time.' },
];

function ShoppingCart() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>; }
function Heart() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>; }
function CloudIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>; }
function Hotel() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"/><path d="M9 2v20"/><path d="M15 2v20"/><path d="M3 8h18"/><path d="M3 16h18"/></svg>; }

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://zaviroq.com' },
    { '@type': 'ListItem', position: 2, name: 'SEO Services', item: 'https://zaviroq.com/seo-services' },
    { '@type': 'ListItem', position: 3, name: 'Off-Page SEO Optimization' },
  ],
};

const orgSchema = {
  '@context': 'https://schema.org', '@type': 'Organization',
  name: 'ZAVIROQ', url: 'https://zaviroq.com', logo: 'https://zaviroq.com/logo.png',
  description: 'ZAVIROQ is an off-page SEO agency providing link building and authority optimization services in Saudi Arabia.',
};

const svcSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'Off-Page SEO Optimization',
  provider: { '@type': 'Organization', name: 'ZAVIROQ' },
  areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  description: 'Off-page SEO optimization services including white-hat link building, digital PR, guest posting, citation building, and authority-focused SEO strategies.',
};

export default function OffPageSEOClient() {
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
        <span className={styles.breadCurrent}>Off-Page SEO</span>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroGlowOrb} />
        <div className={styles.heroGlowOrb2} />
        <RevealOnScroll>
          <div className={styles.heroTag}>
            <span className={styles.tagDot} />
            Off-Page SEO
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={60}>
          <h1 className={styles.heroTitle}>Off-Page SEO <span className={styles.gradText}>Optimization Services</span></h1>
        </RevealOnScroll>
        <RevealOnScroll delay={110}>
          <p className={styles.heroSub}>Build Authority &amp; Improve Rankings with Off-Page SEO</p>
        </RevealOnScroll>
        <RevealOnScroll delay={140}>
          <p className={styles.heroDesc}>
            Zaviroq helps businesses strengthen search engine authority through strategic off-page SEO services including white-hat link building, digital PR, guest posting, citation management, and brand visibility optimization.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={170}>
          <div className={styles.heroCta}>
            <Link href="/contact" className={styles.heroBtnPrimary}>Request SEO Consultation <ArrowRight size={16} /></Link>
            <Link href="/contact" className={styles.heroBtnSecondary}>Get Free SEO Audit</Link>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={200}>
          <div className={styles.trustPoints}>
            {['White-Hat Link Building', 'Authority Backlink Strategy', 'Digital PR Outreach', 'Local Citation Building', 'Long-Term SEO Growth'].map((point, i) => (
              <motion.span key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.1 }}><Check size={14} /> {point}</motion.span>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      <section className={styles.introSection}>
        <div className={styles.introLayout}>
          <RevealOnScroll>
            <div className={styles.introContent}>
              <span className={styles.sectionBadge}>Introduction</span>
              <h2>What is Off-Page SEO?</h2>
              <p>Off-page SEO refers to optimization activities performed outside your website to improve search engine rankings, domain authority, online reputation, and brand trust.</p>
              <p>The primary goal of off-page SEO is to help search engines understand the credibility and popularity of your website through signals such as backlinks, mentions, citations, reviews, and online authority.</p>
              <p>At Zaviroq, we focus on ethical and white-hat off-page SEO strategies that improve long-term rankings without risking Google penalties or spam-related issues.</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className={styles.introVisual}>
              <div className={styles.introStatCard}>
                <span className={styles.introStatNum}>70+</span>
                <span className={styles.introStatLabel}>Domain Authority Growth</span>
              </div>
              <div className={styles.introStatCard}>
                <span className={styles.introStatNum}>50%</span>
                <span className={styles.introStatLabel}>Avg. Ranking Improvement</span>
              </div>
              <div className={styles.introStatCard}>
                <span className={styles.introStatNum}>100%</span>
                <span className={styles.introStatLabel}>White-Hat Guarantee</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className={styles.whySection}>
        <div className={styles.whyBgGlow} />
        <RevealOnScroll>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Why It Matters</span>
            <h2>Why Off-Page SEO is Important</h2>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={80}>
          <p className={styles.whyLead}>Search engines use off-page signals to determine the trustworthiness and authority of a website. Even well-optimized websites may struggle to rank without strong external authority.</p>
        </RevealOnScroll>
        <div className={styles.whyGrid}>
          {[
            { icon: Award, title: 'Authority', desc: 'Increase domain authority' },
            { icon: TrendingUp, title: 'Rankings', desc: 'Improve keyword rankings' },
            { icon: Star, title: 'Credibility', desc: 'Build brand credibility' },
            { icon: Globe, title: 'Traffic', desc: 'Increase organic traffic' },
            { icon: Building2, title: 'Local SEO', desc: 'Improve local SEO visibility' },
            { icon: Shield, title: 'Trust', desc: 'Strengthen trust signals' },
            { icon: Zap, title: 'Growth', desc: 'Support long-term SEO growth' },
            { icon: ExternalLink, title: 'Trust', desc: 'Improve search engine trust' },
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

      <section className={styles.servicesSection}>
        <RevealOnScroll>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Our Services</span>
            <h2>Our Off-Page SEO Services</h2>
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

      <section className={styles.ethicsSection}>
        <div className={styles.ethicsBgPattern} />
        <RevealOnScroll>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Safe &amp; Ethical</span>
            <h2>White-Hat Off-Page SEO Strategies</h2>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={80}>
          <p className={styles.ethicsLead}>Zaviroq follows safe and ethical SEO practices designed for long-term growth and Google compliance.</p>
        </RevealOnScroll>
        <div className={styles.ethicsGrid}>
          <div className={styles.ethicsCol}>
            <h3>We Avoid</h3>
            {['Spam backlinks', 'Private blog networks (PBNs)', 'Link farms', 'Automated backlinks', 'Black-hat SEO techniques', 'Keyword stuffing'].map((item, i) => (
              <motion.div key={i} className={styles.ethicsItemBad} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <span className={styles.ethicsCross}><span className={styles.ethicsCrossInner} /></span> {item}
              </motion.div>
            ))}
          </div>
          <div className={styles.ethicsCol}>
            <h3>We Focus On</h3>
            {['Industry-relevant websites', 'Authority publications', 'Niche blogs', 'Local directories', 'Media platforms', 'Editorial placements'].map((item, i) => (
              <motion.div key={i} className={styles.ethicsItemGood} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <span className={styles.ethicsCheck}><Check size={12} /></span> {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <RevealOnScroll>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Process</span>
            <h2>Our Off-Page SEO Process</h2>
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

      <section className={styles.benefitsSection}>
        <div className={styles.benefitsBgGlow} />
        <RevealOnScroll>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Benefits</span>
            <h2>Benefits of Off-Page SEO Optimization</h2>
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

      <section className={styles.whyZaviroqSection}>
        <RevealOnScroll>
          <div className={styles.whyZaviroqCard}>
            <div className={styles.whyZaviroqGlow} />
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>Why Zaviroq</span>
              <h2>Why Choose Zaviroq for Off-Page SEO Services</h2>
            </div>
            <p className={styles.whyZaviroqText}>Zaviroq focuses on modern, ethical, and authority-driven off-page SEO strategies that help businesses grow sustainably in competitive search markets.</p>
            <div className={styles.whyZaviroqGrid}>
              {whyItems.map((item, i) => (
                <motion.div key={i} className={styles.whyZaviroqItem} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <span className={styles.whyZaviroqCheck}><Check size={14} /></span>
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className={styles.industriesSection}>
        <RevealOnScroll>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Industries</span>
            <h2>Industries We Work With</h2>
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

      <section className={styles.ctaSection}>
        <div className={styles.ctaGlowOrb} />
        <div className={styles.ctaGlowOrb2} />
        <RevealOnScroll>
          <div className={styles.ctaInner}>
            <span className={styles.ctaBadge}>Get Started</span>
            <h2 className={styles.ctaTitle}>Ready to Build Stronger Search Authority?</h2>
            <p className={styles.ctaText}>Partner with Zaviroq for professional off-page SEO services focused on high-quality backlinks, digital authority, and long-term organic growth.</p>
            <div className={styles.ctaBtns}>
              <Link href="/contact" className={styles.ctaBtnPrimary}>Get Free SEO Audit <ArrowRight size={16} /></Link>
              <Link href="/contact" className={styles.ctaBtnOutline}>Contact Our SEO Experts</Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
}
