"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';

export default function JudgePage() {
  
  const [resetDone, setResetDone] = useState(false);

  const handleReset = () => {
    
    // Simulate state clear
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        localStorage.clear();
      }
      
      setResetDone(true);
      setTimeout(() => setResetDone(false), 3000);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#0F172A] selection:bg-[#F97316] selection:text-white pb-32 font-sans">
      <header className="px-8 py-6 max-w-7xl mx-auto flex items-center justify-between bg-white border-b border-[#0F172A]/10 sticky top-0 z-50 shadow-sm">
        <Link href="/" className="font-bold tracking-tight flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#F97316] flex items-center justify-center text-white text-xs">S</div>
          SEVASETU AI
        </Link>
        <div className="flex gap-6 items-center">
          <Link href="/architecture" className="text-sm font-bold text-[#0F172A]/70 hover:text-[#0F172A] transition-colors">Architecture</Link>
          <button 
            onClick={handleReset}
            className="flex items-center gap-2 text-sm font-bold text-red-600 bg-red-50 px-3 py-1.5 rounded-lg hover:bg-red-100 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Reset Demo
          </button>
        </div>
      </header>

      <AnimatePresence>
        {resetDone && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-green-800 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-bold">DEMO RESET: Environment ready for new scenario.</span>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-6xl mx-auto px-4 pt-16">
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            AI-assisted public-service <br/>
            <span className="text-[#F97316]">workflow orchestration.</span>
          </h1>
          <p className="text-2xl text-[#0F172A]/60 max-w-3xl mx-auto leading-relaxed font-medium mb-12">
            From citizen intent to guided action.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 opacity-90">
            {['NEED', 'UNDERSTAND', 'PREPARE', 'APPLY', 'TRACK'].map((step, i) => (
              <div key={step} className="flex items-center gap-4 md:gap-8">
                <span className="font-bold tracking-widest text-sm text-[#0F172A]/80 bg-white px-4 py-2 rounded-full border border-[#0F172A]/10 shadow-sm">{step}</span>
                {i < 4 && <ArrowRight className="w-5 h-5 text-[#F97316] animate-pulse" />}
              </div>
            ))}
          </div>
        </div>

        {/* 3 Primary Demo Buttons */}
        <div className="mb-32">
          <h2 className="text-xs font-bold text-[#0F172A]/40 tracking-widest uppercase text-center mb-8">Select Presentation Scenario</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/app/ask?scenario=scholarship" className="group flex flex-col justify-between bg-white p-8 rounded-3xl border border-[#0F172A]/10 hover:border-[#F97316] hover:shadow-xl transition-all relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <div>
                <p className="text-xs font-bold text-orange-600 tracking-widest mb-4">01</p>
                <h3 className="text-3xl font-extrabold mb-1">STUDENT</h3>
                <p className="font-bold text-[#0F172A]/60 mb-6">Scholarship Assistance</p>
                <p className="text-lg italic text-[#0F172A]/80 mb-8">&quot;I need help applying for a scholarship.&quot;</p>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <span className="bg-[#F97316] text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 group-hover:bg-[#ea580c] transition-colors">START DEMO <ArrowRight className="w-4 h-4"/></span>
                </div>
                <p className="text-xs font-bold text-[#0F172A]/40 tracking-wider mt-4">LIVE DEMO &middot; ~2 MIN</p>
              </div>
            </Link>

            <Link href="/app/ask?scenario=crop" className="group flex flex-col justify-between bg-white p-8 rounded-3xl border border-[#0F172A]/10 hover:border-green-500 hover:shadow-xl transition-all relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <div>
                <p className="text-xs font-bold text-green-600 tracking-widest mb-4">02</p>
                <h3 className="text-3xl font-extrabold mb-1">FARMER</h3>
                <p className="font-bold text-[#0F172A]/60 mb-6">Crop Damage Assistance</p>
                <p className="text-lg italic text-[#0F172A]/80 mb-8">&quot;My crop was damaged by heavy rain.&quot;</p>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <span className="bg-[#15803D] text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 group-hover:bg-green-800 transition-colors">START DEMO <ArrowRight className="w-4 h-4"/></span>
                </div>
                <p className="text-xs font-bold text-[#0F172A]/40 tracking-wider mt-4">LIVE DEMO &middot; ~2 MIN</p>
              </div>
            </Link>

            <Link href="/app/ask?scenario=grievance" className="group flex flex-col justify-between bg-white p-8 rounded-3xl border border-[#0F172A]/10 hover:border-blue-500 hover:shadow-xl transition-all relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <div>
                <p className="text-xs font-bold text-blue-600 tracking-widest mb-4">03</p>
                <h3 className="text-3xl font-extrabold mb-1">CITIZEN</h3>
                <p className="font-bold text-[#0F172A]/60 mb-6">Public Grievance</p>
                <p className="text-lg italic text-[#0F172A]/80 mb-8">&quot;There is a pothole on my road.&quot;</p>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <span className="bg-blue-600 text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 group-hover:bg-blue-700 transition-colors">START DEMO <ArrowRight className="w-4 h-4"/></span>
                </div>
                <p className="text-xs font-bold text-[#0F172A]/40 tracking-wider mt-4">LIVE DEMO &middot; ~2 MIN</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Not Another Chatbot */}
        <div className="mb-32 bg-[#0F172A] text-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">NOT ANOTHER CHATBOT</h2>
          <p className="text-2xl text-white/70 mb-16 max-w-3xl mx-auto">SevaSetu does not stop at answering a citizen.</p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-bold tracking-widest text-white/50">
            <span>QUESTION</span><ArrowRight className="w-4 h-4"/>
            <span>UNDERSTANDING</span><ArrowRight className="w-4 h-4"/>
            <span>SERVICE</span><ArrowRight className="w-4 h-4"/>
            <span>ELIGIBILITY</span><ArrowRight className="w-4 h-4"/>
            <span>DOCUMENTS</span><ArrowRight className="w-4 h-4"/>
            <span>APPLICATION</span><ArrowRight className="w-4 h-4"/>
            <span className="text-[#F97316]">TRACKING</span>
          </div>

          <p className="text-2xl font-bold text-white mt-16">AI becomes the guide through the entire service journey.</p>
        </div>

        {/* Why this matters */}
        <div className="mb-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-bold tracking-widest text-[#0F172A]/40 mb-4">CURRENT EXPERIENCE</p>
            <div className="bg-red-50 rounded-3xl p-10 border border-red-100">
              <p className="text-xl font-medium text-red-900 mb-6 italic">&quot;I know what I need, but I don&apos;t know:&quot;</p>
              <ul className="space-y-4 text-lg font-bold text-red-800/70">
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-red-400"></span> Which service?</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-red-400"></span> Which department?</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-red-400"></span> Which documents?</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-red-400"></span> Am I eligible?</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-red-400"></span> What happens next?</li>
              </ul>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold tracking-widest text-[#0F172A]/40 mb-4">SEVASETU</p>
            <div className="bg-[#FAFAF9] rounded-3xl p-10 border border-[#0F172A]/10 shadow-xl relative">
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10 border border-[#0F172A]/5">
                <ArrowRight className="w-6 h-6 text-[#F97316]" />
              </div>
              <h3 className="text-4xl font-extrabold text-[#0F172A] mb-4">&quot;Tell us what you need.&quot;</h3>
              <p className="text-xl text-[#0F172A]/70 leading-relaxed font-medium">The product converts uncertainty into a guided, deterministic workflow.</p>
              <div className="mt-8 pt-8 border-t border-[#0F172A]/10">
                <h4 className="font-bold text-[#0F172A] mb-4 text-lg">Reduce uncertainty before it becomes a service-delivery problem.</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Implemented vs Future */}
        <div className="mb-32 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-[#0F172A]/10 shadow-sm">
            <h3 className="text-lg font-bold tracking-widest uppercase mb-6 flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-green-500"></span> Implemented in MVP</h3>
            <ul className="space-y-3 font-medium text-[#0F172A]/70">
              <li>✓ Multimodal interaction UI</li>
              <li>✓ AI intent engine</li>
              <li>✓ Eligibility workflow</li>
              <li>✓ OCR/document simulation</li>
              <li>✓ Application workflow</li>
              <li>✓ Application tracking</li>
              <li>✓ Grievance workflow</li>
              <li>✓ Authority dashboard</li>
              <li>✓ Demo architecture</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-[#0F172A]/10 shadow-sm">
            <h3 className="text-lg font-bold tracking-widest uppercase mb-6 flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-orange-500"></span> Simulated for Hackathon</h3>
            <ul className="space-y-3 font-medium text-[#0F172A]/70">
              <li>• OCR processing</li>
              <li>• AI classification</li>
              <li>• Government service responses</li>
              <li>• Department routing</li>
              <li>• Application status</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-[#0F172A]/10 shadow-sm">
            <h3 className="text-lg font-bold tracking-widest uppercase mb-6 flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-500"></span> Future Integration</h3>
            <ul className="space-y-3 font-medium text-[#0F172A]/70">
              <li>• Verified government APIs</li>
              <li>• Official service databases</li>
              <li>• State identity integrations</li>
              <li>• SMS/WhatsApp notifications</li>
              <li>• Production multilingual models</li>
            </ul>
          </div>
        </div>

        {/* Hackathon Criteria */}
        <div className="mb-32">
          <h2 className="text-3xl font-extrabold mb-12 text-center">Hackathon Evaluation Criteria</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "FEASIBILITY", desc: "Existing AI/OCR/API technologies" },
              { label: "VIABILITY", desc: "Reusable service orchestration" },
              { label: "DESIRABILITY", desc: "Citizen-first interaction" },
              { label: "SCALABILITY", desc: "Department/service adapters" },
              { label: "NOVELTY", desc: "Intent → workflow conversion" },
              { label: "IMPACT", desc: "Less uncertainty, clearer next steps" },
              { label: "COMPLETENESS", desc: "End-to-end citizen + authority flow" },
              { label: "COMPLEXITY", desc: "AI + OCR + rules + workflow + tracking" },
              { label: "USABILITY", desc: "Voice + visual + simple language" },
              { label: "FIDELITY", desc: "Fully interactive hackathon prototype" },
            ].map(crit => (
              <div key={crit.label} className="bg-white p-6 rounded-2xl border border-[#0F172A]/5">
                <p className="text-xs font-bold tracking-widest text-[#F97316] mb-2">{crit.label}</p>
                <p className="text-sm font-medium text-[#0F172A]">{crit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What the Judge Will See */}
        <div className="mb-32 bg-blue-50 rounded-3xl p-10 border border-blue-100 flex flex-col md:flex-row items-start gap-12">
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">What This Demo Proves</h2>
            <p className="text-blue-800/70 font-medium">This is not a mock UI. The application actively tracks state and orchestrates the journey locally.</p>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 gap-4">
            <span className="flex items-center gap-2 font-bold text-blue-900"><CheckCircle2 className="w-5 h-5 text-blue-600"/> Multimodal citizen input</span>
            <span className="flex items-center gap-2 font-bold text-blue-900"><CheckCircle2 className="w-5 h-5 text-blue-600"/> Application workflow</span>
            <span className="flex items-center gap-2 font-bold text-blue-900"><CheckCircle2 className="w-5 h-5 text-blue-600"/> AI intent understanding</span>
            <span className="flex items-center gap-2 font-bold text-blue-900"><CheckCircle2 className="w-5 h-5 text-blue-600"/> Status tracking</span>
            <span className="flex items-center gap-2 font-bold text-blue-900"><CheckCircle2 className="w-5 h-5 text-blue-600"/> Service discovery</span>
            <span className="flex items-center gap-2 font-bold text-blue-900"><CheckCircle2 className="w-5 h-5 text-blue-600"/> Grievance processing</span>
            <span className="flex items-center gap-2 font-bold text-blue-900"><CheckCircle2 className="w-5 h-5 text-blue-600"/> Eligibility guidance</span>
            <span className="flex items-center gap-2 font-bold text-blue-900"><CheckCircle2 className="w-5 h-5 text-blue-600"/> Authority-side workflow</span>
            <span className="flex items-center gap-2 font-bold text-blue-900"><CheckCircle2 className="w-5 h-5 text-blue-600"/> Document intelligence</span>
          </div>
        </div>

      </main>
    </div>
  );
}
