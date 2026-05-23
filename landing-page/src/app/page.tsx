"use client";

import React from "react";
import { 
  Layers, 
  Cpu, 
  Database,
  ArrowRight,
  Sparkles,
  Zap,
  Activity,
  Workflow
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CausalVisualizer } from "@/components/CausalVisualizer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-zinc-100 overflow-x-hidden font-sans selection:bg-[#05F283]/30 selection:text-white">
      {/* Subtle background grid pattern */}
      <div className="helium-bg-grid" />

      {/* Realistic 3D green glowing orb background elements */}
      <div className="helium-orb-container">
        <div className="helium-orb-glow" />
        <div className="helium-orb" />
      </div>

      {/* Floating Centered Navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-36 sm:px-8 sm:pt-44 md:pt-52 pb-24">
        
        {/* HERO SECTION */}
        <section className="flex flex-col lg:flex-row items-start justify-between gap-12">
          
          {/* Left Text / Info Content */}
          <div className="w-full lg:w-3/5 flex flex-col items-start text-left">
            
            {/* Testimonial Quote element flaking the headline */}
            <div className="flex flex-col items-start mb-6">
              <p className="text-zinc-500 italic font-light text-base tracking-wide sm:text-lg select-none">
                "Deployed in 7 days. No meetings. No blockers."
              </p>
              
              {/* Emma Valdez Testimonial capsule badge */}
              <div className="helium-testimonial-badge inline-flex items-center gap-2 rounded-full pl-1.5 pr-3.5 py-1 mt-2.5 select-none hover:border-white/10 transition-colors">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&h=80&q=80" 
                  alt="Emma Valdez" 
                  className="h-5.5 w-5.5 rounded-full object-cover border border-white/10"
                />
                <span className="text-[11px] font-medium leading-none tracking-wide text-zinc-200">
                  <span className="font-semibold text-white">Emma Valdez</span>
                  <span className="mx-1.5 text-zinc-600">•</span>
                  <span className="text-zinc-400">CX Lead, OrbitAI</span>
                </span>
              </div>
            </div>

            {/* Giant Title Header */}
            <h1 className="text-5xl font-medium tracking-tight text-white sm:text-7xl lg:text-8xl leading-[1.05] tracking-tight">
              Automate, <br />
              Optimize, Scale <br />
              With AI
            </h1>

            {/* Description Subtitle */}
            <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-zinc-400 sm:text-lg">
              Boost efficiency and eliminate repetitive tasks with AI-powered automation solutions tailored to your business needs.
            </p>

            {/* Action Call-to-actions */}
            <div className="mt-10 flex flex-row items-center gap-4">
              <Button variant="solid" size="lg" href="#book-a-call">
                Book a Call
              </Button>
              <Button variant="outline" size="lg" href="#services">
                Our Services
              </Button>
            </div>

          </div>

        </section>

        {/* HIGH-END INTERACTIVE FLOW SIMULATOR */}
        <section id="how-it-works" className="mt-40 border border-white/[0.06] bg-[#070708]/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden shadow-[0_24px_60px_-15px_rgba(0,0,0,0.8)]">
          {/* Overlay lighting reflection */}
          <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-[#05F283]/[0.015] blur-[80px] pointer-events-none" />
          
          <CausalVisualizer />
        </section>

        {/* DETAILED CORE SERVICES SECTION */}
        <section id="services" className="mt-40">
          <div className="text-center max-w-xl mx-auto">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#05F283]/20 bg-[#05F283]/[0.02] px-3.5 py-1.5 text-xs text-[#05F283] font-medium tracking-wide mb-4">
              <Zap className="h-3 w-3 fill-current" />
              INTELLIGENT INTEGRATIONS
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight leading-tight">
              The Powerhouse of Business Automation
            </h2>
            <p className="mt-3 text-sm text-zinc-400 font-light">
              Accelerate processes, remove errors, and connect tools with zero-delay automation pipelines.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card
              icon={<Layers className="h-5 w-5 text-[#05F283]" />}
              title="Webhook Orchestrator"
              subtitle="Kafka Queue Pipelines"
              description="Process and direct thousands of webhooks from Stripe, Shopify, or custom apps with bulletproof execution guarantees."
              className="animate-float"
            />
            <Card
              icon={<Cpu className="h-5 w-5 text-[#05F283]" />}
              title="AI Agent reasoning Layer"
              subtitle="Generative Automation"
              description="Deploy LLM-powered context awareness. Make decisions, analyze customer tickets, write email replies, and verify policy constraints dynamically."
              className="animate-float"
            />
            <Card
              icon={<Database className="h-5 w-5 text-[#05F283]" />}
              title="Real-Time Data Sync"
              subtitle="Postgres & Redis Integration"
              description="Synchronize system states across all databases under 5ms, ensuring on-call feeds, transaction tables, and user scopes are always uniform."
              className="animate-float"
            />
          </div>
        </section>

        {/* PRICING PLANS SECTION */}
        <section id="pricing" className="mt-40">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
              Plans Crafted for High-Velocity Teams
            </h2>
            <p className="mt-3 text-sm text-zinc-400 font-light">
              Transparent, usage-based tiers that scale seamlessly with your automation needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter Plan */}
            <div className="border border-white/[0.05] bg-[#070708]/50 rounded-xl p-8 backdrop-blur-sm relative flex flex-col justify-between hover:border-white/15 transition-all duration-300">
              <div>
                <h3 className="text-xl font-semibold text-white">Developer Tier</h3>
                <p className="mt-2 text-xs text-zinc-400 font-light">For startups and indie builders seeking raw power.</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white tracking-tight">$49</span>
                  <span className="text-zinc-500 text-xs">/ month</span>
                </div>
                <div className="h-px bg-white/[0.05] my-6" />
                <ul className="space-y-4 text-xs font-light text-zinc-300">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#05F283]" /> 10,000 tasks executed/month
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#05F283]" /> 5 active integrations
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#05F283]" /> Real-time dashboard analytics
                  </li>
                </ul>
              </div>
              <Button variant="outline" className="w-full mt-8" href="#demo">
                Start building
              </Button>
            </div>

            {/* Growth Pro Plan */}
            <div className="border border-[#05F283]/30 bg-[#05F283]/[0.01] rounded-xl p-8 backdrop-blur-sm relative flex flex-col justify-between shadow-[0_0_30px_rgba(5,242,131,0.03)] hover:border-[#05F283]/50 transition-all duration-300">
              <div className="absolute -top-3.5 right-6 inline-flex items-center gap-1 rounded-full bg-[#05F283] px-3 py-1 text-[10px] text-black font-semibold uppercase tracking-wide shadow-md">
                <Sparkles className="h-3 w-3 fill-current" />
                Most Popular
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Enterprise Core</h3>
                <p className="mt-2 text-xs text-zinc-400 font-light">Unlimited scope, dedicated agents, custom SLAs.</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white tracking-tight">$299</span>
                  <span className="text-zinc-500 text-xs">/ month</span>
                </div>
                <div className="h-px bg-white/[0.05] my-6" />
                <ul className="space-y-4 text-xs font-light text-zinc-300">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#05F283]" /> Unlimited tasks executed/month
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#05F283]" /> Custom AI Agent models
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#05F283]" /> Dedicated support & sub-5ms SLA
                  </li>
                </ul>
              </div>
              <Button variant="solid" className="w-full mt-8" href="#demo">
                Deploy now
              </Button>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.03] bg-black/80 py-12 text-center text-xs text-zinc-500 font-light relative z-10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 Helium Technologies Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Status</a>
          </div>
        </div>
      </footer>

      {/* Floating Made in Framer Badge */}
      <div className="fixed bottom-6 right-6 z-50 bg-black/85 border border-white/[0.08] hover:border-white/15 px-3 py-1.5 rounded-[6px] flex items-center gap-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.5)] select-none pointer-events-auto backdrop-blur-md transition-all duration-300 group cursor-pointer">
        {/* Stylized Framer SVG logo */}
        <svg className="h-2.5 w-2.5 fill-current text-white transition-transform group-hover:scale-105" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 2h14v6H12l7 7H5v-7h7L5 2z" />
        </svg>
        <span className="text-[10px] font-medium text-zinc-400 group-hover:text-white transition-colors">Made in Framer</span>
      </div>
    </div>
  );
}

// Small helper component to keep pricing layout type safe
function CheckCircle2({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

