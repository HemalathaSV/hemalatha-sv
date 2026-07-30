"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { Project } from "@/data/projects";

interface ProjectGridProps {
  projects: Project[];
}

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

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <motion.div
      variants={gridContainerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full"
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </motion.div>
  );
}
