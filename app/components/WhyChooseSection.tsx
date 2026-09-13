"use client";

import React, { useState, useRef } from 'react';
import styles from './WhyChooseSection.module.css';
import Image from 'next/image';
import { Home, Users, Headphones, BarChart2, Plus, Volume2, VolumeX } from 'lucide-react';

const cards = [
  {
    icon: Home,
    title: "Remote-First Advantage",
    desc: "Our fully remote setup helps us stay efficient and cost-effective — so you get premium solutions at affordable prices.",
    footerText: "MORE VALUE, LESS OVERHEAD",
    num: "01"
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Work with a skilled team of designers, developers, and marketers who are experts in their fields and passionate about your success.",
    footerText: "SPECIALISTS YOU CAN TRUST",
    num: "02"
  },
  {
    icon: Headphones,
    title: "Always Here for You",
    desc: "Time zone is not a barrier. Our team is available whenever you need support, updates, or guidance.",
    footerText: "REAL SUPPORT. ANYTIME.",
    num: "03"
  },
  {
    icon: BarChart2,
    title: "Focused on Your Growth",
    desc: "We don't just deliver services — we become your growth partner, aligned with your long-term goals and success.",
    footerText: "YOUR GROWTH OUR PRIORITY",
    num: "04"
  }
];

export default function WhyChooseSection() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  return (
    <section className={styles.whyChooseSection}>
      <div className={styles.container}>
        
        {/* Top Split Area */}
        <div className={styles.topArea}>
          <div className={styles.textContent}>
            <div className={styles.eyebrowWrap}>
              <div className={styles.eyebrowLine}></div>
              <span className={styles.eyebrow}>WHY</span>
            </div>
            
            <h2 className={styles.headline}>
              Why Choose <br/>
              <span className={styles.gradientText}>ZAVIROQ?</span>
            </h2>
            
            <p className={styles.description}>
              We combine strategy, creativity, and technology to help businesses grow — no matter where you are. With a fully remote team, we deliver high-quality solutions at a more affordable cost, without compromising on excellence.
            </p>
            
            <div className={styles.signature}>
              Different by Design
            </div>
          </div>
          <div 
            className={styles.imageContent}
            onMouseEnter={() => {
              if (videoRef.current) videoRef.current.play().catch(() => {});
            }}
            onMouseLeave={() => {
              if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
              }
            }}
            style={{ cursor: 'pointer', position: 'relative' }}
          >
            <div className={styles.imageWrapper}>
              <video 
                ref={videoRef}
                src="/assets/videos/zaviroq-video.mp4" 
                poster="/assets/images/why-img.avif"
                className={styles.mockupImg}
                loop
                playsInline
                muted={isMuted}
              />
            </div>
            
            <button 
              onClick={toggleMute}
              className={styles.muteBtn}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          </div>
        </div>

        {/* 4 Cards Row */}
        <div className={styles.cardsGrid}>
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={idx} className={styles.glassCard}>
                <div className={styles.cardIconBox}>
                  <Icon size={24} />
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.desc}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.footerText}>{card.footerText}</span>
                  <span className={styles.footerNum}>{card.num}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className={styles.bottomBanner}>
          <div className={styles.bannerLeft}>
            <div className={styles.avatars}>
              {/* Using generic placeholders since we don't have the specific faces */}
              <div className={styles.avatar} style={{ backgroundImage: 'url(https://i.pravatar.cc/100?img=11)' }}></div>
              <div className={styles.avatar} style={{ backgroundImage: 'url(https://i.pravatar.cc/100?img=12)' }}></div>
              <div className={styles.avatar} style={{ backgroundImage: 'url(https://i.pravatar.cc/100?img=13)' }}></div>
              <button className={styles.addBtn}><Plus size={16} /></button>
            </div>
            <div className={styles.bannerTextGroup}>
              <span className={styles.bannerSubtitle}>A Global Team</span>
              <span className={styles.bannerSubtitle2}>Working for You</span>
            </div>
          </div>

          <div className={styles.bannerCenter}>
            <span className={styles.centerTextMain}>DIFFERENT LOCATIONS. ONE GOAL.</span>
            <span className={styles.centerTextGradient}>YOUR SUCCESS.</span>
          </div>

          <div className={styles.bannerRight}>
            <div className={styles.bannerLine}></div>
            <div className={styles.bannerRightText}>
              <span>REMOTE TEAM</span>
              <span>REAL IMPACT</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
