"use client";

import ScrollReveal from "./ScrollReveal";

export default function PhilosophySection() {
  return (
    <section
      id="section-3"
      aria-labelledby="philosophy-heading"
      className="min-h-screen bg-green px-6 md:px-40 py-12 md:py-20"
    >
      {/* Section Heading */}
      <h2 id="philosophy-heading" className="font-helvetica font-[500] text-3xl md:text-5xl mb-12 md:mb-20 text-white">
        <span className="font-denton font-medium italic">(4)</span> My Philosophy
      </h2>

      {/* Main Statement */}
      <ScrollReveal delay={0.1}>
        <div className="mb-12 md:mb-20">
          <h3 className="text-3xl md:text-5xl font-helvetica text-white md:text-green-crust mb-8 md:mb-16 leading-tight max-w-full md:max-w-3xl uppercase">
            IT&apos;S NOT JUST WHAT I DO – IT&apos;S HOW I SEE THE WORLD.
          </h3>

          <p className="text-white font-[300] font-helvetica text-xl md:text-2xl leading-tight max-w-[90%] md:max-w-md mb-8 md:mb-20 md:pl-20">
            As a designer, I constantly observe how people interact with spaces, objects, and technology everyday moments become insights that shape my work.
          </p>
        </div>
      </ScrollReveal>

      {/* Image and Philosophy Content */}
      <ScrollReveal delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-12 md:mb-20">
          {/* Image */}
          <div>
            <div className="aspect-[1/1] w-full md:w-[200px] md:h-[200px] mb-4 overflow-hidden">
              <img
                src="/assets/ProfilePic.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <a className="text-white font-helvetica text-sm md:text-sm">
              <span className="font-denton italic">(hi)</span> Say Hello!
            </a>
          </div>

          {/* Philosophy Text */}
          <div className="flex flex-col max-w-full md:max-w-lg justify-start md:justify-center">
            <h4 className="text-3xl md:text-5xl font-helvetica mb-2 leading-tight">
              <span className="text-green-mantle">TECHNOLOGY</span>
            </h4>
            <h4 className="text-right text-3xl md:text-5xl font-helvetica mb-2 max-w-[200px] md:max-w-sm leading-tight">
              <span className="text-tangerine font-denton italic">(+) ART</span>
            </h4>
            <h4 className="text-3xl md:text-5xl font-helvetica mb-8 md:mb-12 max-w-full md:max-w-xl leading-tight">
              <span className="text-blue">(+) PEOPLE</span>
            </h4>

            <p className="text-white font-[300] font-helvetica max-w-[90%] text-xl md:text-2xl leading-tight">
              I believe design is more than function; it&apos;s about solving problems and creating experiences that are memorable, personal, and human.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Bottom Section - Experiments and Gallery */}
      <ScrollReveal delay={0.3}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Some Experiments */}
          <div
            onClick={() => window.location.href = '/experiments'}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/3] bg-black-mantle mb-4 overflow-hidden relative">
              <div className="w-full h-full flex items-center justify-center text-white font-helvetica text-sm md:text-base">
                Experiments
              </div>
            </div>
            <h5 className="text-white font-helvetica text-2xl">
              Some Experiments <span className="text-xs md:text-sm">(Self)</span>
            </h5>
          </div>

          {/* Gallery */}
          <div
            onClick={() => window.location.href = '/gallery'}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/3] bg-black-mantle mb-4 overflow-hidden relative">
              <div className="w-full h-full flex items-center justify-center text-white font-helvetica text-sm md:text-base">
                Gallery
              </div>
            </div>
            <h5 className="text-white font-helvetica text-2xl">
              Gallery <span className="text-xs md:text-sm">(Self)</span>
            </h5>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
