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
      className="group flex items-center gap-3 p-4 rounded-xl bg-[#F7F5F4]/75 backdrop-blur-md border border-[#D8C8BB] shadow-md hover:-translate-y-1 hover:border-[#B18C6A]/65 hover:shadow-lg hover:shadow-[#5A4030]/5 transition-all duration-300"
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F5E9DF] text-[#8A6348] border border-[#D6C3B3] transition-colors">
        <span className="font-mono text-xs font-bold">0{iconIndex + 1}</span>
      </div>
      <span className="font-heading text-xs sm:text-sm font-semibold text-[#2E2A28] tracking-tight group-hover:text-[#5A4030] transition-colors">
        {title}
      </span>
    </motion.div>
  );
}
