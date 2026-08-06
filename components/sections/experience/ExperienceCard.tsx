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
      className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#F7F5F4]/80 backdrop-blur-xl border border-[#B18C6A]/20 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#B18C6A]/65 hover:shadow-2xl hover:shadow-[#5A4030]/5 w-full"
    >
      <div className="space-y-3">
        {/* Step Index Badge & Organization */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-mono font-semibold text-[#5A4030] px-2.5 py-1 rounded-md bg-[#5A4030]/10 border border-[#B18C6A]/20">
            0{index + 1}
          </span>
          <span className="text-xs font-mono text-[#5F5854] font-medium truncate max-w-[240px]">
            {organization}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#2E2A28] group-hover:text-[#5A4030] transition-colors duration-200">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-[#5F5854] leading-relaxed pt-1">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
