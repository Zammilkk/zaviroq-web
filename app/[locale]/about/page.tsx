import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default async function AboutPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;

  return (
    <div className={styles.container}>
      {/* 🚀 PREMIUM HERO */}
      <div className={styles.premiumHero}>
        <div className={styles.heroLeft}>
          <RevealOnScroll>
            <div className={styles.heroEyebrow}>
              <span className={styles.eyebrowLine}></span> DIGITAL SOLUTIONS FOR A BRIGHTER TOMORROW
            </div>
            <h1 className={styles.heroTitle}>
              People. Strategy.<br />
              <span className={styles.heroGradient}>Real Growth.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              We design, develop and market digital experiences that help businesses grow — in the UAE, Saudi Arabia and India.
            </p>
            
            <div className={styles.heroCtas}>
              <Link href="/contact" className={styles.btnWork}>
                Work With Us <ArrowRight size={18} />
              </Link>
              <button className={styles.btnStory}>
                <div className={styles.playIconWrapper}>
                  <Play size={16} fill="currentColor" strokeWidth={0} />
                </div>
                <div className={styles.storyText}>
                  <span className={styles.storyMain}>Watch Our Story</span>
                  <span className={styles.storySub}>See how we create impact</span>
                </div>
              </button>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.statBox}>
                <div className={styles.statNum}>50+</div>
                <div className={styles.statLabel}>Projects Delivered</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statNum}>30+</div>
                <div className={styles.statLabel}>Happy Clients</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statNum}>3+</div>
                <div className={styles.statLabel}>Years of Experience</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statNum}>100%</div>
                <div className={styles.statLabel}>Client-Focused</div>
              </div>
            </div>

            <div className={styles.heroTrust}>
              <div className={styles.trustLabel}>TRUSTED BY BUSINESSES WORLDWIDE</div>
              <div className={styles.trustLogos}>
                <div className={styles.trustLogo}>
                  <img src="https://flagcdn.com/w40/ae.png" alt="UAE" /> UAE
                </div>
                <div className={styles.trustLogo}>
                  <img src="https://flagcdn.com/w40/sa.png" alt="KSA" /> KSA
                </div>
                <div className={styles.trustLogo}>
                  <img src="https://flagcdn.com/w40/in.png" alt="INDIA" /> INDIA
                </div>
                <div className={styles.trustLogo}>
                  <span>🌐</span> Global
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
        
        <div className={styles.heroRight}>
          <div className={styles.heroVisualGlow}></div>
          <img src="/assets/images/about-bg.avif" alt="Globe" className={styles.globeBg} />
          
          <img src="/assets/images/zaviroq-founder.png" alt="Zammil, Founder" className={styles.founderImg} />
          
          <div className={styles.founderSignature}>
            <span className={styles.sigName}>Zammil</span>
            <span className={styles.sigTitle}>Founder, ZAVIROQ</span>
            <div className={styles.sigArrowWrapper}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7b61ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{transform: 'rotate(45deg)'}}>
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>

          <div className={styles.floatingWidget}>
            <div className={styles.widgetIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10M12 20V4M6 20v-4"/></svg>
            </div>
            <div className={styles.widgetText}>
              Scaling<br />Brands<br />Digitally
            </div>
            <div className={styles.widgetArrow}>
              <ArrowRight size={12} />
            </div>
          </div>

          <div className={styles.verticalText}>
            "Ideas<br/>Strategy<br/>Execution<br/>Together"
          </div>
          
          <div className={styles.floatingBottomBar}>
            <div className={styles.barLeft}>
              <div className={styles.avatarGroup}>
                <img src="https://i.pravatar.cc/100?img=11" alt="Team" />
                <img src="https://i.pravatar.cc/100?img=12" alt="Team" />
                <img src="https://i.pravatar.cc/100?img=33" alt="Team" />
                <img src="https://i.pravatar.cc/100?img=44" alt="Team" />
              </div>
              <div className={styles.barText}>
                <strong>A Global Team</strong>
                <span>For Your Growth</span>
              </div>
            </div>
            <div className={styles.barDivider}></div>
            <div className={styles.barRight}>
              <p>"Turning Ideas Into<br/><em>Impactful Digital Experiences.</em>"</p>
              <div className={styles.barAction}>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </div>
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
                <div className={styles.cIcon}>💬</div>
                <div>
                   <h4>WhatsApp Channel</h4>
                   <p className={styles.phoneLink}>+971 52 977 5206</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.cIcon}>📞</div>
                <div>
                   <h4>Direct Call Line</h4>
                   <p className={styles.phoneLink}>+91 74 8383 0582</p>
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
