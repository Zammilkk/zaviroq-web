import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Web Application | Premium Agency | ZAVIROQ",
    description: "Expert web application services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Web Application, Digital Agency, Enterprise Solutions",
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "services-ecommerce-systems-web-application",
    metaTitle: "Web Application | ZAVIROQ",
    metaDesc: "Expert web application services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Web Application, Digital Agency, Enterprise Solutions",
    title: "Web Application",
    heroDesc: "We provide industry-leading web application tailored to scale your enterprise aggressively and dominate your target market.",
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
