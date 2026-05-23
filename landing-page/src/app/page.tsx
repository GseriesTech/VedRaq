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
import { InteractiveNodeBuilder } from "@/components/InteractiveNodeBuilder";

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
            <h1 className="text-4xl font-medium tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.1] max-w-4xl">
              VedRaq—is brain <br className="hidden md:inline" />
              for your company, <br />
              <span className="text-[#05F283] font-semibold drop-shadow-[0_0_45px_rgba(5,242,131,0.22)]">
                let your company live <br className="hidden sm:inline" />
                and see itself
              </span>
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

        {/* SOFTWARE INTEGRATIONS INFINITE MARQUEE */}
        <section className="mt-28 w-full relative overflow-hidden py-6 select-none border-y border-white/[0.02]">
          <p className="text-zinc-500 text-[10px] font-medium tracking-[0.2em] uppercase mb-8 text-left">
            Trusted by 150+ startups & teams • Stack Integration Ecosystem
          </p>
          <div className="marquee-gradient-overlay" />
          <div className="animate-marquee flex gap-16 items-center opacity-45 hover:opacity-85 transition-all duration-500">
            {/* Set 1 */}
            <div className="flex items-center gap-16 shrink-0">
              <div className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors duration-300 font-medium">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current text-white">
                  <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.824a2.528 2.528 0 0 1-2.52-2.52v-5.042zM8.824 5.043a2.528 2.528 0 0 1-2.52-2.52 2.528 2.528 0 0 1 2.52-2.522 2.528 2.528 0 0 1 2.522 2.522v2.52h-2.522zm0 1.261a2.528 2.528 0 0 1 2.522 2.52v5.043a2.528 2.528 0 0 1-2.522 2.52H3.782a2.528 2.528 0 0 1-2.52-2.52V8.824a2.528 2.528 0 0 1 2.52-2.52h5.042zm10.134 3.761a2.528 2.528 0 0 1 2.522-2.52 2.528 2.528 0 0 1 2.52 2.52v2.52h-2.52v-2.52zm-1.262 0a2.528 2.528 0 0 1-2.52 2.52H10.13a2.528 2.528 0 0 1-2.522-2.52V3.782a2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52 2.52v5.042zm-3.761 10.134a2.528 2.528 0 0 1-2.522 2.52 2.528 2.528 0 0 1-2.52-2.522 2.528 2.528 0 0 1 2.52-2.52h2.522v2.522zm0-1.262a2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52-2.52v5.043a2.528 2.528 0 0 1-2.52-2.52h-5.043a2.528 2.528 0 0 1-2.522-2.52v-5.043z"/>
                </svg>
                <span className="text-sm font-medium tracking-tight">Slack</span>
              </div>

              <div className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors duration-300 font-medium">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current text-white">
                  <path d="M12.784 19.344a23.957 23.957 0 0 1-6.72-4.148 24.168 24.168 0 0 1-5.18-6.19c-.38-.646.068-1.46.822-1.46h5.082c.44 0 .848.243 1.054.636a15.86 15.86 0 0 0 3.328 4.416c.306.28.784.062.784-.356V1.025C11.974.46 12.43 0 12.997 0h3.585c.565 0 1.023.46 1.023 1.025v13.578c0 .418.478.636.784.356a15.86 15.86 0 0 0 3.328-4.416c.206-.393.614-.636 1.054-.636h5.082c.754 0 1.202.814.822 1.46a24.168 24.168 0 0 1-5.18 6.19 23.957 23.957 0 0 1-6.72 4.148c-.694.275-1.46.275-2.154 0z" />
                </svg>
                <span className="text-sm font-medium tracking-tight">Jira</span>
              </div>

              <div className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors duration-300 font-medium">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current text-white">
                  <path d="M18.8 9.5c-.1-1.6-1.5-2.9-3.2-2.9-.6 0-1.1.2-1.6.5C13.2 5.5 11.5 4.5 9.5 4.5c-2.8 0-5.1 2.1-5.4 4.8C1.8 9.9 0 12 0 14.5c0 2.8 2.2 5 5 5h13.5c3 0 5.5-2.5 5.5-5.5s-2.3-4.5-5.2-4.5z" />
                </svg>
                <span className="text-sm font-medium tracking-tight">Salesforce</span>
              </div>

              <div className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors duration-300 font-medium">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current text-white">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span className="text-sm font-medium tracking-tight">GitHub</span>
              </div>

              <div className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors duration-300 font-medium">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current text-white">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 1-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.955 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
                </svg>
                <span className="text-sm font-medium tracking-tight">Discord</span>
              </div>

              <div className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors duration-300 font-medium">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current text-white">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.446L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.116-2.887-6.98-1.864-1.865-4.343-2.89-6.984-2.892-5.445 0-9.868 4.42-9.872 9.865-.001 1.639.429 3.237 1.248 4.636L1.875 22.13l5.045-1.323l.115-.067c.002-.001.002-.001.002-.001zm11.516-7.857c-.29-.146-1.72-.849-1.986-.945-.266-.096-.46-.144-.653.146-.193.291-.748.946-.917 1.138-.17.193-.339.217-.63.072c-.29-.145-1.227-.453-2.337-1.443-.864-.771-1.447-1.724-1.616-2.015-.17-.29-.018-.447.127-.591.13-.13.29-.339.435-.509.145-.17.193-.291.29-.485.097-.194.049-.364-.025-.509c-.072-.146-.653-1.577-.894-2.16c-.235-.567-.472-.49-.652-.499c-.168-.008-.362-.01-.555-.01c-.194 0-.509.073-.775.364c-.266.291-1.016.994-1.016 2.424c0 1.43 1.041 2.812 1.186 3.006c.145.194 2.05 3.13 4.962 4.385c.693.299 1.233.478 1.654.612c.696.222 1.329.19 1.83.115c.557-.083 1.72-.703 1.962-1.382c.242-.678.242-1.261.17-1.382c-.073-.12-.266-.194-.556-.34z" />
                </svg>
                <span className="text-sm font-medium tracking-tight">WhatsApp</span>
              </div>
            </div>

            {/* Set 2 (Identical duplicate for seamless transition loops) */}
            <div className="flex items-center gap-16 shrink-0">
              <div className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors duration-300 font-medium">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current text-white">
                  <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.824a2.528 2.528 0 0 1-2.52-2.52v-5.042zM8.824 5.043a2.528 2.528 0 0 1-2.52-2.52 2.528 2.528 0 0 1 2.52-2.522 2.528 2.528 0 0 1 2.522 2.522v2.52h-2.522zm0 1.261a2.528 2.528 0 0 1 2.522 2.52v5.043a2.528 2.528 0 0 1-2.522 2.52H3.782a2.528 2.528 0 0 1-2.52-2.52V8.824a2.528 2.528 0 0 1 2.52-2.52h5.042zm10.134 3.761a2.528 2.528 0 0 1 2.522-2.52 2.528 2.528 0 0 1 2.52 2.52v2.52h-2.52v-2.52zm-1.262 0a2.528 2.528 0 0 1-2.52 2.52H10.13a2.528 2.528 0 0 1-2.522-2.52V3.782a2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52 2.52v5.042zm-3.761 10.134a2.528 2.528 0 0 1-2.522 2.52 2.528 2.528 0 0 1-2.52-2.522 2.528 2.528 0 0 1 2.52-2.52h2.522v2.522zm0-1.262a2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52-2.52v5.043a2.528 2.528 0 0 1-2.52-2.52h-5.043a2.528 2.528 0 0 1-2.522-2.52v-5.043z"/>
                </svg>
                <span className="text-sm font-medium tracking-tight">Slack</span>
              </div>

              <div className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors duration-300 font-medium">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current text-white">
                  <path d="M12.784 19.344a23.957 23.957 0 0 1-6.72-4.148 24.168 24.168 0 0 1-5.18-6.19c-.38-.646.068-1.46.822-1.46h5.082c.44 0 .848.243 1.054.636a15.86 15.86 0 0 0 3.328 4.416c.306.28.784.062.784-.356V1.025C11.974.46 12.43 0 12.997 0h3.585c.565 0 1.023.46 1.023 1.025v13.578c0 .418.478.636.784.356a15.86 15.86 0 0 0 3.328-4.416c.206-.393.614-.636 1.054-.636h5.082c.754 0 1.202.814.822 1.46a24.168 24.168 0 0 1-5.18 6.19 23.957 23.957 0 0 1-6.72 4.148c-.694.275-1.46.275-2.154 0z" />
                </svg>
                <span className="text-sm font-medium tracking-tight">Jira</span>
              </div>

              <div className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors duration-300 font-medium">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current text-white">
                  <path d="M18.8 9.5c-.1-1.6-1.5-2.9-3.2-2.9-.6 0-1.1.2-1.6.5C13.2 5.5 11.5 4.5 9.5 4.5c-2.8 0-5.1 2.1-5.4 4.8C1.8 9.9 0 12 0 14.5c0 2.8 2.2 5 5 5h13.5c3 0 5.5-2.5 5.5-5.5s-2.3-4.5-5.2-4.5z" />
                </svg>
                <span className="text-sm font-medium tracking-tight">Salesforce</span>
              </div>

              <div className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors duration-300 font-medium">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current text-white">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span className="text-sm font-medium tracking-tight">GitHub</span>
              </div>

              <div className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors duration-300 font-medium">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current text-white">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 1-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.955 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
                </svg>
                <span className="text-sm font-medium tracking-tight">Discord</span>
              </div>

              <div className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors duration-300 font-medium">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current text-white">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.446L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.116-2.887-6.98-1.864-1.865-4.343-2.89-6.984-2.892-5.445 0-9.868 4.42-9.872 9.865-.001 1.639.429 3.237 1.248 4.636L1.875 22.13l5.045-1.323l.115-.067c.002-.001.002-.001.002-.001zm11.516-7.857c-.29-.146-1.72-.849-1.986-.945-.266-.096-.46-.144-.653.146-.193.291-.748.946-.917 1.138-.17.193-.339.217-.63.072c-.29-.145-1.227-.453-2.337-1.443-.864-.771-1.447-1.724-1.616-2.015-.17-.29-.018-.447.127-.591.13-.13.29-.339.435-.509.145-.17.193-.291.29-.485.097-.194.049-.364-.025-.509c-.072-.146-.653-1.577-.894-2.16c-.235-.567-.472-.49-.652-.499c-.168-.008-.362-.01-.555-.01c-.194 0-.509.073-.775.364c-.266.291-1.016.994-1.016 2.424c0 1.43 1.041 2.812 1.186 3.006c.145.194 2.05 3.13 4.962 4.385c.693.299 1.233.478 1.654.612c.696.222 1.329.19 1.83.115c.557-.083 1.72-.703 1.962-1.382c.242-.678.242-1.261.17-1.382c-.073-.12-.266-.194-.556-.34z" />
                </svg>
                <span className="text-sm font-medium tracking-tight">WhatsApp</span>
              </div>
            </div>

          </div>
        </section>

        {/* REACT FLOW WORKSPACE CANVAS */}
        <section id="how-it-works" className="mt-40">
          <InteractiveNodeBuilder />
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

