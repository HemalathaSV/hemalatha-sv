"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { TimelineItem } from "./TimelineItem";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export function Timeline() {
  const milestones = [
    "Started AIML Journey",
    "Built Machine Learning Projects",
    "Participated in Hackathons",
    "Published Research Paper",
    "Building Agentic AI Systems",
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="flex flex-col w-full"
    >
      <div className="mb-4">
        <h3 className="font-heading text-xs font-mono font-semibold tracking-wider text-[#5A4030] uppercase">
          Milestones & Progression
        </h3>
      </div>

      <div className="flex flex-col">
        {milestones.map((title, index) => (
          <TimelineItem
            key={index}
            step={index + 1}
            title={title}
            isLast={index === milestones.length - 1}
          />
        ))}
      </div>
    </motion.div>
  );
}
