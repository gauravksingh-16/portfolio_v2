import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiments | Gaurav Kumar Singh - Product Designer",
  description:
    "Creative experiments in logos, social media design, web design, and comic strips. Personal design explorations by Gaurav Kumar Singh.",
  openGraph: {
    title: "Experiments | Gaurav Kumar Singh - Product Designer",
    description:
      "Creative experiments in logos, social media design, web design, and comic strips.",
    url: "https://gauravksingh.vercel.app/experiments",
  },
  alternates: {
    canonical: "https://gauravksingh.vercel.app/experiments",
  },
};

export default function ExperimentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
