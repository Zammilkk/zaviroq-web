import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const title = "Custom Admin Dashboard & CRM Development | Zaviroq";
  const description = "Bespoke administrative dashboards, data visualization portals, and internal operational tools engineered for real-time visibility and control.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: "https://www.zaviroq.com/services/ecommerce-systems/admin-dashboard",
    },
    openGraph: {
      title,
      description,
      url: "https://www.zaviroq.com/services/ecommerce-systems/admin-dashboard",
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
    slug: "services-ecommerce-systems-admin-dashboard",
    metaTitle: "Admin Dashboard | ZAVIROQ",
    metaDesc: "Expert admin dashboard services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Admin Dashboard, Digital Agency, Enterprise Solutions",
    title: "Admin Dashboard",
    heroDesc: "We provide industry-leading admin dashboard tailored to scale your enterprise aggressively and dominate your target market.",
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
