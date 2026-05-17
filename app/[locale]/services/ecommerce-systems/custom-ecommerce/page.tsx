import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Custom Ecommerce | Premium Agency | ZAVIROQ",
    description: "Expert custom ecommerce services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Custom Ecommerce, Digital Agency, Enterprise Solutions",
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "services-ecommerce-systems-custom-ecommerce",
    metaTitle: "Custom Ecommerce | ZAVIROQ",
    metaDesc: "Expert custom ecommerce services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Custom Ecommerce, Digital Agency, Enterprise Solutions",
    title: "Custom Ecommerce",
    heroDesc: "We provide industry-leading custom ecommerce tailored to scale your enterprise aggressively and dominate your target market.",
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
