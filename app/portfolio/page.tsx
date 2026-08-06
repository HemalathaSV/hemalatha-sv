import React from "react";
import type { Metadata } from "next";
import { PortfolioSection } from "@/components/portfolio/PortfolioSection";

export const metadata: Metadata = {
  title: "Portfolio — Featured AI Projects | Hemalatha S V",
  description:
    "Explore the complete engineering portfolio of Hemalatha S V, featuring multi-agent AI systems, machine learning applications, and research publications.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#FFCDC9] text-[#2B2323]">
      <PortfolioSection />
    </main>
  );
}
