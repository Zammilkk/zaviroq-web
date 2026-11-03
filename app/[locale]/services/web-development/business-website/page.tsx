import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const title = "Corporate Business Website Design & Development | Zaviroq";
  const description = "Professional corporate business websites engineered to establish authority, attract qualified inbound leads, and convert prospects into high-value clients.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: "https://www.zaviroq.com/services/web-development/business-website",
    },
    openGraph: {
      title,
      description,
      url: "https://www.zaviroq.com/services/web-development/business-website",
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
    slug: "services-web-development-business-website",
    metaTitle: "Business Website | ZAVIROQ",
    metaDesc: "Expert business website services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Business Website, Digital Agency, Enterprise Solutions",
    title: "Business Website",
    heroDesc: "We provide industry-leading business website tailored to scale your enterprise aggressively and dominate your target market.",
    color: "var(--primary-purple)",
    deliverables: ["Strategy & Research", "Architecture & Design", "Execution & Deployment", "Optimization & Scaling"]
  };

  return (
    <ServiceLayout 
      locale={locale} 
      service={serviceData} 
      parentPath="services/web-development" 
      parentName="Web Development" 
    />
  );
}
