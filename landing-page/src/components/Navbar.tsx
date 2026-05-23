"use client";

import React, { useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./Button";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.04] bg-[#030303]/40 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Reusable White Logo */}
          <a href="#">
            <Logo />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#platform" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200">
              Platform
            </a>
            <a href="#engines" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200">
              Causal Engines
            </a>
            <a href="#docs" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200">
              Docs
            </a>
            <a href="#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200">
              Pricing
            </a>
          </div>

          {/* Navbar Reusable Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              href="#demo"
              startIcon={<Sparkles className="h-3 w-3 text-zinc-400" />}
            >
              Book Demo
            </Button>
            <Button 
              variant="solid" 
              size="sm" 
              href="#start"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="flex md:hidden p-2 text-zinc-400 hover:text-white"
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#030303]/97 backdrop-blur-xl md:hidden animate-fade-in">
          <div className="flex h-16 items-center justify-between px-6 border-b border-white/[0.04]">
            <Logo />
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-zinc-400 hover:text-white"
              aria-label="Close navigation menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col gap-6 p-8 text-lg font-light text-zinc-300">
            <a 
              href="#platform" 
              onClick={() => setMobileMenuOpen(false)} 
              className="hover:text-white transition-colors"
            >
              Platform
            </a>
            <a 
              href="#engines" 
              onClick={() => setMobileMenuOpen(false)} 
              className="hover:text-white transition-colors"
            >
              Causal Engines
            </a>
            <a 
              href="#docs" 
              onClick={() => setMobileMenuOpen(false)} 
              className="hover:text-white transition-colors"
            >
              Docs
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)} 
              className="hover:text-white transition-colors"
            >
              Pricing
            </a>
            <div className="h-px bg-white/[0.05] my-2" />
            <Button 
              variant="outline" 
              size="md" 
              href="#demo"
              onClick={() => setMobileMenuOpen(false)}
              startIcon={<Sparkles className="h-4 w-4 text-zinc-400" />}
              className="w-full"
            >
              Book Demo
            </Button>
            <Button 
              variant="solid" 
              size="md" 
              href="#start"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
