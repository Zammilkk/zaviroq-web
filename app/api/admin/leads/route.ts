import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Using JSON file as a local database
const dbPath = path.join(process.cwd(), 'data', 'leads.json');

export async function GET() {
  try {
    if (!fs.existsSync(dbPath)) return NextResponse.json([]);
    const data = fs.readFileSync(dbPath, 'utf8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    let leads = [];
    if (fs.existsSync(dbPath)) {
      leads = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    }

    // New Lead Schema
    const newLead = {
      id: Date.now().toString(),
      name: body.name || 'Unknown',
      email: body.email || 'No Email',
      phone: body.phone || 'No Phone',
      service: body.service || 'Unknown',
      country: body.country || 'Unknown',
      message: body.message || '',
      date: new Date().toISOString(),
      status: 'new' // 'new', 'contacted', 'closed'
    };

    leads.unshift(newLead); // Push to top

    fs.writeFileSync(dbPath, JSON.stringify(leads, null, 2));
    
    return NextResponse.json({ status: 'success', lead: newLead });
  } catch (error) {
    return NextResponse.json({ status: 'error', message: 'Database failure' }, { status: 500 });
  }
}
