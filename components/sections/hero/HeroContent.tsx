"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { PROFILE } from "@/config/profile";
import { CTAButtons } from "./CTAButtons";
import { Heading3D } from "@/components/ui/Heading3D";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function HeroContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ transformStyle: "preserve-3d" }}
      className="flex flex-col justify-center space-y-6 sm:space-y-8 w-full max-w-2xl text-left"
    >
      {/* 1. Greeting Badge */}
      <motion.div 
        variants={itemVariants} 
        style={{ transform: "translateZ(20px)" }}
        className="inline-flex items-center gap-2"
      >
        <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-[#F7F5F4] border border-[#D8C8BB] text-[#5A4030] shadow-sm">
          👋 Hello, I&apos;m
        </span>
      </motion.div>
 
      {/* 2. Main Name & Brand Title */}
      <motion.div 
        variants={itemVariants} 
        style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
        className="space-y-2"
      >
        <Heading3D tag="h1" className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
          {PROFILE.name}
        </Heading3D>
        <p style={{ transform: "translateZ(10px)" }} className="font-heading text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#5A4030] via-[#B18C6A] to-[#5A4030]">
          {PROFILE.title}
        </p>
      </motion.div>
 
      {/* 3. Tagline & Description */}
      <motion.div 
        variants={itemVariants} 
        style={{ transform: "translateZ(15px)" }}
        className="space-y-3"
      >
        <h2 className="text-base sm:text-lg font-mono font-medium text-[#5A4030]">
          {PROFILE.tagline}
        </h2>
        <p className="text-base sm:text-lg text-[#5F5854] leading-relaxed max-w-xl font-sans">
          Specializing in autonomous multi-agent systems, deep learning architectures, scalable FastAPI backends, and cutting-edge AI research to power next-generation software.
        </p>
      </motion.div>
 
      {/* 4. Action Buttons */}
      <motion.div 
        variants={itemVariants} 
        style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
        className="pt-2"
      >
        <CTAButtons />
      </motion.div>
    </motion.div>
  );
}
