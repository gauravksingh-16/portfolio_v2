export interface Project {
    id: string;
    title: string;
    company: string;
    description: string;
    image: string;
    protected: boolean;
    link?: string;
    featured: boolean;
}

export const projects: Project[] = [
    {
        id: "career-prep-tools",
        title: "Career Prep Tools",
        company: "CA Monk",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/placeholder-project-1.jpg",
        protected: true,
        link: "/projects/career-prep-tools",
        featured: true
    },
    {
        id: "ai-platform",
        title: "AI Platform for HRs",
        company: "CA Monk",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/placeholder-project-2.jpg",
        protected: false,
        link: "/projects/ai-platform",
        featured: true
    },
    {
        id: "investor-pitch",
        title: "Investor Pitch Deck",
        company: "LFS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/placeholder-project-3.jpg",
        protected: true,
        link: "/projects/investor-pitch",
        featured: true
    },
    {
        id: "marketing-materials",
        title: "Marketing Materials",
        company: "LFS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/placeholder-project-4.jpg",
        protected: false,
        link: "/projects/marketing-materials",
        featured: true
    }
];
