"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "glass" | "ghost";
  size?: "sm" | "md" | "lg";
  pill?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  href?: string;
}

export function Button({
  children,
  className,
  variant = "solid",
  size = "md",
  pill = true,
  startIcon,
  endIcon,
  href,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 select-none outline-none focus-visible:ring-2 focus-visible:ring-white/40 active:scale-[0.98]";
  
  const variants = {
    solid: "bg-white text-black hover:bg-zinc-200 border border-transparent shadow-[0_4px_20px_-4px_rgba(255,255,255,0.15)] hover:shadow-[0_4px_25px_-2px_rgba(255,255,255,0.25)]",
    outline: "bg-white/[0.02] text-zinc-300 border border-white/10 hover:border-white/25 hover:text-white hover:bg-white/[0.08] backdrop-blur-sm",
    glass: "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20",
    ghost: "bg-transparent text-zinc-400 hover:text-white hover:bg-white/[0.04]",
  };

  const sizes = {
    sm: "h-9 px-4 text-xs gap-1.5",
    md: "h-11 px-6 text-sm gap-2",
    lg: "h-13 px-8 text-base gap-2.5",
  };

  const buttonClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    pill ? "rounded-full" : "rounded-xl",
    className
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {startIcon && <span className="inline-flex shrink-0">{startIcon}</span>}
        {children}
        {endIcon && <span className="inline-flex shrink-0">{endIcon}</span>}
      </a>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {startIcon && <span className="inline-flex shrink-0">{startIcon}</span>}
      {children}
      {endIcon && <span className="inline-flex shrink-0">{endIcon}</span>}
    </button>
  );
}
