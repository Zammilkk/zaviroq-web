import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';
import { ArrowRight, Play, ArrowDown, Layers, MapPin, Globe } from 'lucide-react';
import { Link } from '@/i18n/routing';
import FounderStory from '../../components/FounderStory';
import PremiumAbout from '../../components/PremiumAbout';

export default async function AboutPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;

  return (
    <div className={styles.container}>
      {/* 🚀 PREMIUM HERO */}
      <div className={styles.premiumHero}>
        {/* GLOBAL DIGITAL PARTNER */}
        <div className={styles.globalPartner}>
           <span className={styles.partnerDot}></span>
           <div className={styles.partnerText}>
             GLOBAL<br/>DIGITAL<br/>PARTNER
           </div>
        </div>



        <div className={styles.heroLeft}>
          <RevealOnScroll>
            <div className={styles.heroEyebrow}>
              <span className={styles.eyebrowLine}></span> DIGITAL SOLUTIONS FOR A BRIGHTER TOMORROW
            </div>
            <h1 className={styles.heroTitle}>
              People. Strategy. <span className={styles.heroGradient}>Real Growth.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              We design, develop and market digital experiences that help businesses grow — in the UAE, Saudi Arabia and India.
            </p>
            
            <div className={styles.heroCtas}>
              <Link href="/contact" className={styles.btnWork}>
                Work With Us <ArrowRight size={18} />
              </Link>
              <Link href="/services" className={styles.btnServicesUnique}>
                <div className={styles.servicesIconWrapper}>
                  <Layers size={18} />
                </div>
                <span>Explore Services</span>
              </Link>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.statBox}>
                <div className={styles.statNum}>360+</div>
                <div className={styles.statLabel}>Projects Delivered</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statNum}>50+</div>
                <div className={styles.statLabel}>Happy Clients</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statNum}>3x</div>
                <div className={styles.statLabel}>Average Growth</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statNum}>100%</div>
                <div className={styles.statLabel}>Results Focused</div>
              </div>
            </div>

            <div className={styles.heroTrust}>
              <div className={styles.trustLabel}>TRUSTED BY BUSINESSES WORLDWIDE</div>
              <div className={styles.trustLogos}>
                <div className={styles.trustLogo}>
                  <MapPin size={16} /> UAE
                </div>
                <div className={styles.trustLogo}>
                  <MapPin size={16} /> KSA
                </div>
                <div className={styles.trustLogo}>
                  <MapPin size={16} /> INDIA
                </div>
                <div className={styles.trustLogo}>
                  <Globe size={16} /> Global
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
        
        <div className={styles.heroRight}>
          <div className={styles.heroVisualGlow}></div>
          
          <img src="/assets/images/why-img.avif" alt="Digital Growth Partner" className={styles.founderImg} />
          
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
      
      {/* 🌟 NEW FOUNDER STORY SECTION */}
      <FounderStory />

      {/* 🌟 PREMIUM ABOUT SECTIONS */}
      <PremiumAbout />

    </div>
  );
}
