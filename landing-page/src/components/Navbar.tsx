"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./Button";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-lg border-b border-white/[0.04] transition-all duration-300">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo Area */}
          <div className="flex-1 flex justify-start">
            <a href="#" className="outline-none">
              <Logo />
            </a>
          </div>

          {/* Centered Glassmorphic Menu Inset */}
          <div className="hidden md:flex items-center bg-[#070708]/80 border border-white/[0.08] rounded-full backdrop-blur-md px-6 py-2.5 gap-6 select-none shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
            <a href="#how-it-works" className="text-xs text-zinc-400 hover:text-white transition-colors duration-200 font-medium">
              How it works
            </a>
            <a href="#services" className="text-xs text-zinc-400 hover:text-white transition-colors duration-200 font-medium">
              Services
            </a>
            <a href="#case-studies" className="text-xs text-zinc-400 hover:text-white transition-colors duration-200 font-medium">
              Case Studies
            </a>
            <a href="#pricing" className="text-xs text-zinc-400 hover:text-white transition-colors duration-200 font-medium">
              Pricing
            </a>
            <a href="#blogs" className="text-xs text-zinc-400 hover:text-white transition-colors duration-200 font-medium">
              Blogs
            </a>
            <a href="#about" className="text-xs text-zinc-400 hover:text-white transition-colors duration-200 font-medium">
              About
            </a>
          </div>

          {/* Right Action Area */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <div className="hidden md:flex items-center">
              <Button 
                variant="outline" 
                size="sm" 
                href="#book-a-call"
              >
                Book a Call
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="flex md:hidden p-2 text-zinc-400 hover:text-white outline-none"
              aria-label="Open navigation menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/98 backdrop-blur-2xl md:hidden animate-fade-in">
          <div className="flex h-20 items-center justify-between px-6 border-b border-white/[0.04]">
            <Logo />
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-zinc-400 hover:text-white outline-none"
              aria-label="Close navigation menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col gap-6 p-8 text-lg font-light text-zinc-300">
            <a 
              href="#how-it-works" 
              onClick={() => setMobileMenuOpen(false)} 
              className="hover:text-white transition-colors"
            >
              How it works
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)} 
              className="hover:text-white transition-colors"
            >
              Services
            </a>
            <a 
              href="#case-studies" 
              onClick={() => setMobileMenuOpen(false)} 
              className="hover:text-white transition-colors"
            >
              Case Studies
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)} 
              className="hover:text-white transition-colors"
            >
              Pricing
            </a>
            <a 
              href="#blogs" 
              onClick={() => setMobileMenuOpen(false)} 
              className="hover:text-white transition-colors"
            >
              Blogs
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)} 
              className="hover:text-white transition-colors"
            >
              About
            </a>
            <div className="h-px bg-white/[0.05] my-2" />
            <Button 
              variant="outline" 
              size="md" 
              href="#book-a-call"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full"
            >
              Book a Call
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

