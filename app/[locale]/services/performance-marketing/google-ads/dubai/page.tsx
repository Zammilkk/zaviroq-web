import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Google Ads in Dubai | Premium Agency | ZAVIROQ",
    description: "Expert google ads in dubai services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Google Ads, Dubai, Enterprise Solutions",
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "services-performance-marketing-google-ads-dubai",
    metaTitle: "Google Ads in Dubai | ZAVIROQ",
    metaDesc: "Expert google ads in dubai services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Google Ads, Dubai, Enterprise Solutions",
    title: "Google Ads in Dubai",
    heroDesc: "We provide industry-leading google ads in dubai tailored to scale your enterprise aggressively and dominate your target market.",
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
