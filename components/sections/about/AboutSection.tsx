"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Heading3D } from "@/components/ui/Heading3D";
import { Container } from "@/components/layout/Container";
import { getInterests } from "@/data/skills";
import { Timeline } from "./Timeline";

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function AboutSection() {
  const interests = getInterests();

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col justify-center py-24 sm:py-32 bg-[#E4E0E1] overflow-hidden border-t border-[#D8C8BB]"
    >
      {/* Subtle Ambient Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-0 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#5A4030]/05 to-[#B18C6A]/04 blur-3xl pointer-events-none -translate-y-1/2"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
          {/* Left Column: Vertical Timeline */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Timeline />
          </div>

          {/* Right Column: About Content */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6 order-1 lg:order-2"
          >
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#F7F5F4] border border-[#D8C8BB]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5A4030]" />
              <span className="text-xs font-mono font-semibold text-[#5A4030] tracking-wider uppercase">
                Who I Am
              </span>
            </div>

            {/* Section Heading */}
            <Heading3D tag="h2" className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Engineering Intelligent AI Solutions with Purpose
            </Heading3D>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#5F5854] leading-relaxed pt-2">
              I am an AI/ML Engineer passionate about building intelligent systems that solve real-world problems. My interests include Agentic AI, Multi-Agent Systems, Machine Learning, Backend Engineering, and AI Research. I enjoy transforming ideas into scalable applications through clean architecture and continuous learning.
            </p>

            {/* Interest Badges */}
            <div className="pt-4 flex flex-wrap gap-2.5">
              {interests.map((interest, index) => (
                <span
                  key={index}
                  className="px-3.5 py-1.5 rounded-lg bg-[#F7F5F4] border border-[#D8C8BB] text-xs font-mono font-medium text-[#2E2A28] hover:border-[#B18C6A]/65 hover:text-[#5A4030] transition-colors duration-200"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
