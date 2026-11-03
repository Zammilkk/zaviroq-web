import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const title = "Logo Design Company in Mangalore | Brand Identity | Zaviroq";
  const description = "Professional logo design and corporate branding agency in Mangalore. Custom brand identities, logos, and vector assets crafted for growing businesses.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: "https://www.zaviroq.com/services/branding-design/logo-design/mangalore",
    },
    openGraph: {
      title,
      description,
      url: "https://www.zaviroq.com/services/branding-design/logo-design/mangalore",
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
    slug: "services-branding-design-logo-design-mangalore",
    metaTitle: "Logo Design in Mangalore | ZAVIROQ",
    metaDesc: "Expert logo design in mangalore services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Logo Design, Mangalore, Enterprise Solutions",
    title: "Logo Design in Mangalore",
    heroDesc: "We provide industry-leading logo design in mangalore tailored to scale your enterprise aggressively and dominate your target market.",
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
