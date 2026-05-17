import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Logo Design in Dubai | Premium Agency | ZAVIROQ",
    description: "Expert logo design in dubai services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Logo Design, Dubai, Enterprise Solutions",
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "services-branding-design-logo-design-dubai",
    metaTitle: "Logo Design in Dubai | ZAVIROQ",
    metaDesc: "Expert logo design in dubai services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Logo Design, Dubai, Enterprise Solutions",
    title: "Logo Design in Dubai",
    heroDesc: "We provide industry-leading logo design in dubai tailored to scale your enterprise aggressively and dominate your target market.",
    color: "var(--primary-purple)",
    deliverables: ["Strategy & Research", "Architecture & Design", "Execution & Deployment", "Optimization & Scaling"]
  };

  return (
    <ServiceLayout 
      locale={locale} 
      service={serviceData} 
      parentPath="services/branding-design" 
      parentName="Branding Design" 
    />
  );
}
