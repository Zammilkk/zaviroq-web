"use client";

import React, { useState } from 'react';
import styles from './ServicesSection.module.css';
import { 
  Monitor, Search, PenTool, Megaphone, 
  Code, Users, MessageSquare, ChevronLeft, ChevronRight, ArrowRight 
} from 'lucide-react';
import { ServicesContent, defaultHomepageData } from '@/lib/homepageDefaults';

const defaultServiceIcons = [Monitor, Search, PenTool, Megaphone, Code, Users, MessageSquare];

export default function ServicesSection({ content }: { content?: ServicesContent }) {
  const [activeIndex, setActiveIndex] = useState(2);

  const data = content || defaultHomepageData.services_section;
  const items = data.items && data.items.length > 0 ? data.items : defaultHomepageData.services_section.items;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const getCardStyle = (index: number) => {
    let offset = index - activeIndex;
    
    if (offset > Math.floor(items.length / 2)) {
      offset -= items.length;
    } else if (offset < -Math.floor(items.length / 2)) {
      offset += items.length;
    }

    const absOffset = Math.abs(offset);
    const translateX = offset * 220;
    const scale = 1 - absOffset * 0.15;
    const rotateY = offset === 0 ? 0 : offset < 0 ? 35 : -35;
    const zIndex = 10 - absOffset;
    const opacity = absOffset > 2 ? 0 : 1 - absOffset * 0.15;

    return {
      transform: `translateX(calc(-50% + ${translateX}px)) scale(${scale}) perspective(1000px) rotateY(${rotateY}deg)`,
      zIndex,
      opacity,
      visibility: absOffset > 3 ? 'hidden' : 'visible'
    } as React.CSSProperties;
  };

  return (
    <section className={styles.servicesSection}>
      <div className={styles.header}>
        <div className={styles.titleArea}>
          <div className={styles.eyebrowWrap}>
            <div className={styles.eyebrowLine}></div>
            <span className={styles.eyebrow}>{data.eyebrow}</span>
            <div className={styles.eyebrowLine}></div>
          </div>
          <h2 className={styles.headline}>
            {data.headline}
          </h2>
        </div>
        
        <div className={styles.subtext}>
          {data.description}
        </div>
      </div>

      <div className={styles.carouselContainer}>
        <button className={styles.navBtn} onClick={prevSlide} aria-label="Previous service">
          <ChevronLeft size={24} />
        </button>
        
        <div className={styles.cardsWrapper}>
          {items.map((svc, index) => {
            const Icon = defaultServiceIcons[index % defaultServiceIcons.length];
            const isActive = index === activeIndex;
            
            return (
              <div 
                key={svc.id || index}
                className={`${styles.card} ${isActive ? styles.activeCard : ''}`}
                style={getCardStyle(index)}
                onClick={() => setActiveIndex(index)}
              >
                <div className={styles.cardInner}>
                  <div className={styles.iconBox}>
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                  
                  <div className={styles.cardBtn}>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button className={styles.navBtn} onClick={nextSlide} aria-label="Next service">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
