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
        className="absolute -inset-4 rounded-full bg-[radial-gradient(circle_at_center,rgba(253,121,121,0.15),transparent_70%)] blur-2xl pointer-events-none"
      />

      {/* Stable Premium Card Container */}
      <div className="relative z-10 w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] mx-auto overflow-hidden rounded-3xl bg-[#19191D]/80 backdrop-blur-xl border border-[#FD7979]/20 shadow-2xl shadow-black/70 p-3 sm:p-4 group">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-[#0F0F12]">
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
