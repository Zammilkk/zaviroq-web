import styles from './page.module.css';

export default async function ServicesCategoryPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroTop}>
        <div className={styles.heroTopBgLayer}></div>
        <div className={styles.watermarkBg}>AGENCY SEO</div>
        
        <div className={styles.heroTopContainer}>
          <div className={styles.heroTopLeft}>
            <div className={styles.heroEyebrow}>
              <span className={styles.eyebrowLine}></span> B2B PARTNERSHIPS
            </div>
            
            <h1 className={styles.heroTopTitle}>
              Agency<br />
              <span className={styles.heroHighlight}>SEO.</span>
            </h1>
            
            <p className={styles.heroTopSub}>
              White-label SEO for agencies to scale operations.
            </p>
          </div>
          <div className={styles.heroTopRight}>
            <div className={styles.heroTopImageWrapper}>
              <img src="/assets/images/seo-service.avif" alt="AGENCY SEO" className={styles.heroTopImage} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}