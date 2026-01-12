export function StructuredData() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://gauravksingh.vercel.app/#person",
    name: "Gaurav Kumar Singh",
    givenName: "Gaurav",
    familyName: "Singh",
    jobTitle: "Product Designer",
    description:
      "Product designer based in India creating seamless, human-centered experiences through UX, UI, and visual design.",
    url: "https://gauravksingh.vercel.app",
    image: {
      "@type": "ImageObject",
      url: "https://gauravksingh.vercel.app/assets/my%20image.png",
      width: 1200,
      height: 630,
    },
    sameAs: [
      "https://www.linkedin.com/in/gauravksingh16/",
      "https://www.behance.net/gauravsingh_16",
      "https://github.com/gauravksingh-16",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "India",
    },
    email: "mailto:gauravkumarsingh3360@gmail.com",
    telephone: "+91-7970755957",
    knowsAbout: [
      "Product Design",
      "UX Design",
      "UI Design",
      "Visual Design",
      "Web Design",
      "User Experience",
      "User Interface",
      "Design Systems",
      "Prototyping",
      "Wireframing",
    ],
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://gauravksingh.vercel.app/#website",
    url: "https://gauravksingh.vercel.app",
    name: "Gaurav Kumar Singh Portfolio",
    description:
      "Product designer portfolio showcasing UX, UI, and visual design work.",
    publisher: {
      "@id": "https://gauravksingh.vercel.app/#person",
    },
    inLanguage: "en-US",
  };

  const profilePageData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://gauravksingh.vercel.app/#profilepage",
    url: "https://gauravksingh.vercel.app",
    name: "Gaurav Kumar Singh | Product Designer & UX/UI Designer",
    description:
      "Product designer based in India creating seamless, human-centered experiences through UX, UI, and visual design.",
    mainEntity: {
      "@id": "https://gauravksingh.vercel.app/#person",
    },
    dateCreated: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
  };

  const portfolioData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://gauravksingh.vercel.app/projects#collection",
    url: "https://gauravksingh.vercel.app/projects",
    name: "Design Projects | Gaurav Kumar Singh",
    description: "UX/UI design case studies and projects by Gaurav Kumar Singh",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Article",
            name: "AI Resume Builder Redesign",
            description: "Transforming a desktop-heavy resume builder into a mobile-first experience with 33% faster creation time.",
            url: "https://gauravksingh.vercel.app/projects/resume-builder-redesign",
            author: { "@id": "https://gauravksingh.vercel.app/#person" },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Article",
            name: "User Onboarding Redesign",
            description: "Redesigning CA Monk's onboarding flow to reduce abandonment by 18% and boost profile completion by 28%.",
            url: "https://gauravksingh.vercel.app/projects/camonk-nux",
            author: { "@id": "https://gauravksingh.vercel.app/#person" },
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioData) }}
      />
    </>
  );
}
