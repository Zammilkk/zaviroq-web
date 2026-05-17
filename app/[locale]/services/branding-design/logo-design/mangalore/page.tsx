import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Logo Design in Mangalore | Premium Agency | ZAVIROQ",
    description: "Expert logo design in mangalore services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Logo Design, Mangalore, Enterprise Solutions",
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "services-branding-design-logo-design-mangalore",
    metaTitle: "Logo Design in Mangalore | ZAVIROQ",
    metaDesc: "Expert logo design in mangalore services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Logo Design, Mangalore, Enterprise Solutions",
    title: "Logo Design in Mangalore",
    heroDesc: "We provide industry-leading logo design in mangalore tailored to scale your enterprise aggressively and dominate your target market.",
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
