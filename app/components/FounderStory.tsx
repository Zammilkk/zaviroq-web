import React from 'react';
import styles from './FounderStory.module.css';
import RevealOnScroll from './RevealOnScroll';
import { ArrowRight, Play, Target, Eye, Globe } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function FounderStory() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* LEFT COLUMN */}
        <div className={styles.leftCol}>
          <RevealOnScroll>
            <div className={styles.eyebrow}>
              <span className={styles.line}></span> FOUNDER STORY
            </div>
            
            <h2 className={styles.title}>
              Hi, I&apos;m<br/>
              <span className={styles.gradientText}>Zammil</span>
            </h2>
            <h3 className={styles.subtitle}>Founder of ZAVIROQ</h3>
            
            <div className={styles.content}>
              <p>I&apos;m Zammil, a digital marketer and web solutions expert with 3+ years of experience, passionate about helping businesses grow through the power of digital.</p>
              <p>I started ZAVIROQ with a simple goal — to make premium digital solutions accessible for businesses of all sizes, especially in the UAE, Saudi Arabia and India. I believe in building long-term partnerships, not just projects.</p>
              <p>At ZAVIROQ, we combine strategy, creativity and technology to turn ideas into real growth.</p>
            </div>

            <div className={styles.signatureBlock}>
              <div className={styles.signatureText}>Zammil</div>
              <div className={styles.signatureRole}>
                <strong>Zammil</strong><br/>
                Founder & Digital Strategist
              </div>
            </div>

            <div className={styles.ctas}>
              <Link href="/contact" className={styles.btnPrimary}>
                Let&apos;s Build Together <ArrowRight size={16} />
              </Link>
            </div>
          </RevealOnScroll>
        </div>

        {/* CENTER COLUMN */}
        <div className={styles.centerCol}>
          <RevealOnScroll delay={100}>
            <div className={styles.imageWrapper}>
              <img src="/assets/images/zammil-zaviroq.avif" alt="Zammil at desk" className={styles.founderImg} />
              
              <div className={styles.handwrittenOverlay}>
                Building<br/>Digital<br/>Opportunities<br/>Globally
              </div>

              <div className={styles.glassBadgeLeft}>
                <strong>3+</strong>
                <span>Years of<br/>Experience</span>
              </div>

              <div className={styles.glassBadgeRight}>
                <span className={styles.purpleDot}></span> Founder, ZAVIROQ
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* RIGHT COLUMN */}
        <div className={styles.rightCol}>
          <RevealOnScroll delay={200}>
            
            <div className={styles.rightGrid}>
              
              <div className={styles.cardsColumn}>
                <div className={styles.quoteHeader}>
                  <span className={styles.quoteMark}>&ldquo;</span>
                  <h4>
                    Building<br/>Digital Success<br/>
                    <span className={styles.underlined}>Together</span>
                  </h4>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.iconBox}><Target size={24} /></div>
                  <div>
                    <h5>Our Mission</h5>
                    <p>To deliver high-quality, result-driven digital solutions that help businesses grow globally.</p>
                  </div>
                </div>
                
                <div className={styles.infoCard}>
                  <div className={styles.iconBox}><Eye size={24} /></div>
                  <div>
                    <h5>Our Vision</h5>
                    <p>To be a trusted global digital agency known for creativity, performance and long-term client success.</p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.iconBox}><Globe size={24} /></div>
                  <div>
                    <h5>From Mangalore<br/>to the Global Market</h5>
                    <p>Proudly based in India, working with brands across the UAE, Saudi Arabia and beyond.</p>
                  </div>
                </div>
              </div>

              <div className={styles.blueCardColumn}>
                <div className={styles.verticalDecorRight}>
                  MORE<br/>THAN A<br/>DIGITAL<br/>AGENCY
                </div>
                <div className={styles.imageCard}>
                  <img src="/assets/images/card1.png" alt="Mountains" />
                  <div className={styles.imageCardContent}>
                    <div className={styles.cardArrow}><ArrowRight size={16} /></div>
                    <h3>Turning<br/>Ideas Into<br/>Impact.</h3>
                  </div>
                </div>
              </div>

            </div>

            <div className={styles.statsRow}>
              <div className={styles.stat}>
                <strong>50+</strong>
                <span>Projects Delivered</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.stat}>
                <strong>30+</strong>
                <span>Happy Clients</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.stat}>
                <strong>100%</strong>
                <span>Client-Focused</span>
              </div>
              
              <div className={styles.differentHandwritten}>
                Different<br/>By Design
              </div>
            </div>

          </RevealOnScroll>
        </div>

      </div>
    </section>
  );
}
