import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS, getProjectBySlug } from "@/data/projects";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectOverview } from "@/components/projects/ProjectOverview";
import { ArchitectureDiagram } from "@/components/projects/ArchitectureDiagram";
import { FeatureGrid } from "@/components/projects/FeatureGrid";
import { TechStack } from "@/components/projects/TechStack";
import { ChallengeCard } from "@/components/projects/ChallengeCard";
import { Gallery } from "@/components/projects/Gallery";
import { ProjectCTA } from "@/components/projects/ProjectCTA";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Hemalatha S V AI",
    };
  }

  return {
    title: `${project.title} — Case Study | Hemalatha S V AI`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050816] text-[#F8FAFC]">
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ArchitectureDiagram project={project} />
      <FeatureGrid project={project} />
      <TechStack project={project} />
      <ChallengeCard project={project} />
      <Gallery project={project} />
      <ProjectCTA project={project} />
    </main>
  );
}
