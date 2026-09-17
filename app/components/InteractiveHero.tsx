"use client";
import React, { useState, useEffect } from 'react';
import styles from './InteractiveHero.module.css';
import { ArrowRight, ArrowUpRight, User, Smartphone, Play, Monitor, Search, PenTool, Megaphone, TrendingUp, Target, Home, Image, Type, Layers, LayoutGrid, Bell, Settings, Bookmark, Plus, Trophy, Wrench, CreditCard, RefreshCw, HelpCircle, Filter, Download, Maximize2 } from 'lucide-react';
import { Link } from '@/i18n/routing';

function AnimatedNumber({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOutExpo * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return <>{count}{suffix}</>;
}

export default function InteractiveHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = 4;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesCount);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.hero}>
      <div className={styles.copy}>
        <div className={styles.eyebrow}>
          <span className={styles.dot}></span> DIGITAL SOLUTIONS FOR AMBITIOUS BRANDS
        </div>
        
        <h1 className={styles.title}>
          Modern Marketing<br />
          <span className={styles.accent}>Real Results.</span>
        </h1>
        
        <p className={styles.lede}>
          We design websites, build brands, and run data-driven marketing strategies that help businesses grow faster in the digital world.
        </p>
        
        <div className={styles.ctas}>
          <Link href="/contact" className={styles.btnPrimary} style={{textDecoration: 'none'}}>
            Start Your Project <ArrowRight size={18} />
          </Link>
          <Link href="/services" className={styles.btnPremiumGhost} style={{textDecoration: 'none'}}>
            Our Services <ArrowUpRight size={16} />
          </Link>
        </div>
        
        <div className={styles.services}>
          <button className={`${styles.servicePick} ${currentSlide === 0 ? styles.active : ''}`} onClick={() => goToSlide(0)}>
            <Monitor size={24} className={styles.serviceIcon} />
            <span className={styles.label}>Website<br/>Design</span>
            <span className={styles.bar}><i key={`bar-0-${currentSlide === 0}`}></i></span>
          </button>
          <button className={`${styles.servicePick} ${currentSlide === 1 ? styles.active : ''}`} onClick={() => goToSlide(1)}>
            <Search size={24} className={styles.serviceIcon} />
            <span className={styles.label}>SEO<br/>Optimization</span>
            <span className={styles.bar}><i key={`bar-1-${currentSlide === 1}`}></i></span>
          </button>
          <button className={`${styles.servicePick} ${currentSlide === 2 ? styles.active : ''}`} onClick={() => goToSlide(2)}>
            <PenTool size={24} className={styles.serviceIcon} />
            <span className={styles.label}>Graphic<br/>Design</span>
            <span className={styles.bar}><i key={`bar-2-${currentSlide === 2}`}></i></span>
          </button>
          <button className={`${styles.servicePick} ${currentSlide === 3 ? styles.active : ''}`} onClick={() => goToSlide(3)}>
            <Megaphone size={24} className={styles.serviceIcon} />
            <span className={styles.label}>Ads<br/>Management</span>
            <span className={styles.bar}><i key={`bar-3-${currentSlide === 3}`}></i></span>
          </button>
        </div>
        
        <div className={styles.statsRow}>
          <div className={styles.statBox}>
            <div className={styles.statVal}><AnimatedNumber end={360} suffix="+" /></div>
            <div className={styles.statLabel}>Projects Delivered</div>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statBox}>
            <div className={styles.statVal}><AnimatedNumber end={50} suffix="+" /></div>
            <div className={styles.statLabel}>Happy Clients</div>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statBox}>
            <div className={styles.statVal}><AnimatedNumber end={3} suffix="x" /></div>
            <div className={styles.statLabel}>Average Growth</div>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statBox}>
            <div className={styles.statVal}><AnimatedNumber end={100} suffix="%" /></div>
            <div className={styles.statLabel}>Results Focused</div>
          </div>
        </div>
      </div>

      <div className={styles.rig}>
        <div className={styles.laptop}>
          <div className={styles.lid}>
            <div className={styles.camera}></div>
            <div className={styles.screen}>
              
              {/* Slide 1: Website Design */}
              <div className={`${styles.slide} ${currentSlide === 0 ? styles.activeSlide : ''}`}>
                <div className={styles.slideTop}>
                  <div className={styles.brandMini}><img src="/logo.svg" alt="ZAVIROQ" style={{ height: '38px', width: 'auto', objectFit: 'contain', backgroundColor: '#0B0A14', padding: '6px 14px', borderRadius: '8px' }} /></div>
                  <div className={styles.miniNav}>
                    <span style={{color: '#2563eb', fontWeight: 700, borderBottom: '2px solid #2563eb', paddingBottom: '2px'}}>Home</span>
                    <span>Services</span><span>Work</span><span>About</span><span>Contact</span>
                  </div>
                  <div className={styles.miniCta}>Get a Quote <ArrowRight size={10} /></div>
                </div>

                <div className={styles.webSlideLayout}>
                  <div className={styles.webBg}></div>
                  <div className={styles.webMiddle}>
                    <div className={styles.webLeft}>
                      <div className={styles.webEyebrow}>WE DESIGN</div>
                      <h2 className={styles.webTitle}>Websites<br />That Grow<br /><span className={styles.webAccent}>Your Business.</span></h2>
                      <p className={styles.webDesc}>Modern, Responsive, Conversion Focused.<br/>Built for real business results.</p>
                      <Link href="/contact" className={styles.webBtn} style={{textDecoration: 'none'}}>Start Your Project <ArrowRight size={12} /></Link>
                    </div>

                    <div className={styles.webRight}>
                      {/* Floating Mockup Area */}
                      <div className={styles.mockupRig}>
                        {/* Desktop Monitor */}
                        <div className={styles.desktopMonitor}>
                          <div className={styles.desktopScreen}>
                            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop" alt="Interior Design" />
                            <div className={styles.desktopOverlay}>
                              <div className={styles.desktopNav}>
                                <span>Furnix</span>
                                <div>Home Products Projects</div>
                              </div>
                              <div className={styles.desktopHero}>
                                <h1>Transform<br/>Ideas Into<br/>Impact</h1>
                                <button>View Project</button>
                              </div>
                            </div>
                          </div>
                          <div className={styles.desktopStand}></div>
                          <div className={styles.desktopBase}></div>
                        </div>

                        {/* Mobile Phone */}
                        <div className={styles.mobilePhone}>
                          <div className={styles.mobileScreen}>
                            <div className={styles.mobileTopBar}>
                              <div className={styles.mobileNotch}></div>
                              <div className={styles.mobileStatus}>
                                <span>9:41</span>
                                <div className={styles.mobileIcons}>
                                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
                                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="7" width="20" height="10" rx="2" ry="2"></rect></svg>
                                </div>
                              </div>
                            </div>
                            <div className={styles.mobileNav}>
                              <span>&larr; Furnix</span>
                              <div className={styles.mobileNavIcons}>
                                <Search size={8} />
                                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                              </div>
                            </div>
                            <div className={styles.mobileImageArea}>
                              <img src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=200&h=200&fit=crop" alt="Grey Chair" />
                            </div>
                            <div className={styles.mobileContentArea}>
                              <h2>Timeless<br/>Design<br/><span style={{fontWeight: 500, fontSize: '8px', color: '#64748b'}}>Modern Living</span></h2>
                              <button>Shop Now &rarr;</button>
                            </div>
                          </div>
                        </div>

                        {/* Floating Cards - Left (Tool Stack) */}
                        <div className={styles.webToolStack}>
                          <div className={styles.webToolCard}>
                            <svg width="18" height="18" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M19 28.5C24.2467 28.5 28.5 24.2467 28.5 19C28.5 13.7533 24.2467 9.5 19 9.5L9.5 9.5L9.5 28.5L19 28.5Z" fill="#F24E1E"/>
                              <path d="M9.5 28.5C4.25329 28.5 0 24.2467 0 19C0 13.7533 4.25329 9.5 9.5 9.5L9.5 28.5Z" fill="#FF7262"/>
                              <path d="M19 47.5C24.2467 47.5 28.5 43.2467 28.5 38C28.5 32.7533 24.2467 28.5 19 28.5L9.5 28.5L9.5 47.5L19 47.5Z" fill="#1ABCFE"/>
                              <path d="M9.5 47.5C4.25329 47.5 0 43.2467 0 38C0 32.7533 4.25329 28.5 9.5 28.5L9.5 47.5Z" fill="#0ACF83"/>
                              <path d="M19 28.5C24.2467 28.5 28.5 24.2467 28.5 19C28.5 13.7533 24.2467 9.5 19 9.5L19 28.5Z" fill="#A259FF"/>
                            </svg>
                          </div>
                          <div className={styles.webToolCard}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#007ACC">
                              <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
                            </svg>
                          </div>
                          <div className={styles.webToolCard}>
                            <svg width="24" height="24" viewBox="-11.5 -10.23174 23 20.46348" fill="#61DAFB">
                              <circle cx="0" cy="0" r="2.05"/>
                              <g stroke="#61DAFB" strokeWidth="1" fill="none">
                                <ellipse rx="11" ry="4.2"/>
                                <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                                <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                              </g>
                            </svg>
                          </div>
                          <div className={styles.webToolCard}>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="#181717">
                              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                            </svg>
                          </div>
                        </div>

                        {/* Floating Cards - Right */}
                        <div className={styles.webMetricStack}>
                          <div className={styles.webMetricCardSquare}>
                            <div className={styles.scoreRing}>98</div>
                            <span className={styles.webMetricSub}>Performance</span>
                          </div>
                          <div className={styles.webMetricCardSquare}>
                            <div style={{position: 'absolute', top: '8px', right: '8px'}}>
                              <ArrowUpRight size={14} color="#6366f1" />
                            </div>
                            <div className={styles.barChartMini}>
                              <span style={{height: '14px', background: '#6366f1'}}></span>
                              <span style={{height: '22px', background: '#4f46e5'}}></span>
                              <span style={{height: '34px', background: '#3730a3'}}></span>
                              <span style={{height: '18px', background: '#8b5cf6'}}></span>
                            </div>
                          </div>
                          <div className={styles.webMetricCardSquare}>
                            <User size={22} color="#6366f1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.webBottomBar}>
                    <div className={styles.webBottomItem}>
                      <div className={styles.webBottomIcon}><PenTool size={16} /></div>
                      <div>
                        <h4>Custom Design</h4>
                        <p>Unique designs for your brand</p>
                      </div>
                    </div>
                    <div className={styles.webBottomDivider}></div>
                    <div className={styles.webBottomItem}>
                      <div className={styles.webBottomIcon}><Smartphone size={16} /></div>
                      <div>
                        <h4>Mobile Responsive</h4>
                        <p>Perfect on every device</p>
                      </div>
                    </div>
                    <div className={styles.webBottomDivider}></div>
                    <div className={styles.webBottomItem}>
                      <div className={styles.webBottomIcon}><TrendingUp size={16} /></div>
                      <div>
                        <h4>SEO Ready</h4>
                        <p>Built for higher rankings</p>
                      </div>
                    </div>
                    <div className={styles.webBottomDivider}></div>
                    <div className={styles.webBottomItem}>
                      <div className={styles.webBottomIcon}><Target size={16} /></div>
                      <div>
                        <h4>Conversion Focused</h4>
                        <p>Turn visitors into customers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 2: SEO */}
              <div className={`${styles.slide} ${currentSlide === 1 ? styles.activeSlide : ''}`}>
                <div className={styles.slideTop}>
                  <div className={styles.brandMini}><img src="/logo.svg" alt="ZAVIROQ" style={{ height: '38px', width: 'auto', objectFit: 'contain', backgroundColor: '#0B0A14', padding: '6px 14px', borderRadius: '8px' }} /></div>
                  <div className={styles.miniNav}><span>Home</span><span>Services</span><span>Work</span><span>About</span></div>
                  <div className={styles.miniCta}>Get a Quote <ArrowRight size={10} /></div>
                </div>

                <div className={styles.seoSlideLayout}>
                  <div className={styles.gscMockup} style={{ flex: 1, height: '100%' }}>
                    <div className={styles.gscTopBar}>
                      <div className={styles.gscLogo}>
                        <div className={styles.gscHamburger}></div>
                        <span>Google Search Console</span>
                      </div>
                      <div className={styles.gscSearch}>Inspect any URL in "https://..."</div>
                      <div className={styles.gscIcons}>
                        <div className={styles.gscAvatar}>Z</div>
                      </div>
                    </div>
                    <div className={styles.gscBody} style={{ flex: 1 }}>
                      <div className={styles.gscSidebar}>
                        <div className={styles.gscNavItemActive}>Performance</div>
                        <div className={styles.gscNavItem}>URL inspection</div>
                        <div className={styles.gscNavHeader}>Indexing</div>
                        <div className={styles.gscNavItem}>Pages</div>
                        <div className={styles.gscNavItem}>Sitemaps</div>
                      </div>
                      <div className={styles.gscMain}>
                        <h3 className={styles.gscTitle}>Performance</h3>
                        <div className={styles.gscFilters}>
                          <span className={styles.gscFilterActive}>✓ 3 months</span>
                          <span className={styles.gscFilter}>Search type: Web</span>
                          <span className={styles.gscFilter}>+ Add filter</span>
                        </div>
                        <div className={styles.gscMetrics}>
                          <div className={`${styles.gscCard} ${styles.gscCardBlue}`}>
                            <div className={styles.gscCardTitle}>
                               <input type="checkbox" checked readOnly className={styles.gscCheckbox}/> Total clicks
                            </div>
                            <div className={styles.gscCardValue}>12.4K</div>
                            <div className={styles.gscCardChange}>↑ 28% vs. previous 3 months</div>
                          </div>
                          <div className={`${styles.gscCard} ${styles.gscCardPurple}`}>
                            <div className={styles.gscCardTitle}>
                               <input type="checkbox" checked readOnly className={styles.gscCheckbox}/> Total impressions
                            </div>
                            <div className={styles.gscCardValue}>328K</div>
                            <div className={styles.gscCardChange}>↑ 42% vs. previous 3 months</div>
                          </div>
                          <div className={styles.gscCard}>
                            <div className={styles.gscCardTitle}>
                               <input type="checkbox" readOnly className={styles.gscCheckboxWhite}/> Average CTR
                            </div>
                            <div className={styles.gscCardValue}>3.8%</div>
                            <div className={styles.gscCardChangeGreen}>↑ 12% vs. previous 3 months</div>
                          </div>
                          <div className={styles.gscCard}>
                            <div className={styles.gscCardTitle}>
                               <input type="checkbox" readOnly className={styles.gscCheckboxWhite}/> Average position
                            </div>
                            <div className={styles.gscCardValue}>12.6</div>
                            <div className={styles.gscCardChangeGreen}>↑ 5.1 vs. previous 3 months</div>
                          </div>
                        </div>
                        
                        <div className={styles.gscChartArea}>
                           <div className={styles.gscChartLegends}>
                             <span><div className={styles.legendBlue}></div> Clicks</span>
                             <span><div className={styles.legendPurple}></div> Impressions</span>
                           </div>
                           <svg viewBox="0 0 500 150" preserveAspectRatio="none" className={styles.gscSvg}>
                             <text x="5" y="20" fontSize="8" fill="#5f6368">375</text>
                             <text x="5" y="55" fontSize="8" fill="#5f6368">250</text>
                             <text x="5" y="90" fontSize="8" fill="#5f6368">125</text>
                             <text x="5" y="125" fontSize="8" fill="#5f6368">0</text>
                             <text x="480" y="20" fontSize="8" fill="#5f6368">7.5K</text>
                             <text x="480" y="55" fontSize="8" fill="#5f6368">5K</text>
                             <text x="480" y="90" fontSize="8" fill="#5f6368">2.5K</text>
                             <text x="480" y="125" fontSize="8" fill="#5f6368">0</text>
                             
                             <line x1="25" y1="20" x2="475" y2="20" stroke="#f1f3f4" />
                             <line x1="25" y1="55" x2="475" y2="55" stroke="#f1f3f4" />
                             <line x1="25" y1="90" x2="475" y2="90" stroke="#f1f3f4" />
                             <line x1="25" y1="125" x2="475" y2="125" stroke="#f1f3f4" />
                             
                             <text x="35" y="140" fontSize="7" fill="#5f6368">Apr 1, 2024</text>
                             <text x="110" y="140" fontSize="7" fill="#5f6368">Apr 15, 2024</text>
                             <text x="190" y="140" fontSize="7" fill="#5f6368">Apr 29, 2024</text>
                             <text x="270" y="140" fontSize="7" fill="#5f6368">May 13, 2024</text>
                             <text x="350" y="140" fontSize="7" fill="#5f6368">May 27, 2024</text>
                             <text x="430" y="140" fontSize="7" fill="#5f6368">Jun 10, 2024</text>
                             
                             <path d="M25,120 L40,118 L55,108 L70,110 L85,105 L100,108 L115,102 L130,95 L145,98 L160,95 L175,98 L190,88 L205,92 L220,85 L235,88 L250,82 L265,80 L280,85 L295,78 L310,82 L325,75 L340,78 L355,68 L370,72 L385,65 L400,68 L415,58 L430,62 L445,55 L460,58 L475,45" fill="none" stroke="#8e24aa" strokeWidth="1.5" />
                             <path d="M25,125 L40,123 L55,115 L70,118 L85,112 L100,115 L115,110 L130,105 L145,108 L160,102 L175,105 L190,98 L205,102 L220,95 L235,98 L250,92 L265,95 L280,100 L295,95 L310,98 L325,90 L340,92 L355,85 L370,88 L385,80 L400,82 L415,75 L430,78 L445,70 L460,72 L475,60" fill="none" stroke="#1a73e8" strokeWidth="1.5" />
                           </svg>
                        </div>
                        <div className={styles.gscTable}>
                           <div className={styles.gscTableTabs}>
                             <span className={styles.gscTableTabActive}>QUERIES</span>
                             <span>PAGES</span>
                             <span>COUNTRIES</span>
                             <span>DEVICES</span>
                             <span>SEARCH APPEARANCE</span>
                             <span>DATES</span>
                           </div>
                           <div className={styles.gscTableHead}>
                             <span>Top queries</span>
                             <span className={styles.gscHeadBlue}>↓ Clicks</span>
                             <span className={styles.gscHeadPurple}>Impressions</span>
                           </div>
                           <div className={styles.gscTableRow}>
                             <span>website design</span>
                             <span className={styles.gscNumBlue}>1,248</span>
                             <span className={styles.gscNumPurple}>18,523</span>
                           </div>
                           <div className={styles.gscTableRow}>
                             <span>digital marketing</span>
                             <span className={styles.gscNumBlue}>987</span>
                             <span className={styles.gscNumPurple}>12,436</span>
                           </div>
                           <div className={styles.gscTableRow}>
                             <span>seo services</span>
                             <span className={styles.gscNumBlue}>854</span>
                             <span className={styles.gscNumPurple}>9,721</span>
                           </div>
                           <div className={styles.gscTableRow}>
                             <span>web development</span>
                             <span className={styles.gscNumBlue}>679</span>
                             <span className={styles.gscNumPurple}>8,904</span>
                           </div>
                           <div className={styles.gscTableRow}>
                             <span>branding</span>
                             <span className={styles.gscNumBlue}>523</span>
                             <span className={styles.gscNumPurple}>7,892</span>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 3: Brand / Graphic Design */}
              <div className={`${styles.slide} ${currentSlide === 2 ? styles.activeSlide : ''}`} style={{padding: 0, display: 'flex', background: '#F8F9FA'}}>
                
                {/* GD Sidebar */}
                <div className={styles.gdSidebar}>
                  <div className={styles.gdLogoWrapper} style={{display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 'bold', fontSize: '11px', color: '#111'}}>
                    <div style={{background: '#4f46e5', color: '#fff', width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold'}}>Z</div> ZAVIROQ
                  </div>
                  <div className={styles.gdNav}>
                    <div className={`${styles.gdNavItem} ${styles.gdNavActive}`}>
                      <LayoutGrid size={10} /> Projects
                    </div>
                    <div className={styles.gdNavItem}><Image size={10} /> Templates</div>
                    <div className={styles.gdNavItem}><Layers size={10} /> Brand Kit</div>
                    <div className={styles.gdNavItem}><Type size={10} /> Elements</div>
                    <div className={styles.gdNavItem}><Search size={10} /> Inspiration</div>
                    <div className={styles.gdNavItem}><Bookmark size={10} /> Saved</div>
                    <div className={styles.gdNavItem}><Settings size={10} /> Settings</div>
                  </div>
                  <div className={styles.gdBanner}>
                    <div className={styles.gdBannerIcon}><TrendingUp size={10} /></div>
                    Great designs<br/>build<br/>stronger<br/>brands.
                  </div>
                </div>

                {/* GD Main Content */}
                <div className={styles.gdMain}>
                  
                  {/* Top Bar */}
                  <div className={styles.gdTopBar}>
                    <div className={styles.gdSearch}>
                      <Search size={10} /> Search creative designs...
                    </div>
                    <div className={styles.gdTabs}>
                      <span className={styles.gdTabActive}>All</span>
                      <span>Social Media</span>
                      <span>Branding</span>
                      <span>Ads</span>
                      <span>Print</span>
                      <span style={{display: 'flex', alignItems: 'center', gap: '2px'}}>More <span style={{fontSize: '6px', paddingTop: '2px'}}>▼</span></span>
                    </div>
                    <div className={styles.gdTopIcons}>
                      <div className={styles.gdBell}>
                        <Bell size={10} />
                        <span className={styles.gdDot}></span>
                      </div>
                      <div className={styles.gdAvatar}>
                        <img src="https://ui-avatars.com/api/?name=Zaviroq&background=111&color=fff" alt="Avatar" />
                      </div>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className={styles.gdContentArea}>
                    
                    {/* Top 3 Large Graphics */}
                    <div className={styles.gdGalleryTop}>
                      <div className={styles.gdImgCard}>
                        <img src="/assets/images/graphic1.png" alt="Creative Graphic 1" />
                      </div>
                      <div className={styles.gdImgCard}>
                        <img src="/assets/images/graphic2.png" alt="Creative Graphic 2" />
                      </div>
                      <div className={styles.gdImgCard}>
                        <img src="/assets/images/graphic3.png" alt="Creative Graphic 3" />
                        <div className={styles.gdImgOverlayIcon}>
                           <Play size={16} fill="#111" color="#111"/>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Category/Sub-project Cards */}
                    <div className={styles.gdGalleryBottom}>
                       <div className={styles.gdBottomCard} style={{padding: 0, background: 'transparent', boxShadow: 'none'}}>
                          <img src="/assets/images/card1.png" alt="Card 1" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
                       </div>
                       <div className={styles.gdBottomCard} style={{padding: 0, background: 'transparent', boxShadow: 'none'}}>
                          <img src="/assets/images/card2.png" alt="Card 2" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
                       </div>
                       <div className={styles.gdBottomCard} style={{padding: 0, background: 'transparent', boxShadow: 'none'}}>
                          <img src="/assets/images/card3.png" alt="Card 3" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
                       </div>
                       <div className={styles.gdBottomCard} style={{padding: 0, background: 'transparent', boxShadow: 'none'}}>
                          <img src="/assets/images/card4.png" alt="Card 4" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
                       </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 4: Ads */}
              <div className={`${styles.slide} ${currentSlide === 3 ? styles.activeSlide : ''}`} style={{padding: 0, display: 'flex', background: '#f1f3f4'}}>
                
                {/* GAds Slim Sidebar */}
                <div className={styles.gadsSidebarSlim}>
                  <div className={styles.gadsCreateBtn}><Plus size={10} color="#1a73e8" /> <span>Create</span></div>
                  <div className={styles.gadsIconBtn}><Trophy size={10} /> <span>Goals</span></div>
                  <div className={styles.gadsIconBtn}><Wrench size={10} /> <span>Tools</span></div>
                  <div className={styles.gadsIconBtn}><CreditCard size={10} /> <span>Billing</span></div>
                  <div className={styles.gadsIconBtn} style={{marginTop: 'auto'}}><Settings size={10} /> <span>Admin</span></div>
                </div>

                {/* GAds Wide Sidebar */}
                <div className={styles.gadsSidebarWide}>
                  <div className={styles.gadsLogo}>
                    <svg viewBox="0 0 24 24" style={{height: '14px', width: '14px'}}>
                      <path d="M12 2L2 22h20L12 2z" fill="#fbbc04"/>
                      <path d="M22 22L12 2 2 22h10z" fill="#34a853"/>
                      <path d="M12 2l10 20H22L12 2z" fill="#4285f4"/>
                    </svg>
                    Google Ads
                  </div>
                  <ul className={styles.gadsNavList}>
                    <li className={styles.gadsNavActive}>Overview</li>
                    <li>Recommendations</li>
                    <li>Insights and reports <span className={styles.gadsCaret}>▼</span></li>
                    <li>Campaigns <span className={styles.gadsCaret}>▼</span></li>
                    <li>Assets <span className={styles.gadsCaret}>▼</span></li>
                    <li>Audiences, keywords<br/>and content <span className={styles.gadsCaret}>▼</span></li>
                    <li style={{marginTop: '8px'}}>Change history</li>
                  </ul>
                </div>

                {/* GAds Main Content */}
                <div className={styles.gadsMain}>
                  <div className={styles.gadsTopBar}>
                    <div className={styles.gadsSearch}>
                      <Search size={8} /> Search for a page or campaign
                    </div>
                    <div className={styles.gadsTopIcons}>
                      <div className={styles.gadsTopBtn}><Monitor size={10} /> Appearance</div>
                      <div className={styles.gadsTopBtn}><RefreshCw size={10} /> Refresh</div>
                      <div className={styles.gadsTopBtn}><HelpCircle size={10} /> Help</div>
                      <div className={styles.gadsTopBtn} style={{position: 'relative'}}>
                        <Bell size={10} /> Notifications
                        <span className={styles.gadsDot}>3</span>
                      </div>
                      <div className={styles.gadsAvatar}>A</div>
                      <div className={styles.gadsAccountInfo}>
                        All campaigns<br/><span>In this account ▼</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.gadsContent}>
                    <div className={styles.gadsHeader}>
                      <div className={styles.gadsTitle}>Overview</div>
                      <div className={styles.gadsDateControl}>
                        <span><Bookmark size={8} style={{marginRight: '2px'}}/> Last 30 days</span>
                        <div className={styles.gadsDateBox}>May 10 - Jun 8, 2025 ▼</div>
                        <span>&lt;</span>
                        <span>&gt;</span>
                        <span className={styles.gadsLink}>Show last 30 days</span>
                      </div>
                    </div>

                    <div className={styles.gadsMetricsRow}>
                      <div className={styles.gadsMetricCard} style={{background: '#1a73e8'}}>
                        <div className={styles.gadsMetricTitle}>Impressions ▼</div>
                        <div className={styles.gadsMetricValue}>412K <span className={styles.gadsUp}>↑ 28.4%</span></div>
                      </div>
                      <div className={styles.gadsMetricCard} style={{background: '#d93025'}}>
                        <div className={styles.gadsMetricTitle}>Clicks ▼</div>
                        <div className={styles.gadsMetricValue}>18.2K <span className={styles.gadsUp}>↑ 32.7%</span></div>
                      </div>
                      <div className={styles.gadsMetricCard} style={{background: '#f9ab00', color: '#202124'}}>
                        <div className={styles.gadsMetricTitle}>Conversions ▼</div>
                        <div className={styles.gadsMetricValue}>1.38K <span className={styles.gadsUpGreen}>↑ 54.1%</span></div>
                      </div>
                      <div className={styles.gadsMetricCard} style={{background: '#1e8e3e'}}>
                        <div className={styles.gadsMetricTitle}>Cost / conv. ▼</div>
                        <div className={styles.gadsMetricValue}>₹285 <span className={styles.gadsUp}>↑ 18.6%</span></div>
                      </div>
                      <div className={styles.gadsMetricCardWhite}>
                        <div className={styles.gadsMetricTitle}>Conv. value / cost ▼</div>
                        <div className={styles.gadsMetricValue}>4.7 <span className={styles.gadsUpGreen}>↑ 62.3%</span></div>
                      </div>
                    </div>

                    <div className={styles.gadsChartCard}>
                      <svg viewBox="0 0 500 80" preserveAspectRatio="none" className={styles.gadsChartSvg}>
                         {/* Axis lines */}
                         <line x1="15" y1="10" x2="495" y2="10" stroke="#f1f3f4" />
                         <line x1="15" y1="40" x2="495" y2="40" stroke="#f1f3f4" />
                         <line x1="15" y1="70" x2="495" y2="70" stroke="#f1f3f4" />
                         <text x="0" y="12" fontSize="6" fill="#80868b">60K</text>
                         <text x="0" y="42" fontSize="6" fill="#80868b">30K</text>
                         <text x="0" y="72" fontSize="6" fill="#80868b">0</text>
                         
                         {/* Yellow Line */}
                         <path d="M15,65 L50,65 L100,60 L150,60 L200,65 L250,55 L300,50 L350,55 L400,45 L450,45 L490,48" fill="none" stroke="#f9ab00" strokeWidth="1.5" />
                         
                         {/* Red Line */}
                         <path d="M15,55 L50,50 L100,55 L150,50 L200,55 L250,45 L300,40 L350,45 L400,35 L450,25 L490,30" fill="none" stroke="#ea4335" strokeWidth="1.5" />

                         {/* Blue Line */}
                         <path d="M15,45 L50,40 L100,42 L150,35 L200,40 L250,25 L300,20 L350,25 L400,15 L450,10 L490,15" fill="none" stroke="#1a73e8" strokeWidth="1.5" />
                      </svg>
                    </div>

                    <div className={styles.gadsThreeCards}>
                       <div className={styles.gadsSmallCard}>
                          <div className={styles.gadsCardHead}><Filter size={8} color="#1a73e8"/> Conversion funnel</div>
                          <div className={styles.gadsFunnelRow}>
                             <div style={{width:'50px'}}>Impressions<br/><span>412,340</span></div>
                             <div className={styles.gadsFunnelBar}><div style={{width:'100%', background:'#4285f4'}}></div></div>
                             <div style={{width:'20px', textAlign:'right'}}>100%</div>
                          </div>
                          <div className={styles.gadsFunnelRow}>
                             <div style={{width:'50px'}}>Clicks<br/><span>18,245</span></div>
                             <div className={styles.gadsFunnelBar}><div style={{width:'20%', background:'#4285f4'}}></div></div>
                             <div style={{width:'20px', textAlign:'right'}}>4.4%</div>
                          </div>
                          <div className={styles.gadsFunnelRow}>
                             <div style={{width:'50px'}}>Add to cart<br/><span>3,892</span></div>
                             <div className={styles.gadsFunnelBar}><div style={{width:'10%', background:'#4285f4'}}></div></div>
                             <div style={{width:'20px', textAlign:'right'}}>0.9%</div>
                          </div>
                          <div className={styles.gadsFunnelRow}>
                             <div style={{width:'50px'}}>Conversions<br/><span>1,384</span></div>
                             <div className={styles.gadsFunnelBar}><div style={{width:'4%', background:'#a142f4'}}></div></div>
                             <div style={{width:'20px', textAlign:'right'}}>0.3%</div>
                          </div>
                       </div>
                       <div className={styles.gadsSmallCard} style={{alignItems: 'center'}}>
                          <div className={styles.gadsCardHead} style={{width: '100%'}}><Smartphone size={8} color="#1a73e8"/> Devices</div>
                          <div className={styles.gadsDonutArea}>
                            <div className={styles.gadsDonutContainer}>
                               <svg viewBox="0 0 32 32" className={styles.gadsDonut}>
                                  <circle r="12" cx="16" cy="16" fill="transparent" stroke="#1a73e8" strokeWidth="5" strokeDasharray="62 100" />
                                  <circle r="12" cx="16" cy="16" fill="transparent" stroke="#ea4335" strokeWidth="5" strokeDasharray="29 100" strokeDashoffset="-62" />
                                  <circle r="12" cx="16" cy="16" fill="transparent" stroke="#fbbc04" strokeWidth="5" strokeDasharray="7 100" strokeDashoffset="-91" />
                                  <circle r="12" cx="16" cy="16" fill="transparent" stroke="#34a853" strokeWidth="5" strokeDasharray="2 100" strokeDashoffset="-98" />
                               </svg>
                               <div className={styles.gadsDonutCenter}>18.2K<br/><span>Clicks</span></div>
                            </div>
                            <div className={styles.gadsLegend}>
                              <div><span style={{background:'#1a73e8'}}></span> Mobile <span>62.1%</span></div>
                              <div><span style={{background:'#ea4335'}}></span> Desktop <span>29.4%</span></div>
                              <div><span style={{background:'#fbbc04'}}></span> Tablet <span>6.8%</span></div>
                              <div><span style={{background:'#34a853'}}></span> Other <span>1.7%</span></div>
                            </div>
                          </div>
                       </div>
                       <div className={styles.gadsSmallCard}>
                          <div className={styles.gadsCardHead}><TrendingUp size={8} color="#1a73e8"/> Top performing networks</div>
                          <div className={styles.gadsNetRow}>
                             <div style={{width:'60px'}}><span style={{color:'#ea4335'}}>G</span> Google Search</div>
                             <div className={styles.gadsNetBar}><div style={{width:'48%', background:'#4285f4'}}></div></div>
                             <div style={{width:'20px', textAlign:'right'}}>48.3%</div>
                          </div>
                          <div className={styles.gadsNetRow}>
                             <div style={{width:'60px'}}><span style={{color:'#a142f4'}}>Δ</span> Performance Max</div>
                             <div className={styles.gadsNetBar}><div style={{width:'28%', background:'#a142f4'}}></div></div>
                             <div style={{width:'20px', textAlign:'right'}}>28.6%</div>
                          </div>
                          <div className={styles.gadsNetRow}>
                             <div style={{width:'60px'}}><span style={{color:'#34a853'}}>[ ]</span> Display Network</div>
                             <div className={styles.gadsNetBar}><div style={{width:'15%', background:'#34a853'}}></div></div>
                             <div style={{width:'20px', textAlign:'right'}}>15.1%</div>
                          </div>
                          <div className={styles.gadsNetRow}>
                             <div style={{width:'60px'}}><span style={{color:'#ea4335'}}>▶</span> YouTube</div>
                             <div className={styles.gadsNetBar}><div style={{width:'8%', background:'#ea4335'}}></div></div>
                             <div style={{width:'20px', textAlign:'right'}}>8.0%</div>
                          </div>
                       </div>
                    </div>

                    <div className={styles.gadsTableCard}>
                       <div className={styles.gadsTableActions}>
                          <div style={{display:'flex', alignItems:'center', gap:'4px'}}><div className={styles.gadsBlueBtn}><Plus size={6}/></div> Campaigns</div>
                          <div style={{display:'flex', gap:'8px', color:'#5f6368', alignItems:'center'}}>
                            <span style={{display:'flex', alignItems:'center', gap:'2px'}}><Search size={6}/> Search</span>
                            <span style={{display:'flex', alignItems:'center', gap:'2px'}}><Filter size={6}/> Segment</span>
                            <span style={{display:'flex', alignItems:'center', gap:'2px'}}><LayoutGrid size={6}/> Columns</span>
                            <span style={{display:'flex', alignItems:'center', gap:'2px'}}><Download size={6}/> Download</span>
                            <span style={{display:'flex', alignItems:'center', gap:'2px'}}><Maximize2 size={6}/> Expand</span>
                          </div>
                       </div>
                       <div className={styles.gadsTableHead}>
                         <div style={{width: '20px'}}></div>
                         <div style={{width: '80px'}}>Campaign</div>
                         <div style={{width: '40px'}}>Status</div>
                         <div style={{flex: 1, textAlign: 'right'}}>Impressions</div>
                         <div style={{flex: 1, textAlign: 'right'}}>Clicks</div>
                         <div style={{flex: 1, textAlign: 'right'}}>CTR</div>
                         <div style={{flex: 1, textAlign: 'right'}}>Conversions</div>
                         <div style={{flex: 1, textAlign: 'right'}}>Cost</div>
                       </div>
                       <div className={styles.gadsTableRow}>
                         <div style={{width: '20px'}}><input type="checkbox" className={styles.gadsCheckbox}/></div>
                         <div style={{width: '80px', color: '#1a73e8', display: 'flex', alignItems: 'center', gap: '4px'}}><Search size={6} color="#80868b"/> Search Campaign</div>
                         <div style={{width: '40px', color: '#1e8e3e'}}>Eligible</div>
                         <div style={{flex: 1, textAlign: 'right'}}>152,340</div>
                         <div style={{flex: 1, textAlign: 'right'}}>8,521</div>
                         <div style={{flex: 1, textAlign: 'right'}}>5.59%</div>
                         <div style={{flex: 1, textAlign: 'right'}}>620</div>
                         <div style={{flex: 1, textAlign: 'right'}}>₹52,480.32</div>
                       </div>
                       <div className={styles.gadsTableRow}>
                         <div style={{width: '20px'}}><input type="checkbox" className={styles.gadsCheckbox}/></div>
                         <div style={{width: '80px', color: '#1a73e8', display: 'flex', alignItems: 'center', gap: '4px'}}><Trophy size={6} color="#a142f4"/> Performance Max</div>
                         <div style={{width: '40px', color: '#1e8e3e'}}>Eligible</div>
                         <div style={{flex: 1, textAlign: 'right'}}>124,580</div>
                         <div style={{flex: 1, textAlign: 'right'}}>5,932</div>
                         <div style={{flex: 1, textAlign: 'right'}}>4.76%</div>
                         <div style={{flex: 1, textAlign: 'right'}}>412</div>
                         <div style={{flex: 1, textAlign: 'right'}}>₹61,230.18</div>
                       </div>
                       <div className={styles.gadsTableRow}>
                         <div style={{width: '20px'}}><input type="checkbox" className={styles.gadsCheckbox}/></div>
                         <div style={{width: '80px', color: '#1a73e8', display: 'flex', alignItems: 'center', gap: '4px'}}><Image size={6} color="#34a853"/> Display Campaign</div>
                         <div style={{width: '40px', color: '#1e8e3e'}}>Eligible</div>
                         <div style={{flex: 1, textAlign: 'right'}}>87,421</div>
                         <div style={{flex: 1, textAlign: 'right'}}>2,761</div>
                         <div style={{flex: 1, textAlign: 'right'}}>3.16%</div>
                         <div style={{flex: 1, textAlign: 'right'}}>198</div>
                         <div style={{flex: 1, textAlign: 'right'}}>₹28,947.71</div>
                       </div>
                       <div className={styles.gadsTableRow}>
                         <div style={{width: '20px'}}><input type="checkbox" className={styles.gadsCheckbox}/></div>
                         <div style={{width: '80px', color: '#1a73e8', display: 'flex', alignItems: 'center', gap: '4px'}}><Play size={6} color="#ea4335"/> YouTube Campaign</div>
                         <div style={{width: '40px', color: '#1e8e3e'}}>Eligible</div>
                         <div style={{flex: 1, textAlign: 'right'}}>47,996</div>
                         <div style={{flex: 1, textAlign: 'right'}}>1,031</div>
                         <div style={{flex: 1, textAlign: 'right'}}>2.15%</div>
                         <div style={{flex: 1, textAlign: 'right'}}>154</div>
                         <div style={{flex: 1, textAlign: 'right'}}>₹21,880.40</div>
                       </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.hinge}></div>
          <div className={styles.base}></div>
          <div className={styles.dots}>
            {[0, 1, 2, 3].map((i) => (
              <button 
                key={i}
                className={currentSlide === i ? styles.activeDot : ''}
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
