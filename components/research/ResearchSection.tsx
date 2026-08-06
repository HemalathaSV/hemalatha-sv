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
    <section className="relative min-h-screen w-full flex flex-col justify-center pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#151214] overflow-hidden">
      {/* Ambient Background Radial Backlight */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#FDACAC]/06 to-[#FD7979]/04 blur-3xl pointer-events-none"
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
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#19191D] border border-[#FDACAC]/18">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FDACAC]" />
              <span className="text-xs font-mono font-semibold text-[#FDACAC] tracking-wider uppercase">
                Research Library
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-[#FFFFFF] leading-[1.1]">
              Research That Drives Innovation
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#B8B8C5] leading-relaxed">
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
