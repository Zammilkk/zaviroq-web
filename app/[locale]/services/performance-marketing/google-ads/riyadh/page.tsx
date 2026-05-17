import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Google Ads in Riyadh | Premium Agency | ZAVIROQ",
    description: "Expert google ads in riyadh services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Google Ads, Riyadh, Enterprise Solutions",
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "services-performance-marketing-google-ads-riyadh",
    metaTitle: "Google Ads in Riyadh | ZAVIROQ",
    metaDesc: "Expert google ads in riyadh services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Google Ads, Riyadh, Enterprise Solutions",
    title: "Google Ads in Riyadh",
    heroDesc: "We provide industry-leading google ads in riyadh tailored to scale your enterprise aggressively and dominate your target market.",
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
