"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

export function HeroParticles() {
  // Generate 30 deterministic particle coordinates and animation parameters
  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: (i * 3.33 + (i % 5) * 7) % 100, // Percentage X
      y: (i * 3.1 + (i % 7) * 11) % 100, // Percentage Y
      size: (i % 3) + 1.5, // 1.5px to 3.5px size
      duration: 10 + (i % 10) * 2, // 10s to 28s float duration
      delay: (i % 5) * 1.5,
      yOffset: -20 - (i % 4) * 15,
      xOffset: (i % 2 === 0 ? 1 : -1) * (10 + (i % 3) * 10),
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#38BDF8]/20 dark:bg-[#38BDF8]/25"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            boxShadow: `0 0 ${p.size * 2}px rgba(56, 189, 248, 0.4)`,
          }}
          animate={{
            y: [0, p.yOffset, 0],
            x: [0, p.xOffset, 0],
            opacity: [0.15, 0.45, 0.15],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
