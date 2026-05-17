import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Brand Identity | Premium Agency | ZAVIROQ",
    description: "Expert brand identity services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Brand Identity, Digital Agency, Enterprise Solutions",
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
