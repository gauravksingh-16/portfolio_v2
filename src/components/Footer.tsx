"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const indiaTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(new Date());
      setCurrentTime(indiaTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: "1", label: "HOME" },
    { id: "2", label: "ABOUT ME" },
    { id: "3", label: "WORKS" },
    { id: "4", label: "MY PHILOSOPHY" },
    { id: "5", label: "SERVICES" },
  ];

  const socialLinks = [
    { id: "re", label: "RESUME", href: "/assets/Gaurav_Singh_ProductDesign_Resume.pdf" },
    { id: "in", label: "LINKEDIN", href: "https://www.linkedin.com/in/gauravksingh16/" },
    { id: "be", label: "BEHANCE", href: "https://www.behance.net/gauravsingh_16" },
    { id: "gh", label: "GITHUB", href: "https://github.com/gauravksingh-16" },
  ];

  return (
    <footer id="fullscreen-footer" className="max-h-screen bg-white text-black px-6 md:px-12 py-12 flex flex-col justify-between">
      {/* Top Section - Contact Info */}
      <div className="flex justify-end mb-16 md:mb-0">
        <div className="text-right">
          <div className="font-helvetica text-xs md:text-sm mb-2 md:mb-4 tracking-wide text-black-mantle">
            HAVE A PROJECT? LET'S DISCUSS
          </div>
          <div className="font-helvetica text-2xl md:text-4xl font-bold mb-1 md:mb-2" style={{ letterSpacing: "-0.02em" }}>
            <a href="tel:917970755957"><span className="font-denton font-medium italic">(p)</span> +91 7970755957</a>
          </div>
          <div className="font-helvetica text-lg md:text-4xl font-bold" style={{ letterSpacing: "-0.02em" }}>
            <a href="mailto:gauravkumarsingh3360@gmail.com"><span className="font-denton font-medium italic">(m)</span> gauravkumarsingh3360@gmail.com</a>
          </div>
        </div>
      </div>

      {/* Middle Section - Name and Navigation */}
      <div className="mb-8 md:mb-0">
        <div className="mb-6 md:mb-2 flex flex-col items-start">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#section-${parseInt(item.id) - 1}`}
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById(`section-${parseInt(item.id) - 1}`);
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-helvetica text-sm md:mb-2"
              style={{ letterSpacing: "-0.02em" }}
            >
              <span className="font-denton font-medium italic">({item.id})</span> {item.label}
            </a>
          ))}
        </div>

        <h1 className="font-helvetica font-bold text-[48px] md:text-[122.25px] leading-[0.9] tracking-tight mb-3 md:mb-0">
          GAURAV KUMAR SINGH
        </h1>

        <div className="font-helvetica text-xs md:text-lg mb-6 md:mb-16 flex md:justify-between md:w-full" style={{ letterSpacing: "-0.02em" }}>
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block md:inline whitespace-nowrap mr-3 md:mr-0 transition-opacity hover:opacity-60"
            >
              <span className="font-denton font-medium italic">({link.id})</span> {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Section - Time and Copyright */}
      <div className="text-black-mantle flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end gap-4 md:gap-0">
        <div className="font-helvetica text-xs md:text-sm text-center md:text-left">
          <div>INDIA: (GMT +5:30) {currentTime}</div>
        </div>

        <div className="font-helvetica font-[500] text-xs md:text-sm text-center md:text-right">
          <div>© All right reserved.</div>
          <div>2025 Gaurav Kumar Singh</div>
        </div>
      </div>
    </footer>
  );
}
