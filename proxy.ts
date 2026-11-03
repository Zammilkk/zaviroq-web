import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const proto = request.headers.get('x-forwarded-proto');

  // 301 redirect non-www to www and http to https in production
  if (
    host === 'zaviroq.com' ||
    (proto === 'http' && !host.includes('localhost') && !host.includes('127.0.0.1'))
  ) {
    const newUrl = new URL(request.nextUrl.pathname + request.nextUrl.search, 'https://www.zaviroq.com');
    return NextResponse.redirect(newUrl, 301);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
