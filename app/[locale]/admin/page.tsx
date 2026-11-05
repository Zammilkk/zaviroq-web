"use client";

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import { 
  Send, RotateCcw, CheckCircle2, AlertCircle, 
  Sparkles, Compass, Layers, HelpCircle, Star, 
  Trash2, Plus, ExternalLink, Activity, Database, 
  Clock, Search, Image as ImageIcon, Bell, Check, Eye, Zap, ArrowUpRight
} from 'lucide-react';
import { defaultHomepageData, HomepageFullData } from '@/lib/homepageDefaults';

export default function AdminDashboard() {
  const [content, setContent] = useState<HomepageFullData>(defaultHomepageData);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState<'hero' | 'approach' | 'services' | 'why' | 'faqs' | 'seo' | 'images'>('hero');
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Fetch content on mount
  useEffect(() => {
    fetch('/api/admin/homepage')
      .then(res => res.json())
      .then((data: any) => {
        if (data.success && data.data) {
          setContent(data.data);
          if (data.lastUpdated) {
            setLastSaved(new Date(data.lastUpdated).toLocaleTimeString());
          }
        }
      })
      .catch(err => {
        console.error('Failed to load homepage content:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch('/api/admin/homepage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      });
      const data: any = await res.json();
      if (data.success) {
        setLastSaved(new Date().toLocaleTimeString());
        showToast('All changes successfully synchronized to Supabase & Live Homepage!', 'success');
      } else {
        showToast(data.error || 'Failed to save changes.', 'error');
      }
    } catch (err: any) {
      showToast(err.message || 'Network error while saving.', 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleResetDefaults = () => {
    if (confirm('Are you sure you want to reset all content to seed defaults? Any unsaved edits will be lost.')) {
      setContent(defaultHomepageData);
      showToast('Reset to default content. Click "Publish All Changes" to save to Supabase.', 'success');
    }
  };

  // Updaters for Hero
  const updateHero = (field: string, val: any) => {
    setContent(prev => ({
      ...prev,
      hero: { ...prev.hero, [field]: val }
    }));
  };

  const updateHeroStat = (index: number, field: string, val: any) => {
    setContent(prev => {
      const newStats = [...prev.hero.stats];
      newStats[index] = { ...newStats[index], [field]: val };
      return {
        ...prev,
        hero: { ...prev.hero, stats: newStats }
      };
    });
  };

  // Updaters for Approach
  const updateApproach = (field: string, val: any) => {
    setContent(prev => ({
      ...prev,
      approach: { ...prev.approach, [field]: val }
    }));
  };

  const updateApproachStep = (index: number, field: string, val: any) => {
    setContent(prev => {
      const newSteps = [...prev.approach.steps];
      newSteps[index] = { ...newSteps[index], [field]: val };
      return {
        ...prev,
        approach: { ...prev.approach, steps: newSteps }
      };
    });
  };

  // Updaters for Why Choose Us
  const updateWhyChoose = (field: string, val: any) => {
    setContent(prev => ({
      ...prev,
      why_choose: { ...prev.why_choose, [field]: val }
    }));
  };

  const updateWhyChooseCard = (index: number, field: string, val: any) => {
    setContent(prev => {
      const newCards = [...prev.why_choose.cards];
      newCards[index] = { ...newCards[index], [field]: val };
      return {
        ...prev,
        why_choose: { ...prev.why_choose, cards: newCards }
      };
    });
  };

  // Updaters for Services
  const updateServices = (field: string, val: any) => {
    setContent(prev => ({
      ...prev,
      services_section: { ...prev.services_section, [field]: val }
    }));
  };

  const updateServiceItem = (index: number, field: string, val: any) => {
    setContent(prev => {
      const newItems = [...prev.services_section.items];
      newItems[index] = { ...newItems[index], [field]: val };
      return {
        ...prev,
        services_section: { ...prev.services_section, items: newItems }
      };
    });
  };

  const addServiceItem = () => {
    setContent(prev => ({
      ...prev,
      services_section: {
        ...prev.services_section,
        items: [
          ...prev.services_section.items,
          { id: Date.now(), title: 'New Service', desc: 'Describe your high-impact service offering.' }
        ]
      }
    }));
  };

  const deleteServiceItem = (index: number) => {
    setContent(prev => {
      const newItems = [...prev.services_section.items];
      newItems.splice(index, 1);
      return {
        ...prev,
        services_section: { ...prev.services_section, items: newItems }
      };
    });
  };

  // Updaters for FAQs
  const updateFaqs = (field: string, val: any) => {
    setContent(prev => ({
      ...prev,
      faqs: { ...prev.faqs, [field]: val }
    }));
  };

  const updateFaqItem = (index: number, field: string, val: any) => {
    setContent(prev => {
      const newItems = [...prev.faqs.items];
      newItems[index] = { ...newItems[index], [field]: val };
      return {
        ...prev,
        faqs: { ...prev.faqs, items: newItems }
      };
    });
  };

  const addFaqItem = () => {
    setContent(prev => ({
      ...prev,
      faqs: {
        ...prev.faqs,
        items: [
          ...prev.faqs.items,
          { question: 'New Question Here?', answer: 'Detailed, authoritative answer here.' }
        ]
      }
    }));
  };

  const deleteFaqItem = (index: number) => {
    setContent(prev => {
      const newItems = [...prev.faqs.items];
      newItems.splice(index, 1);
      return {
        ...prev,
        faqs: { ...prev.faqs, items: newItems }
      };
    });
  };

  // Updaters for SEO
  const updateSeo = (field: string, val: any) => {
    setContent(prev => ({
      ...prev,
      seo: { ...prev.seo, [field]: val }
    }));
  };

  // Updaters for Images
  const updateImages = (field: string, val: any) => {
    setContent(prev => ({
      ...prev,
      images: { ...prev.images, [field]: val }
    }));
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
        <div style={{ textAlign: 'center' }}>
          <div className={styles.statusDotPulse} style={{ width: '16px', height: '16px', margin: '0 auto 16px' }}></div>
          <p style={{ color: '#64748b', fontWeight: 600 }}>Loading Supabase Content Matrix...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Top Sticky Control Bar */}
      <div className={styles.topControlBar}>
        <div className={styles.titleMeta}>
          <h1 className={styles.pageTitle}>Command Matrix &amp; Homepage CMS</h1>
          <p className={styles.pageSubtitle}>
            Direct Supabase PostgreSQL synchronization. Edit any point on the live site in real-time.
          </p>
        </div>

        <div className={styles.actionsGroup}>
          {lastSaved && (
            <div className={styles.syncIndicator}>
              <Check size={14} color="#16a34a" />
              <span>Synced at {lastSaved}</span>
            </div>
          )}

          <button 
            type="button" 
            className={styles.btnSecondaryGlass} 
            onClick={handleResetDefaults}
            title="Reset form fields to seed copy"
          >
            <RotateCcw size={15} />
            <span>Reset Defaults</span>
          </button>

          <button 
            type="button" 
            className={styles.btnPrimaryGlow} 
            onClick={handleSave} 
            disabled={saving}
          >
            <Send size={15} />
            <span>{saving ? 'Synchronizing...' : 'Publish All Changes'}</span>
          </button>

          <div className={styles.userProfileBadge}>
            <button className={styles.bellButton} title="Notifications">
              <Bell size={17} />
              <span className={styles.bellDot}></span>
            </button>
            <div className={styles.avatarCircle} title="Admin User">
              Z
            </div>
          </div>
        </div>
      </div>

      {/* High-Level Telemetry Cards (Light Pastel Luxury Wash) */}
      <div className={styles.overviewStatsGrid}>
        <div className={`${styles.overviewStatCard} ${styles.cardGreenWash}`}>
          <div className={styles.statCardHeader}>
            <span className={styles.statCardTitle}>DATABASE STATUS</span>
            <div className={styles.statCardIcon} style={{ background: '#ecfdf5', color: '#059669' }}>
              <Database size={17} />
            </div>
          </div>
          <div className={styles.statCardValue}>
            <span>Connected</span>
            <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></span>
          </div>
          <div className={styles.statCardFootnote}>Supabase Postgres (Singapore Pooler)</div>
        </div>

        <div className={`${styles.overviewStatCard} ${styles.cardPurpleWash}`}>
          <div className={styles.statCardHeader}>
            <span className={styles.statCardTitle}>CMS MODULES</span>
            <div className={styles.statCardIcon} style={{ background: '#f5f3ff', color: '#7c3aed' }}>
              <Layers size={17} />
            </div>
          </div>
          <div className={styles.statCardValue}>7 Active</div>
          <div className={styles.statCardFootnote}>Hero, Approach, Services, Why, FAQs, SEO, Images</div>
        </div>

        <div className={`${styles.overviewStatCard} ${styles.cardBlueWash}`}>
          <div className={styles.statCardHeader}>
            <span className={styles.statCardTitle}>INCOMING LEADS</span>
            <div className={styles.statCardIcon} style={{ background: '#eff6ff', color: '#2563eb' }}>
              <Activity size={17} />
            </div>
          </div>
          <div className={styles.statCardValue}>24 Leads</div>
          <div className={styles.statCardFootnote} style={{ color: '#059669', fontWeight: 600 }}>
            ↗ +18% conversion velocity
          </div>
        </div>

        <div className={`${styles.overviewStatCard} ${styles.cardAmberWash}`}>
          <div className={styles.statCardHeader}>
            <span className={styles.statCardTitle}>ISR CACHE</span>
            <div className={styles.statCardIcon} style={{ background: '#fffbeb', color: '#d97706' }}>
              <Zap size={17} />
            </div>
          </div>
          <div className={styles.statCardValue}>Instant</div>
          <div className={styles.statCardFootnote}>Instant on-demand revalidation</div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className={styles.tabsContainer}>
        <button 
          className={`${styles.tabBtn} ${activeTab === 'hero' ? styles.activeTabBtn : ''}`}
          onClick={() => setActiveTab('hero')}
        >
          <Sparkles size={16} />
          <span>Hero &amp; Metrics</span>
        </button>

        <button 
          className={`${styles.tabBtn} ${activeTab === 'approach' ? styles.activeTabBtn : ''}`}
          onClick={() => setActiveTab('approach')}
        >
          <Compass size={16} />
          <span>Our Approach</span>
        </button>

        <button 
          className={`${styles.tabBtn} ${activeTab === 'services' ? styles.activeTabBtn : ''}`}
          onClick={() => setActiveTab('services')}
        >
          <Layers size={16} />
          <span>Services Suite</span>
          <span className={styles.tabCountBadge}>{content.services_section.items.length}</span>
        </button>

        <button 
          className={`${styles.tabBtn} ${activeTab === 'why' ? styles.activeTabBtn : ''}`}
          onClick={() => setActiveTab('why')}
        >
          <Star size={16} />
          <span>Why Choose Us</span>
        </button>

        <button 
          className={`${styles.tabBtn} ${activeTab === 'faqs' ? styles.activeTabBtn : ''}`}
          onClick={() => setActiveTab('faqs')}
        >
          <HelpCircle size={16} />
          <span>FAQs Engine</span>
          <span className={styles.tabCountBadge}>{content.faqs.items.length}</span>
        </button>

        <button 
          className={`${styles.tabBtn} ${activeTab === 'seo' ? styles.activeTabBtn : ''}`}
          onClick={() => setActiveTab('seo')}
        >
          <Search size={16} />
          <span>Global SEO</span>
        </button>

        <button 
          className={`${styles.tabBtn} ${activeTab === 'images' ? styles.activeTabBtn : ''}`}
          onClick={() => setActiveTab('images')}
        >
          <ImageIcon size={16} />
          <span>Media &amp; Images</span>
        </button>
      </div>

      {/* ====================================================================
          TAB 1: HERO & METRICS
          ==================================================================== */}
      {activeTab === 'hero' && (
        <div className={styles.editorCard}>
          <div className={styles.editorHeader}>
            <div className={styles.editorHeaderLeft}>
              <h3 className={styles.editorHeaderTitle}>Hero Section &amp; Key Metrics</h3>
              <p className={styles.editorHeaderDesc}>The primary conversion surface: headline, value proposition, CTAs, and performance counters.</p>
            </div>
            <div className={styles.editorHeaderBadge}>
              <Eye size={13} />
              <span>Above The Fold</span>
            </div>
          </div>

          <div className={styles.formGrid}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>
                <span>Eyebrow Tagline</span>
                <span className={styles.inputHelper}>Pill badge above main title</span>
              </label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.hero.eyebrow}
                onChange={e => updateHero('eyebrow', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>
                <span>Main Title Headline</span>
                <span className={styles.inputHelper}>First line of hero title</span>
              </label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.hero.title}
                onChange={e => updateHero('title', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>
                <span>Accent Title (Gradient)</span>
                <span className={styles.inputHelper}>Highlighted glowing suffix</span>
              </label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.hero.accentTitle}
                onChange={e => updateHero('accentTitle', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
              <label className={styles.inputLabel}>
                <span>Lede Description</span>
                <span className={styles.inputHelper}>Sub-headline paragraph</span>
              </label>
              <textarea 
                className={styles.textArea} 
                rows={3}
                value={content.hero.description}
                onChange={e => updateHero('description', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>
                <span>Primary CTA Text</span>
                <span className={styles.inputHelper}>Gradient action button</span>
              </label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.hero.primaryCtaText}
                onChange={e => updateHero('primaryCtaText', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>
                <span>Primary CTA Destination Link</span>
                <span className={styles.inputHelper}>e.g. /contact</span>
              </label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.hero.primaryCtaLink}
                onChange={e => updateHero('primaryCtaLink', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>
                <span>Secondary CTA Text</span>
                <span className={styles.inputHelper}>Ghost button</span>
              </label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.hero.secondaryCtaText}
                onChange={e => updateHero('secondaryCtaText', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>
                <span>Secondary CTA Destination Link</span>
                <span className={styles.inputHelper}>e.g. /services</span>
              </label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.hero.secondaryCtaLink}
                onChange={e => updateHero('secondaryCtaLink', e.target.value)}
              />
            </div>
          </div>

          {/* 4 Stats Counters */}
          <div className={styles.itemsManagerSection}>
            <div className={styles.itemsManagerHeader}>
              <h4 className={styles.itemsManagerTitle}>Live Animated Performance Stats (4 Counters)</h4>
            </div>

            <div className={styles.itemsGrid}>
              {content.hero.stats.map((stat, idx) => (
                <div key={idx} className={styles.itemCard}>
                  <div className={styles.itemCardHeader}>
                    <span className={styles.itemBadge}>Counter #{idx + 1}</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel}>Number</label>
                      <input 
                        type="number" 
                        className={styles.textInput} 
                        value={stat.value}
                        onChange={e => updateHeroStat(idx, 'value', parseInt(e.target.value) || 0)}
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel}>Suffix</label>
                      <input 
                        type="text" 
                        className={styles.textInput} 
                        value={stat.suffix}
                        placeholder="+, x, %"
                        onChange={e => updateHeroStat(idx, 'suffix', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>Label</label>
                    <input 
                      type="text" 
                      className={styles.textInput} 
                      value={stat.label}
                      onChange={e => updateHeroStat(idx, 'label', e.target.value)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          TAB 2: OUR APPROACH
          ==================================================================== */}
      {activeTab === 'approach' && (
        <div className={styles.editorCard}>
          <div className={styles.editorHeader}>
            <div className={styles.editorHeaderLeft}>
              <h3 className={styles.editorHeaderTitle}>Our Strategic Approach</h3>
              <p className={styles.editorHeaderDesc}>The 4-phase strategic workflow explaining how Zaviroq solves problems for clients.</p>
            </div>
            <div className={styles.editorHeaderBadge}>
              <Compass size={13} />
              <span>Process Engine</span>
            </div>
          </div>

          <div className={styles.formGrid}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Eyebrow Badge</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.approach.eyebrow}
                onChange={e => updateApproach('eyebrow', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Main Headline</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.approach.headline}
                onChange={e => updateApproach('headline', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Gradient Highlight Text</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.approach.highlightText}
                onChange={e => updateApproach('highlightText', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>CTA Button Text</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.approach.ctaText}
                onChange={e => updateApproach('ctaText', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>CTA Destination Link</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.approach.ctaLink || '/contact'}
                onChange={e => updateApproach('ctaLink', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Section Image Asset</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.approach.image || '/OUR-APPROACH.avif'}
                onChange={e => updateApproach('image', e.target.value)}
              />
              <div className={styles.imagePreviewBox}>
                <img src={content.approach.image || '/OUR-APPROACH.avif'} alt="Approach preview" className={styles.thumbImg} />
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Live Asset: {content.approach.image}</span>
              </div>
            </div>

            <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
              <label className={styles.inputLabel}>Section Description</label>
              <textarea 
                className={styles.textArea} 
                rows={3}
                value={content.approach.description}
                onChange={e => updateApproach('description', e.target.value)}
              />
            </div>
          </div>

          {/* 4 Process Steps */}
          <div className={styles.itemsManagerSection}>
            <div className={styles.itemsManagerHeader}>
              <h4 className={styles.itemsManagerTitle}>Strategic Workflow Steps (4 Stages)</h4>
            </div>

            <div className={styles.itemsGrid}>
              {content.approach.steps.map((step, idx) => (
                <div key={idx} className={styles.itemCard}>
                  <div className={styles.itemCardHeader}>
                    <span className={styles.itemBadge}>Stage {step.num || `0${idx + 1}`}</span>
                  </div>
                  <div className={styles.inputGroup} style={{ marginBottom: '12px' }}>
                    <label className={styles.inputLabel}>Stage Title</label>
                    <input 
                      type="text" 
                      className={styles.textInput} 
                      value={step.title}
                      onChange={e => updateApproachStep(idx, 'title', e.target.value)}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>Description</label>
                    <textarea 
                      className={styles.textArea} 
                      rows={3}
                      value={step.desc}
                      onChange={e => updateApproachStep(idx, 'desc', e.target.value)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          TAB 3: SERVICES SUITE
          ==================================================================== */}
      {activeTab === 'services' && (
        <div className={styles.editorCard}>
          <div className={styles.editorHeader}>
            <div className={styles.editorHeaderLeft}>
              <h3 className={styles.editorHeaderTitle}>Our Services Suite</h3>
              <p className={styles.editorHeaderDesc}>Manage the 3D interactive carousel services showcased on the homepage.</p>
            </div>
            <button type="button" className={styles.addItemBtn} onClick={addServiceItem}>
              <Plus size={15} />
              <span>Add New Service</span>
            </button>
          </div>

          <div className={styles.formGrid}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Section Eyebrow</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.services_section.eyebrow}
                onChange={e => updateServices('eyebrow', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Main Headline</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.services_section.headline}
                onChange={e => updateServices('headline', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
              <label className={styles.inputLabel}>Subtext Description</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.services_section.description}
                onChange={e => updateServices('description', e.target.value)}
              />
            </div>
          </div>

          {/* Dynamic Service Items */}
          <div className={styles.itemsManagerSection}>
            <div className={styles.itemsManagerHeader}>
              <h4 className={styles.itemsManagerTitle}>All Active Services ({content.services_section.items.length})</h4>
            </div>

            <div className={styles.itemsGrid}>
              {content.services_section.items.map((svc, idx) => (
                <div key={svc.id || idx} className={styles.itemCard}>
                  <div className={styles.itemCardHeader}>
                    <span className={styles.itemBadge}>Service #{idx + 1}</span>
                    {content.services_section.items.length > 1 && (
                      <button 
                        type="button" 
                        className={styles.itemDeleteBtn} 
                        onClick={() => deleteServiceItem(idx)}
                        title="Delete service card"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                  <div className={styles.inputGroup} style={{ marginBottom: '12px' }}>
                    <label className={styles.inputLabel}>Service Name</label>
                    <input 
                      type="text" 
                      className={styles.textInput} 
                      value={svc.title}
                      onChange={e => updateServiceItem(idx, 'title', e.target.value)}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>Service Description</label>
                    <textarea 
                      className={styles.textArea} 
                      rows={2}
                      value={svc.desc}
                      onChange={e => updateServiceItem(idx, 'desc', e.target.value)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          TAB 4: WHY CHOOSE US
          ==================================================================== */}
      {activeTab === 'why' && (
        <div className={styles.editorCard}>
          <div className={styles.editorHeader}>
            <div className={styles.editorHeaderLeft}>
              <h3 className={styles.editorHeaderTitle}>Why Choose Zaviroq</h3>
              <p className={styles.editorHeaderDesc}>Value propositions, remote-first advantages, and client trust guarantees.</p>
            </div>
            <div className={styles.editorHeaderBadge}>
              <Star size={13} />
              <span>Value Proposition</span>
            </div>
          </div>

          <div className={styles.formGrid}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Eyebrow</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.why_choose.eyebrow}
                onChange={e => updateWhyChoose('eyebrow', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Headline</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.why_choose.headline}
                onChange={e => updateWhyChoose('headline', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Accent Word</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.why_choose.accent}
                onChange={e => updateWhyChoose('accent', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Mockup Poster Image</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.why_choose.posterUrl || '/assets/images/why-img.avif'}
                onChange={e => updateWhyChoose('posterUrl', e.target.value)}
              />
              <div className={styles.imagePreviewBox}>
                <img src={content.why_choose.posterUrl || '/assets/images/why-img.avif'} alt="Poster preview" className={styles.thumbImg} />
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Video Poster Asset</span>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Showcase Video URL</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.why_choose.videoUrl || '/assets/images/zaviroq-videos.mp4'}
                onChange={e => updateWhyChoose('videoUrl', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
              <label className={styles.inputLabel}>Description Paragraph</label>
              <textarea 
                className={styles.textArea} 
                rows={3}
                value={content.why_choose.description}
                onChange={e => updateWhyChoose('description', e.target.value)}
              />
            </div>
          </div>

          {/* 4 Cards */}
          <div className={styles.itemsManagerSection}>
            <div className={styles.itemsManagerHeader}>
              <h4 className={styles.itemsManagerTitle}>The 4 Value Proposition Cards</h4>
            </div>

            <div className={styles.itemsGrid}>
              {content.why_choose.cards.map((card, idx) => (
                <div key={idx} className={styles.itemCard}>
                  <div className={styles.itemCardHeader}>
                    <span className={styles.itemBadge}>Card {card.num || `0${idx + 1}`}</span>
                  </div>
                  <div className={styles.inputGroup} style={{ marginBottom: '12px' }}>
                    <label className={styles.inputLabel}>Card Title</label>
                    <input 
                      type="text" 
                      className={styles.textInput} 
                      value={card.title}
                      onChange={e => updateWhyChooseCard(idx, 'title', e.target.value)}
                    />
                  </div>
                  <div className={styles.inputGroup} style={{ marginBottom: '12px' }}>
                    <label className={styles.inputLabel}>Footer Tagline</label>
                    <input 
                      type="text" 
                      className={styles.textInput} 
                      value={card.footerText}
                      onChange={e => updateWhyChooseCard(idx, 'footerText', e.target.value)}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>Description</label>
                    <textarea 
                      className={styles.textArea} 
                      rows={3}
                      value={card.desc}
                      onChange={e => updateWhyChooseCard(idx, 'desc', e.target.value)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          TAB 5: FAQS ENGINE
          ==================================================================== */}
      {activeTab === 'faqs' && (
        <div className={styles.editorCard}>
          <div className={styles.editorHeader}>
            <div className={styles.editorHeaderLeft}>
              <h3 className={styles.editorHeaderTitle}>Frequently Asked Questions Engine</h3>
              <p className={styles.editorHeaderDesc}>Manage common client inquiries, answers, and objection handling.</p>
            </div>
            <button type="button" className={styles.addItemBtn} onClick={addFaqItem}>
              <Plus size={15} />
              <span>Add New FAQ</span>
            </button>
          </div>

          <div className={styles.formGrid}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Section Eyebrow</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.faqs.eyebrow}
                onChange={e => updateFaqs('eyebrow', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Headline</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.faqs.headline}
                onChange={e => updateFaqs('headline', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>FAQ Graphic Mockup Image</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.faqs.mockupImage || '/assets/images/faq-mockup.png'}
                onChange={e => updateFaqs('mockupImage', e.target.value)}
              />
              <div className={styles.imagePreviewBox}>
                <img src={content.faqs.mockupImage || '/assets/images/faq-mockup.png'} alt="FAQ graphic preview" className={styles.thumbImg} />
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Side Mockup Asset</span>
              </div>
            </div>

            <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
              <label className={styles.inputLabel}>Description</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.faqs.description}
                onChange={e => updateFaqs('description', e.target.value)}
              />
            </div>
          </div>

          {/* Dynamic FAQ Items */}
          <div className={styles.itemsManagerSection}>
            <div className={styles.itemsManagerHeader}>
              <h4 className={styles.itemsManagerTitle}>All Questions &amp; Answers ({content.faqs.items.length})</h4>
            </div>

            <div className={styles.itemsGrid}>
              {content.faqs.items.map((faq, idx) => (
                <div key={idx} className={styles.itemCard}>
                  <div className={styles.itemCardHeader}>
                    <span className={styles.itemBadge}>Question #{idx + 1}</span>
                    {content.faqs.items.length > 1 && (
                      <button 
                        type="button" 
                        className={styles.itemDeleteBtn} 
                        onClick={() => deleteFaqItem(idx)}
                        title="Delete this FAQ"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                  <div className={styles.inputGroup} style={{ marginBottom: '12px' }}>
                    <label className={styles.inputLabel}>Question</label>
                    <input 
                      type="text" 
                      className={styles.textInput} 
                      value={faq.question}
                      onChange={e => updateFaqItem(idx, 'question', e.target.value)}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>Authoritative Answer</label>
                    <textarea 
                      className={styles.textArea} 
                      rows={3}
                      value={faq.answer}
                      onChange={e => updateFaqItem(idx, 'answer', e.target.value)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          TAB 6: GLOBAL SEO CONFIGURATION
          ==================================================================== */}
      {activeTab === 'seo' && (
        <div className={styles.editorCard}>
          <div className={styles.editorHeader}>
            <div className={styles.editorHeaderLeft}>
              <h3 className={styles.editorHeaderTitle}>Global Technical SEO &amp; Meta Tags</h3>
              <p className={styles.editorHeaderDesc}>Control exact title tags, meta descriptions, OpenGraph social previews, and schema markup.</p>
            </div>
            <div className={styles.editorHeaderBadge}>
              <Search size={13} />
              <span>Search Engine Ready</span>
            </div>
          </div>

          <div className={styles.formGrid}>
            <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
              <label className={styles.inputLabel}>
                <span>Master HTML Title Tag ({content.seo.title.length} chars)</span>
                <span className={styles.inputHelper}>Optimal: 50-60 characters for maximum Google click-through</span>
              </label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.seo.title}
                onChange={e => updateSeo('title', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
              <label className={styles.inputLabel}>
                <span>Meta Description ({content.seo.description.length} chars)</span>
                <span className={styles.inputHelper}>The snippet shown in Google search result listings</span>
              </label>
              <textarea 
                className={styles.textArea} 
                rows={3}
                value={content.seo.description}
                onChange={e => updateSeo('description', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Target Keywords (Comma Separated)</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.seo.keywords}
                onChange={e => updateSeo('keywords', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Canonical URL</label>
              <input 
                type="url" 
                className={styles.textInput} 
                value={content.seo.canonicalUrl}
                onChange={e => updateSeo('canonicalUrl', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>OpenGraph Social Title</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.seo.ogTitle}
                onChange={e => updateSeo('ogTitle', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>OpenGraph Feature Image (URL)</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.seo.ogImage}
                onChange={e => updateSeo('ogImage', e.target.value)}
              />
              <div className={styles.imagePreviewBox}>
                <img src={content.seo.ogImage || '/og-image.png'} alt="OG Preview" className={styles.thumbImg} />
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>WhatsApp / LinkedIn / Twitter preview thumbnail</span>
              </div>
            </div>

            <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
              <label className={styles.inputLabel}>OpenGraph Social Description</label>
              <textarea 
                className={styles.textArea} 
                rows={2}
                value={content.seo.ogDescription}
                onChange={e => updateSeo('ogDescription', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Schema Business Legal Name</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.seo.businessName}
                onChange={e => updateSeo('businessName', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Schema Contact Phone</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.seo.phone}
                onChange={e => updateSeo('phone', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Schema Official Email</label>
              <input 
                type="email" 
                className={styles.textInput} 
                value={content.seo.email}
                onChange={e => updateSeo('email', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Schema City / Locality</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.seo.addressLocality}
                onChange={e => updateSeo('addressLocality', e.target.value)}
              />
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          TAB 7: MEDIA & IMAGES MANAGEMENT
          ==================================================================== */}
      {activeTab === 'images' && (
        <div className={styles.editorCard}>
          <div className={styles.editorHeader}>
            <div className={styles.editorHeaderLeft}>
              <h3 className={styles.editorHeaderTitle}>Media &amp; Images Management</h3>
              <p className={styles.editorHeaderDesc}>Directly update all brand graphics, posters, videos, and illustration assets across the homepage.</p>
            </div>
            <div className={styles.editorHeaderBadge}>
              <ImageIcon size={13} />
              <span>Asset Controller</span>
            </div>
          </div>

          <div className={styles.formGrid}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Brand Logo (Dark Theme Version)</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.images.logoDark}
                onChange={e => updateImages('logoDark', e.target.value)}
              />
              <div className={styles.imagePreviewBox}>
                <img src={content.images.logoDark || '/logo.svg'} alt="Logo dark" style={{ height: '36px', maxWidth: '140px', objectFit: 'contain' }} />
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Active dark mode logo</span>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Brand Logo (Light Theme Version)</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.images.logoLight}
                onChange={e => updateImages('logoLight', e.target.value)}
              />
              <div className={styles.imagePreviewBox} style={{ background: '#1e293b' }}>
                <img src={content.images.logoLight || '/zaviroq-logo-white.png'} alt="Logo light" style={{ height: '36px', maxWidth: '140px', objectFit: 'contain' }} />
                <span style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>Active light mode logo</span>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Approach Section Main Asset</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.images.approachImage}
                onChange={e => {
                  updateImages('approachImage', e.target.value);
                  updateApproach('image', e.target.value);
                }}
              />
              <div className={styles.imagePreviewBox}>
                <img src={content.images.approachImage || '/OUR-APPROACH.avif'} alt="Approach preview" className={styles.thumbImg} />
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Laptop 3D Showcase Graphic</span>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Why Choose Video Poster</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.images.whyChoosePoster}
                onChange={e => {
                  updateImages('whyChoosePoster', e.target.value);
                  updateWhyChoose('posterUrl', e.target.value);
                }}
              />
              <div className={styles.imagePreviewBox}>
                <img src={content.images.whyChoosePoster || '/assets/images/why-img.avif'} alt="Poster preview" className={styles.thumbImg} />
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Video Poster Graphic</span>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Why Choose Video Stream URL</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.images.whyChooseVideo}
                onChange={e => {
                  updateImages('whyChooseVideo', e.target.value);
                  updateWhyChoose('videoUrl', e.target.value);
                }}
              />
              <span style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '4px' }}>MP4 / WebM video asset path</span>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>FAQ Section Side Mockup</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.images.faqMockup}
                onChange={e => {
                  updateImages('faqMockup', e.target.value);
                  updateFaqs('mockupImage', e.target.value);
                }}
              />
              <div className={styles.imagePreviewBox}>
                <img src={content.images.faqMockup || '/assets/images/faq-mockup.png'} alt="FAQ mockup preview" className={styles.thumbImg} />
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Side Graphic Asset</span>
              </div>
            </div>

            <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
              <label className={styles.inputLabel}>OpenGraph Social Share Card Image</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={content.images.ogImage}
                onChange={e => {
                  updateImages('ogImage', e.target.value);
                  updateSeo('ogImage', e.target.value);
                }}
              />
              <div className={styles.imagePreviewBox}>
                <img src={content.images.ogImage || '/og-image.png'} alt="OG share preview" style={{ width: '120px', height: '63px', borderRadius: '8px', objectFit: 'cover' }} />
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>1200x630px Social Preview Banner for WhatsApp, LinkedIn, and Facebook</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Feedback Toast Notification */}
      {toast && (
        <div className={`${styles.toastNotification} ${toast.type === 'success' ? styles.toastSuccess : styles.toastError}`}>
          {toast.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
          <span>{toast.message}</span>
        </div>
      )}
    </div>
  );
}
