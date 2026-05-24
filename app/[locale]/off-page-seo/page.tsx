import OffPageSEOClient from './OffPageSEOClient';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Off-Page SEO Services in Saudi Arabia | Zaviroq',
    description: 'Boost your website authority and rankings with Zaviroq\'s off-page SEO services in Saudi Arabia. We provide white-hat link building, digital PR, guest posting, citation building, and authority-focused SEO strategies.',
    keywords: 'off page seo services, off page seo optimization, off page seo company, off page seo agency, link building services, white hat seo backlinks, authority backlink building, digital PR services, guest posting seo, seo outreach services, local citation building, brand mentions seo, off site seo optimization, high quality backlinks',
  };
}

export default function OffPageSEOPage() {
  return <OffPageSEOClient />;
}
