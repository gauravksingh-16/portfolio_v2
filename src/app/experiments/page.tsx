"use client";

import { useState, useEffect } from "react";
import dynamicImport from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import { DotsSixVertical, List } from "@phosphor-icons/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExperimentImage from "@/components/ExperimentImage";
import { experiments, type ExperimentCategory } from "@/data/experiments";

const PDFPopover = dynamicImport(() => import("@/components/PDFPopover"), { ssr: false });

export const dynamic = 'force-dynamic';

export default function ExperimentsPage() {
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [activeCategory, setActiveCategory] = useState<ExperimentCategory>("all");
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    const [selectedExperimentId, setSelectedExperimentId] = useState<string | null>(null);

    // Load saved preferences on mount
    useEffect(() => {
        const savedViewMode = localStorage.getItem('experimentsViewMode') as "grid" | "list" | null;
        const savedCategory = localStorage.getItem('experimentsCategory') as ExperimentCategory | null;
        
        if (savedViewMode) setViewMode(savedViewMode);
        if (savedCategory) setActiveCategory(savedCategory);
    }, []);

    // Save view mode preference
    const handleViewModeChange = (mode: "grid" | "list") => {
        setViewMode(mode);
        localStorage.setItem('experimentsViewMode', mode);
    };

    // Save category preference
    const handleCategoryChange = (category: ExperimentCategory) => {
        setActiveCategory(category);
        localStorage.setItem('experimentsCategory', category);
    };

    const categories: { id: ExperimentCategory; label: string }[] = [
        { id: "all", label: "All" },
        { id: "logos", label: "Logos" },
        { id: "social-media", label: "Social Media Design" },
        { id: "web-design", label: "Web Design" },
        { id: "comic-strips", label: "Comic Strips" }
    ];

    const getCountByCategory = (category: ExperimentCategory) => {
        if (category === "all") return experiments.length;
        return experiments.filter(exp => exp.category === category).length;
    };

    const filteredExperiments = activeCategory === "all"
        ? experiments
        : experiments.filter(exp => exp.category === activeCategory);

    const handleExperimentClick = (experiment: typeof experiments[0]) => {
        if (experiment.link) {
            if (experiment.link.endsWith('.pdf')) {
                setPdfUrl(experiment.link);
                setSelectedExperimentId(experiment.id);
            } else {
                window.location.href = experiment.link;
            }
        }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <>
            <Header isInHero={false} currentSection={0} hideInFooter={false} />

            <main className="min-h-screen bg-white px-6 md:px-40 py-24 md:py-32">
                <div className="flex items-center justify-between mb-8 md:mb-12">
                    <h1 className="font-helvetica font-[500] text-3xl md:text-5xl">
                        <span className="font-denton font-medium italic">(4)</span> Some Experiments
                    </h1>

                    {/* Hide toggle on mobile, show only on desktop */}
                    <div className="hidden md:inline-flex overflow-hidden rounded-lg">
                        <button
                            onClick={() => handleViewModeChange("grid")}
                            className={`px-4 py-4 transition-colors cursor-pointer ${viewMode === "grid" ? "bg-black text-white" : "bg-gray-200 text-black"
                                }`}
                            aria-label="Grid view"
                        >
                            <DotsSixVertical size={28} />
                        </button>
                        <button
                            onClick={() => handleViewModeChange("list")}
                            className={`px-4 py-4 transition-colors cursor-pointer ${viewMode === "list" ? "bg-black text-white" : "bg-gray-200 text-black"
                                }`}
                            aria-label="List view"
                        >
                            <List size={28} />
                        </button>
                    </div>
                </div>

                {/* Category Filter - Dropdown on mobile, Tabs on desktop */}
                <nav className="mb-12 md:mb-20">
                    {/* Mobile Custom Dropdown */}
                    <div className="md:hidden w-2/3 relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full flex items-center justify-between border-b border-black pb-4 cursor-pointer focus:outline-none"
                        >
                            <span className="font-helvetica text-base text-black">
                                {categories.find(c => c.id === activeCategory)?.label}{" "}
                                <span className="font-denton italic">({getCountByCategory(activeCategory)})</span>
                            </span>
                            <svg
                                width="12"
                                height="8"
                                viewBox="0 0 12 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                            >
                                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 w-full bg-white border border-black mt-2 z-50 shadow-lg">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => {
                                            handleCategoryChange(category.id);
                                            setIsDropdownOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-3 font-helvetica text-sm transition-colors ${activeCategory === category.id
                                            ? "bg-black text-white"
                                            : "text-black hover:bg-gray-100"
                                            }`}
                                    >
                                        {category.label} <span className="font-denton italic">({getCountByCategory(category.id)})</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Desktop Tabs */}
                    <ul className="hidden md:flex flex-wrap gap-6 md:gap-8">
                        {categories.map((category) => (
                            <li key={category.id}>
                                <button
                                    onClick={() => handleCategoryChange(category.id)}
                                    className={`nav-link relative pb-1 font-helvetica text-sm md:text-base transition-all cursor-pointer ${activeCategory === category.id
                                        ? "text-black nav-link-active"
                                        : "text-black-mantle"
                                        }`}
                                >
                                    {category.label} <span className="font-denton italic">({getCountByCategory(category.id)})</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {viewMode === "grid" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
                        {filteredExperiments.map((experiment, index) => (
                            <div
                                key={index}
                                className="group cursor-pointer"
                                onClick={() => handleExperimentClick(experiment)}
                            >
                                <div className="aspect-[4/3] bg-black-mantle mb-4 md:mb-6 overflow-hidden relative">
                                    {experiment.image ? (
                                        <ExperimentImage
                                            src={experiment.image}
                                            alt={experiment.title}
                                            isVideo={experiment.image.endsWith('.mp4')}
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-white font-helvetica text-sm md:text-base">
                                            Experiment Image
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <h2 className="font-helvetica text-lg md:text-2xl mb-2 text-black">
                                        {experiment.title}{" "}
                                        <span className="text-sm md:text-base text-black-mantle">({experiment.company})</span>
                                    </h2>
                                    <p className="font-helvetica font-[400] text-xs md:text-sm text-black leading-tight">
                                        {experiment.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="relative">
                        <div className="space-y-0">
                            {filteredExperiments.map((experiment, index) => (
                                <div
                                    key={index}
                                    className="cursor-pointer border-b border-gray-200 py-8 md:py-12 flex flex-col md:flex-row md:justify-between md:items-center gap-4"
                                    onClick={() => handleExperimentClick(experiment)}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    onMouseMove={handleMouseMove}
                                >
                                    <div className="flex-1">
                                        <h2 className="font-helvetica text-2xl md:text-4xl mb-2 md:mb-4 text-black">
                                            {experiment.title}
                                        </h2>
                                        <p className="font-helvetica text-sm md:text-base text-black-mantle leading-relaxed">
                                            {experiment.description}
                                        </p>
                                    </div>
                                    <div className="text-base md:text-xl text-black-mantle font-helvetica">
                                        ({experiment.company})
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Mouse-following preview */}
                        {hoveredIndex !== null && filteredExperiments[hoveredIndex].image && (
                            <div
                                className="hidden md:block fixed pointer-events-none z-50 w-64 h-48 rounded-lg shadow-2xl overflow-hidden"
                                style={{
                                    left: `${mousePosition.x + 20}px`,
                                    top: `${mousePosition.y + 20}px`,
                                    transform: 'translate(0, -50%)',
                                }}
                            >
                                <ExperimentImage
                                    src={filteredExperiments[hoveredIndex].image}
                                    alt={filteredExperiments[hoveredIndex].title}
                                    isVideo={filteredExperiments[hoveredIndex].image.endsWith('.mp4')}
                                />
                            </div>
                        )}
                    </div>
                )}
            </main>

            <Footer />

            <AnimatePresence>
                {pdfUrl && selectedExperimentId && (
                    <PDFPopover
                        pdfUrl={pdfUrl}
                        experimentId={selectedExperimentId}
                        title={experiments.find(e => e.id === selectedExperimentId)?.title}
                        onClose={() => {
                            setPdfUrl(null);
                            setSelectedExperimentId(null);
                        }}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
