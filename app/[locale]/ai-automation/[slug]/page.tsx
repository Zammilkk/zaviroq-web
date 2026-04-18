import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ServiceLayout from '../../../components/ServiceLayout';

const CATEGORY_KEY = 'ai-automation';
const PARENT_NAME = 'AI & Automation';

export async function generateStaticParams() {
  const dbPath = path.join(process.cwd(), 'data', 'expandedServices.json');
  if (!fs.existsSync(dbPath)) return [];
  const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  const configs = db[CATEGORY_KEY] || [];
  return configs.map((c: { slug: string }) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const dbPath = path.join(process.cwd(), 'data', 'expandedServices.json');
  if (!fs.existsSync(dbPath)) return { title: `${PARENT_NAME} | ZAVIROQ` };

  const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  const configs = db[CATEGORY_KEY] || [];
  const service = configs.find((c: { slug: string }) => c.slug === slug);

  if (!service) return { title: `${PARENT_NAME} | ZAVIROQ` };

  return {
    title: service.metaTitle,
    description: service.metaDesc,
    keywords: service.keywords,
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;

  const dbPath = path.join(process.cwd(), 'data', 'expandedServices.json');
  if (!fs.existsSync(dbPath)) notFound();

  const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  const configs = db[CATEGORY_KEY] || [];
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
