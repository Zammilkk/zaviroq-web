"use client";

import { usePathname } from 'next/navigation';

export default function CanonicalTag() {
  const pathname = usePathname();
  
  if (!pathname) return null;

  const isHome = pathname === '/' || pathname === '/en' || pathname === '/ar' || pathname === '';
  const canonicalUrl = isHome
    ? 'https://zaviroq.com/'
    : `https://zaviroq.com${pathname.replace(/^\/en(?=\/|$)/, '').replace(/^\/ar(?=\/|$)/, '')}`;

  return (
    <>
      <link rel="canonical" href={canonicalUrl} />
      {isHome ? (
        <>
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="googlebot" content="index, follow" />
        </>
      ) : (
        <>
          <meta name="robots" content="noindex, nofollow" />
          <meta name="googlebot" content="noindex, nofollow" />
        </>
      )}
    </>
  );
}
