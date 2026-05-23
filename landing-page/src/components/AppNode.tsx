"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface AppNodeRow {
  label: string;
  value: React.ReactNode;
}

interface AppNodeProps {
  title: string;
  icon: React.ReactNode;
  iconBg?: string; // e.g., 'bg-violet-600/20 text-violet-400'
  isActive?: boolean;
  rows?: AppNodeRow[];
  className?: string;
}

export function AppNode({
  title,
  icon,
  iconBg = "bg-violet-600/20 text-violet-400",
  isActive = false,
  rows = [],
  className,
}: AppNodeProps) {
  return (
    <div
      className={cn(
        "w-full max-w-[320px] bg-[#09090b] border text-left rounded-xl overflow-hidden backdrop-blur-md transition-all duration-300 select-none",
        isActive
          ? "border-[#05F283] shadow-[0_0_24px_-4px_rgba(5,242,131,0.22)]"
          : "border-white/[0.08] hover:border-white/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.8)]",
        className
      )}
    >
      {/* Node Header Container */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.04] bg-white/[0.01]">
        {/* Rounded square icon bubble */}
        <div
          className={cn(
            "flex h-7.5 w-7.5 items-center justify-center rounded-[6px] shrink-0 font-semibold text-sm",
            iconBg
          )}
        >
          {icon}
        </div>
        <span className="text-[13px] font-semibold text-zinc-100 tracking-wide">
          {title}
        </span>
      </div>

      {/* Node Content Rows */}
      {rows.length > 0 && (
        <div className="p-3.5 space-y-2.5">
          {rows.map((row, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between text-[11px] leading-normal"
            >
              <span className="text-zinc-500 font-light tracking-wide">{row.label}</span>
              <div className="text-zinc-300 font-medium text-right shrink-0 flex items-center gap-1.5">
                {row.value}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Sub-component: Tool Chip pill for rows
interface AppNodeChipProps {
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

export function AppNodeChip({ label, icon, className }: AppNodeChipProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-[6px] px-2 py-0.5 text-[10px] text-zinc-300 select-none hover:bg-white/[0.06] hover:border-white/12 transition-all shrink-0",
        className
      )}
    >
      {icon && <span className="inline-flex shrink-0 h-3 w-3 items-center justify-center">{icon}</span>}
      <span className="leading-none">{label}</span>
    </div>
  );
}
