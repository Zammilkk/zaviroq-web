import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Admin Dashboard | Premium Agency | ZAVIROQ",
    description: "Expert admin dashboard services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Admin Dashboard, Digital Agency, Enterprise Solutions",
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "services-ecommerce-systems-admin-dashboard",
    metaTitle: "Admin Dashboard | ZAVIROQ",
    metaDesc: "Expert admin dashboard services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Admin Dashboard, Digital Agency, Enterprise Solutions",
    title: "Admin Dashboard",
    heroDesc: "We provide industry-leading admin dashboard tailored to scale your enterprise aggressively and dominate your target market.",
    color: "var(--primary-purple)",
    deliverables: ["Strategy & Research", "Architecture & Design", "Execution & Deployment", "Optimization & Scaling"]
  };

  return (
    <ServiceLayout 
      locale={locale} 
      service={serviceData} 
      parentPath="services/ecommerce-systems" 
      parentName="Ecommerce Systems" 
    />
  );
}
