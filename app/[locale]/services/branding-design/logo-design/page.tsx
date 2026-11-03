import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const title = "Professional Logo Design Services | Zaviroq Creative Agency";
  const description = "Custom, memorable logo design and visual branding assets crafted by experienced creative designers for modern brands across India and the GCC.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: "https://www.zaviroq.com/services/branding-design/logo-design",
    },
    openGraph: {
      title,
      description,
      url: "https://www.zaviroq.com/services/branding-design/logo-design",
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
    slug: "services-branding-design-logo-design",
    metaTitle: "Logo Design | ZAVIROQ",
    metaDesc: "Expert logo design services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Logo Design, Digital Agency, Enterprise Solutions",
    title: "Logo Design",
    heroDesc: "We provide industry-leading logo design tailored to scale your enterprise aggressively and dominate your target market.",
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
