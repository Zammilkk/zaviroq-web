import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const title = "SEO Agency in Riyadh | Top SEO Services Saudi Arabia | Zaviroq";
  const description = "Dominate search in Riyadh and Saudi Arabia with Zaviroq. Bilingual Arabic and English technical SEO, local map rankings, and KSA enterprise growth.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: "https://www.zaviroq.com/services/seo/riyadh",
    },
    openGraph: {
      title,
      description,
      url: "https://www.zaviroq.com/services/seo/riyadh",
      siteName: "Zaviroq",
      locale: "en_SA",
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
    slug: "services-seo-riyadh",
    metaTitle: "Seo in Riyadh | ZAVIROQ",
    metaDesc: "Expert seo in riyadh services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Seo, Riyadh, Enterprise Solutions",
    title: "Seo in Riyadh",
    heroDesc: "We provide industry-leading seo in riyadh tailored to scale your enterprise aggressively and dominate your target market.",
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
