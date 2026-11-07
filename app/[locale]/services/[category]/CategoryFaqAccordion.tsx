'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './page.module.css';

interface FaqItem {
  q: string;
  a: string;
}

export default function CategoryFaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className={styles.faqList}>
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`${styles.faqCard} ${isOpen ? styles.faqCardOpen : ''}`}
          >
            <button
              type="button"
              className={styles.faqQuestionBtn}
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
            >
              <span className={styles.faqQuestionText}>{faq.q}</span>
              <span className={`${styles.faqArrow} ${isOpen ? styles.faqArrowOpen : ''}`}>
                <ChevronDown size={18} />
              </span>
            </button>
            {isOpen && (
              <div className={styles.faqAnswerBody}>
                <p className={styles.faqAnswerText}>{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
