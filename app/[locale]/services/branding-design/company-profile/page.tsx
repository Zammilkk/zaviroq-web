import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Company Profile | Premium Agency | ZAVIROQ",
    description: "Expert company profile services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Company Profile, Digital Agency, Enterprise Solutions",
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "services-branding-design-company-profile",
    metaTitle: "Company Profile | ZAVIROQ",
    metaDesc: "Expert company profile services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Company Profile, Digital Agency, Enterprise Solutions",
    title: "Company Profile",
    heroDesc: "We provide industry-leading company profile tailored to scale your enterprise aggressively and dominate your target market.",
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
