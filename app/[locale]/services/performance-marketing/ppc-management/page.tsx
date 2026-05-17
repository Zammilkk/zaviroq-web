import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Ppc Management | Premium Agency | ZAVIROQ",
    description: "Expert ppc management services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Ppc Management, Digital Agency, Enterprise Solutions",
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "services-performance-marketing-ppc-management",
    metaTitle: "Ppc Management | ZAVIROQ",
    metaDesc: "Expert ppc management services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Ppc Management, Digital Agency, Enterprise Solutions",
    title: "Ppc Management",
    heroDesc: "We provide industry-leading ppc management tailored to scale your enterprise aggressively and dominate your target market.",
    color: "var(--primary-purple)",
    deliverables: ["Strategy & Research", "Architecture & Design", "Execution & Deployment", "Optimization & Scaling"]
  };

  return (
    <ServiceLayout 
      locale={locale} 
      service={serviceData} 
      parentPath="services/performance-marketing" 
      parentName="Performance Marketing" 
    />
  );
}
