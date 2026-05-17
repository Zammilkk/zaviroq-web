import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "React Development | Premium Agency | ZAVIROQ",
    description: "Expert react development services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "React Development, Digital Agency, Enterprise Solutions",
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "services-web-development-react-development",
    metaTitle: "React Development | ZAVIROQ",
    metaDesc: "Expert react development services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "React Development, Digital Agency, Enterprise Solutions",
    title: "React Development",
    heroDesc: "We provide industry-leading react development tailored to scale your enterprise aggressively and dominate your target market.",
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
