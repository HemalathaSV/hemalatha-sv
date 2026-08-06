"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ResearchCard } from "./ResearchCard";
import { PUBLICATIONS } from "@/data/research";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function ResearchSection() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#E4E0E1] overflow-hidden">
      {/* Ambient Background Radial Backlight */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#B18C6A]/06 to-[#5A4030]/04 blur-3xl pointer-events-none"
      />

      <Container>
        <div className="flex flex-col gap-12 sm:gap-16 relative z-10">
          {/* Section Header */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-4 max-w-3xl"
          >
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#F7F5F4] border border-[#D8C8BB]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B18C6A]" />
              <span className="text-xs font-mono font-semibold text-[#B18C6A] tracking-wider uppercase">
                Research Library
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-[#2E2A28] leading-[1.1]">
              Research That Drives Innovation
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#5F5854] leading-relaxed">
              Exploring intelligent systems through applied research, peer-reviewed publications, and practical implementation.
            </p>
          </motion.div>

          {/* Publications List */}
          <div className="space-y-8">
            {PUBLICATIONS.map((pub) => (
              <ResearchCard key={pub.id} publication={pub} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
