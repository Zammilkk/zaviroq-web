"use client";

import { useState, useEffect } from 'react';
import styles from '../page.module.css';

export default function SeoDashboard() {
  const [seoData, setSeoData] = useState({
    title: '',
    description: '',
    keywords: '',
    author: '',
    ogImage: ''
  });
  const [status, setStatus] = useState('');

  // Fetch current Global SEO configs on load
  useEffect(() => {
    fetch('/api/admin/seo')
      .then(res => res.json())
      .then(data => {
        if(data && !data.error) setSeoData(data);
      });
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Deploying SEO updates to server...');
    try {
      const res = await fetch('/api/admin/seo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(seoData)
      });
      const data = await res.json();
      if(data.status === 'success') {
         setStatus('Global Metadata Successfully Deployed! 🟢');
         setTimeout(() => setStatus(''), 4000);
      }
    } catch (err) {
      setStatus('Failed to deploy updates.');
    }
  };

  return (
    <div>
      <div className={styles.pageHeader}>
        <h1>Global SEO Configuration</h1>
        <p>Modify the exact tags Google uses to crawl and rank the ZAVIROQ architecture.</p>
      </div>

      <form className={styles.adminForm} onSubmit={handleSave}>
         {status && <div className={styles.statusBox} style={{background: status.includes('🟢') ? 'rgba(37, 211, 102, 0.1)' : '', borderColor: status.includes('🟢') ? '#25D366' : ''}}>{status}</div>}
         
         <div className={styles.inputGroup}>
            <label>Master HTML Title Tag</label>
            <p className={styles.helpText}>This is exactly what appears on the Google Search Results tab. Keep under 60 chars for optimal CTR.</p>
            <input type="text" className={styles.input} required value={seoData.title} onChange={e => setSeoData({...seoData, title: e.target.value})} />
         </div>

         <div className={styles.inputGroup}>
            <label>Master HTML Description</label>
            <p className={styles.helpText}>The grey block of text displayed below the exact Google search result title.</p>
            <textarea className={styles.input} rows={4} required value={seoData.description} onChange={e => setSeoData({...seoData, description: e.target.value})}></textarea>
         </div>

         <div className={styles.inputGroup}>
            <label>Indexing Keywords</label>
            <p className={styles.helpText}>Comma-separated keyword injection for legacy crawlers and internal routing mechanics.</p>
            <input type="text" className={styles.input} required value={seoData.keywords} onChange={e => setSeoData({...seoData, keywords: e.target.value})} />
         </div>

         <div className={styles.inputGroup}>
            <label>OpenGraph Feature Image (URL)</label>
            <p className={styles.helpText}>The exact image that fetches natively when the website is linked on WhatsApp, LinkedIn, or Twitter.</p>
            <input type="url" className={styles.input} required value={seoData.ogImage} onChange={e => setSeoData({...seoData, ogImage: e.target.value})} />
         </div>

         <button type="submit" className={`btn-primary ${styles.submitBtn}`}>Commit SEO Updates ⚡</button>
      </form>
    </div>
  );
}
