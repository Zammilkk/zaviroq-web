import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ServiceLayout from '../../../components/ServiceLayout';
import expandedServices from '@/data/expandedServices.json';
import { routing } from '@/i18n/routing';

const CATEGORY_KEY = 'web-platform';
const PARENT_NAME = 'Platform Engineering';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const configs = (expandedServices as any)[CATEGORY_KEY] || [];
  
  return routing.locales.flatMap((locale) => 
    configs.map((c: { slug: string }) => ({
      locale,
      slug: c.slug
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const configs = (expandedServices as any)[CATEGORY_KEY] || [];
  const service = configs.find((c: { slug: string }) => c.slug === slug);

  if (!service) return { title: 'Service Not Found' };
  return {
    title: service.metaTitle,
    description: service.metaDesc,
    keywords: service.keywords,
  };
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  const configs = (expandedServices as any)[CATEGORY_KEY] || [];
  const service = configs.find((c: { slug: string }) => c.slug === slug);
  
  if (!service) notFound();

  return (
    <ServiceLayout 
      locale={locale} 
      service={service} 
      parentPath={CATEGORY_KEY} 
      parentName={PARENT_NAME} 
    />
  );
}