"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface ContactCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function ContactCard({ icon: Icon, label, value, href }: ContactCardProps) {
  const content = (
    <motion.div
      variants={cardVariants}
      className="group relative flex items-center gap-4 p-5 sm:p-6 rounded-2xl bg-[#0B1120]/80 backdrop-blur-xl border border-slate-800/80 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/40 hover:shadow-2xl hover:shadow-[#38BDF8]/5 w-full"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#111827] text-[#38BDF8] border border-slate-800/80 group-hover:border-[#38BDF8]/40 group-hover:scale-105 transition-all">
        <Icon className="h-5 w-5 stroke-[1.75]" />
      </div>

      <div className="flex flex-col min-w-0">
        <span className="text-xs font-mono font-medium text-[#94A3B8] uppercase tracking-wider">
          {label}
        </span>
        <span className="font-heading text-sm sm:text-base font-semibold text-[#F8FAFC] tracking-tight truncate group-hover:text-[#38BDF8] transition-colors">
          {value}
        </span>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded-2xl"
      >
        {content}
      </a>
    );
  }

  return content;
}
