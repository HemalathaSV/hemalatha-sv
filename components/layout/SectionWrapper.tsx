"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function SectionWrapper({
  id,
  children,
  className = "",
  containerClassName = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative min-h-screen w-full flex flex-col justify-center py-20 sm:py-28 overflow-hidden ${className}`}
    >
      <Container className={containerClassName}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          {children}
        </motion.div>
      </Container>
    </section>
  );
}
