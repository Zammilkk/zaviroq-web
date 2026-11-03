import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const title = "Google Ads Agency in Mangalore | PPC Management | Zaviroq";
  const description = "Maximize ad ROI with Zaviroq, the premier Google Ads agency in Mangalore. Certified PPC specialists driving qualified inbound leads with precision targeting.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: "https://www.zaviroq.com/services/performance-marketing/google-ads/mangalore",
    },
    openGraph: {
      title,
      description,
      url: "https://www.zaviroq.com/services/performance-marketing/google-ads/mangalore",
      siteName: "Zaviroq",
      locale: "en_IN",
      type: "website",
      images: [{ url: "https://www.zaviroq.com/og-image.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://www.zaviroq.com/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "services-performance-marketing-google-ads-mangalore",
    metaTitle: "Google Ads Agency in Mangalore | Zaviroq",
    metaDesc: "Maximize ad ROI with Zaviroq, the premier Google Ads agency in Mangalore. Certified PPC specialists driving qualified inbound leads with precision targeting.",
    keywords: "Google Ads management Mangalore, PPC agency Mangalore, Paid search advertising Mangalore, Lead generation Mangalore",
    title: "Google Ads in Mangalore",
    heroDesc: "Turn search intent into revenue. We engineer high-ROAS Google Ads and pay-per-click (PPC) campaigns for Mangalore and regional enterprises, focusing on cost-per-lead optimization and high conversion rates.",
    color: "var(--primary-blue)",
    deliverables: [
      "High-Intent Search & Remarketing Campaigns",
      "Landing Page Conversion Rate Optimization",
      "Negative Keyword Sculpting & Budget Protection",
      "Server-Side Conversion & GA4 Tracking Setup",
      "Competitor Keyword Conquesting Strategies",
      "Transparent Weekly Executive ROI Dashboards",
    ],
  };

  return (
    <ServiceLayout 
      locale={locale} 
      service={serviceData} 
      parentPath="services/performance-marketing" 
      parentName="Performance Marketing" 
    />
  );
}
