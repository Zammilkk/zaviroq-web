import { Link } from '@/i18n/routing';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.glassFooter}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Image src="/logo.svg" alt="ZAVIROQ Logo" width={180} height={45} style={{ objectFit: 'contain', marginBottom: '10px' }} />
            <p className={styles.desc}>Scaling Brands Digitally across the GCC and India with premium AI-driven workflows and stunning interface design.</p>
          </div>
          
          <div className={styles.linksBlock}>
            <h4>Core Architecture</h4>
            <Link href="/services/seo-mastery">SEO Dominance</Link>
            <Link href="/services/web-development">Web Engineering</Link>
            <Link href="/services/performance-marketing">Performance Ads</Link>
            <Link href="/services/ai-integration">AI Automations</Link>
            <Link href="/services/branding">Brand Identity</Link>
            <Link href="/services/tech-security">Cyber Security</Link>
          </div>

          <div className={styles.linksBlock}>
            <h4>Company Directory</h4>
            <Link href="/about">Our Core Story</Link>
            <Link href="/portfolio">Elite Portfolio</Link>
            <Link href="/services">30+ Micro-Services</Link>
            <Link href="/blog">Intel & News</Link>
            <Link href="/contact" style={{ display: 'inline-block', marginTop: '10px', color: 'var(--primary-blue)', fontWeight: 'bold' }}>Request Quote ↗</Link>
          </div>

          <div className={styles.linksBlock}>
            <h4>Contact Array</h4>
            <div className={styles.contactLine}>
               <a href="https://wa.me/971529775206" target="_blank" rel="noopener noreferrer">🇦🇪 +971 52 977 5206</a>
               <span>WhatsApp Pipeline (Direct)</span>
            </div>
            <div className={styles.contactLine}>
               <a href="tel:+917483830582">🇮🇳 +91 74 8383 0582</a>
               <span>Call & WhatsApp Array</span>
            </div>
            
            <div className={styles.emailStack}>
              <a href="mailto:info@zaviroq.com">info@zaviroq.com</a>
              <a href="mailto:contact@zaviroq.com">contact@zaviroq.com</a>
              <a href="mailto:billing@zaviroq.com">billing@zaviroq.com</a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} ZAVIROQ. All rights reserved.</p>
          <div className={styles.statusIndicator}>
             <span className={styles.statusDot}></span>
             Global Matrix Online
          </div>
          <div className={styles.socials}>
            <a href="#">X / Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
