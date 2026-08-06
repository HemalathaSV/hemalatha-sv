"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { BookOpen, ExternalLink, ArrowRight } from "lucide-react";
import { Publication } from "@/data/research";

interface ResearchCardProps {
  publication: Publication;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function ResearchCard({ publication }: ResearchCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#19191D]/80 backdrop-blur-xl border border-[#FDACAC]/18 shadow-2xl transition-all duration-300 hover:border-[#FDACAC]/40 hover:shadow-2xl hover:shadow-[#FD7979]/5 w-full"
    >
      <div className="space-y-6">
        {/* Status Badge & Category */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {publication.status}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#FD7979]/10 text-[#FD7979] border border-[#FDACAC]/30">
              {publication.category}
            </span>
          </div>
          <span className="text-xs font-mono text-[#FD7979] font-medium">
            {publication.date}
          </span>
        </div>

        {/* Paper Title */}
        <div className="space-y-2">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#FFFFFF] group-hover:text-[#FD7979] transition-colors duration-200">
            {publication.title}
          </h3>
        </div>

        {/* Journal Citation Box */}
        <div className="p-4 rounded-xl bg-[#222228] border border-[#FDACAC]/18 font-mono text-xs text-[#B8B8C5] flex items-center gap-3">
          <BookOpen className="h-4 w-4 text-[#FD7979] shrink-0" />
          <span><strong className="text-[#FFFFFF]">Journal:</strong> {publication.journal}</span>
        </div>

        {/* Abstract Overview */}
        <p className="text-sm sm:text-base text-[#B8B8C5] leading-relaxed">
          {publication.description}
        </p>

        {/* Research Highlights Chips */}
        <div className="flex flex-wrap gap-2 pt-2">
          {publication.highlights.map((h, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-lg bg-[#222228] border border-[#FDACAC]/18 text-xs font-mono text-[#B8B8C5]"
            >
              {h}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap items-center gap-3.5 pt-8 mt-6 border-t border-[#FDACAC]/18">
        {publication.pdfUrl && (
          <a
            href={publication.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 px-6 rounded-full text-xs sm:text-sm font-semibold tracking-wide inline-flex items-center gap-2 bg-[#FD7979] text-[#151214] hover:bg-[#FD7979]/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-[#FD7979]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD7979]"
          >
            Read Publication <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
        {publication.projectSlug && (
          <Link
            href={`/projects/${publication.projectSlug}`}
            className="h-11 px-6 rounded-full text-xs sm:text-sm font-medium tracking-wide inline-flex items-center gap-2 bg-transparent border border-[#FDACAC]/18 text-[#FFFFFF] hover:bg-[#222228] hover:border-[#FDACAC]/40 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD7979]"
          >
            View Related Project <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}
