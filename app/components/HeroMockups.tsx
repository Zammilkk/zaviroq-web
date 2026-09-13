"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './HeroMockups.module.css';

export default function HeroMockups() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Calculate parallax values based on scroll
  // The laptop content will scroll upwards as the user scrolls down the page
  const laptopY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const phoneY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  // Subtle floating effects for the cards based on scroll
  const floatCard1Y = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const floatCard2Y = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const floatTagsY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <div className={styles.mockupContainer} ref={containerRef}>
      <div className={styles.scene}>
        
        {/* ==================== PEDESTAL ==================== */}
        <div className={styles.pedestal}></div>

        {/* ==================== LAPTOP ==================== */}
        <div className={styles.laptopGroup}>
          <div className={styles.laptopFrame}>
            <div className={styles.laptopBezel}>
              <div className={styles.laptopScreen}>
                {/* 
                  Instead of a flat image, we use an image that represents a long scrolling website.
                  You can replace this with a screenshot of your actual desktop homepage.
                */}
                <motion.img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=2000" 
                  alt="Desktop Preview" 
                  className={styles.screenContent}
                  style={{ y: laptopY }}
                />
              </div>
            </div>
            <div className={styles.laptopBase}></div>
          </div>
        </div>

        {/* ==================== SMARTPHONE ==================== */}
        <div className={styles.phoneGroup}>
          <div className={styles.phoneFrame}>
            <div className={styles.phoneBezel}>
              <div className={styles.dynamicIsland}></div>
              <div className={styles.phoneScreen}>
                {/* 
                  Long mobile screenshot goes here.
                */}
                <motion.img 
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400&h=1200" 
                  alt="Mobile Preview" 
                  className={styles.screenContent}
                  style={{ y: phoneY }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ==================== HANDWRITTEN ARROWS ==================== */}
        <div className={styles.handwrittenArrow} style={{ top: '100px', left: '-120px', transform: 'rotate(-15deg)' }}>
          <span>Higher<br/>Visibility</span>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(110deg)' }}>
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>

        <div className={styles.handwrittenArrow} style={{ bottom: '-30px', right: '-150px' }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'scaleX(-1) rotate(45deg)' }}>
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
          <span>Responsive<br/>for a Bigger<br/>Tomorrow</span>
        </div>

        {/* ==================== FLOATING UI CARDS ==================== */}
        <motion.div className={`${styles.floatCard} ${styles.cardMoreTraffic}`} style={{ y: floatCard1Y }}>
          <div className={styles.iconBlueWrapper}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
          </div>
          <div>
            <div className={styles.cardTitle}>More</div>
            <div className={styles.cardTitle}>Traffic</div>
            <svg viewBox="0 0 100 20" style={{ width: '60px', height: '20px', marginTop: '5px' }}>
               <path d="M0,20 Q10,15 20,18 T40,10 T60,12 T80,5 L100,2" fill="none" stroke="#2563eb" strokeWidth="3" />
            </svg>
          </div>
        </motion.div>
        <motion.div className={`${styles.floatCard} ${styles.cardRankings}`} style={{ y: floatCard1Y }}>
          <div className={styles.googleLogo}>G</div>
          <div>
            <div className={styles.cardTitle}>Top Rankings</div>
            <div className={styles.cardTitle} style={{ fontSize: '1.2rem' }}>#1</div>
            <div className={styles.cardSub}>On Google</div>
          </div>
        </motion.div>

        <motion.div className={`${styles.floatCard} ${styles.cardTraffic}`} style={{ y: floatCard2Y }}>
          <div className={styles.trafficHeader}>
            <span>Organic Traffic</span>
            <span style={{ color: '#22c55e' }}>&#8599;</span>
          </div>
          <div className={styles.trafficNum}>+278%</div>
          <svg className={styles.chartSvg} viewBox="0 0 100 30" preserveAspectRatio="none">
            <path d="M0,30 L0,20 Q10,25 20,15 T40,20 T60,10 T80,5 L100,0 L100,30 Z" fill="url(#gradient)" />
            <path d="M0,20 Q10,25 20,15 T40,20 T60,10 T80,5 L100,0" fill="none" stroke="#6366f1" strokeWidth="2" />
            <defs>
              <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="rgba(99, 102, 241, 0.2)" />
                <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
              </linearGradient>
            </defs>
          </svg>
          <div style={{ fontSize: '0.65rem', color: '#999', marginTop: '5px' }}>Last 6 Months</div>
        </motion.div>

        <motion.div className={styles.tagsStack} style={{ y: floatTagsY }}>
          <div className={styles.tagItem}>
            <span className={styles.tagIcon}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </span>
            Strategy
          </div>
          <div className={styles.tagItem}>
            <span className={styles.tagIcon}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.92-10.44l5.36-5.36"/></svg>
            </span>
            Design
          </div>
          <div className={styles.tagItem}>
            <span className={styles.tagIcon}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M16 12l-4-4-4 4M12 8v8"/></svg>
            </span>
            SEO
          </div>
          <div className={styles.tagItem}>
            <span className={styles.tagIcon}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
            </span>
            Results
          </div>
        </motion.div>

      </div>
    </div>
  );
}
