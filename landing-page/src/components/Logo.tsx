"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export function Logo({ className, iconOnly = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3 select-none", className)}>
      {/* Mini Green Lithium Logo Box Icon */}
      <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#05F283]/5 border border-[#05F283]/25 transition-transform duration-300 hover:scale-105">
        <div className="h-3 w-3 rounded-full bg-[#05F283] helium-dot-glow animate-pulse" />
        <div className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-[#05F283]/40" />
        <div className="absolute bottom-1 left-1 h-1.5 w-1.5 rounded-full bg-[#05F283]/40" />
      </div>

      {!iconOnly && (
        <span className="text-xl font-light tracking-wider text-white">
          Ved<span className="font-semibold text-[#05F283]">Raq</span>
        </span>
      )}
    </div>
  );
}


