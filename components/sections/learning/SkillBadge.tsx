import React from "react";

interface SkillBadgeProps {
  label: string;
  className?: string;
}

export function SkillBadge({ label, className = "" }: SkillBadgeProps) {
  return (
    <span
      className={`px-3 py-1.5 rounded-lg bg-[#2E2A28] border border-[#B18C6A]/20 text-xs font-mono font-medium text-[#5F5854] hover:text-[#5A4030] hover:border-[#B18C6A]/65 transition-colors duration-200 ${className}`}
    >
      {label}
    </span>
  );
}
