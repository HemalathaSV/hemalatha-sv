"use client";

import React from "react";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "./nav-config";

interface NavLinksProps {
  activeSection: string;
  onNavigate: (href: string) => void;
  className?: string;
}

export function NavLinks({ activeSection, onNavigate, className = "" }: NavLinksProps) {
  return (
    <ul className={`flex items-center gap-1 xl:gap-1.5 ${className}`}>
      {NAV_ITEMS.map((item) => {
        const isActive = activeSection === item.id;

        return (
          <li key={item.id} className="relative">
            <a
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item.href);
              }}
              aria-current={isActive ? "page" : undefined}
              className={`relative px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] ${
                isActive
                  ? "text-[#38BDF8] font-semibold"
                  : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#0B1120]/60"
              }`}
            >
              <span className="relative z-10">{item.label}</span>

              {/* Smooth Animated Layout Underline */}
              {isActive && (
                <motion.span
                  layoutId="activeNavUnderline"
                  className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-[#38BDF8] shadow-[0_0_8px_rgba(56,189,248,0.6)]"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
