"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

interface ExperimentImageProps {
    src: string;
    alt: string;
    isVideo?: boolean;
}

export default function ExperimentImage({ src, alt, isVideo = false }: ExperimentImageProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const animationFrameRef = useRef<number>();

    const playReverse = () => {
        const video = videoRef.current;
        if (!video) return;

        const fps = 30;
        const interval = 1000 / fps;
        let lastTime = performance.now();

        const reversePlay = (currentTime: number) => {
            if (currentTime - lastTime >= interval) {
                if (video.currentTime <= 0) {
                    video.pause();
                    return;
                }
                video.currentTime = Math.max(0, video.currentTime - interval / 1000);
                lastTime = currentTime;
            }
            animationFrameRef.current = requestAnimationFrame(reversePlay);
        };

        animationFrameRef.current = requestAnimationFrame(reversePlay);
    };

    const handleMouseEnter = () => {
        if (videoRef.current && isVideo) {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current && isVideo) {
            videoRef.current.pause();
            playReverse();
        }
    };

    useEffect(() => {
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <div 
            className="relative w-full h-full overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isVideo ? (
                <video
                    ref={videoRef}
                    src={src}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                    preload="auto"
                />
            ) : (
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                />
            )}
        </div>
    );
}
