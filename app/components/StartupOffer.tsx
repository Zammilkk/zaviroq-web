"use client";

import { useState, useEffect } from "react";
import styles from './HomeSections.module.css';

export default function StartupOffer({ locale }: { locale: string }) {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.offerContainer}>
      <div className={styles.offerGlow}></div>
      
      <div className={styles.offerContent}>
         <div className={styles.offerBadge}>
           <span className={styles.pulseDot}></span>
           Limited Time Launch Special
         </div>
         <h2>Complete Business Ignition Setup</h2>
         <p className={styles.offerSub}>
           We are offering the <strong>lowest priced package ever</strong> to rapidly deploy your brand online. Get an entire enterprise-grade digital infrastructure fully engineered and ready to scale.
         </p>
         
         <div className={styles.offerGrid}>
            <div className={styles.offerItem}>
               <div className={styles.offerIcon}>🌐</div>
               <span>80% Off .com Domain Setup</span>
            </div>
            <div className={styles.offerItem}>
               <div className={styles.offerIcon}>☁️</div>
               <span>1 Month Premium Hosting Free</span>
            </div>
            <div className={styles.offerItem}>
               <div className={styles.offerIcon}>✉️</div>
               <span>5 Free Zoho Partnership Business Emails</span>
            </div>
            <div className={styles.offerItem}>
               <div className={styles.offerIcon}>🎨</div>
               <span>High-Speed Website Design</span>
            </div>
            <div className={styles.offerItem}>
               <div className={styles.offerIcon}>🚀</div>
               <span>Complete Foundational SEO Pipeline</span>
            </div>
            <div className={styles.offerItem}>
               <div className={styles.offerIcon}>🛡️</div>
               <span>Company Profile & Branding System</span>
            </div>
         </div>

         <div className={styles.offerAction}>
            <div className={styles.offerTimer}>
              <span className={styles.timerLabel}>Offer expires in</span>
              <div className={styles.timerBlocks}>
                <div className={styles.timerBlock}>
                  <span className={styles.timerNum}>{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className={styles.timerUnit}>HRS</span>
                </div>
                <span className={styles.timerSep}>:</span>
                <div className={styles.timerBlock}>
                  <span className={styles.timerNum}>{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className={styles.timerUnit}>MIN</span>
                </div>
                <span className={styles.timerSep}>:</span>
                <div className={styles.timerBlock}>
                  <span className={styles.timerNum}>{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className={styles.timerUnit}>SEC</span>
                </div>
              </div>
            </div>

            <a href={`/${locale}/contact`} className={styles.offerBtn}>
              <span>Claim Startup Package Now</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <div className={styles.guaranteeText}>
              <span>✓</span> Limited Slots Available
            </div>
         </div>
      </div>
    </div>
  );
}
