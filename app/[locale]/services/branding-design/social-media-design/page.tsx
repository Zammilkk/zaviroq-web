import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const title = "Social Media Post Design & Creative Assets | Zaviroq";
  const description = "Engaging social media post designs, banners, and marketing creatives for Instagram, LinkedIn, and Facebook to build brand recall and conversion.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: "https://www.zaviroq.com/services/branding-design/social-media-design",
    },
    openGraph: {
      title,
      description,
      url: "https://www.zaviroq.com/services/branding-design/social-media-design",
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
    slug: "services-branding-design-social-media-design",
    metaTitle: "Social Media Design | ZAVIROQ",
    metaDesc: "Expert social media design services. Data-driven growth, premium architectures, and scalable solutions.",
    keywords: "Social Media Design, Digital Agency, Enterprise Solutions",
    title: "Social Media Design",
    heroDesc: "We provide industry-leading social media design tailored to scale your enterprise aggressively and dominate your target market.",
    color: "var(--primary-purple)",
    deliverables: ["Strategy & Research", "Architecture & Design", "Execution & Deployment", "Optimization & Scaling"]
  };

  return (
    <ServiceLayout 
      locale={locale} 
      service={serviceData} 
      parentPath="services/branding-design" 
      parentName="Branding Design" 
    />
  );
}
