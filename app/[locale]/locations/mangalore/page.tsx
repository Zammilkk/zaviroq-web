import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const title = "Digital Marketing Agency in Mangalore | SEO & Web Development | Zaviroq";
  const description = "Zaviroq is Mangalore's premier digital marketing agency. We engineer custom web design, high-impact SEO, and high-ROI Google Ads to help businesses scale.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: "https://www.zaviroq.com/locations/mangalore",
    },
    openGraph: {
      title,
      description,
      url: "https://www.zaviroq.com/locations/mangalore",
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
    slug: "locations-mangalore",
    metaTitle: "Digital Marketing Agency in Mangalore | Zaviroq",
    metaDesc: "Zaviroq is Mangalore's premier digital marketing agency. We engineer custom web design, high-impact SEO, and high-ROI Google Ads to help businesses scale.",
    keywords: "Digital marketing agency Mangalore, Web design company Mangalore, SEO services Mangalore, Advertising agency Mangalore",
    title: "Digital Marketing in Mangalore",
    heroDesc: "Empowering Mangaluru and Karnataka brands with enterprise-tier digital growth from our headquarters at Jannath Complex, Naringana, Konaje Proper. We build fast, high-converting websites and deploy targeted search and social campaigns that generate measurable revenue.",
    color: "var(--primary-purple)",
    deliverables: [
      "Headquarters: Jannath Complex, Naringana, Mangaluru, Konaje Proper 574199",
      "Full-Funnel Digital Growth Strategy",
      "Custom Next.js & WordPress Web Design",
      "High-Intent SEO & Google Maps Dominance",
      "Google Ads & Meta Advertising Management",
      "Corporate Brand Identity & Visual Assets",
      "Comprehensive Conversion & Lead Tracking",
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
