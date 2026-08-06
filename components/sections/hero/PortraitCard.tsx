"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PROFILE } from "@/config/profile";

interface PortraitCardProps {
  imageSrc?: string;
  alt?: string;
  className?: string;
}

export function PortraitCard({
  imageSrc = PROFILE.profileImage,
  alt = PROFILE.name,
  className = "",
}: PortraitCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative flex items-center justify-center w-full my-4 lg:my-0 ${className}`}
    >
      {/* Soft radial glow behind portrait */}
      <div
        aria-hidden="true"
        className="absolute -inset-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(177,140,106,0.20),transparent_75%)] w-[120%] h-[120%] blur-3xl pointer-events-none"
      />

      {/* Stable Premium Card Container */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          boxShadow: isHovered
            ? "0 20px 50px rgba(177,140,106,0.30)"
            : "0 20px 50px rgba(90,64,48,0.15)",
        }}
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
        />
      </div>
    </motion.div>
  );
}
