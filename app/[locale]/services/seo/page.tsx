import styles from './page.module.css';
import RevealOnScroll from '../../RevealOnScroll';
import Link from 'next/link';
import DigitalSolutionsCarousel from './DigitalSolutionsCarousel';
import IndustriesCarousel from './IndustriesCarousel';

export default async function ServicesSeoIndexPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  
  const digitalSolutions = [
    { title: "Website Design\n& Development", fallback: "💻" },
    { title: "Search Engine\nOptimization (SEO)", fallback: "🔍" },
    { title: "Meta Ads\n& Google Ads", fallback: "📈" },
    { title: "Graphic\nDesign", fallback: "🎨" },
    { title: "Video\nEditing", fallback: "🎬" },
    { title: "Email\nMarketing", fallback: "✉️" },
  ];

  const whyChooseUs = [
    { title: "Data-Driven Approach", desc: "We rely on advanced analytics, not guesswork." },
    { title: "Transparent Reporting", desc: "Real-time dashboards for full visibility." },
    { title: "Ethical White-Hat", desc: "Sustainable growth without penalty risks." },
    { title: "ROI Focused", desc: "We target high-intent traffic that actually converts." },
  ];

  const industries = [
    { title: "Real Estate", icon: "🏢", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80" },
    { title: "Travel & Tourism", icon: "✈️", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=400&q=80" },
    { title: "Healthcare", icon: "⚕️", img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=400&q=80" },
    { title: "E-commerce", icon: "🛒", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80" },
    { title: "Education", icon: "🎓", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80" },
    { title: "Hospitality", icon: "🛏️", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80" },
    { title: "Manufacturing", icon: "⚙️", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80" },
    { title: "Technology", icon: "💻", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80" },
  ];

  const processData = [
    { num: "01", title: "Discovery &\nConsultation", desc: "We understand your business goals, challenges and requirements.", icon: "🔍" },
    { num: "02", title: "Strategy &\nPlanning", desc: "We create a customized strategy and detailed roadmap for success.", icon: "💡" },
    { num: "03", title: "Design &\nPrototyping", desc: "We design modern, user-focused solutions with a focus on your brand.", icon: "🎨" },
    { num: "04", title: "Development &\nImplementation", desc: "We bring designs to life with clean, scalable and high-performance code.", icon: "💻" },
    { num: "05", title: "Testing &\nLaunch", desc: "We ensure everything works perfectly and launch your solution.", icon: "🚀" },
    { num: "06", title: "Ongoing Support\n& Growth", desc: "We provide continuous support, optimization and strategic guidance.", icon: "📈" }
  ];

  const faqs = [
    { q: "How long does it take to see SEO results?", a: "Typically, meaningful results take 3 to 6 months depending on competition, current site authority, and the scale of implementation." },
    { q: "Do you guarantee #1 rankings?", a: "No ethical agency guarantees #1 rankings due to the dynamic nature of search algorithms. We guarantee transparent, data-driven execution that maximizes your visibility." },
    { q: "What's the difference between local and global SEO?", a: "Local SEO focuses on capturing geographically specific searches (e.g., 'SEO agency in Dubai'), while global SEO targets a broader, international audience without location constraints." },
    { q: "How do you measure the success of an SEO campaign?", a: "We track KPIs like organic traffic growth, keyword ranking improvements, conversion rates, and domain authority to ensure our strategies deliver true ROI." },
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* HERO SECTION */}
      <section className={styles.heroTop}>
        <div className={styles.heroTopBgLayer}></div>
        <div className={styles.watermarkBg}>SEO</div>
        
        <div className={styles.heroTopContainer}>
          <div className={styles.heroTopLeft}>
            <div className={styles.heroEyebrow}>
              <span className={styles.eyebrowLine}></span> SEARCH ENGINE OPTIMIZATION
            </div>
            
            <h1 className={styles.heroTopTitle}>
              Dominate Search<br />
              <span className={styles.heroHighlight}>Rankings.</span>
            </h1>
            
            <p className={styles.heroTopSub}>
              Technical, On-Page, Off-Page, Local & Global SEO strategies to drive organic growth.
            </p>
          </div>
          <div className={styles.heroTopRight}>
            <div className={styles.heroTopImageWrapper}>
              <img src="/assets/images/contact-hero.png" alt="SEO Services Strategy" className={styles.heroTopImage} />
            </div>
          </div>
        </div>
      </section>

      {/* DIGITAL SOLUTIONS CAROUSEL */}
      <section className={styles.solutionsSection}>
        <div className={styles.solutionsHeader}>
          <span className={styles.solutionsEyebrow}>— OUR SERVICES</span>
          <h2 className={styles.solutionsTitle}>
            Explore Our <span className={styles.solutionsHighlight}>Digital Solutions</span>
          </h2>
          <p className={styles.solutionsSub}>
            End-to-end digital solutions designed to help your business grow, build a strong<br/>
            online presence, and achieve measurable results.
          </p>
        </div>
        
        <DigitalSolutionsCarousel solutions={digitalSolutions} />
        
        <div className={styles.carouselPagination}>
          <span className={`${styles.dot} ${styles.activeDot}`}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </section>

      {/* WHY PARTNER WITH US */}
      <section className={styles.whyPartnerSection}>
        <div className={styles.whyPartnerContainer}>
          
          <div className={styles.whyTopRow}>
            {/* Left Content */}
            <div className={styles.whyLeft}>
              <span className={styles.whyEyebrow}>— WHY PARTNER WITH US</span>
              <h2 className={styles.whyTitle}>
                Built Around<br />Your <span className={styles.whyHighlight}>Growth.</span>
              </h2>
              <p className={styles.whyDesc}>
                We combine strategy, design, development and marketing to create powerful digital solutions that deliver real results and long-term success.
              </p>
              <Link href={`/${locale}/contact`} className={styles.whyBtn}>
                Let&apos;s Work Together <span className={styles.btnArrow}>→</span>
              </Link>
            </div>

            {/* Center 3D Graphic */}
            <div className={styles.whyCenter}>
              <img src="/assets/images/why-partner-3d.png" alt="Zaviroq Core Ecosystem" className={styles.whyCenterImg} />
            </div>

            {/* Right List */}
            <div className={styles.whyRight}>
              <div className={styles.whyRightItem}>
                <div className={styles.whyRightIcon}>📊</div>
                <div>
                  <h4>Strategy</h4>
                  <p>Data-driven strategies<br/>to unlock new opportunities.</p>
                </div>
              </div>
              <div className={styles.whyRightItem}>
                <div className={styles.whyRightIcon}>✏️</div>
                <div>
                  <h4>Design</h4>
                  <p>Modern, conversion-focused<br/>designs that elevate your brand.</p>
                </div>
              </div>
              <div className={styles.whyRightItem}>
                <div className={styles.whyRightIcon}>⚙️</div>
                <div>
                  <h4>Technology</h4>
                  <p>Robust and scalable<br/>solutions built for the future.</p>
                </div>
              </div>
              <div className={styles.whyRightItem}>
                <div className={styles.whyRightIcon}>🥧</div>
                <div>
                  <h4>Performance</h4>
                  <p>Result-oriented marketing<br/>that drives measurable growth.</p>
                </div>
              </div>
              <div className={styles.whyRightItem}>
                <div className={styles.whyRightIcon}>👥</div>
                <div>
                  <h4>Partnership</h4>
                  <p>A long-term partner<br/>committed to your success.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Card Row */}
          <div className={styles.whyBottomCard}>
            <div className={styles.whyBottomCol}>
              <div className={styles.whyBottomIcon}>🎯</div>
              <div>
                <h4>Strategy First</h4>
                <p>Every solution starts with a clear strategy<br/>to ensure the right direction.</p>
              </div>
            </div>
            
            <div className={styles.whyBottomDivider}></div>

            <div className={styles.whyBottomCol}>
              <div className={styles.whyBottomIcon}>📈</div>
              <div>
                <h4>Built to Scale</h4>
                <p>Solutions designed to grow with<br/>your business.</p>
              </div>
            </div>

            <div className={styles.whyBottomDivider}></div>

            <div className={styles.whyBottomCol}>
              <div className={styles.whyBottomIcon}>🛡️</div>
              <div>
                <h4>Long-Term Support</h4>
                <p>We&apos;re with you beyond launch,<br/>helping you achieve sustained success.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* INDUSTRIES */}
      <section className={styles.solutionsSection}>
        <div className={styles.solutionsHeader}>
          <span className={styles.solutionsEyebrow}>— INDUSTRIES WE SERVE</span>
          <h2 className={styles.solutionsTitle}>
            Empowering <span className={styles.solutionsHighlight}>Every Industry</span>
          </h2>
          <p className={styles.solutionsSub}>
            We deliver industry-specific digital solutions tailored to unique business goals, challenges and opportunities.
          </p>
        </div>
        
        <IndustriesCarousel industries={industries} />
        
        <div className={styles.carouselPagination}>
          <span className={`${styles.dot} ${styles.activeDot}`}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.solutionsSection}>
        <div className={styles.solutionsHeader}>
          <span className={styles.solutionsEyebrow}>— OUR PROVEN PROCESS</span>
          <h2 className={styles.solutionsTitle}>
            From Strategy to <span className={styles.solutionsHighlight}>Success</span>
          </h2>
          <p className={styles.solutionsSub}>
            A clear and proven process to turn your ideas into powerful digital solutions,<br/>designed for measurable growth.
          </p>
        </div>

        <div className={styles.processWrapper}>
          {/* Decorative Wave Line */}
          <div className={styles.processWaveLine}></div>
          
          <div className={styles.processTrack}>
            {processData.map((step, i) => (
              <div key={i} className={styles.processCardWrapper}>
                
                {/* Arrow pointing to next card (skip on last) */}
                {i < processData.length - 1 && (
                  <div className={styles.processArrowBox}>→</div>
                )}
                
                <div className={styles.processCard3D}>
                  <div className={styles.processNumber}>{step.num}</div>
                  
                  <div className={styles.processPlatform}>
                    <div className={styles.processIcon}>{step.icon}</div>
                  </div>
                  
                  <div className={styles.processCardBottom}>
                    <h3 className={styles.processCardTitle}>{step.title}</h3>
                    <p className={styles.processCardDesc}>{step.desc}</p>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <RevealOnScroll>
          <div className={styles.sectionHeaderCenter}>
            <span className={styles.sectionEyebrow}>Clarifications</span>
            <h2 className={styles.sectionTitle}>Common Questions</h2>
          </div>
        </RevealOnScroll>
        <div className={styles.faqList}>
          {faqs.map((faq, i) => (
            <RevealOnScroll key={i} delay={i * 100}>
              <details className={styles.faqItem}>
                <summary className={styles.faqQ}>{faq.q} <span className={styles.faqIcon}>+</span></summary>
                <div className={styles.faqA}>{faq.a}</div>
              </details>
            </RevealOnScroll>
          ))}
        </div>
      </section>
      
      {/* CTA Bottom (New Design) */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          
          <div className={styles.ctaLeft}>
            <span className={styles.ctaEyebrow}>— LET&apos;S WORK TOGETHER</span>
            <h2 className={styles.ctaTitle}>
              Ready to Grow<br />Your <span className={styles.ctaHighlight}>Business Online?</span>
            </h2>
            <p className={styles.ctaDesc}>
              Let&apos;s create powerful digital solutions that help your business stand out, attract more customers and achieve long-term growth.
            </p>
            
            <div className={styles.ctaButtonGroup}>
              <Link href={`/${locale}/contact`} className={styles.ctaBtnPrimary}>
                Get Started Today <span className={styles.btnArrow}>→</span>
              </Link>
              <button className={styles.ctaBtnSecondary}>
                <span className={styles.playIconBox}>▶</span> Watch Our Process
              </button>
            </div>

            <div className={styles.ctaFeatures}>
              <div className={styles.ctaFeatureItem}>
                <div className={styles.ctaFeatureIcon}>⚡</div>
                <div className={styles.ctaFeatureText}>Fast<br/>Turnaround</div>
              </div>
              <div className={styles.ctaFeatureItem}>
                <div className={styles.ctaFeatureIcon}>🛡️</div>
                <div className={styles.ctaFeatureText}>Reliable<br/>Support</div>
              </div>
              <div className={styles.ctaFeatureItem}>
                <div className={styles.ctaFeatureIcon}>📊</div>
                <div className={styles.ctaFeatureText}>Results<br/>Driven</div>
              </div>
            </div>
          </div>

          <div className={styles.ctaRight}>
            <img src="/assets/images/cta-laptop-3d.png" alt="Zaviroq Digital Solutions" className={styles.ctaLaptopImg} />
          </div>
          
        </div>
      </section>
    </div>
  );
}
