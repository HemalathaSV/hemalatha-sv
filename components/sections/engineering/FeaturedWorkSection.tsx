"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { FeaturedProjectCard } from "./FeaturedProjectCard";
import { ProjectCard } from "./ProjectCard";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function FeaturedWorkSection() {
  const featuredProject = {
    title: "PlacementPilot AI",
    category: "Flagship Project",
    description:
      "An intelligent placement preparation platform powered by multiple AI agents for resume analysis, interview preparation, aptitude practice, ATS evaluation, and personalized career guidance.",
    technologies: ["Python", "FastAPI", "Gemini", "Agentic AI", "SQLite"],
    buttons: [
      { label: "View Case Study", href: "#contact" },
      { label: "GitHub", href: "https://github.com/HemalathaSV" },
    ],
  };

  const secondaryProjects = [
    {
      title: "Tournament Management Agent",
      category: "Research Publication",
      description:
        "An Agentic AI-powered tournament management system capable of understanding natural language requests and automating tournament operations using intelligent workflows.",
      technologies: ["Python", "FastAPI", "SQLite", "Gemini"],
      buttons: [
        { label: "View Case Study", href: "#contact" },
        { label: "Research Paper", href: "#research" },
      ],
    },
    {
      title: "CampusOS",
      category: "Hackathon Project",
      description:
        "An AI-powered campus management platform designed to simplify academic administration through automation, intelligent workflows, and modern dashboards.",
      technologies: ["Python", "FastAPI", "SQLite", "Next.js"],
      buttons: [
        { label: "View Case Study", href: "#contact" },
        { label: "Live Demo", href: "#contact" },
      ],
    },
  ];

  return (
    <section
      id="engineering-work"
      className="relative min-h-screen w-full flex flex-col justify-center py-24 sm:py-32 bg-[#050816] overflow-hidden border-t border-slate-900/60"
    >
      {/* Ambient Background Radial Backlights */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#38BDF8]/06 to-[#8B5CF6]/04 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-[#8B5CF6]/05 to-[#38BDF8]/04 blur-3xl pointer-events-none"
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
                Featured Work
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8FAFC] leading-[1.1]">
              Turning Ideas into Intelligent Solutions
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              A collection of AI-powered applications, agentic AI systems, research-driven solutions, and full-stack engineering projects built to solve real-world challenges.
            </p>
          </motion.div>

          {/* Project Layout */}
          <div className="flex flex-col gap-8">
            {/* Top: Large Featured Project Card */}
            <FeaturedProjectCard
              title={featuredProject.title}
              category={featuredProject.category}
              description={featuredProject.description}
              technologies={featuredProject.technologies}
              buttons={featuredProject.buttons}
            />

            {/* Bottom: Two Equal Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {secondaryProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  category={project.category}
                  description={project.description}
                  technologies={project.technologies}
                  buttons={project.buttons}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
