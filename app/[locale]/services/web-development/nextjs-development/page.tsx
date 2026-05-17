import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Nextjs Development | Premium Agency | ZAVIROQ",
    description: "Expert nextjs development services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Nextjs Development, Digital Agency, Enterprise Solutions",
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "services-web-development-nextjs-development",
    metaTitle: "Nextjs Development | ZAVIROQ",
    metaDesc: "Expert nextjs development services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Nextjs Development, Digital Agency, Enterprise Solutions",
    title: "Nextjs Development",
    heroDesc: "We provide industry-leading nextjs development tailored to scale your enterprise aggressively and dominate your target market.",
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
