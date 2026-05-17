import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Digital Growth Solutions for Healthcare | Premium Agency | ZAVIROQ",
    description: "Expert digital growth solutions for healthcare services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Digital Growth Solutions, Healthcare, Enterprise Solutions",
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "industries-healthcare",
    metaTitle: "Digital Growth Solutions for Healthcare | ZAVIROQ",
    metaDesc: "Expert digital growth solutions for healthcare services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Digital Growth Solutions, Healthcare, Enterprise Solutions",
    title: "Digital Growth Solutions for Healthcare",
    heroDesc: "We provide industry-leading digital growth solutions for healthcare tailored to scale your enterprise aggressively and dominate your target market.",
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
