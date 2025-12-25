"use client";

interface ScrollIndicatorProps {
  sections: number;
  currentSection: number;
  isInHero: boolean;
}

export default function ScrollIndicator({
  sections,
  currentSection,
  isInHero,
}: ScrollIndicatorProps) {
  return (
    <div
      className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-2 md:gap-3 transition-all duration-300"
      style={{ mixBlendMode: "difference" }}
    >
      {Array.from({ length: sections }).map((_, index) => (
        <button
          key={index}
          onClick={() => {
            const sectionId = index === sections - 1 ? "fullscreen-footer" : `section-${index}`;
            const section = document.getElementById(sectionId);
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`transition-all duration-300 rounded-full bg-white ${
            currentSection === index 
              ? "w-8 md:w-12 h-[2px] md:h-1" 
              : "w-4 md:w-6 h-[1px] opacity-30"
          }`}
        />
      ))}
    </div>
  );
}
