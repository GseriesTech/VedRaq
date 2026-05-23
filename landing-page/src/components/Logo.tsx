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
      {/* Premium Helium Neon Green Rounded Square Logo */}
      <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#05F283] transition-transform duration-300 hover:scale-105 helium-dot-glow">
        {/* Curved leaf/flow geometric inset matching the premium SaaS template style */}
        <div className="h-4.5 w-4.5 rounded-[5px] bg-black/90 flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-[#05F283] helium-dot-glow animate-pulse" />
        </div>
      </div>

      {!iconOnly && (
        <span className="text-xl font-medium tracking-tight text-white">
          Helium
        </span>
      )}
    </div>
  );
}

