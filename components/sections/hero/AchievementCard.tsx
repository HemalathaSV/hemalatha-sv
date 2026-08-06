import React from "react";
import { LucideIcon } from "lucide-react";

export interface AchievementCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  iconBg: string;
  iconColor: string;
  borderColor: string;
}

export function AchievementCard({
  icon: Icon,
  title,
  subtitle,
  iconBg,
  iconColor,
  borderColor,
}: AchievementCardProps) {
  return (
    <div
      style={{
        borderLeftColor: borderColor,
      }}
      className="group relative flex flex-col p-4 sm:p-5 lg:p-6 rounded-xl bg-[#FFFFFF] border-l-4 border-y border-r border-[#B18C6A]/20 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#B18C6A]/15 hover:border-y-[#B18C6A]/45 hover:border-r-[#B18C6A]/45 h-full justify-center"
    >
      <div className="flex items-center gap-3 sm:gap-3.5">
        <div
          style={{
            backgroundColor: iconBg,
            color: iconColor,
            borderColor: borderColor,
          }}
          className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg border transition-colors"
        >
          <Icon className="h-5.5 w-5.5 stroke-[1.75]" />
        </div>
        <div className="flex flex-col min-w-0">
          <h3 className="font-heading text-xs sm:text-sm lg:text-base font-semibold text-[#2E2A28] tracking-tight truncate">
            {title}
          </h3>
          <p className="text-[11px] sm:text-xs text-[#7A6A60] font-mono truncate">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
