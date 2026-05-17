"use client";

import { usePathname } from 'next/navigation';

export default function CanonicalTag() {
  const pathname = usePathname();
  
  // Exclude canonical tag on 404 or specific dynamic error paths if needed
  if (!pathname) return null;

  const canonicalUrl = `https://zaviroq.com${pathname}`;

  return <link rel="canonical" href={canonicalUrl} />;
}
