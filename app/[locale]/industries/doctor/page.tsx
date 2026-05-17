import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Digital Growth Solutions for Doctor | Premium Agency | ZAVIROQ",
    description: "Expert digital growth solutions for doctor services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Digital Growth Solutions, Doctor, Enterprise Solutions",
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "industries-doctor",
    metaTitle: "Digital Growth Solutions for Doctor | ZAVIROQ",
    metaDesc: "Expert digital growth solutions for doctor services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Digital Growth Solutions, Doctor, Enterprise Solutions",
    title: "Digital Growth Solutions for Doctor",
    heroDesc: "We provide industry-leading digital growth solutions for doctor tailored to scale your enterprise aggressively and dominate your target market.",
    color: "var(--primary-purple)",
    deliverables: ["Strategy & Research", "Architecture & Design", "Execution & Deployment", "Optimization & Scaling"]
  };

  return (
    <ServiceLayout 
      locale={locale} 
      service={serviceData} 
      parentPath="services" 
      parentName="Overview" 
    />
  );
}
