import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const title = "React.js Web Application Development Services | Zaviroq";
  const description = "High-performance React web application engineering. Interactive user interfaces, single-page applications, and modern frontend architectures.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: "https://www.zaviroq.com/services/web-development/react-development",
    },
    openGraph: {
      title,
      description,
      url: "https://www.zaviroq.com/services/web-development/react-development",
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
    slug: "services-web-development-react-development",
    metaTitle: "React Development | ZAVIROQ",
    metaDesc: "Expert react development services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "React Development, Digital Agency, Enterprise Solutions",
    title: "React Development",
    heroDesc: "We provide industry-leading react development tailored to scale your enterprise aggressively and dominate your target market.",
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
