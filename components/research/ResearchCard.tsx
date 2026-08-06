"use client";

import React from "react";
import { Tilt3D } from "@/components/ui/Tilt3D";
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
    <Tilt3D className="w-full h-full">
      <motion.div
        variants={cardVariants}
        className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#F7F5F4]/80 backdrop-blur-xl border border-[#D8C8BB] shadow-2xl transition-all duration-300 w-full h-full"
    >
      <div className="space-y-6">
        {/* Status Badge & Category */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {publication.status}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#5A4030]/15 text-[#2E2A28] border border-[#D8C8BB]">
              {publication.category}
            </span>
          </div>
          <span className="text-xs font-mono text-[#5A4030] font-medium">
            {publication.date}
          </span>
        </div>

        {/* Paper Title */}
        <div className="space-y-2">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#2E2A28] group-hover:text-[#5A4030] transition-colors duration-200">
            {publication.title}
          </h3>
        </div>

        {/* Journal Citation Box */}
        <div className="p-4 rounded-xl bg-[#F8F3EF] border border-[#D8C8BB] font-mono text-xs text-[#5F5854] flex items-center gap-3">
          <BookOpen className="h-4 w-4 text-[#5A4030] shrink-0" />
          <span><strong className="text-[#2E2A28]">Journal:</strong> {publication.journal}</span>
        </div>

        {/* Abstract Overview */}
        <p className="text-sm sm:text-base text-[#5F5854] leading-relaxed">
          {publication.description}
        </p>

        {/* Research Highlights Chips */}
        <div className="flex flex-wrap gap-2 pt-2">
          {publication.highlights.map((h, i) => (
            <span
              key={i}
              className="inline-flex items-center justify-center px-[18px] py-[12px] rounded-full bg-[#F7F1EC] border border-[#D6C3B3] text-xs font-medium text-[#6F5542] hover:bg-[#B18C6A] hover:text-white hover:border-[#B18C6A] transition-all duration-300 ease-in-out"
            >
              {h}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap items-center gap-3.5 pt-8 mt-6 border-t border-[#D8C8BB]">
        {publication.pdfUrl && (
          <a
            href={publication.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 px-6 rounded-full text-xs sm:text-sm font-semibold tracking-wide inline-flex items-center gap-2 bg-[#5A4030] text-[#2E2A28] hover:bg-[#5A4030]/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-[#5A4030]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5A4030]"
          >
            Read Publication <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
        {publication.projectSlug && (
          <Link
            href={`/projects/${publication.projectSlug}`}
            className="h-11 px-6 rounded-full text-xs sm:text-sm font-medium tracking-wide inline-flex items-center gap-2 bg-transparent border border-[#D8C8BB] text-[#2E2A28] hover:bg-[#B18C6A] hover:text-white hover:border-[#B18C6A] active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5A4030]"
          >
            View Related Project <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        )}
      </div>
    </motion.div>
    </Tilt3D>
  );
}
