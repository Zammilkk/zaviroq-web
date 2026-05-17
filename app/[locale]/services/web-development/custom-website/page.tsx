import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Custom Website | Premium Agency | ZAVIROQ",
    description: "Expert custom website services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Custom Website, Digital Agency, Enterprise Solutions",
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "services-web-development-custom-website",
    metaTitle: "Custom Website | ZAVIROQ",
    metaDesc: "Expert custom website services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Custom Website, Digital Agency, Enterprise Solutions",
    title: "Custom Website",
    heroDesc: "We provide industry-leading custom website tailored to scale your enterprise aggressively and dominate your target market.",
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
