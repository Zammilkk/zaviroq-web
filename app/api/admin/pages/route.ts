import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { createClient as createSupabaseClient } from '@supabase/supabase-js';

const dbPath = path.join(process.cwd(), 'data', 'pagesData.json');

function getServiceSupabase() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
  return createSupabaseClient(url, key);
}

export async function GET() {
  try {
    let localData: any = {};
    if (fs.existsSync(dbPath)) {
      try {
        localData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
      } catch (e) {}
    }

    // Try reading from Supabase table if available
    try {
      const supabase = getServiceSupabase();
      const { data, error } = await supabase
        .from('site_pages_content')
        .select('page_key, content_data, updated_at');

      if (!error && data && data.length > 0) {
        for (const row of data) {
          localData[row.page_key] = row.content_data;
        }
      }
    } catch (e) {
      // Graceful fallback to local file
    }

    return NextResponse.json({
      success: true,
      data: localData
    });
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err?.message || 'Failed to fetch pages content'
    }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body: any = await request.json();
    let currentData: any = {};

    if (fs.existsSync(dbPath)) {
      try {
        currentData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
      } catch (e) {
        currentData = {};
      }
    }

    const { pageKey, data } = body;

    if (pageKey && data) {
      currentData[pageKey] = data;

      // Sync to Supabase
      try {
        const supabase = getServiceSupabase();
        await supabase
          .from('site_pages_content')
          .upsert({
            page_key: pageKey,
            content_data: data,
            updated_at: new Date().toISOString()
          }, { onConflict: 'page_key' });
      } catch (e) {
        // Fallback continues
      }
    } else if (body.pages) {
      currentData = body.pages;
    }

    // Save locally
    fs.writeFileSync(dbPath, JSON.stringify(currentData, null, 2));

    return NextResponse.json({
      success: true,
      data: currentData,
      message: 'Page content successfully synchronized and published!'
    });
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err?.message || 'Failed to save page changes'
    }, { status: 500 });
  }
}
