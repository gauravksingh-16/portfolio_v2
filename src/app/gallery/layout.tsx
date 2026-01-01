import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Gaurav Kumar Singh - Life & Stories",
  description:
    "A visual gallery of life moments and stories. Personal photography and visual storytelling by Gaurav Kumar Singh.",
  openGraph: {
    title: "Gallery | Gaurav Kumar Singh - Life & Stories",
    description: "A visual gallery of life moments and stories.",
    url: "https://gauravksingh.vercel.app/gallery",
  },
  alternates: {
    canonical: "https://gauravksingh.vercel.app/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
