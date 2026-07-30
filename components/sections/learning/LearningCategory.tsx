"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { SkillBadge } from "./SkillBadge";

export interface LearningCategoryProps {
  title: string;
  skills: string[];
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function LearningCategory({ title, skills }: LearningCategoryProps) {
  return (
    <motion.div
      variants={cardVariants}
      className="p-5 sm:p-6 rounded-2xl bg-[#0B1120]/80 backdrop-blur-xl border border-slate-800/80 shadow-lg space-y-3.5 hover:border-[#38BDF8]/30 transition-all duration-300"
    >
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]" />
        <h4 className="font-heading text-sm sm:text-base font-bold text-[#F8FAFC] tracking-tight">
          {title}
        </h4>
      </div>

      <div className="flex flex-wrap gap-2 pt-1">
        {skills.map((skill, i) => (
          <SkillBadge key={i} label={skill} />
        ))}
      </div>
    </motion.div>
  );
}
