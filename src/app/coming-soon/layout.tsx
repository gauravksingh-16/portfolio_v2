import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon | Gaurav Kumar Singh",
  description: "This project is coming soon. Check back later for the full case study.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ComingSoonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
