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

          {/* Animated Scroll Down Indicator */}
          <div className="mt-16 sm:mt-24 flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-light">
              Scroll down to explore engines
            </span>
            <div className="relative h-9 w-5 rounded-full border border-zinc-700 bg-zinc-900/50 backdrop-blur-sm">
              <div className="absolute top-1.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-zinc-400 animate-mouse-wheel" />
            </div>
          </div>

          {/* Minimalist Corporate Partners / Tech Integration Row */}
          <div className="mt-20 w-full max-w-4xl border-t border-white/[0.04] pt-8">
            <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-600 font-medium">
              Unified Real-time Ingestion Adapters
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-16 gap-y-6 opacity-40 grayscale transition-all hover:opacity-75">
              <div className="flex items-center gap-2 text-zinc-300 text-sm font-semibold">
                <MessageSquare className="h-4 w-4" /> Slack
              </div>
              <div className="flex items-center gap-2 text-zinc-300 text-sm font-semibold">
                <FileText className="h-4 w-4" /> Notion
              </div>
              <div className="flex items-center gap-2 text-zinc-300 text-sm font-semibold">
                <GitBranch className="h-4 w-4" /> GitHub
              </div>
              <div className="flex items-center gap-2 text-zinc-300 text-sm font-semibold">
                <Database className="h-4 w-4" /> Jira
              </div>
              <div className="flex items-center gap-2 text-zinc-300 text-sm font-semibold">
                <Clock className="h-4 w-4" /> Salesforce
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
