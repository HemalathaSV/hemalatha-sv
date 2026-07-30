"use client";

import React from "react";
import { SectionWrapper } from "@/components/layout";

export function EngineeringSection() {
  return (
    <SectionWrapper id="engineering-work" className="flex items-center justify-center">
      <div className="flex flex-col items-start justify-center max-w-4xl py-12">
        <span className="text-xs font-mono font-medium tracking-widest text-[#38BDF8] uppercase mb-4">
          02 / Systems & Applications
        </span>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#F8FAFC] mb-6">
          Engineering Work
        </h2>
        <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
          Production systems, AI agents, and high-throughput frontend architectures.
        </p>
      </div>
    </SectionWrapper>
  );
}
