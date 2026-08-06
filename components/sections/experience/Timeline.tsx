"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";
import { TimelineNode } from "./TimelineNode";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export function Timeline() {
  const experiences = [
    {
      title: "Executive Coordinator",
      organization: "InnovateX – Department of CSE (AI & ML)",
      description:
        "Led technical events, coordinated workshops, managed teams, and contributed to organizing innovation-focused activities within the department.",
    },
    {
      title: "Research Publication",
      organization: "IJCRT",
      description:
        "Published research on an Agentic AI-powered Tournament Management System demonstrating intelligent automation using autonomous AI agents.",
    },
    {
      title: "Hackathon Participant",
      organization: "National & College Level Hackathons",
      description:
        "Designed and developed AI-powered solutions under time constraints while collaborating with multidisciplinary teams.",
    },
    {
      title: "AI/ML Student",
      organization: "Maharaja Institute of Technology Mysore",
      description:
        "Pursuing Computer Science Engineering with specialization in Artificial Intelligence & Machine Learning while continuously building intelligent software solutions.",
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="relative flex flex-col w-full py-4"
    >
      {/* Central Vertical Line for Desktop */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#FD7979]/40 via-slate-800 to-slate-800/20 pointer-events-none"
      />

      {/* Left Vertical Line for Mobile */}
      <div
        aria-hidden="true"
        className="lg:hidden absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#FD7979]/40 via-slate-800 to-slate-800/20 pointer-events-none"
      />

      <div className="space-y-12 sm:space-y-16">
        {experiences.map((exp, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={index} className="relative flex flex-col lg:flex-row items-center w-full">
              {/* Desktop Layout: Left / Right alternating cards */}
              <div className="hidden lg:flex w-full items-center">
                {/* Left Side Slot */}
                <div className="w-1/2 pr-12 text-right flex justify-end">
                  {isEven ? (
                    <ExperienceCard
                      index={index}
                      title={exp.title}
                      organization={exp.organization}
                      description={exp.description}
                    />
                  ) : null}
                </div>

                {/* Central Node */}
                <TimelineNode />

                {/* Right Side Slot */}
                <div className="w-1/2 pl-12 text-left flex justify-start">
                  {!isEven ? (
                    <ExperienceCard
                      index={index}
                      title={exp.title}
                      organization={exp.organization}
                      description={exp.description}
                    />
                  ) : null}
                </div>
              </div>

              {/* Mobile / Tablet Single Vertical Layout */}
              <div className="lg:hidden flex items-start gap-4 pl-1.5 w-full">
                <div className="pt-6 shrink-0 z-10">
                  <TimelineNode />
                </div>
                <div className="flex-1">
                  <ExperienceCard
                    index={index}
                    title={exp.title}
                    organization={exp.organization}
                    description={exp.description}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
