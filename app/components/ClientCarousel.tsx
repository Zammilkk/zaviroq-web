"use client";

import React, { useState, useEffect } from "react";
import styles from "./ClientCarousel.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ClientCarousel() {
  const [activeIndex, setActiveIndex] = useState(4);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const clients = [
    { id: 1, logo: "/partners/1.webp" },
    { id: 2, logo: "/partners/2.webp" },
    { id: 3, logo: "/partners/3.webp" },
    { id: 4, logo: "/partners/4.webp" },
    { id: 5, logo: "/partners/5.webp" },
    { id: 6, logo: "/partners/6.webp" },
    { id: 7, logo: "/partners/7.webp" },
    { id: 8, logo: "/partners/8.webp" },
    { id: 9, logo: "/partners/9.webp" },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % clients.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  const getPositionStyles = (index: number) => {
    if (!isMounted) return { display: "none" };

    const total = clients.length;
    let diff = index - activeIndex;

    // Handle wrapping
    if (diff > Math.floor(total / 2)) {
      diff -= total;
    } else if (diff < -Math.floor(total / 2)) {
      diff += total;
    }

    const absDiff = Math.abs(diff);

    // If it's too far away, hide it smoothly
    if (absDiff > 3) {
      return {
        opacity: 0,
        transform: `translateX(${diff > 0 ? 300 : -300}px) scale(0.6)`,
        zIndex: 0,
        pointerEvents: "none" as const,
      };
    }

    // Calculation for curved positions
    const translateX = diff * 220; // Horizontal spread (increased for wider row)
    const translateZ = absDiff * -100; // Push back
    const translateY = absDiff * -15; // Curve up slightly like an arc
    const scale = 1 - absDiff * 0.15; // Scale down

    return {
      transform: `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) scale(${scale})`,
      zIndex: 10 - absDiff,
      opacity: 1 - absDiff * 0.15,
    };
  };

  return (
    <div className={styles.carouselSection}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>
          <span className={styles.dot}></span> TRUSTED BY AMBITIOUS BRANDS
        </div>
        <h2 className={styles.title}>
          Brands That <span>Grow With Us</span>
        </h2>
      </div>

      <div className={styles.carouselContainer}>
        {/* Background dotted ellipse and lines */}
        <div className={styles.bgEllipse}></div>
        <div className={styles.bgGlow}></div>

        {/* Carousel Tracks */}
        <div className={styles.scene}>
          <div className={styles.track}>
            {clients.map((client, index) => (
              <div
                key={client.id}
                className={`${styles.card} ${
                  index === activeIndex ? styles.activeCard : ""
                }`}
                style={getPositionStyles(index)}
                onClick={() => setActiveIndex(index)}
              >
                <div className={styles.cardInner}>
                  <img src={client.logo} alt={`Client ${client.id}`} />
                </div>
                {/* Reflection effect */}
                <div className={styles.reflection}>
                  <img src={client.logo} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className={styles.controls}>
          <button className={styles.navBtn} onClick={handlePrev}>
            <ChevronLeft size={20} />
          </button>
          <button className={styles.navBtn} onClick={handleNext}>
            <ChevronRight size={20} />
          </button>
        </div>
        
        {/* Pagination Dots (Optional, design shows a line) */}
        <div className={styles.pagination}>
          {clients.map((_, i) => (
            <div
              key={i}
              className={`${styles.dotIndicator} ${
                i === activeIndex ? styles.activeIndicator : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
