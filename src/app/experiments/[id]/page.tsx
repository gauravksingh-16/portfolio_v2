"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PDFPopover from "@/components/PDFPopover";
import { experiments } from "@/data/experiments";

export default function ExperimentDetailPage() {
    const params = useParams();
    const router = useRouter();
    const [experiment, setExperiment] = useState<typeof experiments[0] | null>(null);

    useEffect(() => {
        const id = params.id as string;
        const found = experiments.find(exp => exp.id === id);
        
        if (found) {
            setExperiment(found);
        } else {
            // Redirect to experiments page if not found
            router.push('/experiments');
        }
    }, [params.id, router]);

    // Handle redirect for non-PDF links
    useEffect(() => {
        if (experiment?.link && !experiment.link.endsWith('.pdf')) {
            window.location.href = experiment.link;
        }
    }, [experiment]);

    if (!experiment) {
        return (
            <>
                <Header isInHero={false} currentSection={0} hideInFooter={false} />
                <main className="min-h-screen bg-white flex items-center justify-center">
                    <div className="font-helvetica text-lg">
                        <span className="font-denton italic">(loading)</span> Loading...
                    </div>
                </main>
            </>
        );
    }

    // If it's a PDF, show the popover
    if (experiment.link?.endsWith('.pdf')) {
        return (
            <>
                <Header isInHero={false} currentSection={0} hideInFooter={false} />
                <AnimatePresence>
                    <PDFPopover
                        pdfUrl={experiment.link}
                        experimentId={experiment.id}
                        title={experiment.title}
                        onClose={() => router.push('/experiments')}
                    />
                </AnimatePresence>
            </>
        );
    }

    return (
        <>
            <Header isInHero={false} currentSection={0} hideInFooter={false} />
            <main className="min-h-screen bg-white px-6 md:px-40 py-24 md:py-32">
                <h1 className="font-helvetica text-3xl md:text-5xl mb-8">
                    {experiment.title}
                </h1>
                <p className="font-helvetica text-lg">{experiment.description}</p>
            </main>
            <Footer />
        </>
    );
}
