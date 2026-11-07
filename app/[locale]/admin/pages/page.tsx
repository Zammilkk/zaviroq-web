"use client";

import { useState, useEffect } from 'react';
import styles from '../page.module.css';
import { 
  Send, RotateCcw, CheckCircle2, AlertCircle, 
  Sparkles, Layers, HelpCircle, Star, Trash2, Plus, 
  ExternalLink, Globe, Building2, Compass, FileText, 
  Cpu, Rocket, Check, ArrowRight, MapPin, BarChart3
} from 'lucide-react';

export default function PagesContentAdmin() {
  const [activePage, setActivePage] = useState<'industries' | 'services' | 'content_marketing' | 'performance_marketing' | 'web_development' | 'seo' | 'portfolio' | 'locations'>('industries');
  const [pagesData, setPagesData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    fetch('/api/admin/pages')
      .then(res => res.json())
      .then((res: any) => {
        if (res.success && res.data) {
          setPagesData(res.data);
        }
      })
      .catch(err => {
        console.error('Failed to load pages data:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4500);
  };

  const handleSavePage = async () => {
    if (!pagesData || !pagesData[activePage]) return;
    setSaving(true);
    try {
      const res = await fetch('/api/admin/pages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pageKey: activePage,
          data: pagesData[activePage]
        })
      });
      const data: any = await res.json();
      if (data.success) {
        setLastSaved(new Date().toLocaleTimeString());
        showToast(`All sections and points for "${activePage}" successfully synchronized!`, 'success');
      } else {
        showToast(data.error || 'Failed to save changes.', 'error');
      }
    } catch (err: any) {
      showToast(err?.message || 'Network error while saving.', 'error');
    } finally {
      setSaving(false);
    }
  };

  // Helper updaters
  const updateNested = (section: string, field: string, val: any) => {
    setPagesData((prev: any) => ({
      ...prev,
      [activePage]: {
        ...prev[activePage],
        [section]: {
          ...prev[activePage]?.[section],
          [field]: val
        }
      }
    }));
  };

  const updateArrayItem = (section: string, index: number, field: string, val: any) => {
    setPagesData((prev: any) => {
      const list = [...(prev[activePage]?.[section] || [])];
      list[index] = { ...list[index], [field]: val };
      return {
        ...prev,
        [activePage]: {
          ...prev[activePage],
          [section]: list
        }
      };
    });
  };

  const updateLocationField = (city: string, field: string, val: any) => {
    setPagesData((prev: any) => ({
      ...prev,
      locations: {
        ...prev.locations,
        [city]: {
          ...prev.locations?.[city],
          [field]: val
        }
      }
    }));
  };

  if (loading || !pagesData) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
        <div style={{ textAlign: 'center' }}>
          <div className={styles.statusDotPulse} style={{ width: '16px', height: '16px', margin: '0 auto 16px' }} />
          <p style={{ color: '#64748b', fontWeight: 600 }}>Loading Site Pages Matrix...</p>
        </div>
      </div>
    );
  }

  const PAGE_TABS = [
    { id: 'industries', label: '🏢 Industries We Power', path: '/industries' },
    { id: 'services', label: '🚀 Master Services Hub', path: '/services' },
    { id: 'content_marketing', label: '✍️ Content Marketing', path: '/services/digital-marketing/content-marketing' },
    { id: 'performance_marketing', label: '📈 Performance Marketing', path: '/services/performance-marketing' },
    { id: 'web_development', label: '💻 Next.js Web Dev', path: '/services/web-development' },
    { id: 'seo', label: '🔍 Algorithmic SEO', path: '/services/seo' },
    { id: 'portfolio', label: '🏆 Portfolio & Case Studies', path: '/portfolio' },
    { id: 'locations', label: '📍 Regional Locations', path: '/locations/dubai' }
  ];

  const currentTab = PAGE_TABS.find(t => t.id === activePage);

  return (
    <div>
      {/* Top Sticky Control Bar */}
      <div className={styles.topControlBar}>
        <div className={styles.titleMeta}>
          <h1 className={styles.pageTitle}>Multi-Page Content &amp; Points Editor</h1>
          <p className={styles.pageSubtitle}>
            Update every single section, point, statistic, and CTA across all website pages with instant cloud publishing.
          </p>
        </div>

        <div className={styles.actionsGroup}>
          {lastSaved && (
            <div className={styles.syncIndicator}>
              <Check size={14} color="#16a34a" />
              <span>Synced at {lastSaved}</span>
            </div>
          )}

          {currentTab && (
            <a 
              href={currentTab.path} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.btnSecondaryGlass}
              title="Preview Live Page"
            >
              <ExternalLink size={15} />
              <span>Preview Live Page</span>
            </a>
          )}

          <button 
            type="button" 
            className={styles.btnPrimaryGlow} 
            onClick={handleSavePage} 
            disabled={saving}
          >
            <Send size={15} />
            <span>{saving ? 'Synchronizing...' : `Publish Changes to "${activePage}"`}</span>
          </button>
        </div>
      </div>

      {toast && (
        <div style={{
          padding: '14px 18px',
          borderRadius: '12px',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: toast.type === 'success' ? '#ecfdf5' : '#fef2f2',
          border: `1px solid ${toast.type === 'success' ? '#a7f3d0' : '#fecaca'}`,
          color: toast.type === 'success' ? '#065f46' : '#991b1b',
          fontSize: '0.9rem',
          fontWeight: 600
        }}>
          {toast.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
          <span>{toast.message}</span>
        </div>
      )}

      {/* Visual Page Switcher Tabs */}
      <div className={styles.tabsContainer}>
        {PAGE_TABS.map(tab => (
          <button
            key={tab.id}
            type="button"
            className={`${styles.tabBtn} ${activePage === tab.id ? styles.activeTabBtn : ''}`}
            onClick={() => setActivePage(tab.id as any)}
          >
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* =========================================================================
          PAGE 1: INDUSTRIES PAGE EDITOR
          ========================================================================= */}
      {activePage === 'industries' && pagesData.industries && (
        <div>
          {/* Section 1: Hero */}
          <div className={styles.editorCard}>
            <div className={styles.editorHeader}>
              <div className={styles.editorHeaderLeft}>
                <h3 className={styles.editorHeaderTitle}>Hero Section &amp; CTAs</h3>
                <p className={styles.editorHeaderDesc}>The primary viewport headline, description, and action buttons.</p>
              </div>
              <div className={styles.editorHeaderBadge}>
                <Building2 size={13} />
                <span>/industries Hero</span>
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Badge Tagline</label>
                <input 
                  type="text" 
                  className={styles.textInput}
                  value={pagesData.industries.hero?.badge || ''}
                  onChange={e => updateNested('hero', 'badge', e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Main Headline</label>
                <input 
                  type="text" 
                  className={styles.textInput}
                  value={pagesData.industries.hero?.title || ''}
                  onChange={e => updateNested('hero', 'title', e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Purple Accent Headline Text</label>
                <input 
                  type="text" 
                  className={styles.textInput}
                  value={pagesData.industries.hero?.accentTitle || ''}
                  onChange={e => updateNested('hero', 'accentTitle', e.target.value)}
                />
              </div>

              <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
                <label className={styles.inputLabel}>Sub-Description Paragraph</label>
                <textarea 
                  className={styles.textArea}
                  rows={2}
                  value={pagesData.industries.hero?.description || ''}
                  onChange={e => updateNested('hero', 'description', e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Primary CTA Button Label</label>
                <input 
                  type="text" 
                  className={styles.textInput}
                  value={pagesData.industries.hero?.primaryCtaText || ''}
                  onChange={e => updateNested('hero', 'primaryCtaText', e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Secondary CTA Button Label</label>
                <input 
                  type="text" 
                  className={styles.textInput}
                  value={pagesData.industries.hero?.secondaryCtaText || ''}
                  onChange={e => updateNested('hero', 'secondaryCtaText', e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Section 2: Industry Spotlight */}
          <div className={styles.editorCard}>
            <div className={styles.editorHeader}>
              <div className={styles.editorHeaderLeft}>
                <h3 className={styles.editorHeaderTitle}>Interactive Industry Spotlight</h3>
                <p className={styles.editorHeaderDesc}>The featured showcase card with key metrics and lead growth statistics.</p>
              </div>
              <div className={styles.editorHeaderBadge}>
                <Sparkles size={13} />
                <span>Spotlight Showcase</span>
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Spotlight Title</label>
                <input 
                  type="text" 
                  className={styles.textInput}
                  value={pagesData.industries.spotlight?.title || ''}
                  onChange={e => updateNested('spotlight', 'title', e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Purple Accent Title</label>
                <input 
                  type="text" 
                  className={styles.textInput}
                  value={pagesData.industries.spotlight?.accentTitle || ''}
                  onChange={e => updateNested('spotlight', 'accentTitle', e.target.value)}
                />
              </div>

              <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
                <label className={styles.inputLabel}>Spotlight Description</label>
                <textarea 
                  className={styles.textArea}
                  rows={2}
                  value={pagesData.industries.spotlight?.description || ''}
                  onChange={e => updateNested('spotlight', 'description', e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Stat 1 Value</label>
                <input 
                  type="text" 
                  className={styles.textInput}
                  value={pagesData.industries.spotlight?.stat1Value || ''}
                  onChange={e => updateNested('spotlight', 'stat1Value', e.target.value)}
                />
                <span className={styles.inputHelper}>Label:</span>
                <input 
                  type="text" 
                  className={styles.textInput}
                  value={pagesData.industries.spotlight?.stat1Label || ''}
                  onChange={e => updateNested('spotlight', 'stat1Label', e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Stat 2 Value</label>
                <input 
                  type="text" 
                  className={styles.textInput}
                  value={pagesData.industries.spotlight?.stat2Value || ''}
                  onChange={e => updateNested('spotlight', 'stat2Value', e.target.value)}
                />
                <span className={styles.inputHelper}>Label:</span>
                <input 
                  type="text" 
                  className={styles.textInput}
                  value={pagesData.industries.spotlight?.stat2Label || ''}
                  onChange={e => updateNested('spotlight', 'stat2Label', e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Stat 3 Value</label>
                <input 
                  type="text" 
                  className={styles.textInput}
                  value={pagesData.industries.spotlight?.stat3Value || ''}
                  onChange={e => updateNested('spotlight', 'stat3Value', e.target.value)}
                />
                <span className={styles.inputHelper}>Label:</span>
                <input 
                  type="text" 
                  className={styles.textInput}
                  value={pagesData.industries.spotlight?.stat3Label || ''}
                  onChange={e => updateNested('spotlight', 'stat3Label', e.target.value)}
                />
              </div>

              <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
                <label className={styles.inputLabel}>Spotlight Button Text</label>
                <input 
                  type="text" 
                  className={styles.textInput}
                  value={pagesData.industries.spotlight?.ctaText || ''}
                  onChange={e => updateNested('spotlight', 'ctaText', e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Section 3: 4 Value Propositions */}
          <div className={styles.editorCard}>
            <div className={styles.editorHeader}>
              <div className={styles.editorHeaderLeft}>
                <h3 className={styles.editorHeaderTitle}>4 Value Propositions Points</h3>
                <p className={styles.editorHeaderDesc}>The 4 trust pillars below the spotlight.</p>
              </div>
            </div>

            <div className={styles.formGrid}>
              {(pagesData.industries.values || []).map((val: any, idx: number) => (
                <div key={idx} style={{ padding: '16px', border: '1px solid #e2e8f0', borderRadius: '12px', background: '#f8fafc' }}>
                  <label className={styles.inputLabel}>Point {idx + 1} Title</label>
                  <input 
                    type="text" 
                    className={styles.textInput}
                    style={{ marginBottom: '10px' }}
                    value={val.title}
                    onChange={e => updateArrayItem('values', idx, 'title', e.target.value)}
                  />
                  <label className={styles.inputLabel}>Description</label>
                  <textarea 
                    className={styles.textArea}
                    rows={2}
                    value={val.description}
                    onChange={e => updateArrayItem('values', idx, 'description', e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Bottom Banner */}
          <div className={styles.editorCard}>
            <div className={styles.editorHeader}>
              <div className={styles.editorHeaderLeft}>
                <h3 className={styles.editorHeaderTitle}>Bottom Purple Growth Banner</h3>
                <p className={styles.editorHeaderDesc}>The high-converting 3D growth CTA banner at the page bottom.</p>
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Banner Headline</label>
                <input 
                  type="text" 
                  className={styles.textInput}
                  value={pagesData.industries.banner?.title || ''}
                  onChange={e => updateNested('banner', 'title', e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Primary Button Label</label>
                <input 
                  type="text" 
                  className={styles.textInput}
                  value={pagesData.industries.banner?.primaryCtaText || ''}
                  onChange={e => updateNested('banner', 'primaryCtaText', e.target.value)}
                />
              </div>

              <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
                <label className={styles.inputLabel}>Banner Description</label>
                <textarea 
                  className={styles.textArea}
                  rows={2}
                  value={pagesData.industries.banner?.description || ''}
                  onChange={e => updateNested('banner', 'description', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          PAGE 2: CONTENT MARKETING PAGE EDITOR
          ========================================================================= */}
      {activePage === 'content_marketing' && pagesData.content_marketing && (
        <div>
          <div className={styles.editorCard}>
            <div className={styles.editorHeader}>
              <div className={styles.editorHeaderLeft}>
                <h3 className={styles.editorHeaderTitle}>Content Marketing Hero</h3>
                <p className={styles.editorHeaderDesc}>Headline, description, and primary CTA for /services/digital-marketing/content-marketing.</p>
              </div>
              <div className={styles.editorHeaderBadge}>
                <FileText size={13} />
                <span>Content Engine</span>
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Badge Label</label>
                <input 
                  type="text" 
                  className={styles.textInput}
                  value={pagesData.content_marketing.hero?.badge || ''}
                  onChange={e => updateNested('hero', 'badge', e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Main Headline</label>
                <input 
                  type="text" 
                  className={styles.textInput}
                  value={pagesData.content_marketing.hero?.title || ''}
                  onChange={e => updateNested('hero', 'title', e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Accent Title</label>
                <input 
                  type="text" 
                  className={styles.textInput}
                  value={pagesData.content_marketing.hero?.accentTitle || ''}
                  onChange={e => updateNested('hero', 'accentTitle', e.target.value)}
                />
              </div>

              <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
                <label className={styles.inputLabel}>Sub-Description Paragraph</label>
                <textarea 
                  className={styles.textArea}
                  rows={2}
                  value={pagesData.content_marketing.hero?.description || ''}
                  onChange={e => updateNested('hero', 'description', e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>CTA Button Label</label>
                <input 
                  type="text" 
                  className={styles.textInput}
                  value={pagesData.content_marketing.hero?.primaryCtaText || ''}
                  onChange={e => updateNested('hero', 'primaryCtaText', e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Production Framework 5 Scrollable Stages */}
          <div className={styles.editorCard}>
            <div className={styles.editorHeader}>
              <div className={styles.editorHeaderLeft}>
                <h3 className={styles.editorHeaderTitle}>5 Production Framework Stages</h3>
                <p className={styles.editorHeaderDesc}>Edit each horizontal stage card in the Production Framework section.</p>
              </div>
            </div>

            <div className={styles.formGrid}>
              {(pagesData.content_marketing.stages || []).map((stage: any, idx: number) => (
                <div key={idx} style={{ padding: '16px', border: '1px solid #e2e8f0', borderRadius: '12px', background: '#f8fafc' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontWeight: 800, color: '#4f46e5', fontSize: '0.85rem' }}>Stage {stage.num}</span>
                  </div>
                  <label className={styles.inputLabel}>Stage Name</label>
                  <input 
                    type="text" 
                    className={styles.textInput}
                    style={{ marginBottom: '10px' }}
                    value={stage.name}
                    onChange={e => updateArrayItem('stages', idx, 'name', e.target.value)}
                  />
                  <label className={styles.inputLabel}>Process Details</label>
                  <textarea 
                    className={styles.textArea}
                    rows={2}
                    value={stage.detail}
                    onChange={e => updateArrayItem('stages', idx, 'detail', e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Content Stats */}
          <div className={styles.editorCard}>
            <div className={styles.editorHeader}>
              <div className={styles.editorHeaderLeft}>
                <h3 className={styles.editorHeaderTitle}>ROI &amp; Output Metrics</h3>
                <p className={styles.editorHeaderDesc}>Key performance counters displayed to prospective clients.</p>
              </div>
            </div>

            <div className={styles.formGrid}>
              {(pagesData.content_marketing.stats || []).map((st: any, idx: number) => (
                <div key={idx} style={{ padding: '16px', border: '1px solid #e2e8f0', borderRadius: '12px', background: '#f8fafc' }}>
                  <label className={styles.inputLabel}>Metric Value</label>
                  <input 
                    type="text" 
                    className={styles.textInput}
                    style={{ marginBottom: '10px' }}
                    value={st.value}
                    onChange={e => updateArrayItem('stats', idx, 'value', e.target.value)}
                  />
                  <label className={styles.inputLabel}>Metric Label</label>
                  <input 
                    type="text" 
                    className={styles.textInput}
                    value={st.label}
                    onChange={e => updateArrayItem('stats', idx, 'label', e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          PAGE 3: SERVICES MASTER HUB EDITOR
          ========================================================================= */}
      {activePage === 'services' && pagesData.services && (
        <div className={styles.editorCard}>
          <div className={styles.editorHeader}>
            <div className={styles.editorHeaderLeft}>
              <h3 className={styles.editorHeaderTitle}>Master Services Hub (/services)</h3>
              <p className={styles.editorHeaderDesc}>Configure the overview headline, description, and primary deliverables.</p>
            </div>
          </div>

          <div className={styles.formGrid}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Eyebrow</label>
              <input 
                type="text" 
                className={styles.textInput}
                value={pagesData.services.hero?.eyebrow || ''}
                onChange={e => updateNested('hero', 'eyebrow', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Page Title</label>
              <input 
                type="text" 
                className={styles.textInput}
                value={pagesData.services.hero?.title || ''}
                onChange={e => updateNested('hero', 'title', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
              <label className={styles.inputLabel}>Overview Description</label>
              <textarea 
                className={styles.textArea}
                rows={2}
                value={pagesData.services.hero?.description || ''}
                onChange={e => updateNested('hero', 'description', e.target.value)}
              />
            </div>
          </div>

          <div style={{ marginTop: '24px' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '14px', color: '#0f172a' }}>Service Pillars</h4>
            <div className={styles.formGrid}>
              {(pagesData.services.highlights || []).map((h: any, idx: number) => (
                <div key={idx} style={{ padding: '16px', border: '1px solid #e2e8f0', borderRadius: '12px', background: '#f8fafc' }}>
                  <label className={styles.inputLabel}>Pillar {idx + 1} Title</label>
                  <input 
                    type="text" 
                    className={styles.textInput}
                    style={{ marginBottom: '8px' }}
                    value={h.title}
                    onChange={e => updateArrayItem('highlights', idx, 'title', e.target.value)}
                  />
                  <label className={styles.inputLabel}>Description</label>
                  <textarea 
                    className={styles.textArea}
                    rows={2}
                    value={h.desc}
                    onChange={e => updateArrayItem('highlights', idx, 'desc', e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          PAGE 4: PERFORMANCE MARKETING EDITOR
          ========================================================================= */}
      {activePage === 'performance_marketing' && pagesData.performance_marketing && (
        <div className={styles.editorCard}>
          <div className={styles.editorHeader}>
            <div className={styles.editorHeaderLeft}>
              <h3 className={styles.editorHeaderTitle}>Performance Marketing (/services/performance-marketing)</h3>
              <p className={styles.editorHeaderDesc}>Headlines and conversion tactics.</p>
            </div>
          </div>

          <div className={styles.formGrid}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Hero Title</label>
              <input 
                type="text" 
                className={styles.textInput}
                value={pagesData.performance_marketing.hero?.title || ''}
                onChange={e => updateNested('hero', 'title', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Accent Title</label>
              <input 
                type="text" 
                className={styles.textInput}
                value={pagesData.performance_marketing.hero?.accentTitle || ''}
                onChange={e => updateNested('hero', 'accentTitle', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
              <label className={styles.inputLabel}>Hero Description</label>
              <textarea 
                className={styles.textArea}
                rows={2}
                value={pagesData.performance_marketing.hero?.description || ''}
                onChange={e => updateNested('hero', 'description', e.target.value)}
              />
            </div>
          </div>

          <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '24px 0 14px', color: '#0f172a' }}>Acquisition Tactics</h4>
          <div className={styles.formGrid}>
            {(pagesData.performance_marketing.tactics || []).map((t: any, idx: number) => (
              <div key={idx} style={{ padding: '16px', border: '1px solid #e2e8f0', borderRadius: '12px', background: '#f8fafc' }}>
                <label className={styles.inputLabel}>Tactic {idx + 1}</label>
                <input 
                  type="text" 
                  className={styles.textInput}
                  style={{ marginBottom: '8px' }}
                  value={t.title}
                  onChange={e => updateArrayItem('tactics', idx, 'title', e.target.value)}
                />
                <label className={styles.inputLabel}>Description</label>
                <textarea 
                  className={styles.textArea}
                  rows={2}
                  value={t.desc}
                  onChange={e => updateArrayItem('tactics', idx, 'desc', e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          PAGE 5: NEXT.JS WEB DEVELOPMENT EDITOR
          ========================================================================= */}
      {activePage === 'web_development' && pagesData.web_development && (
        <div className={styles.editorCard}>
          <div className={styles.editorHeader}>
            <div className={styles.editorHeaderLeft}>
              <h3 className={styles.editorHeaderTitle}>Web &amp; App Development (/services/web-development)</h3>
              <p className={styles.editorHeaderDesc}>Core architecture deliverables and speed specifications.</p>
            </div>
          </div>

          <div className={styles.formGrid}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Hero Title</label>
              <input 
                type="text" 
                className={styles.textInput}
                value={pagesData.web_development.hero?.title || ''}
                onChange={e => updateNested('hero', 'title', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Accent Title</label>
              <input 
                type="text" 
                className={styles.textInput}
                value={pagesData.web_development.hero?.accentTitle || ''}
                onChange={e => updateNested('hero', 'accentTitle', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
              <label className={styles.inputLabel}>Hero Description</label>
              <textarea 
                className={styles.textArea}
                rows={2}
                value={pagesData.web_development.hero?.description || ''}
                onChange={e => updateNested('hero', 'description', e.target.value)}
              />
            </div>
          </div>

          <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '24px 0 14px', color: '#0f172a' }}>Deliverables</h4>
          <div className={styles.formGrid}>
            {(pagesData.web_development.deliverables || []).map((d: any, idx: number) => (
              <div key={idx} style={{ padding: '16px', border: '1px solid #e2e8f0', borderRadius: '12px', background: '#f8fafc' }}>
                <label className={styles.inputLabel}>Deliverable {idx + 1}</label>
                <input 
                  type="text" 
                  className={styles.textInput}
                  style={{ marginBottom: '8px' }}
                  value={d.title}
                  onChange={e => updateArrayItem('deliverables', idx, 'title', e.target.value)}
                />
                <label className={styles.inputLabel}>Description</label>
                <textarea 
                  className={styles.textArea}
                  rows={2}
                  value={d.desc}
                  onChange={e => updateArrayItem('deliverables', idx, 'desc', e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          PAGE 6: ALGORITHMIC SEO MASTER
          ========================================================================= */}
      {activePage === 'seo' && pagesData.seo && (
        <div className={styles.editorCard}>
          <div className={styles.editorHeader}>
            <div className={styles.editorHeaderLeft}>
              <h3 className={styles.editorHeaderTitle}>Algorithmic SEO (/services/seo)</h3>
              <p className={styles.editorHeaderDesc}>SEO deliverables, tactics, and Google ranking signals.</p>
            </div>
          </div>

          <div className={styles.formGrid}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Hero Title</label>
              <input 
                type="text" 
                className={styles.textInput}
                value={pagesData.seo.hero?.title || ''}
                onChange={e => updateNested('hero', 'title', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Accent Title</label>
              <input 
                type="text" 
                className={styles.textInput}
                value={pagesData.seo.hero?.accentTitle || ''}
                onChange={e => updateNested('hero', 'accentTitle', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
              <label className={styles.inputLabel}>Hero Description</label>
              <textarea 
                className={styles.textArea}
                rows={2}
                value={pagesData.seo.hero?.description || ''}
                onChange={e => updateNested('hero', 'description', e.target.value)}
              />
            </div>
          </div>

          <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '24px 0 14px', color: '#0f172a' }}>SEO Deliverables</h4>
          <div className={styles.formGrid}>
            {(pagesData.seo.deliverables || []).map((d: any, idx: number) => (
              <div key={idx} style={{ padding: '16px', border: '1px solid #e2e8f0', borderRadius: '12px', background: '#f8fafc' }}>
                <label className={styles.inputLabel}>Deliverable {idx + 1}</label>
                <input 
                  type="text" 
                  className={styles.textInput}
                  style={{ marginBottom: '8px' }}
                  value={d.title}
                  onChange={e => updateArrayItem('deliverables', idx, 'title', e.target.value)}
                />
                <label className={styles.inputLabel}>Description</label>
                <textarea 
                  className={styles.textArea}
                  rows={2}
                  value={d.desc}
                  onChange={e => updateArrayItem('deliverables', idx, 'desc', e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          PAGE 7: PORTFOLIO & CASE STUDIES
          ========================================================================= */}
      {activePage === 'portfolio' && pagesData.portfolio && (
        <div className={styles.editorCard}>
          <div className={styles.editorHeader}>
            <div className={styles.editorHeaderLeft}>
              <h3 className={styles.editorHeaderTitle}>Portfolio &amp; Case Studies (/portfolio)</h3>
              <p className={styles.editorHeaderDesc}>Headline copy and key impact counters.</p>
            </div>
          </div>

          <div className={styles.formGrid}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Hero Eyebrow</label>
              <input 
                type="text" 
                className={styles.textInput}
                value={pagesData.portfolio.hero?.badge || ''}
                onChange={e => updateNested('hero', 'badge', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Hero Title</label>
              <input 
                type="text" 
                className={styles.textInput}
                value={pagesData.portfolio.hero?.title || ''}
                onChange={e => updateNested('hero', 'title', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
              <label className={styles.inputLabel}>Description</label>
              <textarea 
                className={styles.textArea}
                rows={2}
                value={pagesData.portfolio.hero?.description || ''}
                onChange={e => updateNested('hero', 'description', e.target.value)}
              />
            </div>
          </div>

          <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '24px 0 14px', color: '#0f172a' }}>Global Statistics</h4>
          <div className={styles.formGrid}>
            {(pagesData.portfolio.stats || []).map((st: any, idx: number) => (
              <div key={idx} style={{ padding: '16px', border: '1px solid #e2e8f0', borderRadius: '12px', background: '#f8fafc' }}>
                <label className={styles.inputLabel}>Metric Value</label>
                <input 
                  type="text" 
                  className={styles.textInput}
                  style={{ marginBottom: '8px' }}
                  value={st.value}
                  onChange={e => updateArrayItem('stats', idx, 'value', e.target.value)}
                />
                <label className={styles.inputLabel}>Label</label>
                <input 
                  type="text" 
                  className={styles.textInput}
                  value={st.label}
                  onChange={e => updateArrayItem('stats', idx, 'label', e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          PAGE 8: REGIONAL LOCATIONS
          ========================================================================= */}
      {activePage === 'locations' && pagesData.locations && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {['dubai', 'riyadh', 'mangalore'].map(city => {
            const loc = pagesData.locations[city] || {};
            return (
              <div key={city} className={styles.editorCard}>
                <div className={styles.editorHeader}>
                  <div className={styles.editorHeaderLeft}>
                    <h3 className={styles.editorHeaderTitle}>{loc.cityName || city.toUpperCase()} Hub</h3>
                    <p className={styles.editorHeaderDesc}>Localized address, phone numbers, and hero copy.</p>
                  </div>
                  <div className={styles.editorHeaderBadge}>
                    <MapPin size={13} />
                    <span>/locations/{city}</span>
                  </div>
                </div>

                <div className={styles.formGrid}>
                  <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
                    <label className={styles.inputLabel}>Localized Hero Title</label>
                    <input 
                      type="text" 
                      className={styles.textInput}
                      value={loc.heroTitle || ''}
                      onChange={e => updateLocationField(city, 'heroTitle', e.target.value)}
                    />
                  </div>

                  <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
                    <label className={styles.inputLabel}>Localized Hero Description</label>
                    <textarea 
                      className={styles.textArea}
                      rows={2}
                      value={loc.heroDesc || ''}
                      onChange={e => updateLocationField(city, 'heroDesc', e.target.value)}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>Contact Phone</label>
                    <input 
                      type="text" 
                      className={styles.textInput}
                      value={loc.phone || ''}
                      onChange={e => updateLocationField(city, 'phone', e.target.value)}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>Contact Email</label>
                    <input 
                      type="email" 
                      className={styles.textInput}
                      value={loc.email || ''}
                      onChange={e => updateLocationField(city, 'email', e.target.value)}
                    />
                  </div>

                  <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
                    <label className={styles.inputLabel}>Physical Address</label>
                    <input 
                      type="text" 
                      className={styles.textInput}
                      value={loc.address || ''}
                      onChange={e => updateLocationField(city, 'address', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
