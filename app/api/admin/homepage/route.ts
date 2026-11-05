import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import { defaultHomepageData, HomepageFullData } from '@/lib/homepageDefaults';

function getServiceSupabase() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
  return createSupabaseClient(url, key);
}

export async function GET() {
  try {
    const supabase = getServiceSupabase();
    const { data, error } = await supabase
      .from('homepage_content')
      .select('key, data, updated_at');

    if (error) {
      return NextResponse.json({
        success: false,
        error: error.message,
        data: defaultHomepageData,
        source: 'fallback'
      });
    }

    const contentMap: Record<string, any> = {};
    let latestUpdate: string | null = null;

    if (data && data.length > 0) {
      for (const row of data) {
        contentMap[row.key] = row.data;
        if (!latestUpdate || new Date(row.updated_at) > new Date(latestUpdate)) {
          latestUpdate = row.updated_at;
        }
      }
    }

    const merged: HomepageFullData = {
      hero: { ...defaultHomepageData.hero, ...(contentMap['hero'] || {}) },
      approach: { ...defaultHomepageData.approach, ...(contentMap['approach'] || {}) },
      why_choose: { ...defaultHomepageData.why_choose, ...(contentMap['why_choose'] || {}) },
      services_section: { ...defaultHomepageData.services_section, ...(contentMap['services_section'] || {}) },
      faqs: { ...defaultHomepageData.faqs, ...(contentMap['faqs'] || {}) },
      seo: { ...defaultHomepageData.seo, ...(contentMap['seo'] || {}) },
      images: { ...defaultHomepageData.images, ...(contentMap['images'] || {}) },
    };

    return NextResponse.json({
      success: true,
      data: merged,
      source: 'supabase',
      lastUpdated: latestUpdate
    });
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err?.message || 'Failed to fetch homepage content',
      data: defaultHomepageData,
      source: 'fallback'
    }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body: any = await request.json();
    const supabase = getServiceSupabase();

    // Support either section-specific update { section: 'hero', data: {...} } or full bundle
    if (body.section && body.data) {
      const { section, data } = body;
      const { error } = await supabase
        .from('homepage_content')
        .upsert({
          key: section,
          data: data,
          updated_at: new Date().toISOString()
        }, { onConflict: 'key' });

      if (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
      }

      if (section === 'seo') {
        try {
          const fs = await import('fs');
          const path = await import('path');
          const dbPath = path.join(process.cwd(), 'data', 'seo.json');
          fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
        } catch (e) {}
      }
    } else {
      // Full bundle
      const keys = ['hero', 'approach', 'why_choose', 'services_section', 'faqs', 'seo', 'images'] as const;
      for (const key of keys) {
        if (body[key]) {
          const { error } = await supabase
            .from('homepage_content')
            .upsert({
              key,
              data: body[key],
              updated_at: new Date().toISOString()
            }, { onConflict: 'key' });

          if (error) {
            return NextResponse.json({ success: false, error: `Error saving ${key}: ${error.message}` }, { status: 400 });
          }
        }
      }

      if (body.seo) {
        try {
          const fs = await import('fs');
          const path = await import('path');
          const dbPath = path.join(process.cwd(), 'data', 'seo.json');
          fs.writeFileSync(dbPath, JSON.stringify(body.seo, null, 2));
        } catch (e) {}
      }
    }

    // Revalidate paths for instant display
    try {
      revalidatePath('/', 'page');
      revalidatePath('/en-IN', 'page');
      revalidatePath('/ar', 'page');
      revalidatePath('/[locale]', 'page');
    } catch (e) {
      // Revalidation warning non-fatal in development
    }

    return NextResponse.json({
      success: true,
      message: 'Homepage content successfully synchronized with Supabase.',
      timestamp: new Date().toISOString()
    });
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err?.message || 'Server error while updating homepage content'
    }, { status: 500 });
  }
}
