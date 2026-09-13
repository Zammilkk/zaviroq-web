"use client";

import { useState, useEffect } from "react";
import styles from './StartupOffer.module.css';
import Image from 'next/image';
import { Globe, Cloud, Mail, PenTool, Rocket, ShieldCheck, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function StartupOffer({ locale }: { locale: string }) {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 55, seconds: 2 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.startupSection}>
      <div className={styles.container}>
        
        {/* Top Area */}
        <div className={styles.topArea}>
          <div className={styles.textContent}>
            <div className={styles.eyebrowWrap}>
               <span className={styles.eyebrow}>START SMART</span>
               <div className={styles.eyebrowLine}></div>
            </div>
            
            <h2 className={styles.headline}>
              Complete <br/>
              <span className={styles.gradientText}>Business</span> <br/>
              Ignition Setup
            </h2>
            
            <p className={styles.description}>
              We are offering the lowest priced package ever to rapidly deploy your brand online. Get an entire enterprise-grade digital infrastructure fully engineered and ready to scale.
            </p>

            <div className={styles.grid}>
               <div className={styles.pill}>
                  <div className={styles.pillIcon}><Globe size={18} /></div>
                  <div className={styles.pillText}>
                    <span className={styles.pillTitle}>80% Off</span>
                    <span className={styles.pillSub}>.com Domain Setup</span>
                  </div>
               </div>
               <div className={styles.pill}>
                  <div className={styles.pillIcon}><Cloud size={18} /></div>
                  <div className={styles.pillText}>
                    <span className={styles.pillTitle}>1 Month</span>
                    <span className={styles.pillSub}>Premium Hosting Free</span>
                  </div>
               </div>
               <div className={styles.pill}>
                  <div className={styles.pillIcon}><Mail size={18} /></div>
                  <div className={styles.pillText}>
                    <span className={styles.pillTitle}>5 Free Zoho</span>
                    <span className={styles.pillSub}>Partnership Business Emails</span>
                  </div>
               </div>
               <div className={styles.pill}>
                  <div className={styles.pillIcon}><PenTool size={18} /></div>
                  <div className={styles.pillText}>
                    <span className={styles.pillTitle}>High-Speed</span>
                    <span className={styles.pillSub}>Website Design</span>
                  </div>
               </div>
               <div className={styles.pill}>
                  <div className={styles.pillIcon}><Rocket size={18} /></div>
                  <div className={styles.pillText}>
                    <span className={styles.pillTitle}>Complete Foundational</span>
                    <span className={styles.pillSub}>SEO Pipeline</span>
                  </div>
               </div>
               <div className={styles.pill}>
                  <div className={styles.pillIcon}><ShieldCheck size={18} /></div>
                  <div className={styles.pillText}>
                    <span className={styles.pillTitle}>Company Profile &</span>
                    <span className={styles.pillSub}>Branding System</span>
                  </div>
               </div>
            </div>
          </div>
          
          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
               <Image 
                 src="/assets/images/offer-img.avif" 
                 alt="Business Ignition Box" 
                 fill 
                 className={styles.mockupImg} 
                 unoptimized 
               />
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className={styles.bottomBanner}>
          <div className={styles.timerGroup}>
            <div className={styles.timerLabelWrap}>
              <Clock size={18} color="#8B5CF6" />
              <span>OFFER EXPIRES IN</span>
            </div>
            
            <div className={styles.timerBlocks}>
              <div className={styles.timerBlock}>
                <span className={styles.timerNum}>{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className={styles.timerUnit}>HRS</span>
              </div>
              <span className={styles.timerSep}>:</span>
              <div className={styles.timerBlock}>
                <span className={styles.timerNum}>{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className={styles.timerUnit}>MIN</span>
              </div>
              <span className={styles.timerSep}>:</span>
              <div className={styles.timerBlock}>
                <span className={styles.timerNum}>{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className={styles.timerUnit}>SEC</span>
              </div>
            </div>
          </div>

          <div className={styles.actionGroup}>
            <Link href={`/${locale}/contact`} className={styles.claimBtn}>
              Claim Startup Package Now <ArrowRight size={18} />
            </Link>
            <div className={styles.slotsText}>
              <CheckCircle2 size={14} />
              Limited Slots Available
            </div>
          </div>
        </div>

        {/* Footer Row */}
        <div className={styles.footerRow}>
          <div className={styles.footerLeft}>
            <span>BUILD TODAY.</span>
            <span>A BIGGER TOMORROW.</span>
          </div>
          <div className={styles.footerCenter}>
            ZAVIROQ
          </div>
          <div className={styles.footerRight} style={{ textAlign: 'right' }}>
            <span>TRUSTED BY VISIONARIES</span>
            <span>BUILT FOR GROWTH</span>
          </div>
        </div>

      </div>
    </section>
  );
}
