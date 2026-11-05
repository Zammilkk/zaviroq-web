"use client";

import { Link, usePathname } from '@/i18n/routing';
import Image from 'next/image';
import styles from './Footer.module.css';
import { 
  ArrowRight, MessageCircle, PhoneCall, Mail, MapPin
} from 'lucide-react';

export default function Footer({ locale = 'en', theme = 'lite' }: { locale?: string, theme?: 'dark' | 'lite' }) {
  const pathname = usePathname();
  if (pathname?.includes('/admin')) return null;
  return (
    <footer className={`${styles.footerContainer} ${theme === 'lite' ? styles.liteTheme : ''}`}>
      <div className={styles.footerGlow}></div>
      <div className={styles.container}>
        
        {/* Top Area: 4-Column Balanced Grid */}
        <div className={styles.topArea}>
          {/* Column 1: Brand */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logoWrap} aria-label="ZAVIROQ Home">
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
            
            <h2 className={styles.brandSlogan}>
              Ideas Today.<br/>
              <span className={styles.gradientText}>Bigger Tomorrow.</span>
            </h2>
            
            <p className={styles.brandDesc}>
              We help businesses across the GCC and India build powerful digital experiences through strategy, creativity and technology.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.linkGroup}>
            <h4 className={styles.linkTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li><Link href="/"><span>Home</span> <ArrowRight size={14} /></Link></li>
              <li><Link href="/about"><span>About</span> <ArrowRight size={14} /></Link></li>
              <li><Link href="/services"><span>Services</span> <ArrowRight size={14} /></Link></li>
              <li><Link href="/portfolio"><span>Portfolio</span> <ArrowRight size={14} /></Link></li>
              <li><Link href="/blog"><span>Blog</span> <ArrowRight size={14} /></Link></li>
              <li><Link href="/contact"><span>Contact Us</span> <ArrowRight size={14} /></Link></li>
            </ul>
          </div>
          
          {/* Column 3: Our Services */}
          <div className={styles.linkGroup}>
            <h4 className={styles.linkTitle}>Our Services</h4>
            <ul className={styles.linkList}>
              <li><Link href="/services/web-development"><span>Website Design</span> <ArrowRight size={14} /></Link></li>
              <li><Link href="/services/seo"><span>SEO Services</span> <ArrowRight size={14} /></Link></li>
              <li><Link href="/services/branding-design"><span>Branding &amp; Design</span> <ArrowRight size={14} /></Link></li>
              <li><Link href="/services/ecommerce-systems"><span>E-Commerce Systems</span> <ArrowRight size={14} /></Link></li>
              <li><Link href="/services/performance-marketing/google-ads"><span>Google Ads</span> <ArrowRight size={14} /></Link></li>
              <li><Link href="/services/performance-marketing/meta-ads"><span>Meta Ads</span> <ArrowRight size={14} /></Link></li>
            </ul>
          </div>

          {/* Column 4: CTA */}
          <div className={styles.ctaCol}>
            <div className={styles.ctaEyebrow}>LET&apos;S BUILD TOGETHER</div>
            <h3 className={styles.ctaHeadline}>
              Ready to Grow<br/>
              <span className={styles.gradientText}>Your Brand?</span>
            </h3>
            <p className={styles.ctaDesc}>
              Get in touch and let&apos;s create something great, together.
            </p>
            <Link href="/contact" className={styles.ctaBtn}>
              Get in Touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* 4-Column Aligned Contact Row */}
        <div className={styles.contactRow}>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}><MessageCircle size={16} /></div>
            <div className={styles.contactText}>
              <strong>+971 52 977 5206</strong>
              <span>WhatsApp (Direct)</span>
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}><PhoneCall size={16} /></div>
            <div className={styles.contactText}>
              <strong>+91 74 8383 0582</strong>
              <span>(Call)</span>
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}><Mail size={16} /></div>
            <div className={styles.contactText}>
              <strong>info@zaviroq.com</strong>
              <span>Business Enquiries</span>
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}><MapPin size={16} /></div>
            <div className={styles.contactText}>
              <strong>Global Operations</strong>
              <span>GCC | India | Remote</span>
            </div>
          </div>
        </div>

        {/* Global Wireframe Graphic Layer */}
        <div className={styles.globeGraphic}>
           <Image 
             src="/assets/images/footer-mockup.png" 
             alt="Globe Wireframe" 
             fill 
             className={styles.globeImg} 
             unoptimized 
           />
           <div className={styles.globeText}>
             SAME<br/>PASSION<br/>EVERYWHERE
           </div>
        </div>

        {/* 4-Column Aligned Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            &copy; 2026 ZAVIROQ. All rights reserved.
          </div>
          
          <div className={styles.socials}>
            <a href="#" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1C2.5 5 4.5 5 12 5c7.5 0 9.5 0 9.5 2.1 0 1.9 0 7.8 0 9.8 0 2.1-2 2.1-9.5 2.1-7.5 0-9.5 0-9.5-2.1 0-2 0-7.9 0-9.8z"/><path d="M9.8 15V9l6.3 3z"/></svg>
            </a>
          </div>

          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <span className={styles.separator}>|</span>
            <Link href="/terms">Terms of Service</Link>
            <span className={styles.separator}>|</span>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">Sitemap</a>
          </div>
          
          <Link href="/" className={styles.footerLogoBadge} aria-label="ZAVIROQ Home">
            <Image
              src="/logo.svg"
              alt="ZAVIROQ Logo"
              width={160}
              height={52}
              className={styles.darkLogo}
            />
            <Image
              src="/zaviroq-logo-white.png"
              alt="ZAVIROQ Logo"
              width={160}
              height={52}
              className={styles.lightLogo}
            />
          </Link>
        </div>

      </div>
    </footer>
  );
}
