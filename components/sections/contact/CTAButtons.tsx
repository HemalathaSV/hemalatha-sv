"use client";

import React from "react";
import { PROFILE } from "@/config/profile";

interface CTAButtonsProps {
  className?: string;
}

export function CTAButtons({ className = "" }: CTAButtonsProps) {
  return (
    <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 ${className}`}>
      {/* Primary Button */}
      <a
        href={`mailto:${PROFILE.email}`}
        className="h-12 sm:h-[52px] px-7 sm:px-8 w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#38BDF8] text-[#050816] font-semibold text-sm hover:bg-[#38BDF8]/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#38BDF8]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
      >
        Get In Touch
      </a>

      {/* Secondary Button */}
      <a
        href={PROFILE.resume}
        className="h-12 sm:h-[52px] px-7 sm:px-8 w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-transparent border border-[#38BDF8]/30 text-[#F8FAFC] font-medium text-sm hover:bg-[#0B1120] hover:border-[#38BDF8]/60 active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
      >
        Download Resume
      </a>
    </div>
  );
}
