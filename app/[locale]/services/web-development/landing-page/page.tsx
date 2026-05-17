import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Landing Page | Premium Agency | ZAVIROQ",
    description: "Expert landing page services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Landing Page, Digital Agency, Enterprise Solutions",
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "services-web-development-landing-page",
    metaTitle: "Landing Page | ZAVIROQ",
    metaDesc: "Expert landing page services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Landing Page, Digital Agency, Enterprise Solutions",
    title: "Landing Page",
    heroDesc: "We provide industry-leading landing page tailored to scale your enterprise aggressively and dominate your target market.",
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
