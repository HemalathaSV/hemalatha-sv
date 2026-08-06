"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function GlobalLightingCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  
  // Custom cursor position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Springs for smooth tracking
  const springConfig = { damping: 35, stiffness: 280, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device is mobile or touch-only
    const checkMobileStatus = () => {
      const hasTouch = window.matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 0;
      setIsMobile(window.innerWidth < 1024 || hasTouch);
    };
    
    checkMobileStatus();
    window.addEventListener("resize", checkMobileStatus);

    setTimeout(() => {
      setMounted(true);
    }, 0);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Update global CSS spotlight coordinates
      const doc = document.documentElement;
      doc.style.setProperty("--mouse-x", `${e.clientX}px`);
      doc.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      const target = e.target as HTMLElement;
      if (!target) return;

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
      window.removeEventListener("resize", checkMobileStatus);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!mounted || isMobile) return null;

  return (
    <>
      {/* Spotlight follower element - GPU accelerated */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-30 select-none mix-blend-soft-light opacity-60 transition-opacity duration-300 will-change-transform transform-gpu"
        style={{
          background: `radial-gradient(circle 350px at var(--mouse-x, -500px) var(--mouse-y, -500px), rgba(177, 140, 106, 0.09), transparent 80%)`,
          transform: "translateZ(0)",
        }}
      />

      {/* Trailing Pointer Ring cursor - uses scale instead of width/height */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-50 rounded-full border border-[#B18C6A] select-none will-change-transform transform-gpu"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: 24,
          height: 24,
          backgroundColor: isHovered ? "rgba(177, 140, 106, 0.08)" : "rgba(228, 224, 225, 0.1)",
          backdropFilter: isHovered ? "blur(2px)" : "none",
          transform: "translateZ(0)",
        }}
        animate={{
          scale: isHovered ? 2.0 : 1.0,
        }}
        transition={{
          type: "spring",
          stiffness: 420,
          damping: 30,
        }}
      />
    </>
  );
}
