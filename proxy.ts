import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const proto = request.headers.get('x-forwarded-proto');

  // Strip /en prefix from any URL and 301 redirect to clean path
  const pathname = request.nextUrl.pathname;
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    const cleanPath = pathname.replace(/^\/en/, '') || '/';
    const newUrl = new URL(cleanPath + request.nextUrl.search, request.url);
    return NextResponse.redirect(newUrl, 301);
  }

  // 301 redirect legacy service category paths to updated canonical URLs
  const legacyRedirects: Record<string, string> = {
    '/services/web-development': '/services/website-development',
    '/services/branding-design': '/services/branding',
    '/services/performance-marketing': '/services/paid-advertising',
    '/services/ecommerce-systems': '/services/ecommerce-development',
  };

  const pathWithoutSlash = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
  if (legacyRedirects[pathWithoutSlash]) {
    const target = legacyRedirects[pathWithoutSlash];
    const newUrl = new URL(target + request.nextUrl.search, request.url);
    return NextResponse.redirect(newUrl, 301);
  }

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
