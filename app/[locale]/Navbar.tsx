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
                  <h4>SEO</h4>
                  <Link href="/services/seo/technical-seo" onClick={() => setMenuOpen(false)}>Technical SEO</Link>
                  <Link href="/services/seo/on-page-seo" onClick={() => setMenuOpen(false)}>On-Page SEO</Link>
                  <Link href="/services/seo/off-page-seo" onClick={() => setMenuOpen(false)}>Off-Page SEO</Link>
                  <Link href="/services/seo/seo-audit" onClick={() => setMenuOpen(false)}>SEO Audit</Link>
                  <Link href="/services/seo/keyword-research" onClick={() => setMenuOpen(false)}>Keyword Research</Link>
                  <Link href="/services/seo/ai-seo" onClick={() => setMenuOpen(false)}>AI SEO</Link>
                  <Link href="/services/seo/seo-strategy" onClick={() => setMenuOpen(false)}>SEO Strategy</Link>
                  <Link href="/services/seo/agency-seo" onClick={() => setMenuOpen(false)}>Agency SEO</Link>
                </div>
                <div className={styles.megaMenuColumn}>
                  <h4>Web Development</h4>
                  <Link href="/services/web-development/custom-website" onClick={() => setMenuOpen(false)}>Custom Website</Link>
                  <Link href="/services/web-development/business-website" onClick={() => setMenuOpen(false)}>Business Website</Link>
                  <Link href="/services/web-development/landing-page" onClick={() => setMenuOpen(false)}>Landing Page</Link>
                  <Link href="/services/web-development/wordpress-development" onClick={() => setMenuOpen(false)}>WordPress Dev</Link>
                  <Link href="/services/web-development/react-development" onClick={() => setMenuOpen(false)}>React.js Dev</Link>
                  <Link href="/services/web-development/nextjs-development" onClick={() => setMenuOpen(false)}>Next.js Dev</Link>
                </div>
                <div className={styles.megaMenuColumn}>
                  <h4>Ecommerce & Systems</h4>
                  <Link href="/services/ecommerce-systems/ecommerce-development" onClick={() => setMenuOpen(false)}>Ecommerce Dev</Link>
                  <Link href="/services/ecommerce-systems/custom-ecommerce" onClick={() => setMenuOpen(false)}>Custom Ecommerce</Link>
                  <Link href="/services/ecommerce-systems/admin-dashboard" onClick={() => setMenuOpen(false)}>Admin Dashboard</Link>
                  <Link href="/services/ecommerce-systems/web-application" onClick={() => setMenuOpen(false)}>Web Application</Link>
                  <Link href="/services/ecommerce-systems/saas-platform" onClick={() => setMenuOpen(false)}>SaaS Platform</Link>
                </div>
                <div className={styles.megaMenuColumn}>
                  <h4>Performance Marketing</h4>
                  <Link href="/services/performance-marketing/google-ads" onClick={() => setMenuOpen(false)}>Google Ads</Link>
                  <Link href="/services/performance-marketing/meta-ads" onClick={() => setMenuOpen(false)}>Meta Ads</Link>
                  <Link href="/services/performance-marketing/linkedin-ads" onClick={() => setMenuOpen(false)}>LinkedIn Ads</Link>
                  <Link href="/services/performance-marketing/tiktok-ads" onClick={() => setMenuOpen(false)}>TikTok Ads</Link>
                  <Link href="/services/performance-marketing/youtube-ads" onClick={() => setMenuOpen(false)}>YouTube Ads</Link>
                  <Link href="/services/performance-marketing/ppc-management" onClick={() => setMenuOpen(false)}>PPC Management</Link>
                </div>
                <div className={styles.megaMenuColumn}>
                  <h4>Branding & Design</h4>
                  <Link href="/services/branding-design/logo-design" onClick={() => setMenuOpen(false)}>Logo Design</Link>
                  <Link href="/services/branding-design/brand-identity" onClick={() => setMenuOpen(false)}>Brand Identity</Link>
                  <Link href="/services/branding-design/company-profile" onClick={() => setMenuOpen(false)}>Company Profile</Link>
                  <Link href="/services/branding-design/social-media-design" onClick={() => setMenuOpen(false)}>Social Media Design</Link>
                </div>
                <div className={styles.megaMenuColumn}>
                  <h4>Industries</h4>
                  <Link href="/industries/real-estate" onClick={() => setMenuOpen(false)}>Real Estate</Link>
                  <Link href="/industries/healthcare" onClick={() => setMenuOpen(false)}>Healthcare</Link>
                  <Link href="/industries/saas" onClick={() => setMenuOpen(false)}>SaaS</Link>
                  <Link href="/industries/ecommerce" onClick={() => setMenuOpen(false)}>Ecommerce</Link>
                  <Link href="/industries/doctor" onClick={() => setMenuOpen(false)}>Doctor</Link>
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
