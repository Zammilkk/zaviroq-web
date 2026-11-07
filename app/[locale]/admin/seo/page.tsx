"use client";

import { useState, useEffect } from 'react';
import styles from '../page.module.css';
import { 
  Search, Save, CheckCircle2, AlertCircle, Globe, ShieldCheck, 
  ExternalLink, Eye, RefreshCw, Sparkles, HelpCircle, Layers, Check
} from 'lucide-react';

interface PageSeoItem {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  robots?: string;
  schemaType?: string;
}

const PAGE_OPTIONS = [
  { path: '/', label: '🏠 Homepage (Main Platform)' },
  { path: '/industries', label: '🏢 Industries We Power' },
  { path: '/services', label: '🚀 Master Services Hub' },
  { path: '/services/digital-marketing/content-marketing', label: '✍️ Content Marketing' },
  { path: '/services/seo', label: '🔍 Algorithmic SEO Mastery' },
  { path: '/services/performance-marketing', label: '📈 High-ROAS Performance Ads' },
  { path: '/services/web-development', label: '💻 Next.js Web Development' },
  { path: '/portfolio', label: '🏆 Portfolio & Case Studies' },
  { path: '/locations/dubai', label: '📍 Dubai, UAE Location' },
  { path: '/locations/riyadh', label: '📍 Riyadh, Saudi Arabia Location' },
  { path: '/locations/mangalore', label: '📍 Mangalore, India Location' },
  { path: '/blog', label: '📝 Blog & Growth Intel' }
];

export default function SeoDashboard() {
  const [selectedPage, setSelectedPage] = useState('/');
  const [pagesMap, setPagesMap] = useState<Record<string, PageSeoItem>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Active page draft state
  const [currentPageSeo, setCurrentPageSeo] = useState<PageSeoItem>({
    title: '',
    description: '',
    keywords: '',
    canonicalUrl: '',
    ogTitle: '',
    ogDescription: '',
    ogImage: 'https://www.zaviroq.com/og-image.png',
    robots: 'index, follow',
    schemaType: 'Organization'
  });

  useEffect(() => {
    fetch('/api/admin/seo')
      .then(res => res.json())
      .then((data: any) => {
        if (data.success && data.data) {
          const pages = data.data.pages || {};
          setPagesMap(pages);
          if (pages['/']) {
            setCurrentPageSeo(pages['/']);
          } else {
            setCurrentPageSeo({
              title: data.data.title || '',
              description: data.data.description || '',
              keywords: data.data.keywords || '',
              canonicalUrl: data.data.canonicalUrl || 'https://www.zaviroq.com/',
              ogTitle: data.data.ogTitle || data.data.title || '',
              ogDescription: data.data.ogDescription || data.data.description || '',
              ogImage: data.data.ogImage || 'https://www.zaviroq.com/og-image.png',
              robots: 'index, follow',
              schemaType: 'Organization'
            });
          }
        }
      })
      .catch(err => {
        console.error('Failed to load SEO config:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handlePageChange = (pagePath: string) => {
    // Save current into map before switching
    setPagesMap(prev => ({
      ...prev,
      [selectedPage]: currentPageSeo
    }));

    setSelectedPage(pagePath);
    if (pagesMap[pagePath]) {
      setCurrentPageSeo(pagesMap[pagePath]);
    } else {
      // Default fallback
      setCurrentPageSeo({
        title: `${PAGE_OPTIONS.find(p => p.path === pagePath)?.label.replace(/[^a-zA-Z0-9 ]/g, '').trim()} | Zaviroq`,
        description: `Explore ${PAGE_OPTIONS.find(p => p.path === pagePath)?.label} at Zaviroq. High-performance digital growth, technical SEO, and web engineering.`,
        keywords: 'digital marketing, seo, web design, zaviroq',
        canonicalUrl: `https://www.zaviroq.com${pagePath === '/' ? '' : pagePath}`,
        ogTitle: '',
        ogDescription: '',
        ogImage: 'https://www.zaviroq.com/og-image.png',
        robots: 'index, follow',
        schemaType: pagePath.startsWith('/locations') ? 'LocalBusiness' : pagePath.startsWith('/services') ? 'Service' : 'WebPage'
      });
    }
  };

  const updateField = (field: keyof PageSeoItem, val: string) => {
    setCurrentPageSeo(prev => ({
      ...prev,
      [field]: val
    }));
  };

  const handleSaveCurrentPage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setSaving(true);
    try {
      const updatedPages = {
        ...pagesMap,
        [selectedPage]: currentPageSeo
      };

      const res = await fetch('/api/admin/seo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pagePath: selectedPage,
          data: currentPageSeo,
          pages: updatedPages
        })
      });

      const data: any = await res.json();
      if (data.success) {
        setPagesMap(updatedPages);
        setStatus({ 
          message: `SEO successfully deployed for "${selectedPage}"! Live search indexing tags updated.`, 
          type: 'success' 
        });
        setTimeout(() => setStatus(null), 4500);
      } else {
        setStatus({ message: data.error || 'Failed to update SEO data.', type: 'error' });
      }
    } catch (err: any) {
      setStatus({ message: err?.message || 'Network error while saving.', type: 'error' });
    } finally {
      setSaving(false);
    }
  };

  const titleLength = currentPageSeo.title.length;
  const descLength = currentPageSeo.description.length;

  return (
    <div>
      {/* Top Header Control Bar */}
      <div className={styles.topControlBar}>
        <div className={styles.titleMeta}>
          <h1 className={styles.pageTitle}>Master Per-Page SEO &amp; Meta Engine</h1>
          <p className={styles.pageSubtitle}>
            Configure precise title tags, meta descriptions, canonical URLs, and Google SERP snippets for every single page.
          </p>
        </div>

        <button 
          type="button" 
          className={styles.btnPrimaryGlow} 
          onClick={() => handleSaveCurrentPage()} 
          disabled={saving}
        >
          <Save size={16} />
          <span>{saving ? 'Deploying...' : `Deploy SEO for "${selectedPage}"`}</span>
        </button>
      </div>

      {status && (
        <div style={{
          padding: '14px 18px',
          borderRadius: '12px',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: status.type === 'success' ? '#ecfdf5' : '#fef2f2',
          border: `1px solid ${status.type === 'success' ? '#a7f3d0' : '#fecaca'}`,
          color: status.type === 'success' ? '#065f46' : '#991b1b',
          fontSize: '0.9rem',
          fontWeight: 600
        }}>
          {status.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
          <span>{status.message}</span>
        </div>
      )}

      {/* Page Selector Bar */}
      <div style={{
        background: '#ffffff',
        border: '1px solid rgba(226, 232, 240, 0.9)',
        borderRadius: '16px',
        padding: '20px 24px',
        marginBottom: '28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        boxShadow: '0 4px 20px rgba(148, 163, 184, 0.05)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Globe size={20} />
          </div>
          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'block', marginBottom: '2px' }}>
              Select Page to Configure SEO
            </label>
            <span style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a' }}>
              Target Page Route: <span style={{ color: '#4f46e5' }}>{selectedPage}</span>
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: '1 1 340px', maxWidth: '480px' }}>
          <select 
            value={selectedPage} 
            onChange={(e) => handlePageChange(e.target.value)}
            className={styles.textInput}
            style={{ fontWeight: 600, padding: '12px 16px', borderRadius: '10px' }}
          >
            {PAGE_OPTIONS.map(opt => (
              <option key={opt.path} value={opt.path}>
                {opt.label} ({opt.path})
              </option>
            ))}
          </select>

          <a 
            href={selectedPage} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.btnSecondaryGlass}
            style={{ padding: '12px 16px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
            title="Inspect Live Page in New Tab"
          >
            <ExternalLink size={15} />
            <span>Visit</span>
          </a>
        </div>
      </div>

      {/* Live Google Search Engine Result Page (SERP) Simulator */}
      <div style={{
        background: '#ffffff',
        border: '1px solid rgba(226, 232, 240, 0.9)',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '28px',
        boxShadow: '0 4px 20px rgba(148, 163, 184, 0.05)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid #f1f5f9' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#4285f4', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
              Google Search Result Snippet Preview
            </span>
          </div>
          <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Live SERP Rendering</span>
        </div>

        <div style={{
          background: '#ffffff',
          padding: '16px 20px',
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          maxWidth: '650px'
        }}>
          {/* Google breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px', fontWeight: 'bold' }}>
              Z
            </div>
            <span style={{ fontSize: '0.85rem', color: '#202124', fontWeight: 500 }}>Zaviroq</span>
            <span style={{ fontSize: '0.75rem', color: '#5f6368' }}>https://www.zaviroq.com{selectedPage === '/' ? '' : selectedPage}</span>
          </div>

          {/* Google Title */}
          <h3 style={{
            fontSize: '1.25rem',
            color: '#1a0dab',
            fontWeight: 500,
            margin: '0 0 6px',
            lineHeight: 1.3,
            cursor: 'pointer'
          }}>
            {currentPageSeo.title || 'Enter a Title Tag Below...'}
          </h3>

          {/* Google Description */}
          <p style={{
            fontSize: '0.88rem',
            color: '#4d5156',
            lineHeight: 1.45,
            margin: 0
          }}>
            {currentPageSeo.description || 'Enter a meta description below to see how Google, Bing, and search engine crawlers will display this page in organic search results...'}
          </p>
        </div>
      </div>

      {/* Metadata Editor Form */}
      <div className={styles.editorCard}>
        <div className={styles.editorHeader}>
          <div className={styles.editorHeaderLeft}>
            <h3 className={styles.editorHeaderTitle}>
              Metadata Directives for &quot;{selectedPage}&quot;
            </h3>
            <p className={styles.editorHeaderDesc}>
              These tags directly feed Next.js Server Components, OpenGraph social bots, and search indexing spiders.
            </p>
          </div>
          <div className={styles.editorHeaderBadge}>
            <ShieldCheck size={14} />
            <span>Search Matrix Ready</span>
          </div>
        </div>

        <form onSubmit={handleSaveCurrentPage}>
          <div className={styles.formGrid}>
            {/* Meta Title */}
            <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
              <div className={styles.inputLabel}>
                <span>Page Meta Title Tag &lt;title&gt;</span>
                <span style={{ 
                  color: titleLength >= 50 && titleLength <= 60 ? '#16a34a' : titleLength > 60 ? '#dc2626' : '#d97706',
                  fontWeight: 700 
                }}>
                  {titleLength}/60 characters {titleLength >= 50 && titleLength <= 60 ? '✓ (Optimal)' : titleLength > 60 ? '⚠ (May truncate)' : '(Short)'}
                </span>
              </div>
              <input 
                type="text" 
                className={styles.textInput} 
                value={currentPageSeo.title}
                onChange={e => updateField('title', e.target.value)}
                placeholder="Target primary keyword | Brand Name"
                required
              />
              <span className={styles.inputHelper}>
                Recommended length: 50 - 60 characters. Place primary target keywords near the beginning.
              </span>
            </div>

            {/* Meta Description */}
            <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
              <div className={styles.inputLabel}>
                <span>Meta Description &lt;meta name=&quot;description&quot;&gt;</span>
                <span style={{ 
                  color: descLength >= 140 && descLength <= 160 ? '#16a34a' : descLength > 160 ? '#dc2626' : '#d97706',
                  fontWeight: 700 
                }}>
                  {descLength}/160 characters {descLength >= 140 && descLength <= 160 ? '✓ (Optimal)' : descLength > 160 ? '⚠ (May truncate)' : '(Short)'}
                </span>
              </div>
              <textarea 
                className={styles.textArea} 
                rows={3}
                value={currentPageSeo.description}
                onChange={e => updateField('description', e.target.value)}
                placeholder="High-converting summary of the page with target keywords and a compelling call-to-action."
                required
              />
              <span className={styles.inputHelper}>
                Recommended length: 140 - 160 characters. Entice users to click from search results.
              </span>
            </div>

            {/* Target Keywords */}
            <div className={styles.inputGroup}>
              <div className={styles.inputLabel}>
                <span>Primary &amp; Secondary Keywords</span>
              </div>
              <input 
                type="text" 
                className={styles.textInput} 
                value={currentPageSeo.keywords}
                onChange={e => updateField('keywords', e.target.value)}
                placeholder="keyword1, keyword2, keyword3, local seo dubai"
              />
              <span className={styles.inputHelper}>
                Comma-separated target query clusters for this page.
              </span>
            </div>

            {/* Canonical URL */}
            <div className={styles.inputGroup}>
              <div className={styles.inputLabel}>
                <span>Canonical URL</span>
              </div>
              <input 
                type="url" 
                className={styles.textInput} 
                value={currentPageSeo.canonicalUrl}
                onChange={e => updateField('canonicalUrl', e.target.value)}
                placeholder={`https://www.zaviroq.com${selectedPage}`}
              />
              <span className={styles.inputHelper}>
                Prevents duplicate content penalties by designating the authoritative URL.
              </span>
            </div>

            {/* OpenGraph Image URL */}
            <div className={styles.inputGroup}>
              <div className={styles.inputLabel}>
                <span>OpenGraph Social Image URL (og:image)</span>
              </div>
              <input 
                type="text" 
                className={styles.textInput} 
                value={currentPageSeo.ogImage || ''}
                onChange={e => updateField('ogImage', e.target.value)}
                placeholder="https://www.zaviroq.com/og-image.png"
              />
              <span className={styles.inputHelper}>
                Dimensions: 1200x630px. Displayed when link is shared on WhatsApp, LinkedIn, Twitter/X.
              </span>
            </div>

            {/* Robots Tag Policy */}
            <div className={styles.inputGroup}>
              <div className={styles.inputLabel}>
                <span>Search Engine Robots Directives</span>
              </div>
              <select 
                className={styles.textInput}
                value={currentPageSeo.robots || 'index, follow'}
                onChange={e => updateField('robots', e.target.value)}
              >
                <option value="index, follow">index, follow (Standard Public Indexing)</option>
                <option value="noindex, follow">noindex, follow (Hide from Google, Crawl Links)</option>
                <option value="noindex, nofollow">noindex, nofollow (Strictly Hidden)</option>
              </select>
              <span className={styles.inputHelper}>
                Instructs Googlebot and Bingbot whether to index and crawl this page.
              </span>
            </div>

            {/* Schema Type */}
            <div className={styles.inputGroup}>
              <div className={styles.inputLabel}>
                <span>Structured Data Schema Type</span>
              </div>
              <select 
                className={styles.textInput}
                value={currentPageSeo.schemaType || 'Organization'}
                onChange={e => updateField('schemaType', e.target.value)}
              >
                <option value="Organization">Organization (Company &amp; Brand)</option>
                <option value="Service">Service (Digital Solutions &amp; Marketing)</option>
                <option value="LocalBusiness">LocalBusiness (Dubai, Riyadh, Mangalore)</option>
                <option value="WebPage">WebPage (General Informational)</option>
                <option value="Article">Article / TechBlog (Insights)</option>
              </select>
              <span className={styles.inputHelper}>
                Provides Google with structured JSON-LD entities for Rich Snippets.
              </span>
            </div>
          </div>

          <div style={{ marginTop: '28px', display: 'flex', gap: '14px', alignItems: 'center' }}>
            <button 
              type="submit" 
              className={styles.btnPrimaryGlow}
              disabled={saving}
            >
              <Save size={16} />
              <span>{saving ? 'Synchronizing...' : `Deploy & Synchronize "${selectedPage}" SEO`}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
