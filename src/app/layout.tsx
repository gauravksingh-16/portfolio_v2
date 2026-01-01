import type { Metadata } from "next";
import "./globals.css";
import { StructuredData } from "./structured-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://gauravksingh.vercel.app"),
  title: "Gaurav Kumar Singh | Product Designer & UX/UI Designer",
  description: "Product designer based in India creating seamless, human-centered experiences through UX, UI, and visual design. Focused on clarity, creativity, and impact.",
  keywords: [
    "Product Designer",
    "UX Designer",
    "UI Designer",
    "Visual Designer",
    "Web Design",
    "User Experience",
    "User Interface",
    "Design Portfolio",
    "India Designer",
    "Gaurav Kumar Singh",
  ],
  authors: [{ name: "Gaurav Kumar Singh" }],
  creator: "Gaurav Kumar Singh",
  publisher: "Gaurav Kumar Singh",
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
  icons: {
    icon: "/assets/blockface.svg",
    apple: "/assets/blockface.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gauravksingh.vercel.app",
    title: "Gaurav Kumar Singh | Product Designer & UX/UI Designer",
    description: "Product designer based in India creating seamless, human-centered experiences through UX, UI, and visual design. Focused on clarity, creativity, and impact.",
    siteName: "Gaurav Kumar Singh Portfolio",
    images: [
      {
        url: "/assets/my image.png",
        width: 1200,
        height: 630,
        alt: "Gaurav Kumar Singh - Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Kumar Singh | Product Designer & UX/UI Designer",
    description: "Product designer based in India creating seamless, human-centered experiences through UX, UI, and visual design.",
    images: ["/assets/my image.png"],
    creator: "@gauravksingh",
  },
  verification: {
    google: "xbXlRtsD_Jjzod3zSu6ozvB74G7oiS0zYQjqhcBg1sw",
  },
  alternates: {
    canonical: "https://gauravksingh.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <link rel="canonical" href="https://gauravksingh.vercel.app" />
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/Helvetica/HelveticaNeueMedium.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Denton/DentonTextCondTest-MediumItalic.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        {/* Preload LCP image for mobile */}
        <link
          rel="preload"
          as="image"
          href="/assets/my image-mobile.png"
          media="(max-width: 767px)"
        />
        {/* Preload LCP image for desktop */}
        <link
          rel="preload"
          as="image"
          href="/assets/my image.png"
          media="(min-width: 768px)"
        />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
        <link rel="dns-prefetch" href="https://www.behance.net" />
        <link rel="dns-prefetch" href="https://github.com" />
        <StructuredData />
      </head>
      <body className="overflow-x-hidden">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
