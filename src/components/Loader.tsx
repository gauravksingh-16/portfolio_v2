"use client";

import { useEffect, useState } from "react";

interface LoaderProps {
  onLoadComplete: () => void;
}

export default function Loader({ onLoadComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const minLoadTime = 800; // Reduced to 800ms for faster perceived load
    const startTime = Date.now();

    // Faster progress simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Faster increment (reaches 100 in ~1.5 seconds)
        return prev + 4;
      });
    }, 50);

    // Check if document is fully loaded
    const checkComplete = () => {
      const elapsed = Date.now() - startTime;
      if (document.readyState === "complete" && elapsed >= minLoadTime && progress >= 100) {
        setIsExiting(true);
        setTimeout(onLoadComplete, 500); // Faster exit animation
      }
    };

    window.addEventListener("load", checkComplete);

    // Fallback: complete after minimum time
    const timeout = setTimeout(() => {
      setProgress(100);
      setIsExiting(true);
      setTimeout(onLoadComplete, 500);
    }, minLoadTime + 300);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      window.removeEventListener("load", checkComplete);
    };
  }, [onLoadComplete, progress]);

  return (
    <div
      className={`fixed inset-0 z-[9999] overflow-hidden transition-all duration-700 ease-in-out ${isExiting ? "h-0" : "h-screen"
        }`}
    >
      <div className="absolute inset-0 bg-white flex flex-col">
        {/* Top section with name and tagline */}
        <div className="flex-1 flex items-center justify-between px-8 md:px-12">
          <div>
            <h1 className="font-helvetica font-bold text-xl md:text-xl leading-[0.9]">
              GAURAV
              <br />
              KUMAR SINGH
            </h1>
          </div>
          <div className="text-right">
            <p className="font-helvetica leading-tight text-xs md:text-xs">
              Building products
              <br />
              that feel human.
            </p>
          </div>
        </div>

        {/* Progress bar section */}
        <div className="relative h-[2px] bg-black">
          <div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage display */}
        <div className="flex-1 flex items-start justify-end px-8 md:px-12 pt-4">
          <span className="font-helvetica font-bold text-xl md:text-2xl">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
}
