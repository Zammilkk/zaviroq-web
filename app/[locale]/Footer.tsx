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
            <div className={styles.contactLine}>
               <a href="https://wa.me/971529775206" target="_blank" rel="noopener noreferrer">🇦🇪 +971 52 977 5206</a>
               <span>WhatsApp Pipeline (Direct)</span>
            </div>
            <div className={styles.contactLine}>
               <a href="https://wa.me/971529775206">🇦🇪 +971 52 977 5206 (WhatsApp)</a>
            </div>
            <div className={styles.contactLine}>
               <a href="tel:+917483830582">🇮🇳 +91 74 8383 0582 (Call)</a>
            </div>
            <div className={styles.emailStack}>
              <a href="mailto:info@zaviroq.com">info@zaviroq.com</a>
              <a href="mailto:contact@zaviroq.com">contact@zaviroq.com</a>
            </div>
          </div>
          
          <div className={styles.linksBlock}>
            <h4>Core SEO</h4>
            <Link href="/services/seo/technical-seo">Technical SEO</Link>
            <Link href="/services/seo/on-page-seo">On-Page SEO</Link>
            <Link href="/services/seo/off-page-seo">Off-Page SEO</Link>
            <Link href="/services/seo/seo-audit">SEO Audit</Link>
            <Link href="/services/seo/keyword-research">Keyword Research</Link>
            <Link href="/services/seo/seo-strategy">SEO Strategy</Link>
          </div>

          <div className={styles.linksBlock}>
            <h4>Web Development</h4>
            <Link href="/services/web-development/custom-website">Custom Website</Link>
            <Link href="/services/web-development/business-website">Business Website</Link>
            <Link href="/services/web-development/landing-page">Landing Page</Link>
            <Link href="/services/web-development/wordpress-development">WordPress</Link>
            <Link href="/services/web-development/react-development">React.js</Link>
            <Link href="/services/web-development/nextjs-development">Next.js</Link>
          </div>

          <div className={styles.linksBlock}>
            <h4>Company</h4>
            <Link href="/about">About Us</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/services">All Services</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
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
