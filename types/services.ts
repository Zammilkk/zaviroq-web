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

export type ServicesData = Record<string, ServiceConfig[]>;

export type ServicesConfig = ServiceConfig[];