"use client";

import React from "react";
import { motion } from "framer-motion";

interface NavLogoProps {
  onNavigate?: (href: string) => void;
}

export function NavLogo({ onNavigate }: NavLogoProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate("#home");
    } else {
      const target = document.querySelector("#home");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <motion.a
      href="#home"
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label="Hemalatha S V Home"
      className="group relative inline-flex items-center gap-2 rounded-lg py-1 px-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD7979] transition-colors"
    >
      <span className="font-heading text-base sm:text-lg font-bold tracking-tight text-[#2B2323] group-hover:text-white transition-colors duration-200">
        Hemalatha S V
      </span>
    </motion.a>
  );
}
