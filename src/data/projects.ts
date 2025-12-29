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
        id: "camonk-profile-onboarding",
        title: "Redesigning new user onboarding",
        company: "CA Monk",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/placeholder-project-2.jpg",
        protected: false,
        link: "/projects/camonk-profile-onboarding",
        featured: true,
        published: false
    },
    {
        id: "investor-pitch",
        title: "Investor Pitch Deck",
        company: "LFS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/placeholder-project-3.jpg",
        protected: true,
        link: "/projects/investor-pitch",
        featured: true,
        published: false
    },
    {
        id: "marketing-materials",
        title: "Marketing Materials",
        company: "LFS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/placeholder-project-4.jpg",
        protected: false,
        link: "/projects/marketing-materials",
        featured: true,
        published: false
    }
];
