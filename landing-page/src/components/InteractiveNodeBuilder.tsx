"use client";

import React, { useState, useEffect } from "react";
import { AppNode, AppNodeChip } from "./AppNode";
import { Notify } from "./Notify";
import { Calendar, Bot, MessageSquare, Database, Activity, Zap, Shield, Key, Network, Webhook, Tag } from "lucide-react";

interface NodeData {
  id: string;
  title: string;
  icon: React.ReactNode;
  iconBg: string;
  appName: string;
  about: string;
  description: string;
  details: { label: string; value: string }[];
  rows: { label: string; value: React.ReactNode }[];
}

interface EventLog {
  title: string;
  description: string;
  type: "success" | "info" | "warning" | "error";
}

export function InteractiveNodeBuilder() {
  const [selectedId, setSelectedId] = useState<string>("agent");
  const [activeEventIndex, setActiveEventIndex] = useState<number>(0);

  // Pre-configured nodes representing a rich React Flow network
  const nodes: NodeData[] = [
    // Column 1: Triggers
    {
      id: "schedule",
      title: "Schedule Trigger",
      icon: <Calendar className="h-4 w-4 text-blue-400" />,
      iconBg: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
      appName: "VedRaq Scheduler Engine",
      about: "Chronological Operation Dispatcher",
      description: "Triggers automated workflows on precise cron intervals, dates, or repetitive schedules. Highly optimized for cron consistency with zero drift.",
      details: [
        { label: "Pipeline Status", value: "Ready" },
        { label: "Next Scheduled Run", value: "Today, 09:00 AM" },
        { label: "Target Execution Bus", value: "Helium Action Bus" }
      ],
      rows: [
        { label: "Run Frequency", value: "Daily" },
        { label: "Time", value: "09:00 AM" }
      ]
    },
    {
      id: "webhook",
      title: "Webhook Ingest",
      icon: <Webhook className="h-4 w-4 text-emerald-400" />,
      iconBg: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
      appName: "Stripe Webhook Gateway",
      about: "Instant Transaction Trigger",
      description: "Catches live webhook events from credit cards, checkout sessions, and external platforms, parsing details securely under 2ms.",
      details: [
        { label: "SLA Webhook Ingest", value: "< 2ms" },
        { label: "Active Connections", value: "12 Channels" },
        { label: "Security Context", value: "HMAC Signed" }
      ],
      rows: [
        { label: "Webhook Port", value: "443 HTTPS" },
        { label: "Target Ingest API", value: "v2/payments" }
      ]
    },
    // Column 2: Engines
    {
      id: "agent",
      title: "CRM Agent",
      icon: <Bot className="h-4 w-4 text-purple-400" />,
      iconBg: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
      appName: "VedRaq AI CRM Agent",
      about: "Autonomous CRM Auditor & Qualifier",
      description: "Leverages elite models to inspect customer files, audit pipeline records, and autonomously update customer status across internal databases.",
      details: [
        { label: "Active Model", value: "VedRaq Brain-v5.4" },
        { label: "System Temperature", value: "0.2 (Predictive)" },
        { label: "Safety Evaluation", value: "Shield-v3 active" }
      ],
      rows: [
        { label: "Model", value: <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#05F283]" /> gpt-5.4</span> },
        { label: "System Prompt", value: "Audit CRM record..." },
        { label: "Tools", value: (
          <div className="flex gap-1 shrink-0">
            <AppNodeChip label="HubSpot" />
            <AppNodeChip label="Salesforce" />
          </div>
        )}
      ]
    },
    {
      id: "classifier",
      title: "Classifier Engine",
      icon: <Tag className="h-4 w-4 text-[#05F283]" />,
      iconBg: "bg-[#05F283]/10 text-[#05F283] border border-[#05F283]/20",
      appName: "Semantic Tagging Core",
      about: "Generative Query Router",
      description: "Performs semantic categorization on inbound queries. Uses fast embedding logic to tag intents and dispatch actions.",
      details: [
        { label: "Model Category", value: "Tagger-v2" },
        { label: "Classifier Speed", value: "50ms" },
        { label: "Accuracy Threshold", value: "99.4%" }
      ],
      rows: [
        { label: "Accuracy", value: "99.4%" },
        { label: "Intents", value: "Support, Billing, Tech" }
      ]
    },
    // Column 3: Actions
    {
      id: "slack",
      title: "Slack Outbound",
      icon: <MessageSquare className="h-4 w-4 text-amber-400" />,
      iconBg: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
      appName: "Slack Corporate Connect",
      about: "Instant Channel Dispatcher & Alert Bus",
      description: "Sends customized alerts, rich telemetry messages, and interactive blocks to specific corporate workspaces to notify team members of audit completions.",
      details: [
        { label: "Target Channel", value: "#leads-feed" },
        { label: "Payload Format", value: "Rich Block Layout" },
        { label: "Webhook Status", value: "Verified Active" }
      ],
      rows: [
        { label: "Channel", value: "#leads-feed" },
        { label: "Format", value: "Rich Blocks" },
        { label: "Delivery SLA", value: "< 2ms" }
      ]
    },
    {
      id: "postgres",
      title: "Postgres Sync",
      icon: <Database className="h-4 w-4 text-cyan-400" />,
      iconBg: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
      appName: "Real-Time DB Sync Core",
      about: "Transactional Database Synchronizer",
      description: "Synchronizes states across Postgres tables, keeping user scopes, payment rows, and telemetry databases completely uniform.",
      details: [
        { label: "Target Table", value: "customer_profiles" },
        { label: "Connection Pool", value: "PgBouncer" },
        { label: "Sync Delay", value: "3ms" }
      ],
      rows: [
        { label: "Database", value: "PostgreSQL v16" },
        { label: "Write Policy", value: "Optimistic Locking" }
      ]
    }
  ];

  // Dynamic Event log database for state rotations every 1.5 seconds
  const eventLogs: EventLog[] = [
    {
      title: "Live Triggers (Stripe & Webhooks)",
      description: "Slack events, payment webhooks & emails flow without loss.",
      type: "success"
    },
    {
      title: "AI Agent Reasoning (CRM Audit)",
      description: "Successfully processed record update for customer #9024 via gpt-5.4.",
      type: "info"
    },
    {
      title: "Database Sync (PostgreSQL)",
      description: "Updated PostgreSQL profile record and dispatched transaction ledger sync in 3ms.",
      type: "warning"
    },
    {
      title: "Slack Outbound API Gateway",
      description: "Connection pool refresh warning: high request velocity detected on Slack webhook channel.",
      type: "error"
    }
  ];

  // Rotate events automatically every 1.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEventIndex(prev => (prev + 1) % eventLogs.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const activeNode = nodes.find(n => n.id === selectedId) || nodes[2];
  const activeEvent = eventLogs[activeEventIndex];

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-stretch mt-12 select-none">
      
      {/* Node Flow Interactive Canvas (Left Column) */}
      <div className="flex-1 border border-white/[0.05] bg-[#070708]/30 rounded-xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between relative overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.6)] min-h-[580px]">
        {/* Connection Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1.5px,transparent_1.5px)] [background-size:16px_16px] pointer-events-none opacity-60" />
        
        {/* Canvas Header */}
        <div className="mb-6 z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#05F283]/20 bg-[#05F283]/[0.02] px-3.5 py-1 text-[10px] text-[#05F283] font-medium tracking-wide uppercase">
              <Network className="h-3 w-3 animate-pulse" />
              React Flow Workspace Canvas
            </div>
            <h4 className="text-lg font-medium text-white tracking-tight mt-3">
              Operational Neural Pipeline Architect
            </h4>
            <p className="text-xs text-zinc-400 font-light mt-1">
              Connect inputs, AI categorizers, and system endpoints. Click nodes to inspect variables.
            </p>
          </div>
          <div className="flex gap-2 self-start sm:self-center">
            <span className="h-2 w-2 rounded-full bg-[#05F283] animate-ping" />
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Active Workspace</span>
          </div>
        </div>

        {/* 3-Column Node Graph Canvas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 py-6 max-w-4xl mx-auto w-full items-center">
          
          {/* Column 1: Triggers */}
          <div className="flex flex-col gap-6 items-center">
            <span className="text-[9px] font-semibold text-zinc-600 uppercase tracking-widest mb-1">Triggers (Inputs)</span>
            {nodes.slice(0, 2).map((node) => (
              <div 
                key={node.id}
                onClick={() => setSelectedId(node.id)}
                className="cursor-pointer transition-transform duration-300 active:scale-[0.98] w-full max-w-[210px]"
              >
                <AppNode 
                  title={node.title}
                  icon={node.icon}
                  iconBg={node.iconBg}
                  isActive={selectedId === node.id}
                  rows={node.rows}
                  className="w-full shadow-lg"
                />
              </div>
            ))}
          </div>

          {/* Column 2: Engines */}
          <div className="flex flex-col gap-6 items-center relative">
            <span className="text-[9px] font-semibold text-zinc-600 uppercase tracking-widest mb-1">Intelligence Nodes</span>
            {nodes.slice(2, 4).map((node) => (
              <div 
                key={node.id}
                onClick={() => setSelectedId(node.id)}
                className="cursor-pointer transition-transform duration-300 active:scale-[0.98] w-full max-w-[210px]"
              >
                <AppNode 
                  title={node.title}
                  icon={node.icon}
                  iconBg={node.iconBg}
                  isActive={selectedId === node.id}
                  rows={node.rows}
                  className="w-full shadow-lg"
                />
              </div>
            ))}
          </div>

          {/* Column 3: Actions */}
          <div className="flex flex-col gap-6 items-center">
            <span className="text-[9px] font-semibold text-zinc-600 uppercase tracking-widest mb-1">Endpoints (Actions)</span>
            {nodes.slice(4, 6).map((node) => (
              <div 
                key={node.id}
                onClick={() => setSelectedId(node.id)}
                className="cursor-pointer transition-transform duration-300 active:scale-[0.98] w-full max-w-[210px]"
              >
                <AppNode 
                  title={node.title}
                  icon={node.icon}
                  iconBg={node.iconBg}
                  isActive={selectedId === node.id}
                  rows={node.rows}
                  className="w-full shadow-lg"
                />
              </div>
            ))}
          </div>

        </div>

        {/* Real-time Ticker Event Notify Output with Outline color animation */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] z-10 w-full">
          <div className="flex items-center justify-between mb-3.5">
            <span className="text-[10px] text-zinc-500 font-semibold tracking-wider uppercase flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#05F283] animate-pulse" />
              Event Output Stream (Rotated 1.5s)
            </span>
            <span className="text-[9px] font-mono text-zinc-500">Pipeline OK</span>
          </div>
          
          <Notify 
            title={activeEvent.title} 
            description={activeEvent.description} 
            type={activeEvent.type}
            showArrow={true}
            className="transition-all duration-500"
          />
        </div>
      </div>

      {/* Details Inspector Panel (Right Column) */}
      <div className="w-full lg:w-80 shrink-0 border border-white/[0.08] bg-black/60 rounded-xl p-6 backdrop-blur-md shadow-2xl flex flex-col justify-between relative overflow-hidden">
        {/* Soft Background Radial Light */}
        <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-[#05F283]/[0.025] blur-[40px] pointer-events-none" />
        
        <div className="relative z-10">
          {/* Header Details */}
          <div className="flex items-center gap-3.5 pb-4.5 border-b border-white/[0.06] mb-5">
            <div className={`h-10 w-10 rounded-lg flex items-center justify-center shrink-0 ${activeNode.iconBg}`}>
              {activeNode.icon}
            </div>
            <div>
              <div className="text-[10px] text-[#05F283] font-semibold tracking-wider uppercase flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#05F283] animate-pulse" />
                Active Node Context
              </div>
              <h5 className="text-sm font-semibold text-white tracking-wide mt-0.5">
                {activeNode.appName}
              </h5>
            </div>
          </div>

          {/* About App description */}
          <div className="space-y-4">
            <div>
              <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider block mb-1">
                Classification & Focus
              </span>
              <p className="text-xs text-zinc-200 font-medium">
                {activeNode.about}
              </p>
            </div>

            <div>
              <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider block mb-1">
                General Operation Summary
              </span>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                {activeNode.description}
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Specs list */}
        <div className="mt-8 pt-5 border-t border-white/[0.06] space-y-3 relative z-10">
          <span className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider block mb-1">
            Engine Credentials & Keys
          </span>
          {activeNode.details.map((detail, idx) => (
            <div key={idx} className="flex justify-between items-center text-[10px]">
              <span className="text-zinc-500 font-light">{detail.label}</span>
              <span className="text-zinc-300 font-medium">{detail.value}</span>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
