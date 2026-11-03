import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const title = "Corporate Brand Identity Design | Zaviroq";
  const description = "Comprehensive corporate brand identity systems. Brand guidelines, typography, color palettes, and stationery design for emerging and established enterprises.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: "https://www.zaviroq.com/services/branding-design/brand-identity",
    },
    openGraph: {
      title,
      description,
      url: "https://www.zaviroq.com/services/branding-design/brand-identity",
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
    slug: "services-branding-design-brand-identity",
    metaTitle: "Brand Identity | ZAVIROQ",
    metaDesc: "Expert brand identity services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Brand Identity, Digital Agency, Enterprise Solutions",
    title: "Brand Identity",
    heroDesc: "We provide industry-leading brand identity tailored to scale your enterprise aggressively and dominate your target market.",
    color: "var(--primary-purple)",
    deliverables: ["Strategy & Research", "Architecture & Design", "Execution & Deployment", "Optimization & Scaling"]
  };

  return (
    <ServiceLayout 
      locale={locale} 
      service={serviceData} 
      parentPath="services/branding-design" 
      parentName="Branding Design" 
    />
  );
}
