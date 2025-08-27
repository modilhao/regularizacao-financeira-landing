import type { Metadata } from "next";
import { Merriweather, Roboto } from "next/font/google";
import Script from "next/script";
import MicroInteractions from "@/components/MicroInteractions";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

// Google Analytics and Ads IDs
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GTAG_ID;
const GOOGLE_ADS_CONVERSION_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID;

export const metadata: Metadata = {
  title: {
    default: "Regularização Financeira Empresarial | Lima Advogados - Recuperação Judicial",
    template: "%s | Lima Advogados"
  },
  description: "🏢 Sua empresa está com dificuldades financeiras? Especialistas em recuperação judicial com +20 anos de experiência. ✅ Diagnóstico gratuito ✅ eBook exclusivo ✅ Resultados comprovados",
  keywords: [
    "recuperação judicial",
    "regularização financeira empresarial",
    "crise empresarial",
    "advogados empresariais",
    "recuperação extrajudicial",
    "reestruturação de dívidas",
    "falência empresarial",
    "consultoria jurídica empresarial",
    "Lima Advogados",
    "diagnóstico financeiro gratuito",
    "negociação com credores",
    "direito falimentar"
  ],
  authors: [{ name: "Lima Advogados", url: "https://regularizacaofinanceira.com.br" }],
  creator: "Lima Advogados",
  publisher: "Lima Advogados",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://regularizacaofinanceira.com.br'),
  alternates: {
    canonical: '/',
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
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://regularizacaofinanceira.com.br",
    title: "Regularização Financeira Empresarial | Lima Advogados - Recuperação Judicial",
    description: "🏢 Especialistas em recuperação judicial com +20 anos de experiência. Diagnóstico gratuito e eBook exclusivo para empresários em dificuldades financeiras.",
    siteName: "Lima Advogados - Regularização Financeira",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lima Advogados - Especialistas em Recuperação Judicial e Regularização Financeira Empresarial',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regularização Financeira Empresarial | Lima Advogados",
    description: "🏢 Especialistas em recuperação judicial com +20 anos de experiência. Diagnóstico gratuito para sua empresa.",
    images: ['/og-image.jpg'],
    creator: "@limaadvogados",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  category: 'business',
  classification: 'Legal Services',
  referrer: 'origin-when-cross-origin',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#D4AF37" />
        <meta name="background-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        {/* Apple PWA */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Lima Advogados" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        
        {/* Icons */}
        <link rel="icon" type="image/svg+xml" href="/icon-192x192.svg" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.svg" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.svg" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Structured Data - Organization */}
        <Script id="structured-data-organization" type="application/ld+json" strategy="beforeInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Lima Advogados",
              "description": "Especialistas em recuperação judicial e regularização financeira empresarial com mais de 20 anos de experiência",
              "url": "https://regularizacaofinanceira.com.br",
              "logo": "https://regularizacaofinanceira.com.br/icon-512x512.svg",
              "image": "https://regularizacaofinanceira.com.br/og-image.jpg",
              "telephone": "+55-11-99999-9999",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR",
                "addressLocality": "São Paulo",
                "addressRegion": "SP"
              },
              "areaServed": "BR",
              "serviceType": [
                "Recuperação Judicial",
                "Recuperação Extrajudicial",
                "Consultoria Jurídica Empresarial",
                "Direito Falimentar",
                "Reestruturação de Dívidas"
              ],
              "priceRange": "Consulta Gratuita",
              "openingHours": "Mo-Fr 08:00-18:00",
              "sameAs": [
                "https://www.linkedin.com/company/lima-advogados",
                "https://www.instagram.com/limaadvogados"
              ]
            }
          `}
        </Script>
        
        {/* Structured Data - WebSite */}
        <Script id="structured-data-website" type="application/ld+json" strategy="beforeInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Lima Advogados - Regularização Financeira",
              "url": "https://regularizacaofinanceira.com.br",
              "description": "Landing page especializada em recuperação judicial e regularização financeira empresarial",
              "publisher": {
                "@type": "Organization",
                "name": "Lima Advogados"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://regularizacaofinanceira.com.br/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </Script>
        
        {/* Structured Data - Service */}
        <Script id="structured-data-service" type="application/ld+json" strategy="beforeInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Diagnóstico Gratuito de Recuperação Judicial",
              "description": "Avaliação gratuita para empresas com dificuldades financeiras",
              "provider": {
                "@type": "LegalService",
                "name": "Lima Advogados"
              },
              "areaServed": "BR",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Serviços Jurídicos Empresariais",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Diagnóstico Financeiro Gratuito"
                    },
                    "price": "0",
                    "priceCurrency": "BRL"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "eBook Gratuito - 5 Erros Fatais"
                    },
                    "price": "0",
                    "priceCurrency": "BRL"
                  }
                ]
              }
            }
          `}
        </Script>
        
        {/* Google Analytics */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
              `}
            </Script>
          </>
        )}
        
        {/* Google Ads Conversion Tracking */}
        {GOOGLE_ADS_CONVERSION_ID && (
          <Script id="google-ads-conversion" strategy="afterInteractive">
            {`
              gtag('config', '${GOOGLE_ADS_CONVERSION_ID}');
            `}
          </Script>
        )}
        
        {/* Vercel Analytics */}
        <Script id="vercel-analytics" strategy="afterInteractive">
          {`
            window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
          `}
        </Script>
      </head>
      <body
        className={`${merriweather.variable} ${roboto.variable} font-sans antialiased`}
      >
        <MicroInteractions />
        {children}
      </body>
    </html>
  );
}
