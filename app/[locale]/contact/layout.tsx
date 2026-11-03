import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Zaviroq | Start Your Digital Marketing Project',
  description: 'Get in touch with Zaviroq for SEO, web development, Google Ads, and brand strategy consultations in Mangalore, India, the UAE, and Saudi Arabia.',
  alternates: {
    canonical: 'https://www.zaviroq.com/contact',
  },
  openGraph: {
    title: 'Contact Zaviroq | Start Your Digital Marketing Project',
    description: 'Get in touch with Zaviroq for SEO, web development, Google Ads, and brand strategy consultations in Mangalore, India, the UAE, and Saudi Arabia.',
    url: 'https://www.zaviroq.com/contact',
    siteName: 'Zaviroq',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.zaviroq.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact Zaviroq',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Zaviroq | Start Your Digital Marketing Project',
    description: 'Get in touch with Zaviroq for SEO, web development, Google Ads, and brand strategy consultations.',
    images: ['https://www.zaviroq.com/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
