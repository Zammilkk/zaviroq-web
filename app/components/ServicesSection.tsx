"use client";

import React, { useState } from 'react';
import styles from './ServicesSection.module.css';
import { 
  Monitor, Search, PenTool, Megaphone, 
  Code, Users, MessageSquare, ChevronLeft, ChevronRight, ArrowRight 
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Website Design',
    desc: 'High-performing, custom websites built for your brand.',
    icon: Monitor,
  },
  {
    id: 2,
    title: 'SEO',
    desc: 'Get found. Get traffic. Get results.',
    icon: Search,
  },
  {
    id: 3,
    title: 'Graphic Design',
    desc: 'Creative designs that make an impact.',
    icon: PenTool,
  },
  {
    id: 4,
    title: 'Advertising',
    desc: 'Targeted ads that drive real growth.',
    icon: Megaphone,
  },
  {
    id: 5,
    title: 'Web Development',
    desc: 'Scalable solutions with modern technologies.',
    icon: Code,
  },
  {
    id: 6,
    title: 'Social Media Management',
    desc: 'Build your brand. Engage your audience.',
    icon: Users,
  },
  {
    id: 7,
    title: 'Consultation',
    desc: 'Get expert guidance for your digital growth.',
    icon: MessageSquare,
  }
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(3);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const getCardStyle = (index: number) => {
    // Handle wrapping around for infinite carousel effect
    let offset = index - activeIndex;
    
    // Optimization for wrap-around math to always find shortest distance
    if (offset > Math.floor(services.length / 2)) {
      offset -= services.length;
    } else if (offset < -Math.floor(services.length / 2)) {
      offset += services.length;
    }

    const absOffset = Math.abs(offset);
    
    // Calculate layout
    const translateX = offset * 220; // horizontal spacing
    const scale = 1 - absOffset * 0.15;
    const rotateY = offset === 0 ? 0 : offset < 0 ? 35 : -35;
    const zIndex = 10 - absOffset;
    
    // Fade out edges
    const opacity = absOffset > 2 ? 0 : 1 - absOffset * 0.15;
    const brightness = offset === 0 ? 1 : 0.4;

    return {
      transform: `translateX(calc(-50% + ${translateX}px)) scale(${scale}) perspective(1000px) rotateY(${rotateY}deg)`,
      zIndex,
      opacity,
      filter: `brightness(${brightness})`,
      visibility: absOffset > 3 ? 'hidden' : 'visible'
    } as React.CSSProperties;
  };

  return (
    <section className={styles.servicesSection}>
      <div className={styles.header}>
        <div className={styles.titleArea}>
          <div className={styles.eyebrowWrap}>
            <div className={styles.eyebrowLine}></div>
            <span className={styles.eyebrow}>OUR SERVICES</span>
            <div className={styles.eyebrowLine}></div>
          </div>
          <h2 className={styles.headline}>
            Everything You Need to <br/>
            <span className={styles.gradientText}>Grow Digitally</span>
          </h2>
        </div>
        
        <div className={styles.subtext}>
          Strategy. Design.<br/>
          Development. Results.
        </div>
      </div>

      <div className={styles.carouselContainer}>
        <button className={styles.navBtn} onClick={prevSlide} aria-label="Previous service">
          <ChevronLeft size={24} />
        </button>
        
        <div className={styles.cardsWrapper}>
          {services.map((svc, index) => {
            const Icon = svc.icon;
            const isActive = index === activeIndex;
            
            return (
              <div 
                key={svc.id}
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
