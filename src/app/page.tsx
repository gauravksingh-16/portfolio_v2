"use client";

import { useEffect, useState, lazy, Suspense } from "react";
import Header from "@/components/Header";
import FixedFooter from "@/components/FixedFooter";
import ScrollIndicator from "@/components/ScrollIndicator";
import HeroSection from "@/components/HeroSection";
import Loader from "@/components/Loader";

// Force dynamic rendering to avoid SSR issues with framer-motion
export const dynamic = 'force-dynamic';

// Lazy load below-the-fold components
const AboutSection = lazy(() => import("@/components/AboutSection"));
const WorksSection = lazy(() => import("@/components/WorksSection"));
const PhilosophySection = lazy(() => import("@/components/PhilosophySection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const Footer = lazy(() => import("@/components/Footer"));

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Check if loader has already been shown in this session
    const hasShownLoader = sessionStorage.getItem('loaderShown');
    if (!hasShownLoader) {
      setShowLoader(true);
    } else {
      setIsLoading(false);
    }
  }, []);
  const [currentSection, setCurrentSection] = useState(0);
  const [headerInHero, setHeaderInHero] = useState(true);
  const [footerInHero, setFooterInHero] = useState(true);
  const [indicatorInHero, setIndicatorInHero] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const totalSections = 6;

  useEffect(() => {
    // Handle hash navigation on page load
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const section = document.getElementById(hash.substring(1));
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const indicatorPosition = scrollPosition + windowHeight / 2;

      // Get all sections by their IDs
      const sections = [
        document.getElementById("section-0"),
        document.getElementById("section-1"),
        document.getElementById("section-2"),
        document.getElementById("section-3"),
        document.getElementById("section-4"),
        document.getElementById("fullscreen-footer"),
      ];

      // Find which section the indicator is currently in
      let currentSectionIndex = 0;
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = scrollPosition + rect.top;
          const sectionBottom = sectionTop + rect.height;

          if (indicatorPosition >= sectionTop && indicatorPosition < sectionBottom) {
            currentSectionIndex = i;
            break;
          }
        }
      }
      setCurrentSection(currentSectionIndex);

      // Hero section calculations
      const heroSection = sections[0];
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom + scrollPosition;
        setHeaderInHero(scrollPosition < heroBottom);
        setIndicatorInHero(indicatorPosition < heroBottom);
        setFooterInHero(scrollPosition + windowHeight - 100 <= heroBottom);
      }

      // Check if full-screen footer is visible
      const footer = sections[5];
      if (footer) {
        setIsFooterVisible(footer.getBoundingClientRect().top < windowHeight);
      }
    };

    // Initial call and after loading completes
    if (!isLoading) {
      setTimeout(handleScroll, 100);
    }
    
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isLoading]);

  return (
    <>
      <main id="main-content" className="relative overflow-x-hidden">
        <div 
          className={`transition-opacity duration-700 ${
            !isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Header isInHero={headerInHero} currentSection={currentSection} hideInFooter={isFooterVisible} />
          <FixedFooter isInHero={footerInHero} hideInFooter={isFooterVisible} />
          <ScrollIndicator
            sections={totalSections}
            currentSection={currentSection}
            isInHero={indicatorInHero}
          />
        </div>

        <HeroSection startAnimation={!isLoading} />
        <Suspense fallback={<div className="min-h-screen" />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen" />}>
          <WorksSection />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen" />}>
          <PhilosophySection />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen" />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Footer />
        </Suspense>
      </main>

      {showLoader && <Loader onLoadComplete={() => {
        setIsLoading(false);
        sessionStorage.setItem('loaderShown', 'true');
      }} />}
    </>
  );
}
