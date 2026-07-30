"use client";

import React from "react";
import { motion } from "framer-motion";

export function LoaderAnimation() {
  return (
    <div className="relative flex items-center justify-center w-24 h-24 my-2">
      {/* Soft Ambient Center Glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[#38BDF8]/20 blur-xl animate-pulse"
      />

      <svg className="w-20 h-20 relative z-10" viewBox="0 0 100 100" fill="none">
        {/* Connecting Line Paths */}
        <motion.path
          d="M 20 50 L 50 20 L 80 50 L 50 80 Z"
          stroke="#38BDF8"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
        <motion.path
          d="M 50 20 L 50 80 M 20 50 L 80 50"
          stroke="#8B5CF6"
          strokeWidth="1"
          strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 0.2, ease: "easeInOut" }}
        />

        {/* Neural Network Node Circles */}
        <motion.circle
          cx="50"
          cy="20"
          r="4"
          fill="#38BDF8"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.4, delay: 0.4 }}
        />
        <motion.circle
          cx="80"
          cy="50"
          r="4"
          fill="#38BDF8"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.4, delay: 0.6 }}
        />
        <motion.circle
          cx="50"
          cy="80"
          r="4"
          fill="#38BDF8"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.4, delay: 0.8 }}
        />
        <motion.circle
          cx="20"
          cy="50"
          r="4"
          fill="#38BDF8"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.4, delay: 1.0 }}
        />

        {/* Central Active Core Node */}
        <motion.circle
          cx="50"
          cy="50"
          r="5"
          fill="#F8FAFC"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.4, 1] }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
      </svg>
    </div>
  );
}
