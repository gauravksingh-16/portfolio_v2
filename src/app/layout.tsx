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
        <StructuredData />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
