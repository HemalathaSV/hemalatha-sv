import React from "react";
import {
  HeroSection,
  AboutSection,
  EngineeringSection,
  PortfolioEngineeringSection,
  ResearchSection,
  ExperienceSection,
  LearningSection,
  ContactSection,
} from "@/components/sections";

export default function Home() {
  return (
    <main id="main-content" className="flex flex-col w-full min-h-screen bg-[#050816]">
      <HeroSection />
      <AboutSection />
      <EngineeringSection />
      <PortfolioEngineeringSection />
      <ResearchSection />
      <ExperienceSection />
      <LearningSection />
      <ContactSection />
    </main>
  );
}
