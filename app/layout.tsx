import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://echopulse.media"),
  icons: {
    icon: "/Icon.png",
    shortcut: "/Icon.png",
    apple: "/Icon.png",
  },
  title: {
    default: "EchoPulse | Professional Content Creation Services",
    template: "%s | EchoPulse",
  },
  description: "Elevate your brand's digital presence with professional content creation. Short-form video, podcast production, and social media content packages.",
  keywords: ["content creation", "video editing", "podcast production", "social media", "digital marketing", "brand content"],
  authors: [{ name: "EchoPulse" }],
  creator: "EchoPulse",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://echopulse.media",
    siteName: "EchoPulse",
    title: "EchoPulse | Professional Content Creation Services",
    description: "Elevate your brand's digital presence with professional content creation.",
    images: [
      {
        url: "https://echopulse.media/og-image.png",
        width: 1200,
        height: 630,
        alt: "EchoPulse - Professional Content Creation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EchoPulse | Professional Content Creation Services",
    description: "Elevate your brand's digital presence with professional content creation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="EchoPulse" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background-dark min-h-screen`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3PPKSJLR7F"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3PPKSJLR7F');
          `}
        </Script>
        
        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ukzjzunyk5");
          `}
        </Script>
        
        {children}
      </body>
    </html>
  );
}
