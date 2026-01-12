import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Onboarding Redesign | Gaurav Kumar Singh - UX Case Study",
  description:
    "UX case study: Redesigning CA Monk's onboarding flow to reduce sign-up abandonment by 18% and boost profile completion by 28%.",
  keywords: [
    "UX Case Study",
    "User Onboarding",
    "Conversion Optimization",
    "Product Design",
    "User Experience",
    "CA Monk",
    "Sign-up Flow",
  ],
  openGraph: {
    title: "User Onboarding Redesign | Gaurav Kumar Singh",
    description:
      "UX case study: Expanding a niche platform into a universal career launchpad with 18% less abandonment.",
    url: "https://gauravksingh.vercel.app/projects/camonk-nux",
    type: "article",
    images: [
      {
        url: "/assets/projects/camonk-nux/hero_image.png",
        width: 1200,
        height: 630,
        alt: "CA Monk New User Experience Redesign",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "User Onboarding Redesign | Gaurav Kumar Singh",
    description:
      "UX case study: Expanding a niche platform into a universal career launchpad.",
    images: ["/assets/projects/camonk-nux/hero_image.png"],
  },
  alternates: {
    canonical: "https://gauravksingh.vercel.app/projects/camonk-nux",
  },
};

export default function CaMonkNuxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
