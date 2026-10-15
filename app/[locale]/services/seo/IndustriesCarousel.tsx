"use client";

import { useRef } from 'react';
import styles from './page.module.css';

interface Industry {
  title: string;
  icon: string;
  img: string;
}

export default function IndustriesCarousel({ industries }: { industries: Industry[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -260, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 260, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.carouselWrapper}>
      <button className={styles.carouselBtnLeft} aria-label="Previous" onClick={scrollLeft}>‹</button>
      
      <div className={styles.carouselTrackContainer} ref={trackRef}>
        <div className={styles.carouselTrack}>
          {industries.map((ind, i) => (
            <div key={i} className={styles.industryCard3D}>
              <img src={ind.img} alt={ind.title} className={styles.industryCardImg} />
              <div className={styles.industryCardGlass}>
                <div className={styles.industryCardIconBox}>{ind.icon}</div>
                <h3 className={styles.industryCardTitle}>{ind.title}</h3>
                <div className={styles.industryCardArrow}>→</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className={styles.carouselBtnRight} aria-label="Next" onClick={scrollRight}>›</button>
    </div>
  );
}
