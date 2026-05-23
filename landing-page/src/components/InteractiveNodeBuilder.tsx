"use client";

import React, { useState, useEffect, useRef } from "react";
import { AppNode, AppNodeChip } from "./AppNode";
import { Notify } from "./Notify";
import { Calendar, Bot, MessageSquare, Sparkles, Send, Network } from "lucide-react";

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
  const [selectedId, setSelectedId] = useState<string>("brain");
  const [activeEventIndex, setActiveEventIndex] = useState<number>(0);
  const [chatInput, setChatInput] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  // Exactly four nodes distributed similarly to the Gmail -> Agent/Slack branching reference
  const nodes: NodeData[] = [
    {
      id: "schedule",
      title: "Schedule Trigger",
      icon: <Calendar className="h-5 w-5 text-blue-400" />,
      iconBg: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
      appName: "VedRaq Scheduler Engine",
      about: "Chronological Dispatcher",
      description: "Triggers automated workflows on precise cron intervals, dates, or repetitive schedules with absolute zero drift.",
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
      id: "brain",
      title: "VedRaq Brain Core",
      icon: <Sparkles className="h-5 w-5 text-[#05F283]" />,
      iconBg: "bg-[#05F283]/10 text-[#05F283] border border-[#05F283]/20",
      appName: "VedRaq Core Brain",
      about: "Central Core Dispatcher",
      description: "The core orchestrator coordinating neural operations, verifying secure data payloads, and directing custom integrations dynamically.",
      details: [
        { label: "Engine Status", value: "Operational" },
        { label: "Active Matrix", value: "100% capacity" },
        { label: "Response Delay", value: "1.2ms" }
      ],
      rows: [
        { label: "Mode", value: "Autonomous" },
        { label: "Status", value: <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#05F283] animate-pulse" /> Active Matrix</span> }
      ]
    },
    {
      id: "agent",
      title: "Support Agent",
      icon: <Bot className="h-5 w-5 text-purple-400" />,
      iconBg: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
      appName: "Support Agent",
      about: "Autonomous Ticket Qualifier",
      description: "Leverages elite LLM models to autonomously inspect customer support queries, audit profiles, and draft response files.",
      details: [
        { label: "Model", value: "gpt-5.4 Core" },
        { label: "Prompt Context", value: "Resolve customer..." },
        { label: "Safety Evaluator", value: "Active" }
      ],
      rows: [
        { label: "Model", value: <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#05F283]" /> gpt-5.4</span> },
        { label: "System Prompt", value: "Resolve customer..." },
        { label: "Tools", value: (
          <div className="flex gap-1.5 shrink-0">
            <AppNodeChip label="Knowledge" />
            <AppNodeChip label="Notion" />
          </div>
        )}
      ]
    },
    {
      id: "slack",
      title: "Slack Outbound",
      icon: <MessageSquare className="h-5 w-5 text-amber-400" />,
      iconBg: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
      appName: "Slack Outbound Connect",
      about: "Instant Channel Alert Bus",
      description: "Delivers customized alerts and rich telemetry payload blocks to team feeds upon workflow trigger completion.",
      details: [
        { label: "Outbound Port", value: "HTTPS Push" },
        { label: "Target Workspace", value: "Verified Active" },
        { label: "Alert Interval", value: "< 2ms" }
      ],
      rows: [
        { label: "Channel", value: "#support" },
        { label: "Operation", value: "Send Message" }
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

  const activeNode = nodes.find(n => n.id === selectedId) || nodes[1];
  const activeEvent = eventLogs[activeEventIndex];

  // Map initial greetings for fresh conversations on click
  const getInitialMessage = (id: string) => {
    switch (id) {
      case "schedule":
        return "I am the Schedule Trigger sub-agent. I manage precise chronological pipeline orchestration. What scheduled tasks or execution intervals would you like to review?";
      case "brain":
        return "I am the VedRaq Brain Core central coordinator. I map all trigger inputs, verify secure data payloads, and direct endpoint targets dynamically. Ask me about global operations or performance statistics!";
      case "agent":
        return "I am the AI Support Agent subprocessor. I audit CRM leads, query knowledge resources, and draft auto-responses via gpt-5.4. What prompt instructions should we analyze today?";
      case "slack":
        return "I am the Slack Outbound connector. I deliver rich block alert payloads to your support feeds in under 2ms. Ask me about custom webhook blocks or telemetry delivery states!";
      default:
        return "Hello! I am ready to assist you. Ask me anything about this node's performance or attributes.";
    }
  };

  // Clear and load completely fresh conversation whenever next app node is clicked
  useEffect(() => {
    setChatMessages([
      {
        sender: "assistant",
        content: getInitialMessage(selectedId)
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

    // Simulate smart AI response based on fresh node context
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

        {/* 3-Column Node Graph Canvas with central BRAIN CORE (styled as normal AppNode) */}
        <div className="relative z-10 py-12 max-w-4xl mx-auto w-full flex items-center justify-between min-h-[420px] gap-4">
          
          {/* SVG Connection Strings flowing directly behind the nodes */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{ zIndex: 0 }}>
            {/* Connection: Schedule Trigger -> Brain Core */}
            <path
              d="M 220 210 L 320 210"
              fill="none"
              stroke="#05F283"
              strokeWidth="2"
              strokeOpacity="0.4"
            />
            <path
              d="M 220 210 L 320 210"
              fill="none"
              stroke="#05F283"
              strokeWidth="2"
              className="animate-pulse-flow-green"
            />

            {/* Split stem from Brain Core right-side to top-right (Support Agent) and bottom-right (Slack) */}
            {/* Main right-hand stem */}
            <path
              d="M 540 210 L 590 210"
              fill="none"
              stroke="#05F283"
              strokeWidth="2"
              strokeOpacity="0.4"
            />
            <path
              d="M 540 210 L 590 210"
              fill="none"
              stroke="#05F283"
              strokeWidth="2"
              className="animate-pulse-flow-green"
            />

            {/* Branch going UP to Support Agent */}
            <path
              d="M 590 210 Q 590 100, 680 100"
              fill="none"
              stroke="#05F283"
              strokeWidth="2"
              strokeOpacity="0.4"
            />
            <path
              d="M 590 210 Q 590 100, 680 100"
              fill="none"
              stroke="#05F283"
              strokeWidth="2"
              className="animate-pulse-flow-green"
            />

            {/* Branch going DOWN to Slack */}
            <path
              d="M 590 210 Q 590 320, 680 320"
              fill="none"
              stroke="#05F283"
              strokeWidth="2"
              strokeOpacity="0.4"
            />
            <path
              d="M 590 210 Q 590 320, 680 320"
              fill="none"
              stroke="#05F283"
              strokeWidth="2"
              className="animate-pulse-flow-green"
            />
          </svg>

          {/* Column 1: Triggers (Inputs) */}
          <div className="flex flex-col items-center justify-center z-10 w-[220px]">
            <span className="text-[12px] font-semibold text-zinc-500 uppercase tracking-widest mb-4">Trigger</span>
            <div 
              onClick={() => setSelectedId("schedule")}
              className="cursor-pointer transition-transform duration-300 active:scale-[0.98] w-full"
            >
              <AppNode 
                title={nodes[0].title}
                icon={nodes[0].icon}
                iconBg={nodes[0].iconBg}
                isActive={selectedId === "schedule"}
                rows={nodes[0].rows}
                className="w-full shadow-lg"
              />
            </div>
          </div>

          {/* Column 2: Central VEDRAQ BRAIN CORE (Styled exactly like a normal app node!) */}
          <div className="flex flex-col items-center justify-center z-10 w-[220px]">
            <span className="text-[12px] font-semibold text-zinc-500 uppercase tracking-widest mb-4">Central Hub</span>
            <div 
              onClick={() => setSelectedId("brain")}
              className="cursor-pointer transition-transform duration-300 active:scale-[0.98] w-full"
            >
              <AppNode 
                title={nodes[1].title}
                icon={nodes[1].icon}
                iconBg={nodes[1].iconBg}
                isActive={selectedId === "brain"}
                rows={nodes[1].rows}
                className="w-full shadow-lg border-[#05F283]"
              />
            </div>
          </div>

          {/* Column 3: Branching Endpoints (Support Agent / Slack Outbound) */}
          <div className="flex flex-col gap-8 items-center justify-between z-10 w-[220px] min-h-[360px]">
            {/* Top Branch: Support Agent */}
            <div className="w-full flex flex-col items-center">
              <span className="text-[12px] font-semibold text-zinc-500 uppercase tracking-widest mb-4">Processor</span>
              <div 
                onClick={() => setSelectedId("agent")}
                className="cursor-pointer transition-transform duration-300 active:scale-[0.98] w-full"
              >
                <AppNode 
                  title={nodes[2].title}
                  icon={nodes[2].icon}
                  iconBg={nodes[2].iconBg}
                  isActive={selectedId === "agent"}
                  rows={nodes[2].rows}
                  className="w-full shadow-lg"
                />
              </div>
            </div>

            {/* Bottom Branch: Slack */}
            <div className="w-full flex flex-col items-center">
              <span className="text-[12px] font-semibold text-zinc-500 uppercase tracking-widest mb-4">Action</span>
              <div 
                onClick={() => setSelectedId("slack")}
                className="cursor-pointer transition-transform duration-300 active:scale-[0.98] w-full"
              >
                <AppNode 
                  title={nodes[3].title}
                  icon={nodes[3].icon}
                  iconBg={nodes[3].iconBg}
                  isActive={selectedId === "slack"}
                  rows={nodes[3].rows}
                  className="w-full shadow-lg"
                />
              </div>
            </div>
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

      {/* Details Inspector AI Chat Interface (Right Column Panel with full flex coverage) */}
      <div className="w-full lg:w-96 shrink-0 border border-white/[0.08] bg-black/60 rounded-xl p-5 backdrop-blur-md shadow-2xl flex flex-col justify-between relative overflow-hidden min-h-[640px]">
        {/* Soft Background Radial Light */}
        <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-[#05F283]/[0.025] blur-[40px] pointer-events-none" />
        
        <div className="flex flex-col h-full flex-1">
          
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

          {/* Interactive Chat Messages Area - Stretching to fully cover vertical height */}
          <div 
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto py-4 my-2 space-y-3.5 pr-1 min-h-0 scrollbar-thin scrollbar-thumb-white/[0.05] flex flex-col"
          >
            <div className="space-y-3.5 flex-1">
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
          </div>

          {/* Interactive Chat Input Area - Securely Pinned to Bottom */}
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
