import SubServicePage, { generateMetadata as baseGenerateMetadata } from '../../[category]/[subservice]/page';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return baseGenerateMetadata({
    params: Promise.resolve({ locale, category: 'seo', subservice: 'technical-seo' }),
  });
}

export default async function TechnicalSeoPage({ params }: Props) {
  const { locale } = await params;
  return SubServicePage({
    params: Promise.resolve({ locale, category: 'seo', subservice: 'technical-seo' }),
  });
}
