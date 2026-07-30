"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Container } from "@/components/layout/Container";
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
  const categories = [
    {
      title: "Artificial Intelligence",
      skills: ["Agentic AI", "Generative AI", "Machine Learning", "Prompt Engineering"],
    },
    {
      title: "Cloud Computing",
      skills: ["Microsoft Azure", "AWS Cloud", "IBM Cloud"],
    },
    {
      title: "Programming",
      skills: ["Python", "FastAPI", "Next.js", "TypeScript"],
    },
    {
      title: "Professional Development",
      skills: ["Hackathons", "Research", "Leadership", "Problem Solving"],
    },
  ];

  const certifications = [
    { issuer: "AWS APAC", title: "Solutions Architecture" },
    { issuer: "IBM", title: "Cloud Computing" },
    { issuer: "Microsoft", title: "Azure Cloud Services" },
    { issuer: "Google", title: "Python" },
    { issuer: "Tata", title: "GenAI Data Analytics" },
    { issuer: "Wells Fargo", title: "Software Engineering" },
  ];

  return (
    <section
      id="learning-journey"
      className="relative min-h-screen w-full flex flex-col justify-center py-24 sm:py-32 bg-[#050816] overflow-hidden border-t border-slate-900/60"
    >
      {/* Ambient Background Radial Backlights */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#38BDF8]/06 to-[#8B5CF6]/04 blur-3xl pointer-events-none"
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
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#0B1120] border border-slate-800/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]" />
              <span className="text-xs font-mono font-semibold text-[#38BDF8] tracking-wider uppercase">
                Learning Journey
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8FAFC] leading-[1.1]">
              Committed to Continuous Learning
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
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
              <h3 className="font-heading text-xs font-mono font-semibold tracking-wider text-[#38BDF8] uppercase mb-1">
                Core Domains & Skillsets
              </h3>
              {categories.map((cat, i) => (
                <LearningCategory
                  key={i}
                  index={i}
                  title={cat.title}
                  skills={cat.skills}
                />
              ))}
            </motion.div>

            {/* Right Column: Certification Highlights */}
            <div className="lg:col-span-6 flex flex-col space-y-4">
              <h3 className="font-heading text-xs font-mono font-semibold tracking-wider text-[#38BDF8] uppercase mb-1">
                Certification Highlights
              </h3>
              <motion.div
                variants={gridContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {certifications.map((cert, i) => (
                  <CertificationCard
                    key={i}
                    issuer={cert.issuer}
                    title={cert.title}
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
