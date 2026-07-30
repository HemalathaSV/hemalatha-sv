"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface HeroContentProps {
  className?: string;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function HeroContent({ className = "" }: HeroContentProps) {
  return (
    <div className={`max-w-[620px] w-full text-left flex flex-col justify-center space-y-3.5 sm:space-y-5 lg:space-y-6 ${className}`}>
      {/* Small Brand Label */}
      <motion.div variants={itemVariants} className="inline-flex items-center gap-2 self-start px-2.5 py-1 rounded-full bg-[#0B1120] border border-slate-800/80">
        <span className="h-2 w-2 rounded-full bg-[#38BDF8] animate-pulse" />
        <span className="text-xs font-mono font-semibold text-[#38BDF8] tracking-wider uppercase">
          Hemalatha S V AI
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        variants={itemVariants}
        className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-[#F8FAFC] leading-[1.04]"
      >
        Hemalatha S V
      </motion.h1>

      {/* Tagline */}
      <motion.p
        variants={itemVariants}
        className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#38BDF8] tracking-tight"
      >
        Building Intelligent AI Systems
      </motion.p>

      {/* Professional Title */}
      <motion.p
        variants={itemVariants}
        className="text-xs sm:text-sm md:text-base font-mono text-[#94A3B8] font-medium tracking-wide"
      >
        AI/ML Engineer | Agentic AI Developer
      </motion.p>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="text-sm sm:text-base md:text-lg text-[#94A3B8] leading-relaxed max-w-[580px] pt-1"
      >
        Designing and engineering intelligent AI systems, multi-agent applications, and research-driven software for real-world impact.
      </motion.p>
    </div>
  );
}
