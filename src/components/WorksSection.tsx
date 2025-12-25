"use client";

import { projects } from "@/data/projects";
import ProjectGrid from "./ProjectGrid";
import ScrollReveal from "./ScrollReveal";

export default function WorksSection() {
    const featuredProjects = projects.filter(project => project.featured);

    return (
        <section
            id="section-2"
            aria-labelledby="works-heading"
            className="min-h-screen bg-white px-6 md:px-40 py-12 md:py-20"
        >
            <h2 id="works-heading" className="font-helvetica font-[500] text-3xl md:text-5xl mb-12 md:mb-20">
                <span className="font-denton font-medium italic">(3)</span> Works
            </h2>

            <ScrollReveal delay={0.2}>
                <ProjectGrid projects={featuredProjects} />
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
                <div className="mt-12 md:mt-16 text-center">
                    <a
                        href="/projects"
                        className="inline-block font-helvetica font-[500] text-sm md:text-xl text-black hover:text-black-mantle hover:border-black-mantle transition-colors"
                    >
                        View All Projects
                    </a>
                </div>
            </ScrollReveal>
        </section>
    );
}
