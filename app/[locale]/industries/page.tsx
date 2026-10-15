import styles from './page.module.css';
import { Building2, Plane, PlusSquare, Pill, HardHat, Factory, Hotel, Cpu, ArrowRight } from 'lucide-react';

const industries = [
  { id: 1, title: 'Real Estate', icon: <Building2 size={24} />, image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop' },
  { id: 2, title: 'Travel & Tourism', icon: <Plane size={24} />, image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop' },
  { id: 3, title: 'Healthcare', icon: <PlusSquare size={24} />, image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop' },
  { id: 4, title: 'Pharmaceutical', icon: <Pill size={24} />, image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=600&auto=format&fit=crop' },
  { id: 5, title: 'Construction & Contracting', icon: <HardHat size={24} />, image: 'https://images.unsplash.com/photo-1541888081622-19e34e94119d?q=80&w=600&auto=format&fit=crop' },
  { id: 6, title: 'Industrial & Manufacturing', icon: <Factory size={24} />, image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop' },
  { id: 7, title: 'Hospitality', icon: <Hotel size={24} />, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop' },
  { id: 8, title: 'IT & Technology', icon: <Cpu size={24} />, image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop' }
];

export default async function IndustriesIndexPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroTop}>
        <div className={styles.heroTopBgLayer}></div>
        <div className={styles.heroTopContainer}>
          <div className={styles.heroEyebrow}>
            <span className={styles.eyebrowLine}></span> INDUSTRIES WE SERVE <span className={styles.eyebrowLine}></span>
          </div>
          <h1 className={styles.heroTopTitle}>
            Tailored Digital Solutions<br />
            <span className={styles.heroHighlight}>Across Every Industry</span>
          </h1>
          <p className={styles.heroTopSub}>
            We work with businesses across diverse industries, delivering customized digital solutions that drive real results.
          </p>
        </div>
      </section>

      <section className={styles.industriesSection}>
        <div className={styles.industriesGrid}>
          {industries.map(ind => (
            <div key={ind.id} className={styles.industryCard}>
              <div className={styles.cardImageWrapper}>
                <img src={ind.image} alt={ind.title} className={styles.cardImage} />
              </div>
              <div className={styles.cardBottom}>
                <div className={styles.iconBox}>{ind.icon}</div>
                <h3 className={styles.cardTitle}>{ind.title}</h3>
                <div className={styles.arrowBox}>
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
