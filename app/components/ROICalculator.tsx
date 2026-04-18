"use client";

import { useState } from 'react';
import styles from './HomeSections.module.css';

export default function ROICalculator() {
  const [adSpend, setAdSpend] = useState(5000);
  
  // Baseline multiplier for SaaS/Agency: ~4.5x ROI standard
  const projectedRevenue = adSpend * 4.5;
  const leadCount = Math.floor(adSpend / 45); // Assuming $45 CPA

  return (
    <div className={styles.roiContainer}>
      <div className={styles.roiContent}>
        <div className={styles.roiHeader}>
          <h3>Project Your Growth Engine</h3>
          <p>Use our real-time algorithms to forecast potential returns across global networks.</p>
        </div>

        <div className={styles.roiGrid}>
          <div className={styles.roiControls}>
            <div className={styles.roiSliderGroup}>
              <div className={styles.roiLabel}>
                <span>Monthly Ad Spend</span>
                <span className={styles.roiValue}>${adSpend.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="50000" 
                step="500" 
                value={adSpend} 
                onChange={(e) => setAdSpend(Number(e.target.value))}
                className={styles.customSlider}
              />
            </div>
            
            <div className={styles.roiSliderGroup} style={{ marginTop: '20px' }}>
               <div className={styles.roiLabel}>
                <span>Projected Monthly Leads</span>
                <span className={styles.roiValue}>{leadCount.toLocaleString()}+</span>
              </div>
              <div style={{width: '100%', height: '8px', background: 'rgba(59, 139, 212, 0.2)', borderRadius: '5px', overflow: 'hidden'}}>
                <div style={{width: `${(leadCount / 1111) * 100}%`, height: '100%', background: '#3B8BD4', transition: 'width 0.3s ease'}}></div>
              </div>
            </div>
          </div>

          <div className={styles.roiResult}>
            <h4>Predicted Monthly Revenue</h4>
            <div className={styles.projectedReturn}>${projectedRevenue.toLocaleString()}</div>
            <p style={{color: '#A0A5B1', marginTop: '10px'}}>Avg. 4.5x ROAS multiple</p>
            <div className={styles.roiDisclaimer}>* Projections are based on average client performance datasets.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
