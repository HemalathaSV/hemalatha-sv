"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { HeroContent } from "./HeroContent";
import { PortraitCard } from "./PortraitCard";
import { AchievementCards } from "./AchievementCards";

const leftColumnVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

import { useMotionValue, useSpring, useTransform } from "framer-motion";

export function HeroSection() {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(useTransform(y, [0, 1], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-6, 6]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    x.set(e.clientX / width);
    y.set(e.clientY / height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full flex flex-col justify-center pt-24 sm:pt-28 pb-16 sm:pb-20 bg-[#E4E0E1] overflow-hidden"
      style={{ perspective: 1000 }}
    >
      {/* Soft Ambient Radial Backlights */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 right-5 sm:right-10 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] rounded-full bg-[radial-gradient(circle_at_center,rgba(214,195,179,0.15),transparent_70%)] blur-3xl pointer-events-none z-0"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-5 sm:left-10 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(214,195,179,0.10),transparent_70%)] blur-3xl pointer-events-none z-0"
      />

      <Container>
        <div className="flex flex-col gap-10 sm:gap-14 lg:gap-16 relative z-10">
          {/* Two-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center min-h-[calc(100vh-16rem)]">
            {/* Left Column (60% Desktop) */}
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              variants={leftColumnVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8"
            >
              <HeroContent />
            </motion.div>

            {/* Right Column (40% Desktop) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
              <PortraitCard />
            </div>
          </div>

          {/* Achievement Cards Grid */}
          <div className="pt-2 sm:pt-4 lg:pt-6">
            <AchievementCards />
          </div>
        </div>
      </Container>

    </section>
  );
}
