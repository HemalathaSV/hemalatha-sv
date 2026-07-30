"use client";

import React from "react";
import { motion } from "framer-motion";

export function ScrollIndicator() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#about");
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
    >
      <a
        href="#about"
        onClick={handleClick}
        aria-label="Scroll down to About"
        className="group flex flex-col items-center gap-2 text-[#94A3B8] hover:text-[#38BDF8] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded-full p-1"
      >
        {/* Mouse Icon Outline */}
        <div className="w-5 h-8 rounded-full border-2 border-current flex justify-center p-1 transition-colors">
          <motion.div
            animate={{
              y: [0, 8, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-1.5 rounded-full bg-current"
          />
        </div>
        <span className="text-[10px] font-mono tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
          Scroll
        </span>
      </a>
    </motion.div>
  );
}
