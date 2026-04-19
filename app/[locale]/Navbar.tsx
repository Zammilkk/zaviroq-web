"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.svg" alt="ZAVIROQ Logo" width={150} height={50} style={{ objectFit: 'contain' }} priority />
        </Link>

        <div className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>

          <div className={`${styles.hasDropdown} ${dropdownOpen ? styles.expanded : ''}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
              <button 
                className={styles.dropdownToggle} 
                onClick={toggleDropdown}
                aria-label="Toggle services menu"
              >
                {dropdownOpen ? '−' : '+'}
              </button>
            </div>
            <div className={styles.megaMenu}>
              <div className={styles.megaMenuGrid}>
                <div className={styles.megaMenuColumn}>
                  <h4>Core SEO</h4>
                  <Link href="/seo-services/technical-seo" onClick={() => setMenuOpen(false)}>Technical SEO</Link>
                  <Link href="/seo-services/on-page-seo" onClick={() => setMenuOpen(false)}>On-Page SEO</Link>
                  <Link href="/seo-services/off-page-seo" onClick={() => setMenuOpen(false)}>Off-Page SEO</Link>
                  <Link href="/seo-services/seo-audit" onClick={() => setMenuOpen(false)}>SEO Audit</Link>
                  <Link href="/seo-services/keyword-research" onClick={() => setMenuOpen(false)}>Keyword Research</Link>
                  <Link href="/seo-services/ai-seo-optimization" onClick={() => setMenuOpen(false)}>AI SEO</Link>
                  <Link href="/seo-services/seo-strategy" onClick={() => setMenuOpen(false)}>SEO Strategy</Link>
                </div>
                <div className={styles.megaMenuColumn}>
                  <h4>Industry SEO</h4>
                  <Link href="/seo-services/seo-for-real-estate" onClick={() => setMenuOpen(false)}>Real Estate SEO</Link>
                  <Link href="/seo-services/seo-for-healthcare" onClick={() => setMenuOpen(false)}>Healthcare SEO</Link>
                  <Link href="/seo-services/seo-for-saas" onClick={() => setMenuOpen(false)}>SaaS SEO</Link>
                  <Link href="/seo-services/seo-for-ecommerce" onClick={() => setMenuOpen(false)}>Ecommerce SEO</Link>
                  <Link href="/seo-services/seo-for-doctors" onClick={() => setMenuOpen(false)}>Doctor SEO</Link>
                  <Link href="/seo-services/seo-for-agencies" onClick={() => setMenuOpen(false)}>Agency SEO</Link>
                </div>
                <div className={styles.megaMenuColumn}>
                  <h4>Web Development</h4>
                  <Link href="/core-web/custom-website-development" onClick={() => setMenuOpen(false)}>Custom Website</Link>
                  <Link href="/core-web/business-website-design" onClick={() => setMenuOpen(false)}>Business Website</Link>
                  <Link href="/core-web/landing-page-design" onClick={() => setMenuOpen(false)}>Landing Page</Link>
                  <Link href="/web-platform/wordpress-development" onClick={() => setMenuOpen(false)}>WordPress</Link>
                  <Link href="/web-platform/php-development" onClick={() => setMenuOpen(false)}>PHP / Laravel</Link>
                  <Link href="/web-platform/reactjs-development" onClick={() => setMenuOpen(false)}>React.js</Link>
                  <Link href="/web-platform/nextjs-development" onClick={() => setMenuOpen(false)}>Next.js</Link>
                </div>
                <div className={styles.megaMenuColumn}>
                  <h4>Ecommerce & Systems</h4>
                  <Link href="/web-ecommerce/ecommerce-development" onClick={() => setMenuOpen(false)}>Ecommerce Dev</Link>
                  <Link href="/web-ecommerce/custom-ecommerce-development" onClick={() => setMenuOpen(false)}>Custom Ecommerce</Link>
                  <Link href="/web-systems/admin-dashboard-development" onClick={() => setMenuOpen(false)}>Admin Dashboard</Link>
                  <Link href="/web-systems/web-application-development" onClick={() => setMenuOpen(false)}>Web Application</Link>
                  <Link href="/web-systems/saas-development" onClick={() => setMenuOpen(false)}>SaaS Platform</Link>
                </div>
                <div className={styles.megaMenuColumn}>
                  <h4>Performance Marketing</h4>
                  <Link href="/performance-marketing/google-ads-agency" onClick={() => setMenuOpen(false)}>Google Ads</Link>
                  <Link href="/performance-marketing/meta-ads-agency" onClick={() => setMenuOpen(false)}>Meta Ads</Link>
                  <Link href="/performance-marketing/linkedin-ads-agency" onClick={() => setMenuOpen(false)}>LinkedIn Ads</Link>
                  <Link href="/performance-marketing/tiktok-ads-agency" onClick={() => setMenuOpen(false)}>TikTok Ads</Link>
                  <Link href="/performance-marketing/youtube-ads-agency" onClick={() => setMenuOpen(false)}>YouTube Ads</Link>
                  <Link href="/performance-marketing/ppc-management-services" onClick={() => setMenuOpen(false)}>PPC Management</Link>
                </div>
                <div className={styles.megaMenuColumn}>
                  <h4>Branding & Design</h4>
                  <Link href="/branding-design/logo-design" onClick={() => setMenuOpen(false)}>Logo Design</Link>
                  <Link href="/branding-design/brand-identity-design" onClick={() => setMenuOpen(false)}>Brand Identity</Link>
                  <Link href="/branding-design/company-profile-design" onClick={() => setMenuOpen(false)}>Company Profile</Link>
                  <Link href="/branding-design/social-media-design" onClick={() => setMenuOpen(false)}>Social Media Design</Link>
                  <Link href="/branding-design/presentation-design" onClick={() => setMenuOpen(false)}>Presentation</Link>
                  <Link href="/branding-design/packaging-design" onClick={() => setMenuOpen(false)}>Packaging</Link>
                </div>
              </div>
              <Link href="/services" className={`${styles.dropdownItem} ${styles.viewAllEndpoint}`} onClick={() => setMenuOpen(false)}>
                <span className={styles.dropdownIcon}>⚡</span> View All 30+ Services
              </Link>
            </div>
          </div>

          <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/ai-content-engine" className={styles.aiLink} onClick={() => setMenuOpen(false)}>
            <span className={styles.aiDot} />
            AI Engine
          </Link>
          <Link href="/contact" className={styles.ctaBtn} onClick={() => setMenuOpen(false)}>Get Quote</Link>
        </div>

        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={`${styles.bar} ${menuOpen ? styles.openBar1 : ''}`}></span>
          <span className={`${styles.bar} ${menuOpen ? styles.openBar2 : ''}`}></span>
          <span className={`${styles.bar} ${menuOpen ? styles.openBar3 : ''}`}></span>
        </button>
      </div>
    </nav>
  );
}
