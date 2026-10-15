import styles from './page.module.css';

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