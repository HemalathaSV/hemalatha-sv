import React from "react";

interface CategoryBadgeProps {
  category: string;
  className?: string;
}

export function CategoryBadge({ category, className = "" }: CategoryBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#FD7979]/10 text-[#FD7979] border border-[#FD7979]/30 ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#FD7979]" />
      {category}
    </span>
  );
}
