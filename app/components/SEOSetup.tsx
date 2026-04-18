"use client";

import styles from './HomeSections.module.css';

export default function SEOSetup() {
  return (
    <div className={styles.seoContainer}>
      <div className={styles.seoContent}>
        <div className={styles.seoHeader}>
          <div className="badge-outline">Organic Pipeline</div>
          <h3>Advanced SEO Setup</h3>
          <p>We deploy high-speed indexing frameworks and semantic code to dominate search algorithms across the UAE, Saudi, and India.</p>
        </div>

        <div className={styles.seoBlocks}>
           <div className={styles.seoBlock}>
             <div className={styles.seoIcon}>⚡</div>
             <h4>Technical Vitals</h4>
             <p>Optimizing server response, LCP, and Next.js hydration for flawless algorithmic crawling.</p>
           </div>
           <div className={styles.seoBlock}>
             <div className={styles.seoIcon}>🧠</div>
             <h4>Semantic Architecture</h4>
             <p>Engineering silo structures mapping exact buyer intent for high-ticket acquisition.</p>
           </div>
           <div className={styles.seoBlock}>
             <div className={styles.seoIcon}>🔗</div>
             <h4>Backlink Arrays</h4>
             <p>Injecting domain authority via high-tier localized PR networks and organic outreach.</p>
           </div>
        </div>
      </div>
    </div>
  );
}
