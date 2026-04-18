import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ZAVIROQ AI Content Engine — Bulk SEO Content Automation',
  description:
    'Generate 100+ humanized, SEO-optimized, plagiarism-free articles in minutes using our AI-powered bulk content system with Google Sheets & internal linking automation.',
  keywords:
    'AI content generator, SEO content automation, bulk content generation tool, AI article writer, SEO content scale, automated blog content',
};

/* ── Static data ── */
const features = [
  {
    icon: '⚡',
    title: 'Bulk Content Generation',
    desc: 'Produce 100+ fully-formed SEO articles in a single automated run — no queue limits, no bottlenecks.',
    tag: 'Core Engine',
  },
  {
    icon: '✍️',
    title: 'Humanized Writing',
    desc: 'AI output trained on natural language patterns to bypass AI detectors and read like real editorial content.',
    tag: 'NLP Layer',
  },
  {
    icon: '🔍',
    title: 'SEO Optimization',
    desc: 'Auto-injects primary & LSI keywords, proper heading hierarchy, metadata and structured schema per article.',
    tag: 'On-Page SEO',
  },
  {
    icon: '🔗',
    title: 'Internal Linking Automation',
    desc: 'Maps contextual internal links across your entire content cluster — automatically, at scale.',
    tag: 'Link Architecture',
  },
  {
    icon: '🛡️',
    title: 'Plagiarism-Free Output',
    desc: 'Every article is freshly generated per keyword — zero duplication, 100% original content fingerprint.',
    tag: 'Originality',
  },
  {
    icon: '🚀',
    title: 'Instant Speed',
    desc: 'From keyword input to published-ready article in under 3 minutes. Scale without hiring more writers.',
    tag: 'Automation',
  },
];

const results = [
  { icon: '📈', num: '10×', label: 'Faster SEO Ranking', sub: 'Compared to manual content workflows' },
  { icon: '📄', num: '100+', label: 'Articles Per Run', sub: 'Humanized & ready to publish' },
  { icon: '💰', num: '80%', label: 'Cost Reduction', sub: 'vs. hiring freelance writers' },
  { icon: '🌐', num: '3×', label: 'Traffic Growth', sub: 'Average within 90 days of scaling' },
];

const usecases = [
  {
    emoji: '🏢',
    title: 'SEO Agencies',
    desc: 'Deliver 10× more content to clients without expanding your writing team.',
  },
  {
    emoji: '✍️',
    title: 'Bloggers & Creators',
    desc: 'Build authority sites at scale — topical clusters published in days, not months.',
  },
  {
    emoji: '🛒',
    title: 'E-Commerce Businesses',
    desc: 'Auto-generate product guides, category SEO pages, and buyer-intent articles.',
  },
  {
    emoji: '📍',
    title: 'Local Businesses',
    desc: 'Dominate local search with city-specific landing pages and service content at volume.',
  },
];

const whyItems = [
  {
    icon: '🏗️',
    title: 'Built In-House System',
    desc: 'No third-party tools stitched together — a single proprietary pipeline from keyword to live article.',
  },
  {
    icon: '🤝',
    title: 'SEO + AI + Automation Combined',
    desc: 'The system understands real ranking signals — not just grammar. Content is built to rank.',
  },
  {
    icon: '📊',
    title: 'Real-World Tested Strategy',
    desc: 'Deployed across live client sites in GCC & India markets with measurable traffic results.',
  },
  {
    icon: '🌍',
    title: 'Scalable for Global Markets',
    desc: 'Multilingual support — Arabic, English, Hindi — with hreflang-ready output structure.',
  },
];

const demoArticles = [
  { keyword: 'Best SEO Agency in Dubai 2025', words: '1,420', status: 'done' },
  { keyword: 'Digital Marketing for E-Commerce UAE', words: '1,380', status: 'done' },
  { keyword: 'Google Ads vs Meta Ads for Lead Gen', words: '1,560', status: 'run' },
  { keyword: 'Local SEO Services in Saudi Arabia', words: '1,290', status: 'queue' },
  { keyword: 'Next.js vs WordPress for Business Sites', words: '1,640', status: 'queue' },
];

export default async function AIContentEnginePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className={styles.page}>
      {/* ══ HERO ══ */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroGlowRight} aria-hidden="true" />
        <div className={styles.inner}>
          <div className={styles.heroGrid}>
            {/* Left */}
            <div className={styles.heroLeft}>
              <div className={styles.heroPill}>
                <span className={styles.pillDot} />
                AI Content Automation
              </div>

              <h1 className={styles.heroH1}>
                Scale SEO Content{' '}
                <span className={styles.heroH1Grad}>Like Never Before</span>{' '}
                with AI Automation
              </h1>

              <p className={styles.heroSub}>
                Generate 100+ humanized, SEO-optimized articles in minutes using our advanced AI system — powered by Google Sheets and internal linking automation.
              </p>

              <div className={styles.heroCtas}>
                <a href={`/${locale}/contact`} className={styles.btnPrimary}>
                  Book Demo ↗
                </a>
                <a href="#features" className={styles.btnGhost}>
                  Start Scaling Content
                </a>
              </div>

              <div className={styles.trustBadges}>
                <div className={styles.trustBadge}>
                  <span className={styles.trustCheck}>✓</span>
                  100+ Articles in Minutes
                </div>
                <div className={styles.trustBadge}>
                  <span className={styles.trustCheck}>✓</span>
                  SEO Optimized
                </div>
                <div className={styles.trustBadge}>
                  <span className={styles.trustCheck}>✓</span>
                  Plagiarism-Free
                </div>
              </div>
            </div>

            {/* Right — Mock Dashboard */}
            <div className={styles.heroRight}>
              <div className={styles.dashMock}>
                {/* Chrome */}
                <div className={styles.dashChrome}>
                  <div className={styles.chromeBtn} />
                  <div className={styles.chromeBtn} />
                  <div className={styles.chromeBtn} />
                  <span className={styles.chromeTitle}>ZAVIROQ AI Content Engine — Dashboard</span>
                </div>

                {/* Body */}
                <div className={styles.dashBody}>
                  {/* Stat row */}
                  <div className={styles.dashRow}>
                    <div className={styles.dashStat}>
                      <span className={styles.dashStatVal}>142</span>
                      <span className={styles.dashStatLabel}>Articles Generated</span>
                    </div>
                    <div className={styles.dashStat}>
                      <span className={styles.dashStatVal}>97%</span>
                      <span className={styles.dashStatLabel}>Humanized Score</span>
                    </div>
                    <div className={styles.dashStat}>
                      <span className={styles.dashStatVal}>18min</span>
                      <span className={styles.dashStatLabel}>Total Time</span>
                    </div>
                  </div>

                  {/* Article rows */}
                  <div className={styles.dashArticles}>
                    {[
                      { title: 'Best SEO Agency in Dubai 2025', meta: '1,420 words · SEO Score 94', dotClass: styles.statusDone, bg: '#28c840' },
                      { title: 'Google Ads vs Meta Ads for Leads', meta: '1,560 words · Generating...', dotClass: styles.statusRun, bg: '#febc2e' },
                      { title: 'Local SEO Services Saudi Arabia', meta: '1,290 words · In queue', dotClass: styles.statusWait, bg: '#444' },
                    ].map((row, i) => (
                      <div key={i} className={styles.dashArticleRow}>
                        <div
                          className={styles.dashArticleIcon}
                          style={{ background: `${row.bg}12`, border: `1px solid ${row.bg}25` }}
                        >
                          📄
                        </div>
                        <div className={styles.dashArticleText}>
                          <div className={styles.dashArticleTitle}>{row.title}</div>
                          <div className={styles.dashArticleMeta}>{row.meta}</div>
                        </div>
                        <div className={`${styles.dashStatusDot} ${row.dotClass}`} />
                      </div>
                    ))}
                  </div>

                  {/* Progress bar */}
                  <div className={styles.dashProgress}>
                    <div className={styles.dashProgressLabel}>
                      <span>Batch Progress</span>
                      <span>72% — 103 / 142</span>
                    </div>
                    <div className={styles.dashProgressBar}>
                      <div className={styles.dashProgressFill} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROBLEM SECTION ══ */}
      <section className={`${styles.section} ${styles.problemSection}`}>
        <div className={styles.inner}>
          <div className={styles.problemGrid}>
            <div className={styles.problemLeft}>
              <span className={styles.sectionTag}>The Problem</span>
              <h2 className={styles.sectionTitle}>
                Content Creation is{' '}
                <span style={{ color: 'rgba(255,80,80,0.8)' }}>Slow & Expensive</span>
              </h2>
              <p className={styles.sectionSub}>
                Traditional content workflows are broken. Businesses spend thousands on writers who produce articles at a pace that can never match what Google demands for ranking dominance.
              </p>
              <div className={styles.problemItems}>
                {[
                  { icon: '⏰', title: 'Takes Hours or Days', desc: 'One article from brief to publish can take 3–5 hours of human labor minimum.' },
                  { icon: '💸', title: 'Expensive Writers', desc: 'Quality freelance writers charge $50–$200 per article — scaling to 100 articles costs $5,000–$20,000.' },
                  { icon: '📉', title: 'Hard to Scale SEO', desc: 'Without volume, topical authority is impossible. You need hundreds of articles to dominate a niche.' },
                ].map((item, i) => (
                  <div key={i} className={styles.problemItem}>
                    <div className={styles.problemIcon}>{item.icon}</div>
                    <div className={styles.problemItemText}>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.problemRight}>
              {[
                { icon: '⏱️', title: 'Manual Writing Speed', sub: 'Industry avg per article', stat: '4hrs' },
                { icon: '💰', title: 'Cost Per Article', sub: 'Quality freelance writers', stat: '$120' },
                { icon: '📊', title: 'Articles Needed to Rank', sub: 'For competitive niches', stat: '200+' },
              ].map((card, i) => (
                <div key={i} className={styles.problemCard}>
                  <div className={styles.problemCardIcon}>{card.icon}</div>
                  <div>
                    <div className={styles.problemCardTitle}>{card.title}</div>
                    <div className={styles.problemCardSub}>{card.sub}</div>
                  </div>
                  <div className={styles.problemCardStat}>{card.stat}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SOLUTION / FLOW ══ */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionCenter}>
            <span className={styles.sectionTag}>The Solution</span>
            <h2 className={styles.sectionTitle}>Our AI Content Engine</h2>
            <p className={styles.sectionSub}>
              A three-step automated pipeline that replaces your entire content writing workflow — from keyword input to published-ready article.
            </p>
          </div>

          <div className={styles.flowWrap}>
            {[
              {
                num: '01',
                icon: '📋',
                title: 'Input Keywords via Google Sheet',
                desc: 'Paste your target keywords into our pre-built Google Sheet template. Add internal linking targets, target URLs, and tone instructions.',
              },
              {
                num: '02',
                icon: '🔗',
                title: 'Set Internal Linking Rules',
                desc: 'Define your site architecture. The engine maps anchor texts and contextual links across your entire content cluster automatically.',
              },
              {
                num: '03',
                icon: '🤖',
                title: 'AI Generates Bulk Content',
                desc: 'Click run. Our system generates fully-formed, humanized, SEO-structured articles — 100+ pieces in under 20 minutes.',
              },
            ].map((step, i) => (
              <div key={i} className={styles.flowStep}>
                <div className={styles.flowNum}>{step.num}</div>
                <div className={styles.flowCard}>
                  <div className={styles.flowCardIcon}>{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURES ══ */}
      <section id="features" className={`${styles.section} ${styles.resultsBg}`}>
        <div className={styles.inner}>
          <div className={styles.sectionCenter}>
            <span className={styles.sectionTag}>Capabilities</span>
            <h2 className={styles.sectionTitle}>Everything You Need to Scale</h2>
            <p className={styles.sectionSub}>
              Six battle-tested modules engineered for maximum output with zero manual bottleneck.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {features.map((f, i) => (
              <div key={i} className={styles.featureCard}>
                <div className={styles.featureIconWrap}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <span className={styles.featureTag}>{f.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ RESULTS ══ */}
      <section id="results" className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionCenter}>
            <span className={styles.sectionTag}>What You Achieve</span>
            <h2 className={styles.sectionTitle}>Measurable Results at Scale</h2>
            <p className={styles.sectionSub}>
              Real outcomes reported by clients after deploying the AI Content Engine across their content strategy.
            </p>
          </div>

          <div className={styles.resultsGrid}>
            {results.map((r, i) => (
              <div key={i} className={styles.resultCard}>
                <div className={styles.resultIcon}>{r.icon}</div>
                <div className={styles.resultNum}>{r.num}</div>
                <div className={styles.resultLabel}>{r.label}</div>
                <div className={styles.resultSub}>{r.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ USE CASES ══ */}
      <section id="usecases" className={`${styles.section} ${styles.resultsBg}`}>
        <div className={styles.inner}>
          <div className={styles.sectionCenter}>
            <span className={styles.sectionTag}>Who It&apos;s Built For</span>
            <h2 className={styles.sectionTitle}>Built for Everyone Who Needs Volume</h2>
            <p className={styles.sectionSub}>
              Whether you run an agency, a blog, or a growing e-commerce brand — the engine scales to your demand.
            </p>
          </div>

          <div className={styles.usecasesGrid}>
            {usecases.map((u, i) => (
              <div key={i} className={styles.usecaseCard}>
                <div className={styles.usecaseEmoji}>{u.emoji}</div>
                <h3>{u.title}</h3>
                <p>{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY ZAVIROQ ══ */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.whyGrid}>
            <div className={styles.whyLeft}>
              <span className={styles.sectionTag}>Why ZAVIROQ AI</span>
              <h2 className={styles.sectionTitle}>
                Not Just a Tool —<br /> A Full Strategy System
              </h2>
              <p className={styles.sectionSub}>
                Unlike off-the-shelf AI writers, our engine was built with SEO strategy embedded at the architecture level.
              </p>
              <div className={styles.whyList}>
                {whyItems.map((w, i) => (
                  <div key={i} className={styles.whyItem}>
                    <div className={styles.whyItemIcon}>{w.icon}</div>
                    <div className={styles.whyItemText}>
                      <h4>{w.title}</h4>
                      <p>{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Terminal card */}
            <div className={styles.whyRight}>
              <div className={styles.terminalCard}>
                <div className={styles.termChrome}>
                  <div className={styles.termBtn} />
                  <div className={styles.termBtn} />
                  <div className={styles.termBtn} />
                  <span className={styles.termTitle}>zaviroq-ai-engine ~ content-run</span>
                </div>
                <div className={styles.termBody}>
                  <div className={styles.termLine}>
                    <span className={styles.termPrompt}>$</span>
                    <span className={styles.termCmd}>ai-engine --run batch.csv</span>
                  </div>
                  <div className={styles.termLine}>
                    <span className={styles.termOut}>✓ Loaded 147 keywords</span>
                  </div>
                  <div className={styles.termLine}>
                    <span className={styles.termOut}>✓ Internal link map built (312 links)</span>
                  </div>
                  <div className={styles.termLine}>
                    <span className={styles.termOut}>✓ SEO schema injected</span>
                  </div>
                  <div className={styles.termLine}>
                    <span className={styles.termOutDim}>→ Generating article 1/147...</span>
                  </div>
                  <div className={styles.termLine}>
                    <span className={styles.termOut}>✓ Article 1 — 1,420 words [DONE]</span>
                  </div>
                  <div className={styles.termLine}>
                    <span className={styles.termOut}>✓ Humanized: 97.3% natural score</span>
                  </div>
                  <div className={styles.termLine}>
                    <span className={styles.termOut}>✓ Plagiarism check: 0% match</span>
                  </div>
                  <div className={styles.termLine}>
                    <span className={styles.termOutDim}>→ Processing 2/147...</span>
                  </div>
                  <div className={styles.termLine}>
                    <span className={styles.termOutDim}>
                      ETA: ~17 min for full batch
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ DEMO PREVIEW ══ */}
      <section id="demo" className={`${styles.section} ${styles.resultsBg}`}>
        <div className={styles.inner}>
          <div className={styles.sectionCenter}>
            <span className={styles.sectionTag}>Live Preview</span>
            <h2 className={styles.sectionTitle}>See the Engine in Action</h2>
            <p className={styles.sectionSub}>
              Here&apos;s what a live content run looks like — keywords in, articles out.
            </p>
          </div>

          <div className={styles.demoWrap}>
            <div className={styles.demoScreen}>
              {/* Chrome */}
              <div className={styles.demoChrome}>
                <div className={styles.chromeBtn} />
                <div className={styles.chromeBtn} />
                <div className={styles.chromeBtn} />
                <div className={styles.demoChromeUrl}>
                  app.zaviroq.com / content-engine / dashboard
                </div>
              </div>

              <div className={styles.demoBody}>
                {/* Metrics */}
                <div className={styles.demoMetrics}>
                  <div className={styles.demoMetric}>
                    <div className={styles.demoMetricVal}>147</div>
                    <div className={styles.demoMetricLabel}>Keywords Loaded</div>
                  </div>
                  <div className={styles.demoMetric}>
                    <div className={styles.demoMetricVal}>103</div>
                    <div className={styles.demoMetricLabel}>Articles Done</div>
                  </div>
                  <div className={styles.demoMetric}>
                    <div className={styles.demoMetricVal}>97%</div>
                    <div className={styles.demoMetricLabel}>Human Score</div>
                  </div>
                  <div className={styles.demoMetric}>
                    <div className={styles.demoMetricVal}>14m</div>
                    <div className={styles.demoMetricLabel}>Time Elapsed</div>
                  </div>
                </div>

                {/* Table */}
                <table className={styles.demoTable}>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Keyword / Article Title</th>
                      <th>Word Count</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {demoArticles.map((row, i) => (
                      <tr key={i}>
                        <td style={{ color: '#333' }}>{String(i + 1).padStart(2, '0')}</td>
                        <td>{row.keyword}</td>
                        <td>{row.words}</td>
                        <td>
                          <span
                            className={`${styles.demoStatusTag} ${
                              row.status === 'done'
                                ? styles.statusTagDone
                                : row.status === 'run'
                                ? styles.statusTagRun
                                : styles.statusTagQueue
                            }`}
                          >
                            {row.status === 'done' ? '✓ Done' : row.status === 'run' ? '⚡ Running' : '● Queue'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <a href={`/${locale}/contact`} className={styles.demoBtn}>
              <div className={styles.playIcon}>▶</div>
              Watch Full Demo
            </a>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaGlow} aria-hidden="true" />
        <div className={styles.inner}>
          <div className={styles.finalCtaBox}>
            <p className={styles.finalCtaEye}>Ready to Scale?</p>
            <h2 className={styles.finalCtaTitle}>
              Ready to Scale Your Content Production?
            </h2>
            <p className={styles.finalCtaSub}>
              Join businesses generating hundreds of SEO articles per month — without adding a single writer to their team.
            </p>
            <div className={styles.finalCtaBtns}>
              <a href={`/${locale}/contact`} className={styles.btnPrimary}>
                Book Free Demo ↗
              </a>
              <a href={`/${locale}/contact`} className={styles.btnGhost}>
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
