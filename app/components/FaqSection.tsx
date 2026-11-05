"use client";

import { useState } from 'react';
import styles from './FaqSection.module.css';
import Image from 'next/image';
import { 
  MessageCircle, ShieldCheck, Users, Infinity, 
  Sparkles, FileText, Monitor, Database, Clock, 
  Headphones, Settings, Send, Mail, ChevronDown, ChevronUp, ArrowRight
} from 'lucide-react';
import { Link } from '@/i18n/routing';
import { FaqContent, defaultHomepageData } from '@/lib/homepageDefaults';

const defaultFaqIcons = [
  <FileText key="1" size={18} />,
  <Monitor key="2" size={18} />,
  <Database key="3" size={18} />,
  <Clock key="4" size={18} />,
  <Headphones key="5" size={18} />,
  <Settings key="6" size={18} />,
  <Send key="7" size={18} />
];

export default function FaqSection({ locale, content }: { locale: string; content?: FaqContent }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const data = content || defaultHomepageData.faqs;
  const items = data.items && data.items.length > 0 ? data.items : defaultHomepageData.faqs.items;

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        
        {/* Left Column */}
        <div className={styles.leftCol}>
          <div className={styles.textContent}>
            <div className={styles.eyebrowWrap}>
              <span className={styles.eyebrow}>{data.eyebrow}</span>
              <div className={styles.eyebrowLine}></div>
            </div>
            
            <h2 className={styles.headline}>
              {data.headline}
            </h2>
            
            <p className={styles.description}>
              {data.description}
            </p>

            <div className={styles.featuresRow}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}><MessageCircle size={16} /></div>
                <span>Quick<br/>Responses</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}><ShieldCheck size={16} /></div>
                <span>Transparent<br/>Process</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}><Users size={16} /></div>
                <span>Real People<br/>Real Support</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}><Infinity size={16} /></div>
                <span>Long-Term<br/>Partnership</span>
              </div>
            </div>
          </div>

          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
               <Image 
                 src={data.mockupImage || "/assets/images/faq-mockup.png"} 
                 alt="Zaviroq FAQ" 
                 fill 
                 className={styles.mockupImg} 
                 unoptimized 
               />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.rightCol}>
          <div className={styles.rightHeaderBadge}>
            <Sparkles size={14} color="#A78BFA" />
            <span>Frequently Asked Questions</span>
          </div>

          <div className={styles.faqList}>
            {items.map((faq, idx) => (
              <div 
                key={idx} 
                className={`${styles.faqItem} ${openIndex === idx ? styles.active : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className={styles.faqHeader}>
                  <div className={styles.faqIconWrap}>{defaultFaqIcons[idx % defaultFaqIcons.length]}</div>
                  <h3 className={styles.faqQuestion}>{faq.question}</h3>
                  <div className={styles.faqToggle}>
                    {openIndex === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>
                <div className={styles.faqBodyWrap} style={{ height: openIndex === idx ? 'auto' : 0 }}>
                  <div className={styles.faqBody}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.contactBanner}>
             <div className={styles.bannerLeft}>
               <div className={styles.mailIcon}><Mail size={20} /></div>
               <div className={styles.bannerText}>
                 <h4>Still have questions?</h4>
                 <p>We&apos;re here to help!</p>
               </div>
             </div>
             <Link href="/contact" className={styles.bannerBtn}>
               Let&apos;s Talk <ArrowRight size={16} />
             </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
