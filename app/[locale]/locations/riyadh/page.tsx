import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Digital Marketing & Web Development in Riyadh | Premium Agency | ZAVIROQ",
    description: "Expert digital marketing & web development in riyadh services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Digital Marketing & Web Development, Riyadh, Enterprise Solutions",
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "locations-riyadh",
    metaTitle: "Digital Marketing & Web Development in Riyadh | ZAVIROQ",
    metaDesc: "Expert digital marketing & web development in riyadh services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Digital Marketing & Web Development, Riyadh, Enterprise Solutions",
    title: "Digital Marketing & Web Development in Riyadh",
    heroDesc: "We provide industry-leading digital marketing & web development in riyadh tailored to scale your enterprise aggressively and dominate your target market.",
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
