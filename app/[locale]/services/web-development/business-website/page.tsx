import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Business Website | Premium Agency | ZAVIROQ",
    description: "Expert business website services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Business Website, Digital Agency, Enterprise Solutions",
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "services-web-development-business-website",
    metaTitle: "Business Website | ZAVIROQ",
    metaDesc: "Expert business website services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Business Website, Digital Agency, Enterprise Solutions",
    title: "Business Website",
    heroDesc: "We provide industry-leading business website tailored to scale your enterprise aggressively and dominate your target market.",
    color: "var(--primary-purple)",
    deliverables: ["Strategy & Research", "Architecture & Design", "Execution & Deployment", "Optimization & Scaling"]
  };

  return (
    <ServiceLayout 
      locale={locale} 
      service={serviceData} 
      parentPath="services/web-development" 
      parentName="Web Development" 
    />
  );
}
