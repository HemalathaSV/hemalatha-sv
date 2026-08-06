"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 12, scale: 0.985, rotateX: 2 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      exit={{ opacity: 0, y: -12, scale: 0.985, rotateX: -2 }}
      transition={{
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1], // Custom premium easeOutExpo
      }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className="flex-1 flex flex-col w-full"
    >
      {children}
    </motion.div>
  );
}
