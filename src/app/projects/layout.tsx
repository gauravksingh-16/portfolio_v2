import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Gaurav Kumar Singh - Product Designer",
  description:
    "Explore my design projects including design systems, AI platforms, and marketing materials. UX/UI design work for CA Monk and LFS.",
  openGraph: {
    title: "Projects | Gaurav Kumar Singh - Product Designer",
    description:
      "Explore my design projects including design systems, AI platforms, and marketing materials.",
    url: "https://gauravksingh.vercel.app/projects",
  },
  alternates: {
    canonical: "https://gauravksingh.vercel.app/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
