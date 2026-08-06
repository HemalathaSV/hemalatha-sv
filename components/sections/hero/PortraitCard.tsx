"use client";

import React from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PROFILE } from "@/config/profile";

export interface PortraitCardProps {
  imageSrc?: string;
  alt?: string;
  className?: string;
}

export function PortraitCard({
  imageSrc = PROFILE.profileImage,
  alt = PROFILE.name,
  className = "",
}: PortraitCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);

  // Framer Motion values for pointer coordinates relative to card
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 20, stiffness: 140, mass: 0.6 };
  const rotateX = useSpring(useTransform(y, [0, 1], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-15, 15]), springConfig);

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
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -10, 0] // Independent slow float cycle
      }}
      transition={{ 
        duration: 5, 
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror"
      }}
      className={`relative flex items-center justify-center w-full my-4 lg:my-0 ${className}`}
      style={{ perspective: 1000 }}
    >
      {/* Soft radial glow behind portrait */}
      <div
        aria-hidden="true"
        className="absolute -inset-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(177,140,106,0.20),transparent_75%)] w-[120%] h-[120%] blur-3xl pointer-events-none"
      />

      {/* Stable Premium Card Container */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d",
          boxShadow: isHovered
            ? "0 25px 60px rgba(177,140,106,0.30)"
            : "0 20px 50px rgba(90,64,48,0.15)",
        }}
        animate={{
          scale: isHovered ? 1.04 : 1,
          translateZ: isHovered ? 40 : 0,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] mx-auto overflow-hidden rounded-[32px] bg-[#F7F3F0] border-2 border-[#D6C3B3] hover:border-[#B18C6A] transition-all duration-500 group aspect-[3/4]"
      >
        <Image
          src={imageSrc}
          alt={alt}
          fill
          sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 420px"
          priority
          unoptimized
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          style={{ transform: "translateZ(20px)" }} // Image pops out slightly
        />
      </motion.div>
    </motion.div>
  );
}
