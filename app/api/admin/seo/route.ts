import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'data', 'seo.json');

export async function GET() {
  try {
    if (!fs.existsSync(dbPath)) {
      return NextResponse.json({ error: 'SEO config not found' }, { status: 404 });
    }
    const data = fs.readFileSync(dbPath, 'utf8');
    return NextResponse.json({ success: true, data: JSON.parse(data) });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message || 'Failed to read SEO configuration' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body: any = await req.json();
    let currentData: any = {};
    
    if (fs.existsSync(dbPath)) {
      try {
        currentData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
      } catch (e) {
        currentData = {};
      }
    }

    // Check if this is a per-page update { pagePath: '/industries', data: { ... } }
    if (body.pagePath && body.data) {
      if (!currentData.pages) currentData.pages = {};
      currentData.pages[body.pagePath] = {
        ...(currentData.pages[body.pagePath] || {}),
        ...body.data
      };

      // If page is root '/', also update root fields
      if (body.pagePath === '/') {
        currentData.title = body.data.title || currentData.title;
        currentData.description = body.data.description || currentData.description;
        currentData.keywords = body.data.keywords || currentData.keywords;
        currentData.canonicalUrl = body.data.canonicalUrl || currentData.canonicalUrl;
        currentData.ogImage = body.data.ogImage || currentData.ogImage;
      }
    } else if (body.pages) {
      // Full pages dictionary update
      currentData.pages = body.pages;
    } else {
      // Global fallback update
      currentData = { ...currentData, ...body };
    }

    // Write back to file
    fs.writeFileSync(dbPath, JSON.stringify(currentData, null, 2));

    return NextResponse.json({ success: true, status: 'success', data: currentData });
  } catch (error: any) {
    return NextResponse.json({ success: false, status: 'error', message: error?.message || 'Failed to update SEO data' }, { status: 500 });
  }
}
