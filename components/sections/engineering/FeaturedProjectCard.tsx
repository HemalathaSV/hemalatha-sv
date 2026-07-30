"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { CategoryBadge } from "./CategoryBadge";
import { TechnologyChip } from "./TechnologyChip";

export interface FeaturedProjectCardProps {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  buttons: { label: string; href?: string }[];
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function FeaturedProjectCard({
  title,
  category,
  description,
  technologies,
  buttons,
}: FeaturedProjectCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="group relative flex flex-col justify-between p-6 sm:p-10 rounded-2xl bg-[#0B1120]/90 backdrop-blur-xl border border-slate-800/80 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] w-full"
    >
      {/* Ambient Inner Gradient Glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.08),transparent_70%)] pointer-events-none"
      />

      <div className="space-y-6 relative z-10">
        {/* Header Badge */}
        <div className="flex items-center gap-3">
          <span className="text-amber-400 text-lg">⭐</span>
          <CategoryBadge category={category} />
        </div>

        {/* Title */}
        <h3 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors duration-200">
          {title}
        </h3>

        {/* Description */}
        <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-4xl">
          {description}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-2.5 pt-2">
          {technologies.map((tech, i) => (
            <TechnologyChip key={i} label={tech} />
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-4 pt-8 mt-6 border-t border-slate-800/80 relative z-10">
        {buttons.map((btn, i) => {
          const isPrimary = i === 0;
          return (
            <a
              key={i}
              href={btn.href || "#contact"}
              className={`h-11 px-6 rounded-full text-xs sm:text-sm font-semibold tracking-wide inline-flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] ${
                isPrimary
                  ? "bg-[#38BDF8] text-[#050816] hover:bg-[#38BDF8]/90 hover:scale-[1.02] shadow-md shadow-[#38BDF8]/20"
                  : "bg-transparent border border-slate-800 text-[#F8FAFC] hover:bg-[#111827] hover:border-[#38BDF8]/40"
              }`}
            >
              {btn.label}
            </a>
          );
        })}
      </div>
    </motion.div>
  );
}
