import CategoryPage, { generateMetadata as categoryGenerateMetadata } from '../[category]/page';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return categoryGenerateMetadata({
    params: Promise.resolve({
      locale,
      category: 'seo',
    }),
  });
}

export default async function SeoPage({ params }: Props) {
  const { locale } = await params;
  return <CategoryPage params={Promise.resolve({ locale, category: 'seo' })} />;
}
