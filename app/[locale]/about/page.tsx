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
          <h1 className={styles.title}>The Future of <br /><span className="gradient-text">Digital Growth</span></h1>
          <p className={styles.subtitle}>
            From sophisticated algorithms to aggressive marketing frameworks, we redefine how modern brands scale globally.
          </p>
        </RevealOnScroll>
      </div>

      {/* 📖 ABOUT & ORIGIN BLOCK */}
      <div className={styles.coreGrid}>
        <RevealOnScroll yOffset={50}>
          <div className={styles.glassBlock}>
            <h2 className={styles.blockTitle}>About ZAVIROQ</h2>
            <p className={styles.blockText}>
              Born from a meticulous obsession with performance, <strong style={{color: 'var(--primary-blue)'}}>ZAVIROQ</strong> was architected as a premier digital agency. We don&apos;t just build websites; we engineer data-driven ecosystems powered by next-generation web technologies and highly calibrated marketing analytics.
            </p>
            <p className={styles.blockText}>
              Over the past <strong>4+ years</strong>, we have rigorously scaled our operations across deep technological verticals, capturing and expanding high-value markets for elite partners across the world.
            </p>
            <p className={styles.blockText}>
              Our team specializes in crafting high-performance websites, implementing aggressive SEO strategies, and delivering performance marketing campaigns that drive measurable ROI for businesses across UAE, Saudi Arabia, and India.
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
               <div className={styles.statLine}>
                 <h3>Global</h3>
                 <span>Remote Team</span>
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
                <div className={styles.cIcon}>💻</div>
                <div>
                   <h4>Working Remotely</h4>
                   <p>Our team operates remotely across multiple time zones, serving clients globally with seamless communication and project management.</p>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.cIcon}>📞</div>
                <div>
                   <h4>Direct Line</h4>
                   <p className={styles.phoneLink}>+91 74 8383 05 82</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.cIcon}>💬</div>
                <div>
                   <h4>WhatsApp</h4>
                   <a href="https://wa.me/971529775206" className={styles.phoneLink}>+971 529 775 206</a>
                </div>
              </div>
              
              <div style={{marginTop: '30px'}}>
                 <a href={`/${locale}/contact`} className="btn-primary" style={{padding: '16px 36px', borderRadius: '100px', display: 'inline-block'}}>Initiate Contact Request</a>
              </div>
            </div>
</div>
        </RevealOnScroll>

      {/* 🎯 VALUES & APPROACH */}
      <div className={styles.coreGrid}>
        <RevealOnScroll yOffset={50}>
          <div className={styles.glassBlock}>
            <h2 className={styles.blockTitle}>Our Mission</h2>
            <p className={styles.blockText}>
              To empower businesses with cutting-edge digital solutions that drive real growth. We believe in transparent, data-driven strategies that deliver measurable results and maximum ROI for our clients.
            </p>
            <p className={styles.blockText}>
              Every project we undertake is backed by rigorous research, technical excellence, and a commitment to exceeding expectations. We don&apos;t just deliver websites – we build digital assets that become competitive advantages.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100} yOffset={50}>
          <div className={`${styles.glassBlock} ${styles.blueGlow}`}>
            <h2 className={styles.blockTitle}>Why Choose Us</h2>
            <ul className={styles.locationList}>
               <li>
                  <span className={styles.lIcon}>⚡</span>
                  <div>
                    <h4>Lightning Fast Delivery</h4>
                    <p>Get your project completed in record time without compromising on quality.</p>
                  </div>
               </li>
               <li>
                  <span className={styles.lIcon}>🔒</span>
                  <div>
                    <h4>Enterprise-Grade Security</h4>
                    <p>Your data and website protected with bank-level security protocols.</p>
                  </div>
               </li>
               <li>
                  <span className={styles.lIcon}>📊</span>
                  <div>
                    <h4>Data-Driven Results</h4>
                    <p>Every decision backed by analytics and real-time performance metrics.</p>
                  </div>
               </li>
            </ul>
          </div>
        </RevealOnScroll>
      </div>

    </div>
  );
}
