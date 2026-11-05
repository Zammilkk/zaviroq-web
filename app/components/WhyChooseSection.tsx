"use client";

import React, { useState, useRef } from 'react';
import styles from './WhyChooseSection.module.css';
import Image from 'next/image';
import { Home, Users, Headphones, BarChart2, Volume2, VolumeX } from 'lucide-react';
import { WhyChooseContent, defaultHomepageData } from '@/lib/homepageDefaults';

const defaultIcons = [Home, Users, Headphones, BarChart2];

export default function WhyChooseSection({ content }: { content?: WhyChooseContent }) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const data = content || defaultHomepageData.why_choose;
  const cards = data.cards && data.cards.length > 0 ? data.cards : defaultHomepageData.why_choose.cards;

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  return (
    <section className={styles.whyChooseSection}>
      {/* Background Layer */}
      <div className={styles.bgGlow}></div>

      <div className={styles.container}>
        
        {/* Top Split Area */}
        <div className={styles.topArea}>
          <div className={styles.textContent}>
            <div className={styles.eyebrowWrap}>
              <div className={styles.eyebrowLine}></div>
              <span className={styles.eyebrow}>{data.eyebrow}</span>
            </div>
            
            <h2 className={styles.headline}>
              {data.headline} <br/>
              <span className={styles.gradientText}>{data.accent}</span>
            </h2>
            
            <p className={styles.description}>
              {data.description}
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
                src={data.videoUrl || "/assets/images/zaviroq-videos.mp4"} 
                poster={data.posterUrl || "/assets/images/why-img.avif"}
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
            const Icon = defaultIcons[idx % defaultIcons.length];
            return (
              <div key={idx} className={styles.glassCard}>
                <div className={styles.cardIconBox}>
                  <Icon size={24} />
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.desc}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.footerText}>{card.footerText}</span>
                  <span className={styles.footerNum}>{card.num || `0${idx + 1}`}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
