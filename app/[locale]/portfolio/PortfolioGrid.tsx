"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';
import { 
  LayoutGrid, Code, Layers, ShieldCheck, Megaphone, 
  Video, ArrowUpRight, CheckCircle2, X, TrendingUp,
  Globe, Clock, Award, Cpu, Sparkles
} from 'lucide-react';

export interface ProjectCardItem {
  id: string;
  projectNum: string;
  category: 'web' | 'uiux' | 'branding' | 'marketing' | 'video';
  categoryLabel: string;
  title: string;
  description: string;
  image: string;
  clientDomain: string;
  region: string;
  keyMetric: string;
  techStack: string[];
}

const PROJECTS_DATA: ProjectCardItem[] = [
  {
    id: 'project-01',
    projectNum: 'Project 01',
    category: 'web',
    categoryLabel: 'Web Development',
    title: 'Modern Living Redefined',
    description: 'A modern real estate website with smooth UI/UX and engaging visuals.',
    image: '/assets/portfolio-exact/project-01.png',
    clientDomain: 'Luxury Real Estate & Villa Developments',
    region: '🇦🇪 Dubai, UAE',
    keyMetric: '+320% Leads',
    techStack: ['Next.js 15', 'TailwindCSS', 'Framer Motion', 'TypeScript']
  },
  {
    id: 'project-02',
    projectNum: 'Project 02',
    category: 'web',
    categoryLabel: 'Web Development',
    title: 'Explore the World Travel Platform',
    description: 'A travel platform designed for seamless booking and better user experience.',
    image: '/assets/portfolio-exact/project-02.png',
    clientDomain: 'International Travel & Tour Booking',
    region: '🌐 Global & GCC',
    keyMetric: '0.36s LCP',
    techStack: ['React', 'Next.js App Router', 'Stripe API', 'PostgreSQL']
  },
  {
    id: 'project-03',
    projectNum: 'Project 03',
    category: 'web',
    categoryLabel: 'Web Development',
    title: 'Smarter Solutions for a Better Tomorrow',
    description: 'A technology company website with modern design and clear messaging.',
    image: '/assets/portfolio-exact/project-03.png',
    clientDomain: 'Enterprise Cloud & AI Solutions',
    region: '🇸🇦 Riyadh, KSA',
    keyMetric: '+180% Dwell Time',
    techStack: ['Next.js', 'Tailwind', 'Edge Functions', 'Supabase']
  },
  {
    id: 'project-04',
    projectNum: 'Project 04',
    category: 'uiux',
    categoryLabel: 'UI/UX Design',
    title: 'Luxury Stays Unforgettable',
    description: 'A hotel booking website with elegant design and easy reservations.',
    image: '/assets/portfolio-exact/project-04.png',
    clientDomain: 'Boutique Hospitality & Luxury Resorts',
    region: '🇦🇪 Abu Dhabi, UAE',
    keyMetric: '+42% Direct Bookings',
    techStack: ['Figma Design System', 'Next.js', 'Radix UI', 'CSS Modules']
  },
  {
    id: 'project-05',
    projectNum: 'Project 05',
    category: 'web',
    categoryLabel: 'Web Development',
    title: 'Your Style Our Passion',
    description: 'An e-commerce store with smooth shopping experience and modern layout.',
    image: '/assets/portfolio-exact/project-05.png',
    clientDomain: 'Skincare, Cosmetics & Beauty E-Commerce',
    region: '🇮🇳 India & GCC',
    keyMetric: '4.8x ROAS',
    techStack: ['Shopify Storefront', 'Next.js', 'TailwindCSS', 'Mada / Tabby']
  },
  {
    id: 'project-06',
    projectNum: 'Project 06',
    category: 'branding',
    categoryLabel: 'Branding',
    title: 'Innovation Builds Tomorrow',
    description: 'A corporate website with professional design and strong brand identity.',
    image: '/assets/portfolio-exact/project-06.png',
    clientDomain: 'Corporate Architecture & Investment Group',
    region: '🇦🇪 Dubai, UAE',
    keyMetric: 'Brand Identity',
    techStack: ['Brand Tokens', 'Next.js', 'Three.js', 'TypeScript']
  },
  {
    id: 'project-07',
    projectNum: 'Project 07',
    category: 'web',
    categoryLabel: 'Web Development',
    title: 'Better Care Healthier Tomorrow',
    description: 'A healthcare website with trust-focused design and easy access to services.',
    image: '/assets/portfolio-exact/project-07.png',
    clientDomain: 'Multi-Specialty Clinical Hospital',
    region: '🇦🇪 Dubai & Sharjah',
    keyMetric: '#1 Google Rank',
    techStack: ['Next.js SSR', 'Schema.org Medical', 'DHA Compliant', 'Tailwind']
  },
  {
    id: 'project-08',
    projectNum: 'Project 08',
    category: 'marketing',
    categoryLabel: 'Digital Marketing',
    title: 'Learn Today Lead Tomorrow',
    description: 'An education platform with clean design and simple navigation.',
    image: '/assets/portfolio-exact/project-08.png',
    clientDomain: 'EdTech Academy & Career Certifications',
    region: '🇮🇳 Bangalore, India',
    keyMetric: '10,000+ Enrollees',
    techStack: ['Meta CAPI', 'Next.js', 'FastAPI', 'Google Smart Bidding']
  },
  {
    id: 'project-09',
    projectNum: 'Project 09',
    category: 'video',
    categoryLabel: 'Video & Motion',
    title: 'Powering Industrial Growth',
    description: 'An industrial website with strong visuals and clear service information.',
    image: '/assets/portfolio-exact/project-09.png',
    clientDomain: 'Heavy Manufacturing & Petrochemical Supply',
    region: '🇸🇦 Eastern Province, KSA',
    keyMetric: '$18M+ Supply RFQs',
    techStack: ['Cinematic 3D', 'Next.js', 'TailwindCSS', 'B2B Portal']
  }
];

export default function PortfolioGrid({ locale }: { locale: string }) {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectCardItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects', icon: LayoutGrid },
    { id: 'web', label: 'Web Development', icon: Code },
    { id: 'uiux', label: 'UI/UX Design', icon: Layers },
    { id: 'branding', label: 'Branding', icon: ShieldCheck },
    { id: 'marketing', label: 'Digital Marketing', icon: Megaphone },
    { id: 'video', label: 'Video & Motion', icon: Video },
  ];

  const filteredProjects = useMemo(() => {
    if (activeTab === 'all') return PROJECTS_DATA;
    return PROJECTS_DATA.filter(p => p.category === activeTab);
  }, [activeTab]);

  const openModal = (proj: ProjectCardItem) => {
    setSelectedProject(proj);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  };

  return (
    <div id="projects-grid" className={styles.portfolioGridWrapper}>
      
      {/* 🏷️ HORIZONTAL CATEGORY FILTER TABS */}
      <RevealOnScroll yOffset={15} align="stretch">
        <div className={styles.filterBarContainer}>
          {filterTabs.map((tab) => {
            const IconComponent = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                className={`${styles.filterPill} ${isActive ? styles.filterPillActive : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <IconComponent size={16} className={styles.filterPillIcon} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </RevealOnScroll>

      {/* 🧊 3x3 PROJECTS GRID */}
      <div className={styles.cardsGrid}>
        {filteredProjects.map((project, index) => (
          <RevealOnScroll key={project.id} delay={(index % 3) * 60} runOnce={true} align="stretch">
            <div 
              className={styles.exactProjectCard}
              onClick={() => openModal(project)}
            >
              
              {/* Mockup Display Box */}
              <div className={styles.mockupBox}>
                <Image 
                  src={project.image}
                  alt={`${project.projectNum} - ${project.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={95}
                  className={styles.mockupImg}
                />
              </div>

              {/* Card Meta & Description */}
              <div className={styles.cardInfoBox}>
                <div className={styles.cardTitleRow}>
                  <h3 className={styles.projectNumberTitle}>{project.projectNum}</h3>
                  <button 
                    type="button"
                    className={styles.externalLinkBtn}
                    aria-label={`View ${project.projectNum}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(project);
                    }}
                  >
                    <ArrowUpRight size={15} />
                  </button>
                </div>

                <p className={styles.projectShortDesc}>
                  {project.description}
                </p>
              </div>

            </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* 🚀 QUICK BLUEPRINT MODAL */}
      {selectedProject && (
        <div 
          className={styles.modalOverlay}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className={styles.modalCloseBtn}
              onClick={closeModal}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className={styles.modalHeroBanner}>
              <Image 
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                sizes="(max-width: 900px) 100vw, 900px"
                style={{ objectFit: 'contain' }}
                className={styles.modalImg}
              />
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalTopMeta}>
                <span className={styles.modalBadge}>{selectedProject.projectNum}</span>
                <span className={styles.modalCategory}>{selectedProject.categoryLabel}</span>
                <span className={styles.modalRegion}>{selectedProject.region}</span>
              </div>

              <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
              <p className={styles.modalDesc}>{selectedProject.description}</p>

              <div className={styles.modalDetailsGrid}>
                <div className={styles.modalDetailItem}>
                  <Globe size={16} className={styles.modalIcon} />
                  <div>
                    <span className={styles.detailLabel}>Client Domain</span>
                    <strong>{selectedProject.clientDomain}</strong>
                  </div>
                </div>

                <div className={styles.modalDetailItem}>
                  <TrendingUp size={16} className={styles.modalIcon} />
                  <div>
                    <span className={styles.detailLabel}>Key Result</span>
                    <strong style={{ color: '#7c3aed' }}>{selectedProject.keyMetric}</strong>
                  </div>
                </div>
              </div>

              <div className={styles.modalTechStack}>
                <span className={styles.detailLabel}>Architecture &amp; Tools</span>
                <div className={styles.techPillRow}>
                  {selectedProject.techStack.map((tech, i) => (
                    <span key={i} className={styles.techPill}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className={styles.modalFooter}>
                <button 
                  onClick={closeModal}
                  className={styles.modalCancelBtn}
                >
                  Close
                </button>
                <Link 
                  href={`/contact?subject=${encodeURIComponent('Inquiry regarding ' + selectedProject.projectNum + ' - ' + selectedProject.title)}`}
                  className={styles.modalContactBtn}
                >
                  Start Similar Project <ArrowUpRight size={17} />
                </Link>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
