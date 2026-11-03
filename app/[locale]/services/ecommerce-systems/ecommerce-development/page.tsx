import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const title = "E-Commerce Website Development Services | Zaviroq";
  const description = "Custom e-commerce store development built on Next.js, Shopify, and WooCommerce. Sub-second checkouts, secure payments, and high conversion rates.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: "https://www.zaviroq.com/services/ecommerce-systems/ecommerce-development",
    },
    openGraph: {
      title,
      description,
      url: "https://www.zaviroq.com/services/ecommerce-systems/ecommerce-development",
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
    slug: "services-ecommerce-systems-ecommerce-development",
    metaTitle: "Ecommerce Development | ZAVIROQ",
    metaDesc: "Expert ecommerce development services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Ecommerce Development, Digital Agency, Enterprise Solutions",
    title: "Ecommerce Development",
    heroDesc: "We provide industry-leading ecommerce development tailored to scale your enterprise aggressively and dominate your target market.",
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
