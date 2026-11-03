import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const title = "Custom Headless E-Commerce Development | Zaviroq";
  const description = "Bespoke headless e-commerce architectures built with Next.js, Node.js, and modern APIs. Unmatched page speed, custom cart logic, and global payment gateways.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: "https://www.zaviroq.com/services/ecommerce-systems/custom-ecommerce",
    },
    openGraph: {
      title,
      description,
      url: "https://www.zaviroq.com/services/ecommerce-systems/custom-ecommerce",
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
    slug: "services-ecommerce-systems-custom-ecommerce",
    metaTitle: "Custom Ecommerce | ZAVIROQ",
    metaDesc: "Expert custom ecommerce services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Custom Ecommerce, Digital Agency, Enterprise Solutions",
    title: "Custom Ecommerce",
    heroDesc: "We provide industry-leading custom ecommerce tailored to scale your enterprise aggressively and dominate your target market.",
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
