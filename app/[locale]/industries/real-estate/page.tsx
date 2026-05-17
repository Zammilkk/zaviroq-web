import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Digital Growth Solutions for Real Estate | Premium Agency | ZAVIROQ",
    description: "Expert digital growth solutions for real estate services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Digital Growth Solutions, Real Estate, Enterprise Solutions",
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "industries-real-estate",
    metaTitle: "Digital Growth Solutions for Real Estate | ZAVIROQ",
    metaDesc: "Expert digital growth solutions for real estate services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Digital Growth Solutions, Real Estate, Enterprise Solutions",
    title: "Digital Growth Solutions for Real Estate",
    heroDesc: "We provide industry-leading digital growth solutions for real estate tailored to scale your enterprise aggressively and dominate your target market.",
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
