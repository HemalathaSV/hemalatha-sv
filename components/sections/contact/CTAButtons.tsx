"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, FileText, Download } from "lucide-react";
import { PROFILE } from "@/config/profile";

interface CTAButtonsProps {
  className?: string;
}

export function CTAButtons({ className = "" }: CTAButtonsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 ${className}`}>
      {/* Primary Button */}
      <a
        href={`mailto:${PROFILE.email}`}
        className="h-12 sm:h-[52px] px-7 sm:px-8 w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#5A4030] text-[#2E2A28] font-semibold text-sm hover:bg-[#5A4030]/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#5A4030]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5A4030]"
      >
        Get In Touch
      </a>

      {/* Resume Dropdown Action Button */}
      <div className="relative w-full sm:w-auto" ref={dropdownRef}>
        <div className="flex items-center w-full sm:w-auto rounded-full bg-transparent border border-[#D8C8BB] focus-within:ring-2 focus-within:ring-[#5A4030] focus-within:border-transparent transition-all duration-200">
          <a
            href={PROFILE.resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex-1 sm:flex-none h-12 sm:h-[52px] pl-7 pr-4 sm:pl-8 sm:pr-5 inline-flex items-center justify-center rounded-l-full text-[#2E2A28] font-medium text-sm hover:bg-[#F7F5F4] active:scale-[0.98] transition-all duration-200"
          >
            Resume
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="h-12 sm:h-[52px] px-4 border-l border-[#D8C8BB] rounded-r-full text-[#5F5854] hover:text-[#B18C6A] hover:bg-[#F7F5F4] transition-all duration-200 flex items-center justify-center"
            aria-label="More resume options"
          >
            <ChevronDown className={`h-4 w-4 transition-transform duration-250 ${isOpen ? "rotate-180" : ""}`} />
          </button>
        </div>

        {/* Dropdown Menu Overlay */}
        {isOpen && (
          <div className="absolute right-0 sm:left-0 sm:right-auto mt-2 w-48 rounded-xl bg-[#F7F5F4] border border-[#D8C8BB] p-1.5 shadow-xl shadow-black/80 z-20 animate-in fade-in slide-in-from-top-2 duration-200">
            <a
              href={PROFILE.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 w-full px-3.5 py-2.5 rounded-lg text-left text-sm font-medium text-[#2E2A28] hover:bg-[#B18C6A] hover:text-white hover:border-[#B18C6A] transition-all duration-200"
            >
              <FileText className="h-4 w-4 text-[#5A4030]" />
              View Resume
            </a>
            <a
              href={PROFILE.resume}
              download="Hemalatha_SV_Resume.pdf"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 w-full px-3.5 py-2.5 rounded-lg text-left text-sm font-medium text-[#2E2A28] hover:bg-[#B18C6A] hover:text-white hover:border-[#B18C6A] transition-all duration-200"
            >
              <Download className="h-4 w-4 text-[#B18C6A]" />
              Download Resume
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
