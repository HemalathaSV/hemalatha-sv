import React from "react";
import type { Metadata } from "next";
import { ProjectHero } from "@/components/projects/placementpilot/ProjectHero";
import { ProjectOverview } from "@/components/projects/placementpilot/ProjectOverview";
import { ArchitectureDiagram } from "@/components/projects/placementpilot/ArchitectureDiagram";
import { FeatureCard } from "@/components/projects/placementpilot/FeatureCard";
import { TechStack } from "@/components/projects/placementpilot/TechStack";
import { ChallengeCard } from "@/components/projects/placementpilot/ChallengeCard";
import { Gallery } from "@/components/projects/placementpilot/Gallery";
import { ProjectCTA } from "@/components/projects/placementpilot/ProjectCTA";

export const metadata: Metadata = {
  title: "PlacementPilot AI — Case Study | Hemalatha S V AI",
  description:
    "Product case study for PlacementPilot AI, an intelligent multi-agent placement preparation platform built with Python, FastAPI, Gemini API, and SQLite.",
};

export default function PlacementPilotCaseStudy() {
  return (
    <main className="min-h-screen bg-[#050816] text-[#F8FAFC]">
      <ProjectHero />
      <ProjectOverview />
      <ArchitectureDiagram />
      <FeatureCard />
      <TechStack />
      <ChallengeCard />
      <Gallery />
      <ProjectCTA />
    </main>
  );
}
