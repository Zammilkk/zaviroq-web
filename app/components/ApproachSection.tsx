"use client";

import React from 'react';
import styles from './ApproachSection.module.css';
import Image from 'next/image';
import { ArrowRight, Play, PenTool, Monitor, Ban, Code } from 'lucide-react';

export default function ApproachSection() {
  return (
    <section className={styles.approachSection}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.leftCol}>
            <div className={styles.eyebrow}>
              <span>OUR APPROACH</span>
              <div className={styles.line}></div>
            </div>
            
            <h2 className={styles.headline}>
              Built for Results,<br />
              Not Just <span className={styles.gradientText}>Design.</span>
            </h2>
            
            <p className={styles.description}>
              Every solution we create is fully customized — no reused
              designs, no shortcuts. We focus on performance,
              scalability, and long-term growth by building scalable
              digital solutions using modern technologies and
              data-driven strategies.
            </p>
            
            <div className={styles.buttons}>
              <a href="#" className={styles.btnPrimary}>
                Let's Build Together <ArrowRight size={18} />
              </a>
              <a href="#" className={styles.btnPlay}>
                <div className={styles.playIconWrapper}>
                  <Play size={16} fill="white" strokeWidth={0} />
                </div>
                <span className={styles.playText}>See<br/>Our Work</span>
              </a>
            </div>
          </div>
          
          <div className={styles.rightCol}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/assets/images/zaviroq-founder.png" 
                alt="Digital Growth Partner" 
                fill 
                className={styles.laptopImage}
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className={styles.featuresRow}>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <PenTool size={20} />
            </div>
            <div className={styles.featureContent}>
              <h3>100% Custom Design</h3>
              <p>No templates. No copied designs.<br/>Every website is uniquely crafted<br/>for your brand.</p>
            </div>
          </div>
          
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <Monitor size={20} />
            </div>
            <div className={styles.featureContent}>
              <h3>Fully Responsive</h3>
              <p>Looks perfect on all devices —<br/>desktop, tablet, and mobile.</p>
            </div>
          </div>
          
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <Ban size={20} />
            </div>
            <div className={styles.featureContent}>
              <h3>No AI Generated Websites</h3>
              <p>Real human creativity,<br/>strategic thinking, and<br/>expert execution.</p>
            </div>
          </div>
          
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <Code size={20} />
            </div>
            <div className={styles.featureContent}>
              <h3>Expert UI/UX</h3>
              <p>Modern, clean, and<br/>user-focused designs<br/>that convert.</p>
            </div>
            <div className={styles.moreBadge}>
              MORE THAN A WEBSITE<br/>A STRONGER TOMORROW
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
