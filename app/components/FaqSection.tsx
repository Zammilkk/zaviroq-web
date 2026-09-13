"use client";

import { useState } from 'react';
import styles from './FaqSection.module.css';
import Image from 'next/image';
import { 
  MessageCircle, ShieldCheck, Users, Infinity, 
  Sparkles, FileText, Monitor, Database, Clock, 
  Headphones, Settings, Send, Mail, ChevronDown, ChevronUp, ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    icon: <FileText size={18} />,
    question: "What services does Zaviroq offer?",
    answer: "We offer website design, SEO, graphic design, and advertising solutions to help businesses build a strong digital presence and grow online."
  },
  {
    icon: <Monitor size={18} />,
    question: "How does your remote working model work?",
    answer: "We operate entirely online, collaborating via advanced project management tools and video conferencing to deliver seamless global service."
  },
  {
    icon: <Database size={18} />,
    question: "Why are your services affordable?",
    answer: "By maintaining a distributed remote team and minimizing corporate overhead, we pass on those cost savings directly to our clients without compromising quality."
  },
  {
    icon: <Clock size={18} />,
    question: "How long does it take to complete a website?",
    answer: "Most custom corporate websites take 4 to 8 weeks depending on complexity, features, and the speed of feedback cycles."
  },
  {
    icon: <Headphones size={18} />,
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer comprehensive maintenance and retainer packages to ensure your digital assets remain secure and up-to-date."
  },
  {
    icon: <Settings size={18} />,
    question: "Can I request custom services?",
    answer: "Absolutely. We specialize in custom-tailored solutions engineered specifically for your unique business architecture."
  },
  {
    icon: <Send size={18} />,
    question: "How can I get started?",
    answer: "Simply reach out via our contact form or book a free consultation call. We'll audit your current setup and propose a strategic roadmap."
  }
];

export default function FaqSection({ locale }: { locale: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
              <span className={styles.eyebrow}>FAQ</span>
              <div className={styles.eyebrowLine}></div>
            </div>
            
            <h2 className={styles.headline}>
              Got Questions?<br/>
              We&apos;ve Got <span className={styles.gradientText}>Answers.</span>
            </h2>
            
            <p className={styles.description}>
              Everything you need to know about working with Zaviroq. Still have a question? We&apos;re just a message away.
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
                 src="/assets/images/faq-mockup.jpg" 
                 alt="Zaviroq FAQ" 
                 fill 
                 className={styles.mockupImg} 
                 unoptimized 
               />
            </div>
            
            {/* The small stacked text at the bottom left of the mockup */}
            <div className={styles.bottomTextOverlay}>
              <div className={styles.stackedText}>
                <span>IDEAS</span>
                <span>STRATEGY</span>
                <span>EXECUTION</span>
                <span>GROWTH</span>
              </div>
              <div className={styles.clearAnswers}>
                CLEAR ANSWERS<br/>
                BRIGHTER BUSINESS
              </div>
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
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`${styles.faqItem} ${openIndex === idx ? styles.active : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className={styles.faqHeader}>
                  <div className={styles.faqIconWrap}>{faq.icon}</div>
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
             <Link href={`/${locale}/contact`} className={styles.bannerBtn}>
               Let&apos;s Talk <ArrowRight size={16} />
             </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
