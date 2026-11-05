import React from 'react';
import styles from './ThinkingSection.module.css';
import RevealOnScroll from './RevealOnScroll';
import { ArrowRight, Lightbulb, Cpu } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function ThinkingSection() {
  return (
    <section className={styles.section} id="vision">
      <div className={styles.container}>
        {/* Ambient wave layers matching visual artwork */}
        <div className={styles.bgWaveTop}></div>
        <div className={styles.bgWaveBottom}></div>
        <div className={styles.bgGlowOrb}></div>

        <div className={styles.cardWrapper}>
          {/* TOP GRID: LEFT CONTENT + RIGHT 3D VISUAL */}
          <div className={styles.mainGrid}>
            
            {/* LEFT CONTENT */}
            <div className={styles.leftCol}>
              <RevealOnScroll>
                <div className={styles.eyebrow}>
                  <span className={styles.eyebrowDash}></span>
                  <span className={styles.eyebrowText}>THE THINKING BEHIND ZAVIROQ</span>
                </div>

                <h2 className={styles.title}>
                  Different Perspectives.<br />
                  One Vision.<br />
                  <span className={styles.gradientHeading}>Building What’s Next.</span>
                </h2>

                <p className={styles.description}>
                  Zaviroq brings strategy, creativity and technology together to help ambitious brands build a stronger digital presence and achieve meaningful growth.
                </p>

                <div className={styles.ctaRow}>
                  <Link href="/services" className={styles.btnVision}>
                    <span>Explore Our Vision</span>
                    <ArrowRight size={17} className={styles.btnArrow} />
                  </Link>
                  <div className={styles.ctaLine}></div>
                </div>
              </RevealOnScroll>
            </div>

            {/* RIGHT 3D VISUAL */}
            <div className={styles.rightCol}>
              <RevealOnScroll delay={150}>
                <div className={styles.visualContainer}>
                  <div className={styles.visualGlow}></div>
                  <img
                    src="/assets/images/thinking-3d-visual.webp"
                    alt="The Thinking Behind Zaviroq - 3D Vision"
                    className={styles.visualImg}
                  />
                </div>
              </RevealOnScroll>
            </div>

          </div>

          {/* BOTTOM FEATURE BAR (3 PILLARS) */}
          <RevealOnScroll delay={250}>
            <div className={styles.pillarsBar}>
              
              {/* PILLAR 1: Strategy-led Thinking */}
              <div className={styles.pillarItem}>
                <div className={styles.pillarIconBox}>
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles.pillarSvg}
                  >
                    <path d="M19 21H5a2 2 0 0 1-2-2h18a2 2 0 0 1-2 2z" />
                    <path d="M18 19c-1-3.2-1-5.5-3-7.5-1.5-1.5-2.5-1.5-3-3.5 0-1 .5-2 1.5-3.5.5-.75.5-1.5 0-2-.5-.5-1.5-.5-2.5.5L8 6.5C6.5 8 5 9 5 12c0 2 1 4 2 7" />
                    <circle cx="9" cy="9" r="0.8" fill="currentColor" />
                  </svg>
                </div>
                <span className={styles.pillarLabel}>Strategy-led Thinking</span>
              </div>

              <div className={styles.pillarDivider}></div>

              {/* PILLAR 2: Creative Collaboration */}
              <div className={styles.pillarItem}>
                <div className={styles.pillarIconBox}>
                  <Lightbulb size={26} strokeWidth={1.8} className={styles.pillarSvg} />
                </div>
                <span className={styles.pillarLabel}>Creative Collaboration</span>
              </div>

              <div className={styles.pillarDivider}></div>

              {/* PILLAR 3: Technology with Purpose */}
              <div className={styles.pillarItem}>
                <div className={styles.pillarIconBox}>
                  <Cpu size={26} strokeWidth={1.8} className={styles.pillarSvg} />
                </div>
                <span className={styles.pillarLabel}>Technology with Purpose</span>
              </div>

            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}
