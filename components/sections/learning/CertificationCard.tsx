"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export interface CertificationCardProps {
  issuer: string;
  title: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function CertificationCard({ issuer, title }: CertificationCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[#0B1120]/80 backdrop-blur-xl border border-slate-800/80 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/40 hover:shadow-xl hover:shadow-[#38BDF8]/5"
    >
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-semibold text-[#38BDF8] px-2.5 py-0.5 rounded bg-[#38BDF8]/10 border border-[#38BDF8]/20">
            {issuer}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </div>

        <h4 className="font-heading text-base sm:text-lg font-bold tracking-tight text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors duration-200 pt-1">
          {title}
        </h4>
      </div>
    </motion.div>
  );
}
