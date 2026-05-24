"use client";

import { useState } from 'react';
import styles from './HomeSections.module.css';

export default function ExecutiveFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What does a digital marketing agency do?",
      a: "A digital marketing agency helps businesses grow online through services like search engine optimization (SEO), website development, pay-per-click advertising, social media management, branding, and content marketing. At Zaviroq, we combine AI-driven strategies with local market expertise to deliver measurable results for businesses in Riyadh and across Saudi Arabia."
    },
    {
      q: "Why is SEO important for businesses in Riyadh?",
      a: "SEO is crucial for Riyadh businesses because it helps you appear in local search results when potential customers are looking for your products or services. With more Saudi consumers turning to Google to find businesses, ranking high for keywords like 'digital marketing agency Riyadh' or 'SEO company Riyadh' can significantly increase your website traffic, leads, and revenue."
    },
    {
      q: "How long does SEO take?",
      a: "SEO is a long-term strategy. Most businesses start seeing improvements in 3–6 months, with significant results typically appearing within 6–12 months. However, the timeline depends on your industry, competition, website condition, and the aggressiveness of the SEO strategy. We focus on sustainable, white-hat SEO that builds lasting authority."
    },
    {
      q: "Do you provide Google Ads management?",
      a: "Yes. We specialize in Google Ads management for Saudi businesses, including search campaigns, display advertising, shopping ads for ecommerce, and YouTube advertising. We optimize for cost-per-click, conversion rates, and overall ROI to ensure your ad spend delivers real business results."
    },
    {
      q: "Do you develop ecommerce websites?",
      a: "Absolutely. We develop high-performance ecommerce websites using modern technologies like Next.js, Shopify, and WordPress WooCommerce. Our ecommerce solutions are fast, secure, mobile-optimized, and built to convert visitors into customers — perfect for businesses in Riyadh and across Saudi Arabia."
    },
    {
      q: "Why choose Zaviroq?",
      a: "Zaviroq stands out because we combine AI-driven marketing, custom web development, and deep Saudi market expertise. We don't use templates or generic strategies — every solution is built from the ground up for your business. Our transparent reporting, ROI-focused approach, and dedicated support make us the preferred digital marketing agency in Riyadh."
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
