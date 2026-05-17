import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Ecommerce Development | Premium Agency | ZAVIROQ",
    description: "Expert ecommerce development services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Ecommerce Development, Digital Agency, Enterprise Solutions",
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "services-ecommerce-systems-ecommerce-development",
    metaTitle: "Ecommerce Development | ZAVIROQ",
    metaDesc: "Expert ecommerce development services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Ecommerce Development, Digital Agency, Enterprise Solutions",
    title: "Ecommerce Development",
    heroDesc: "We provide industry-leading ecommerce development tailored to scale your enterprise aggressively and dominate your target market.",
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
