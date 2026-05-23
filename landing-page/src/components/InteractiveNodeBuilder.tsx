"use client";

import React, { useState, useEffect, useRef } from "react";
import { AppNode, AppNodeChip } from "./AppNode";
import { Notify } from "./Notify";
import { Calendar, Bot, MessageSquare, Database, Activity, Zap, Network, Webhook, Tag, Send, Sparkles } from "lucide-react";

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

interface ChatMessage {
  sender: "user" | "assistant";
  content: string;
}

export function InteractiveNodeBuilder() {
  const [selectedId, setSelectedId] = useState<string>("agent");
  const [activeEventIndex, setActiveEventIndex] = useState<number>(0);
  const [chatInput, setChatInput] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      sender: "assistant",
      content: "Hello! I am the VedRaq Brain Core, the operational nervous system of your company. Click on any node in the canvas to route my attention, and ask me anything about how I orchestrate this flow!"
    }
  ]);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  // Pre-configured nodes representing a rich React Flow network
  const nodes: NodeData[] = [
    // Column 1: Triggers
    {
      id: "schedule",
      title: "Schedule Trigger",
      icon: <Calendar className="h-5 w-5 text-blue-400" />,
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
      icon: <Webhook className="h-5 w-5 text-emerald-400" />,
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
    // Column 2: Central Engines
    {
      id: "agent",
      title: "CRM Agent",
      icon: <Bot className="h-5 w-5 text-purple-400" />,
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
        { label: "Model", value: <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#05F283]" /> gpt-5.4</span> },
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
      icon: <Tag className="h-5 w-5 text-[#05F283]" />,
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
      icon: <MessageSquare className="h-5 w-5 text-amber-400" />,
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
      icon: <Database className="h-5 w-5 text-cyan-400" />,
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

  // Update chat intro when selecting a node
  useEffect(() => {
    setChatMessages(prev => [
      ...prev,
      {
        sender: "assistant",
        content: `I've shifted my neural focus to the [${activeNode.title}] node. This engine functions as our ${activeNode.about}. What parameters or system logs would you like to inspect?`
      }
    ]);
  }, [selectedId]);

  // Handle chat submission
  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput;
    setChatMessages(prev => [...prev, { sender: "user", content: userText }]);
    setChatInput("");

    // Simulate smart AI response based on node context
    setTimeout(() => {
      let reply = "";
      const lower = userText.toLowerCase();

      if (lower.includes("status") || lower.includes("healthy") || lower.includes("running")) {
        reply = `The [${activeNode.appName}] is running at 100% health. All checks are green with latency metrics reporting under expected limits.`;
      } else if (lower.includes("model") || lower.includes("model version") || lower.includes("version")) {
        reply = `The active processor engine inside [${activeNode.title}] is powered by our proprietary VedRaq Core intelligence models, verified with strict safety filters.`;
      } else if (lower.includes("help") || lower.includes("what can you do")) {
        reply = `I can help you audit operations, query PostgreSQL transaction logs, inspect Stripe webhook endpoints, or change model prompt temperatures for the active node context.`;
      } else {
        reply = `I've routed your query directly to the active ${activeNode.appName} context. Current system environment reports: "${activeNode.details[0].label}: ${activeNode.details[0].value}". All operations are healthy.`;
      }

      setChatMessages(prev => [...prev, { sender: "assistant", content: reply }]);
    }, 600);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-stretch mt-12 select-none">
      
      {/* Node Flow Interactive Canvas (Left Column) */}
      <div className="flex-1 border border-white/[0.05] bg-[#070708]/30 rounded-xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between relative overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.6)] min-h-[640px]">
        {/* Connection Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1.5px,transparent_1.5px)] [background-size:16px_16px] pointer-events-none opacity-60" />
        
        {/* Canvas Header */}
        <div className="mb-6 z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#05F283]/20 bg-[#05F283]/[0.02] px-3.5 py-1.5 text-xs text-[#05F283] font-medium tracking-wide uppercase">
              <Network className="h-3 w-3 animate-pulse" />
              Operational Neural Fabric
            </div>
            <h4 className="text-xl font-medium text-white tracking-tight mt-3">
              VedRaq Super Intelligence Map
            </h4>
            <p className="text-sm text-zinc-400 font-light mt-1">
              Select any node in the canvas to focus the AI Copilot. Connection strings animate telemetry flow.
            </p>
          </div>
          <div className="flex gap-2 items-center self-start sm:self-center border border-white/[0.06] bg-black/40 px-3 py-1 rounded-[10px]">
            <span className="h-2 w-2 rounded-full bg-[#05F283] animate-pulse" />
            <span className="text-[12px] font-mono text-zinc-400 uppercase tracking-widest">Engine Pipeline OK</span>
          </div>
        </div>

        {/* 3-Column Node Graph Canvas with central BRAIN CORE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 py-6 max-w-4xl mx-auto w-full items-center">
          
          {/* Column 1: Triggers */}
          <div className="flex flex-col gap-6 items-center">
            <span className="text-[12px] font-semibold text-zinc-500 uppercase tracking-widest mb-1">Triggers (Inputs)</span>
            {nodes.slice(0, 2).map((node) => (
              <div 
                key={node.id}
                onClick={() => setSelectedId(node.id)}
                className="cursor-pointer transition-transform duration-300 active:scale-[0.98] w-full max-w-[220px]"
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

          {/* Column 2: Central VEDRAQ BRAIN CORE */}
          <div className="flex flex-col gap-6 items-center relative">
            <span className="text-[12px] font-semibold text-zinc-500 uppercase tracking-widest mb-1">Central Core</span>
            
            {/* Intelligent Subprocessor 1 */}
            <div 
              onClick={() => setSelectedId("agent")}
              className="cursor-pointer transition-transform duration-300 active:scale-[0.98] w-full max-w-[220px]"
            >
              <AppNode 
                title={nodes[2].title}
                icon={nodes[2].icon}
                iconBg={nodes[2].iconBg}
                isActive={selectedId === "agent"}
                rows={nodes[2].rows}
                className="w-full shadow-lg opacity-85"
              />
            </div>

            {/* SUPER PART: VEDRAQ BRAIN CORE SUPER-PROCESSOR */}
            <div className="w-full max-w-[220px] bg-[#0c0d12] border-2 border-[#05F283] rounded-2xl p-4.5 text-center relative shadow-[0_0_40px_rgba(5,242,131,0.22)] group hover:scale-[1.02] transition-all duration-300">
              {/* Pulsing light */}
              <div className="absolute inset-0 bg-[#05F283]/[0.015] rounded-2xl animate-pulse pointer-events-none" />
              <div className="h-10 w-10 rounded-full bg-[#05F283]/10 border border-[#05F283]/30 flex items-center justify-center text-[#05F283] mx-auto mb-2.5 shadow-[0_0_15px_rgba(5,242,131,0.2)]">
                <Sparkles className="h-5.5 w-5.5 animate-spin-slow" />
              </div>
              <h5 className="text-[15px] font-bold text-white tracking-wide">
                VEDRAQ BRAIN CORE
              </h5>
              <p className="text-[12px] text-zinc-400 font-light mt-1.5 leading-normal">
                Autonomous coordination nexus directing triggers into actions.
              </p>
              
              {/* Dynamic status badges */}
              <div className="mt-3 flex justify-center gap-1.5">
                <AppNodeChip label="Active Neural Matrix" className="bg-[#05F283]/5 border-[#05F283]/15 text-[#05F283]" />
              </div>
            </div>

            {/* Intelligent Subprocessor 2 */}
            <div 
              onClick={() => setSelectedId("classifier")}
              className="cursor-pointer transition-transform duration-300 active:scale-[0.98] w-full max-w-[220px]"
            >
              <AppNode 
                title={nodes[3].title}
                icon={nodes[3].icon}
                iconBg={nodes[3].iconBg}
                isActive={selectedId === "classifier"}
                rows={nodes[3].rows}
                className="w-full shadow-lg opacity-85"
              />
            </div>
          </div>

          {/* Column 3: Endpoints */}
          <div className="flex flex-col gap-6 items-center">
            <span className="text-[12px] font-semibold text-zinc-500 uppercase tracking-widest mb-1">Endpoints (Actions)</span>
            {nodes.slice(4, 6).map((node) => (
              <div 
                key={node.id}
                onClick={() => setSelectedId(node.id)}
                className="cursor-pointer transition-transform duration-300 active:scale-[0.98] w-full max-w-[220px]"
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

        {/* Real-time Ticker Event Notify Output with upward transition (key indexed) */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] z-10 w-full">
          <div className="flex items-center justify-between mb-3.5">
            <span className="text-[12px] text-zinc-500 font-semibold tracking-wider uppercase flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#05F283] animate-pulse" />
              Event Output Stream (Rotated 1.5s)
            </span>
            <span className="text-[12px] font-mono text-zinc-500">Pipeline Monitoring Ready</span>
          </div>
          
          {/* Keyed element to trigger the custom slide-up transition animation */}
          <div key={activeEventIndex} className="animate-slide-up">
            <Notify 
              title={activeEvent.title} 
              description={activeEvent.description} 
              type={activeEvent.type}
              showArrow={true}
              className="transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Details Inspector AI Chat Interface (Right Column Panel) */}
      <div className="w-full lg:w-96 shrink-0 border border-white/[0.08] bg-black/60 rounded-xl p-5 backdrop-blur-md shadow-2xl flex flex-col justify-between relative overflow-hidden min-h-[640px]">
        {/* Soft Background Radial Light */}
        <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-[#05F283]/[0.025] blur-[40px] pointer-events-none" />
        
        <div className="flex flex-col h-full justify-between">
          
          {/* Chat Header */}
          <div className="flex items-center gap-3 pb-4 border-b border-white/[0.06] shrink-0">
            <div className="h-9 w-9 rounded-lg bg-[#05F283]/10 border border-[#05F283]/20 flex items-center justify-center text-[#05F283]">
              <Sparkles className="h-5 w-5 animate-pulse" />
            </div>
            <div>
              <div className="text-[11px] text-[#05F283] font-semibold tracking-wider uppercase flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#05F283] animate-pulse" />
                VedRaq Copilot
              </div>
              <h5 className="text-[14px] font-semibold text-white tracking-wide">
                Neural Operations Chat
              </h5>
            </div>
          </div>

          {/* Interactive Chat Messages Area */}
          <div 
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto py-4 my-2 space-y-3.5 pr-1 max-h-[420px] scrollbar-thin scrollbar-thumb-white/[0.05]"
          >
            {chatMessages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex flex-col max-w-[85%] ${
                  msg.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"
                }`}
              >
                <div
                  className={`rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-[#05F283] text-black font-medium rounded-tr-none"
                      : "bg-white/[0.04] border border-white/[0.06] text-zinc-300 font-light rounded-tl-none"
                  }`}
                >
                  {msg.content}
                </div>
                <span className="text-[11px] text-zinc-500 font-light mt-1 px-1">
                  {msg.sender === "user" ? "You" : "VedRaq Brain"}
                </span>
              </div>
            ))}
          </div>

          {/* Interactive Chat Input Area */}
          <form 
            onSubmit={handleChatSubmit}
            className="border-t border-white/[0.06] pt-4 shrink-0 flex items-center gap-2"
          >
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder={`Query ${activeNode.title} state...`}
              className="flex-1 bg-white/[0.03] border border-white/[0.08] hover:border-white/15 focus:border-[#05F283]/45 rounded-xl px-4 py-2.5 text-[13px] text-white font-light placeholder-zinc-500 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="h-10 w-10 rounded-xl bg-[#05F283] hover:bg-[#05F283]/90 active:scale-95 flex items-center justify-center text-black transition-all shrink-0 cursor-pointer"
            >
              <Send className="h-4.5 w-4.5" />
            </button>
          </form>

        </div>

      </div>

    </div>
  );
}
