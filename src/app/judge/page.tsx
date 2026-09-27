"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Code, Zap, Target, Layout } from 'lucide-react';

export default function JudgePage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#0F172A] selection:bg-[#F97316] selection:text-white pb-32">
      <header className="px-8 py-6 max-w-7xl mx-auto flex items-center justify-between bg-white border-b border-[#0F172A]/10">
        <Link href="/" className="font-bold tracking-tight flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#F97316] flex items-center justify-center text-white text-xs">S</div>
          SEVASETU AI
        </Link>
        <div className="flex gap-4">
          <Link href="/architecture" className="text-sm font-bold text-[#0F172A]/70 hover:text-[#0F172A]">Architecture</Link>
          <Link href="/demo" className="text-sm font-bold text-[#0F172A]/70 hover:text-[#0F172A]">Demo Index</Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 pt-20">
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            AI-assisted public-service <br/>
            <span className="text-[#F97316]">workflow orchestration.</span>
          </h1>
          <p className="text-xl text-[#0F172A]/60 max-w-2xl mx-auto leading-relaxed">
            Citizens often know what they need, but not which service, document, process or department they need.
          </p>
        </div>

        {/* Transformation Flow */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-32 opacity-80">
          {['CONFUSION', 'UNDERSTANDING', 'PREPARATION', 'ACTION', 'TRACKING'].map((step, i) => (
            <div key={step} className="flex items-center gap-4 md:gap-8">
              <span className="font-bold tracking-widest text-sm text-[#0F172A]/80">{step}</span>
              {i < 4 && <ArrowRight className="w-5 h-5 text-[#0F172A]/30 rotate-90 md:rotate-0" />}
            </div>
          ))}
        </div>

        {/* Live Demo Section */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold mb-8 text-center">Live Demo Scenarios</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/app/ask" className="group glass p-8 rounded-3xl border border-[#0F172A]/10 hover:border-[#F97316] hover:shadow-xl transition-all relative overflow-hidden bg-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <h3 className="text-2xl font-bold mb-2">Student</h3>
              <p className="text-[#0F172A]/60 mb-6">Test the intent recognition and eligibility engine with a scholarship request.</p>
              <span className="text-[#F97316] font-bold flex items-center gap-2 group-hover:gap-3 transition-all">Launch Flow <ArrowRight className="w-4 h-4"/></span>
            </Link>
            
            <Link href="/app/documents" className="group glass p-8 rounded-3xl border border-[#0F172A]/10 hover:border-green-500 hover:shadow-xl transition-all relative overflow-hidden bg-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <h3 className="text-2xl font-bold mb-2">Farmer</h3>
              <p className="text-[#0F172A]/60 mb-6">Test the Document Intelligence (OCR) layer by analyzing crop damage relief proof.</p>
              <span className="text-green-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">Launch Flow <ArrowRight className="w-4 h-4"/></span>
            </Link>

            <Link href="/app/grievances/new" className="group glass p-8 rounded-3xl border border-[#0F172A]/10 hover:border-blue-500 hover:shadow-xl transition-all relative overflow-hidden bg-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <h3 className="text-2xl font-bold mb-2">Citizen</h3>
              <p className="text-[#0F172A]/60 mb-6">Test multimodal input mapping to an urban infrastructure grievance.</p>
              <span className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">Launch Flow <ArrowRight className="w-4 h-4"/></span>
            </Link>
          </div>
        </div>

        {/* Why it Matters */}
        <div>
          <h2 className="text-3xl font-bold mb-12 text-center">Why it Matters</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-[#0F172A]/10 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6"><Zap className="w-6 h-6"/></div>
              <h3 className="font-bold text-xl mb-3">Feasibility & Scalability</h3>
              <p className="text-[#0F172A]/70">Built on Next.js with stateless AI routing, ensuring extreme scale. Real backend integrations occur downstream via API, not directly attached to the chat UI.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-[#0F172A]/10 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-6"><Target className="w-6 h-6"/></div>
              <h3 className="font-bold text-xl mb-3">Desirability & Usability</h3>
              <p className="text-[#0F172A]/70">Removes the need for citizens to understand government taxonomy. The system handles classification, eligibility logic, and document validation transparently.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-[#0F172A]/10 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6"><Code className="w-6 h-6"/></div>
              <h3 className="font-bold text-xl mb-3">Novelty</h3>
              <p className="text-[#0F172A]/70">Instead of a generic 'Chatbot' that hallucinates policies, SevaSetu is an orchestrated workflow. The AI extracts structured intent, triggering deterministic UI states.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-[#0F172A]/10 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6"><Layout className="w-6 h-6"/></div>
              <h3 className="font-bold text-xl mb-3">Impact</h3>
              <p className="text-[#0F172A]/70">Significantly reduces application rejection rates due to missing documents or wrong forms, saving both citizen time and government processing load.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
