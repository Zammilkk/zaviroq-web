import { createClient } from '@/utils/supabase/server';
import { defaultHomepageData, HomepageFullData } from './homepageDefaults';

export async function getHomepageContent(): Promise<HomepageFullData> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('homepage_content')
      .select('key, data');

    if (error || !data || data.length === 0) {
      return defaultHomepageData;
    }

    const contentMap: Record<string, any> = {};
    for (const row of data) {
      contentMap[row.key] = row.data;
    }

    return {
      hero: { ...defaultHomepageData.hero, ...(contentMap['hero'] || {}) },
      approach: { ...defaultHomepageData.approach, ...(contentMap['approach'] || {}) },
      why_choose: { ...defaultHomepageData.why_choose, ...(contentMap['why_choose'] || {}) },
      services_section: { ...defaultHomepageData.services_section, ...(contentMap['services_section'] || {}) },
      faqs: { ...defaultHomepageData.faqs, ...(contentMap['faqs'] || {}) },
      seo: { ...defaultHomepageData.seo, ...(contentMap['seo'] || {}) },
      images: { ...defaultHomepageData.images, ...(contentMap['images'] || {}) },
    };
  } catch (err) {
    console.error('getHomepageContent error, using fallback:', err);
    return defaultHomepageData;
  }
}
