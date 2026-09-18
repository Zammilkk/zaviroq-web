import Image from 'next/image';
import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';

export default async function BlogPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;

  const posts: any[] = [];

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

      {/* 📰 BLOG GRID */}
      <div className={styles.contentWrapper}>
        <RevealOnScroll>
          <h3 className={styles.sectionHeader}>Latest Intelligence Reports</h3>
        </RevealOnScroll>
        
        <div className={styles.grid}>
          {posts.length > 0 ? (
            posts.map((post, index) => (
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
                    <p className={styles.postDesc}>{post.excerpt}</p>
                    <span className={styles.postDate}>{post.date} • {post.readTime}</span>
                  </div>
                </a>
              </RevealOnScroll>
            ))
          ) : (
            <div style={{ color: '#A0A5B1', fontSize: '1.1rem', textAlign: 'center', width: '100%', gridColumn: '1 / -1', padding: '60px 0' }}>
              We are brewing some highly technical insights. Coming soon!
            </div>
          )}
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
