import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const title = "Corporate Company Profile Design Services | Zaviroq";
  const description = "High-impact corporate company profile design and digital brochures. Professional typography, layouts, and storytelling tailored to pitch high-ticket clients.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: "https://www.zaviroq.com/services/branding-design/company-profile",
    },
    openGraph: {
      title,
      description,
      url: "https://www.zaviroq.com/services/branding-design/company-profile",
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
    slug: "services-branding-design-company-profile",
    metaTitle: "Company Profile | ZAVIROQ",
    metaDesc: "Expert company profile services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Company Profile, Digital Agency, Enterprise Solutions",
    title: "Company Profile",
    heroDesc: "We provide industry-leading company profile tailored to scale your enterprise aggressively and dominate your target market.",
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
