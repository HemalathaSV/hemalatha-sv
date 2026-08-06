import React from "react";

interface SkillBadgeProps {
  label: string;
  className?: string;
}

export function SkillBadge({ label, className = "" }: SkillBadgeProps) {
  return (
    <span
      className={`px-3 py-1.5 rounded-lg bg-[#2B2323] border border-[#FDACAC]/35 text-xs font-mono font-medium text-[#5B4A4A] hover:text-[#FD7979] hover:border-[#FDACAC]/40 transition-colors duration-200 ${className}`}
    >
      {label}
    </span>
  );
}
