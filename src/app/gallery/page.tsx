"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { galleryItems } from "@/data/gallery";

export default function GalleryPage() {
    return (
        <>
            <Header isInHero={false} currentSection={0} hideInFooter={false} />

            <main className="min-h-screen bg-white px-6 md:px-40 py-24 md:py-32">
                <h1 className="font-helvetica font-[500] text-3xl md:text-5xl mb-12 md:mb-20">
                    <span className="font-denton font-medium italic">(4)</span> Gallery
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
                    {galleryItems.map((item, index) => (
                        <div key={index} className="group">
                            <div className="aspect-[4/3] bg-black-mantle mb-4 md:mb-6 overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center text-white font-helvetica text-sm md:text-base">
                                    Gallery Image
                                </div>
                            </div>

                            <div>
                                <h2 className="font-helvetica text-lg md:text-2xl mb-2 text-black">
                                    {item.title}
                                </h2>
                                <p className="font-helvetica text-xs md:text-sm text-black leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </>
    );
}
