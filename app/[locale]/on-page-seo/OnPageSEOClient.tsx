"use client";

import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Search, FileText, Tag, Layers, Link2, Image, Brain, Globe, BarChart, TrendingUp, Target, Users, Sparkles, BookOpen, Hash, Layout, PenTool, Share2, Zap, Smartphone, Eye, Package, Briefcase, Plane, Rocket } from 'lucide-react';

const services = [
  { icon: Search, title: 'Keyword Research & Targeting', desc: 'We identify high-value keywords based on search intent, competition, and business goals. Our keyword strategy focuses on primary keywords, secondary keywords, semantic variations, and long-tail search opportunities.' },
  { icon: BookOpen, title: 'SEO Content Optimization', desc: 'Our team optimizes website content for readability, relevance, search intent, and semantic SEO. We improve content structure while naturally integrating target keywords for better ranking potential.' },
  { icon: Tag, title: 'Meta Title & Description Optimization', desc: 'Optimized meta titles and descriptions improve both rankings and click-through rates. We create compelling metadata that helps search engines and users understand page relevance.' },
  { icon: Layers, title: 'Heading Structure Optimization', desc: 'We optimize heading hierarchy using H1, H2, H3, and structured content formatting to improve content organization, readability, and search engine understanding.' },
  { icon: Link2, title: 'Internal Linking Optimization', desc: 'Internal linking improves crawlability, user navigation, and topical authority. We create strategic internal linking structures that strengthen SEO performance across the website.' },
  { icon: Image, title: 'Image SEO Optimization', desc: 'Images are optimized using descriptive alt text, compressed formats, optimized file names, responsive image sizing, and modern image formats like WebP. This improves page speed and search visibility.' },
  { icon: Brain, title: 'Semantic SEO Optimization', desc: 'Modern SEO requires more than keyword repetition. We optimize content using semantic SEO strategies that help search engines understand topics, entities, and contextual relevance.' },
  { icon: Globe, title: 'URL Structure Optimization', desc: 'We create SEO-friendly URL structures that are clean, readable, and optimized for both users and search engines.' },
];

const whyFactors = [
  'Improve keyword relevance', 'Increase organic rankings', 'Enhance user experience',
  'Improve content quality', 'Increase click-through rates', 'Strengthen website structure',
  'Support technical SEO', 'Improve conversions',
];

const keyElements = [
  'Keyword optimization', 'Content quality', 'Search intent matching', 'Proper heading structure',
  'Internal linking', 'Optimized metadata', 'Mobile usability', 'User experience',
  'Image optimization', 'Semantic relevance', 'Structured content', 'Page speed optimization',
];

const processSteps = [
  { step: 'Step 1', title: 'Website Analysis', desc: 'We analyze existing content, keyword rankings, and on-page SEO performance.' },
  { step: 'Step 2', title: 'Keyword Mapping', desc: 'We map target keywords to the most relevant pages.' },
  { step: 'Step 3', title: 'Content Optimization', desc: 'We improve content structure, readability, and keyword relevance.' },
  { step: 'Step 4', title: 'Internal Linking', desc: 'We strengthen topical authority through strategic internal links.' },
  { step: 'Step 5', title: 'Performance Monitoring', desc: 'We continuously monitor rankings, traffic, and optimization performance.' },
];

const benefits = [
  { icon: TrendingUp, title: 'Increase Search Rankings', desc: 'Optimized on-page signals directly improve your position in search results.' },
  { icon: Globe, title: 'Improve Organic Traffic', desc: 'Higher rankings and better visibility drive consistent organic growth.' },
  { icon: Users, title: 'Enhance User Experience', desc: 'Well-structured, relevant content keeps visitors engaged longer.' },
  { icon: BarChart, title: 'Increase Engagement', desc: 'Optimized pages encourage deeper browsing and interaction.' },
  { icon: Target, title: 'Improve Lead Generation', desc: 'Content aligned with intent converts visitors into qualified leads.' },
  { icon: Layers, title: 'Strengthen Content Relevance', desc: 'Semantic optimization ensures your content matches what users search for.' },
  { icon: Eye, title: 'Improve Website Authority', desc: 'Consistent on-page optimization builds topical expertise and trust.' },
  { icon: Package, title: 'Increase Conversion Rates', desc: 'Optimized user journeys and CTAs turn traffic into customers.' },
];

const industries = [
  { name: 'Ecommerce', icon: ShoppingCart },
  { name: 'Healthcare', icon: Heart },
  { name: 'Real Estate', icon: Building },
  { name: 'SaaS', icon: CloudIcon },
  { name: 'Hospitality', icon: Hotel },
  { name: 'Travel', icon: Plane },
  { name: 'Corporate', icon: Briefcase },
  { name: 'Startups', icon: Rocket },
];

const whyItems = [
  'White-hat SEO', 'Long-term growth', 'Search intent optimization',
  'AI-friendly content structure', 'User experience improvements', 'Transparent SEO strategies',
];

const faqs = [
  { q: 'What is on-page SEO?', a: 'On-page SEO involves optimizing website pages, content, keywords, metadata, and user experience to improve search rankings. It focuses on elements you can control directly on your website.' },
  { q: 'Why is on-page SEO important?', a: 'On-page SEO helps search engines understand your content and improves visibility for relevant search queries. Without proper on-page optimization, even great content may fail to rank.' },
  { q: 'How long does on-page SEO take?', a: 'Results vary depending on competition and website quality, but improvements can often be seen within a few weeks to months as search engines recrawl and reindex optimized pages.' },
  { q: 'Does content optimization improve SEO?', a: 'Yes. Optimized content improves keyword relevance, user engagement, and overall search performance. Content is one of the most important on-page ranking factors.' },
  { q: 'What is semantic SEO?', a: 'Semantic SEO focuses on improving topical relevance and helping search engines better understand content context and intent, going beyond simple keyword matching to entity-based optimization.' },
];

function ShoppingCart() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>; }
function Heart() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>; }
function Building() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>; }
function CloudIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>; }
function Hotel() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"/><path d="M9 2v20"/><path d="M15 2v20"/><path d="M3 8h18"/><path d="M3 16h18"/></svg>; }

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://zaviroq.com' },
    { '@type': 'ListItem', position: 2, name: 'SEO Services', item: 'https://zaviroq.com/seo-services' },
    { '@type': 'ListItem', position: 3, name: 'On-Page SEO Optimization' },
  ],
};

const orgSchema = {
  '@context': 'https://schema.org', '@type': 'Organization',
  name: 'ZAVIROQ', url: 'https://zaviroq.com', logo: 'https://zaviroq.com/logo.png',
  description: 'ZAVIROQ is an on-page SEO agency providing optimization services in Saudi Arabia.',
};

const svcSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'On-Page SEO Optimization',
  provider: { '@type': 'Organization', name: 'ZAVIROQ' },
  areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  description: 'On-page SEO optimization services including content optimization, keyword targeting, internal linking, semantic SEO, and metadata optimization.',
};

export default function OnPageSEOClient() {
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
        <span className={styles.breadCurrent}>On-Page SEO</span>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroGlowOrb} />
        <div className={styles.heroGlowOrb2} />
        <RevealOnScroll>
          <div className={styles.heroTag}>
            <span className={styles.tagDot} />
            On-Page SEO
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={60}>
          <h1 className={styles.heroTitle}>On-Page SEO <span className={styles.gradText}>Optimization Services</span></h1>
        </RevealOnScroll>
        <RevealOnScroll delay={110}>
          <p className={styles.heroSub}>Improve Rankings with Strategic On-Page SEO Optimization</p>
        </RevealOnScroll>
        <RevealOnScroll delay={140}>
          <p className={styles.heroDesc}>
            Zaviroq helps businesses improve Google rankings and organic traffic through advanced on-page SEO strategies including content optimization, keyword targeting, internal linking, semantic SEO, and user experience improvements.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={170}>
          <div className={styles.heroCta}>
            <Link href="/contact" className={styles.heroBtnPrimary}>Request SEO Audit <ArrowRight size={16} /></Link>
            <Link href="/contact" className={styles.heroBtnSecondary}>Get Free Consultation</Link>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={200}>
          <div className={styles.trustPoints}>
            {['Keyword Optimization', 'SEO Content Strategy', 'Internal Linking Optimization', 'Meta Tag Optimization', 'Semantic SEO Enhancements'].map((point, i) => (
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
              <h2>What is On-Page SEO?</h2>
              <p>On-page SEO is the process of optimizing individual web pages to improve search engine rankings and user experience. It involves optimizing content, headings, keywords, metadata, internal links, images, page structure, and overall website relevance.</p>
              <p>A properly optimized page helps search engines understand your content while also improving engagement and conversions for visitors.</p>
              <p>At Zaviroq, we use modern on-page SEO strategies focused on semantic relevance, search intent, AI-driven optimization, and user experience to improve long-term organic visibility.</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className={styles.introVisual}>
              <div className={styles.introStatCard}>
                <span className={styles.introStatNum}>40%</span>
                <span className={styles.introStatLabel}>Avg. Ranking Improvement</span>
              </div>
              <div className={styles.introStatCard}>
                <span className={styles.introStatNum}>15+</span>
                <span className={styles.introStatLabel}>On-Page Factors Optimized</span>
              </div>
              <div className={styles.introStatCard}>
                <span className={styles.introStatNum}>3x</span>
                <span className={styles.introStatLabel}>Organic Traffic Growth</span>
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
            <h2>Why On-Page SEO is Important</h2>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={80}>
          <p className={styles.whyLead}>On-page SEO plays a critical role in helping search engines determine what your content is about and how relevant it is for specific search queries. Without proper on-page SEO, even high-quality websites may struggle to rank competitively.</p>
        </RevealOnScroll>
        <div className={styles.whyGrid}>
          {[
            { icon: Hash, title: 'Relevance', desc: 'Improve keyword relevance' },
            { icon: TrendingUp, title: 'Rankings', desc: 'Increase organic rankings' },
            { icon: Users, title: 'Experience', desc: 'Enhance user experience' },
            { icon: FileText, title: 'Quality', desc: 'Improve content quality' },
            { icon: Eye, title: 'CTR', desc: 'Increase click-through rates' },
            { icon: Layers, title: 'Structure', desc: 'Strengthen website structure' },
            { icon: Zap, title: 'Technical', desc: 'Support technical SEO' },
            { icon: Package, title: 'Conversions', desc: 'Improve conversions' },
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
            <h2>Our On-Page SEO Services</h2>
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

      <section className={styles.factorsSection}>
        <RevealOnScroll>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Key Factors</span>
            <h2>Key Elements of Effective On-Page SEO</h2>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={80}>
          <p className={styles.factorsLead}>Successful on-page SEO requires a holistic approach. All these factors work together to improve search visibility and organic performance.</p>
        </RevealOnScroll>
        <div className={styles.factorsGrid}>
          {keyElements.map((el, i) => (
            <motion.div
              key={i}
              className={styles.factorItem}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <span className={styles.factorCheck}><Check size={12} /></span>
              {el}
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.strategySection}>
        <div className={styles.strategyBgGlow} />
        <RevealOnScroll>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Strategy</span>
            <h2>SEO Content Optimization Strategy</h2>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={80}>
          <p className={styles.strategyLead}>Our on-page SEO approach focuses on creating content that is useful, authoritative, and aligned with user intent.</p>
        </RevealOnScroll>
        <div className={styles.strategyGrid}>
          {[
            { icon: Search, label: 'Informational Searches' },
            { icon: Target, label: 'Commercial Intent' },
            { icon: ShoppingCartIcon, label: 'Transactional Keywords' },
            { icon: Globe, label: 'Local SEO Relevance' },
            { icon: Brain, label: 'AI Search Visibility' },
            { icon: Sparkles, label: 'Google AI Overviews' },
          ].map((item, i) => (
            <RevealOnScroll key={i} delay={i * 60}>
              <div className={styles.strategyCard}>
                <div className={styles.strategyCardIcon}><item.icon size={18} /></div>
                <span>{item.label}</span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll delay={200}>
          <p className={styles.strategyFooter}>Our goal is to create content that performs well for both users and search engines.</p>
        </RevealOnScroll>
      </section>

      <section className={styles.processSection}>
        <RevealOnScroll>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Process</span>
            <h2>Our On-Page SEO Process</h2>
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
            <h2>Benefits of On-Page SEO Optimization</h2>
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
              <h2>Why Choose Zaviroq for On-Page SEO Services</h2>
            </div>
            <p className={styles.whyZaviroqText}>Zaviroq combines modern SEO strategies, semantic optimization, AI-driven analysis, and user-focused content optimization to improve website visibility and search performance.</p>
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
            <h2 className={styles.ctaTitle}>Ready to Improve Your Website Rankings?</h2>
            <p className={styles.ctaText}>Partner with Zaviroq for professional on-page SEO optimization services focused on long-term growth, higher rankings, and improved organic visibility.</p>
            <div className={styles.ctaBtns}>
              <Link href="/contact" className={styles.ctaBtnPrimary}>Get Free SEO Consultation <ArrowRight size={16} /></Link>
              <Link href="/contact" className={styles.ctaBtnOutline}>Contact Our SEO Experts</Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
}

function ShoppingCartIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>; }
