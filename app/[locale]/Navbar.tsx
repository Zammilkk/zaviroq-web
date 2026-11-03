"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Link, usePathname } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Code,
  Layers,
  BarChart,
  PenTool,
  Globe,
  ChevronDown,
  Mail,
  Phone,
  ArrowRight,
  Building2,
  Stethoscope,
  Cpu,
  ShoppingBag,
  UserCheck,
} from 'lucide-react';
import { Linkedin, Instagram, Youtube, Facebook } from '../components/SocialIcons';
import styles from './Navbar.module.css';
import ThemeToggle from '../components/ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesMobileOpen, setServicesMobileOpen] = useState(false);
  const [industriesMobileOpen, setIndustriesMobileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Helper to check active route
  const isActive = useCallback(
    (href: string) => {
      if (href === '/') return pathname === '/';
      return pathname.startsWith(href);
    },
    [pathname]
  );

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const toggleCategory = (cat: string) => {
    setActiveCategory((prev) => (prev === cat ? null : cat));
  };

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll on mobile menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  // Close menu on screen resize to desktop or on Escape key
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMenuOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      {/* Mobile Drawer Backdrop */}
      <div
        className={`${styles.backdrop} ${menuOpen ? styles.backdropVisible : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <header className={styles.header}>
        {/* Top Bar (Desktop Only) */}
        <div className={styles.topbar}>
          <div className={styles.topbarLeft}>
            <div className={styles.taglineWrapper}>
              <span className={styles.pulseDot}></span>
              <span className={styles.taglineText}>SCALING BRANDS DIGITALLY</span>
            </div>
            <div className={styles.topbarDivider}></div>
            <a href="mailto:info@zaviroq.com" className={styles.topbarLink}>
              <Mail size={13} className={styles.topbarIcon} /> info@zaviroq.com
            </a>
            <div className={styles.topbarDivider}></div>
            <a href="tel:+917483830582" className={styles.topbarLink}>
              <Phone size={13} className={styles.topbarIcon} /> +91 74 8383 0582
            </a>
          </div>

          <div className={styles.topbarRight}>
            <div className={styles.globalPresence}>
              <Globe size={13} className={styles.topbarIcon} /> Global Presence:
              <span className={styles.presenceLinks}>
                <span className={styles.presenceItem}>India</span>
                <span className={styles.topbarDivider}></span>
                <span className={styles.presenceItem}>UAE</span>
                <span className={styles.topbarDivider}></span>
                <span className={styles.presenceItem}>Saudi Arabia</span>
                <span className={styles.topbarDivider}></span>
                <span className={styles.presenceItem}>Qatar</span>
                <span className={styles.topbarDivider}></span>
                <span className={styles.presenceItem}>Global</span>
              </span>
            </div>
            <div className={styles.topbarDivider}></div>
            <div className={styles.socialIcons}>
              <a href="https://linkedin.com/company/zaviroq" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={13} />
              </a>
              <a href="https://instagram.com/zaviroq" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={13} />
              </a>
              <a href="https://youtube.com/@zaviroq" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube size={13} />
              </a>
              <a href="https://facebook.com/zaviroq" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav
          className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
          aria-label="Main navigation"
        >
          <div className={styles.navContainer}>
            {/* Logo */}
            <Link href="/" className={styles.logo} aria-label="ZAVIROQ Home" onClick={closeMenu}>
              <Image
                src="/logo.svg"
                alt="ZAVIROQ Logo"
                width={170}
                height={55}
                className={styles.darkLogo}
                priority
              />
              <Image
                src="/zaviroq-logo-white.png"
                alt="ZAVIROQ Logo"
                width={170}
                height={55}
                className={styles.lightLogo}
                priority
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
              {/* Home */}
              <div className={styles.navLinkWrapper}>
                <Link
                  href="/"
                  className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
                  onClick={closeMenu}
                >
                  Home
                </Link>
                {isActive('/') && <div className={styles.activeGlow}></div>}
              </div>

              {/* About */}
              <div className={styles.navLinkWrapper}>
                <Link
                  href="/about"
                  className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}
                  onClick={closeMenu}
                >
                  About
                </Link>
                {isActive('/about') && <div className={styles.activeGlow}></div>}
              </div>

              {/* Services (Dropdown + Mega Menu) */}
              <div className={`${styles.hasDropdown} ${isActive('/services') ? styles.dropdownActive : ''}`}>
                <div className={styles.navLinkTrigger}>
                  <Link
                    href="/services"
                    className={`${styles.navLink} ${isActive('/services') ? styles.active : ''}`}
                    onClick={closeMenu}
                  >
                    Services
                  </Link>
                  <button
                    type="button"
                    className={styles.dropdownToggle}
                    onClick={() => setServicesMobileOpen(!servicesMobileOpen)}
                    aria-label="Toggle services menu"
                    aria-expanded={servicesMobileOpen}
                  >
                    <ChevronDown
                      size={14}
                      className={`${styles.navChevron} ${servicesMobileOpen ? styles.chevronRotated : ''}`}
                    />
                  </button>
                </div>

                {/* Desktop Mega Menu */}
                <div className={`${styles.megaMenu} ${styles.desktopOnly}`}>
                  <div className={styles.megaMenuGrid}>
                    <div className={styles.megaMenuColumn}>
                      <h4>SEO</h4>
                      <Link href="/services/seo/technical-seo" onClick={closeMenu}>Technical SEO</Link>
                      <Link href="/services/seo/on-page-seo" onClick={closeMenu}>On-Page SEO</Link>
                      <Link href="/services/seo/off-page-seo" onClick={closeMenu}>Off-Page SEO</Link>
                      <Link href="/services/seo/seo-audit" onClick={closeMenu}>SEO Audit</Link>
                      <Link href="/services/seo/keyword-research" onClick={closeMenu}>Keyword Research</Link>
                      <Link href="/services/seo/ai-seo" onClick={closeMenu}>AI SEO</Link>
                      <Link href="/services/seo/seo-strategy" onClick={closeMenu}>SEO Strategy</Link>
                      <Link href="/services/seo/agency-seo" onClick={closeMenu}>Agency SEO</Link>
                    </div>

                    <div className={styles.megaMenuColumn}>
                      <h4>Web Development</h4>
                      <Link href="/services/web-development/custom-website" onClick={closeMenu}>Custom Website</Link>
                      <Link href="/services/web-development/business-website" onClick={closeMenu}>Business Website</Link>
                      <Link href="/services/web-development/landing-page" onClick={closeMenu}>Landing Page</Link>
                      <Link href="/services/web-development/wordpress-development" onClick={closeMenu}>WordPress Dev</Link>
                      <Link href="/services/web-development/react-development" onClick={closeMenu}>React.js Dev</Link>
                      <Link href="/services/web-development/nextjs-development" onClick={closeMenu}>Next.js Dev</Link>
                    </div>

                    <div className={styles.megaMenuColumn}>
                      <h4>Ecommerce & Systems</h4>
                      <Link href="/services/ecommerce-systems/ecommerce-development" onClick={closeMenu}>Ecommerce Dev</Link>
                      <Link href="/services/ecommerce-systems/custom-ecommerce" onClick={closeMenu}>Custom Ecommerce</Link>
                      <Link href="/services/ecommerce-systems/admin-dashboard" onClick={closeMenu}>Admin Dashboard</Link>
                      <Link href="/services/ecommerce-systems/web-application" onClick={closeMenu}>Web Application</Link>
                      <Link href="/services/ecommerce-systems/saas-platform" onClick={closeMenu}>SaaS Platform</Link>
                    </div>

                    <div className={styles.megaMenuColumn}>
                      <h4>Performance Marketing</h4>
                      <Link href="/services/performance-marketing/google-ads" onClick={closeMenu}>Google Ads</Link>
                      <Link href="/services/performance-marketing/meta-ads" onClick={closeMenu}>Meta Ads</Link>
                      <Link href="/services/performance-marketing/linkedin-ads" onClick={closeMenu}>LinkedIn Ads</Link>
                      <Link href="/services/performance-marketing/tiktok-ads" onClick={closeMenu}>TikTok Ads</Link>
                      <Link href="/services/performance-marketing/youtube-ads" onClick={closeMenu}>YouTube Ads</Link>
                      <Link href="/services/performance-marketing/ppc-management" onClick={closeMenu}>PPC Management</Link>
                    </div>

                    <div className={styles.megaMenuColumn}>
                      <h4>Branding & Design</h4>
                      <Link href="/services/branding-design/logo-design" onClick={closeMenu}>Logo Design</Link>
                      <Link href="/services/branding-design/brand-identity" onClick={closeMenu}>Brand Identity</Link>
                      <Link href="/services/branding-design/company-profile" onClick={closeMenu}>Company Profile</Link>
                      <Link href="/services/branding-design/social-media-design" onClick={closeMenu}>Social Media Design</Link>
                    </div>

                    <div className={styles.megaMenuColumn}>
                      <h4>Industries</h4>
                      <Link href="/industries/real-estate" onClick={closeMenu}>Real Estate</Link>
                      <Link href="/industries/healthcare" onClick={closeMenu}>Healthcare</Link>
                      <Link href="/industries/saas" onClick={closeMenu}>SaaS</Link>
                      <Link href="/industries/ecommerce" onClick={closeMenu}>Ecommerce</Link>
                      <Link href="/industries/doctor" onClick={closeMenu}>Doctor</Link>
                    </div>
                  </div>

                  <Link href="/services" className={`${styles.dropdownItem} ${styles.viewAllEndpoint}`} onClick={closeMenu}>
                    <span className={styles.dropdownIcon}>⚡</span> View All 30+ Services
                  </Link>
                </div>

                {/* Mobile Services Accordion */}
                <div className={`${styles.mobileMegaMenu} ${styles.mobileOnly} ${servicesMobileOpen ? styles.mobileSubmenuExpanded : ''}`}>
                  <div className={styles.mobileAccordion}>
                    {/* SEO */}
                    <div className={styles.accordionSection}>
                      <button
                        type="button"
                        className={`${styles.accordionHeader} ${activeCategory === 'seo' ? styles.accordionHeaderActive : ''}`}
                        onClick={() => toggleCategory('seo')}
                      >
                        <span className={styles.accordionTitle}>
                          <Search size={16} /> SEO Services
                        </span>
                        <ChevronDown
                          size={15}
                          className={`${styles.accordionChevron} ${activeCategory === 'seo' ? styles.chevronRotated : ''}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {activeCategory === 'seo' && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className={styles.accordionContent}
                          >
                            <Link href="/services/seo/technical-seo" onClick={closeMenu}>Technical SEO</Link>
                            <Link href="/services/seo/on-page-seo" onClick={closeMenu}>On-Page SEO</Link>
                            <Link href="/services/seo/off-page-seo" onClick={closeMenu}>Off-Page SEO</Link>
                            <Link href="/services/seo/seo-audit" onClick={closeMenu}>SEO Audit</Link>
                            <Link href="/services/seo/keyword-research" onClick={closeMenu}>Keyword Research</Link>
                            <Link href="/services/seo/ai-seo" onClick={closeMenu}>AI SEO</Link>
                            <Link href="/services/seo/seo-strategy" onClick={closeMenu}>SEO Strategy</Link>
                            <Link href="/services/seo/agency-seo" onClick={closeMenu}>Agency SEO</Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Web Development */}
                    <div className={styles.accordionSection}>
                      <button
                        type="button"
                        className={`${styles.accordionHeader} ${activeCategory === 'web' ? styles.accordionHeaderActive : ''}`}
                        onClick={() => toggleCategory('web')}
                      >
                        <span className={styles.accordionTitle}>
                          <Code size={16} /> Web Development
                        </span>
                        <ChevronDown
                          size={15}
                          className={`${styles.accordionChevron} ${activeCategory === 'web' ? styles.chevronRotated : ''}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {activeCategory === 'web' && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className={styles.accordionContent}
                          >
                            <Link href="/services/web-development/custom-website" onClick={closeMenu}>Custom Website</Link>
                            <Link href="/services/web-development/business-website" onClick={closeMenu}>Business Website</Link>
                            <Link href="/services/web-development/landing-page" onClick={closeMenu}>Landing Page</Link>
                            <Link href="/services/web-development/wordpress-development" onClick={closeMenu}>WordPress Dev</Link>
                            <Link href="/services/web-development/react-development" onClick={closeMenu}>React.js Dev</Link>
                            <Link href="/services/web-development/nextjs-development" onClick={closeMenu}>Next.js Dev</Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Ecommerce & Systems */}
                    <div className={styles.accordionSection}>
                      <button
                        type="button"
                        className={`${styles.accordionHeader} ${activeCategory === 'ecom' ? styles.accordionHeaderActive : ''}`}
                        onClick={() => toggleCategory('ecom')}
                      >
                        <span className={styles.accordionTitle}>
                          <Layers size={16} /> Ecommerce & Systems
                        </span>
                        <ChevronDown
                          size={15}
                          className={`${styles.accordionChevron} ${activeCategory === 'ecom' ? styles.chevronRotated : ''}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {activeCategory === 'ecom' && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className={styles.accordionContent}
                          >
                            <Link href="/services/ecommerce-systems/ecommerce-development" onClick={closeMenu}>Ecommerce Dev</Link>
                            <Link href="/services/ecommerce-systems/custom-ecommerce" onClick={closeMenu}>Custom Ecommerce</Link>
                            <Link href="/services/ecommerce-systems/admin-dashboard" onClick={closeMenu}>Admin Dashboard</Link>
                            <Link href="/services/ecommerce-systems/web-application" onClick={closeMenu}>Web Application</Link>
                            <Link href="/services/ecommerce-systems/saas-platform" onClick={closeMenu}>SaaS Platform</Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Performance Marketing */}
                    <div className={styles.accordionSection}>
                      <button
                        type="button"
                        className={`${styles.accordionHeader} ${activeCategory === 'marketing' ? styles.accordionHeaderActive : ''}`}
                        onClick={() => toggleCategory('marketing')}
                      >
                        <span className={styles.accordionTitle}>
                          <BarChart size={16} /> Performance Marketing
                        </span>
                        <ChevronDown
                          size={15}
                          className={`${styles.accordionChevron} ${activeCategory === 'marketing' ? styles.chevronRotated : ''}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {activeCategory === 'marketing' && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className={styles.accordionContent}
                          >
                            <Link href="/services/performance-marketing/google-ads" onClick={closeMenu}>Google Ads</Link>
                            <Link href="/services/performance-marketing/meta-ads" onClick={closeMenu}>Meta Ads</Link>
                            <Link href="/services/performance-marketing/linkedin-ads" onClick={closeMenu}>LinkedIn Ads</Link>
                            <Link href="/services/performance-marketing/tiktok-ads" onClick={closeMenu}>TikTok Ads</Link>
                            <Link href="/services/performance-marketing/youtube-ads" onClick={closeMenu}>YouTube Ads</Link>
                            <Link href="/services/performance-marketing/ppc-management" onClick={closeMenu}>PPC Management</Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Branding & Design */}
                    <div className={styles.accordionSection}>
                      <button
                        type="button"
                        className={`${styles.accordionHeader} ${activeCategory === 'branding' ? styles.accordionHeaderActive : ''}`}
                        onClick={() => toggleCategory('branding')}
                      >
                        <span className={styles.accordionTitle}>
                          <PenTool size={16} /> Branding & Design
                        </span>
                        <ChevronDown
                          size={15}
                          className={`${styles.accordionChevron} ${activeCategory === 'branding' ? styles.chevronRotated : ''}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {activeCategory === 'branding' && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className={styles.accordionContent}
                          >
                            <Link href="/services/branding-design/logo-design" onClick={closeMenu}>Logo Design</Link>
                            <Link href="/services/branding-design/brand-identity" onClick={closeMenu}>Brand Identity</Link>
                            <Link href="/services/branding-design/company-profile" onClick={closeMenu}>Company Profile</Link>
                            <Link href="/services/branding-design/social-media-design" onClick={closeMenu}>Social Media Design</Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* View All Services Link */}
                  <Link href="/services" className={styles.viewAllMobile} onClick={closeMenu}>
                    ⚡ View All 30+ Services
                  </Link>
                </div>
              </div>

              {/* Industries (Dropdown) */}
              <div className={`${styles.hasDropdown} ${isActive('/industries') ? styles.dropdownActive : ''}`}>
                <div className={styles.navLinkTrigger}>
                  <Link
                    href="/industries"
                    className={`${styles.navLink} ${isActive('/industries') ? styles.active : ''}`}
                    onClick={closeMenu}
                  >
                    Industries
                  </Link>
                  <button
                    type="button"
                    className={styles.dropdownToggle}
                    onClick={() => setIndustriesMobileOpen(!industriesMobileOpen)}
                    aria-label="Toggle industries menu"
                    aria-expanded={industriesMobileOpen}
                  >
                    <ChevronDown
                      size={14}
                      className={`${styles.navChevron} ${industriesMobileOpen ? styles.chevronRotated : ''}`}
                    />
                  </button>
                </div>

                {/* Desktop Industries Dropdown */}
                <div className={`${styles.dropdownMenu} ${styles.desktopOnly}`}>
                  <Link href="/industries/real-estate" className={styles.dropdownItem} onClick={closeMenu}>
                    <Building2 size={16} className={styles.dropdownIconItem} /> Real Estate
                  </Link>
                  <Link href="/industries/healthcare" className={styles.dropdownItem} onClick={closeMenu}>
                    <Stethoscope size={16} className={styles.dropdownIconItem} /> Healthcare
                  </Link>
                  <Link href="/industries/saas" className={styles.dropdownItem} onClick={closeMenu}>
                    <Cpu size={16} className={styles.dropdownIconItem} /> SaaS
                  </Link>
                  <Link href="/industries/ecommerce" className={styles.dropdownItem} onClick={closeMenu}>
                    <ShoppingBag size={16} className={styles.dropdownIconItem} /> Ecommerce
                  </Link>
                  <Link href="/industries/doctor" className={styles.dropdownItem} onClick={closeMenu}>
                    <UserCheck size={16} className={styles.dropdownIconItem} /> Doctor & Clinics
                  </Link>
                  <Link href="/industries" className={`${styles.dropdownItem} ${styles.viewAllEndpoint}`} onClick={closeMenu}>
                    ⚡ Explore All Industries
                  </Link>
                </div>

                {/* Mobile Industries Accordion */}
                <div className={`${styles.mobileMegaMenu} ${styles.mobileOnly} ${industriesMobileOpen ? styles.mobileSubmenuExpanded : ''}`}>
                  <div className={styles.accordionContent} style={{ paddingLeft: '14px' }}>
                    <Link href="/industries/real-estate" onClick={closeMenu}>Real Estate</Link>
                    <Link href="/industries/healthcare" onClick={closeMenu}>Healthcare</Link>
                    <Link href="/industries/saas" onClick={closeMenu}>SaaS</Link>
                    <Link href="/industries/ecommerce" onClick={closeMenu}>Ecommerce</Link>
                    <Link href="/industries/doctor" onClick={closeMenu}>Doctor & Clinics</Link>
                    <Link href="/industries" className={styles.viewAllMobile} style={{ marginTop: '6px' }} onClick={closeMenu}>
                      ⚡ Explore All Industries
                    </Link>
                  </div>
                </div>
              </div>

              {/* Markets */}
              <div className={styles.navLinkWrapper}>
                <Link
                  href="/locations"
                  className={`${styles.navLink} ${isActive('/locations') ? styles.active : ''}`}
                  onClick={closeMenu}
                >
                  Markets
                </Link>
                {isActive('/locations') && <div className={styles.activeGlow}></div>}
              </div>

              {/* Portfolio */}
              <div className={styles.navLinkWrapper}>
                <Link
                  href="/portfolio"
                  className={`${styles.navLink} ${isActive('/portfolio') ? styles.active : ''}`}
                  onClick={closeMenu}
                >
                  Portfolio
                </Link>
                {isActive('/portfolio') && <div className={styles.activeGlow}></div>}
              </div>

              {/* Contact */}
              <div className={styles.navLinkWrapper}>
                <Link
                  href="/contact"
                  className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}
                  onClick={closeMenu}
                >
                  Contact
                </Link>
                {isActive('/contact') && <div className={styles.activeGlow}></div>}
              </div>

              {/* Mobile Drawer Bottom Section (Contact Info + CTA) */}
              <div className={`${styles.mobileDrawerFooter} ${styles.mobileOnly}`}>
                <div className={styles.mobileContactBox}>
                  <a href="mailto:info@zaviroq.com" className={styles.mobileContactLink}>
                    <Mail size={15} /> info@zaviroq.com
                  </a>
                  <a href="tel:+917483830582" className={styles.mobileContactLink}>
                    <Phone size={15} /> +91 74 8383 0582
                  </a>
                </div>

                <div className={styles.mobileSocials}>
                  <a href="https://linkedin.com/company/zaviroq" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin size={16} />
                  </a>
                  <a href="https://instagram.com/zaviroq" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram size={16} />
                  </a>
                  <a href="https://youtube.com/@zaviroq" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <Youtube size={16} />
                  </a>
                  <a href="https://facebook.com/zaviroq" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook size={16} />
                  </a>
                </div>

                <Link href="/contact" className={`${styles.ctaBtn} ${styles.mobileCtaBtn}`} onClick={closeMenu}>
                  Get a Free Quote <ArrowRight size={16} className={styles.ctaIcon} />
                </Link>
              </div>
            </div>

            {/* Navbar Right (Theme Toggle, Lang, CTA, Hamburger) */}
            <div className={styles.navbarRight}>
              <ThemeToggle />

              <div className={styles.navDivider}></div>

              <div className={styles.langSelector} title="Language">
                <Globe size={14} className={styles.topbarIcon} />
                <span>EN</span>
              </div>

              {/* Tablet & Desktop CTA button */}
              <Link href="/contact" className={`${styles.ctaBtn} ${styles.desktopCtaBtn}`} onClick={closeMenu}>
                Get Quote
                <div className={styles.ctaIconWrapper}>
                  <ArrowRight size={13} />
                </div>
              </Link>

              {/* Hamburger Button for Mobile & Tablet */}
              <button
                type="button"
                className={styles.hamburger}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
              >
                <span className={`${styles.bar} ${menuOpen ? styles.openBar1 : ''}`}></span>
                <span className={`${styles.bar} ${menuOpen ? styles.openBar2 : ''}`}></span>
                <span className={`${styles.bar} ${menuOpen ? styles.openBar3 : ''}`}></span>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
