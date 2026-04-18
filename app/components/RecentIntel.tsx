import styles from './HomeSections.module.css';

export default function RecentIntel({ locale }: { locale: string }) {
  const articles = [
    {
      title: "Hijacking SEO in the Dubai Medical Sector",
      excerpt: "How we leveraged spatial keyword clusters to dominate localized search intent for premium healthcare providers.",
      image: "/projects/project-1.png", // Re-using portfolio images as premium placeholders
      tag: "Case Study"
    },
    {
      title: "Next.js vs Classic WordPress for SaaS Platforms",
      excerpt: "Analyzing the architectural shift and why legacy PHP systems are failing high-traffic lead generation funnels.",
      image: "/projects/project-2.png",
      tag: "Architecture"
    },
    {
      title: "Aggressive Meta Ads Frameworks for 2026",
      excerpt: "Deploying algorithmic bid strategies to lower CPA consistently across UAE and Saudi real estate markets.",
      image: "/projects/project-3.png",
      tag: "MarketingIntel"
    }
  ];

  return (
    <div className={styles.intelGrid}>
      {articles.map((article, i) => (
        <a key={i} href={`/${locale}/blog`} style={{textDecoration: 'none'}}>
          <div className={styles.intelCard}>
            <div className={styles.intelImage}>
              <span className={styles.intelBadge}>{article.tag}</span>
              <img src={article.image} alt={article.title} />
            </div>
            <div className={styles.intelContent}>
              <h3 className={styles.intelTitle}>{article.title}</h3>
              <p className={styles.intelExcerpt}>{article.excerpt}</p>
              <div className={styles.intelLink}>Read Directive ↗</div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
