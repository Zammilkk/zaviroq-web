import styles from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Performance Marketing & Paid Ads Agency | Zaviroq',
  description: 'High-ROI Google Ads, Meta Ads, LinkedIn Ads, and PPC campaign management across Mangalore, India, the UAE, and Saudi Arabia.',
  alternates: {
    canonical: 'https://www.zaviroq.com/services/performance-marketing',
  },
  openGraph: {
    title: 'Performance Marketing & Paid Ads Agency | Zaviroq',
    description: 'High-ROI Google Ads, Meta Ads, LinkedIn Ads, and PPC campaign management across Mangalore, India, the UAE, and Saudi Arabia.',
    url: 'https://www.zaviroq.com/services/performance-marketing',
    siteName: 'Zaviroq',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: 'https://www.zaviroq.com/og-image.png' }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function ServicesCategoryPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroTop}>
        <div className={styles.heroTopBgLayer}></div>
        <div className={styles.watermarkBg}>MARKETING</div>
        
        <div className={styles.heroTopContainer}>
          <div className={styles.heroTopLeft}>
            <div className={styles.heroEyebrow}>
              <span className={styles.eyebrowLine}></span> AGGRESSIVE GROWTH
            </div>
            
            <h1 className={styles.heroTopTitle}>
              Performance<br />
              <span className={styles.heroHighlight}>Marketing.</span>
            </h1>
            
            <p className={styles.heroTopSub}>
              Google, Meta, LinkedIn, TikTok & PPC
            </p>
          </div>
          <div className={styles.heroTopRight}>
            <div className={styles.heroTopImageWrapper}>
              <img src="/assets/images/services-hero-bg.png" alt="MARKETING" className={styles.heroTopImage} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}