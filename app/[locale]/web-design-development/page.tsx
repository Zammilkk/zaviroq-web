"use client";

import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';
import Link from 'next/link';

const coreLinks = [
  { slug: 'custom-website-development', label: 'Custom Website' },
  { slug: 'business-website-design', label: 'Business Website' },
  { slug: 'landing-page-design', label: 'Landing Page' },
];

const platformLinks = [
  { slug: 'wordpress-development', label: 'WordPress' },
  { slug: 'php-development', label: 'PHP' },
  { slug: 'reactjs-development', label: 'React.js' },
  { slug: 'nextjs-development', label: 'Next.js' },
];

const ecommerceLinks = [
  { slug: 'ecommerce-development', label: 'Ecommerce' },
  { slug: 'custom-ecommerce-development', label: 'Custom Ecommerce' },
];

const systemsLinks = [
  { slug: 'admin-dashboard-development', label: 'Admin Dashboard' },
  { slug: 'web-application-development', label: 'Web Application' },
  { slug: 'saas-development', label: 'SaaS Platform' },
];

const migrationLinks = [
  { slug: 'website-migration', label: 'Migration' },
  { slug: 'website-cloning', label: 'Cloning' },
  { slug: 'website-redesign', label: 'Redesign' },
];

const securityLinks = [
  { slug: 'secure-website-development', label: 'Secure Website' },
  { slug: 'website-performance-optimization', label: 'Performance' },
];

const advancedLinks = [
  { slug: 'headless-cms-development', label: 'Headless CMS' },
  { slug: 'progressive-web-app-development', label: 'PWA' },
  { slug: 'api-integration-services', label: 'API Integration' },
  { slug: 'frontend-development', label: 'Frontend' },
  { slug: 'backend-development', label: 'Backend' },
];

export default function WebDevelopmentPage() {
  return (
    <div className={styles.page}>
      <h1 className="visually-hidden">Web Design & Development Services | ZAVIROQ</h1>

      <div className={styles.gridLines} aria-hidden="true" />

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className={styles.breadSep}>›</span>
        <span className={styles.breadCurrent}>Web Design & Development</span>
      </nav>

      <section className={styles.hero}>
        <RevealOnScroll>
          <div className={styles.heroTag}>
            <span className={styles.tagDot} />
            Engineering & Architecture
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={60}>
          <h1 className={styles.heroTitle}>
            Web Design & <span className={styles.gradText}>Development</span> Services for High-Performance, Scalable Websites
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={110}>
          <p className={styles.heroSub}>
            Custom-built solutions with modern UI/UX, fast loading speed, and secure architecture — designed uniquely for every business. We never reuse designs.
          </p>
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
            <h2>Custom Web Development for Business Growth</h2>
            <p>
              Every website we build is 100% custom—never a template or reused design. We engineer bespoke digital experiences that establish unshakeable brand authority, achieve sub-second load times, and scale with your business. From corporate websites to complex web applications, we deliver code that performs.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      <div className={styles.dividerRow}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerLabel}>Core Web Services</span>
        <div className={styles.dividerLine} />
      </div>

      <section className={styles.linkGrid}>
        {coreLinks.map((item, i) => (
          <RevealOnScroll key={item.slug} delay={i * 70}>
            <Link href={`/${item.slug}`} className={styles.linkCard}>
              <span className={styles.linkNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.linkTitle}>{item.label}</h3>
            </Link>
          </RevealOnScroll>
        ))}
      </section>

      <div className={styles.dividerRow}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerLabel}>Platform Development</span>
        <div className={styles.dividerLine} />
      </div>

      <section className={styles.linkGrid}>
        {platformLinks.map((item, i) => (
          <RevealOnScroll key={item.slug} delay={i * 70}>
            <Link href={`/${item.slug}`} className={styles.linkCard}>
              <span className={styles.linkNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.linkTitle}>{item.label}</h3>
            </Link>
          </RevealOnScroll>
        ))}
      </section>

      <div className={styles.dividerRow}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerLabel}>Ecommerce Solutions</span>
        <div className={styles.dividerLine} />
      </div>

      <section className={styles.linkGrid}>
        {ecommerceLinks.map((item, i) => (
          <RevealOnScroll key={item.slug} delay={i * 70}>
            <Link href={`/${item.slug}`} className={styles.linkCard}>
              <span className={styles.linkNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.linkTitle}>{item.label}</h3>
            </Link>
          </RevealOnScroll>
        ))}
      </section>

      <div className={styles.dividerRow}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerLabel}>Web Systems</span>
        <div className={styles.dividerLine} />
      </div>

      <section className={styles.linkGrid}>
        {systemsLinks.map((item, i) => (
          <RevealOnScroll key={item.slug} delay={i * 70}>
            <Link href={`/${item.slug}`} className={styles.linkCard}>
              <span className={styles.linkNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.linkTitle}>{item.label}</h3>
            </Link>
          </RevealOnScroll>
        ))}
      </section>

      <div className={styles.dividerRow}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerLabel}>Migration & Redesign</span>
        <div className={styles.dividerLine} />
      </div>

      <section className={styles.linkGrid}>
        {migrationLinks.map((item, i) => (
          <RevealOnScroll key={item.slug} delay={i * 70}>
            <Link href={`/${item.slug}`} className={styles.linkCard}>
              <span className={styles.linkNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.linkTitle}>{item.label}</h3>
            </Link>
          </RevealOnScroll>
        ))}
      </section>

      <div className={styles.dividerRow}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerLabel}>Security & Performance</span>
        <div className={styles.dividerLine} />
      </div>

      <section className={styles.linkGrid}>
        {securityLinks.map((item, i) => (
          <RevealOnScroll key={item.slug} delay={i * 70}>
            <Link href={`/${item.slug}`} className={styles.linkCard}>
              <span className={styles.linkNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.linkTitle}>{item.label}</h3>
            </Link>
          </RevealOnScroll>
        ))}
      </section>

      <div className={styles.dividerRow}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerLabel}>Advanced Solutions</span>
        <div className={styles.dividerLine} />
      </div>

      <section className={styles.linkGrid}>
        {advancedLinks.map((item, i) => (
          <RevealOnScroll key={item.slug} delay={i * 70}>
            <Link href={`/${item.slug}`} className={styles.linkCard}>
              <span className={styles.linkNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.linkTitle}>{item.label}</h3>
            </Link>
          </RevealOnScroll>
        ))}
      </section>

      <section className={styles.featuresSection}>
        <RevealOnScroll>
          <div className={styles.featuresBlock}>
            <h2>Why Choose Our Web Development</h2>
            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✦</span>
                <div>
                  <h3>100% Custom Design</h3>
                  <p>No templates. Every website is built uniquely for your brand.</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>⚡</span>
                <div>
                  <h3>Fast Performance</h3>
                  <p>Sub-second load times optimized for Core Web Vitals.</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>🔒</span>
                <div>
                  <h3>Secure Architecture</h3>
                  <p>Enterprise-grade security with 2FA, OAuth, and JWT protocols.</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>📈</span>
                <div>
                  <h3>Scalable System</h3>
                  <p>Built to scale with your business growth.</p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <div className={styles.ctaWrap}>
        <RevealOnScroll>
          <div className={styles.cta}>
            <p className={styles.ctaEye}>Ready to Build</p>
            <h2>Start Your Custom Website</h2>
            <p>
              Get a fully custom website built uniquely for your business. Fast, secure, and designed to grow.
            </p>
            <Link href="/contact" className={`btn-primary ${styles.ctaBtn}`}>
              Get Free Consultation ⚡
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}