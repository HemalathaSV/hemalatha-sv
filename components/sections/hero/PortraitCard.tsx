"use client";

import React from "react";
import Image from "next/image";
import { motion, MotionValue, useTransform } from "framer-motion";
import { PROFILE } from "@/config/profile";

interface PortraitCardProps {
  imageSrc?: string;
  alt?: string;
  className?: string;
  mouseX?: MotionValue<number>;
  mouseY?: MotionValue<number>;
}

export function PortraitCard({
  imageSrc = PROFILE.profileImage,
  alt = PROFILE.name,
  className = "",
  mouseX,
  mouseY,
}: PortraitCardProps) {
  const parallaxX = useTransform(mouseX || new MotionValue(0), [-0.5, 0.5], [-10, 10]);
  const parallaxY = useTransform(mouseY || new MotionValue(0), [-0.5, 0.5], [-10, 10]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{ x: mouseX ? parallaxX : 0, y: mouseY ? parallaxY : 0 }}
      className={`relative flex items-center justify-center w-full my-4 lg:my-0 ${className}`}
    >
      {/* Soft radial glow behind portrait */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_70%)] blur-2xl pointer-events-none"
      />

      {/* Floating Framer Motion Card Container */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] mx-auto overflow-hidden rounded-3xl bg-[#0B1120]/80 backdrop-blur-xl border border-[#38BDF8]/20 shadow-2xl shadow-black/70 p-3 sm:p-4"
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-[#050816]">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 420px"
            priority
            className="object-cover object-center transition-transform duration-500 hover:scale-105"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
