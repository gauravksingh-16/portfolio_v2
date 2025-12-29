"use client";

import Header from "@/components/Header";
import FixedFooter from "@/components/FixedFooter";
import { useRouter } from "next/navigation";

export default function ComingSoonPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Header */}
            <Header isInHero={false} currentSection={-1} hideInFooter={false} />

            {/* Main Content - Centered */}
            <main className="flex-1 flex flex-col items-center justify-center px-6">
                {/* Icon */}
                <div className="mb-6 md:mb-8">
                    <img
                        src="/assets/blockface.svg"
                        alt="Avatar"
                        className="w-12 h-12 md:w-16 md:h-16"
                        style={{ filter: 'invert(1)' }}
                    />
                </div>

                {/* Title */}
                <h1 className="font-helvetica font-[400] text-3xl md:text-5xl lg:text-6xl text-black text-center mb-4 md:mb-6">
                    Coming <span className="font-denton font-[400] italic">Soon!</span>
                </h1>

                {/* Description */}
                <p className="font-helvetica font-[300] text-sm md:text-base text-black text-center max-w-sm md:max-w-md mb-8 md:mb-10 leading-normal">
                    Good stories take time to tell. I&apos;m currently finalizing the details and results of this work. Check back soon to see the full process.
                </p>

                {/* Go Back Button */}
                <button
                    onClick={() => router.back()}
                    className="font-helvetica font-[500] text-sm md:text-base text-black underline underline-offset-4 decoration-1 hover:opacity-60 transition-opacity cursor-pointer"
                >
                    Go Back
                </button>
            </main>

            {/* Fixed Footer */}
            <FixedFooter isInHero={false} hideInFooter={false} />
        </div>
    );
}
