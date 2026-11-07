"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
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
  Cpu,
  ShoppingBag,
  Megaphone,
  TrendingUp,
  Video,
} from 'lucide-react';
import { Linkedin, Instagram, Youtube, Facebook } from '../components/SocialIcons';
import styles from './Navbar.module.css';
import ThemeToggle from '../components/ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();
  if (pathname?.includes('/admin')) {
    return null;
  }
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesMobileOpen, setServicesMobileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);

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
    setServicesMobileOpen(false);
    setActiveCategory(null);
  }, []);

  // Scroll drawer to top whenever it opens
  useEffect(() => {
    if (menuOpen && navLinksRef.current) {
      navLinksRef.current.scrollTop = 0;
      const id = requestAnimationFrame(() => {
        if (navLinksRef.current) {
          navLinksRef.current.scrollTop = 0;
        }
      });
      return () => cancelAnimationFrame(id);
    }
  }, [menuOpen]);

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
      document.documentElement.classList.add('menu-open');
      document.body.classList.add('menu-open');
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.documentElement.classList.remove('menu-open');
      document.body.classList.remove('menu-open');
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.documentElement.classList.remove('menu-open');
      document.body.classList.remove('menu-open');
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [menuOpen]);

  // Close menu on screen resize to desktop or on Escape key
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1100) {
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

      <header className={`${styles.header} ${menuOpen ? styles.headerMenuOpen : ''}`}>
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
                width={200}
                height={65}
                className={styles.darkLogo}
                priority
              />
              <Image
                src="/zaviroq-logo-white.png"
                alt="ZAVIROQ Logo"
                width={200}
                height={65}
                className={styles.lightLogo}
                priority
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div ref={navLinksRef} className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
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
                <div
                  className={styles.navLinkTrigger}
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.innerWidth <= 1100) {
                      setServicesMobileOpen(!servicesMobileOpen);
                    }
                  }}
                >
                  <Link
                    href="/services"
                    className={`${styles.navLink} ${isActive('/services') ? styles.active : ''}`}
                    onClick={(e) => {
                      if (window.innerWidth <= 1100) {
                        e.preventDefault();
                        setServicesMobileOpen(!servicesMobileOpen);
                      } else {
                        closeMenu();
                      }
                    }}
                  >
                    Services
                  </Link>
                  <button
                    type="button"
                    className={styles.dropdownToggle}
                    onClick={(e) => {
                      e.stopPropagation();
                      setServicesMobileOpen(!servicesMobileOpen);
                    }}
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
                    {/* Column 1: Marketing & Search */}
                    <div className={styles.megaMenuColumn}>
                      <div className={styles.megaMenuGroup}>
                        <h4>
                          <Link href="/services/digital-marketing" onClick={closeMenu}>
                            Digital Marketing
                          </Link>
                        </h4>
                        <Link href="/services/digital-marketing/content-marketing" onClick={closeMenu}>Content Marketing</Link>
                        <Link href="/services/digital-marketing/lead-generation" onClick={closeMenu}>Lead Generation</Link>
                        <Link href="/services/digital-marketing/digital-strategy" onClick={closeMenu}>Digital Strategy</Link>
                        <Link href="/services/digital-marketing/marketing-automation" onClick={closeMenu}>Marketing Automation</Link>
                      </div>

                      <div className={styles.megaMenuGroup}>
                        <h4>
                          <Link href="/services/seo" onClick={closeMenu}>
                            SEO Services
                          </Link>
                        </h4>
                        <Link href="/services/seo/local-seo" onClick={closeMenu}>Local SEO (Mangalore)</Link>
                        <Link href="/services/seo/technical-seo" onClick={closeMenu}>Technical SEO</Link>
                        <Link href="/services/seo/on-page-seo" onClick={closeMenu}>On-Page SEO</Link>
                        <Link href="/services/seo/link-building" onClick={closeMenu}>Link Building</Link>
                      </div>
                    </div>

                    {/* Column 2: Paid Ads, Social & Email */}
                    <div className={styles.megaMenuColumn}>
                      <div className={styles.megaMenuGroup}>
                        <h4>
                          <Link href="/services/paid-advertising" onClick={closeMenu}>
                            Google &amp; Paid Ads
                          </Link>
                        </h4>
                        <Link href="/services/paid-advertising/google-ads" onClick={closeMenu}>Google Search Ads</Link>
                        <Link href="/services/paid-advertising/meta-ads" onClick={closeMenu}>Meta &amp; Instagram Ads</Link>
                        <Link href="/services/paid-advertising/ppc-management" onClick={closeMenu}>PPC Management</Link>
                        <Link href="/services/paid-advertising/youtube-advertising" onClick={closeMenu}>YouTube Advertising</Link>
                      </div>

                      <div className={styles.megaMenuGroup}>
                        <h4>
                          <Link href="/services/social-media-marketing" onClick={closeMenu}>
                            Social Media Marketing
                          </Link>
                        </h4>
                        <Link href="/services/social-media-marketing/instagram-marketing" onClick={closeMenu}>Instagram Growth</Link>
                        <Link href="/services/social-media-marketing/reels-creation" onClick={closeMenu}>Viral Reels Creation</Link>
                        <Link href="/services/social-media-marketing/social-media-management" onClick={closeMenu}>Social Management</Link>
                      </div>

                      <div className={styles.megaMenuGroup}>
                        <h4>
                          <Link href="/services/email-marketing" onClick={closeMenu}>
                            Email Marketing
                          </Link>
                        </h4>
                        <Link href="/services/email-marketing/newsletter-campaigns" onClick={closeMenu}>Newsletter Campaigns</Link>
                        <Link href="/services/email-marketing/drip-sequences" onClick={closeMenu}>Automated Drip Flows</Link>
                      </div>
                    </div>

                    {/* Column 3: Web & E-Commerce */}
                    <div className={styles.megaMenuColumn}>
                      <div className={styles.megaMenuGroup}>
                        <h4>
                          <Link href="/services/website-design" onClick={closeMenu}>
                            Website Design
                          </Link>
                        </h4>
                        <Link href="/services/website-design/ui-ux-design" onClick={closeMenu}>UI/UX Design</Link>
                        <Link href="/services/website-design/landing-page-design" onClick={closeMenu}>Landing Page Design</Link>
                        <Link href="/services/website-design/website-redesign" onClick={closeMenu}>Website Redesign</Link>
                      </div>

                      <div className={styles.megaMenuGroup}>
                        <h4>
                          <Link href="/services/website-development" onClick={closeMenu}>
                            Website Development
                          </Link>
                        </h4>
                        <Link href="/services/website-development/custom-website-development" onClick={closeMenu}>Custom Web Dev</Link>
                        <Link href="/services/website-development/nextjs-development" onClick={closeMenu}>Next.js &amp; React Dev</Link>
                        <Link href="/services/website-development/wordpress-development" onClick={closeMenu}>WordPress Dev</Link>
                        <Link href="/services/website-development/website-performance-optimization" onClick={closeMenu}>Speed Optimization</Link>
                      </div>

                      <div className={styles.megaMenuGroup}>
                        <h4>
                          <Link href="/services/ecommerce-development" onClick={closeMenu}>
                            E-Commerce Development
                          </Link>
                        </h4>
                        <Link href="/services/ecommerce-development/shopify-development" onClick={closeMenu}>Shopify Stores</Link>
                        <Link href="/services/ecommerce-development/woocommerce-development" onClick={closeMenu}>WooCommerce</Link>
                        <Link href="/services/ecommerce-development/custom-ecommerce" onClick={closeMenu}>Custom Storefronts</Link>
                      </div>
                    </div>

                    {/* Column 4: Creative, AI & Software */}
                    <div className={styles.megaMenuColumn}>
                      <div className={styles.megaMenuGroup}>
                        <h4>
                          <Link href="/services/branding" onClick={closeMenu}>
                            Branding &amp; Creative
                          </Link>
                        </h4>
                        <Link href="/services/branding/logo-design" onClick={closeMenu}>Logo Design</Link>
                        <Link href="/services/branding/brand-identity" onClick={closeMenu}>Brand Identity Systems</Link>
                        <Link href="/services/branding/company-profile-design" onClick={closeMenu}>Company Profile Design</Link>
                      </div>

                      <div className={styles.megaMenuGroup}>
                        <h4>
                          <Link href="/services/video-production" onClick={closeMenu}>
                            Video Production
                          </Link>
                        </h4>
                        <Link href="/services/video-production/video-editing" onClick={closeMenu}>Video Editing</Link>
                        <Link href="/services/video-production/promotional-videos" onClick={closeMenu}>Promotional Brand Videos</Link>
                      </div>

                      <div className={styles.megaMenuGroup}>
                        <h4>
                          <Link href="/services/ai-automation" onClick={closeMenu}>
                            AI Automation
                          </Link>
                        </h4>
                        <Link href="/services/ai-automation/ai-chatbot-development" onClick={closeMenu}>AI Chatbots</Link>
                        <Link href="/services/ai-automation/workflow-automation" onClick={closeMenu}>Workflow Automation</Link>
                      </div>

                      <div className={styles.megaMenuGroup}>
                        <h4>
                          <Link href="/services/business-software" onClick={closeMenu}>
                            Business Software
                          </Link>
                        </h4>
                        <Link href="/services/business-software/hotel-erp-system" onClick={closeMenu}>Hotel ERP Systems</Link>
                        <Link href="/services/business-software/custom-business-software" onClick={closeMenu}>Custom ERP &amp; Software</Link>
                      </div>
                    </div>
                  </div>

                  <Link href="/services" className={`${styles.dropdownItem} ${styles.viewAllEndpoint}`} onClick={closeMenu}>
                    <span className={styles.dropdownIcon}>⚡</span> View All 12 Services &amp; 64 Capabilities →
                  </Link>
                </div>

                {/* Mobile Services Accordion */}
                <div className={`${styles.mobileMegaMenu} ${styles.mobileOnly} ${servicesMobileOpen ? styles.mobileSubmenuExpanded : ''}`}>
                  <div className={styles.mobileAccordion}>
                    {/* Digital Marketing */}
                    <div className={styles.accordionSection}>
                      <button
                        type="button"
                        className={`${styles.accordionHeader} ${activeCategory === 'digital-marketing' ? styles.accordionHeaderActive : ''}`}
                        onClick={() => toggleCategory('digital-marketing')}
                      >
                        <span className={styles.accordionTitle}>
                          <Megaphone size={16} /> Digital Marketing
                        </span>
                        <ChevronDown
                          size={15}
                          className={`${styles.accordionChevron} ${activeCategory === 'digital-marketing' ? styles.chevronRotated : ''}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {activeCategory === 'digital-marketing' && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className={styles.accordionContent}
                          >
                            <Link href="/services/digital-marketing" onClick={closeMenu}>Overview</Link>
                            <Link href="/services/digital-marketing/content-marketing" onClick={closeMenu}>Content Marketing</Link>
                            <Link href="/services/digital-marketing/lead-generation" onClick={closeMenu}>Lead Generation</Link>
                            <Link href="/services/digital-marketing/digital-strategy" onClick={closeMenu}>Digital Strategy</Link>
                            <Link href="/services/digital-marketing/marketing-automation" onClick={closeMenu}>Marketing Automation</Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* SEO Services */}
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
                            <Link href="/services/seo" onClick={closeMenu}>Overview</Link>
                            <Link href="/services/seo/local-seo" onClick={closeMenu}>Local SEO (Mangalore)</Link>
                            <Link href="/services/seo/technical-seo" onClick={closeMenu}>Technical SEO</Link>
                            <Link href="/services/seo/on-page-seo" onClick={closeMenu}>On-Page SEO</Link>
                            <Link href="/services/seo/link-building" onClick={closeMenu}>Link Building</Link>
                            <Link href="/services/seo/seo-audit" onClick={closeMenu}>SEO Audit</Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Paid Advertising */}
                    <div className={styles.accordionSection}>
                      <button
                        type="button"
                        className={`${styles.accordionHeader} ${activeCategory === 'paid-ads' ? styles.accordionHeaderActive : ''}`}
                        onClick={() => toggleCategory('paid-ads')}
                      >
                        <span className={styles.accordionTitle}>
                          <BarChart size={16} /> Google &amp; Paid Ads
                        </span>
                        <ChevronDown
                          size={15}
                          className={`${styles.accordionChevron} ${activeCategory === 'paid-ads' ? styles.chevronRotated : ''}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {activeCategory === 'paid-ads' && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className={styles.accordionContent}
                          >
                            <Link href="/services/paid-advertising" onClick={closeMenu}>Overview</Link>
                            <Link href="/services/paid-advertising/google-ads" onClick={closeMenu}>Google Ads</Link>
                            <Link href="/services/paid-advertising/meta-ads" onClick={closeMenu}>Meta &amp; Instagram Ads</Link>
                            <Link href="/services/paid-advertising/ppc-management" onClick={closeMenu}>PPC Management</Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Social Media & Email */}
                    <div className={styles.accordionSection}>
                      <button
                        type="button"
                        className={`${styles.accordionHeader} ${activeCategory === 'social-email' ? styles.accordionHeaderActive : ''}`}
                        onClick={() => toggleCategory('social-email')}
                      >
                        <span className={styles.accordionTitle}>
                          <Globe size={16} /> Social Media &amp; Email
                        </span>
                        <ChevronDown
                          size={15}
                          className={`${styles.accordionChevron} ${activeCategory === 'social-email' ? styles.chevronRotated : ''}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {activeCategory === 'social-email' && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className={styles.accordionContent}
                          >
                            <Link href="/services/social-media-marketing" onClick={closeMenu}>Social Media Marketing</Link>
                            <Link href="/services/social-media-marketing/instagram-marketing" onClick={closeMenu}>Instagram Growth</Link>
                            <Link href="/services/social-media-marketing/reels-creation" onClick={closeMenu}>Reels Creation</Link>
                            <Link href="/services/email-marketing" onClick={closeMenu}>Email Marketing</Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Web Design & Dev */}
                    <div className={styles.accordionSection}>
                      <button
                        type="button"
                        className={`${styles.accordionHeader} ${activeCategory === 'web' ? styles.accordionHeaderActive : ''}`}
                        onClick={() => toggleCategory('web')}
                      >
                        <span className={styles.accordionTitle}>
                          <Code size={16} /> Web Design &amp; Dev
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
                            <Link href="/services/website-design" onClick={closeMenu}>Website Design</Link>
                            <Link href="/services/website-development" onClick={closeMenu}>Website Development</Link>
                            <Link href="/services/website-development/custom-website-development" onClick={closeMenu}>Custom Web Dev</Link>
                            <Link href="/services/website-development/nextjs-development" onClick={closeMenu}>Next.js &amp; React Dev</Link>
                            <Link href="/services/website-development/wordpress-development" onClick={closeMenu}>WordPress Dev</Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* E-Commerce Systems */}
                    <div className={styles.accordionSection}>
                      <button
                        type="button"
                        className={`${styles.accordionHeader} ${activeCategory === 'ecom' ? styles.accordionHeaderActive : ''}`}
                        onClick={() => toggleCategory('ecom')}
                      >
                        <span className={styles.accordionTitle}>
                          <ShoppingBag size={16} /> E-Commerce Systems
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
                            <Link href="/services/ecommerce-development" onClick={closeMenu}>E-Commerce Overview</Link>
                            <Link href="/services/ecommerce-development/shopify-development" onClick={closeMenu}>Shopify Stores</Link>
                            <Link href="/services/ecommerce-development/woocommerce-development" onClick={closeMenu}>WooCommerce</Link>
                            <Link href="/services/ecommerce-development/custom-ecommerce" onClick={closeMenu}>Custom Storefronts</Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Branding & Video */}
                    <div className={styles.accordionSection}>
                      <button
                        type="button"
                        className={`${styles.accordionHeader} ${activeCategory === 'creative' ? styles.accordionHeaderActive : ''}`}
                        onClick={() => toggleCategory('creative')}
                      >
                        <span className={styles.accordionTitle}>
                          <PenTool size={16} /> Branding &amp; Video
                        </span>
                        <ChevronDown
                          size={15}
                          className={`${styles.accordionChevron} ${activeCategory === 'creative' ? styles.chevronRotated : ''}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {activeCategory === 'creative' && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className={styles.accordionContent}
                          >
                            <Link href="/services/branding" onClick={closeMenu}>Branding Overview</Link>
                            <Link href="/services/branding/logo-design" onClick={closeMenu}>Logo Design</Link>
                            <Link href="/services/branding/brand-identity" onClick={closeMenu}>Brand Identity</Link>
                            <Link href="/services/video-production" onClick={closeMenu}>Video Production</Link>
                            <Link href="/services/video-production/video-editing" onClick={closeMenu}>Video Editing</Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* AI & Business Software */}
                    <div className={styles.accordionSection}>
                      <button
                        type="button"
                        className={`${styles.accordionHeader} ${activeCategory === 'software' ? styles.accordionHeaderActive : ''}`}
                        onClick={() => toggleCategory('software')}
                      >
                        <span className={styles.accordionTitle}>
                          <Cpu size={16} /> AI &amp; Business Software
                        </span>
                        <ChevronDown
                          size={15}
                          className={`${styles.accordionChevron} ${activeCategory === 'software' ? styles.chevronRotated : ''}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {activeCategory === 'software' && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className={styles.accordionContent}
                          >
                            <Link href="/services/ai-automation" onClick={closeMenu}>AI Automation</Link>
                            <Link href="/services/ai-automation/ai-chatbot-development" onClick={closeMenu}>AI Chatbots</Link>
                            <Link href="/services/business-software" onClick={closeMenu}>Business Software</Link>
                            <Link href="/services/business-software/hotel-erp-system" onClick={closeMenu}>Hotel ERP Systems</Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* View All Services Link */}
                  <Link href="/services" className={styles.viewAllMobile} onClick={closeMenu}>
                    ⚡ View All 12 Services &amp; 64 Capabilities
                  </Link>
                </div>
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

              {/* Industries */}
              <div className={styles.navLinkWrapper}>
                <Link
                  href="/industries"
                  className={`${styles.navLink} ${isActive('/industries') ? styles.active : ''}`}
                  onClick={closeMenu}
                >
                  Industries
                </Link>
                {isActive('/industries') && <div className={styles.activeGlow}></div>}
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

              {/* Mobile Drawer Bottom Section (Appearance + Contact Info + CTA) */}
              <div className={`${styles.mobileDrawerFooter} ${styles.mobileOnly}`}>
                {/* Theme Selector Row */}
                <div className={styles.mobileThemeRow}>
                  <div className={styles.mobileThemeLabel}>
                    <span>Appearance</span>
                    <small>Switch Light / Dark mode</small>
                  </div>
                  <ThemeToggle />
                </div>

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
                onClick={() => {
                  setMenuOpen((prev) => {
                    const next = !prev;
                    if (!next) {
                      setServicesMobileOpen(false);
                      setActiveCategory(null);
                    }
                    return next;
                  });
                }}
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
