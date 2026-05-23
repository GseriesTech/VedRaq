"use client";

import React, { useState, useEffect } from "react";
import { Cpu, ChevronRight } from "lucide-react";

export function CausalVisualizer() {
  const [activeTab, setActiveTab] = useState("ingest");
  const [logs, setLogs] = useState<string[]>([
    "System initialized. Awaiting event stream...",
    "Slack adapter connected to tenant: 'ModernCorp'",
    "Active causal graph traversal complete: 1,480 entities mapped"
  ]);

  useEffect(() => {
    const eventTypes = [
      "Slack event: User approved policy update in #security",
      "Jira webhook: Ticket #ENG-904 transitioned to QA",
      "Git commit: main - 'Update SOP check logic in API layer'",
      "Causal Check: Neo4j resolved incident path in 4ms",
      "Agent Trigger: SecurityAgent auditing system config",
      "Redis state sync: On-call engineer marked as Active",
    ];

    const interval = setInterval(() => {
      const randomEvent = eventTypes[Math.floor(Math.random() * eventTypes.length)];
      const timestamp = new Date().toLocaleTimeString();
      setLogs(prev => [`[${timestamp}] ${randomEvent}`, ...prev.slice(0, 4)]);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-stretch">
      {/* Explanation Column */}
      <div className="lg:w-2/5 flex flex-col justify-between">
        <div>
          <div className="h-7 w-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
            <Cpu className="h-4 w-4" />
          </div>
          <h3 className="text-2xl font-light text-white tracking-tight">
            Active Context Coordination
          </h3>
          <p className="mt-3 text-sm text-zinc-400 font-light leading-relaxed">
            Most AI agents run in completely blind isolated silos. VedRaq runs alongside them, building an live-updating relational matrix of dependencies.
          </p>

          {/* Tab Options */}
          <div className="mt-6 flex flex-col gap-2.5">
            {[
              { id: "ingest", title: "Live Event Ingest (Kafka)", desc: "Slack log streams, Git checkins & Jira updates flow without loss." },
              { id: "graph", title: "Causal Graph Sync (Neo4j)", desc: "Decisions instantly map to systems, SOP policies and historical contexts." },
              { id: "eval", title: "Agent Execution Guardrails", desc: "Monitors, resolves resource conflicts, and enforces central safety." }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-left p-3.5 rounded-lg border transition-all text-xs outline-none ${
                  activeTab === tab.id 
                  ? "bg-white/[0.04] border-white/20 text-white" 
                  : "bg-transparent border-transparent text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <div className="font-semibold flex items-center gap-1.5">
                  {tab.title}
                  {activeTab === tab.id && <ChevronRight className="h-3 w-3" />}
                </div>
                <div className="mt-1 font-light text-zinc-400 line-clamp-1">{tab.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Telemetry Console */}
        <div className="mt-8 border border-white/[0.05] bg-black/80 rounded-lg p-4 font-mono text-[11px] text-zinc-400 select-none">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.04] mb-2.5">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dot-glow animate-pulse" />
              Live Causal Stream
            </span>
            <span className="text-zinc-600">Telemetry Active</span>
          </div>
          <div className="space-y-1.5 h-[90px] overflow-hidden">
            {logs.map((log, index) => (
              <div key={index} className="transition-all duration-500 leading-tight">
                <span className="text-zinc-600">❯</span> {log}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Graph Canvas Panel */}
      <div className="lg:w-3/5 border border-white/[0.06] bg-black/40 rounded-xl min-h-[350px] sm:min-h-[420px] flex items-center justify-center p-4 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <svg className="w-full h-full min-h-[320px] relative z-10" viewBox="0 0 500 350">
          {/* Static Connection Lines */}
          <g stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1.5" fill="none">
            <path d="M 60 70 Q 150 70 250 160" />
            <path d="M 60 160 Q 150 160 250 160" />
            <path d="M 60 250 Q 150 250 250 160" />
            <path d="M 250 160 Q 320 90 420 90" />
            <path d="M 250 160 Q 320 230 420 230" />
          </g>

          {/* Animating High-light Flow Trails */}
          <g stroke="rgba(255, 255, 255, 0.5)" strokeWidth="2" fill="none" className="animate-pulse-flow">
            {activeTab === "ingest" && (
              <>
                <path d="M 60 70 Q 150 70 250 160" />
                <path d="M 60 160 Q 150 160 250 160" />
              </>
            )}
            {activeTab === "graph" && (
              <>
                <path d="M 60 250 Q 150 250 250 160" />
                <path d="M 250 160 Q 320 90 420 90" stroke="rgba(255,255,255,0.6)" />
              </>
            )}
            {activeTab === "eval" && (
              <>
                <path d="M 250 160 Q 320 90 420 90" />
                <path d="M 250 160 Q 320 230 420 230" stroke="rgba(255,255,255,0.7)" />
              </>
            )}
          </g>

          {/* Ingest Nodes */}
          <g transform="translate(60, 70)" className="cursor-pointer">
            <circle r="20" fill="rgba(30, 30, 30, 0.8)" stroke="rgba(255,255,255,0.1)" />
            <circle r="4" fill="#E01E5A" className="animate-pulse" />
            <text y="30" textAnchor="middle" fill="#888" fontSize="9" className="font-sans">Slack Ingest</text>
          </g>
          
          <g transform="translate(60, 160)" className="cursor-pointer">
            <circle r="20" fill="rgba(30, 30, 30, 0.8)" stroke="rgba(255,255,255,0.1)" />
            <circle r="4" fill="#0052CC" />
            <text y="30" textAnchor="middle" fill="#888" fontSize="9" className="font-sans">Jira Webhook</text>
          </g>

          <g transform="translate(60, 250)" className="cursor-pointer">
            <circle r="20" fill="rgba(30, 30, 30, 0.8)" stroke="rgba(255,255,255,0.1)" />
            <circle r="4" fill="#F05032" />
            <text y="30" textAnchor="middle" fill="#888" fontSize="9" className="font-sans">Commit Logs</text>
          </g>

          {/* Central Active Brain Core Node */}
          <g transform="translate(250, 160)" className="cursor-pointer">
            <circle r="36" fill="black" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" className="animate-pulse" />
            <circle r="28" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255,255,255,0.1)" />
            <circle r="6" fill="#FFF" className="dot-glow" />
            <text y="52" textAnchor="middle" fill="#FFF" fontSize="10" fontWeight="bold" style={{ letterSpacing: "1px" }}>VEDRAQ CORE</text>
          </g>

          {/* Output Nodes */}
          <g transform="translate(420, 90)" className="cursor-pointer">
            <circle r="22" fill="rgba(30, 30, 30, 0.8)" stroke="rgba(255,255,255,0.1)" />
            <circle r="4" fill="#A855F7" />
            <text y="32" textAnchor="middle" fill="#A855F7" fontSize="9" fontWeight="medium">Autonomous Agents</text>
          </g>

          <g transform="translate(420, 230)" className="cursor-pointer">
            <circle r="22" fill="rgba(30, 30, 30, 0.8)" stroke="rgba(255,255,255,0.1)" />
            <circle r="4" fill="#06B6D4" />
            <text y="32" textAnchor="middle" fill="#06B6D4" fontSize="9" fontWeight="medium">Causal Neo4j Graph</text>
          </g>
        </svg>
      </div>
    </div>
  );
}
