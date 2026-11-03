import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const title = "Digital Marketing Agency in UAE & Dubai | Zaviroq";
  const description = "Premier digital marketing agency serving Dubai and the UAE. We deliver enterprise SEO, bespoke Next.js web design, Google Ads, and brand scaling.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: "https://www.zaviroq.com/locations/dubai",
    },
    openGraph: {
      title,
      description,
      url: "https://www.zaviroq.com/locations/dubai",
      siteName: "Zaviroq",
      locale: "en_AE",
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
    slug: "locations-dubai",
    metaTitle: "Digital Marketing Agency in UAE & Dubai | Zaviroq",
    metaDesc: "Premier digital marketing agency serving Dubai and the UAE. We deliver enterprise SEO, bespoke Next.js web design, Google Ads, and brand scaling.",
    keywords: "Digital marketing agency Dubai, Web design agency UAE, SEO company Dubai, Performance marketing Dubai",
    title: "Digital Marketing in Dubai",
    heroDesc: "Architecting high-converting digital presence for UAE enterprises. We build bespoke Next.js applications and deploy multilingual SEO and paid ad frameworks mapped directly to GCC buyer intent.",
    color: "var(--primary-blue)",
    deliverables: [
      "GCC Market Intelligence & Acquisition Architecture",
      "Bespoke High-Speed Next.js Web Portals",
      "Multilingual Arabic & English SEO Dominance",
      "High-ROAS Google & Social Ad Deployments",
      "Corporate Brand Identity & Visual Assets",
      "Executive Analytics & Lead Attribution",
    ],
  };

  return (
    <ServiceLayout 
      locale={locale} 
      service={serviceData} 
      parentPath="locations" 
      parentName="Markets" 
    />
  );
}
