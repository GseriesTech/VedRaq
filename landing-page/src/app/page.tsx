"use client";

import React from "react";
import { 
  Layers, 
  Cpu, 
  Database, 
  MessageSquare, 
  FileText, 
  GitBranch, 
  Clock 
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CausalVisualizer } from "@/components/CausalVisualizer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030303] text-zinc-100 overflow-x-hidden font-sans selection:bg-zinc-800 selection:text-white">
      {/* Obsidian Smoke Background Fluid Ribbon */}
      <div className="smoke-bg-container">
        <div className="smoke-ribbon-1" />
        <div className="smoke-ribbon-2" />
        <div className="smoke-ribbon-3" />
      </div>

      {/* Reusable Navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-32 sm:px-8 sm:pt-40 md:pt-48 pb-24">
        
        {/* HERO SECTION */}
        <section className="flex flex-col items-center text-center">
          
          {/* Pulsing Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-3.5 py-1.5 text-xs text-zinc-400 backdrop-blur-md transition-colors hover:border-white/15">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
            </span>
            <span className="font-light tracking-wide text-zinc-300">
              ⚡ Now in Private Beta • Connecting Enterprise Agents
            </span>
          </div>

          {/* Title Header */}
          <h1 className="mt-8 max-w-4xl text-5xl font-light tracking-tight text-white sm:text-7xl lg:text-8xl leading-[1.05]">
            The Active Brain for <br />
            <span className="font-normal bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              your Entire Company
            </span>
          </h1>

          {/* Subtitle / Paragraph */}
          <p className="mt-8 max-w-2xl text-base font-light leading-relaxed text-zinc-400 sm:text-lg">
            Inspired by the vision of a single source of truth for organizational memory. 
            VedRaq actively ingests, classifies, maps, and coordinates the scattered knowledge, 
            workflows, and autonomous agents across your enterprise.
          </p>

          {/* Call to Actions (Reusable pill components) */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button variant="solid" size="lg" href="#start">
              Get Started Now
            </Button>
            <Button variant="outline" size="lg" href="#platform">
              See Causal Graph
            </Button>
          </div>

          {/* Animated Scroll Down Indicator - Flanked alignment exactly like the screenshot */}
          <div className="mt-16 sm:mt-24 flex items-center justify-center gap-4 text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-light select-none">
            <span>Scroll down</span>
            <div className="relative h-7 w-4 rounded-full border border-zinc-700 bg-[#0A0A0B]/80 backdrop-blur-sm">
              <div className="absolute top-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-zinc-400 animate-mouse-wheel" />
            </div>
            <span>to explore engines</span>
          </div>

          {/* Premium Floating B&W Integrations Marquee Track */}
          <div className="mt-20 w-full relative overflow-hidden py-4 border-t border-white/[0.04] pt-10">
            <div className="marquee-gradient-overlay" />
            <div className="animate-marquee flex gap-16 items-center opacity-40 hover:opacity-75 transition-opacity duration-500">
              {/* Set 1 */}
              <div className="flex items-center gap-16 shrink-0">
                <div className="flex items-center gap-2.5 text-zinc-400 hover:text-white font-medium text-sm tracking-wide transition-colors duration-300 select-none">
                  <svg className="h-4 w-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.824a2.528 2.528 0 0 1-2.52-2.52v-5.042zM8.824 5.043a2.528 2.528 0 0 1-2.52-2.52 2.528 2.528 0 0 1 2.52-2.522 2.528 2.528 0 0 1 2.522 2.522v2.52h-2.522zm0 1.261a2.528 2.528 0 0 1 2.522 2.52v5.043a2.528 2.528 0 0 1-2.522 2.52H3.782a2.528 2.528 0 0 1-2.52-2.52V8.824a2.528 2.528 0 0 1 2.52-2.52h5.042zm10.134 3.761a2.528 2.528 0 0 1 2.522-2.52 2.528 2.528 0 0 1 2.52 2.52v2.52h-2.52v-2.52zm-1.262 0a2.528 2.528 0 0 1-2.52 2.52H10.13a2.528 2.528 0 0 1-2.522-2.52V3.782a2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52 2.52v5.042zm-3.761 10.134a2.528 2.528 0 0 1-2.522 2.52 2.528 2.528 0 0 1-2.52-2.522 2.528 2.528 0 0 1 2.52-2.52h2.522v2.522zm0-1.262a2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52-2.52v5.043a2.528 2.528 0 0 1-2.52 2.52h-5.043a2.528 2.528 0 0 1-2.522-2.52v-5.043z"/>
                  </svg>
                  <span className="font-light tracking-wider">Slack</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-400 hover:text-white font-medium text-sm tracking-wide transition-colors duration-300 select-none">
                  <svg className="h-4 w-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  <span className="font-light tracking-wider">GitHub</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-400 hover:text-white font-medium text-sm tracking-wide transition-colors duration-300 select-none">
                  <span className="h-4 w-4 bg-zinc-600 text-black flex items-center justify-center font-bold text-[10px] rounded-sm hover:bg-white select-none shrink-0 font-sans leading-none">N</span>
                  <span className="font-light tracking-wider">Notion</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-400 hover:text-white font-medium text-sm tracking-wide transition-colors duration-300 select-none">
                  <svg className="h-4 w-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 1-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.955 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
                  </svg>
                  <span className="font-light tracking-wider">Discord</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-400 hover:text-white font-medium text-sm tracking-wide transition-colors duration-300 select-none">
                  <svg className="h-4 w-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M11.53 2C6.81 2 3 5.81 3 10.53V22h11.47c4.72 0 8.53-3.81 8.53-8.53V2h-11.47zM8.6 15.5c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4 1.4.6 1.4 1.4-.6 1.4-1.4 1.4zm0-4.6c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4 1.4.6 1.4 1.4-.6 1.4-1.4 1.4zm5.8 4.6c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4 1.4.6 1.4 1.4-.6 1.4-1.4 1.4zM20.2 8.6c0 4.7-3.8 8.5-8.5 8.5H3V8.6C3 3.9 6.8 0 11.5 0h8.7v8.6z"/>
                  </svg>
                  <span className="font-light tracking-wider">Jira</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400 hover:text-white font-medium text-sm tracking-wide transition-colors duration-300 select-none">
                  <span className="font-semibold tracking-tighter text-md leading-none">L</span>
                  <span className="font-light tracking-wider">Linear</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400 hover:text-white font-medium text-sm tracking-wide transition-colors duration-300 select-none">
                  <svg className="h-4 w-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M8.25 12a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5zm0 7.5a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5zM15.75 12a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5zm0 7.5a3.75 3.75 0 1 1-3.75-3.75 3.75 3.75 0 0 1 3.75 3.75z"/>
                  </svg>
                  <span className="font-light tracking-wider">Figma</span>
                </div>
              </div>
              
              {/* Set 2 */}
              <div className="flex items-center gap-16 shrink-0">
                <div className="flex items-center gap-2.5 text-zinc-400 hover:text-white font-medium text-sm tracking-wide transition-colors duration-300 select-none">
                  <svg className="h-4 w-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.824a2.528 2.528 0 0 1-2.52-2.52v-5.042zM8.824 5.043a2.528 2.528 0 0 1-2.52-2.52 2.528 2.528 0 0 1 2.52-2.522 2.528 2.528 0 0 1 2.522 2.522v2.52h-2.522zm0 1.261a2.528 2.528 0 0 1 2.522 2.52v5.043a2.528 2.528 0 0 1-2.522 2.52H3.782a2.528 2.528 0 0 1-2.52-2.52V8.824a2.528 2.528 0 0 1 2.52-2.52h5.042zm10.134 3.761a2.528 2.528 0 0 1 2.522-2.52 2.528 2.528 0 0 1 2.52 2.52v2.52h-2.52v-2.52zm-1.262 0a2.528 2.528 0 0 1-2.52 2.52H10.13a2.528 2.528 0 0 1-2.522-2.52V3.782a2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52 2.52v5.042zm-3.761 10.134a2.528 2.528 0 0 1-2.522 2.52 2.528 2.528 0 0 1-2.52-2.522 2.528 2.528 0 0 1 2.52-2.52h2.522v2.522zm0-1.262a2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52-2.52v5.043a2.528 2.528 0 0 1-2.52 2.52h-5.043a2.528 2.528 0 0 1-2.522-2.52v-5.043z"/>
                  </svg>
                  <span className="font-light tracking-wider">Slack</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-400 hover:text-white font-medium text-sm tracking-wide transition-colors duration-300 select-none">
                  <svg className="h-4 w-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  <span className="font-light tracking-wider">GitHub</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-400 hover:text-white font-medium text-sm tracking-wide transition-colors duration-300 select-none">
                  <span className="h-4 w-4 bg-zinc-600 text-black flex items-center justify-center font-bold text-[10px] rounded-sm hover:bg-white select-none shrink-0 font-sans leading-none">N</span>
                  <span className="font-light tracking-wider">Notion</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-400 hover:text-white font-medium text-sm tracking-wide transition-colors duration-300 select-none">
                  <svg className="h-4 w-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 1-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.955 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
                  </svg>
                  <span className="font-light tracking-wider">Discord</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-400 hover:text-white font-medium text-sm tracking-wide transition-colors duration-300 select-none">
                  <svg className="h-4 w-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M11.53 2C6.81 2 3 5.81 3 10.53V22h11.47c4.72 0 8.53-3.81 8.53-8.53V2h-11.47zM8.6 15.5c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4 1.4.6 1.4 1.4-.6 1.4-1.4 1.4zm0-4.6c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4 1.4.6 1.4 1.4-.6 1.4-1.4 1.4zm5.8 4.6c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4 1.4.6 1.4 1.4-.6 1.4-1.4 1.4zM20.2 8.6c0 4.7-3.8 8.5-8.5 8.5H3V8.6C3 3.9 6.8 0 11.5 0h8.7v8.6z"/>
                  </svg>
                  <span className="font-light tracking-wider">Jira</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400 hover:text-white font-medium text-sm tracking-wide transition-colors duration-300 select-none">
                  <span className="font-semibold tracking-tighter text-md leading-none">L</span>
                  <span className="font-light tracking-wider">Linear</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400 hover:text-white font-medium text-sm tracking-wide transition-colors duration-300 select-none">
                  <svg className="h-4 w-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M8.25 12a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5zm0 7.5a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5zM15.75 12a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5zm0 7.5a3.75 3.75 0 1 1-3.75-3.75 3.75 3.75 0 0 1 3.75 3.75z"/>
                  </svg>
                  <span className="font-light tracking-wider">Figma</span>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* HIGH-END INTERACTIVE VISUALIZER */}
        <section id="platform" className="mt-32 border border-white/[0.06] bg-white/[0.01] rounded-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden">
          {/* Overlay lighting reflection */}
          <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-white/[0.01] blur-[80px]" />
          
          {/* Reusable Causal visualizer component */}
          <CausalVisualizer />
        </section>

        {/* DETAILED CORE ENGINES */}
        <section id="engines" className="mt-32">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl font-light text-white tracking-tight">
              SOP-Grounded Execution Bus
            </h2>
            <p className="mt-3 text-sm text-zinc-400 font-light">
              Engineered with enterprise grade memory fabrics and relational integrity layers.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card
              icon={<Layers className="h-5 w-5" />}
              title="1. Ingestion Engine"
              subtitle="Kafka (Upstash Queue)"
              description="Slack events, commit logs, support tickets, and email threads stream in with zero loss. Completely isolated pipeline guarantees heavy reasoning loads never choke critical ingest ports."
            />
            <Card
              icon={<Cpu className="h-5 w-5" />}
              title="2. Live State Engine"
              subtitle="Redis (Hot Memory Layer)"
              description="Maintains real-time snapshot tables: active incident status, on-call schedules, task queues, and agent session scopes. Enables instant sub-millisecond graph checks."
            />
            <Card
              icon={<Database className="h-5 w-5" />}
              title="3. Causal Intelligence"
              subtitle="Neo4j Knowledge Graph"
              description="Maps decisions to outcomes, servers to support channels, and team protocols to system status. Instantly answers: 'Which deploy spike triggered this ticket, and who authorized it?'"
            />
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.03] bg-black/60 py-12 text-center text-xs text-zinc-500 font-light relative z-10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 VedRaq Technologies Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
