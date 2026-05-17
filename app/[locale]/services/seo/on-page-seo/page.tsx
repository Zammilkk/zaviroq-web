import expandedServices from '@/data/expandedServices.json';
import ServiceLayout from '@/app/components/ServiceLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const service = expandedServices['core-seo'].find((s) => s.slug === 'on-page-seo');
  
  if (!service) return {};
  
  return {
    title: service.metaTitle,
    description: service.metaDesc,
    keywords: service.keywords,
  };
}

export default async function ServicesSeoOnPageSeoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const service = expandedServices['core-seo'].find((s) => s.slug === 'on-page-seo');

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
