import styles from './page.module.css';

export default async function ServicesCategoryPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroTop}>
        <div className={styles.heroTopBgLayer}></div>
        <div className={styles.watermarkBg}>ECOMMERCE</div>
        
        <div className={styles.heroTopContainer}>
          <div className={styles.heroTopLeft}>
            <div className={styles.heroEyebrow}>
              <span className={styles.eyebrowLine}></span> DIGITAL SYSTEMS
            </div>
            
            <h1 className={styles.heroTopTitle}>
              Ecommerce &<br />
              <span className={styles.heroHighlight}>Systems.</span>
            </h1>
            
            <p className={styles.heroTopSub}>
              Ecommerce, Custom Dashboards & SaaS Platforms
            </p>
          </div>
          <div className={styles.heroTopRight}>
            <div className={styles.heroTopImageWrapper}>
              <img src="/assets/images/services-bg.png" alt="ECOMMERCE" className={styles.heroTopImage} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}