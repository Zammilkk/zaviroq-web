import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'data', 'seo.json');

export async function GET() {
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read SEO configuration' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // Enforce basic structure
    const updatedData = {
      title: body.title || '',
      description: body.description || '',
      keywords: body.keywords || '',
      author: body.author || 'Digital Zaam',
      ogImage: body.ogImage || ''
    };
    
    // Write back to file
    fs.writeFileSync(dbPath, JSON.stringify(updatedData, null, 2));
    
    return NextResponse.json({ status: 'success', data: updatedData });
  } catch (error) {
    return NextResponse.json({ status: 'error', message: 'Failed to update SEO data' }, { status: 500 });
  }
}
