import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Resume Builder Redesign | Gaurav Kumar Singh - UX Case Study",
  description:
    "UX case study: How I transformed a desktop-heavy resume builder into a mobile-first experience, reducing creation time by 33% and abandonment by 18%.",
  keywords: [
    "UX Case Study",
    "Resume Builder",
    "Mobile-First Design",
    "Product Design",
    "AI Resume",
    "User Experience",
    "CA Monk",
  ],
  openGraph: {
    title: "AI Resume Builder Redesign | Gaurav Kumar Singh",
    description:
      "UX case study: Transforming a desktop-heavy tool into a mobile-first career accelerant with 33% faster creation time.",
    url: "https://gauravksingh.vercel.app/projects/resume-builder-redesign",
    type: "article",
    images: [
      {
        url: "/assets/projects/resume-builder-redesign/hero-image.png",
        width: 1200,
        height: 630,
        alt: "AI Resume Builder Flow Optimization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Resume Builder Redesign | Gaurav Kumar Singh",
    description:
      "UX case study: Transforming a desktop-heavy tool into a mobile-first career accelerant.",
    images: ["/assets/projects/resume-builder-redesign/hero-image.png"],
  },
  alternates: {
    canonical: "https://gauravksingh.vercel.app/projects/resume-builder-redesign",
  },
};

export default function ResumeBuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
