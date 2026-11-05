"use client";

import React from 'react';
import styles from './ApproachSection.module.css';
import Image from 'next/image';
import { ArrowRight, Search, Target, PenTool, BarChart2 } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { ApproachContent, defaultHomepageData } from '@/lib/homepageDefaults';

const stepIcons = [Search, Target, PenTool, BarChart2];

export default function ApproachSection({ content }: { content?: ApproachContent }) {
  const data = content || defaultHomepageData.approach;
  const steps = data.steps && data.steps.length > 0 ? data.steps : defaultHomepageData.approach.steps;

  return (
    <section className={styles.approachSection}>
      <div className={styles.container}>
        
        {/* Top Content Row */}
        <div className={styles.mainContent}>
          <div className={styles.leftCol}>
            <div className={styles.eyebrow}>
              <span>{data.eyebrow}</span>
              <div className={styles.line}></div>
            </div>
            
            <h2 className={styles.headline}>
              {data.headline}<br />
              <span className={styles.gradientText}>{data.highlightText}</span>
            </h2>
            
            <p className={styles.description}>
              {data.description}
            </p>
            
            <div className={styles.buttons}>
              <Link href={data.ctaLink || "/contact"} className={styles.btnPrimary}>
                {data.ctaText || "Let's Build Together"} <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          
          <div className={styles.rightCol}>
            <div className={styles.imageWrapper}>
              <Image 
                src={data.image || "/OUR-APPROACH.avif"} 
                alt="Zaviroq strategic digital marketing and web development process in Mangalore" 
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
          {steps.map((step, idx) => {
            const IconComponent = stepIcons[idx % stepIcons.length];
            return (
              <div key={idx} className={styles.stepItem}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepNum}>{step.num || `0${idx + 1}`}</span>
                  <div className={styles.stepTitleArea}>
                    <span className={styles.stepSubNum}>{step.num || `0${idx + 1}`} <span className={styles.dash}>_</span></span>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                  </div>
                </div>
                <div className={styles.stepBody}>
                  <div className={styles.stepIconBox}>
                    <IconComponent size={22} className={styles.stepIcon} />
                  </div>
                  <p className={styles.stepText}>
                    {step.desc}
                  </p>
                </div>
                {idx < steps.length - 1 && <div className={styles.connector}></div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
