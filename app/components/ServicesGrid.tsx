'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './ServicesGrid.module.css';

interface ServiceCategory {
  key: string;
  label: string;
  icon: string;
  badge: string;
  desc: string;
  image?: string;
  services: { slug: string; title: string }[];
  locations: { path: string; title: string }[];
}

export default function ServicesGrid({ 
  categories, 
  locale 
}: { 
  categories: ServiceCategory[];
  locale: string;
}) {
  const [activeTab, setActiveTab] = useState('All Services');

  const tabs = ['All Services', 'Web & Development', 'Digital Marketing', 'Creative & Media', 'Business Solutions'];

  return (
    <div className={styles.servicesSection}>
      {/* FILTER BAR */}
      <div className={styles.filterBar}>
        {tabs.map((tab) => (
          <button 
            key={tab}
            className={`${styles.filterTab} ${activeTab === tab ? styles.activeTab : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {activeTab === tab && <span className={styles.tabIcon}>㗊</span>}
            {tab}
          </button>
        ))}
      </div>

      {/* SERVICES GRID */}
      <div className={styles.servicesGrid}>
        {categories.map((cat, i) => {
          // Use card1 to card4 for images as placeholders
          const imgIndex = (i % 4) + 1;
          const imgSrc = cat.image || `/assets/images/card${imgIndex}.png`;
          
          return (
            <div key={cat.key} className={styles.serviceCard}>
              <div className={styles.cardContent}>
                <div className={styles.cardNumber}>0{i + 1}</div>
                <h3 className={styles.cardTitle}>{cat.label}</h3>
                <p className={styles.cardDesc}>{cat.desc}</p>
                <Link href={`/${locale}/services/${cat.key}`} className={styles.learnMore}>
                  Learn More <span className={styles.arrowIcon}>→</span>
                </Link>
              </div>
              <div className={styles.cardImageWrapper}>
                <img src={imgSrc} alt={cat.label} className={styles.cardImage} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
