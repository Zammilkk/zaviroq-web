import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Tiktok Ads | Premium Agency | ZAVIROQ",
    description: "Expert tiktok ads services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Tiktok Ads, Digital Agency, Enterprise Solutions",
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "services-performance-marketing-tiktok-ads",
    metaTitle: "Tiktok Ads | ZAVIROQ",
    metaDesc: "Expert tiktok ads services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Tiktok Ads, Digital Agency, Enterprise Solutions",
    title: "Tiktok Ads",
    heroDesc: "We provide industry-leading tiktok ads tailored to scale your enterprise aggressively and dominate your target market.",
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
