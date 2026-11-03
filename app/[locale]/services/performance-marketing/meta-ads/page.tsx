import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const title = "Meta Ads & Facebook Advertising Agency | Zaviroq";
  const description = "Target high-intent audiences on Instagram and Facebook. Advanced funnel architecture, creative testing, and high-ROAS Meta ad campaign management.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: "https://www.zaviroq.com/services/performance-marketing/meta-ads",
    },
    openGraph: {
      title,
      description,
      url: "https://www.zaviroq.com/services/performance-marketing/meta-ads",
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
    slug: "services-performance-marketing-meta-ads",
    metaTitle: "Meta Ads | ZAVIROQ",
    metaDesc: "Expert meta ads services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Meta Ads, Digital Agency, Enterprise Solutions",
    title: "Meta Ads",
    heroDesc: "We provide industry-leading meta ads tailored to scale your enterprise aggressively and dominate your target market.",
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
