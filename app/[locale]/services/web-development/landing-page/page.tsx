import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const title = "High-Converting Landing Page Design & Development | Zaviroq";
  const description = "Custom landing pages engineered for paid advertising campaigns and lead generation. Fast loading, mobile-optimized, and conversion-focused.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: "https://www.zaviroq.com/services/web-development/landing-page",
    },
    openGraph: {
      title,
      description,
      url: "https://www.zaviroq.com/services/web-development/landing-page",
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
    slug: "services-web-development-landing-page",
    metaTitle: "Landing Page | ZAVIROQ",
    metaDesc: "Expert landing page services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Landing Page, Digital Agency, Enterprise Solutions",
    title: "Landing Page",
    heroDesc: "We provide industry-leading landing page tailored to scale your enterprise aggressively and dominate your target market.",
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
