import type { Metadata } from "next";
import { Outfit, Archivo_Black, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollUpBtn";
import Script from "next/script";
import WhatsAppFAB from "./components/WhatsAppFAB";

// Outfit → default font
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

// Archivo Black
const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  weight: "400",
  subsets: ["latin"],
});

// Orbitron
const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FIL GARAGE | Nano Coating, Auto Care & Modification - Perawatan Terbaik Di Bandung",
  description: "Layanan nano coating, auto care, dan modifikasi mobil terbaik di Bandung. Spesialis perawatan kendaraan premium dengan teknologi terdepan untuk hasil maksimal.",
  icons: {
    icon: '/icon.png',
  },
};``


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${archivoBlack.variable} ${orbitron.variable} antialiased font-outfit`}
      >
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);} gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}

        {/* Meta Pixel */}
        {process.env.NEXT_PUBLIC_FB_PIXEL_ID && (
          <>
            <Script id="fb-pixel" strategy="afterInteractive">
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID}');
                fbq('track', 'PageView');
              `}
            </Script>
          </>
        )}

        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutomotiveBusiness",
            "name": "FIL GARAGE",
            "description": "Layanan nano coating, auto care, dan modifikasi mobil terbaik di Bandung. Spesialis perawatan kendaraan premium dengan teknologi terdepan untuk hasil maksimal.",
            "url": "https://filgarageautocare.com",
            "logo": "https://filgarageautocare.com/images/logo/main_logo.png",
            "image": "https://filgarageautocare.com/images/logo/main_logo.png",
            "telephone": "+6281312200142",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bandung",
              "addressRegion": "Jawa Barat",
              "addressCountry": "ID"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-6.9175",
              "longitude": "107.6191"
            },
            "openingHours": "Mo-Sa 08:00-18:00",
            "priceRange": "$$",
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "-6.9175",
                "longitude": "107.6191"
              },
              "geoRadius": "50000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Auto Care Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Nano Coating Ceramic",
                    "description": "Perlindungan cat mobil dengan teknologi nano coating ceramic terdepan"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Paint Protection Film (PPF)",
                    "description": "Perlindungan cat mobil dengan film transparan berkualitas tinggi"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Auto Detailing",
                    "description": "Perawatan menyeluruh interior dan eksterior mobil"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Rust Protection",
                    "description": "Perlindungan anti karat untuk kendaraan"
                  }
                }
              ]
            },
            "sameAs": [
              "https://wa.me/6281312200142"
            ]
          })}
        </Script>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
