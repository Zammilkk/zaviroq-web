import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';

export default async function AboutPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;

  return (
    <div className={styles.container}>
      {/* BACKGROUND GLOW */}
      <div className={styles.glowBg}></div>

      {/* 🚀 PREMIUM HERO */}
      <div className={styles.hero}>
        <RevealOnScroll>
          <div className={styles.badge}>Our Story & Vision</div>
          <h1 className={styles.title}>The Apex of Digital <br /><span className="gradient-text">Engineering</span></h1>
          <p className={styles.subtitle}>
            From sophisticated algorithms to aggressive marketing frameworks, we redefine how modern brands scale globally.
          </p>
        </RevealOnScroll>
      </div>

      {/* 📖 ABOUT & ORIGIN BLOCK */}
      <div className={styles.coreGrid}>
        <RevealOnScroll yOffset={50}>
          <div className={styles.glassBlock}>
            <h2 className={styles.blockTitle}>ZAVIROQ by Digital Zaam</h2>
            <p className={styles.blockText}>
              Born from a meticulous obsession with performance, <strong style={{color: 'var(--primary-blue)'}}>ZAVIROQ</strong> was architected as the premium wing of <em>Digital Zaam</em>. We don&apos;t just build websites; we engineer data-driven ecosystems powered by next-generation web technologies and highly calibrated marketing analytics.
            </p>
            <p className={styles.blockText}>
              Over the past <strong>4+ years</strong>, we have rigorously scaled our operations across deep technological verticals, capturing and expanding high-value markets for elite partners across the world.
            </p>
            
            <div className={styles.statsRow}>
               <div className={styles.statLine}>
                 <h3>4+</h3>
                 <span>Years Expertise</span>
               </div>
               <div className={styles.statLine}>
                 <h3>100%</h3>
                 <span>Secure Architecture</span>
               </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100} yOffset={50}>
          <div className={`${styles.glassBlock} ${styles.blueGlow}`}>
            <h2 className={styles.blockTitle}>Global Authority</h2>
            <p className={styles.blockText}>
              Geography doesn&apos;t limit data. Our infrastructures currently power businesses and command aggressive lead pipelines across massive hubs.
            </p>
            
            <ul className={styles.locationList}>
               <li>
                  <span className={styles.lIcon}>🇦🇪</span>
                  <div>
                    <h4>GCC Regions</h4>
                    <p>Dubai & Saudi Arabia focused campaigns mapping massive ROI.</p>
                  </div>
               </li>
               <li>
                  <span className={styles.lIcon}>🇮🇳</span>
                  <div>
                    <h4>Indian Markets</h4>
                    <p>Dominating immense hyper-local search intent and tech deployments.</p>
                  </div>
               </li>
            </ul>
          </div>
        </RevealOnScroll>
      </div>

      {/* 📍 HEADQUARTERS DIRECTORY */}
      <RevealOnScroll delay={50}>
        <div className={styles.hqContainer}>
           <div className={styles.hqVisual}>
             <div className={styles.radarGlow}>
                <div className={styles.pin}>📍</div>
             </div>
           </div>
           
           <div className={styles.hqData}>
             <h2>Command Center Directory</h2>
             <div className={styles.contactItem}>
               <div className={styles.cIcon}>🗺️</div>
               <div>
                  <h4>Physical Location</h4>
                  <p>Mudipu, Near Konaje<br/>Mangalore - 574153</p>
               </div>
             </div>
             
             <div className={styles.contactItem}>
               <div className={styles.cIcon}>📞</div>
               <div>
                  <h4>Direct Encryption Line</h4>
                  <p className={styles.phoneLink}>+91 74 8383 05 82</p>
               </div>
             </div>
             
             <div style={{marginTop: '30px'}}>
                <a href={`/${locale}/contact`} className="btn-primary" style={{padding: '16px 36px', borderRadius: '100px', display: 'inline-block'}}>Initiate Contact Request</a>
             </div>
           </div>
        </div>
      </RevealOnScroll>

    </div>
  );
}
