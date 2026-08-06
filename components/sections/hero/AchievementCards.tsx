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
      iconBg: "#F3E5D8",
      iconColor: "#8B5E3C",
      borderColor: "#C89A6B",
    },
    {
      icon: Bot,
      title: "Agentic AI",
      subtitle: "Multi-Agent Systems",
      iconBg: "#E8E3F7",
      iconColor: "#6B5CA5",
      borderColor: "#9C89D9",
    },
    {
      icon: Code,
      title: "AI Engineering",
      subtitle: "FastAPI • Python • Next.js",
      iconBg: "#DDEEF4",
      iconColor: "#3D6D80",
      borderColor: "#6FA8C2",
    },
    {
      icon: Users,
      title: "Leadership",
      subtitle: "Executive Coordinator",
      iconBg: "#E6F2E6",
      iconColor: "#4D7C59",
      borderColor: "#7EB38A",
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
            iconBg={item.iconBg}
            iconColor={item.iconColor}
            borderColor={item.borderColor}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
