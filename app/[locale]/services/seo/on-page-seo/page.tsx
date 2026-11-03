import OnPageSEOClient from '../../../on-page-seo/OnPageSEOClient';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'On-Page SEO Services & Content Optimization | Zaviroq';
  const description = "Improve website rankings with Zaviroq's on-page SEO services. We optimize headings, semantic keywords, schema, internal links, and content quality for higher Google rankings.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: 'https://www.zaviroq.com/services/seo/on-page-seo',
    },
    openGraph: {
      title,
      description,
      url: 'https://www.zaviroq.com/services/seo/on-page-seo',
      siteName: 'Zaviroq',
      locale: 'en_IN',
      type: 'website',
      images: [{ url: 'https://www.zaviroq.com/og-image.png' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://www.zaviroq.com/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ServicesSeoOnPageSeoPage() {
  return <OnPageSEOClient />;
}
