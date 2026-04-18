'use client';

import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';
import Link from 'next/link';

interface PageData {
  title: string;
  slug: string;
  primaryKeyword: string;
  heroTitle: string;
  heroSubtitle: string;
  introTitle: string;
  introDescription: string;
  introKeywords: string[];
  deliverables: string[];
  processSteps: { title: string; desc: string }[];
  features: { title: string; desc: string }[];
  useCases: string[];
  whyChooseUs: string[];
  seoBenefits: string[];
  internalLinks: { href: string; label: string }[];
  faq: { question: string; answer: string }[];
}

interface ServicePageContentProps {
  data: PageData;
}

export default function ServicePageContent({ data }: ServicePageContentProps) {
  const breadcrumbLinks = [
    { href: '/', label: 'Home' },
    { href: '/web-design-development', label: 'Web Design & Development' },
    { href: `/${data.slug}`, label: data.title }
  ];

  return (
    <div className={styles.page}>
      <div className={styles.glowBg} aria-hidden="true" />
      <div className={styles.gridOverlay} aria-hidden="true" />

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        {breadcrumbLinks.map((link, i) => (
          <span key={i}>
            {i > 0 && <span className={styles.breadSep}>›</span>}
            {link.href ? (
              <Link href={link.href} className={styles.breadLink}>{link.label}</Link>
            ) : (
              <span className={styles.breadCurrent}>{link.label}</span>
            )}
          </span>
        ))}
      </nav>

      <section className={styles.hero}>
        <RevealOnScroll>
          <div className={styles.heroTag}>
            <span className={styles.tagDot} />
            Web Application Engineering
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={60}>
          <h1 className={styles.heroTitle}>{data.heroTitle}</h1>
        </RevealOnScroll>

        <RevealOnScroll delay={110}>
          <p className={styles.heroSub}>{data.heroSubtitle}</p>
        </RevealOnScroll>

        <RevealOnScroll delay={160}>
          <div className={styles.ctaRow}>
            <Link href="/contact" className={`btn-primary ${styles.heroBtn}`}>
              Get Quote
            </Link>
            <Link href="/contact" className={`btn-secondary ${styles.heroBtnSec}`}>
              Start Project
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      <section className={styles.introSection}>
        <RevealOnScroll>
          <div className={styles.introBlock}>
            <h2>{data.introTitle}</h2>
            <p>{data.introDescription}</p>
          </div>
        </RevealOnScroll>
      </section>

      <div className={styles.dividerRow}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerLabel}>What This Service Includes</span>
        <div className={styles.dividerLine} />
      </div>

      <section className={styles.deliverablesGrid}>
        {data.deliverables.map((item, i) => (
          <RevealOnScroll key={i} delay={i * 80}>
            <div className={styles.deliverableCard}>
              <span className={styles.deliverableNum}>{String(i + 1).padStart(2, '0')}</span>
              <span className={styles.deliverableText}>{item}</span>
            </div>
          </RevealOnScroll>
        ))}
      </section>

      <div className={styles.dividerRow}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerLabel}>Development Process</span>
        <div className={styles.dividerLine} />
      </div>

      <section className={styles.processGrid}>
        {data.processSteps.map((step, i) => (
          <RevealOnScroll key={i} delay={i * 100}>
            <div className={styles.processCard}>
              <span className={styles.processNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.processTitle}>{step.title}</h3>
              <p className={styles.processDesc}>{step.desc}</p>
            </div>
          </RevealOnScroll>
        ))}
      </section>

      <div className={styles.dividerRow}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerLabel}>Features & Capabilities</span>
        <div className={styles.dividerLine} />
      </div>

      <section className={styles.featuresList}>
        {data.features.map((feature, i) => (
          <RevealOnScroll key={i} delay={i * 80}>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>✦</span>
              <div className={styles.featureContent}>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </section>

      <div className={styles.dividerRow}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerLabel}>Use Cases</span>
        <div className={styles.dividerLine} />
      </div>

      <section className={styles.useCasesGrid}>
        {data.useCases.map((useCase, i) => (
          <RevealOnScroll key={i} delay={i * 60}>
            <div className={styles.useCaseCard}>
              <span className={styles.useCaseIcon}>▸</span>
              <span>{useCase}</span>
            </div>
          </RevealOnScroll>
        ))}
      </section>

      <section className={styles.whyChooseSection}>
        <RevealOnScroll>
          <div className={styles.whyChooseBlock}>
            <h2>Why Choose Our {data.title}</h2>
            <div className={styles.whyChooseList}>
              {data.whyChooseUs.map((item, i) => (
                <div key={i} className={styles.whyChooseItem}>
                  <span className={styles.whyChooseIcon}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <div className={styles.dividerRow}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerLabel}>SEO & Performance Benefits</span>
        <div className={styles.dividerLine} />
      </div>

      <section className={styles.seoBenefitsGrid}>
        {data.seoBenefits.map((benefit, i) => (
          <RevealOnScroll key={i} delay={i * 60}>
            <div className={styles.seoBenefitCard}>
              <span className={styles.seoBenefitIcon}>⚡</span>
              <span>{benefit}</span>
            </div>
          </RevealOnScroll>
        ))}
      </section>

      <div className={styles.dividerRow}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerLabel}>Explore Related Services</span>
        <div className={styles.dividerLine} />
      </div>

      <section className={styles.internalLinksGrid}>
        {data.internalLinks.map((link, i) => (
          <RevealOnScroll key={i} delay={i * 60}>
            <Link href={link.href} className={styles.internalLinkCard}>
              <span className={styles.internalLinkArrow}>→</span>
              <span>{link.label}</span>
            </Link>
          </RevealOnScroll>
        ))}
      </section>

      <section className={styles.faqSection}>
        <RevealOnScroll>
          <div className={styles.faqHeader}>
            <h2>Frequently Asked Questions</h2>
          </div>
        </RevealOnScroll>

        <div className={styles.faqList}>
          {data.faq.map((item, i) => (
            <RevealOnScroll key={i} delay={i * 80}>
              <details className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  <span>{item.question}</span>
                  <span className={styles.faqPlus}>+</span>
                </summary>
                <div className={styles.faqAnswer}>
                  <p>{item.answer}</p>
                </div>
              </details>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className={styles.finalCta}>
        <RevealOnScroll>
          <div className={styles.finalCtaContent}>
            <h2>Start Your {data.title} Project</h2>
            <p>
              Get a fully custom web application built uniquely for your business requirements. Scalable, secure, and designed to grow with your business.
            </p>
            <div className={styles.finalCtaButtons}>
              <Link href="/contact" className={`btn-primary ${styles.ctaBtnPrimary}`}>
                Start Your Project
              </Link>
              <Link href="/contact" className={`btn-secondary ${styles.ctaBtnSecondary}`}>
                Get Free Consultation
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
}