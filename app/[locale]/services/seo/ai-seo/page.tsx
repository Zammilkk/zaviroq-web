import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const title = "AI SEO & Generative Engine Optimization (GEO) | Zaviroq";
  const description = "Next-generation AI SEO and Generative Engine Optimization services. Optimize your brand for AI search, Google AI Overviews, Perplexity, and algorithmic discovery.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: "https://www.zaviroq.com/services/seo/ai-seo",
    },
    openGraph: {
      title,
      description,
      url: "https://www.zaviroq.com/services/seo/ai-seo",
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
    slug: "services-seo-ai-seo",
    metaTitle: "Ai Seo | ZAVIROQ",
    metaDesc: "Expert ai seo services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Ai Seo, Digital Agency, Enterprise Solutions",
    title: "Ai Seo",
    heroDesc: "We provide industry-leading ai seo tailored to scale your enterprise aggressively and dominate your target market.",
    color: "var(--primary-purple)",
    deliverables: ["Strategy & Research", "Architecture & Design", "Execution & Deployment", "Optimization & Scaling"]
  };

  return (
    <ServiceLayout 
      locale={locale} 
      service={serviceData} 
      parentPath="services/seo" 
      parentName="Seo" 
    />
  );
}
