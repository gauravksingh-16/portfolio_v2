"use client";

import { useState } from "react";
import { DotsSixVertical, List } from "@phosphor-icons/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectGrid from "@/components/ProjectGrid";
import { projects } from "@/data/projects";

export const dynamic = 'force-dynamic';

export default function ProjectsPage() {
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

    return (
        <>
            <Header isInHero={false} currentSection={0} hideInFooter={false} />

            <main className="min-h-screen bg-white px-6 md:px-40 py-24 md:py-32">
                <div className="flex items-center justify-between mb-12 md:mb-20">
                    <h1 className="font-helvetica font-[500] text-3xl md:text-5xl">
                        <span className="font-denton font-medium italic">(3)</span> All Works
                    </h1>

                    <div className="inline-flex overflow-hidden rounded-lg">
                        <button
                            onClick={() => setViewMode("grid")}
                            className={`px-2 md:px-4 py-2 md:py-4 transition-colors cursor-pointer ${
                                viewMode === "grid" ? "bg-black text-white" : "bg-gray-200 text-black"
                            }`}
                            aria-label="Grid view"
                        >
                            <DotsSixVertical size={24} />
                        </button>
                        <button
                            onClick={() => setViewMode("list")}
                            className={`px-2 md:px-4 py-2 md:py-4 transition-colors cursor-pointer ${
                                viewMode === "list" ? "bg-black text-white" : "bg-gray-200 text-black"
                            }`}
                            aria-label="List view"
                        >
                            <List size={24} />
                        </button>
                    </div>
                </div>

                <ProjectGrid projects={projects} viewMode={viewMode} />
            </main>

            <Footer />
        </>
    );
}
