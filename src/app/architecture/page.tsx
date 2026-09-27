"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Database, Cpu, Globe, Server, Smartphone, ShieldCheck } from 'lucide-react';

export default function ArchitecturePage() {
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
    <div className="min-h-screen bg-[#FAFAF9] text-[#0F172A] pb-32">
      <header className="px-8 py-6 max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/judge" className="flex items-center gap-2 text-[#0F172A]/70 hover:text-[#0F172A] font-bold">
          <ArrowLeft className="w-5 h-5" />
          Back to Judge Portal
        </Link>
      </header>

      <main className="max-w-6xl mx-auto px-4 pt-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-[#0F172A]">System Architecture</h1>
          <p className="text-xl text-[#0F172A]/60 max-w-2xl mx-auto">
            A secure, scalable orchestration layer that connects citizens to government APIs using deterministic AI workflows.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-8 relative max-w-4xl mx-auto"
        >
          {/* Vertical Connection Line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-[#F97316] via-blue-500 to-green-500 -translate-x-1/2 -z-10 opacity-30"></div>

          {/* Layer 1: Presentation */}
          <motion.div variants={itemVariants} className="w-full bg-white border border-[#0F172A]/10 rounded-3xl p-8 shadow-sm flex flex-col md:flex-row items-center gap-8 z-10">
            <div className="w-20 h-20 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 shadow-inner">
              <Smartphone className="w-10 h-10" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
                1. Multi-modal Presentation Layer
                <span className="text-[10px] font-bold px-2 py-1 bg-green-100 text-green-700 rounded-full uppercase tracking-wider">MVP Ready</span>
              </h2>
              <p className="text-[#0F172A]/70">React / Next.js 14 App Router client supporting text, voice, and photo inputs. Designed for maximum accessibility across all devices with Framer Motion feedback.</p>
            </div>
          </motion.div>

          {/* Layer 2: Orchestration */}
          <motion.div variants={itemVariants} className="w-full bg-[#0F172A] border border-[#0F172A]/10 rounded-3xl p-8 shadow-xl flex flex-col md:flex-row items-center gap-8 z-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-3xl rounded-full"></div>
            <div className="w-20 h-20 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 shadow-inner border border-blue-500/30">
              <Cpu className="w-10 h-10" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                2. AI Orchestration Engine
                <span className="text-[10px] font-bold px-2 py-1 bg-blue-500 text-white rounded-full uppercase tracking-wider">Core IP</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <p className="text-sm font-bold text-blue-300">Intent Detection</p>
                  <p className="text-xs text-white/60">Maps natural language to service IDs.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <p className="text-sm font-bold text-blue-300">Eligibility Logic</p>
                  <p className="text-xs text-white/60">Extracts parameters, checks rules.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <p className="text-sm font-bold text-blue-300">Document OCR</p>
                  <p className="text-xs text-white/60">Extracts identity/income fields.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <p className="text-sm font-bold text-blue-300">Confidence Layer</p>
                  <p className="text-xs text-white/60">Flags low confidence for human review.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Layer 3: Integration */}
          <motion.div variants={itemVariants} className="w-full bg-white border border-[#0F172A]/10 rounded-3xl p-8 shadow-sm flex flex-col md:flex-row items-center gap-8 z-10">
            <div className="w-20 h-20 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 shadow-inner">
              <Globe className="w-10 h-10" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
                3. Service Integration API
                <span className="text-[10px] font-bold px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full uppercase tracking-wider">Simulated</span>
              </h2>
              <p className="text-[#0F172A]/70">Standardized API gateway that normalizes payloads before sending them to disparate departmental systems. (Mocked in Demo via Next.js API Routes).</p>
            </div>
          </motion.div>

          {/* Layer 4: Government Systems */}
          <motion.div variants={itemVariants} className="w-full bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-inner flex flex-col md:flex-row items-center gap-8 z-10">
            <div className="w-20 h-20 rounded-2xl bg-gray-200 text-gray-500 flex items-center justify-center shrink-0 shadow-inner">
              <Database className="w-10 h-10" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-3 text-gray-700">
                4. Departmental Systems
                <span className="text-[10px] font-bold px-2 py-1 bg-gray-200 text-gray-600 rounded-full uppercase tracking-wider">Future Integration</span>
              </h2>
              <p className="text-gray-500">Existing MPOnline, Samagra, and departmental databases. SevaSetu sits entirely outside this boundary, passing data securely and fetching statuses.</p>
            </div>
          </motion.div>

        </motion.div>
      </main>
    </div>
  );
}
