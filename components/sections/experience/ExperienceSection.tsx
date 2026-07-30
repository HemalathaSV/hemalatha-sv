"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Timeline } from "./Timeline";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative min-h-screen w-full flex flex-col justify-center py-24 sm:py-32 bg-[#050816] overflow-hidden border-t border-slate-900/60"
    >
      {/* Ambient Background Radial Backlights */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#38BDF8]/06 to-[#8B5CF6]/04 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-[#8B5CF6]/05 to-[#38BDF8]/04 blur-3xl pointer-events-none"
      />

      <Container>
        <div className="flex flex-col gap-12 sm:gap-16 relative z-10">
          {/* Section Header */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col space-y-4 max-w-3xl mx-auto text-center items-center"
          >
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1120] border border-slate-800/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]" />
              <span className="text-xs font-mono font-semibold text-[#38BDF8] tracking-wider uppercase">
                Experience
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8FAFC] leading-[1.1]">
              Learning Through Leadership and Innovation
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
              My journey of building technical expertise through projects, research, leadership, and real-world collaboration.
            </p>
          </motion.div>

          {/* Timeline Layout */}
          <div className="pt-4">
            <Timeline />
          </div>
        </div>
      </Container>
    </section>
  );
}
