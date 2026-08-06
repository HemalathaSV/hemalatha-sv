import React from "react";
import { LucideIcon } from "lucide-react";

export interface AchievementCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

export function AchievementCard({ icon: Icon, title, subtitle }: AchievementCardProps) {
  return (
    <div className="group relative flex flex-col p-4 sm:p-5 lg:p-6 rounded-xl bg-[#19191D]/75 backdrop-blur-md border border-[#FDACAC]/18 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FD7979]/5 hover:border-[#FDACAC]/40 h-full justify-center">
      <div className="flex items-center gap-3 sm:gap-3.5">
        <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-[#222228] text-[#FD7979] border border-[#FDACAC]/18 group-hover:border-[#FDACAC]/50 transition-colors">
          <Icon className="h-4 w-4 sm:h-5 sm:w-5 stroke-[1.75]" />
        </div>
        <div className="flex flex-col min-w-0">
          <h3 className="font-heading text-xs sm:text-sm lg:text-base font-semibold text-[#FFFFFF] tracking-tight truncate">
            {title}
          </h3>
          <p className="text-[11px] sm:text-xs text-[#B8B8C5] font-mono truncate">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
