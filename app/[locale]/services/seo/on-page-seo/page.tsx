import OnPageSEOClient from '../../../on-page-seo/OnPageSEOClient';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'On-Page SEO Services in Saudi Arabia | Zaviroq',
    description: 'Improve your website rankings with Zaviroq\'s on-page SEO services in Saudi Arabia. We optimize content, keywords, meta tags, internal links, and user experience for higher Google visibility and organic traffic.',
    keywords: 'on page seo services, on page seo optimization, on page seo company, on page seo agency, content optimization seo, website seo optimization, seo content strategy, keyword optimization, meta tag optimization, internal linking seo, heading structure optimization, image seo optimization, semantic seo services, seo content optimization',
  };
}

export default function ServicesSeoOnPageSeoPage() {
  return <OnPageSEOClient />;
}
