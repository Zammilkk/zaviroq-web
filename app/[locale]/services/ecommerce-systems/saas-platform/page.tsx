import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const title = "SaaS Platform Architecture & Development | Zaviroq";
  const description = "Multi-tenant SaaS application development. Subscription billing, role-based access control, scalable API backends, and responsive dashboards.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: "https://www.zaviroq.com/services/ecommerce-systems/saas-platform",
    },
    openGraph: {
      title,
      description,
      url: "https://www.zaviroq.com/services/ecommerce-systems/saas-platform",
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
    slug: "services-ecommerce-systems-saas-platform",
    metaTitle: "Saas Platform | ZAVIROQ",
    metaDesc: "Expert saas platform services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Saas Platform, Digital Agency, Enterprise Solutions",
    title: "Saas Platform",
    heroDesc: "We provide industry-leading saas platform tailored to scale your enterprise aggressively and dominate your target market.",
    color: "var(--primary-purple)",
    deliverables: ["Strategy & Research", "Architecture & Design", "Execution & Deployment", "Optimization & Scaling"]
  };

  return (
    <ServiceLayout 
      locale={locale} 
      service={serviceData} 
      parentPath="services/ecommerce-systems" 
      parentName="Ecommerce Systems" 
    />
  );
}
