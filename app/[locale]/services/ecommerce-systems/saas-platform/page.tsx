import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Saas Platform | Premium Agency | ZAVIROQ",
    description: "Expert saas platform services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Saas Platform, Digital Agency, Enterprise Solutions",
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
