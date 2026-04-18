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
            <div className={styles.dropdownMenu}>
              <Link href="/services/seo-mastery" className={styles.dropdownItem} onClick={() => setMenuOpen(false)}>
                <span className={styles.dropdownIcon}>🔍</span> SEO Dominance
              </Link>
              <Link href="/services/web-development" className={styles.dropdownItem} onClick={() => setMenuOpen(false)}>
                <span className={styles.dropdownIcon}>💻</span> Web Architecture
              </Link>
              <Link href="/services/performance-marketing" className={styles.dropdownItem} onClick={() => setMenuOpen(false)}>
                <span className={styles.dropdownIcon}>📈</span> Performance Ads
              </Link>
              <Link href="/services/ai-integration" className={styles.dropdownItem} onClick={() => setMenuOpen(false)}>
                <span className={styles.dropdownIcon}>🤖</span> AI Automations
              </Link>
              <Link href="/services/branding" className={styles.dropdownItem} onClick={() => setMenuOpen(false)}>
                <span className={styles.dropdownIcon}>🎨</span> Corporate Branding
              </Link>
              <Link href="/services/tech-security" className={styles.dropdownItem} onClick={() => setMenuOpen(false)}>
                <span className={styles.dropdownIcon}>🔐</span> Cyber Security
              </Link>
              <Link href="/services" className={`${styles.dropdownItem} ${styles.viewAllEndpoint}`} onClick={() => setMenuOpen(false)}>
                <span className={styles.dropdownIcon}>⚡</span> View All 30+ Endpoints
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
