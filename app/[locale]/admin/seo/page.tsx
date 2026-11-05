"use client";

import { useState, useEffect } from 'react';
import styles from '../page.module.css';
import { Search, Save, CheckCircle2, AlertCircle, Globe, ShieldCheck } from 'lucide-react';

export default function SeoDashboard() {
  const [seoData, setSeoData] = useState({
    title: '',
    description: '',
    keywords: '',
    author: 'Zaviroq',
    ogImage: '',
    canonicalUrl: 'https://www.zaviroq.com/',
    businessName: 'Zaviroq - Digital Marketing Agency in Mangalore',
    phone: '+917483830582',
    email: 'info@zaviroq.com'
  });
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    fetch('/api/admin/homepage')
      .then(res => res.json())
      .then((data: any) => {
        if (data.success && data.data && data.data.seo) {
          setSeoData(prev => ({ ...prev, ...data.data.seo }));
        }
      })
      .catch(() => {
        // Fallback to legacy seo endpoint
        fetch('/api/admin/seo')
          .then(res => res.json())
          .then((data: any) => {
            if (data && !data.error) setSeoData(prev => ({ ...prev, ...data }));
          });
      });
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch('/api/admin/homepage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ section: 'seo', data: seoData })
      });
      const data: any = await res.json();
      if (data.success) {
        setStatus({ message: 'Global SEO Metadata successfully deployed to Supabase and ISR edge cache! 🟢', type: 'success' });
        setTimeout(() => setStatus(null), 4000);
      } else {
        setStatus({ message: data.error || 'Failed to update SEO settings.', type: 'error' });
      }
    } catch (err: any) {
      setStatus({ message: err?.message || 'Network error while saving.', type: 'error' });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <div className={styles.topControlBar}>
        <div className={styles.titleMeta}>
          <h1 className={styles.pageTitle}>Global SEO &amp; Meta Engine</h1>
          <p className={styles.pageSubtitle}>
            Modify the exact metadata Google, Bing, and social bots read to rank and index ZAVIROQ.
          </p>
        </div>

        <button 
          type="button" 
          className={styles.btnPrimaryGlow} 
          onClick={handleSave} 
          disabled={saving}
        >
          <Save size={16} />
          <span>{saving ? 'Deploying...' : 'Deploy Global SEO'}</span>
        </button>
      </div>

      <div className={styles.editorCard}>
        <div className={styles.editorHeader}>
          <div className={styles.editorHeaderLeft}>
            <h3 className={styles.editorHeaderTitle}>Search Engine Indexing Configuration</h3>
            <p className={styles.editorHeaderDesc}>Title tags, meta descriptions, and OpenGraph social snippets.</p>
          </div>
          <div className={styles.editorHeaderBadge}>
            <Search size={13} />
            <span>SEO Verified</span>
          </div>
        </div>

        {status && (
          <div style={{
            padding: '14px 18px',
            borderRadius: '10px',
            marginBottom: '24px',
            background: status.type === 'success' ? '#f0fdf4' : '#fef2f2',
            border: `1px solid ${status.type === 'success' ? '#bbf7d0' : '#fecaca'}`,
            color: status.type === 'success' ? '#15803d' : '#dc2626',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            {status.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
            <span>{status.message}</span>
          </div>
        )}

        <form onSubmit={handleSave} className={styles.formGrid}>
          <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
            <label className={styles.inputLabel}>
              <span>Master HTML Title Tag ({seoData.title.length} characters)</span>
              <span className={styles.inputHelper}>Under 60 chars recommended for 100% desktop &amp; mobile search visibility</span>
            </label>
            <input 
              type="text" 
              className={styles.textInput} 
              required 
              value={seoData.title} 
              onChange={e => setSeoData({ ...seoData, title: e.target.value })} 
            />
          </div>

          <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
            <label className={styles.inputLabel}>
              <span>Master HTML Meta Description ({seoData.description.length} characters)</span>
              <span className={styles.inputHelper}>Between 140-160 characters for maximum search CTR</span>
            </label>
            <textarea 
              className={styles.textArea} 
              rows={3} 
              required 
              value={seoData.description} 
              onChange={e => setSeoData({ ...seoData, description: e.target.value })} 
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Indexing Keywords</label>
            <input 
              type="text" 
              className={styles.textInput} 
              value={seoData.keywords} 
              onChange={e => setSeoData({ ...seoData, keywords: e.target.value })} 
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Canonical URL</label>
            <input 
              type="url" 
              className={styles.textInput} 
              value={seoData.canonicalUrl} 
              onChange={e => setSeoData({ ...seoData, canonicalUrl: e.target.value })} 
            />
          </div>

          <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
            <label className={styles.inputLabel}>OpenGraph Feature Image (URL)</label>
            <input 
              type="text" 
              className={styles.textInput} 
              value={seoData.ogImage} 
              onChange={e => setSeoData({ ...seoData, ogImage: e.target.value })} 
            />
            {seoData.ogImage && (
              <div className={styles.imagePreviewBox}>
                <img src={seoData.ogImage} alt="OG Feature Preview" style={{ width: '120px', height: '63px', borderRadius: '8px', objectFit: 'cover' }} />
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Live social preview thumbnail</span>
              </div>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Schema Organization Name</label>
            <input 
              type="text" 
              className={styles.textInput} 
              value={seoData.businessName} 
              onChange={e => setSeoData({ ...seoData, businessName: e.target.value })} 
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Official Telephone</label>
            <input 
              type="text" 
              className={styles.textInput} 
              value={seoData.phone} 
              onChange={e => setSeoData({ ...seoData, phone: e.target.value })} 
            />
          </div>
        </form>
      </div>
    </div>
  );
}
