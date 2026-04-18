"use client";

import { useState } from 'react';
import styles from './HomeSections.module.css';

export default function ExecutiveFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How fast do you execute client deployments?",
      a: "Our Next.js architecture and agile marketing deployments often allow us to launch full-funnel systems within 14 days, driving targeted leads substantially faster than traditional agencies."
    },
    {
      q: "Do you guarantee ROI on performance marketing?",
      a: "While we cannot guarantee an exact numerical ROI due to market dynamics, our 98% target hit rate and historic metrics indicate a very high probability of scaling. We focus strictly on data-backed ROI optimizations rather than vanity metrics."
    },
    {
      q: "What makes Zaviroq different from standard digital agencies?",
      a: "We engineer solutions. We don't just run ads or build basic WordPress sites. We build highly secure, custom matrix environments using React/Next.js combined with aggressive, algorithmic SEO and Meta ad pipelines to dominate your specific local market."
    },
    {
      q: "Do you provide localized services in the UAE and Saudi Arabia?",
      a: "Yes. Our deep understanding of Middle Eastern market psychology allows us to tailor Arabic and English campaigns precisely. We operate localized pipelines for Dubai, Riyadh, and extending into major Indian hubs."
    }
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      {faqs.map((faq, i) => (
        <div key={i} className={styles.faqItem} data-open={openIndex === i}>
          <button className={styles.faqQuestion} onClick={() => toggle(i)}>
            {faq.q}
            <span className={styles.faqIcon}>▼</span>
          </button>
          <div className={styles.faqAnswer}>
            {faq.a}
          </div>
        </div>
      ))}
    </div>
  );
}
