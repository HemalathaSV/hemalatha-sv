"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
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
      className="relative min-h-screen w-full flex flex-col justify-center py-24 sm:py-32 bg-[#0F0F12] overflow-hidden border-t border-[#FDACAC]/18"
    >
      {/* Subtle Ambient Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-0 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#FD7979]/05 to-[#FDACAC]/04 blur-3xl pointer-events-none -translate-y-1/2"
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
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#19191D] border border-[#FDACAC]/18">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FD7979]" />
              <span className="text-xs font-mono font-semibold text-[#FD7979] tracking-wider uppercase">
                Who I Am
              </span>
            </div>

            {/* Section Heading */}
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FFFFFF] leading-[1.1]">
              Engineering Intelligent AI Solutions with Purpose
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#B8B8C5] leading-relaxed pt-2">
              I am an AI/ML Engineer passionate about building intelligent systems that solve real-world problems. My interests include Agentic AI, Multi-Agent Systems, Machine Learning, Backend Engineering, and AI Research. I enjoy transforming ideas into scalable applications through clean architecture and continuous learning.
            </p>

            {/* Interest Badges */}
            <div className="pt-4 flex flex-wrap gap-2.5">
              {interests.map((interest, index) => (
                <span
                  key={index}
                  className="px-3.5 py-1.5 rounded-lg bg-[#19191D] border border-[#FDACAC]/18 text-xs font-mono font-medium text-[#FFFFFF] hover:border-[#FD7979]/40 hover:text-[#FD7979] transition-colors duration-200"
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
