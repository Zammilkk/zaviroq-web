import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Digital Marketing & Web Development in Dubai | Premium Agency | ZAVIROQ",
    description: "Expert digital marketing & web development in dubai services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Digital Marketing & Web Development, Dubai, Enterprise Solutions",
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "locations-dubai",
    metaTitle: "Digital Marketing & Web Development in Dubai | ZAVIROQ",
    metaDesc: "Expert digital marketing & web development in dubai services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Digital Marketing & Web Development, Dubai, Enterprise Solutions",
    title: "Digital Marketing & Web Development in Dubai",
    heroDesc: "We provide industry-leading digital marketing & web development in dubai tailored to scale your enterprise aggressively and dominate your target market.",
    color: "var(--primary-purple)",
    deliverables: ["Strategy & Research", "Architecture & Design", "Execution & Deployment", "Optimization & Scaling"]
  };

  return (
    <ServiceLayout 
      locale={locale} 
      service={serviceData} 
      parentPath="services" 
      parentName="Overview" 
    />
  );
}
