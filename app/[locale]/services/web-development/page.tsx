import styles from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Design & Web Development Services | Zaviroq',
  description: 'Custom Next.js, React, and WordPress website development services in Mangalore, India, the UAE, and Saudi Arabia. High performance, sub-second load times.',
  alternates: {
    canonical: 'https://www.zaviroq.com/services/web-development',
  },
  openGraph: {
    title: 'Website Design & Web Development Services | Zaviroq',
    description: 'Custom Next.js, React, and WordPress website development services in Mangalore, India, the UAE, and Saudi Arabia. High performance, sub-second load times.',
    url: 'https://www.zaviroq.com/services/web-development',
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
        <div className={styles.watermarkBg}>WEB DEV</div>
        
        <div className={styles.heroTopContainer}>
          <div className={styles.heroTopLeft}>
            <div className={styles.heroEyebrow}>
              <span className={styles.eyebrowLine}></span> WEB DEVELOPMENT
            </div>
            
            <h1 className={styles.heroTopTitle}>
              Custom Web<br />
              <span className={styles.heroHighlight}>Development.</span>
            </h1>
            
            <p className={styles.heroTopSub}>
              Custom, Business, Next.js & React Development
            </p>
          </div>
          <div className={styles.heroTopRight}>
            <div className={styles.heroTopImageWrapper}>
              <img src="/assets/images/services-bg.png" alt="WEB DEV" className={styles.heroTopImage} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}