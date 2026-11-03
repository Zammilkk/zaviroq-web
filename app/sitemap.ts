import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.zaviroq.com';
  const lastModified = new Date('2026-10-29T00:00:00.000Z');

  // Core Pages
  const coreRoutes: Array<{ path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }> = [
    { path: '', changeFrequency: 'daily', priority: 1.0 },
    { path: '/services', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/portfolio', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.7 },
    { path: '/locations', changeFrequency: 'weekly', priority: 0.85 },
    { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
  ];

  // Service Pillars
  const pillarRoutes: Array<{ path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }> = [
    { path: '/services/seo', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/services/web-development', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/services/performance-marketing', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/services/branding-design', changeFrequency: 'weekly', priority: 0.85 },
    { path: '/services/ecommerce-systems', changeFrequency: 'weekly', priority: 0.85 },
  ];

  // SEO Subservices
  const seoSubservices = [
    '/services/seo/technical-seo',
    '/services/seo/on-page-seo',
    '/services/seo/off-page-seo',
    '/services/seo/seo-audit',
    '/services/seo/keyword-research',
    '/services/seo/ai-seo',
    '/services/seo/seo-strategy',
    '/services/seo/agency-seo',
  ];

  // Web Development Subservices
  const webSubservices = [
    '/services/web-development/custom-website',
    '/services/web-development/business-website',
    '/services/web-development/landing-page',
    '/services/web-development/wordpress-development',
    '/services/web-development/react-development',
    '/services/web-development/nextjs-development',
  ];

  // Performance Marketing Subservices
  const marketingSubservices = [
    '/services/performance-marketing/google-ads',
    '/services/performance-marketing/meta-ads',
    '/services/performance-marketing/linkedin-ads',
    '/services/performance-marketing/tiktok-ads',
    '/services/performance-marketing/youtube-ads',
    '/services/performance-marketing/ppc-management',
  ];

  // Branding & Design Subservices
  const brandingSubservices = [
    '/services/branding-design/logo-design',
    '/services/branding-design/brand-identity',
    '/services/branding-design/company-profile',
    '/services/branding-design/social-media-design',
  ];

  // Ecommerce Systems Subservices
  const ecomSubservices = [
    '/services/ecommerce-systems/ecommerce-development',
    '/services/ecommerce-systems/custom-ecommerce',
    '/services/ecommerce-systems/admin-dashboard',
    '/services/ecommerce-systems/web-application',
    '/services/ecommerce-systems/saas-platform',
  ];

  // Regional Target Hubs
  const regionalRoutes = [
    // Mangalore & India
    '/locations/mangalore',
    '/services/seo/mangalore',
    '/services/web-development/mangalore',
    '/services/performance-marketing/google-ads/mangalore',
    '/services/branding-design/logo-design/mangalore',
    '/services/agency-seo/mangalore',
    '/digital-marketing-india',

    // Dubai & UAE
    '/locations/dubai',
    '/services/seo/dubai',
    '/services/web-development/dubai',
    '/services/performance-marketing/google-ads/dubai',
    '/services/branding-design/logo-design/dubai',
    '/services/agency-seo/dubai',
    '/web-design-dubai',

    // Riyadh & Saudi Arabia
    '/locations/riyadh',
    '/services/seo/riyadh',
    '/services/web-development/riyadh',
    '/services/performance-marketing/google-ads/riyadh',
    '/services/branding-design/logo-design/riyadh',
    '/services/agency-seo/riyadh',
    '/seo-services-saudi-arabia',
  ];

  // Industry Vertical Pages
  const industryRoutes = [
    '/industries',
    '/industries/real-estate',
    '/industries/healthcare',
    '/industries/saas',
    '/industries/ecommerce',
    '/industries/doctor',
  ];

  const allServiceSubRoutes = [
    ...seoSubservices,
    ...webSubservices,
    ...marketingSubservices,
    ...brandingSubservices,
    ...ecomSubservices,
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
          'ar': `${baseUrl}/ar${route.path}`,
          'x-default': `${baseUrl}${route.path || '/'}`,
        },
      },
    });
  });

  // Add Pillar Pages
  pillarRoutes.forEach((route) => {
    sitemapEntries.push({
      url: `${baseUrl}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          'en-IN': `${baseUrl}${route.path}`,
          'ar': `${baseUrl}/ar${route.path}`,
          'x-default': `${baseUrl}${route.path}`,
        },
      },
    });
  });

  // Add Service Subroutes
  allServiceSubRoutes.forEach((path) => {
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
