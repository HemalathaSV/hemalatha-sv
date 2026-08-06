"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export interface ExperienceCardProps {
  title: string;
  organization: string;
  description: string;
  index: number;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function ExperienceCard({ title, organization, description, index }: ExperienceCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#19191D]/80 backdrop-blur-xl border border-[#FDACAC]/18 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#FDACAC]/40 hover:shadow-2xl hover:shadow-[#FD7979]/5 w-full"
    >
      <div className="space-y-3">
        {/* Step Index Badge & Organization */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-mono font-semibold text-[#FD7979] px-2.5 py-1 rounded-md bg-[#FD7979]/10 border border-[#FDACAC]/20">
            0{index + 1}
          </span>
          <span className="text-xs font-mono text-[#B8B8C5] font-medium truncate max-w-[240px]">
            {organization}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#FFFFFF] group-hover:text-[#FD7979] transition-colors duration-200">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-[#B8B8C5] leading-relaxed pt-1">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
