"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Tilt3DProps {
  children: React.ReactNode;
  className?: string;
  maxRotation?: number; // Maximum rotation in degrees
}

export function Tilt3D({ children, className = "", maxRotation = 8 }: Tilt3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileOrReduced, setIsMobileOrReduced] = useState(true);

  // Framer Motion motion values for mouse relative position (0 to 1)
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Smooth springs to avoid jitter
  const springConfig = { damping: 22, stiffness: 160, mass: 0.6 };
  const rotateX = useSpring(useTransform(y, [0, 1], [maxRotation, -maxRotation]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-maxRotation, maxRotation]), springConfig);

  useEffect(() => {
    const checkViewport = () => {
      const hasTouch = window.matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 0;
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setIsMobileOrReduced(window.innerWidth < 1024 || hasTouch || prefersReduced);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobileOrReduced || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  // Mobile / Reduced Motion Fallback layout
  if (isMobileOrReduced) {
    return (
      <motion.div
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileTap={{ scale: 0.98 }}
        animate={{
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`relative w-full h-full rounded-2xl transition-shadow duration-300 ${
          isHovered ? "shadow-lg shadow-[#B18C6A]/10" : "shadow-md"
        } ${className}`}
        style={{ willChange: "transform" }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className="w-full h-full" style={{ perspective: 1000 }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        animate={{
          scale: isHovered ? 1.03 : 1,
          translateZ: isHovered ? 30 : 0,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={`relative w-full h-full transition-shadow duration-300 ${
          isHovered ? "shadow-2xl shadow-[#B18C6A]/20" : "shadow-md"
        } ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
}
