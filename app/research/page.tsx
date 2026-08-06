import React from "react";
import type { Metadata } from "next";
import { ResearchSection } from "@/components/research/ResearchSection";

export const metadata: Metadata = {
  title: "Research Publications | Hemalatha S V",
  description:
    "Peer-reviewed academic research publications on Agentic Artificial Intelligence, Multi-Agent Systems, and Autonomous Workflows.",
};

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#151214] text-[#FFFFFF]">
      <ResearchSection />
    </main>
  );
}
