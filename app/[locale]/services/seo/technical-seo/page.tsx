import TechnicalSEOClient from '../../../technical-seo/TechnicalSEOClient';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Technical SEO Services & Core Web Vitals Optimization | Zaviroq';
  const description = "Improve your website's search performance, site speed, crawlability, and indexing with Zaviroq. We resolve complex technical SEO and schema issues across India and the GCC.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: 'https://www.zaviroq.com/services/seo/technical-seo',
    },
    openGraph: {
      title,
      description,
      url: 'https://www.zaviroq.com/services/seo/technical-seo',
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

export default function ServicesSeoTechnicalSeoPage() {
  return <TechnicalSEOClient />;
}
