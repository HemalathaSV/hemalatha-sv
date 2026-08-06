"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface ResearchHighlightProps {
  title: string;
  iconIndex?: number;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function ResearchHighlight({ title, iconIndex = 0 }: ResearchHighlightProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="group flex items-center gap-3 p-4 rounded-xl bg-[#19191D]/75 backdrop-blur-md border border-[#FDACAC]/18 shadow-md hover:-translate-y-1 hover:border-[#FD7979]/40 hover:shadow-lg hover:shadow-[#FD7979]/5 transition-all duration-300"
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#222228] text-[#FD7979] border border-[#FDACAC]/18 group-hover:border-[#FD7979]/40 transition-colors">
        <span className="font-mono text-xs font-bold">0{iconIndex + 1}</span>
      </div>
      <span className="font-heading text-xs sm:text-sm font-semibold text-[#FFFFFF] tracking-tight group-hover:text-[#FD7979] transition-colors">
        {title}
      </span>
    </motion.div>
  );
}
