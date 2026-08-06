import React from "react";

interface CategoryBadgeProps {
  category: string;
  className?: string;
}

export function CategoryBadge({ category, className = "" }: CategoryBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#5A4030]/15 text-[#2E2A28] border border-[#B18C6A]/30 ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#5A4030]" />
      {category}
    </span>
  );
}
