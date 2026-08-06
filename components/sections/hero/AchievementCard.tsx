import React from "react";
import { LucideIcon } from "lucide-react";

export interface AchievementCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

export function AchievementCard({ icon: Icon, title, subtitle }: AchievementCardProps) {
  return (
    <div className="group relative flex flex-col p-4 sm:p-5 lg:p-6 rounded-xl bg-[#F7F5F4]/75 backdrop-blur-md border border-[#B18C6A]/20 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#5A4030]/5 hover:border-[#B18C6A]/65 h-full justify-center">
      <div className="flex items-center gap-3 sm:gap-3.5">
        <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-[#2E2A28] text-[#5A4030] border border-[#B18C6A]/20 group-hover:border-[#B18C6A]/50 transition-colors">
          <Icon className="h-4 w-4 sm:h-5 sm:w-5 stroke-[1.75]" />
        </div>
        <div className="flex flex-col min-w-0">
          <h3 className="font-heading text-xs sm:text-sm lg:text-base font-semibold text-[#2E2A28] tracking-tight truncate">
            {title}
          </h3>
          <p className="text-[11px] sm:text-xs text-[#5F5854] font-mono truncate">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
