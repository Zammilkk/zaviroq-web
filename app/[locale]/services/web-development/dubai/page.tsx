import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Web Development in Dubai | Premium Agency | ZAVIROQ",
    description: "Expert web development in dubai services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Web Development, Dubai, Enterprise Solutions",
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "services-web-development-dubai",
    metaTitle: "Web Development in Dubai | ZAVIROQ",
    metaDesc: "Expert web development in dubai services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Web Development, Dubai, Enterprise Solutions",
    title: "Web Development in Dubai",
    heroDesc: "We provide industry-leading web development in dubai tailored to scale your enterprise aggressively and dominate your target market.",
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
