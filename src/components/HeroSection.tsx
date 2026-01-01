"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  startAnimation?: boolean;
}

export default function HeroSection({ startAnimation = false }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (startAnimation) {
      // Small delay to ensure smooth transition after loader
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [startAnimation]);

  return (
    <section
      id="section-0"
      aria-label="Hero section - Gaurav Kumar Singh Portfolio"
      className="relative h-screen w-full bg-green overflow-hidden"
    >
      {/* Hero Image - Desktop */}
      <div 
        className={`hidden md:block absolute inset-0 z-[2] transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <Image
          src="/assets/my image.png"
          alt="Gaurav Kumar Singh - Product Designer creating intuitive digital experiences"
          fill
          className="object-contain object-center"
          priority
          quality={85}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDAwUBAAAAAAAAAAAAAQIDAAQRBRIhBhMiMUFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEQA/ANF6d1C4vNQkhuYoY5IkVgI2JBBJHvA+VYpSlVLKlYAJn//Z"
        />
      </div>

      {/* Hero Image - Mobile */}
      <div 
        className={`md:hidden absolute inset-0 z-[2] transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <Image
          src="/assets/my image-mobile.png"
          alt="Gaurav Kumar Singh - Product Designer creating intuitive digital experiences"
          fill
          className="object-cover object-center"
          priority
          quality={85}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDAwUBAAAAAAAAAAAAAQIDAAQRBRIhBhMiMUFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEQA/ANF6d1C4vNQkhuYoY5IkVgI2JBBJHvA+VYpSlVLKlYAJn//Z"
        />
      </div>

      {/* Bottom Gradient SVG - Desktop */}
      <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-[5] w-[120vw]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1728"
          height="1441"
          viewBox="0 0 1728 1441"
          fill="none"
          className="w-full h-auto"
          style={{
            transform: "rotate(-1.434deg)",
            filter: "blur(150px)",
          }}
        >
          <g filter="url(#filter0_f_8_4)">
            <path
              d="M88.9777 400.711L1034.16 585.449L1647.46 457.841L1905.58 950.495L1304.35 1031.17L300.694 1040.17L-174.65 837.917L88.9777 400.711Z"
              fill="url(#paint0_linear_8_4)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_8_4"
              x="-574.65"
              y="0.710968"
              width="2880.23"
              height="1439.46"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="200"
                result="effect1_foregroundBlur_8_4"
              />
            </filter>
            <linearGradient
              id="paint0_linear_8_4"
              x1="-177.155"
              y1="737.812"
              x2="1898.96"
              y2="685.848"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF6732" />
              <stop offset="1" stopColor="#FFDC4B" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom Gradient SVG - Mobile */}
      <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 z-[5]" style={{ transform: "translateY(15%)" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="100"
          viewBox="0 0 150 400"
          fill="none"
          style={{
            transform: "rotate(-1.434deg)",
            filter: "blur(50px)",
            width: "300vw",
            height: "100vh",
          }}
        >
          <g filter="url(#filter0_f_132_5)">
            <path
              d="M-75.0488 100.383L195.948 219.091L369.823 147.141L447.338 445.755L276.531 489.549L-9.60156 487.005L-146.756 361.48L-75.0488 100.383Z"
              fill="url(#paint0_linear_132_5)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_132_5"
              x="-246.756"
              y="0.383316"
              width="794.094"
              height="589.166"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="50"
                result="effect1_foregroundBlur_132_5"
              />
            </filter>
            <linearGradient
              id="paint0_linear_132_5"
              x1="-148.265"
              y1="301.199"
              x2="443.349"
              y2="286.391"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF6732" />
              <stop offset="1" stopColor="#FFDC4B" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Hero Text - Overlay Layer (on top, z-index 20) */}
      <div className="absolute inset-0 flex items-end md:items-center justify-start md:justify-center z-20 pb-32 md:pb-0 md:translate-y-[10%] px-6 md:px-0">
        <div className="w-full md:w-[70vw]">
          {/* Mobile Layout - 100% opacity, no blend mode */}
          <div className="md:hidden">
            <div className="text-left uppercase font-helvetica text-white text-[11px] leading-tight tracking-wider mb-6">
              <div>/ PRODUCT DESIGN</div>
              <div>/ WEB DESIGN (UX/UI)</div>
              <div>/ VISUAL DESIGN</div>
            </div>

            <div className="mb-4">
              <span className="font-helvetica font-normal text-[80px] leading-[0.95] text-white block">
                Crafting
              </span>
              <span className="font-denton font-normal text-[80px] leading-[0.95] text-white italic block">
                Brilliance
              </span>
            </div>

            <div className="text-left max-w-[240px] normal-case leading-tight font-helvetica text-white text-[15px] mb-0">
              Product Designer based in India, creating intuitive and creative digital experiences.
            </div>
          </div>

          {/* Desktop Layout - with blend mode */}
          <div className="hidden md:block">
            <div className="flex justify-between items-end mb-4">
              <div className="text-left">
                <span
                  className="font-helvetica font-normal text-[140px] leading-none text-white"
                >
                  Crafting
                </span>
              </div>
              <div className="text-left uppercase font-helvetica text-white text-lg leading-normal tracking-wider pt-4">
                <div>/ PRODUCT DESIGN</div>
                <div>/ WEB DESIGN (UX/UI)</div>
                <div>/ VISUAL DESIGN</div>
              </div>
            </div>

            <div className="flex justify-between items-start">
              <div className="text-left max-w-[250px] normal-case leading-tight font-helvetica text-white text-lg tracking-wider">
                Product Designer based in India, creating intuitive and creative digital experiences.
              </div>
              <div className="text-right">
                <span
                  className="font-denton font-normal text-[140px] leading-none text-white italic"
                >
                  Brilliance
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
