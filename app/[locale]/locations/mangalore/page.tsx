import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Digital Marketing & Web Development in Mangalore | Premium Agency | ZAVIROQ",
    description: "Expert digital marketing & web development in mangalore services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Digital Marketing & Web Development, Mangalore, Enterprise Solutions",
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "locations-mangalore",
    metaTitle: "Digital Marketing & Web Development in Mangalore | ZAVIROQ",
    metaDesc: "Expert digital marketing & web development in mangalore services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Digital Marketing & Web Development, Mangalore, Enterprise Solutions",
    title: "Digital Marketing & Web Development in Mangalore",
    heroDesc: "We provide industry-leading digital marketing & web development in mangalore tailored to scale your enterprise aggressively and dominate your target market.",
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
