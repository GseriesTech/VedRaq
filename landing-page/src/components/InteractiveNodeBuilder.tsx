"use client";

import React, { useState } from "react";
import { AppNode, AppNodeChip } from "./AppNode";
import { Notify } from "./Notify";
import { Calendar, Bot, MessageSquare, Database, ArrowRight, Activity, Zap } from "lucide-react";

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

export function InteractiveNodeBuilder() {
  const [selectedId, setSelectedId] = useState<string>("agent");

  // Pre-configured nodes matching visual specifications and use cases
  const nodes: NodeData[] = [
    {
      id: "schedule",
      title: "Schedule Trigger",
      icon: <Calendar className="h-4.5 w-4.5 text-blue-400" />,
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
      id: "agent",
      title: "CRM Agent",
      icon: <Bot className="h-4.5 w-4.5 text-purple-400" />,
      iconBg: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
      appName: "VedRaq AI CRM Agent",
      about: "Autonomous CRM Auditor & Qualifier",
      description: "Leverages elite models to inspect customer files, audit pipeline records, and autonomously update customer status across internal databases and external platforms.",
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
      id: "slack",
      title: "Slack Outbound",
      icon: <MessageSquare className="h-4.5 w-4.5 text-amber-400" />,
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
    }
  ];

  const activeNode = nodes.find(n => n.id === selectedId) || nodes[1];

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-stretch mt-12 select-none">
      
      {/* Node Workflow Canvas (Left Column) */}
      <div className="flex-1 border border-white/[0.05] bg-[#070708]/30 rounded-xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-center relative overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
        {/* Connection Visual Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1.5px,transparent_1.5px)] [background-size:16px_16px] pointer-events-none opacity-60" />
        
        {/* Section Header Inside */}
        <div className="mb-8 z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#05F283]/20 bg-[#05F283]/[0.02] px-3.5 py-1 text-[10px] text-[#05F283] font-medium tracking-wide uppercase">
            <Activity className="h-3 w-3 animate-pulse" />
            Interactive Canvas
          </div>
          <h4 className="text-lg font-medium text-white tracking-tight mt-3">
            Operational Neural Pipeline
          </h4>
          <p className="text-xs text-zinc-400 font-light mt-1 max-w-md">
            Click on any card to focus and inspect its corporate credentials, parameters, and application details.
          </p>
        </div>

        {/* Nodes Flow Layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 relative z-10 py-4 max-w-3xl mx-auto w-full">
          {nodes.map((node, idx) => (
            <React.Fragment key={node.id}>
              {/* Actual Node */}
              <div 
                onClick={() => setSelectedId(node.id)}
                className="cursor-pointer transition-transform duration-300 active:scale-[0.98] w-full max-w-[240px] shrink-0"
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

              {/* Connecting Line (Only in-between) */}
              {idx < nodes.length - 1 && (
                <div className="flex h-8 w-px md:h-px md:w-8 items-center justify-center shrink-0">
                  {/* Glowing Flow Trail */}
                  <div className="h-full w-0.5 md:h-0.5 md:w-full bg-gradient-to-b md:bg-gradient-to-r from-zinc-800 via-[#05F283]/45 to-zinc-800 relative">
                    <div className="absolute inset-0 bg-[#05F283] blur-[2px] opacity-45 animate-pulse" />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Real-time System Event Notify Output */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] z-10 w-full">
          <span className="text-[10px] text-zinc-500 font-semibold tracking-wider uppercase block mb-3.5">
            System Event Output
          </span>
          <Notify 
            title="Live Triggers (Stripe & Webhooks)" 
            description="Slack events, payment webhooks & emails flow without loss." 
            type="success"
            showArrow={true}
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
                Active Node
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
                Role & Classification
              </span>
              <p className="text-xs text-zinc-200 font-medium">
                {activeNode.about}
              </p>
            </div>

            <div>
              <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider block mb-1">
                Operation Summary
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
            Engine Rules & Environment
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
