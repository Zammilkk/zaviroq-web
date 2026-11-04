import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Script from 'next/script';
import { Sora, Poppins } from 'next/font/google';
import Navbar from './Navbar';
import Footer from './Footer';
import ParallaxBackground from '../components/ParallaxBackground';
import Preloader from '../components/Preloader';
import CanonicalTag from '../components/CanonicalTag';
import WhatsAppWidget from '../components/WhatsAppWidget';
import BackToTop from '../components/BackToTop';
import '../globals.css';

import seoData from '@/data/seo.json';
import type { SeoData } from '@/types/seo';

import type { Metadata } from 'next';

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
  display: 'swap',
  variable: '--font-sans',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Digital Marketing Agency in Mangalore | Zaviroq';
  const description = 'Zaviroq helps businesses grow with SEO, Google Ads, social media marketing, and web development in Mangalore, India, the UAE, and Saudi Arabia.';
  
  return {
    metadataBase: new URL('https://www.zaviroq.com'),
    title: {
      default: title,
      template: '%s | Zaviroq',
    },
    description,
    authors: [{ name: 'Zaviroq', url: 'https://www.zaviroq.com' }],
    creator: 'Zaviroq',
    publisher: 'Zaviroq',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: {
        default: title,
        template: '%s | Zaviroq',
      },
      description,
      url: 'https://www.zaviroq.com',
      siteName: 'Zaviroq',
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: 'https://www.zaviroq.com/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Zaviroq - Digital Marketing Agency in Mangalore',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: {
        default: title,
        template: '%s | Zaviroq',
      },
      description,
      images: ['https://www.zaviroq.com/og-image.png'],
      creator: '@zaviroq',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/zaviroq-fav.png', sizes: '500x500', type: 'image/png' },
      ],
      shortcut: '/favicon.ico',
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!routing.locales.includes(locale as 'en' | 'ar')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale === 'ar' ? 'ar' : 'en-IN'} dir={locale === 'ar' ? 'rtl' : 'ltr'} data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var theme = (saved === 'dark') ? 'dark' : 'light';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              })();
            `
          }}
        />
        <CanonicalTag />
        <meta name="google-site-verification" content="KKmhBEL6-TNQ1PaY46UKfkJAtglBKrl_bYsAvo0s9kA" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/zaviroq-fav.png" type="image/png" sizes="500x500" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${sora.variable} ${poppins.variable} ${sora.className}`}>
        <Preloader />
        <ParallaxBackground />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZY54FDJZWS" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZY54FDJZWS');
          `}
        </Script>

        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["Organization", "ProfessionalService"],
                  "@id": "https://www.zaviroq.com/#organization",
                  "name": "Zaviroq",
                  "alternateName": "Zaviroq Digital Marketing Agency",
                  "url": "https://www.zaviroq.com",
                  "logo": {
                    "@type": "ImageObject",
                    "@id": "https://www.zaviroq.com/#logo",
                    "url": "https://www.zaviroq.com/logo.png",
                    "caption": "Zaviroq"
                  },
                  "image": "https://www.zaviroq.com/og-image.png",
                  "description": "Zaviroq is a premier digital marketing agency in Mangalore specializing in SEO, web development, Google Ads, and brand strategy across India, UAE, and Saudi Arabia.",
                  "telephone": "+917483830582",
                  "email": "info@zaviroq.com",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Mangalore",
                    "addressRegion": "Karnataka",
                    "addressCountry": "IN"
                  },
                  "priceRange": "$$",
                  "sameAs": [
                    "https://www.linkedin.com/company/zaviroq",
                    "https://www.instagram.com/zaviroq",
                    "https://www.facebook.com/zaviroq"
                  ],
                  "areaServed": [
                    { "@type": "AdministrativeArea", "name": "Mangalore" },
                    { "@type": "Country", "name": "India" },
                    { "@type": "Country", "name": "United Arab Emirates" },
                    { "@type": "Country", "name": "Saudi Arabia" }
                  ],
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "telephone": "+917483830582",
                      "contactType": "customer service",
                      "areaServed": ["IN", "AE", "SA"],
                      "availableLanguage": ["en", "ar", "kn", "hi"]
                    }
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.zaviroq.com/#website",
                  "url": "https://www.zaviroq.com",
                  "name": "Zaviroq",
                  "publisher": { "@id": "https://www.zaviroq.com/#organization" },
                  "inLanguage": ["en-IN", "ar"]
                }
              ]
            })
          }}
        />

        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main style={{ paddingTop: '60px' }}>
            {children}
          </main>
          <WhatsAppWidget />
          <BackToTop />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
