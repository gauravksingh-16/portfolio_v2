export type ExperimentCategory = "all" | "logos" | "social-media" | "web-design" | "comic-strips";

export interface Experiment {
    id: string;
    title: string;
    company: string;
    description: string;
    image: string;
    category: Exclude<ExperimentCategory, "all">;
    link?: string;
}

export const experiments: Experiment[] = [
    {
        id: "curry-chronicles-comic-strip",
        title: "Curry Chronicles",
        company: "Competition",
        description: "A vibrant comic tracing curry's journey from ancient royal kitchens of Bharat to modern tables worldwide; a story of flavor, heritage, and how one dish united cultures across time.",
        image: "/assets/experiements/curry-chronicles.mp4",
        category: "comic-strips",
        link: "/assets/experiements/Curry Chronicles.pdf"
    },
    {
        id: "united-against-drugs-comic-strip",
        title: "United Against Drugs",
        company: "Competition",
        description: "A powerful comic about friendship, courage, and hope; as Maya and her friends unite to fight substance abuse, save lives, and spark a movement for a drug-free future.",
        image: "/assets/experiements/uad.mp4",
        category: "comic-strips",
        link: "/assets/experiements/United Against Drugs.pdf"
    },
    {
        id: "experiment-3",
        title: "Experiment 3",
        company: "Personal",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/placeholder-experiment-3.jpg",
        category: "web-design",
        link: "/experiments/experiment-3"
    },
    {
        id: "experiment-4",
        title: "Experiment 4",
        company: "Personal",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/placeholder-experiment-4.jpg",
        category: "logos",
        link: "/experiments/experiment-4"
    },
    {
        id: "experiment-5",
        title: "Experiment 5",
        company: "Personal",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/placeholder-experiment-5.jpg",
        category: "social-media",
        link: "/experiments/experiment-5"
    },
    {
        id: "imd-150-comic-strip",
        title: "IMD 150",
        company: "Competition",
        description: "A comic celebrating 150 years of IMD from early forecasts to modern tech protecting lives and inspiring future meteorologists.",
        image: "/assets/experiements/IMD.mp4",
        category: "comic-strips",
        link: "/assets/experiements/IMD 150.pdf"
    }
];
