"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode, useState, useEffect } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    y?: number;
    className?: string;
    once?: boolean;
}

export default function ScrollReveal({
    children,
    delay = 0,
    duration = 0.8,
    y = 40,
    className = "",
    once = false,
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });
    const [shouldBeVisible, setShouldBeVisible] = useState(false);
    const prevScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollingDown = currentScrollY > prevScrollY.current;

            if (isInView) {
                // Element is in view, show it
                setShouldBeVisible(true);
            } else if (!scrollingDown) {
                // Scrolling up and element not in view, hide it
                setShouldBeVisible(false);
            }
            // If scrolling down and not in view, keep current state (stay visible)

            prevScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isInView]);

    useEffect(() => {
        if (isInView) {
            setShouldBeVisible(true);
        }
    }, [isInView]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y }}
            animate={shouldBeVisible ? { opacity: 1, y: 0 } : { opacity: 0, y }}
            transition={{
                duration,
                delay: shouldBeVisible ? delay : 0,
                ease: [0.25, 0.1, 0.25, 1]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
