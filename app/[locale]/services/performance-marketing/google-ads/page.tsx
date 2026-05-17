import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Google Ads | Premium Agency | ZAVIROQ",
    description: "Expert google ads services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Google Ads, Digital Agency, Enterprise Solutions",
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "services-performance-marketing-google-ads",
    metaTitle: "Google Ads | ZAVIROQ",
    metaDesc: "Expert google ads services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Google Ads, Digital Agency, Enterprise Solutions",
    title: "Google Ads",
    heroDesc: "We provide industry-leading google ads tailored to scale your enterprise aggressively and dominate your target market.",
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
