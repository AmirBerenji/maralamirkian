import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maralamirkian.com"),

  title: {
    default: "Maral Amirkian",
    template: "%s | Maral Amirkian",
  },

  description:
    "Official website of Maral Amirkian. Explore services, portfolio, and contact information.",

  keywords: [
    "Maral Amirkian",
    "Portfolio",
    "Artist",
    "Services",
    "Professional website",
  ],

  authors: [{ name: "Maral Amirkian" }],

  creator: "Maral Amirkian",

  openGraph: {
    title: "Maral Amirkian",
    description:
      "Official website of Maral Amirkian. Explore services and portfolio.",
    url: "https://maralamirkian.com",
    siteName: "Maral Amirkian",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Maral Amirkian",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Maral Amirkian",
    description:
      "Official website of Maral Amirkian. Explore services and portfolio.",
    images: ["/og-image.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7C8LYMFCWX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7C8LYMFCWX');
          `}
        </Script>
        <Script
  id="structured-data"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Maral Amirkian",
      url: "https://maralamirkian.com",
      sameAs: [],
    }),
  }}
/>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
