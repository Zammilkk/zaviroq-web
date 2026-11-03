import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const title = "SEO Services in Mangalore | Top SEO Agency | Zaviroq";
  const description = "Rank on Google with Zaviroq, the premier SEO agency in Mangalore. Proven technical SEO, local map pack rankings, and ROI-driven search optimization.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: "https://www.zaviroq.com/services/seo/mangalore",
    },
    openGraph: {
      title,
      description,
      url: "https://www.zaviroq.com/services/seo/mangalore",
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
    slug: "services-seo-mangalore",
    metaTitle: "SEO Services in Mangalore | Zaviroq",
    metaDesc: "Rank on Google with Zaviroq, the premier SEO agency in Mangalore. Proven technical SEO, local map pack rankings, and ROI-driven search optimization.",
    keywords: "SEO company in Mangalore, SEO agency in Mangalore, Local SEO Mangalore, Technical SEO Mangalore",
    title: "SEO Services in Mangalore",
    heroDesc: "Dominate local and national search rankings. We engineer technical SEO architectures, optimize Google Business Profiles, and capture high-intent commercial searches across Mangalore and Karnataka.",
    color: "var(--primary-purple)",
    deliverables: [
      "Local Map Pack & GMB Optimization",
      "Technical SEO & Core Web Vitals Audits",
      "High-Intent Regional Keyword Research",
      "On-Page Optimization & Schema Structuring",
      "High-Authority Backlinks & Digital PR",
      "Conversion Tracking & Executive Analytics",
    ],
  };

  return (
    <ServiceLayout 
      locale={locale} 
      service={serviceData} 
      parentPath="services/seo" 
      parentName="SEO" 
    />
  );
}
