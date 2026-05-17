import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Seo in Mangalore | Premium Agency | ZAVIROQ",
    description: "Expert seo in mangalore services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Seo, Mangalore, Enterprise Solutions",
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "services-seo-mangalore",
    metaTitle: "Seo in Mangalore | ZAVIROQ",
    metaDesc: "Expert seo in mangalore services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Seo, Mangalore, Enterprise Solutions",
    title: "Seo in Mangalore",
    heroDesc: "We provide industry-leading seo in mangalore tailored to scale your enterprise aggressively and dominate your target market.",
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
