"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  description: string;
  className?: string;
}

export function Card({
  icon,
  title,
  subtitle,
  description,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "border border-white/[0.05] bg-[#0A0A0A]/40 rounded-xl p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 glow-card-hover",
        className
      )}
    >
      {icon && (
        <div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 mb-6 transition-colors duration-300 hover:text-white">
          {icon}
        </div>
      )}
      <h4 className="text-md font-semibold text-white tracking-tight">
        {title}
      </h4>
      {subtitle && (
        <div className="text-xs font-mono text-zinc-500 mt-1">{subtitle}</div>
      )}
      <p className="mt-4 text-xs font-light leading-relaxed text-zinc-400">
        {description}
      </p>
    </div>
  );
}
