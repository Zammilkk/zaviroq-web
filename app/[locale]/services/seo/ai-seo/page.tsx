import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Ai Seo | Premium Agency | ZAVIROQ",
    description: "Expert ai seo services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Ai Seo, Digital Agency, Enterprise Solutions",
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "services-seo-ai-seo",
    metaTitle: "Ai Seo | ZAVIROQ",
    metaDesc: "Expert ai seo services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Ai Seo, Digital Agency, Enterprise Solutions",
    title: "Ai Seo",
    heroDesc: "We provide industry-leading ai seo tailored to scale your enterprise aggressively and dominate your target market.",
    color: "var(--primary-purple)",
    deliverables: ["Strategy & Research", "Architecture & Design", "Execution & Deployment", "Optimization & Scaling"]
  };

  return (
    <ServiceLayout 
      locale={locale} 
      service={serviceData} 
      parentPath="services/seo" 
      parentName="Seo" 
    />
  );
}
