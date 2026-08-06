"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Heading3D } from "@/components/ui/Heading3D";
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
      className="relative min-h-screen w-full flex flex-col justify-center py-24 sm:py-32 bg-[#E4E0E1] overflow-hidden border-t border-[#D8C8BB]"
    >
      {/* Ambient Background Radial Backlights */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#5A4030]/06 to-[#B18C6A]/04 blur-3xl pointer-events-none"
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
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#F7F5F4] border border-[#D8C8BB]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5A4030]" />
              <span className="text-xs font-mono font-semibold text-[#5A4030] tracking-wider uppercase">
                Learning Journey
              </span>
            </div>

            {/* Heading */}
            <Heading3D tag="h2" className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Committed to Continuous Learning
            </Heading3D>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#5F5854] leading-relaxed">
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
              <h3 className="font-heading text-xs font-mono font-semibold tracking-wider text-[#5A4030] uppercase mb-1">
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
              <h3 className="font-heading text-xs font-mono font-semibold tracking-wider text-[#5A4030] uppercase mb-1">
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
