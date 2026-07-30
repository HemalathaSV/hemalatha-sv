"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface CTAButtonsProps {
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
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

export function CTAButtons({
  onPrimaryClick,
  onSecondaryClick,
  className = "",
}: CTAButtonsProps) {
  const handlePrimaryClick = () => {
    if (onPrimaryClick) {
      onPrimaryClick();
    } else {
      const target = document.querySelector("#engineering-work");
      if (target) {
        const navOffset = 80;
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - navOffset,
          behavior: "smooth",
        });
      }
    }
  };

  const handleSecondaryClick = () => {
    if (onSecondaryClick) {
      onSecondaryClick();
    } else {
      const target = document.querySelector("#contact");
      if (target) {
        const navOffset = 80;
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - navOffset,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-1 sm:pt-3 ${className}`}
    >
      {/* Primary Button */}
      <button
        type="button"
        onClick={handlePrimaryClick}
        className="h-12 sm:h-[52px] px-6 sm:px-7 w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#38BDF8] text-[#050816] font-semibold text-sm hover:bg-[#38BDF8]/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#38BDF8]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]"
      >
        View My Work
      </button>

      {/* Secondary Button */}
      <button
        type="button"
        onClick={handleSecondaryClick}
        className="h-12 sm:h-[52px] px-6 sm:px-7 w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-transparent border border-[#38BDF8]/30 text-[#F8FAFC] font-medium text-sm hover:bg-[#0B1120] hover:border-[#38BDF8]/60 active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]"
      >
        Download Resume
      </button>
    </motion.div>
  );
}
