import Image from 'next/image';
import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';

export default async function BlogPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;

  // DUMMY DATA FOR VISUALIZING PREMIUM BLOG STRUCTURE
  const featuredPost = {
    id: 1,
    category: 'Engineering Architecture',
    title: 'Next.js 15: The Future of High-Performance SSR Architecture',
    desc: 'A deep dive into how server components and edge rendering are revolutionizing conversion rates for modern SaaS and Ecommerce ecosystems across the GCC.',
    date: 'October 15, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    author: 'ZAVIROQ Tech Team'
  };

  const posts = [
    { 
      id: 2, category: 'Algorithm SEO', title: 'Why Semantic HTML Dominates Google Search Algorithms', 
      desc: 'Understanding raw tag frameworks to manipulate search intent effectively.',
      date: 'October 10, 2026', image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 3, category: 'Performance', title: 'Optimizing LCP: The Ultimate Loading Metric Checklist', 
      desc: 'How passing Core Web Vitals directly converts to ROI.',
      date: 'October 08, 2026', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 4, category: 'Meta Ads', title: 'Scaling Campaign Budgets efficiently in the UAE', 
      desc: 'Advanced lookalike targeting and tracking pixel strategies.',
      date: 'October 05, 2026', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 5, category: 'Analytics', title: 'Tracking Micro-Conversions using GA4 Arrays', 
      desc: 'Ensure no customer action goes un-calculated in your funnel.',
      date: 'September 28, 2026', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 6, category: 'UI/UX Design', title: 'Glassmorphism UI: Trust Signalling in B2B Marketing', 
      desc: 'Why premium aesthetics drastically reduce bounce rates.',
      date: 'September 22, 2026', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80' 
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.glowBg}></div>

      {/* 🚀 PREMIUM HERO */}
      <div className={styles.hero}>
        <RevealOnScroll>
          <div className={styles.badge}>Development & Marketing Intel</div>
          <h1 className={styles.title}>The <span className="gradient-text">ZAVIROQ</span> Journal</h1>
          <p className={styles.subtitle}>
            Deep technical dives, advanced marketing strategies, and architectural insights from the engineers scaling global brands.
          </p>
        </RevealOnScroll>
      </div>

      {/* ⭐ FEATURED ARTICLE */}
      <RevealOnScroll yOffset={40}>
         <div className={styles.featuredPost}>
            <div className={styles.featuredImg}>
              <Image 
                src={featuredPost.image} 
                alt={featuredPost.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.featuredContent}>
               <div className={styles.meta}>
                  <span className={styles.category}>{featuredPost.category}</span>
                  <span className={styles.dot}>•</span>
                  <span className={styles.date}>{featuredPost.date}</span>
               </div>
               <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
               <p className={styles.featuredDesc}>{featuredPost.desc}</p>
               
               <div className={styles.authorRow}>
                  <div className={styles.authorAvatar}>Z</div>
                  <div className={styles.authorInfo}>
                     <strong>{featuredPost.author}</strong>
                     <span>{featuredPost.readTime}</span>
                  </div>
                  <a href={`/${locale}/blog/${featuredPost.id}`} className={styles.readMoreBtn}>Read Article →</a>
               </div>
            </div>
         </div>
      </RevealOnScroll>

      {/* 📰 LATEST INTEL GRID */}
      <div className={styles.contentWrapper}>
         <RevealOnScroll>
            <h3 className={styles.sectionHeader}>Latest Intelligence Reports</h3>
         </RevealOnScroll>
         
         <div className={styles.grid}>
            {posts.map((post, index) => (
               <RevealOnScroll key={post.id} delay={(index % 3) * 100}>
                  <a href={`/${locale}/blog/${post.id}`} className={styles.postCard}>
                     <div className={styles.postImg}>
                        <Image 
                          src={post.image} 
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: 'cover' }}
                        />
                        <div className={styles.overlayCategory}>{post.category}</div>
                     </div>
                     <div className={styles.postContent}>
                        <h4 className={styles.postTitle}>{post.title}</h4>
                        <p className={styles.postDesc}>{post.desc}</p>
                        <span className={styles.postDate}>{post.date}</span>
                     </div>
                  </a>
               </RevealOnScroll>
            ))}
         </div>
      </div>

      {/* ✉️ NEWSLETTER CTA */}
      <RevealOnScroll>
         <div className={styles.newsletterSection}>
            <div className={styles.nlVisual}>
               <span className={styles.mailIcon}>✉️</span>
            </div>
            <div className={styles.nlContent}>
               <h2>Subscribe to the Data Stream</h2>
               <p>Get elite Next.js frameworks and scaling strategies sent directly to your encryption portal.</p>
               <form className={styles.nlForm}>
                  <input type="email" placeholder="Enter your business email..." required className={styles.nlInput} />
                  <button type="button" className={`btn-primary ${styles.nlBtn}`}>Subscribe</button>
               </form>
            </div>
         </div>
      </RevealOnScroll>

    </div>
  );
}
