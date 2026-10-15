"use client";

import React, { useRef } from "react";
import styles from "./PlatformCarousel.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PlatformCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const platforms = [
    { name: "Google Ads", icon: "https://cdn.simpleicons.org/googleads/4285F4" },
    { name: "Meta Ads", icon: "https://cdn.simpleicons.org/meta/0668E1" },
    { name: "LinkedIn Ads", icon: "https://cdn.simpleicons.org/linkedin/0A66C2" },
    { name: "Microsoft Advertising", icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Google Analytics", icon: "https://cdn.simpleicons.org/googleanalytics/F9AB00" },
    { name: "Search Console", icon: "https://cdn.simpleicons.org/googlesearchconsole/4285F4" },
    { name: "Tag Manager", icon: "https://cdn.simpleicons.org/googletagmanager/246FDB" },
  ];

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
            <span className={styles.eyebrow}>PERFORMANCE ECOSYSTEM</span>
            <div className={styles.line}></div>
          </div>
          <h2 className={styles.title}>
            Platforms <span>We Work Across</span>
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
