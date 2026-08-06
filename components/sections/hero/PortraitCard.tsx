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
        className="absolute -inset-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,205,201,0.25),transparent_75%)] w-[120%] h-[120%] blur-3xl pointer-events-none"
      />

      {/* Stable Premium Card Container */}
      <div className="relative z-10 w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] mx-auto overflow-hidden rounded-3xl bg-[#FFF6F5]/80 backdrop-blur-xl border border-[#FDACAC]/20 shadow-2xl shadow-[#FDACAC]/15 p-3 sm:p-4 group">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-[#FFCDC9]">
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
      </div>
    </motion.div>
  );
}
