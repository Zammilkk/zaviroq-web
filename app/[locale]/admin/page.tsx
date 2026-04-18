"use client";
import styles from './page.module.css';

export default function AdminDashboard() {
  return (
    <div>
      <div className={styles.pageHeader}>
        <h1>Command Overview</h1>
        <p>Live technical and lead analytics for the ZAVIROQ architecture.</p>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <h4>Total Incoming Leads</h4>
          <h2>24</h2>
        </div>
        <div className={styles.statCard}>
           <h4>Organic Search Hits (Week)</h4>
           <h2>1,402</h2>
        </div>
        <div className={styles.statCard}>
           <h4>Active Render Speed (LCP)</h4>
           <h2 style={{color: '#25D366'}}>0.8s</h2>
        </div>
        <div className={styles.statCard}>
           <h4>Conversion Rate</h4>
           <h2 style={{color: 'var(--primary-blue)'}}>12.4%</h2>
        </div>
      </div>
      
      <div style={{background: 'rgba(20,20,25,0.6)', padding: '40px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)'}}>
         <h3 style={{marginBottom: '20px'}}>System Status</h3>
         <p style={{color: '#8892B0', lineHeight: 1.6}}>
           All backend Next.js API nodes are running at optimal capacity. Database connects to Local Storage successfully. Meta Pixel and Global GA4 pipelines are intercepting active traffic autonomously. 
         </p>
      </div>
    </div>
  );
}
