"use client";

import React, { useRef } from "react";
import styles from "./PlatformCarousel.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PlatformsContent, defaultHomepageData } from "@/lib/homepageDefaults";

export default function PlatformCarousel({ content }: { content?: PlatformsContent }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const data = content || defaultHomepageData.platforms_section;
  const platforms = data.items && data.items.length > 0 ? data.items : defaultHomepageData.platforms_section.items;

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className={styles.platformSection}>
      {/* Background elements */}
      <div className={styles.bgLine1}></div>
      <div className={styles.bgLine2}></div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrowWrapper}>
            <div className={styles.line}></div>
            <span className={styles.eyebrow}>{data.eyebrow || "PERFORMANCE ECOSYSTEM"}</span>
            <div className={styles.line}></div>
          </div>
          <h2 className={styles.title}>
            {data.title || "Platforms"} <span>{data.titleAccent || "We Work Across"}</span>
          </h2>
        </div>

        <div className={styles.carouselWrapper}>
          <button className={styles.navBtn} onClick={scrollLeft} aria-label="Previous">
            <ChevronLeft size={20} />
          </button>

          <div className={styles.carouselTrack} ref={scrollRef}>
            {platforms.map((platform, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <img src={platform.icon} alt={platform.name} />
                </div>
                <span className={styles.cardName}>{platform.name}</span>
              </div>
            ))}
          </div>

          <button className={styles.navBtn} onClick={scrollRight} aria-label="Next">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
