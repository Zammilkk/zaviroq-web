import styles from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Branding & Design Agency | Zaviroq Creative Studio',
  description: 'Corporate brand identity, logo design, company profiles, and creative social media design for businesses across India, UAE, and Saudi Arabia.',
  alternates: {
    canonical: 'https://www.zaviroq.com/services/branding-design',
  },
  openGraph: {
    title: 'Branding & Design Agency | Zaviroq Creative Studio',
    description: 'Corporate brand identity, logo design, company profiles, and creative social media design for businesses across India, UAE, and Saudi Arabia.',
    url: 'https://www.zaviroq.com/services/branding-design',
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
        <div className={styles.watermarkBg}>BRANDING</div>
        
        <div className={styles.heroTopContainer}>
          <div className={styles.heroTopLeft}>
            <div className={styles.heroEyebrow}>
              <span className={styles.eyebrowLine}></span> CREATIVE DESIGN
            </div>
            
            <h1 className={styles.heroTopTitle}>
              Branding &<br />
              <span className={styles.heroHighlight}>Design.</span>
            </h1>
            
            <p className={styles.heroTopSub}>
              Logo, Identity, Profiles & Social Media Design
            </p>
          </div>
          <div className={styles.heroTopRight}>
            <div className={styles.heroTopImageWrapper}>
              <img src="/assets/images/services-hero-bg.png" alt="BRANDING" className={styles.heroTopImage} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}