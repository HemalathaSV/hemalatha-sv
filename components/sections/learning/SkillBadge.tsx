import React from "react";

interface SkillBadgeProps {
  label: string;
  className?: string;
}

export function SkillBadge({ label, className = "" }: SkillBadgeProps) {
  return (
    <span
      className={`px-3 py-1.5 rounded-lg bg-[#111827] border border-slate-800 text-xs font-mono font-medium text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#38BDF8]/40 transition-colors duration-200 ${className}`}
    >
      {label}
    </span>
  );
}
