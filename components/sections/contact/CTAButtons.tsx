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
        className="h-12 sm:h-[52px] px-7 sm:px-8 w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#FD7979] text-[#151214] font-semibold text-sm hover:bg-[#FD7979]/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#FD7979]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD7979]"
      >
        Get In Touch
      </a>

      {/* Resume Dropdown Action Button */}
      <div className="relative w-full sm:w-auto" ref={dropdownRef}>
        <div className="flex items-center w-full sm:w-auto rounded-full bg-transparent border border-[#FDACAC]/30 focus-within:ring-2 focus-within:ring-[#FD7979] focus-within:border-transparent transition-all duration-200">
          <a
            href={PROFILE.resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex-1 sm:flex-none h-12 sm:h-[52px] pl-7 pr-4 sm:pl-8 sm:pr-5 inline-flex items-center justify-center rounded-l-full text-[#FFFFFF] font-medium text-sm hover:bg-[#19191D] active:scale-[0.98] transition-all duration-200"
          >
            Resume
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="h-12 sm:h-[52px] px-4 border-l border-[#FDACAC]/30 rounded-r-full text-[#B8B8C5] hover:text-[#FDACAC] hover:bg-[#19191D] transition-all duration-200 flex items-center justify-center"
            aria-label="More resume options"
          >
            <ChevronDown className={`h-4 w-4 transition-transform duration-250 ${isOpen ? "rotate-180" : ""}`} />
          </button>
        </div>

        {/* Dropdown Menu Overlay */}
        {isOpen && (
          <div className="absolute right-0 sm:left-0 sm:right-auto mt-2 w-48 rounded-xl bg-[#19191D] border border-[#FDACAC]/18 p-1.5 shadow-xl shadow-black/80 z-20 animate-in fade-in slide-in-from-top-2 duration-200">
            <a
              href={PROFILE.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 w-full px-3.5 py-2.5 rounded-lg text-left text-sm font-medium text-[#FFFFFF] hover:bg-[#222228] transition-all duration-200"
            >
              <FileText className="h-4 w-4 text-[#FD7979]" />
              View Resume
            </a>
            <a
              href={PROFILE.resume}
              download="Hemalatha_SV_Resume.pdf"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 w-full px-3.5 py-2.5 rounded-lg text-left text-sm font-medium text-[#FFFFFF] hover:bg-[#222228] transition-all duration-200"
            >
              <Download className="h-4 w-4 text-[#FDACAC]" />
              Download Resume
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
