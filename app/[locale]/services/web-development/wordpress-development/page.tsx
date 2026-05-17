import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Wordpress Development | Premium Agency | ZAVIROQ",
    description: "Expert wordpress development services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Wordpress Development, Digital Agency, Enterprise Solutions",
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "services-web-development-wordpress-development",
    metaTitle: "Wordpress Development | ZAVIROQ",
    metaDesc: "Expert wordpress development services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Wordpress Development, Digital Agency, Enterprise Solutions",
    title: "Wordpress Development",
    heroDesc: "We provide industry-leading wordpress development tailored to scale your enterprise aggressively and dominate your target market.",
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
