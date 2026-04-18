"use client";

import styles from './HomeSections.module.css';

export default function StartupOffer({ locale }: { locale: string }) {
  return (
    <div className={styles.offerContainer}>
      <div className={styles.offerGlow}></div>
      
      <div className={styles.offerContent}>
         <div className={styles.offerBadge}>Exclusive Startup Protocol</div>
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
            <div className={styles.offerPriceMain}>Guaranteed Lowest Price Ever</div>
            <a href={`/${locale}/contact`} className={styles.offerBtn}>Claim Startup Package Now</a>
         </div>
      </div>
    </div>
  );
}
