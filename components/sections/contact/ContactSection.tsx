"use client";

import React from "react";
import { SectionWrapper } from "@/components/layout";

export function ContactSection() {
  return (
    <SectionWrapper id="contact" className="flex items-center justify-center">
      <div className="flex flex-col items-start justify-center max-w-4xl py-12">
        <span className="text-xs font-mono font-medium tracking-widest text-[#38BDF8] uppercase mb-4">
          06 / Connect
        </span>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#F8FAFC] mb-6">
          Contact
        </h2>
        <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
          Open for high-impact AI engineering inquiries and research collaborations.
        </p>
      </div>
    </SectionWrapper>
  );
}
