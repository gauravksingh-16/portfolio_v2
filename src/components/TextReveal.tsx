"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function TextReveal({
  children,
  delay = 0,
  className = "",
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.6,
          delay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
