'use client';

import React, { useRef } from 'react';
import styles from './page.module.css';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

export interface DeliverableCardData {
  title: string;
  phase: string;
  desc: string;
  specs: string[];
}

export function SubServiceDeliverablesCarousel({
  cards
}: {
  cards: DeliverableCardData[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const scrollAmount = 380;
      trackRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={styles.deliverablesCarouselWrapper}>
      <button
        type="button"
        className={styles.delivNavBtnLeft}
        onClick={() => scroll('left')}
        aria-label="Previous Deliverable"
      >
        <ChevronLeft size={20} />
      </button>

      <div className={styles.deliverablesScrollTrack} ref={trackRef}>
        {cards.map((card, idx) => (
          <div key={idx} className={styles.delivCard}>
            <div className={styles.delivPhase}>{card.phase}</div>
            <h3 className={styles.delivTitle}>{card.title}</h3>
            <p className={styles.delivDesc}>{card.desc}</p>
            <ul className={styles.delivSpecsList}>
              {card.specs.map((spec, sIdx) => (
                <li key={sIdx} className={styles.delivSpecItem}>
                  <Check size={16} strokeWidth={2.5} className={styles.delivCheckIcon} />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <button
        type="button"
        className={styles.delivNavBtnRight}
        onClick={() => scroll('right')}
        aria-label="Next Deliverable"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
