import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Seo in Riyadh | Premium Agency | ZAVIROQ",
    description: "Expert seo in riyadh services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Seo, Riyadh, Enterprise Solutions",
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "services-seo-riyadh",
    metaTitle: "Seo in Riyadh | ZAVIROQ",
    metaDesc: "Expert seo in riyadh services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Seo, Riyadh, Enterprise Solutions",
    title: "Seo in Riyadh",
    heroDesc: "We provide industry-leading seo in riyadh tailored to scale your enterprise aggressively and dominate your target market.",
    color: "var(--primary-purple)",
    deliverables: ["Strategy & Research", "Architecture & Design", "Execution & Deployment", "Optimization & Scaling"]
  };

  return (
    <ServiceLayout 
      locale={locale} 
      service={serviceData} 
      parentPath="services/seo" 
      parentName="Seo" 
    />
  );
}
