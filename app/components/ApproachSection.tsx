"use client";

import React from 'react';
import styles from './ApproachSection.module.css';
import Image from 'next/image';
import { ArrowRight, Search, Target, PenTool, BarChart2 } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function ApproachSection() {
  return (
    <section className={styles.approachSection}>
      <div className={styles.container}>
        
        {/* Top Content Row */}
        <div className={styles.mainContent}>
          <div className={styles.leftCol}>
            <div className={styles.eyebrow}>
              <span>OUR APPROACH</span>
              <div className={styles.line}></div>
            </div>
            
            <h2 className={styles.headline}>
              Strategy First.<br />
              Digital Built to <span className={styles.gradientText}>Perform.</span>
            </h2>
            
            <p className={styles.description}>
              We combine strategy, design, technology and performance marketing to create digital experiences built around real business objectives.
            </p>
            
            <div className={styles.buttons}>
              <Link href="/contact" className={styles.btnPrimary}>
                Let's Build Together <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          
          <div className={styles.rightCol}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/OUR-APPROACH.avif" 
                alt="Digital Growth Partner" 
                fill 
                className={styles.laptopImage}
                unoptimized
              />
              <div className={styles.glowEffect}></div>
            </div>
          </div>
        </div>

        {/* Bottom Process Row */}
        <div className={styles.processRow}>
          {/* Step 1 */}
          <div className={styles.stepItem}>
            <div className={styles.stepHeader}>
              <span className={styles.stepNum}>01</span>
              <div className={styles.stepTitleArea}>
                <span className={styles.stepSubNum}>01 <span className={styles.dash}>_</span></span>
                <h3 className={styles.stepTitle}>UNDERSTAND</h3>
              </div>
            </div>
            <div className={styles.stepBody}>
              <div className={styles.stepIconBox}>
                <Search size={22} className={styles.stepIcon} />
              </div>
              <p className={styles.stepText}>
                We learn about your business, audience, market and goals to find the right opportunities.
              </p>
            </div>
            <div className={styles.connector}></div>
          </div>
          
          {/* Step 2 */}
          <div className={styles.stepItem}>
            <div className={styles.stepHeader}>
              <span className={styles.stepNum}>02</span>
              <div className={styles.stepTitleArea}>
                <span className={styles.stepSubNum}>02 <span className={styles.dash}>_</span></span>
                <h3 className={styles.stepTitle}>STRATEGIZE</h3>
              </div>
            </div>
            <div className={styles.stepBody}>
              <div className={styles.stepIconBox}>
                <Target size={22} className={styles.stepIcon} />
              </div>
              <p className={styles.stepText}>
                We create a clear digital strategy with the right channels, messaging and growth plan.
              </p>
            </div>
            <div className={styles.connector}></div>
          </div>
          
          {/* Step 3 */}
          <div className={styles.stepItem}>
            <div className={styles.stepHeader}>
              <span className={styles.stepNum}>03</span>
              <div className={styles.stepTitleArea}>
                <span className={styles.stepSubNum}>03 <span className={styles.dash}>_</span></span>
                <h3 className={styles.stepTitle}>CREATE</h3>
              </div>
            </div>
            <div className={styles.stepBody}>
              <div className={styles.stepIconBox}>
                <PenTool size={22} className={styles.stepIcon} />
              </div>
              <p className={styles.stepText}>
                We design and develop high-performing digital assets with engaging content and modern tech.
              </p>
            </div>
            <div className={styles.connector}></div>
          </div>
          
          {/* Step 4 */}
          <div className={styles.stepItem}>
            <div className={styles.stepHeader}>
              <span className={styles.stepNum}>04</span>
              <div className={styles.stepTitleArea}>
                <span className={styles.stepSubNum}>04 <span className={styles.dash}>_</span></span>
                <h3 className={styles.stepTitle}>GROW</h3>
              </div>
            </div>
            <div className={styles.stepBody}>
              <div className={styles.stepIconBox}>
                <BarChart2 size={22} className={styles.stepIcon} />
              </div>
              <p className={styles.stepText}>
                We execute, optimize and scale through SEO, paid campaigns and continuous improvement.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
