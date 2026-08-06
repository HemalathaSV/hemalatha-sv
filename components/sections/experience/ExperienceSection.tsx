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
      className="relative min-h-screen w-full flex flex-col justify-center py-24 sm:py-32 bg-[#FFCDC9] overflow-hidden border-t border-[#FDACAC]/35"
    >
      {/* Ambient Background Radial Backlights */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#FD7979]/06 to-[#FDACAC]/04 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-[#FDACAC]/05 to-[#FD7979]/04 blur-3xl pointer-events-none"
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF6F5] border border-[#FDACAC]/35">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FD7979]" />
              <span className="text-xs font-mono font-semibold text-[#FD7979] tracking-wider uppercase">
                Experience
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2B2323] leading-[1.1]">
              Learning Through Leadership and Innovation
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#5B4A4A] leading-relaxed max-w-2xl">
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
