"use client";

import React from "react";
import { Tilt3D } from "@/components/ui/Tilt3D";
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
    <Tilt3D className="w-full h-full">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="group relative flex flex-col justify-between p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#F7F5F4]/80 backdrop-blur-xl border border-[#D8C8BB] shadow-2xl transition-all duration-300 w-full h-full"
    >
      {/* Ambient Gradient Glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[radial-gradient(circle_at_top_right,rgba(90,64,48,0.06),transparent_70%)] pointer-events-none"
      />

      <div className="space-y-6 relative z-10">
        {/* Badges & Journal Meta */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <PublicationBadge status={status} category={category} />
          <span className="text-xs font-mono text-[#5A4030] font-medium">
            IJCRT Journal
          </span>
        </div>

        {/* Paper Title */}
        <div className="space-y-2">
          <p className="text-xs font-mono text-[#5F5854] uppercase tracking-wider">
            Journal Article:
          </p>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#2E2A28] group-hover:text-[#5A4030] transition-colors duration-200 leading-tight">
            {title}
          </h3>
        </div>

        {/* Journal Citation Box */}
        <div className="p-4 rounded-xl bg-[#F8F3EF] border border-[#D8C8BB] font-mono text-xs text-[#5F5854] flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#5A4030]" />
          <span><strong className="text-[#2E2A28]">Journal:</strong> {journal}</span>
        </div>

        {/* Abstract / Description */}
        <div className="space-y-1.5">
          <p className="text-xs font-mono text-[#5F5854] uppercase tracking-wider">
            Abstract Overview:
          </p>
          <p className="text-sm sm:text-base text-[#5F5854] leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap items-center gap-3.5 pt-8 mt-6 border-t border-[#D8C8BB] relative z-10">
        <a
          href={paperUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="h-11 px-6 rounded-full text-xs sm:text-sm font-semibold tracking-wide inline-flex items-center justify-center gap-2 bg-[#5A4030] text-[#2E2A28] hover:bg-[#5A4030]/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md shadow-[#5A4030]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5A4030]"
        >
          Read Paper <ExternalLink className="h-4 w-4" />
        </a>
        <a
          href={paperUrl}
          download="Tournament_Management_Agent_IJCRT.pdf"
          className="h-11 px-6 rounded-full text-xs sm:text-sm font-medium tracking-wide inline-flex items-center justify-center gap-2 bg-transparent border border-[#D8C8BB] text-[#2E2A28] hover:bg-[#B18C6A] hover:text-white hover:border-[#B18C6A] active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5A4030]"
        >
          Download PDF <Download className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
    </Tilt3D>
  );
}
