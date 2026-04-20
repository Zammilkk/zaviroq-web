export interface ServiceConfig {
  slug: string;
  metaTitle: string;
  metaDesc: string;
  keywords: string;
  title: string;
  heroDesc: string;
  color: string;
  deliverables: string[];
}

export type ServiceCategoryKey = 
  | 'branding-design'
  | 'content-marketing'
  | 'core-seo'
  | 'core-web'
  | 'performance-marketing'
  | 'seo-services'
  | 'social-media-marketing'
  | 'web-advanced'
  | 'web-ecommerce'
  | 'web-migration'
  | 'web-platform'
  | 'web-security'
  | 'web-systems'
  | 'ai-automation';

export type ServicesData = Record<ServiceCategoryKey, ServiceConfig[]>;

export type ServicesConfig = ServiceConfig[];