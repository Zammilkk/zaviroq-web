import styles from './page.module.css';
import RevealOnScroll from './RevealOnScroll';
import Link from 'next/link';
import Image from 'next/image';
import SEOSetup from '../components/SEOSetup';
import ExecutiveFAQ from '../components/ExecutiveFAQ';
import RecentIntel from '../components/RecentIntel';
import StartupOffer from '../components/StartupOffer';

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

  return (
    <div className={styles.container}>
      <h1 className="visually-hidden">Digital Marketing Agency in UAE, Saudi & India</h1>

      {/* 🏠 HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroLayout}>
          <div className={styles.heroLeft}>
            <RevealOnScroll yOffset={15}>
              <div className={styles.trustBadges}>
                <span>✨ 3+ Years Experience</span>
                <span className={styles.hideMobile}>🌍 Global Clients</span>
                <span>🔒 100% Secure Websites</span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100} yOffset={15}>
              <h2 className={styles.heroHeadline}>
                Scale Your Business with <span className="gradient-text">Data-Driven Digital Growth</span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={200} yOffset={15}>
              <p className={styles.heroSubhead}>
                SEO, Performance Marketing & High-Performance Websites for UAE, Saudi Arabia & India.
              </p>
              <div className={styles.heroBtns}>
                <a href={`/${locale}/contact`} className={`btn-primary ${styles.heroBtnMain}`}>Get Free Strategy Call</a>
                <a href={`/${locale}/portfolio`} className={styles.btnSecondary}>View Portfolio</a>
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
                  <span>🌐</span> Next.js UI Built
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
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

      {/* 📊 TRUST SIGNALS: RESULTS / STATS */}
      <section className={styles.section}>
        <RevealOnScroll>
          <div className={styles.statsLayout}>
            <div className={styles.statBox}><h3 className={styles.counter}>100+</h3><p>Projects</p></div>
            <div className={styles.statBox}><h3 className={styles.counter}>3+</h3><p>Years Base</p></div>
            <div className={styles.statBox}><h3 className={styles.counter}>Global</h3><p>Footprint</p></div>
            <div className={styles.statBox}><h3 className={styles.counter}>98%</h3><p>Target ROI</p></div>
          </div>
        </RevealOnScroll>
      </section>

      {/* 💼 CORE SERVICES GRID (9 SECTIONS) */}
      <section className={`${styles.section} ${styles.altSection}`}>
        <RevealOnScroll>
          <div className={styles.sectionHeader}>
            <div className="badge-outline">Core Services Grid</div>
            <h2>Our Core Services</h2>
            <p>Deploying specialized arrays across marketing, web, and automation.</p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <div className={styles.servicesGridModern}>
            <Link href={`/${locale}/services/seo-mastery`} className={styles.serviceCardInteractive}>
              <div className={styles.icon}>🔍</div>
              <h3>SEO Dominance</h3>
              <p>Algorithmic SEO pipelines mapping exact buyer intent and hijacking traffic.</p>
            </Link>
            <Link href={`/${locale}/services/performance-marketing`} className={styles.serviceCardInteractive}>
              <div className={styles.icon}>📈</div>
              <h3>Performance Marketing</h3>
              <p>Aggressive Google Ads & Meta Ads optimizing for maximum ROI & pipeline.</p>
            </Link>
            <Link href={`/${locale}/services/web-development`} className={styles.serviceCardInteractive}>
              <div className={styles.icon}>💻</div>
              <h3>Next-Gen Architecture</h3>
              <p>High-speed React & Next.js deployments for maximum conversion rates.</p>
            </Link>
            <Link href={`/${locale}/services/ui-ux`} className={styles.serviceCardInteractive}>
              <div className={styles.icon}>🎨</div>
              <h3>Elite Interface Engineering</h3>
              <p>Hyper-premium interfaces leveraging spatial physics and deep psychology.</p>
            </Link>
            <Link href={`/${locale}/services/branding`} className={styles.serviceCardInteractive}>
              <div className={styles.icon}>🛡️</div>
              <h3>Global Identity Forging</h3>
              <p>Translating commercial visions into visual authority across all platforms.</p>
            </Link>
            <Link href={`/${locale}/services/tech-security`} className={styles.serviceCardInteractive}>
              <div className={styles.icon}>🔐</div>
              <h3>Security & Encryption</h3>
              <p>Armored arrays to protect lead inflows and safeguard infrastructure.</p>
            </Link>
            <Link href={`/${locale}/services`} className={styles.serviceCardInteractive} style={{ cursor: 'default' }}>
              <div className={styles.icon}>🤖</div>
              <h3>AI Automations</h3>
              <p>Automated SDR conversational agents and content pipelines using generative tech.</p>
            </Link>
            <Link href={`/${locale}/services`} className={styles.serviceCardInteractive} style={{ cursor: 'default' }}>
              <div className={styles.icon}>⚡</div>
              <h3>Conversion Optimization</h3>
              <p>Kinetic A/B testing frameworks engineered to scientifically scale your funnel.</p>
            </Link>
            <Link href={`/${locale}/services`} className={styles.serviceCardInteractive} style={{ cursor: 'default' }}>
              <div className={styles.icon}>🗄️</div>
              <h3>Database Architecture</h3>
              <p>Secure backend data lakes bridged to your frontend rendering.</p>
            </Link>
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

        <div className={styles.industriesGrid}>
          <div className={styles.industryCard}>
            <Image src="/industries/real-estate.webp" alt="Real Estate" fill className={styles.industryImg} unoptimized />
            <div className={styles.industryOverlay}>
              <h3>Real Estate</h3>
              <p>UAE &amp; Saudi Markets</p>
            </div>
          </div>

          <div className={styles.industryCard}>
            <Image src="/industries/healthcare.webp" alt="Healthcare" fill className={styles.industryImg} unoptimized />
            <div className={styles.industryOverlay}>
              <h3>Healthcare</h3>
              <p>Surgical &amp; Aesthetic Leads</p>
            </div>

          </div>

        </div>
      </section>

      {/* ⚙️ PROCESS SECTION */}
      <section className={`${styles.section} ${styles.altSection}`}>
        <RevealOnScroll>
          <div className={styles.sectionHeader}><h2>Our Execution Process</h2></div>
        </RevealOnScroll>
        <div className={styles.timelineUnique}>
          <RevealOnScroll delay={50} runOnce={false}>
            <div className={styles.tStep}>
              <div className={styles.tNum}>01</div>
              <div className={styles.tContent}>
                <h3>Deep Architecture Strategy</h3>
                <p>We analyze the strict logic inside your competition arrays and develop an aggressive roadmap built for rapid capture.</p>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100} runOnce={false}>
            <div className={styles.tStep}>
              <div className={styles.tNum}>02</div>
              <div className={styles.tContent}>
                <h3>Next-Generation Development</h3>
                <p>Engineering your web properties natively inside Next.js to ensure loading speeds shatter industry standards.</p>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={150} runOnce={false}>
            <div className={styles.tStep}>
              <div className={styles.tNum}>03</div>
              <div className={styles.tContent}>
                <h3>Market Domination Marketing</h3>
                <p>Firing targeted Google and Meta campaigns aligned heavily with semantic SEO frameworks.</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ⭐ TESTIMONIALS */}
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
            <h2>Ready to Dominate Your Industry?</h2>
            <div className={styles.heroBtns} style={{ justifyContent: 'center', margin: '30px auto 0' }}>
              <a href={`/${locale}/contact`} className={`btn-primary ${styles.heroBtnMain}`}>Book Strategy Call</a>
            </div>
          </div>
        </RevealOnScroll>
      </section>

    </div>
  );
}
