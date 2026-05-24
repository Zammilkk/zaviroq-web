import styles from './page.module.css';
import RevealOnScroll from './RevealOnScroll';
import Link from 'next/link';
import Image from 'next/image';
import SEOSetup from '../components/SEOSetup';
import ExecutiveFAQ from '../components/ExecutiveFAQ';
import RecentIntel from '../components/RecentIntel';
import StartupOffer from '../components/StartupOffer';
import Typewriter from '../components/Typewriter';
import { Star, Globe, ShieldCheck, Layout, TrendingUp, Zap, Target, Rocket, Code, Search, BarChart, PenTool, Bot, FileText, ChevronDown } from 'lucide-react';
import Riyadh3DSkyline from '../components/Riyadh3DSkyline';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Digital Marketing Agency in Riyadh, Saudi Arabia | Zaviroq',
    description: 'Zaviroq is a leading digital marketing agency in Riyadh offering SEO, web development, Google Ads, branding, and AI-driven marketing solutions for businesses in Saudi Arabia.',
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const PARTNERS = [
    { name: "Google Ads", icon: "https://cdn.simpleicons.org/googleads/4285F4", color: "#4285F4" },
    { name: "Meta Ads", icon: "https://cdn.simpleicons.org/meta/0668E1", color: "#0668E1" },
    { name: "Google AdX", icon: "https://cdn.simpleicons.org/google/EA4335", color: "#EA4335" },
    { name: "AdSense", icon: "https://cdn.simpleicons.org/googleadsense/FBBC05", color: "#FBBC05" },
    { name: "Zoho Catalyst", icon: "https://cdn.simpleicons.org/zoho/119859", color: "#119859" },
    { name: "TikTok For Business", icon: "https://cdn.simpleicons.org/tiktok/ffffff", color: "#ffffff" },
    { name: "LinkedIn Ads", icon: "https://img.icons8.com/color/512/linkedin.png", color: "#0A66C2" },
    { name: "Microsoft Advertising", icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", color: "#00A4EF" }
  ];

  const INDUSTRIES = [
    { name: 'Real Estate', desc: 'UAE & Saudi Markets', src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
    { name: 'Healthcare', desc: 'Surgical & Aesthetic Leads', src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800' },
    { name: 'E-Commerce', desc: 'High-Volume Retail', src: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800' },
    { name: 'SaaS & Tech', desc: 'B2B Software Scaling', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
    { name: 'Finance', desc: 'Fintech & Investment', src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800' },
    { name: 'Hospitality', desc: 'Luxury Travel & Hotels', src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800' }
  ];

  return (
    <div className={styles.container}>
      <h1 className="visually-hidden">AI-Driven Digital Marketing Agency in Riyadh</h1>

      {/* 🏠 HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroLayout}>
          <div className={styles.heroLeft}>
            <RevealOnScroll yOffset={15}>
              <div className={styles.trustBadges}>
                <span><Star size={16} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'text-bottom' }} /> 3+ Years Experience</span>
                <span className={styles.hideMobile}><Globe size={16} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'text-bottom' }} /> Global Clients</span>
                <span><ShieldCheck size={16} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'text-bottom' }} /> 100% Secure Websites</span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100} yOffset={15}>
              <h2 className={styles.heroHeadline}>
                Scale Your Business with <br/><Typewriter className="gradient-text" />
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={200} yOffset={15}>
              <p className={styles.heroSubhead}>
                We build high-performing websites, run data-driven campaigns, and create powerful brand identities — all designed to generate leads, increase conversions, and scale your business.
              </p>
              <div className={styles.heroBtns}>
                <a href={`/${locale}/contact`} className={`btn-primary ${styles.heroBtnMain}`}>Get Free Strategy Call</a>
                <a href={`/${locale}/contact`} className={styles.btnSecondary}>Start Your Project</a>
              </div>
            </RevealOnScroll>
          </div>

          <div className={styles.heroRight}>
            <RevealOnScroll delay={300} yOffset={30}>
              <div className={styles.web3DConcept}>
                <div className={styles.browserWindow}>
                  <div className={styles.browserTopbar}>
                    <div className={styles.gDot} style={{ background: '#ff5f56' }}></div>
                    <div className={styles.gDot} style={{ background: '#ffbd2e' }}></div>
                    <div className={styles.gDot} style={{ background: '#27c93f' }}></div>
                    <div style={{ marginLeft: '20px', fontSize: '0.7rem', color: '#888', background: 'rgba(255,255,255,0.05)', padding: '2px 10px', borderRadius: '10px' }}>zaviroq.com</div>
                  </div>
                  <div className={styles.browserContent}>
                    <div className={styles.bSidebar}></div>
                    <div className={styles.bMain}>
                      <div className={styles.bHeader}></div>
                      <div className={styles.bGrid}>
                        <div className={styles.bCard}></div><div className={styles.bCard}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.bFloatBadge}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', marginRight: '4px' }}><Layout size={16} /></span> Next.js UI Built
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 💎 TRUST / USP SECTION */}
      <section className={styles.section}>
        <RevealOnScroll>
          <div className={styles.sectionHeader}>
            <h2>Built for Results, Not Just Design</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Every solution we create is fully customized — no reused designs, no shortcuts. 
              We focus on performance, scalability, and long-term growth by building scalable digital solutions using modern technologies and data-driven strategies.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* 📈 ADVANCED SEO SETUP (Organic Architecture) */}
      <section className={`${styles.section} ${styles.altSection}`}>
        <RevealOnScroll>
          <SEOSetup />
        </RevealOnScroll>
      </section>

      {/* 🚀 TRUST SIGNALS: TECHNOLOGY PARTNERS */}
      <div className={styles.partnersSection}>
        <div className={styles.partnerMarquee}>
          {/* Loop from 1 to 9 */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <div key={num} className={styles.partnerItem}>
              <img
                src={`/partners/${num}.webp`}
                alt={`Partner ${num}`}
                className={styles.partnerIcon}
              />
            </div>
          ))}
          {/* Duplicated for the infinite scroll animation */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <div key={`dup-${num}`} className={styles.partnerItem} aria-hidden="true">
              <img
                src={`/partners/${num}.webp`}
                alt={`Partner ${num}`}
                className={styles.partnerIcon}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 🚀 TRUST SIGNALS: TECHNOLOGY PARTNERS */}
      <div className={styles.partnersSection}>
        <div className={styles.partnerMarquee}>
          {PARTNERS.map((partner, index) => (
            <div key={index} className={styles.partnerItem}>
              <img src={partner.icon} alt={`${partner.name} logo`} className={styles.partnerIcon} />
              <div className={styles.partnerDivider}></div>
              <span className={styles.partnerDot} style={{ background: partner.color, boxShadow: `0 0 12px ${partner.color}` }}></span>
              <span className={styles.partnerText}>{partner.name}</span>
            </div>
          ))}
          {PARTNERS.map((partner, index) => (
            <div key={`dup-${index}`} className={styles.partnerItem} aria-hidden="true">
              <img src={partner.icon} alt={`${partner.name} logo`} className={styles.partnerIcon} />
              <div className={styles.partnerDivider}></div>
              <span className={styles.partnerDot} style={{ background: partner.color, boxShadow: `0 0 12px ${partner.color}` }}></span>
              <span className={styles.partnerText}>{partner.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 📊 MEASURABLE RESULTS */}
      <section className={styles.section}>
        <RevealOnScroll>
          <div className={styles.sectionHeader}>
            <h2>Focused on Measurable Results</h2>
          </div>
          <div className={styles.statsLayout}>
            <div className={styles.statBox}>
              <div className={styles.icon} style={{ fontSize: '2rem', marginBottom: '10px' }}><TrendingUp size={36} color="var(--primary-blue)" /></div>
              <h3>Increased</h3>
              <p>Website Traffic</p>
            </div>
            <div className={styles.statBox}>
              <div className={styles.icon} style={{ fontSize: '2rem', marginBottom: '10px' }}><Zap size={36} color="var(--primary-purple)" /></div>
              <h3>Higher</h3>
              <p>Conversion Rates</p>
            </div>
            <div className={styles.statBox}>
              <div className={styles.icon} style={{ fontSize: '2rem', marginBottom: '10px' }}><Target size={36} color="var(--primary-blue)" /></div>
              <h3>Better</h3>
              <p>Lead Quality</p>
            </div>
            <div className={styles.statBox}>
              <div className={styles.icon} style={{ fontSize: '2rem', marginBottom: '10px' }}><Rocket size={36} color="var(--primary-purple)" /></div>
              <h3>Scalable</h3>
              <p>Growth Systems</p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* 💼 CORE SERVICES GRID */}
      <section className={`${styles.section} ${styles.altSection}`}>
        <RevealOnScroll>
          <div className={styles.sectionHeader}>
            <div className="badge-outline">Solutions</div>
            <h2>Digital Marketing Services in Saudi Arabia</h2>
            <p>Comprehensive digital marketing solutions tailored for the Saudi market — from SEO and web development to Google Ads and AI-driven strategies.</p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <div className={styles.servicesGridModern}>
            <Link href={`/${locale}/web-design-development`} className={styles.serviceCardInteractive}>
              <div className={styles.icon}><Code size={32} color="var(--primary-blue)" /></div>
              <h3>Web Design & Development</h3>
              <p>Custom-built websites using modern technologies like WordPress, PHP, React, and Next.js — designed for speed, security, and conversions.</p>
            </Link>
            <Link href={`/${locale}/seo-services`} className={styles.serviceCardInteractive}>
              <div className={styles.icon}><Search size={32} color="var(--primary-purple)" /></div>
              <h3>SEO Services</h3>
              <p>Technical, on-page, and off-page SEO strategies that improve visibility, rankings, and organic traffic.</p>
            </Link>
            <Link href={`/${locale}/performance-marketing`} className={styles.serviceCardInteractive}>
              <div className={styles.icon}><BarChart size={32} color="var(--primary-blue)" /></div>
              <h3>Performance Marketing</h3>
              <p>Google Ads, Meta Ads, and multi-platform campaigns focused on ROI and lead generation.</p>
            </Link>
            <Link href={`/${locale}/branding-design`} className={styles.serviceCardInteractive}>
              <div className={styles.icon}><PenTool size={32} color="var(--primary-purple)" /></div>
              <h3>Branding & Graphic Design</h3>
              <p>Logo, identity, and marketing materials that build strong brand presence.</p>
            </Link>
            <Link href={`/${locale}/ai-automation`} className={styles.serviceCardInteractive}>
              <div className={styles.icon}><Bot size={32} color="var(--primary-blue)" /></div>
              <h3>AI Automation</h3>
              <p>Smart systems for lead generation, chatbots, CRM automation, and business workflows.</p>
            </Link>
            <Link href={`/${locale}/content-marketing`} className={styles.serviceCardInteractive}>
              <div className={styles.icon}><FileText size={32} color="var(--primary-purple)" /></div>
              <h3>Content Marketing</h3>
              <p>Strategic content creation and distribution that drives engagement and authority.</p>
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      {/* ✅ WHY CHOOSE ZAVIROQ */}
      <section className={`${styles.section} ${styles.altSection}`}>
        <RevealOnScroll>
          <div className={styles.sectionHeader}>
            <div className="badge-outline">Why Choose Zaviroq</div>
            <h2>Why Businesses Choose Zaviroq</h2>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <div className={styles.whyChooseGrid}>
            <div className={styles.whyChooseCard}>
              <div className={styles.icon}><Target size={32} color="var(--primary-blue)" /></div>
              <h3>ROI-Focused Strategy</h3>
              <p>We focus on business growth and lead generation.</p>
            </div>
            <div className={styles.whyChooseCard}>
              <div className={styles.icon}><Bot size={32} color="var(--primary-purple)" /></div>
              <h3>AI-Driven Marketing</h3>
              <p>Modern SEO and AI optimization strategies.</p>
            </div>
            <div className={styles.whyChooseCard}>
              <div className={styles.icon}><Zap size={32} color="var(--primary-blue)" /></div>
              <h3>Fast & Scalable Websites</h3>
              <p>Performance-optimized development solutions.</p>
            </div>
            <div className={styles.whyChooseCard}>
              <div className={styles.icon}><Globe size={32} color="var(--primary-purple)" /></div>
              <h3>Saudi Market Understanding</h3>
              <p>Localized digital strategies for Riyadh businesses.</p>
            </div>
            <div className={styles.whyChooseCard}>
              <div className={styles.icon}><BarChart size={32} color="var(--primary-blue)" /></div>
              <h3>Transparent Reporting</h3>
              <p>Clear monthly reporting and analytics.</p>
            </div>
            <div className={styles.whyChooseCard}>
              <div className={styles.icon}><ShieldCheck size={32} color="var(--primary-purple)" /></div>
              <h3>Dedicated Support</h3>
              <p>Long-term partnership and consultation.</p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* 🏢 ABOUT — Helping Saudi Businesses Grow Digitally */}
      <section className={styles.section}>
        <RevealOnScroll>
          <div className={styles.aboutLayout}>
            <div className={styles.aboutContent}>
              <div className="badge-outline">About Zaviroq</div>
              <h2>Helping Saudi Businesses Grow Digitally</h2>
              <p>
                Zaviroq is a results-driven digital marketing agency based in Riyadh, Saudi Arabia. We specialize in SEO, web development, Google Ads management, branding, and AI-driven automation. Our team combines technical expertise with deep local market knowledge to deliver scalable digital solutions that drive real business growth.
              </p>
              <p>
                From startups to established enterprises, we partner with businesses across industries including real estate, healthcare, e-commerce, and SaaS — helping them build strong digital identities and dominate their markets.
              </p>
            </div>
            <div className={styles.aboutStats}>
              <div className={styles.aboutStatBox}>
                <span className={styles.aboutStatNumber}>3+</span>
                <span className={styles.aboutStatLabel}>Years Experience</span>
              </div>
              <div className={styles.aboutStatBox}>
                <span className={styles.aboutStatNumber}>50+</span>
                <span className={styles.aboutStatLabel}>Completed Projects</span>
              </div>
              <div className={styles.aboutStatBox}>
                <span className={styles.aboutStatNumber}>10+</span>
                <span className={styles.aboutStatLabel}>Industries Served</span>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* 📝 SEO CONTENT BLOCK */}
      <section className={`${styles.section} ${styles.altSection}`}>
        <RevealOnScroll>
          <div className={styles.seoPremium}>
            <div className={styles.seoGlow}></div>
            <div className={styles.seoPremiumInner}>
              <div className={styles.seoLayout}>
                <div className={styles.seoContent}>
                  <div className={styles.seoBadge}>SEO-Optimized Content</div>
                  <h2>Leading Digital Marketing Agency in <span className={styles.gradientHeading}>Riyadh</span></h2>
                  <div className={styles.seoHighlight}>
                    <div className={styles.seoHighlightIcon}>
                      <Target size={24} />
                    </div>
                    <p>
                      We deliver end-to-end digital marketing solutions tailored for Riyadh businesses — combining SEO, web development, Google Ads, and AI-driven strategies to maximize your online growth.
                    </p>
                  </div>
                  <div className={styles.seoServiceGrid}>
                    <div className={styles.seoServiceItem}>
                      <div className={styles.seoServiceIcon}><Search size={18} /></div>
                      <div>
                        <h4>SEO Company Riyadh</h4>
                        <p>Technical SEO, on-page optimization, and local search dominance for Saudi businesses.</p>
                      </div>
                    </div>
                    <div className={styles.seoServiceItem}>
                      <div className={styles.seoServiceIcon}><Code size={18} /></div>
                      <div>
                        <h4>Web Development Riyadh</h4>
                        <p>Custom Next.js, React, and WordPress sites built for speed, security, and conversions.</p>
                      </div>
                    </div>
                    <div className={styles.seoServiceItem}>
                      <div className={styles.seoServiceIcon}><BarChart size={18} /></div>
                      <div>
                        <h4>Google Ads Saudi Arabia</h4>
                        <p>ROI-optimized search, display, shopping, and video campaigns managed by experts.</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.seoBody}>
                    <p>
                      In today&apos;s competitive digital landscape, businesses in Riyadh need more than just a website — they need a comprehensive digital strategy that drives visibility, engagement, and conversions. As a leading <strong>digital marketing agency in Riyadh</strong>, Zaviroq delivers data-driven solutions that help businesses dominate search results, attract qualified leads, and scale their operations across Saudi Arabia.
                    </p>
                    <p>
                      Our expertise spans the full spectrum of digital marketing. As a trusted <strong>SEO company in Riyadh</strong>, we implement advanced technical SEO, on-page optimization, and strategic content marketing that boosts organic rankings and drives sustainable traffic. We understand the unique search behavior of Saudi consumers and tailor our strategies to capture high-intent local searches.
                    </p>
                  </div>
                </div>
                <div className={styles.seoVisual}>
                  <Riyadh3DSkyline />
                </div>
              </div>
            </div>
            <div className={styles.seoScrollHint}>
              <ChevronDown size={16} />
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* 🚀 STARTUP IGNITION OFFER */}
      <section className={styles.section}>
        <RevealOnScroll>
          <StartupOffer locale={locale} />
        </RevealOnScroll>
      </section>

      {/* 💻 CASE STUDIES / FEATURED WORK */}
      {/* 
      <section className={styles.section}>
        <RevealOnScroll>
          <div className={styles.sectionHeader}>
            <div className="badge-outline">Elite Portfolio</div>
            <h2>Premium Strategic Works</h2>
            <p>High-performance deployments that shattered industry conversion standards.</p>
          </div>
        </RevealOnScroll>

        <div className={styles.portfolioGrid}>
          {/* PROJECT 1 */ /*}
          <RevealOnScroll delay={50} className={styles.portfolioItemLarge}>
            <div className={styles.portfolioCard}>
              <div className={styles.kpiBadge}>+400% Sales</div>
              <div className={styles.portfolioImg}>
                <Image src="/projects/1.png" alt="E-Commerce React Portal" fill unoptimized />
              </div>
              <div className={styles.portfolioOverlay}>
                <div className={styles.glassInfo}>
                  <div className={styles.tagRow}>
                    <span className={styles.tag}>Next.js</span>
                    <span className={styles.tag}>E-Commerce</span>
                  </div>
                  <h3>E-Commerce React Portal</h3>
                  <p>A full-scale architecture migration from legacy systems into a headless Next.js environment, optimizing for sub-second checkouts.</p>
                  <a href={`/${locale}/portfolio`} className="link-arrow">View Case Study ↗</a>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* PROJECT 2 */ /*}
          <RevealOnScroll delay={150} className={styles.portfolioItemLarge}>
            <div className={styles.portfolioCard}>
              <div className={styles.kpiBadge}>#1 Rankings</div>
              <div className={styles.portfolioImg}>
                <Image src="/industries/healthcare.webp" alt="Healthcare" fill className={styles.industryImg} unoptimized />
              </div>
              <div className={styles.portfolioOverlay}>
                <div className={styles.glassInfo}>
                  <div className={styles.tagRow}>
                    <span className={styles.tag}>SEO</span>
                    <span className={styles.tag}>Medical</span>
                  </div>
                  <h3>Dubai Healthcare Setup</h3>
                  <p>Dominating localized search for premium clinics.</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      */}

      {/* 🏢 INDUSTRIES SERVED (NEW) */}
      <section className={`${styles.section} ${styles.altSection}`}>
        <RevealOnScroll>
          <div className={styles.sectionHeader}>
            <div className="badge-outline">Sector Targeting</div>
            <h2>Industries We Dominate</h2>
            <p>Deploying specialized acquisition pipelines across high-ticket sectors.</p>
          </div>
        </RevealOnScroll>

        <div className={styles.industryMarqueeWrap}>
          <div className={styles.industryMarquee}>
            {INDUSTRIES.map((industry, index) => (
              <div key={index} className={styles.industryCard}>
                <Image src={industry.src} alt={industry.name} fill className={styles.industryBg} style={{ objectFit: 'cover' }} unoptimized />
                <div className={styles.industryOverlay}>
                  <h3>{industry.name}</h3>
                  <p>{industry.desc}</p>
                </div>
              </div>
            ))}
            {INDUSTRIES.map((industry, index) => (
              <div key={`dup-${index}`} className={styles.industryCard} aria-hidden="true">
                <Image src={industry.src} alt={industry.name} fill className={styles.industryBg} style={{ objectFit: 'cover' }} unoptimized />
                <div className={styles.industryOverlay}>
                  <h3>{industry.name}</h3>
                  <p>{industry.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⚙️ PROCESS SECTION */}
      <section className={`${styles.section} ${styles.altSection}`}>
        <RevealOnScroll>
          <div className={styles.sectionHeader}><h2>Our Approach to Growth</h2></div>
        </RevealOnScroll>
        <div className={styles.timelineUnique}>
          <RevealOnScroll delay={50} runOnce={false}>
            <div className={styles.tStep}>
              <div className={styles.tNum}>01</div>
              <div className={styles.tContent}>
                <h3>Strategy & Research</h3>
                <p>We analyze your business and competition to develop a data-driven strategy and an aggressive roadmap built for rapid capture.</p>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100} runOnce={false}>
            <div className={styles.tStep}>
              <div className={styles.tNum}>02</div>
              <div className={styles.tContent}>
                <h3>Design & Development</h3>
                <p>Engineering and designing your web properties to ensure premium aesthetics and loading speeds that shatter industry standards.</p>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={150} runOnce={false}>
            <div className={styles.tStep}>
              <div className={styles.tNum}>03</div>
              <div className={styles.tContent}>
                <h3>Campaign Execution</h3>
                <p>Firing targeted campaigns and scalable digital solutions aligned heavily with performance marketing and SEO strategies.</p>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200} runOnce={false}>
            <div className={styles.tStep}>
              <div className={styles.tNum}>04</div>
              <div className={styles.tContent}>
                <h3>Optimization & Scaling</h3>
                <p>Kinetic A/B testing and continuous optimization frameworks engineered to scientifically scale your funnel and grow business online.</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ⭐ TESTIMONIALS (Hidden as requested) */}
      {/* 
      <section className={styles.section}>
        <RevealOnScroll><div className={styles.sectionHeader}><h2>Client Verification & Audio Feedback</h2></div></RevealOnScroll>
        <div className={styles.grid3}>
          <RevealOnScroll delay={50}>
            <div className={styles.glassCard} style={{ justifyContent: 'space-between' }}>
              <p className={styles.quote}>&quot;The NextJS setup scaled our bookings immediately. The loading speed and UI is incredible.&quot;</p>
              <div>
                <h4 style={{ color: 'var(--primary-blue)', margin: '15px 0 10px' }}>Ahmed - Dubai Clinic</h4>
                <audio controls className={styles.audioPlayer} title="Listen to Ahmed's review">
                  <source src="/demo-audio1.mp3" type="audio/mpeg" />
                </audio>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={150}>
            <div className={styles.glassCard} style={{ justifyContent: 'space-between' }}>
              <p className={styles.quote}>&quot;Best tech team we have hired. Secure, aggressive marketing, and zero backend downtime.&quot;</p>
              <div>
                <h4 style={{ color: 'var(--primary-blue)', margin: '15px 0 10px' }}>Salim - Saudi Tech Real Estate</h4>
                <audio controls className={styles.audioPlayer} title="Listen to Salim's review">
                  <source src="/demo-audio2.mp3" type="audio/mpeg" />
                </audio>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={250}>
            <div className={styles.glassCard} style={{ justifyContent: 'space-between' }}>
              <p className={styles.quote}>&quot;Helped us scale our e-commerce operations efficiently through precise Meta Ads ROI.&quot;</p>
              <div>
                <h4 style={{ color: 'var(--primary-blue)', margin: '15px 0 10px' }}>Rahul - India Start-up</h4>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      */}

      {/* 🌍 CAPABILITY SECTION */}
      <section className={`${styles.section} ${styles.altSection}`}>
        <RevealOnScroll>
          <div className={styles.sectionHeader}>
            <h2>Built to Scale Across Markets</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
              We design systems and strategies that work across different industries, audiences, and business models — ensuring consistent performance and growth.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* 🔥 DIFFERENTIATION */}
      <section className={styles.section}>
        <RevealOnScroll>
          <div className={styles.sectionHeader}>
            <h2>What Makes Us Different</h2>
          </div>
          <div className={styles.grid3} style={{ marginTop: '2rem' }}>
            <div className={styles.glassCard}>
              <h3 style={{ color: 'var(--primary-blue)', marginBottom: '10px' }}>100% Custom-Built</h3>
              <p>No template reuse. Every solution is uniquely tailored to your brand.</p>
            </div>
            <div className={styles.glassCard}>
              <h3 style={{ color: 'var(--primary-blue)', marginBottom: '10px' }}>Data-Driven Strategies</h3>
              <p>Decisions backed by analytics for maximum ROI and lead generation.</p>
            </div>
            <div className={styles.glassCard}>
              <h3 style={{ color: 'var(--primary-blue)', marginBottom: '10px' }}>Scalable Systems</h3>
              <p>Performance-focused execution designed to grow business online seamlessly.</p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* 📰 CORE INSIGHTS & INTEL */}
      <section className={`${styles.section} ${styles.altSection}`}>
        <RevealOnScroll>
          <div className={styles.sectionHeader}>
            <h2>Recent Architecture Intel</h2>
            <p>Declassifying our proprietary growth strategies.</p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <RecentIntel locale={locale} />
        </RevealOnScroll>
      </section>

      {/* ❓ EXECUTIVE FAQ (THE ZAVIROQ PROTOCOL) */}
      <section className={`${styles.section} ${styles.altSection}`}>
        <RevealOnScroll>
          <div className={styles.sectionHeader}>
            <h2>The Zaviroq Protocol (FAQ)</h2>
            <p>Clarifying high-level execution parameters before deployment.</p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <ExecutiveFAQ />
        </RevealOnScroll>
      </section>

      {/* 📞 FINAL CTA SECTION */}
      <section className={styles.finalCta}>
        <RevealOnScroll>
          <div className={styles.finalCtaInner}>
            <h2>Ready to Grow Your Business in Saudi Arabia?</h2>
            <p style={{ color: '#A0A5B1', fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto', lineHeight: '1.6' }}>
              Let Zaviroq help you build a strong digital presence with SEO, web development, branding, and paid advertising strategies.
            </p>
            <div className={styles.heroBtns} style={{ justifyContent: 'center', margin: '30px auto 0' }}>
              <a href={`/${locale}/contact`} className={`btn-primary ${styles.heroBtnMain}`}>Book Free Consultation</a>
              <a href={`/${locale}/contact`} className={styles.btnSecondary}>Contact Us</a>
            </div>
          </div>
        </RevealOnScroll>
      </section>

    </div>
  );
}
