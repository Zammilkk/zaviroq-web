import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const title = "Next.js Web Development Agency | React Server Components | Zaviroq";
  const description = "Enterprise Next.js web application development. App Router, Turbopack, React Server Components, and sub-second load times engineered for maximum performance.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: "https://www.zaviroq.com/services/web-development/nextjs-development",
    },
    openGraph: {
      title,
      description,
      url: "https://www.zaviroq.com/services/web-development/nextjs-development",
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
    slug: "services-web-development-nextjs-development",
    metaTitle: "Nextjs Development | ZAVIROQ",
    metaDesc: "Expert nextjs development services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Nextjs Development, Digital Agency, Enterprise Solutions",
    title: "Nextjs Development",
    heroDesc: "We provide industry-leading nextjs development tailored to scale your enterprise aggressively and dominate your target market.",
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
