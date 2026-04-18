"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';

export default function PortfolioGrid({ locale }: { locale: string }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'web',
      categoryLabel: 'Web Development',
      title: 'Global E-Commerce Architecture',
      desc: 'Achieved a massive 400% sales increment via a headless React deployment.',
      image: '/portfolio/5.webp'
    },
    {
      id: 2,
      category: 'seo',
      categoryLabel: 'SEO & Marketing',
      title: 'Dubai Healthcare Setup',
      desc: 'Dominated local Google search rankings (#1) for 15+ clinical keywords.',
      image: '/portfolio/1.webp'
    },
    {
      id: 3,
      category: 'web',
      categoryLabel: 'Web Development',
      title: 'Saudi Real Estate Web Portal',
      desc: 'Built a highly scalable, secure luxury lead generation PHP array.',
      image: '/portfolio/4.webp'
    },
    {
      id: 4,
      category: 'design',
      categoryLabel: 'UI/UX & Branding',
      title: 'Fintech SaaS Dashboard',
      desc: 'Complete Figma UI overhaul resulting in 60% less user-bounce rate.',
      image: '/portfolio/2.webp'
    },
    {
      id: 5,
      category: 'seo',
      categoryLabel: 'SEO & Marketing',
      title: 'Indian EdTech Campaigns',
      desc: 'Aggressive Meta Ads pipeline injecting 10,000+ verified student leads.',
      image: '/portfolio/6.webp'
    },
    {
      id: 6,
      category: 'design',
      categoryLabel: 'UI/UX & Branding',
      title: 'Luxury Automotive Brand',
      desc: 'End-to-end Brand Identity mapping, business cards, and animated assets.',
      image: '/portfolio/7.webp'
    }
  ];

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Development' },
    { value: 'seo', label: 'SEO & Marketing' },
    { value: 'design', label: 'UI/UX & Branding' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className={styles.portfolioComponent}>
      
      {/* FILTER TABS */}
      <RevealOnScroll yOffset={20}>
        <div className={styles.filterTabs}>
          {filters.map(filter => (
            <button
              key={filter.value}
              className={`${styles.filterBtn} ${activeFilter === filter.value ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </RevealOnScroll>

      {/* DYNAMIC GRID */}
      <div className={styles.grid}>
        {filteredProjects.map((project, index) => (
          <RevealOnScroll key={project.id} delay={(index % 3) * 100} runOnce={false}>
            <div className={styles.portfolioCard}>
              
              {/* UPDATED IMAGE CONTAINER */}
              <div className={styles.portfolioImg}>
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={90}
                  style={{ objectFit: 'cover' }}
                />
                
                <div className={styles.imgOverlay}>
                  <a href={`/${locale}/contact`} className={styles.viewBtn}>View Blueprint ↗</a>
                </div>
              </div>

              <div className={styles.portfolioContent}>
                <span className={styles.projectCategory}>{project.categoryLabel}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.desc}</p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

    </div>
  );
}