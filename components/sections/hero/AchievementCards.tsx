"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Trophy, Bot, Code, Users } from "lucide-react";
import { AchievementCard } from "./AchievementCard";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function AchievementCards() {
  const achievements = [
    {
      icon: Trophy,
      title: "Published Research",
      subtitle: "IJCRT Publication",
    },
    {
      icon: Bot,
      title: "Agentic AI",
      subtitle: "Multi-Agent Systems",
    },
    {
      icon: Code,
      title: "AI Engineering",
      subtitle: "FastAPI • Python • Next.js",
    },
    {
      icon: Users,
      title: "Leadership",
      subtitle: "Executive Coordinator",
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full"
    >
      {achievements.map((item, index) => (
        <motion.div key={index} variants={cardVariants}>
          <AchievementCard
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
