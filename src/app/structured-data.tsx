export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gaurav Kumar Singh",
    jobTitle: "Product Designer",
    description: "Product designer based in India creating seamless, human-centered experiences through UX, UI, and visual design.",
    url: "https://gauravkumarsingh.com",
    image: "https://gauravkumarsingh.com/assets/my image.png",
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
    email: "gauravkumarsingh3360@gmail.com",
    telephone: "+917970755957",
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
    alumniOf: {
      "@type": "Organization",
      name: "Design Education",
    },
    worksFor: [
      {
        "@type": "Organization",
        name: "CA Monk",
        jobTitle: "Product Designer",
        startDate: "2025",
      },
      {
        "@type": "Organization",
        name: "Lakhani Financial Services",
        jobTitle: "Communications Designer",
        startDate: "2023",
        endDate: "2024",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
