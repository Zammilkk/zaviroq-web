import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const title = "Custom WordPress Website Development Company | Zaviroq";
  const description = "Custom WordPress theme development, Gutenberg blocks, and WooCommerce solutions. Lightweight, secure, and SEO-optimized for scalable business operations.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: "https://www.zaviroq.com/services/web-development/wordpress-development",
    },
    openGraph: {
      title,
      description,
      url: "https://www.zaviroq.com/services/web-development/wordpress-development",
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
    slug: "services-web-development-wordpress-development",
    metaTitle: "Wordpress Development | ZAVIROQ",
    metaDesc: "Expert wordpress development services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Wordpress Development, Digital Agency, Enterprise Solutions",
    title: "Wordpress Development",
    heroDesc: "We provide industry-leading wordpress development tailored to scale your enterprise aggressively and dominate your target market.",
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
