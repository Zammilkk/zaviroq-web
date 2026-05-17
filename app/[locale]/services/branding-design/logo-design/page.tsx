import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Logo Design | Premium Agency | ZAVIROQ",
    description: "Expert logo design services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Logo Design, Digital Agency, Enterprise Solutions",
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "services-branding-design-logo-design",
    metaTitle: "Logo Design | ZAVIROQ",
    metaDesc: "Expert logo design services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Logo Design, Digital Agency, Enterprise Solutions",
    title: "Logo Design",
    heroDesc: "We provide industry-leading logo design tailored to scale your enterprise aggressively and dominate your target market.",
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
