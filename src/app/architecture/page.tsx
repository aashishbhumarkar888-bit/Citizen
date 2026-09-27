"use client";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Database, Cpu, Globe, Smartphone, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function ArchitecturePage() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#0F172A] pb-32 font-sans selection:bg-[#F97316] selection:text-white">
      <header className="px-8 py-6 max-w-7xl mx-auto flex items-center justify-between sticky top-0 z-50 bg-[#FAFAF9]/90 backdrop-blur-md">
        <Link href="/judge" className="flex items-center gap-2 text-[#0F172A]/70 hover:text-[#0F172A] font-bold">
          <ArrowLeft className="w-5 h-5" />
          Back to Judge Portal
        </Link>
      </header>

      <main className="max-w-6xl mx-auto px-4 pt-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-[#0F172A]">HOW SEVASETU WORKS</h1>
          <p className="text-xl text-[#0F172A]/60 max-w-2xl mx-auto font-medium">
            A secure, scalable orchestration layer that connects citizens to government APIs using deterministic AI workflows.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 flex flex-col items-center gap-8 relative"
          >
            {/* Vertical Connection Line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-[#F97316] via-blue-500 to-gray-300 -translate-x-1/2 -z-10 opacity-30"></div>

            {/* Layer 1: Presentation */}
            <motion.div 
              variants={itemVariants} 
              onMouseEnter={() => setActiveNode(1)}
              onMouseLeave={() => setActiveNode(null)}
              className={`w-full bg-white border ${activeNode === 1 ? 'border-[#F97316] shadow-md scale-[1.02]' : 'border-[#0F172A]/10 shadow-sm'} rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 z-10 transition-all cursor-crosshair`}
            >
              <div className="w-20 h-20 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 shadow-inner">
                <Smartphone className="w-10 h-10" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2 flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
                  1. CITIZEN (VOICE/TEXT/IMAGE)
                  <span className="text-[10px] font-bold px-3 py-1 bg-green-100 text-green-700 rounded-full uppercase tracking-widest">IMPLEMENTED DEMO</span>
                </h2>
                <AnimatePresence>
                  {activeNode === 1 && (
                    <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-[#0F172A]/70 font-medium">
                      React/Next.js 14 App Router client supporting multimodal inputs. Designed for maximum accessibility across all devices.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Layer 2: Orchestration */}
            <motion.div 
              variants={itemVariants} 
              onMouseEnter={() => setActiveNode(2)}
              onMouseLeave={() => setActiveNode(null)}
              className={`w-full bg-[#0F172A] border ${activeNode === 2 ? 'border-blue-400 shadow-xl scale-[1.02]' : 'border-[#0F172A]/10 shadow-lg'} rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 z-10 text-white relative overflow-hidden transition-all cursor-crosshair`}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-3xl rounded-full"></div>
              <div className="w-20 h-20 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 shadow-inner border border-blue-500/30 relative z-10">
                <Cpu className="w-10 h-10" />
              </div>
              <div className="flex-1 relative z-10 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-4 flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
                  2. AI ORCHESTRATOR
                  <span className="text-[10px] font-bold px-3 py-1 bg-blue-500 text-white rounded-full uppercase tracking-widest">DEMO SIMULATION</span>
                </h2>
                
                <AnimatePresence>
                  {activeNode === 2 ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-white/80 font-medium text-lg mb-4">
                      Converts unstructured citizen requests into structured service intent.
                    </motion.div>
                  ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      <div className="bg-white/5 border border-white/10 rounded-xl p-2 text-center text-xs font-bold text-blue-300">Intent Detection</div>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-2 text-center text-xs font-bold text-blue-300">RAG Retrieval</div>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-2 text-center text-xs font-bold text-blue-300">OCR</div>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-2 text-center text-xs font-bold text-blue-300">Eligibility Engine</div>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-2 text-center text-xs font-bold text-blue-300">Document Intelligence</div>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-2 text-center text-xs font-bold text-blue-300">Grievance Classification</div>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Layer 3: Integration */}
            <motion.div 
              variants={itemVariants} 
              onMouseEnter={() => setActiveNode(3)}
              onMouseLeave={() => setActiveNode(null)}
              className={`w-full bg-white border ${activeNode === 3 ? 'border-purple-400 shadow-md scale-[1.02]' : 'border-[#0F172A]/10 shadow-sm'} rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 z-10 transition-all cursor-crosshair`}
            >
              <div className="w-20 h-20 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 shadow-inner">
                <Globe className="w-10 h-10" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2 flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
                  3. SERVICE INTEGRATION LAYER
                  <span className="text-[10px] font-bold px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full uppercase tracking-widest">DEMO SIMULATION</span>
                </h2>
                <AnimatePresence>
                  {activeNode === 3 && (
                    <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-[#0F172A]/70 font-medium">
                      Standardized API gateway that normalizes payloads before sending them to disparate departmental systems.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Layer 4: Government Systems */}
            <motion.div 
              variants={itemVariants} 
              onMouseEnter={() => setActiveNode(4)}
              onMouseLeave={() => setActiveNode(null)}
              className={`w-full bg-gray-50 border ${activeNode === 4 ? 'border-gray-400 shadow-md scale-[1.02]' : 'border-gray-200 shadow-inner'} rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 z-10 transition-all cursor-crosshair`}
            >
              <div className="w-20 h-20 rounded-2xl bg-gray-200 text-gray-500 flex items-center justify-center shrink-0 shadow-inner">
                <Database className="w-10 h-10" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2 flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start text-gray-700">
                  4. DEPARTMENT SYSTEMS
                  <span className="text-[10px] font-bold px-3 py-1 bg-gray-200 text-gray-600 rounded-full uppercase tracking-widest">FUTURE INTEGRATION</span>
                </h2>
                <AnimatePresence>
                  {activeNode === 4 && (
                    <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-gray-500 font-medium">
                      Existing MPOnline, Samagra, and departmental databases. SevaSetu sits entirely outside this boundary, passing data securely and fetching statuses.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

          </motion.div>
          
          <div className="lg:w-1/3 mt-12 lg:mt-0">
            <div className="bg-white rounded-3xl p-8 border border-[#0F172A]/10 shadow-xl sticky top-32">
               <h3 className="text-xl font-extrabold mb-6 border-b border-[#0F172A]/10 pb-4">DESIGNED FOR:</h3>
               <ul className="space-y-4">
                 {[
                   "Multimodal AI", 
                   "RAG / knowledge retrieval", 
                   "OCR", 
                   "Rule-based eligibility", 
                   "API adapters", 
                   "Secure document processing", 
                   "Human escalation", 
                   "Stateless service architecture"
                 ].map(item => (
                   <li key={item} className="flex items-center gap-3 font-bold text-[#0F172A]/80">
                     <ChevronRight className="w-4 h-4 text-[#F97316]" />
                     {item}
                   </li>
                 ))}
               </ul>
               <div className="mt-8 bg-blue-50 text-blue-800 p-4 rounded-xl border border-blue-100 font-bold text-sm text-center">
                 Architecture-ready for production scaling.
               </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
