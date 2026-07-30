"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { CategoryBadge } from "./CategoryBadge";
import { TechnologyChip } from "./TechnologyChip";

export interface ProjectCardProps {
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

export function ProjectCard({
  title,
  category,
  description,
  technologies,
  buttons,
}: ProjectCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#0B1120]/80 backdrop-blur-xl border border-slate-800/80 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/40 hover:shadow-2xl hover:shadow-[#38BDF8]/5 h-full"
    >
      <div className="space-y-4">
        {/* Category Badge */}
        <div className="flex items-center justify-between">
          <CategoryBadge category={category} />
        </div>

        {/* Title */}
        <h3 className="font-heading text-2xl font-bold tracking-tight text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors duration-200">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          {description}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech, i) => (
            <TechnologyChip key={i} label={tech} />
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-6 mt-4 border-t border-slate-800/60">
        {buttons.map((btn, i) => {
          const isPrimary = i === 0;
          return (
            <a
              key={i}
              href={btn.href || "#contact"}
              className={`px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] ${
                isPrimary
                  ? "bg-[#38BDF8] text-[#050816] hover:bg-[#38BDF8]/90 hover:scale-[1.02]"
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
