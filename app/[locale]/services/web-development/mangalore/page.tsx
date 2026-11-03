import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const title = "Web Development Company in Mangalore | Custom Websites | Zaviroq";
  const description = "Top web development and website design company in Mangalore. We build high-speed Next.js, React, and WordPress websites designed to convert visitors into clients.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: "https://www.zaviroq.com/services/web-development/mangalore",
    },
    openGraph: {
      title,
      description,
      url: "https://www.zaviroq.com/services/web-development/mangalore",
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
    slug: "services-web-development-mangalore",
    metaTitle: "Web Development Company in Mangalore | Zaviroq",
    metaDesc: "Top web development and website design company in Mangalore. We build high-speed Next.js, React, and WordPress websites designed to convert visitors into clients.",
    keywords: "Website design company Mangalore, Web development services Mangalore, Next.js development Mangalore, WordPress agency Mangalore",
    title: "Web Development in Mangalore",
    heroDesc: "Bespoke website design and full-stack web development in Mangalore. We build lightning-fast, mobile-first web applications and corporate websites optimized for sub-second speeds and search engines.",
    color: "var(--primary-blue)",
    deliverables: [
      "Custom Next.js & React Architecture",
      "Mobile-Responsive UI/UX Engineering",
      "Core Web Vitals Speed Optimization",
      "SEO-Ready Semantic HTML & Schema",
      "High-Converting Landing Pages & Forms",
      "Secure CMS & Analytics Integration",
    ],
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
