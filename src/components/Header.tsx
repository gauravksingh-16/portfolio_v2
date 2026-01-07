"use client";

import { useState } from "react";

interface HeaderProps {
  isInHero: boolean;
  currentSection: number;
  hideInFooter: boolean;
}

export default function Header({ isInHero, currentSection, hideInFooter }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "01", label: "HOME", mobileLabel: "Home" },
    { id: "02", label: "ABOUT ME", mobileLabel: "About me" },
    { id: "03", label: "WORKS", mobileLabel: "Works" },
    { id: "04", label: "MY PHILOSOPHY", mobileLabel: "My Philosophy" },
    { id: "05", label: "SERVICES", mobileLabel: "Services" },
  ];

  const handleNavClick = (index: number) => {
    // Check if we're on the homepage by looking for the homepage sections
    const homepageSection = document.getElementById(`section-${index}`);
    const isHomepage = window.location.pathname === "/" || window.location.pathname === "";
    
    if (isHomepage && homepageSection) {
      // If on homepage and section exists, scroll to it
      homepageSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // If not on homepage or section doesn't exist, navigate to home page with section hash
      window.location.href = `/#section-${index}`;
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className="fixed left-0 right-0 z-50 px-6 md:px-8 py-6 text-white transition-all duration-300"
        style={{
          mixBlendMode: isInHero ? "normal" : "difference",
          top: hideInFooter ? "-100px" : "0"
        }}
      >
        <div className="flex items-center justify-between">
          <div className="font-helvetica font-bold text-xs md:text-sm tracking-wider leading-[0.9]">
            <div>GAURAV</div>
            <div>KUMAR SINGH</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 font-helvetica text-xs nav-links" style={{ letterSpacing: "-0.02em" }}>
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={`#section-${index}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(index);
                }}
                className={`nav-link relative pb-1 transition-all ${currentSection === index ? "nav-link-active" : ""
                  }`}
              >
                <span className="font-denton font-medium italic">({item.id})</span> {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden font-helvetica text-xs"
            style={{ letterSpacing: "-0.02em" }}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="font-denton font-medium italic">(+)</span> MENU
          </button>
        </div>
      </header>

      {/* Mobile Sliding Menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`md:hidden fixed inset-0 bg-white z-[100] transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full px-6 py-6">
          {/* Header with Name and Close */}
          <div className="flex items-start justify-between mb-16">
            <div className="font-helvetica font-bold text-sm tracking-wider leading-[0.9] text-black">
              <div>GAURAV</div>
              <div>KUMAR SINGH</div>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="font-helvetica text-black text-xs"
              style={{ letterSpacing: "-0.02em" }}
              aria-label="Close navigation menu"
            >
              <span className="font-denton font-medium italic">(-)</span> CLOSE
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex flex-col space-y-2 mb-auto" aria-label="Main navigation">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(index)}
                className="text-left font-helvetica text-[40px] leading-tight text-black"
                style={{ letterSpacing: "-0.02em" }}
                aria-label={`Navigate to ${item.mobileLabel}`}
              >
                <span className="font-denton font-medium italic">({item.id.replace('0', '')})</span> {item.mobileLabel}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="text-right mt-auto space-y-1">
            <a href="/assets/Gaurav_Singh_ProductDesign_Resume.pdf" target="_blank" rel="noopener noreferrer" className="block font-helvetica text-sm text-black">
              <span className="font-denton font-medium italic">(re)</span> RESUME
            </a>
            <a href="https://www.linkedin.com/in/gauravksingh16/" target="_blank" rel="noopener noreferrer" className="block font-helvetica text-sm text-black">
              <span className="font-denton font-medium italic">(in)</span> LINKEDIN
            </a>
            <a href="https://www.behance.net/gauravsingh_16" target="_blank" rel="noopener noreferrer" className="block font-helvetica text-sm text-black">
              <span className="font-denton font-medium italic">(be)</span> BEHANCE
            </a>
            <a href="https://github.com/gauravksingh-16" target="_blank" rel="noopener noreferrer" className="block font-helvetica text-sm text-black">
              <span className="font-denton font-medium italic">(gh)</span> GITHUB
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
