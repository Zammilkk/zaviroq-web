"use client";

import { usePathname } from 'next/navigation';

export default function CanonicalTag() {
  const pathname = usePathname();
  
  if (!pathname) return null;

  // Normalize path
  const normalizedPath = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  const isAdmin = normalizedPath.startsWith('/admin');
  const isHome = normalizedPath === '/' || normalizedPath === '';

  const canonicalUrl = isHome
    ? 'https://www.zaviroq.com/'
    : `https://www.zaviroq.com${normalizedPath}`;

  return (
    <>
      <link rel="canonical" href={canonicalUrl} />
      {isAdmin ? (
        <>
          <meta name="robots" content="noindex, nofollow" />
          <meta name="googlebot" content="noindex, nofollow" />
        </>
      ) : (
        <>
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="googlebot" content="index, follow" />
        </>
      )}
    </>
  );
}
