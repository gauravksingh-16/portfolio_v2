"use client";

interface FixedFooterProps {
  isInHero: boolean;
  hideInFooter: boolean;
}

export default function FixedFooter({ isInHero, hideInFooter }: FixedFooterProps) {
  const socialLinks = [
    { id: "re", label: "RESUME", href: "/assets/Gaurav_Singh_ProductDesign_Resume.pdf" },
    { id: "in", label: "LINKEDIN", href: "https://www.linkedin.com/in/gauravksingh16/" },
    { id: "be", label: "BEHANCE", href: "https://www.behance.net/gauravsingh_16" },
    { id: "gh", label: "GITHUB", href: "https://github.com/gauravksingh-16" },
  ];

  return (
    <footer
      className="fixed bottom-0 left-0 right-0 z-50 px-6 md:px-8 py-4 md:py-6 text-white transition-all duration-300"
      style={{
        mixBlendMode: isInHero ? "normal" : "difference",
        opacity: hideInFooter ? 0 : 1,
        pointerEvents: hideInFooter ? "none" : "auto",
      }}
    >
      {/* Mobile Footer - Only Available for work and email */}
      <div className="md:hidden">
        <div className="font-helvetica text-right leading-tight">
          <div className="uppercase tracking-wider text-[9px]">Available for work</div>
          <a
            href="mailto:gauravkumarsingh3360@gmail.com"
            className="text-[11px] font-[500] relative inline-block pb-1"
            style={{ letterSpacing: "-0.02em" }}
          >
            <span className="font-denton font-medium italic">(@)</span> gauravkumarsingh3360@gmail.com
          </a>
        </div>
      </div>

      {/* Desktop Footer - Full content */}
      <div className="hidden md:flex items-end justify-between">
        <div className="font-helvetica text-xs">
          <div className="mb-2 uppercase tracking-wider">Available for work</div>
          <a
            href="mailto:gauravkumarsingh3360@gmail.com"
            className="text-lg font-[500] relative inline-block pb-1 transition-all hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 after:w-0"
            style={{ letterSpacing: "-0.02em" }}
          >
            <span className="font-denton font-medium italic">(m)</span> gauravkumarsingh3360@gmail.com
          </a>
        </div>

        <div className="flex gap-8 font-helvetica text-xs" style={{ letterSpacing: "-0.02em" }}>
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative pb-1 transition-all hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 after:w-0"
            >
              <span className="font-denton font-medium italic">({link.id})</span> {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
