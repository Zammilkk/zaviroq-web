import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const title = "SEO Agency in Dubai | Enterprise SEO Services UAE | Zaviroq";
  const description = "Rank on Google with Zaviroq, the premier SEO agency in Dubai. Technical SEO, Arabic & English keyword optimization, and high-ROI GCC search growth.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: "https://www.zaviroq.com/services/seo/dubai",
    },
    openGraph: {
      title,
      description,
      url: "https://www.zaviroq.com/services/seo/dubai",
      siteName: "Zaviroq",
      locale: "en_AE",
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
    slug: "services-seo-dubai",
    metaTitle: "Seo in Dubai | ZAVIROQ",
    metaDesc: "Expert seo in dubai services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Seo, Dubai, Enterprise Solutions",
    title: "Seo in Dubai",
    heroDesc: "We provide industry-leading seo in dubai tailored to scale your enterprise aggressively and dominate your target market.",
    color: "var(--primary-purple)",
    deliverables: ["Strategy & Research", "Architecture & Design", "Execution & Deployment", "Optimization & Scaling"]
  };

  return (
    <ServiceLayout 
      locale={locale} 
      service={serviceData} 
      parentPath="services/seo" 
      parentName="Seo" 
    />
  );
}
