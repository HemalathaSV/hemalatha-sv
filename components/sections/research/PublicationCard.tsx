"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ExternalLink, Download } from "lucide-react";
import { PublicationBadge } from "./PublicationBadge";

export interface PublicationCardProps {
  title: string;
  journal: string;
  status: string;
  category: string;
  description: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function PublicationCard({
  title,
  journal,
  status,
  category,
  description,
}: PublicationCardProps) {
  const paperUrl = "/research/IJCRT2512785.pdf";

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="group relative flex flex-col justify-between p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#0B1120]/80 backdrop-blur-xl border border-slate-800/80 shadow-2xl transition-all duration-300 hover:border-[#38BDF8]/40 hover:shadow-2xl hover:shadow-[#38BDF8]/5 w-full"
    >
      {/* Ambient Gradient Glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.06),transparent_70%)] pointer-events-none"
      />

      <div className="space-y-6 relative z-10">
        {/* Badges & Journal Meta */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <PublicationBadge status={status} category={category} />
          <span className="text-xs font-mono text-[#38BDF8] font-medium">
            IJCRT Journal
          </span>
        </div>

        {/* Paper Title */}
        <div className="space-y-2">
          <p className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider">
            Journal Article:
          </p>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors duration-200 leading-tight">
            {title}
          </h3>
        </div>

        {/* Journal Citation Box */}
        <div className="p-4 rounded-xl bg-[#111827] border border-slate-800/80 font-mono text-xs text-[#94A3B8] flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#38BDF8]" />
          <span><strong className="text-[#F8FAFC]">Journal:</strong> {journal}</span>
        </div>

        {/* Abstract / Description */}
        <div className="space-y-1.5">
          <p className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider">
            Abstract Overview:
          </p>
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap items-center gap-3.5 pt-8 mt-6 border-t border-slate-800/80 relative z-10">
        <a
          href={paperUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="h-11 px-6 rounded-full text-xs sm:text-sm font-semibold tracking-wide inline-flex items-center justify-center gap-2 bg-[#38BDF8] text-[#050816] hover:bg-[#38BDF8]/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md shadow-[#38BDF8]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
        >
          Read Paper <ExternalLink className="h-4 w-4" />
        </a>
        <a
          href={paperUrl}
          download="Tournament_Management_Agent_IJCRT.pdf"
          className="h-11 px-6 rounded-full text-xs sm:text-sm font-medium tracking-wide inline-flex items-center justify-center gap-2 bg-transparent border border-slate-800 text-[#F8FAFC] hover:bg-[#111827] hover:border-[#38BDF8]/40 active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
        >
          Download PDF <Download className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}
