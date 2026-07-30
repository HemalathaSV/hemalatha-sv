"use client";

import React from "react";
import { motion } from "framer-motion";

interface FilterTabsProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export function FilterTabs({
  categories,
  activeCategory,
  onSelectCategory,
}: FilterTabsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#0B1120] border border-slate-800/80 w-full sm:w-auto">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`relative px-4 py-2 rounded-xl text-xs font-mono font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] ${
              isActive ? "text-[#050816] font-semibold" : "text-[#94A3B8] hover:text-[#F8FAFC]"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="activeFilterTab"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="absolute inset-0 bg-[#38BDF8] rounded-xl shadow-md"
              />
            )}
            <span className="relative z-10">{cat}</span>
          </button>
        );
      })}
    </div>
  );
}
