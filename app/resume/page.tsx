import React from "react";
import type { Metadata } from "next";
import { ResumeViewer } from "@/components/resume/ResumeViewer";

export const metadata: Metadata = {
  title: "Resume — Hemalatha S V AI",
  description:
    "Official resume of Hemalatha S V AI, AI/ML Engineer specializing in Agentic AI systems, FastAPI backends, and Next.js.",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-[#F8FAFC]">
      <ResumeViewer />
    </main>
  );
}
