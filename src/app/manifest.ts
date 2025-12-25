import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gaurav Kumar Singh - Product Designer Portfolio",
    short_name: "GKS Portfolio",
    description: "Product designer based in India creating seamless, human-centered experiences through UX, UI, and visual design.",
    start_url: "/",
    display: "standalone",
    background_color: "#02251c",
    theme_color: "#02251c",
    icons: [
      {
        src: "/assets/blockface.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
