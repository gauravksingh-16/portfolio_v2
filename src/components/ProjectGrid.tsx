"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import { type Project } from "@/data/projects";
import PasswordModal from "./PasswordModal";

const PDFPopover = dynamic(() => import("./PDFPopover"), { ssr: false });

interface ProjectGridProps {
    projects: Project[];
    showFeaturedBadge?: boolean;
    viewMode?: "grid" | "list";
}

export default function ProjectGrid({ projects, showFeaturedBadge = false, viewMode = "grid" }: ProjectGridProps) {
    const router = useRouter();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

    const handleProjectClick = (project: Project) => {
        // Check if project is unpublished first - navigate to coming soon page
        if (!project.published) {
            router.push("/coming-soon");
            return;
        }
        
        if (project.protected) {
            setSelectedProject(project);
        } else if (project.link) {
            // Check if it's a PDF
            if (project.link.endsWith('.pdf')) {
                setPdfUrl(project.link);
                setSelectedProjectId(project.id);
            } else {
                router.push(project.link);
            }
        }
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (viewMode === "list") {
        return (
            <>
                <div className="relative">
                    <div className="space-y-0">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="cursor-pointer border-b border-gray-200 py-8 md:py-12 flex flex-col md:flex-row md:justify-between md:items-center"
                                onClick={() => handleProjectClick(project)}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onMouseMove={handleMouseMove}
                            >
                                <div className="flex-1">
                                    <h3 className="font-helvetica text-2xl md:text-4xl mb-2 md:mb-4 text-black">
                                        {project.title}
                                    </h3>
                                    <p className="font-helvetica font-[500] text-sm md:text-base text-black-mantle leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="text-base md:text-base text-black-mantle font-helvetica">
                                    ({project.company})
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mouse-following image */}
                    {hoveredIndex !== null && (
                        <div
                            className="hidden md:block fixed pointer-events-none z-50 w-64 h-48 bg-black-mantle shadow-2xl transition-opacity duration-300"
                            style={{
                                left: `${mousePosition.x + 20}px`,
                                top: `${mousePosition.y + 20}px`,
                                transform: 'translate(0, -50%)',
                            }}
                        >
                            <div className="w-full h-full flex items-center justify-center text-white font-helvetica text-sm">
                                {projects[hoveredIndex].title}
                            </div>
                        </div>
                    )}
                </div>

                <AnimatePresence>
                    {selectedProject && (
                        <PasswordModal project={selectedProject} onClose={closeModal} />
                    )}
                </AnimatePresence>

                {pdfUrl && selectedProjectId && (
                    <PDFPopover
                        pdfUrl={pdfUrl}
                        experimentId={selectedProjectId}
                        onClose={() => {
                            setPdfUrl(null);
                            setSelectedProjectId(null);
                        }}
                    />
                )}
            </>
        );
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group cursor-pointer"
                        onClick={() => handleProjectClick(project)}
                    >
                        <div className="aspect-[4/3] bg-black-mantle mb-4 md:mb-6 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div>
                            <h3 className="font-helvetica text-2xl mb-2 text-black">
                                {project.title}{" "}
                                <span className="text-sm md:text-base text-black-mantle">({project.company})</span>
                                {showFeaturedBadge && project.featured && (
                                    <span className="ml-2 text-xs md:text-sm text-tangerine">Featured</span>
                                )}
                            </h3>
                            <p className="font-helvetica font-[300] text-sm text-black leading-tight">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <PasswordModal project={selectedProject} onClose={closeModal} />
                )}
                {pdfUrl && selectedProjectId && (
                    <PDFPopover
                        pdfUrl={pdfUrl}
                        experimentId={selectedProjectId}
                        title={projects.find(p => p.id === selectedProjectId)?.title}
                        onClose={() => {
                            setPdfUrl(null);
                            setSelectedProjectId(null);
                        }}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
