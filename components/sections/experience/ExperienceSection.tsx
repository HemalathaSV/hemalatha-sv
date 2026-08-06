"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Heading3D } from "@/components/ui/Heading3D";
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
      className="relative min-h-screen w-full flex flex-col justify-center py-24 sm:py-32 bg-[#E4E0E1] overflow-hidden border-t border-[#D8C8BB]"
    >
      {/* Ambient Background Radial Backlights */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#5A4030]/06 to-[#B18C6A]/04 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-[#B18C6A]/05 to-[#5A4030]/04 blur-3xl pointer-events-none"
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F5F4] border border-[#D8C8BB]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5A4030]" />
              <span className="text-xs font-mono font-semibold text-[#5A4030] tracking-wider uppercase">
                Experience
              </span>
            </div>

            {/* Heading */}
            <Heading3D tag="h2" className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Learning Through Leadership and Innovation
            </Heading3D>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#5F5854] leading-relaxed max-w-2xl">
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
