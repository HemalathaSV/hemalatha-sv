import React from "react";

interface SkillBadgeProps {
  label: string;
  className?: string;
}

export function SkillBadge({ label, className = "" }: SkillBadgeProps) {
  return (
    <span
      className={`px-3 py-1.5 rounded-lg bg-[#222228] border border-[#FDACAC]/18 text-xs font-mono font-medium text-[#B8B8C5] hover:text-[#FD7979] hover:border-[#FDACAC]/40 transition-colors duration-200 ${className}`}
    >
      {label}
    </span>
  );
}
