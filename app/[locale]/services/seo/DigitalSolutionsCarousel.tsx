"use client";

import { useRef } from 'react';
import styles from './page.module.css';

interface Solution {
  title: string;
  fallback: string;
}

export default function DigitalSolutionsCarousel({ solutions }: { solutions: Solution[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (trackRef.current) {
      // Scroll by roughly the width of one card + gap
      trackRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.carouselWrapper}>
      <button className={styles.carouselBtnLeft} aria-label="Previous" onClick={scrollLeft}>‹</button>
      
      <div className={styles.carouselTrackContainer} ref={trackRef}>
        <div className={styles.carouselTrack}>
          {solutions.map((sol, i) => (
            <div key={i} className={`${styles.solutionCard} ${i === 2 ? styles.activeCard : ''}`}>
              <div className={styles.solutionImgWrapper}>
                <div className={styles.solutionFallback}>{sol.fallback}</div>
              </div>
              <div className={styles.solutionBottom}>
                <h3 className={styles.solutionCardTitle}>{sol.title}</h3>
                <div className={styles.solutionArrowBtn}>→</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className={styles.carouselBtnRight} aria-label="Next" onClick={scrollRight}>›</button>
    </div>
  );
}
