import TechnicalSEOClient from './TechnicalSEOClient';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Technical SEO Optimization Services in Saudi Arabia | Zaviroq',
    description: 'Improve your website\'s rankings, speed, crawlability, and indexing with Zaviroq\'s technical SEO optimization services in Saudi Arabia. We fix technical SEO issues that impact Google visibility and organic growth.',
    keywords: 'technical seo services, technical seo agency, technical seo optimization, technical seo company, website technical audit, core web vitals optimization, technical seo expert, seo performance optimization, crawlability optimization, website speed optimization, indexing issues seo, schema markup services, mobile seo optimization',
  };
}

export default function TechnicalSEOPage() {
  return <TechnicalSEOClient />;
}
