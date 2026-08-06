"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { getFeaturedCertifications } from "@/data/certifications";
import { getSkillCategories } from "@/data/skills";
import { LearningCategory } from "./LearningCategory";
import { CertificationCard } from "./CertificationCard";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export function LearningJourneySection() {
  const categories = getSkillCategories();
  const certifications = getFeaturedCertifications();

  return (
    <section
      id="learning-journey"
      className="relative min-h-screen w-full flex flex-col justify-center py-24 sm:py-32 bg-[#FFCDC9] overflow-hidden border-t border-[#FDACAC]/35"
    >
      {/* Ambient Background Radial Backlights */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#FD7979]/06 to-[#FDACAC]/04 blur-3xl pointer-events-none"
      />

      <Container>
        <div className="flex flex-col gap-12 sm:gap-16 relative z-10">
          {/* Section Header */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col space-y-4 max-w-3xl"
          >
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#FFF6F5] border border-[#FDACAC]/35">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FD7979]" />
              <span className="text-xs font-mono font-semibold text-[#FD7979] tracking-wider uppercase">
                Learning Journey
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2B2323] leading-[1.1]">
              Committed to Continuous Learning
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#5B4A4A] leading-relaxed">
              Expanding my expertise through certifications, industry programs, cloud technologies, and AI-focused learning experiences.
            </p>
          </motion.div>

          {/* Desktop 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Learning Categories */}
            <motion.div
              variants={gridContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="lg:col-span-6 flex flex-col space-y-4"
            >
              <h3 className="font-heading text-xs font-mono font-semibold tracking-wider text-[#FD7979] uppercase mb-1">
                Core Domains & Skillsets
              </h3>
              {categories.map((cat, i) => (
                <LearningCategory
                  key={i}
                  title={cat.title}
                  skills={cat.skills}
                />
              ))}
            </motion.div>

            {/* Right Column: Certification Highlights */}
            <div className="lg:col-span-6 flex flex-col space-y-4">
              <h3 className="font-heading text-xs font-mono font-semibold tracking-wider text-[#FD7979] uppercase mb-1">
                Certification Highlights
              </h3>
              <motion.div
                variants={gridContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {certifications.map((cert) => (
                  <CertificationCard
                    key={cert.id}
                    certificate={cert}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
