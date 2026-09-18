import React from 'react';
import styles from './PremiumAbout.module.css';
import RevealOnScroll from './RevealOnScroll';
import { ArrowRight, Search, FileText, Settings, BarChart2, Diamond, Layers, Lightbulb, Users } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function PremiumAbout() {
  return (
    <div className={styles.wrapper}>
      {/* =========================================
          SECTION 1: OUR PRESENCE
      ========================================= */}
      <section className={styles.presenceSection}>
        <div className={styles.container}>
          <div className={styles.presenceGrid}>
            
            {/* LEFT CONTENT */}
            <div className={styles.presenceLeft}>
              <RevealOnScroll>
                <div className={styles.eyebrow}>
                  <span className={styles.line}></span> OUR PRESENCE
                </div>
                <h2 className={styles.title}>
                  Global Reach<br/>
                  with a <span className={styles.blueGradient}>Local Mindset</span>
                </h2>
                <p className={styles.description}>
                  While we&apos;re based in India, we proudly work with clients across the UAE, Saudi Arabia (KSA) and beyond. We understand different markets, cultures and business needs — and create tailored digital solutions that work.
                </p>
                
                <div className={styles.flagsGrid}>
                  <div className={styles.flagItem}>
                    <div className={styles.flagIcon}>🇦🇪</div>
                    <div className={styles.flagText}>
                      <strong>UAE</strong>
                      <span>Growing Brands</span>
                    </div>
                  </div>
                  <div className={styles.flagItem}>
                    <div className={styles.flagIcon}>🇸🇦</div>
                    <div className={styles.flagText}>
                      <strong>KSA</strong>
                      <span>Digital Solutions</span>
                    </div>
                  </div>
                  <div className={styles.flagItem}>
                    <div className={styles.flagIcon}>🇮🇳</div>
                    <div className={styles.flagText}>
                      <strong>INDIA</strong>
                      <span>Local Expertise</span>
                    </div>
                  </div>
                  <div className={styles.flagItem}>
                    <div className={styles.flagIcon}>🌐</div>
                    <div className={styles.flagText}>
                      <strong>Global</strong>
                      <span>Expanding Together</span>
                    </div>
                  </div>
                </div>

                <div className={styles.presenceAction}>
                  <Link href="/contact" className={styles.btnDark}>
                    Work With Us <ArrowRight size={16} />
                  </Link>
                  <div className={styles.handwrittenNote}>
                    Different Markets<br/>
                    Same Mission.<br/>
                    Your Growth.
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* RIGHT GLOBE */}
            <div className={styles.presenceRight}>
              <RevealOnScroll delay={200}>
                <div className={styles.globeWrapper}>
                  <div className={styles.globeGlow}></div>
                  <img src="/assets/images/global-about.png" alt="Global Reach" className={styles.globeImg} />
                  
                  {/* Floating Pins */}
                  <div className={`${styles.floatPin} ${styles.pinUae}`}>
                    <div className={styles.pinThumb}>🇦🇪</div>
                    <div className={styles.pinDetails}>
                      <strong>UAE</strong>
                      <span>Our Clients</span>
                      <small>Growing Brands in a Global Hub</small>
                    </div>
                  </div>

                  <div className={`${styles.floatPin} ${styles.pinKsa}`}>
                    <div className={styles.pinThumb}>🇸🇦</div>
                    <div className={styles.pinDetails}>
                      <strong>KSA</strong>
                      <span>Our Clients</span>
                      <small>Digital Solutions for a Bigger Tomorrow</small>
                    </div>
                  </div>

                  <div className={`${styles.floatPin} ${styles.pinIndia}`}>
                    <div className={styles.pinThumb}>🇮🇳</div>
                    <div className={styles.pinDetails}>
                      <strong>INDIA</strong>
                      <span>Our Base</span>
                      <small>Local Expertise, Global Vision</small>
                    </div>
                  </div>
                  
                </div>
              </RevealOnScroll>
            </div>
          </div>

          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <h3>3+</h3>
              <span>Markets</span>
            </div>
            <div className={styles.statLine}></div>
            <div className={styles.statItem}>
              <h3>50+</h3>
              <span>Happy Clients</span>
            </div>
            <div className={styles.statLine}></div>
            <div className={styles.statItem}>
              <h3>100+</h3>
              <span>Projects</span>
            </div>
            <div className={styles.statLine}></div>
            <div className={styles.statItem}>
              <h3 style={{ fontSize: '2.5rem' }}>∞</h3>
              <span>Bigger Possibilities</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: CORE VALUES (DARK)
      ========================================= */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          
          <div className={styles.valuesHeader}>
            <RevealOnScroll minWidth="auto">
              <div className={styles.eyebrowDark}>
                <span className={styles.lineDark}></span> WHAT DRIVES US
              </div>
              <h2 className={styles.titleWhite}>
                Our Core<br/>
                <span className={styles.purpleGradient}>Values</span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={150} minWidth="auto">
              <div className={styles.headerRight}>
                <div className={styles.handwrittenWhite}>
                  &quot;More Than<br/>
                  a Digital Agency.<br/>
                  A Growth Partner.&quot;
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={200}>
            <div className={styles.cardsGrid}>
              <div className={styles.valueCard}>
                <div className={styles.cardIconBox}><Diamond size={24} /></div>
                <h4>Quality</h4>
                <p>We deliver excellence in everything we do.</p>
                <div className={styles.cardNumber}>
                  <span>01</span>
                  <div className={styles.cardLine}></div>
                </div>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.cardIconBox}><Layers size={24} /></div>
                <h4>Transparency</h4>
                <p>Clear communication, always.</p>
                <div className={styles.cardNumber}>
                  <span>02</span>
                  <div className={styles.cardLine}></div>
                </div>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.cardIconBox}><Lightbulb size={24} /></div>
                <h4>Innovation</h4>
                <p>We embrace new ideas and technology.</p>
                <div className={styles.cardNumber}>
                  <span>03</span>
                  <div className={styles.cardLine}></div>
                </div>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.cardIconBox}><Users size={24} /></div>
                <h4>Client Success</h4>
                <p>Your growth is our success.</p>
                <div className={styles.cardNumber}>
                  <span>04</span>
                  <div className={styles.cardLine}></div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

        </div>
        
        {/* Abstract Z Background Element */}
        <div className={styles.zGraphic}>
          <div className={styles.zText}>Z</div>
          <div className={styles.zGlow}></div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: OUR APPROACH
      ========================================= */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.processGrid}>
            
            <div className={styles.processLeft}>
              <RevealOnScroll>
                <div className={styles.eyebrow}>
                  <span className={styles.line}></span> OUR APPROACH
                </div>
                <h2 className={styles.title}>
                  A Simple Process.<br/>
                  <span className={styles.blueGradient}>Powerful Results.</span>
                </h2>
                <p className={styles.description}>
                  We follow a clear and proven process to ensure every project delivers real value.
                </p>
                
                <div className={styles.processAction}>
                  <Link href="/contact" className={styles.btnGradient}>
                    Let&apos;s Start Your Project <ArrowRight size={16} />
                  </Link>
                </div>
                
                <div className={styles.handwrittenProcessLeft}>
                  From Ideas<br/>
                  to Impact
                </div>
              </RevealOnScroll>
            </div>

            <div className={styles.processRight}>
              <RevealOnScroll delay={200}>
                <div className={styles.timelineWrapper}>
                  {/* SVG CURVE (APPROXIMATION) */}
                  <svg className={styles.timelineCurve} viewBox="0 0 600 200" preserveAspectRatio="none">
                    <path d="M0,100 C150,20 300,180 450,100 C520,60 600,100 600,100" fill="none" stroke="#1e293b" strokeWidth="3" strokeDasharray="8 8" />
                  </svg>
                  
                  {/* STEPS */}
                  <div className={`${styles.stepNode} ${styles.step1}`}>
                    <div className={styles.stepNum}>01</div>
                    <div className={styles.stepIconBox}><Search size={20} /></div>
                    <h4>Discover</h4>
                    <p>Understand your goals and challenges.</p>
                  </div>

                  <div className={`${styles.stepNode} ${styles.step2}`}>
                    <div className={styles.stepNumBlue}>02</div>
                    <div className={styles.stepIconBoxWhite}><FileText size={20} /></div>
                    <h4>Plan</h4>
                    <p>Create a tailored strategy.</p>
                  </div>

                  <div className={`${styles.stepNode} ${styles.step3}`}>
                    <div className={styles.stepNumPurple}>03</div>
                    <div className={styles.stepIconBoxWhite}><Settings size={20} /></div>
                    <h4>Execute</h4>
                    <p>Bring ideas to life with precision.</p>
                  </div>

                  <div className={`${styles.stepNode} ${styles.step4}`}>
                    <div className={styles.stepNumBlue}>04</div>
                    <div className={styles.stepIconBoxWhite}><BarChart2 size={20} /></div>
                    <h4>Grow</h4>
                    <p>Measure, optimize and scale.</p>
                  </div>

                  <div className={styles.handwrittenProcessRight}>
                    Strategy<br/>Execution<br/>Growth
                  </div>
                </div>
              </RevealOnScroll>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
