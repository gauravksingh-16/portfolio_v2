"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section
      id="section-1"
      aria-labelledby="about-heading"
      className="min-h-screen bg-white px-6 md:px-40 py-12 md:py-20"
    >
      {/* Section Heading */}
      <h2 id="about-heading" className="font-helvetica font-[500] text-3xl md:text-5xl mb-12 md:mb-20">
        <span className="font-denton italic">(2)</span> About me
      </h2>

      {/* To me Statement */}
      <ScrollReveal delay={0.1}>
        <div className="max-w-3xl md:mx-auto mb-12 md:mb-20 md:pl-20">
          <p className="text-xl md:text-2xl font-denton mb-3 md:mb-4 text-black-mantle">To me</p>
          <h3 className="text-5xl md:text-[80px] font-helvetica leading-[1.1] md:leading-[1] text-black">
            <span className="text-blue">Design</span> is not just pixels, but the{" "}
            <span className="text-tangerine">
              bridge between people and possibilities.
            </span>
          </h3>
        </div>
      </ScrollReveal>

      {/* Video Placeholder */}
      <ScrollReveal delay={0.2}>
        <div className="w-full mx-auto mb-6 md:mb-8">
          <div
            className="aspect-video bg-black-mantle flex items-center justify-center relative cursor-pointer overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
            onClick={togglePlay}
          >
            <span className="text-white font-helvetica text-sm md:text-xl">Video Placeholder</span>

            {/* Play/Pause Button - Desktop: follows mouse on hover, Mobile: fixed bottom-right always visible */}

            {/* Desktop: Mouse-following button */}
            {isHovering && (
              <div
                className="hidden md:block absolute pointer-events-none transition-opacity duration-200"
                style={{
                  left: `${mousePosition.x}px`,
                  top: `${mousePosition.y}px`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className="px-4 py-2 bg-white bg-opacity-90 flex items-center justify-center">
                  <span
                    key={isPlaying ? 'pause' : 'play'}
                    className="font-helvetica font-[400] text-sm text-black animate-[fadeIn_0.3s_ease-in-out]"
                  >
                    {isPlaying ? 'Pause' : 'Play'}
                  </span>
                </div>
              </div>
            )}

            {/* Mobile: Fixed bottom-right button */}
            <div className="md:hidden absolute bottom-4 right-4 pointer-events-none">
              <div className="px-3 py-1 bg-white bg-opacity-90 flex items-center justify-center">
                <span
                  key={isPlaying ? 'pause-mobile' : 'play-mobile'}
                  className="font-helvetica font-[400] text-xs text-black animate-[fadeIn_0.3s_ease-in-out]"
                >
                  {isPlaying ? 'Pause' : 'Play'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Hello Statement with Image */}
      <ScrollReveal delay={0.3}>
        <div className="flex items-start gap-3 md:gap-4 mb-12 md:mb-20">
          <img src="/assets/blockface.svg" alt="Avatar" className="w-12 h-12 md:w-24 md:h-24 flex-shrink-0" style={{ filter: 'invert(1)' }} />
          <div>
            <p className="font-helvetica font-normal leading-tight text-xl md:text-2xl text-black">
              Hello! I&apos;m
              <br />Gaurav Kumar Singh
            </p>
            <a href="/assets/Gaurav_Singh_ProductDesign_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm font-bold font-helvetica text-black inline-block mt-1">
              <span className="font-denton italic">(re)</span> Get my Resume
            </a>
          </div>
        </div>
      </ScrollReveal>

      {/* My Experience Section */}
      <ScrollReveal delay={0.4}>
        <div className="max-w-3xl md:mx-auto md:pl-20">
          <p className="text-xl md:text-2xl font-denton mb-3 md:mb-4 text-black-mantle">My Experience</p>

          <div className="mb-12 md:mb-16">
            <h4 className="text-4xl md:text-5xl max-w-xs font-helvetica mb-1 leading-tight">
              <span className="text-green-mantle">THINK</span>
            </h4>
            <h4 className="text-right max-w-[200px] md:max-w-xs text-4xl md:text-5xl font-helvetica mb-1 leading-tight">
              <span className="text-tangerine font-denton italic">(+) DESIGN</span>
            </h4>
            <h4 className="text-4xl md:text-5xl max-w-xs font-helvetica mb-6 md:mb-8 leading-tight">
              <span className="text-blue">(+) SHIP</span>
            </h4>

            <p className="font-helvetica font-[500] text-2xl md:text-3xl mb-8 md:mb-12 max-w-full md:max-w-2xl leading-tight text-black">
              A creative professional with 2 years of experience delivering design solutions for businesses and users alike.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start border-b border-black-mantle pb-3 md:pb-4">
              <div className="mb-1 md:mb-0">
                <p className="font-helvetica font-[300] text-lg md:text-lg text-black">
                  <span className="font-[500]">Product Designer</span> / CA Monk
                </p>
              </div>
              <div>
                <p className="font-helvetica text-sm md:text-lg text-black">2024 - 2025</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start border-b border-black-mantle pb-3 md:pb-4">
              <div className="mb-1 md:mb-0">
                <p className="font-helvetica font-[300] text-lg md:text-lg text-black">
                  <span className="font-[500]">Visual & Strategic Designer</span> / Lakhani Finanacial Services
                </p>
              </div>
              <div>
                <p className="font-helvetica text-sm md:text-lg text-black">2023 - 2024</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
