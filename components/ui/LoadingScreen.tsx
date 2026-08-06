"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PROFILE } from "@/config/profile";

const roles = [
  "AI Engineer",
  "Machine Learning Enthusiast",
  "Researcher",
  "Full Stack Developer",
];

const initializationSequence = [
  { text: "Initializing Portfolio...", delay: 1800 },
  { text: "Loading AI Projects...", delay: 2200 },
  { text: "Loading Research...", delay: 2600 },
  { text: "Loading Experience...", delay: 3000 },
  { text: "Ready.", delay: 3400 },
];

export function LoadingScreen() {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [skipAnimation, setSkipAnimation] = useState<boolean>(false);
  const [roleIndex, setRoleIndex] = useState<number>(0);
  const [initLines, setInitLines] = useState<string[]>([]);

  useEffect(() => {
    const roleTimers: NodeJS.Timeout[] = [];
    const initTimers: NodeJS.Timeout[] = [];
    let exitTimer: NodeJS.Timeout;

    const mountTimer = setTimeout(() => {
      setIsMounted(true);
      
      // Check user preference for reduced motion dynamically
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        setSkipAnimation(true);
        setIsLoading(false);
        return;
      }

      // Role cycling timer
      roleTimers.push(setTimeout(() => setRoleIndex(1), 1200));
      roleTimers.push(setTimeout(() => setRoleIndex(2), 2000));
      roleTimers.push(setTimeout(() => setRoleIndex(3), 2800));

      // Initialization terminal sequence timers
      initializationSequence.forEach((item) => {
        initTimers.push(
          setTimeout(() => {
            setInitLines((prev) => [...prev, item.text]);
          }, item.delay)
        );
      });

      // Total loading screen timeout (duration ~4.0 seconds)
      exitTimer = setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    }, 0);

    return () => {
      clearTimeout(mountTimer);
      roleTimers.forEach(clearTimeout);
      initTimers.forEach(clearTimeout);
      if (exitTimer) clearTimeout(exitTimer);
    };
  }, []);

  // Prevent flash or hydration mismatch issues by rendering a stable placeholder
  if (!isMounted) {
    return <div className="fixed inset-0 z-[100] bg-[#FFCDC9]" />;
  }

  if (skipAnimation) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FFCDC9] text-[#2B2323] p-6 overflow-hidden select-none"
        >
          {/* Ambient Background Radial Glow */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,205,201,0.10),transparent_70%)] pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-center justify-center space-y-6 text-center max-w-md w-full">
            {/* 1. Profile Image with smooth scale and fade-in */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border border-[#FDACAC]/20 shadow-lg shadow-[#FDACAC]/12"
            >
              <Image
                src={PROFILE.profileImage}
                alt={PROFILE.name}
                fill
                priority
                unoptimized
                className="object-cover object-center"
              />
            </motion.div>

            {/* 2. Developer Name */}
            <div className="space-y-1">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#2B2323]"
              >
                {PROFILE.name}
              </motion.h1>

              {/* 3. Role transitions (smooth crossfading index) */}
              <div className="h-6 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={roleIndex}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="text-xs sm:text-sm font-mono text-[#FD7979] tracking-wide"
                  >
                    {roles[roleIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* 4. Terminal Initialization Sequence Panel */}
            <div className="w-full max-w-[280px] p-4 rounded-xl bg-[#FFF6F5]/60 border border-[#FDACAC]/35 font-mono text-[10px] sm:text-xs text-left text-[#5B4A4A] space-y-1.5 h-[120px] overflow-hidden backdrop-blur-sm">
              {initLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-center gap-2 ${
                    line === "Ready." ? "text-[#FD7979] font-bold" : ""
                  }`}
                >
                  <span className="text-[#7B6B6B] select-none">&gt;</span>
                  <span>{line}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
