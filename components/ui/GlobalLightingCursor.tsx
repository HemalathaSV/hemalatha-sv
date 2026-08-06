"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function GlobalLightingCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // Custom cursor position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Springs for smooth tracking
  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 0);
    
    const handleMouseMove = (e: MouseEvent) => {
      // Update custom cursor coordinates
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Update global CSS spotlight coordinates
      const doc = document.documentElement;
      doc.style.setProperty("--mouse-x", `${e.clientX}px`);
      doc.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Check if target is interactive or a parent is interactive
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.closest(".group");

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <>
      {/* Spotlight follower element */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-30 select-none mix-blend-soft-light opacity-60 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 350px at var(--mouse-x, -500px) var(--mouse-y, -500px), rgba(177, 140, 106, 0.09), transparent 80%)`,
        }}
      />

      {/* Trailing Pointer Ring cursor */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-50 rounded-full border border-[#B18C6A] select-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovered ? 48 : 22,
          height: isHovered ? 48 : 22,
          backgroundColor: isHovered ? "rgba(177, 140, 106, 0.08)" : "rgba(228, 224, 225, 0.1)",
          backdropFilter: isHovered ? "blur(2px)" : "none",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
        }}
      />
    </>
  );
}
