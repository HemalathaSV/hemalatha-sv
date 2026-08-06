import React from "react";

interface CategoryBadgeProps {
  category: string;
  className?: string;
}

export function CategoryBadge({ category, className = "" }: CategoryBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#FFF4EC] text-[#8A5A3C] border border-[#DE8F5F] ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#DE8F5F]" />
      {category}
    </span>
  );
}
