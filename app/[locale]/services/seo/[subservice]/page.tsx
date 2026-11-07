import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { servicesMasterData } from '@/data/servicesMasterData';
import { routing } from '@/i18n/routing';
import SubServicePage, { generateMetadata as baseGenerateMetadata } from '../../[category]/[subservice]/page';

type Props = {
  params: Promise<{ locale: string; subservice: string }>;
};

export async function generateStaticParams() {
  const seoData = servicesMasterData.find((c) => c.slug === 'seo');
  if (!seoData) return [];

  return routing.locales.flatMap((locale) =>
    seoData.subservices.map((sub) => ({
      locale,
      subservice: sub.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, subservice } = await params;
  return baseGenerateMetadata({
    params: Promise.resolve({ locale, category: 'seo', subservice }),
  });
}

export default async function SeoSubServiceRoute({ params }: Props) {
  const { locale, subservice } = await params;
  return SubServicePage({
    params: Promise.resolve({ locale, category: 'seo', subservice }),
  });
}
