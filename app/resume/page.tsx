import React from "react";
import type { Metadata } from "next";
import { ResumeViewer } from "@/components/resume/ResumeViewer";

export const metadata: Metadata = {
  title: "Resume — Hemalatha S V",
  description:
    "Official resume of Hemalatha S V, AI/ML Engineer specializing in Agentic AI systems, FastAPI backends, and Next.js.",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#151214] text-[#FFFFFF]">
      <ResumeViewer />
    </main>
  );
}
