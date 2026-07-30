"use client";

import React from "react";
import { PROFILE } from "@/config/profile";

export function CTAButtons() {
  const handleScrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const workSection = document.getElementById("engineering-work");
    if (workSection) {
      const navOffset = 80;
      const elementPosition = workSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
      {/* Primary Action Button */}
      <a
        href="#engineering-work"
        onClick={handleScrollToWork}
        className="h-12 sm:h-[52px] px-7 sm:px-8 w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#38BDF8] text-[#050816] font-semibold text-sm sm:text-base tracking-wide hover:bg-[#38BDF8]/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#38BDF8]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
      >
        View My Work
      </a>

      {/* Secondary Action Button */}
      <a
        href={PROFILE.resume}
        className="h-12 sm:h-[52px] px-7 sm:px-8 w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#0B1120] border border-slate-800 text-[#F8FAFC] font-medium text-sm sm:text-base tracking-wide hover:border-[#38BDF8]/40 hover:bg-[#111827] active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
      >
        Download Resume
      </a>
    </div>
  );
}
