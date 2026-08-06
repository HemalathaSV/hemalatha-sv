"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Heading3DProps {
  children: string;
  className?: string;
  tag?: "h1" | "h2" | "h3";
}

export function Heading3D({ children, className = "", tag = "h2" }: Heading3DProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Motion values for tilt relative to heading element
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 20, stiffness: 180, mass: 0.6 };
  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), springConfig);

  useEffect(() => {
    const hasTouch = window.matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 0;
    setTimeout(() => {
      setIsMobile(window.innerWidth < 1024 || hasTouch);
    }, 0);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  const Component = tag;

  if (isMobile) {
    return (
      <Component className={`font-heading font-bold text-[#2E2A28] ${className}`}>
        {children}
      </Component>
    );
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30, scale: 0.95, z: -50 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, z: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="inline-block relative select-none cursor-default py-2"
    >
      {/* 3D Extrusion Layer - Back Depth shadow */}
      <span
        style={{
          transform: "translateZ(-8px) scale(0.98)",
          userSelect: "none",
        }}
        className={`absolute inset-0 font-heading font-bold text-[#D6C3B3]/40 blur-[2px] select-none ${className}`}
        aria-hidden="true"
      >
        {children}
      </span>

      {/* 3D Bevel Highlight Layer */}
      <span
        style={{
          transform: "translateZ(-4px)",
          userSelect: "none",
        }}
        className={`absolute inset-0 font-heading font-bold text-[#B18C6A]/55 select-none ${className}`}
        aria-hidden="true"
      >
        {children}
      </span>

      {/* Main Front Layer - Floating dynamically on Z-axis */}
      <Component
        style={{
          transform: isHovered ? "translateZ(35px)" : "translateZ(18px)",
          transformStyle: "preserve-3d",
          textShadow: "0 12px 28px rgba(90, 64, 48, 0.15)",
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className={`font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2E2A28] via-[#5A4030] to-[#2E2A28] ${className}`}
      >
        {children}
      </Component>
    </motion.div>
  );
}
