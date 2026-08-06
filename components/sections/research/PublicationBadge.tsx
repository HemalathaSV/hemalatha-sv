import React from "react";

interface PublicationBadgeProps {
  status?: string;
  category?: string;
  className?: string;
}

export function PublicationBadge({
  status = "Published",
  category = "Research Publication",
  className = "",
}: PublicationBadgeProps) {
  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {/* Status Badge */}
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        {status}
      </span>

      {/* Category Badge */}
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#FD7979]/15 text-[#2B2323] border border-[#FDACAC]/30">
        {category}
      </span>
    </div>
  );
}
