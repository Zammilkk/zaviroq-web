import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

const blogPosts: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  content: string[];
  image: string;
}> = {
  "seo-dubai-medical": {
    title: "Hijacking SEO in the Dubai Medical Sector",
    category: "Case Study",
    date: "October 15, 2026",
    readTime: "8 min read",
    author: "ZAVIROQ Tech Team",
    content: [
      "The Dubai medical sector represents one of the most competitive SEO landscapes in the GCC region. Premium clinics and hospitals are fighting for the top positions in localized search results, making traditional SEO approaches ineffective.",
      "Our approach focused on spatial keyword clusters - understanding not just what patients search for, but where they are in their buyer journey. By mapping the entire patient decision tree, from initial symptoms to final consultation booking, we created content that addresses each stage.",
      "The results were transformative: a 340% increase in organic bookings within 6 months, with average client acquisition costs dropping by 62%. This case study breaks down our exact methodology."
    ],
    image: "/blogs/zaviroq-blog.webp"
  },
  "nextjs-wordpress-saas": {
    title: "Next.js vs Classic WordPress for SaaS Platforms",
    category: "Architecture",
    date: "October 10, 2026",
    readTime: "6 min read",
    author: "ZAVIROQ Tech Team",
    content: [
      "Legacy PHP systems dominated web development for over a decade. However, as SaaS platforms require sub-second response times and seamless user experiences, the architectural limitations of WordPress have become glaringly apparent.",
      "Next.js offers React server components, edge rendering, and superior caching strategies that WordPress simply cannot match. Our analysis shows pages loading 3x faster on average with Next.js implementations.",
      "This technical deep-dive examines real-world performance metrics from our client migrations and explains why we firmly believe the future of high-conversion SaaS platforms lies in modern JavaScript frameworks."
    ],
    image: "/blogs/zaviroq-blog1.webp"
  },
  "meta-ads-2026": {
    title: "Aggressive Meta Ads Frameworks for 2026",
    category: "MarketingIntel",
    date: "October 5, 2026",
    readTime: "5 min read",
    author: "ZAVIROQ Growth Team",
    content: [
      "Meta advertising has evolved dramatically. With AI-driven audience targeting now standard, the old old manual tweaking approaches are obsolete. Success requires algorithmic bid strategies that adapt in real-time.",
      "Our framework focuses on creative iteration velocity combined with systematic audience narrowing. We deploy 50+ creative variations weekly, systematically eliminating underperformers while doubling down on winning combinations.",
      "This guide details our exact campaign structures, budget allocation strategies, and the key metrics we track to consistently achieve sub-$20 CPA in competitive UAE and Saudi real estate markets."
    ],
    image: "/blogs/zaviroq-blog2.webp"
  }
};

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <h1>Post Not Found</h1>
          <p>The requested article could not be found.</p>
          <Link href={`/${locale}/blog`} className={styles.backLink}>← Back to Journal</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.articleWrapper}>
        <Link href={`/${locale}/blog`} className={styles.backLink}>← Back to Journal</Link>
        
        <div className={styles.heroImage}>
          <Image 
            src={post.image} 
            alt={post.title}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className={styles.content}>
          <div className={styles.meta}>
            <span className={styles.category}>{post.category}</span>
            <span className={styles.dot}>•</span>
            <span className={styles.date}>{post.date}</span>
          </div>
          
          <h1 className={styles.title}>{post.title}</h1>
          
          <div className={styles.authorRow}>
            <div className={styles.authorAvatar}>Z</div>
            <div className={styles.authorInfo}>
              <strong>{post.author}</strong>
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className={styles.bodyContent}>
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}