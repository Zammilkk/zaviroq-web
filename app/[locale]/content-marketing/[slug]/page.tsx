import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ServiceLayout from '../../../components/ServiceLayout';
import expandedServices from '@/data/expandedServices.json';
import { routing } from '@/i18n/routing';
import type { ServiceConfig } from '@/types/services';

const CATEGORY_KEY = 'content-marketing';
const PARENT_NAME = 'Content Marketing';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const configs = (expandedServices[CATEGORY_KEY] as ServiceConfig[]) || [];
  
  return routing.locales.flatMap((locale) => 
    configs.map((c) => ({
      locale,
      slug: c.slug
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const configs = (expandedServices[CATEGORY_KEY] as ServiceConfig[]) || [];
  const service = configs.find((c) => c.slug === slug);

  if (!service) return { title: `${PARENT_NAME} | ZAVIROQ` };

  return {
    title: service.metaTitle,
    description: service.metaDesc,
    keywords: service.keywords,
  };
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  const configs = (expandedServices[CATEGORY_KEY] as ServiceConfig[]) || [];
  const service = configs.find((c) => c.slug === slug);
  
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