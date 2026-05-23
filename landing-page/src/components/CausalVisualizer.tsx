"use client";

import React, { useState, useEffect } from "react";
import { Cpu, ChevronRight, CheckCircle2 } from "lucide-react";

export function CausalVisualizer() {
  const [activeTab, setActiveTab] = useState("ingest");
  const [logs, setLogs] = useState<string[]>([
    "Helium Engine ready. Monitoring webhooks...",
    "Stripe adapter active on account: 'AcmeSaaS'",
    "Active automation pipeline checked: 48 active nodes mapped"
  ]);

  useEffect(() => {
    const eventTypes = [
      "Stripe webhook: Invoice paid ($149.00) for user 'alex@dev.co'",
      "Support Email: Question about API rate limits received",
      "OpenAI Engine: Categorized email category as 'Developer Support'",
      "Helium Core: Generated rate limit draft response & verified policy",
      "Slack integration: Sent confirmation notify to #leads-feed",
      "Database Sync: Updated Postgres customer profile row #9042",
      "Zendesk API: Auto-assigned ticket #1893 to tier-2 support"
    ];

    const interval = setInterval(() => {
      const randomEvent = eventTypes[Math.floor(Math.random() * eventTypes.length)];
      const timestamp = new Date().toLocaleTimeString();
      setLogs(prev => [`[${timestamp}] ${randomEvent}`, ...prev.slice(0, 4)]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-stretch">
      {/* Explanation Column */}
      <div className="lg:w-2/5 flex flex-col justify-between">
        <div>
          <div className="h-7 w-7 rounded-lg bg-[#05F283]/10 border border-[#05F283]/30 flex items-center justify-center text-[#05F283] mb-6">
            <Cpu className="h-4 w-4" />
          </div>
          <h3 className="text-2xl font-light text-white tracking-tight">
            Autonomous Flow Orchestration
          </h3>
          <p className="mt-3 text-sm text-zinc-400 font-light leading-relaxed">
            Standard integrations run blind in disconnected silos. Helium connects your entire tech stack, building a live-updating orchestration fabric that executes actions in milliseconds.
          </p>

          {/* Tab Options */}
          <div className="mt-6 flex flex-col gap-2.5">
            {[
              { id: "ingest", title: "Live Triggers (Stripe & Webhooks)", desc: "Slack events, payment webhooks & emails flow without loss." },
              { id: "graph", title: "Helium Intelligence Core", desc: "Automated analysis of tickets, decisions, and system alerts." },
              { id: "eval", title: "Action Bus Execution", desc: "Instantly triggers Slack alerts, DB syncs, and custom scripts." }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-left p-3.5 rounded-lg border transition-all text-xs outline-none ${
                  activeTab === tab.id 
                  ? "bg-[#05F283]/5 border-[#05F283]/30 text-white" 
                  : "bg-transparent border-transparent text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <div className="font-semibold flex items-center gap-1.5">
                  {tab.title}
                  {activeTab === tab.id && <ChevronRight className="h-3 w-3 text-[#05F283]" />}
                </div>
                <div className="mt-1 font-light text-zinc-400 line-clamp-1">{tab.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Telemetry Console */}
        <div className="mt-8 border border-white/[0.05] bg-black/90 rounded-lg p-4 font-mono text-[11px] text-zinc-400 select-none shadow-md">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.05] mb-2.5">
            <span className="text-[10px] text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#05F283] helium-dot-glow animate-pulse" />
              Live Telemetry Stream
            </span>
            <span className="text-zinc-600 flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3 text-[#05F283]" />
              Active
            </span>
          </div>
          <div className="space-y-1.5 h-[90px] overflow-hidden">
            {logs.map((log, index) => (
              <div key={index} className="transition-all duration-500 leading-tight">
                <span className="text-[#05F283]">❯</span> {log}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Graph Canvas Panel */}
      <div className="lg:w-3/5 border border-white/[0.06] bg-black/40 rounded-xl min-h-[350px] sm:min-h-[420px] flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Soft emerald background mist */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[200px] w-[200px] rounded-full bg-[#05F283]/5 blur-[60px] pointer-events-none" />

        <svg className="w-full h-full min-h-[320px] relative z-10" viewBox="0 0 500 350">
          {/* Static Connection Lines */}
          <g stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1.5" fill="none">
            <path d="M 60 70 Q 150 70 250 160" />
            <path d="M 60 160 Q 150 160 250 160" />
            <path d="M 60 250 Q 150 250 250 160" />
            <path d="M 250 160 Q 320 90 420 90" />
            <path d="M 250 160 Q 320 230 420 230" />
          </g>

          {/* Animating Green Neon Flow Trails */}
          <g stroke="#05F283" strokeWidth="2" fill="none" className="animate-pulse-flow-green" opacity="0.8">
            {activeTab === "ingest" && (
              <>
                <path d="M 60 70 Q 150 70 250 160" />
                <path d="M 60 160 Q 150 160 250 160" />
              </>
            )}
            {activeTab === "graph" && (
              <>
                <path d="M 60 250 Q 150 250 250 160" />
                <path d="M 250 160 Q 320 90 420 90" />
              </>
            )}
            {activeTab === "eval" && (
              <>
                <path d="M 250 160 Q 320 90 420 90" />
                <path d="M 250 160 Q 320 230 420 230" />
              </>
            )}
          </g>

          {/* Ingest Nodes */}
          <g transform="translate(60, 70)" className="cursor-pointer">
            <circle r="20" fill="rgba(10, 10, 10, 0.85)" stroke="rgba(255,255,255,0.08)" />
            <circle r="4" fill="#6772E5" className="helium-node-glow animate-pulse" />
            <text y="30" textAnchor="middle" fill="#888" fontSize="9" className="font-sans font-light">Stripe Paid</text>
          </g>
          
          <g transform="translate(60, 160)" className="cursor-pointer">
            <circle r="20" fill="rgba(10, 10, 10, 0.85)" stroke="rgba(255,255,255,0.08)" />
            <circle r="4" fill="#EA4335" />
            <text y="30" textAnchor="middle" fill="#888" fontSize="9" className="font-sans font-light">Email Inbound</text>
          </g>

          <g transform="translate(60, 250)" className="cursor-pointer">
            <circle r="20" fill="rgba(10, 10, 10, 0.85)" stroke="rgba(255,255,255,0.08)" />
            <circle r="4" fill="#F05032" />
            <text y="30" textAnchor="middle" fill="#888" fontSize="9" className="font-sans font-light">Webhook Ingest</text>
          </g>

          {/* Central Helium Core Node */}
          <g transform="translate(250, 160)" className="cursor-pointer">
            <circle r="36" fill="black" stroke="rgba(5, 242, 131, 0.25)" strokeWidth="1.5" className="animate-pulse" />
            <circle r="28" fill="rgba(5, 242, 131, 0.04)" stroke="rgba(5, 242, 131, 0.15)" />
            <circle r="6" fill="#05F283" className="helium-dot-glow" />
            <text y="52" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold" style={{ letterSpacing: "1.2px" }}>HELIUM CORE</text>
          </g>

          {/* Output Nodes */}
          <g transform="translate(420, 90)" className="cursor-pointer">
            <circle r="22" fill="rgba(10, 10, 10, 0.85)" stroke="rgba(255,255,255,0.08)" />
            <circle r="4" fill="#4A154B" />
            <text y="32" textAnchor="middle" fill="#A855F7" fontSize="9" fontWeight="medium">Automated Slack</text>
          </g>

          <g transform="translate(420, 230)" className="cursor-pointer">
            <circle r="22" fill="rgba(10, 10, 10, 0.85)" stroke="rgba(255,255,255,0.08)" />
            <circle r="4" fill="#0052CC" />
            <text y="32" textAnchor="middle" fill="#0052CC" fontSize="9" fontWeight="medium">Database Sync</text>
          </g>
        </svg>
      </div>
    </div>
  );
}

