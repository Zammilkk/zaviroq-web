import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const title = "Agency SEO in Mangalore | Partner SEO Agency | Zaviroq";
  const description = "White-label and enterprise agency SEO services in Mangalore. Scale client organic rankings with data-driven technical frameworks and high-authority link acquisition.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: "https://www.zaviroq.com/services/agency-seo/mangalore",
    },
    openGraph: {
      title,
      description,
      url: "https://www.zaviroq.com/services/agency-seo/mangalore",
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
    slug: "services-agency-seo-mangalore",
    metaTitle: "Agency Seo in Mangalore | ZAVIROQ",
    metaDesc: "Expert agency seo in mangalore services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Agency Seo, Mangalore, Enterprise Solutions",
    title: "Agency Seo in Mangalore",
    heroDesc: "We provide industry-leading agency seo in mangalore tailored to scale your enterprise aggressively and dominate your target market.",
    color: "var(--primary-purple)",
    deliverables: ["Strategy & Research", "Architecture & Design", "Execution & Deployment", "Optimization & Scaling"]
  };

  return (
    <ServiceLayout 
      locale={locale} 
      service={serviceData} 
      parentPath="services/agency-seo" 
      parentName="Agency Seo" 
    />
  );
}
