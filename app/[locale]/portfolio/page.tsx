import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';
import PortfolioGrid from './PortfolioGrid';

export default async function PortfolioPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;

  return (
    <div className={styles.container}>
      <div className={styles.glowBg}></div>

      {/* 🚀 PREMIUM HERO */}
      <div className={styles.hero}>
        <RevealOnScroll>
          <div className={styles.badge}>Case Studies & Outcomes</div>
          <h1 className={styles.title}>Elite <span className="gradient-text">Deployments</span></h1>
          <p className={styles.subtitle}>
            Explore our architectural triumphs across the GCC and India. From algorithmic SEO dominance to high-converting Next.js frameworks.
          </p>
        </RevealOnScroll>
      </div>

      {/* INTERACTIVE WORK GRID */}
      <div className={styles.contentWrapper}>
         <PortfolioGrid locale={locale} />
      </div>

      {/* 📞 BOTTOM CTA */}
      <RevealOnScroll yOffset={30}>
        <div className={styles.bottomCta}>
          <h2>Impressed by our metrics?</h2>
          <p>Let&apos;s map out your exact industry vectors and begin building your scalable acquisition machine.</p>
          <a href={`/${locale}/contact`} className={`btn-primary ${styles.ctaBtn}`}>Start Your Project ⚡</a>
        </div>
      </RevealOnScroll>
    </div>
  );
}
