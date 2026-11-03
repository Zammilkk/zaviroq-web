import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const title = "Google Ads Management Services | PPC Agency | Zaviroq";
  const description = "Scale revenue and inbound leads with Zaviroq's certified Google Ads management. Search, Performance Max, Display, and high-ROI conversion tracking.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: "https://www.zaviroq.com/services/performance-marketing/google-ads",
    },
    openGraph: {
      title,
      description,
      url: "https://www.zaviroq.com/services/performance-marketing/google-ads",
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
    slug: "services-performance-marketing-google-ads",
    metaTitle: "Google Ads | ZAVIROQ",
    metaDesc: "Expert google ads services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Google Ads, Digital Agency, Enterprise Solutions",
    title: "Google Ads",
    heroDesc: "We provide industry-leading google ads tailored to scale your enterprise aggressively and dominate your target market.",
    color: "var(--primary-purple)",
    deliverables: ["Strategy & Research", "Architecture & Design", "Execution & Deployment", "Optimization & Scaling"]
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
