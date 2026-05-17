import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Web Development in Riyadh | Premium Agency | ZAVIROQ",
    description: "Expert web development in riyadh services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Web Development, Riyadh, Enterprise Solutions",
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "services-web-development-riyadh",
    metaTitle: "Web Development in Riyadh | ZAVIROQ",
    metaDesc: "Expert web development in riyadh services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Web Development, Riyadh, Enterprise Solutions",
    title: "Web Development in Riyadh",
    heroDesc: "We provide industry-leading web development in riyadh tailored to scale your enterprise aggressively and dominate your target market.",
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
