"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Tilt3DProps {
  children: React.ReactNode;
  className?: string;
  maxRotation?: number; // Maximum rotation in degrees
}

export function Tilt3D({ children, className = "", maxRotation = 6 }: Tilt3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Framer Motion motion values for mouse relative position (0 to 1)
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Smooth springs to avoid jitter
  const springConfig = { damping: 25, stiffness: 180, mass: 0.8 };
  const rotateX = useSpring(useTransform(y, [0, 1], [maxRotation, -maxRotation]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-maxRotation, maxRotation]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
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

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      animate={{
        scale: isHovered ? 1.015 : 1,
        z: isHovered ? 15 : 0,
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
}
