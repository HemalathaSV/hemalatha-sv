"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { CertificationItem } from "@/data/certifications";

export interface CertificationCardProps {
  certificate: CertificationItem;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function CertificationCard({ certificate }: CertificationCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[#19191D]/80 backdrop-blur-xl border border-[#FDACAC]/18 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#FDACAC]/40 hover:shadow-xl hover:shadow-[#FD7979]/5"
    >
      <div className="space-y-3.5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-mono font-semibold text-[#FD7979] px-2.5 py-0.5 rounded bg-[#FD7979]/10 border border-[#FDACAC]/20">
            {certificate.provider}
          </span>
          {certificate.completionDate && (
            <span className="text-[11px] font-mono text-[#B8B8C5]">
              {certificate.completionDate}
            </span>
          )}
        </div>

        <div className="space-y-1">
          <span className="text-[10px] font-mono text-[#B8B8C5] uppercase tracking-wider block">
            {certificate.category}
          </span>
          <h4 className="font-heading text-base sm:text-lg font-bold tracking-tight text-[#FFFFFF] group-hover:text-[#FD7979] transition-colors duration-200">
            {certificate.title}
          </h4>
        </div>

        {/* Skills Associated */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {certificate.skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-0.5 rounded bg-[#222228] border border-[#FDACAC]/18 text-[10px] font-mono text-[#B8B8C5]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {certificate.credentialUrl && (
        <div className="pt-4 mt-4 border-t border-[#FDACAC]/18 flex justify-end">
          <a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#FD7979] hover:underline"
          >
            Verify Credential <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      )}
    </motion.div>
  );
}
