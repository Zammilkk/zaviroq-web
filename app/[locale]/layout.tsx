import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Script from 'next/script';
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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata() {
  try {
    const seo = seoData as SeoData;
    if (seo) {
      return {
        metadataBase: new URL('https://zaviroq.com'),
        title: seo.title || 'ZAVIROQ | Scaling Brands Digitally',
        description: seo.description || 'Premium digital marketing and web development agency in Mangalore.',
        keywords: seo.keywords || '',
        authors: [{ name: seo.author || 'Digital Zaam' }],
        icons: [{ rel: 'icon', url: '/favicon.ico' }],
        openGraph: {
          images: seo.ogImage ? [{ url: seo.ogImage }] : [],
        }
      };
    }
  } catch {}
  
  return {
    metadataBase: new URL('https://zaviroq.com'),
    title: 'ZAVIROQ | Scaling Brands Digitally',
    description: 'Premium digital marketing and web development agency in Mangalore & India.',
    icons: [{ rel: 'icon', url: '/favicon.ico' }],
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
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <link rel="alternate" hrefLang="en-SA" href="https://zaviroq.com/sa" />
        <link rel="alternate" hrefLang="ar-SA" href="https://zaviroq.com/ar/sa" />
        <link rel="alternate" hrefLang="en-AE" href="https://zaviroq.com/ae" />
        <link rel="alternate" hrefLang="en-IN" href="https://zaviroq.com/in" />
        <CanonicalTag />
        <meta name="google-site-verification" content="ohatbi3YT5W9pRVst1qhGn0jkJYHeLHIh0dwYq_ncxM" />
      </head>
      <body>
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
        
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'XXXXXXXXXXXXXXX');
            fbq('track', 'PageView');
          `}
        </Script>

        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ZAVIROQ",
              "url": "https://zaviroq.com",
              "logo": "https://zaviroq.com/logo.png",
              "description": "ZAVIROQ is a premium digital marketing agency scaling brands digitally."
            })
          }}
        />

        <Script
          id="localbusiness-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "ZAVIROQ Mangalore",
                "image": "https://zaviroq.com/logo.png",
                "telephone": "+91 74 8383 0582",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Mangalore",
                  "addressRegion": "Karnataka",
                  "addressCountry": "IN"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "ZAVIROQ Global",
                "image": "https://zaviroq.com/logo.png",
                "telephone": "+91 74 8383 0582",
                "address": { "@type": "PostalAddress", "addressCountry": "IN" }
              }
            ])
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
