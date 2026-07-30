"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export interface TimelineItemProps {
  step: number;
  title: string;
  isLast?: boolean;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export function TimelineItem({ step, title, isLast = false }: TimelineItemProps) {
  return (
    <motion.div variants={itemVariants} className="relative flex gap-4 sm:gap-6 pb-8 last:pb-0">
      {/* Vertical Connecting Line & Node Circle */}
      <div className="relative flex flex-col items-center">
        {/* Node Circle */}
        <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0B1120] border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-mono font-bold shadow-[0_0_12px_rgba(56,189,248,0.2)]">
          {step}
        </div>
        {/* Connecting Line */}
        {!isLast && (
          <div
            aria-hidden="true"
            className="w-0.5 grow bg-gradient-to-b from-[#38BDF8]/40 via-slate-800 to-slate-800/20 my-1"
          />
        )}
      </div>

      {/* Glassmorphism Card */}
      <div className="group flex-1 p-4 sm:p-5 rounded-xl bg-[#0B1120]/75 backdrop-blur-md border border-slate-800/80 shadow-md hover:-translate-y-0.5 hover:border-[#38BDF8]/40 hover:shadow-lg hover:shadow-[#38BDF8]/5 transition-all duration-300">
        <h4 className="font-heading text-sm sm:text-base font-semibold text-[#F8FAFC] tracking-tight group-hover:text-[#38BDF8] transition-colors duration-200">
          {title}
        </h4>
      </div>
    </motion.div>
  );
}
