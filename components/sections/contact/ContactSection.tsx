"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Mail, MapPin, Globe, Share2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PROFILE } from "@/config/profile";
import { ContactCard } from "./ContactCard";
import { SocialLinks } from "./SocialLinks";
import { CTAButtons } from "./CTAButtons";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export function ContactSection() {
  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: PROFILE.email,
      href: `mailto:${PROFILE.email}`,
    },
    {
      icon: Globe,
      label: "LinkedIn",
      value: PROFILE.linkedin.replace("https://www.", "").replace("https://", ""),
      href: PROFILE.linkedin,
    },
    {
      icon: Share2,
      label: "GitHub",
      value: PROFILE.github.replace("https://", ""),
      href: PROFILE.github,
    },
    {
      icon: MapPin,
      label: "Location",
      value: PROFILE.location,
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full flex flex-col justify-between py-24 sm:py-32 bg-[#E4E0E1] overflow-hidden border-t border-[#B18C6A]/20"
    >
      {/* Ambient Background Radial Backlights */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#5A4030]/06 to-[#B18C6A]/04 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-[#B18C6A]/05 to-[#5A4030]/04 blur-3xl pointer-events-none"
      />

      <Container className="my-auto">
        <div className="flex flex-col gap-12 sm:gap-16 relative z-10">
          {/* Desktop 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Heading, Subtitle, Buttons & Social Links */}
            <motion.div
              variants={headerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8"
            >
              {/* Section Badge */}
              <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#F7F5F4] border border-[#B18C6A]/20">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5A4030]" />
                <span className="text-xs font-mono font-semibold text-[#5A4030] tracking-wider uppercase">
                  Contact
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2E2A28] leading-[1.1]">
                Let&apos;s Build Something Meaningful Together
              </h2>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-[#5F5854] leading-relaxed max-w-xl">
                Whether it&apos;s an internship, research collaboration, freelance opportunity, hackathon, or full-time role, I&apos;d love to connect and discuss how we can create impactful AI solutions.
              </p>

              {/* Primary & Secondary Action Buttons */}
              <CTAButtons />

              {/* Social Icon Links */}
              <SocialLinks />
            </motion.div>

            {/* Right Column: Contact Information Cards Grid */}
            <motion.div
              variants={cardsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="lg:col-span-5 flex flex-col space-y-4"
            >
              {contactDetails.map((item, index) => (
                <ContactCard
                  key={index}
                  icon={item.icon}
                  label={item.label}
                  value={item.value}
                  href={item.href}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Footer */}
      <footer className="pt-16 pb-6 text-center text-xs font-mono text-[#5F5854]/60 border-t border-[#B18C6A]/20 mt-16 relative z-10">
        <Container>
          <p>© {new Date().getFullYear()} {PROFILE.brand}. All rights reserved.</p>
        </Container>
      </footer>
    </section>
  );
}
