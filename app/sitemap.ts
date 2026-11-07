import type { MetadataRoute } from 'next';
import { servicesMasterData } from '@/data/servicesMasterData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.zaviroq.com';
  const lastModified = new Date('2026-11-06T00:00:00.000Z');

  // Core Pages
  const coreRoutes: Array<{ path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }> = [
    { path: '', changeFrequency: 'daily', priority: 1.0 },
    { path: '/services', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/portfolio', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.7 },
    { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
  ];

  // All 12 Parent Service Categories
  const parentServiceRoutes = servicesMasterData.map((c) => ({
    path: `/services/${c.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // All 64 Sub-services across all categories
  const subServiceRoutes = servicesMasterData.flatMap((c) =>
    c.subservices.map((s) => `/services/${c.slug}/${s.slug}`)
  );

  // Regional Target Hubs
  const regionalRoutes = [
    // Mangalore & India
    '/locations/mangalore',
    '/services/seo/mangalore',
    '/services/agency-seo/mangalore',
    '/digital-marketing-india',

    // Dubai & UAE
    '/locations/dubai',
    '/services/seo/dubai',
    '/services/agency-seo/dubai',
    '/web-design-dubai',

    // Riyadh & Saudi Arabia
    '/locations/riyadh',
    '/services/seo/riyadh',
    '/services/agency-seo/riyadh',
    '/seo-services-saudi-arabia',
  ];

  // Industry Vertical Overview Page
  const industryRoutes = [
    '/industries',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add Core Pages
  coreRoutes.forEach((route) => {
    sitemapEntries.push({
      url: `${baseUrl}${route.path || '/'}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          'en-IN': `${baseUrl}${route.path || '/'}`,
          ar: `${baseUrl}/ar${route.path}`,
          'x-default': `${baseUrl}${route.path || '/'}`,
        },
      },
    });
  });

  // Add 12 Parent Service Pages
  parentServiceRoutes.forEach((route) => {
    sitemapEntries.push({
      url: `${baseUrl}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          'en-IN': `${baseUrl}${route.path}`,
          ar: `${baseUrl}/ar${route.path}`,
          'x-default': `${baseUrl}${route.path}`,
        },
      },
    });
  });

  // Add All Sub-Service Routes
  subServiceRoutes.forEach((path) => {
    sitemapEntries.push({
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    });
  });

  // Add Regional Target Hubs
  regionalRoutes.forEach((path) => {
    sitemapEntries.push({
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    });
  });

  // Add Industry Verticals
  industryRoutes.forEach((path) => {
    sitemapEntries.push({
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  return sitemapEntries;
}
