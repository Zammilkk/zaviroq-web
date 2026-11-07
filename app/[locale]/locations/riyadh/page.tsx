import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const title = "Digital Marketing Agency in Saudi Arabia & Riyadh | Zaviroq";
  const description = "Premier digital marketing agency serving Riyadh and Saudi Arabia. Specialized in Arabic & English SEO, enterprise Next.js development, and high-ROI Google Ads.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: "https://www.zaviroq.com/locations/riyadh",
    },
    openGraph: {
      title,
      description,
      url: "https://www.zaviroq.com/locations/riyadh",
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
    slug: "locations-riyadh",
    metaTitle: "Digital Marketing Agency in Saudi Arabia & Riyadh | Zaviroq",
    metaDesc: "Premier digital marketing agency serving Riyadh and Saudi Arabia. Specialized in Arabic & English SEO, enterprise Next.js development, and high-ROI Google Ads.",
    keywords: "Digital marketing agency Saudi Arabia, SEO services Riyadh, Web development KSA, Marketing agency Riyadh",
    title: "Digital Marketing in Riyadh",
    heroDesc: "Empowering businesses across Riyadh, Jeddah, and the Kingdom with high-performance digital marketing and web solutions. Tailored for Saudi Vision 2030 commercial expansion.",
    color: "#25D366",
    deliverables: [
      "Saudi Search Landscape & Intent Mapping",
      "Bilingual Arabic/English Semantic SEO",
      "Ultra-Fast Next.js Corporate Web Portals",
      "High-ROAS Google Search & YouTube Ads",
      "Localized Brand Identity & Creative Assets",
      "Strict Data Privacy & Analytics Setup",
    ],
  };

  return (
    <ServiceLayout 
      locale={locale} 
      service={serviceData} 
      parentPath="services" 
      parentName="Services" 
    />
  );
}
