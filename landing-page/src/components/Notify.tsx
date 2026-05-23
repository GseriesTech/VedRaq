"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ChevronRight, X } from "lucide-react";

interface NotifyProps {
  title: string;
  description: string;
  type?: "success" | "info" | "warning" | "error";
  showArrow?: boolean;
  onClose?: () => void;
  onClick?: () => void;
  className?: string;
}

export function Notify({
  title,
  description,
  type = "success",
  showArrow = true,
  onClose,
  onClick,
  className,
}: NotifyProps) {
  // Border and accent styling based on type
  const typeStyles = {
    success: "border-[#05F283]/30 bg-[#05F283]/[0.02] hover:border-[#05F283]/60 shadow-[0_4px_30px_-5px_rgba(5,242,131,0.06)] text-[#05F283]",
    info: "border-[#0ea5e9]/30 bg-[#0ea5e9]/[0.02] hover:border-[#0ea5e9]/60 shadow-[0_4px_30px_-5px_rgba(14,165,233,0.06)] text-[#0ea5e9]",
    warning: "border-[#f59e0b]/30 bg-[#f59e0b]/[0.02] hover:border-[#f59e0b]/60 shadow-[0_4px_30px_-5px_rgba(245,158,11,0.06)] text-[#f59e0b]",
    error: "border-[#ef4444]/30 bg-[#ef4444]/[0.02] hover:border-[#ef4444]/60 shadow-[0_4px_30px_-5px_rgba(239,68,68,0.06)] text-[#ef4444]",
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "relative w-full rounded-2xl border px-6 py-4.5 backdrop-blur-md transition-all duration-300 select-none group",
        onClick ? "cursor-pointer active:scale-[0.99]" : "",
        typeStyles[type],
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        
        {/* Text & Icon content */}
        <div className="flex-1">
          {/* Header Title with Optional Chevron */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-sm font-semibold text-white tracking-wide">
              {title}
            </span>
            {showArrow && (
              <ChevronRight className={cn(
                "h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1",
                type === "success" && "text-[#05F283]",
                type === "info" && "text-[#0ea5e9]",
                type === "warning" && "text-[#f59e0b]",
                type === "error" && "text-[#ef4444]"
              )} />
            )}
          </div>
          
          {/* Subtitle Description */}
          <p className="mt-1.5 text-[13px] text-zinc-400 font-light leading-relaxed">
            {description}
          </p>
        </div>

        {/* Close Button Action (Optional) */}
        {onClose && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="text-zinc-500 hover:text-white transition-colors p-1 rounded-md hover:bg-white/[0.04] outline-none shrink-0"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}

      </div>
    </div>
  );
}
