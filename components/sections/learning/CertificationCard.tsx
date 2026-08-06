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
      className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[#F7F5F4]/80 backdrop-blur-xl border border-[#B18C6A]/20 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#B18C6A]/65 hover:shadow-xl hover:shadow-[#5A4030]/5"
    >
      <div className="space-y-3.5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-mono font-semibold text-[#5A4030] px-2.5 py-0.5 rounded bg-[#5A4030]/10 border border-[#B18C6A]/20">
            {certificate.provider}
          </span>
          {certificate.completionDate && (
            <span className="text-[11px] font-mono text-[#5F5854]">
              {certificate.completionDate}
            </span>
          )}
        </div>

        <div className="space-y-1">
          <span className="text-[10px] font-mono text-[#5F5854] uppercase tracking-wider block">
            {certificate.category}
          </span>
          <h4 className="font-heading text-base sm:text-lg font-bold tracking-tight text-[#2E2A28] group-hover:text-[#5A4030] transition-colors duration-200">
            {certificate.title}
          </h4>
        </div>

        {/* Skills Associated */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {certificate.skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-0.5 rounded bg-[#2E2A28] border border-[#B18C6A]/20 text-[10px] font-mono text-[#5F5854]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {certificate.credentialUrl && (
        <div className="pt-4 mt-4 border-t border-[#B18C6A]/20 flex justify-end">
          <a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#5A4030] hover:underline"
          >
            Verify Credential <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      )}
    </motion.div>
  );
}
