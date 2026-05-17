import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Agency Seo in Dubai | Premium Agency | ZAVIROQ",
    description: "Expert agency seo in dubai services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Agency Seo, Dubai, Enterprise Solutions",
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "services-agency-seo-dubai",
    metaTitle: "Agency Seo in Dubai | ZAVIROQ",
    metaDesc: "Expert agency seo in dubai services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Agency Seo, Dubai, Enterprise Solutions",
    title: "Agency Seo in Dubai",
    heroDesc: "We provide industry-leading agency seo in dubai tailored to scale your enterprise aggressively and dominate your target market.",
    color: "var(--primary-purple)",
    deliverables: ["Strategy & Research", "Architecture & Design", "Execution & Deployment", "Optimization & Scaling"]
  };

  return (
    <ServiceLayout 
      locale={locale} 
      service={serviceData} 
      parentPath="services/agency-seo" 
      parentName="Agency Seo" 
    />
  );
}
