import styles from './page.module.css';

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