export interface Project {
    id: string;
    title: string;
    company: string;
    description: string;
    image: string;
    protected: boolean;
    link?: string;
    featured: boolean;
    published: boolean;
}

export const projects: Project[] = [
    {
        id: "monk-design-system",
        title: "Monk Design System",
        company: "CA Monk",
        description: "The official design system for CA Monk, providing a unified visual language and reusable components for consistent brand experiences.",
        image: "/assets/projects/Monk-design-system.png",
        protected: true,
        link: "/projects/monk-design-system",
        featured: true,
        published: false
    },
    {
        id: "camonk-nux",
        title: "Redesigning new user onboarding",
        company: "CA Monk",
        description: "Streamlined the first-time user experience with intuitive flow, reducing drop-off rates and helping users to activate faster.",
        image: "/assets/projects/CaMonk-nux.png",
        protected: false,
        link: "/projects/camonk-nux",
        featured: true,
        published: true
    },
    {
        id: "resume-builder-redesign",
        title: "Redesigning for clarity",
        company: "CA Monk",
        description: "Redesigning a complex resume builder into a frictionless, minimal experience that prioritizes user focus and ease of completion.",
        image: "/assets/projects/resume-builder-redesign.png",
        protected: false,
        link: "/projects/resume-builder-redesign",
        featured: true,
        published: false
    },
    {
        id: "mentorship-portal-design",
        title: "Mentorship Portal (0 → 1)",
        company: "CA Monk",
        description: "Building an end-to-end mentorship ecosystem from scratch, designing tailored workflows for users to facilitate seamless connection and growth.",
        image: "/assets/projects/mentorship-portal-design.png",
        protected: false,
        link: "/projects/mentorship-portal-design",
        featured: true,
        published: false
    }
];
