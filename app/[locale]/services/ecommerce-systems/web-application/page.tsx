import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const title = "Custom Web Application Development | Full-Stack Systems | Zaviroq";
  const description = "Enterprise web application development using React, Next.js, and Node.js. Robust business logic, secure authentication, and cloud scalability.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: "https://www.zaviroq.com/services/ecommerce-systems/web-application",
    },
    openGraph: {
      title,
      description,
      url: "https://www.zaviroq.com/services/ecommerce-systems/web-application",
      siteName: "Zaviroq",
      locale: "en_IN",
      type: "website",
      images: [{ url: "https://www.zaviroq.com/og-image.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://www.zaviroq.com/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function DynamicGeneratedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const serviceData = {
    slug: "services-ecommerce-systems-web-application",
    metaTitle: "Web Application | ZAVIROQ",
    metaDesc: "Expert web application services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Web Application, Digital Agency, Enterprise Solutions",
    title: "Web Application",
    heroDesc: "We provide industry-leading web application tailored to scale your enterprise aggressively and dominate your target market.",
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
