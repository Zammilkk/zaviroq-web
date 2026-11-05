"use client";

import React, { useState, useEffect } from "react";
import styles from "./ClientCarousel.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ClientsContent, defaultHomepageData } from "@/lib/homepageDefaults";

export default function ClientCarousel({ content }: { content?: ClientsContent }) {
  const [activeIndex, setActiveIndex] = useState(4);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const data = content || defaultHomepageData.clients_section;
  const clients = data.items && data.items.length > 0 ? data.items : defaultHomepageData.clients_section.items;

  useEffect(() => {
    if (activeIndex >= clients.length) {
      setActiveIndex(Math.max(0, Math.floor(clients.length / 2)));
    }
  }, [clients.length, activeIndex]);

  const handleNext = () => {
    if (clients.length === 0) return;
    setActiveIndex((prev) => (prev + 1) % clients.length);
  };

  const handlePrev = () => {
    if (clients.length === 0) return;
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
          <span className={styles.dot}></span> {data.eyebrow || "TRUSTED BY AMBITIOUS BRANDS"}
        </div>
        <h2 className={styles.title}>
          {data.title || "Ambitious Brands in"} <span>{data.titleAccent || "Mangalore & Beyond"}</span>
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
                key={client.id || index}
                className={`${styles.card} ${
                  index === activeIndex ? styles.activeCard : ""
                }`}
                style={getPositionStyles(index)}
                onClick={() => setActiveIndex(index)}
              >
                <div className={styles.cardInner}>
                  <img src={client.logo} alt={client.name ? `${client.name} collaborating with Zaviroq` : `Partner brand ${client.id || index + 1} collaborating with Zaviroq`} />
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
          <button className={styles.navBtn} onClick={handlePrev} aria-label="Previous partner">
            <ChevronLeft size={20} />
          </button>
          <button className={styles.navBtn} onClick={handleNext} aria-label="Next partner">
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
