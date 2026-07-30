"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoaderAnimation } from "./LoaderAnimation";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Timer to unmount loading screen after 2.0s
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050816] text-[#F8FAFC] p-6 overflow-hidden select-none"
        >
          {/* Ambient Background Radial Glow */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_65%)] pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-center justify-center space-y-5 text-center max-w-sm">
            {/* 1. Brand Logo (Fades In First) */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#F8FAFC]"
            >
              Hemalatha S V{" "}
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-mono font-bold bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/30">
                AI
              </span>
            </motion.div>

            {/* 2. Neural Network Loader Animation */}
            <LoaderAnimation />

            {/* 3. Tagline (Appears sequentially) */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-heading text-sm font-medium text-[#38BDF8] tracking-tight"
            >
              Building Intelligent AI Solutions
            </motion.p>

            {/* 4. Minimal Loading Status Text */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
              className="text-xs font-mono text-[#94A3B8] uppercase tracking-widest pt-2"
            >
              Loading...
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
