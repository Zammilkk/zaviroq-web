import expandedServices from '@/data/expandedServices.json';
import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const service = expandedServices['seo-services'].find((s) => s.slug === 'seo-for-agencies');
  
  if (!service) return {};
  
  const title = service.metaTitle.includes('ZAVIROQ') || service.metaTitle.includes('Zaviroq') ? service.metaTitle : `${service.metaTitle} | Zaviroq`;

  return {
    title: {
      absolute: title,
    },
    description: service.metaDesc,
    alternates: {
      canonical: 'https://www.zaviroq.com/services/seo/agency-seo',
    },
    openGraph: {
      title,
      description: service.metaDesc,
      url: 'https://www.zaviroq.com/services/seo/agency-seo',
      siteName: 'Zaviroq',
      locale: 'en_IN',
      type: 'website',
      images: [{ url: 'https://www.zaviroq.com/og-image.png' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: service.metaDesc,
      images: ['https://www.zaviroq.com/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ServicesSeoAgencySeoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const service = expandedServices['seo-services'].find((s) => s.slug === 'seo-for-agencies');

  if (!service) {
    return (
      <div style={{ padding: '120px 20px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', textAlign: 'center' }}>Service Not Found</h1>
      </div>
    );
  }

  return (
    <ServiceLayout 
      locale={locale} 
      service={service} 
      parentPath="services/seo" 
      parentName="SEO Services" 
    />
  );
}
