"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mic, Send, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { processCitizenIntent } from '@/lib/ai-engine';
import SevaSetuFlow from '@/components/SevaSetuFlow';

export default function AskPage() {
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const router = useRouter();

  const handleProcess = async () => {
    if (!input.trim()) return;
    setIsProcessing(true);
    
    // Simulate network delay
    await new Promise(r => setTimeout(r, 1500));
    
    const analysis = processCitizenIntent(input);
    setResult(analysis);
    setIsProcessing(false);
  };

  const handleNext = () => {
    if (result?.nextStep === 'eligibility') {
      router.push('/app/services/scholarship/eligibility');
    } else if (result?.nextStep === 'documents') {
      router.push('/app/documents?scenario=crop');
    } else if (result?.nextStep === 'grievance_draft') {
      router.push('/app/grievances/new');
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-12">
        <SevaSetuFlow activeStep={result ? 2 : 1} />
      </div>

      <AnimatePresence mode="wait">
        {!result && !isProcessing && (
          <motion.div key="input" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <h1 className="text-3xl font-bold text-[#0F172A] text-center mb-8">What do you need?</h1>
            
            <div className="bg-white rounded-3xl p-2 shadow-lg border border-[#0F172A]/10 flex items-center mb-8 relative">
              <button className="w-12 h-12 rounded-full bg-orange-50 text-[#F97316] flex items-center justify-center hover:bg-orange-100 transition-colors shrink-0">
                <Mic className="w-5 h-5" />
              </button>
              <input 
                type="text" 
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleProcess()}
                placeholder="Type your need here..."
                className="flex-1 bg-transparent px-4 py-3 outline-none text-[#0F172A] placeholder:text-[#0F172A]/30 text-lg"
              />
              <button 
                onClick={handleProcess}
                disabled={!input.trim()}
                className="w-12 h-12 rounded-full bg-[#0F172A] text-white flex items-center justify-center disabled:opacity-50 hover:bg-[#0F172A]/80 transition-colors shrink-0"
              >
                <Send className="w-5 h-5 ml-1" />
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {["I want to apply for a scholarship.", "My crop was damaged by rain.", "I want to report a damaged road."].map(suggestion => (
                <button 
                  key={suggestion}
                  onClick={() => { setInput(suggestion); }}
                  className="px-4 py-2 rounded-full bg-white border border-[#0F172A]/10 text-sm font-medium text-[#0F172A]/70 hover:border-[#F97316] hover:text-[#F97316] transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {isProcessing && (
          <motion.div key="processing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center py-20">
            <div className="relative w-24 h-24 mb-6">
              <motion.div className="absolute inset-0 rounded-full border-4 border-[#F97316]/20" />
              <motion.div 
                className="absolute inset-0 rounded-full border-4 border-[#F97316] border-t-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Search className="w-8 h-8 text-[#F97316]" />
              </div>
            </div>
            <h2 className="text-xl font-bold text-[#0F172A]">Understanding your request...</h2>
            <p className="text-[#0F172A]/50 mt-2">AI is finding the right service</p>
          </motion.div>
        )}

        {result && !isProcessing && (
          <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl p-8 shadow-xl border border-[#0F172A]/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -z-10 opacity-50"></div>
            
            <p className="text-sm font-bold text-[#0F172A]/40 tracking-wider mb-2 uppercase">You Said</p>
            <p className="text-xl font-medium text-[#0F172A] mb-8 pb-8 border-b border-[#0F172A]/5">"{input}"</p>

            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#15803D] animate-pulse"></span>
              <p className="text-sm font-bold text-[#15803D] tracking-wider uppercase">AI Understood</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-sm text-[#0F172A]/50 mb-1">Service Identified</p>
                <p className="text-xl font-bold text-[#0F172A]">{result.service}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-bold">{result.category}</span>
              </div>
              <div>
                <p className="text-sm text-[#0F172A]/50 mb-2">You may need</p>
                <ul className="space-y-2">
                  {result.requiredDocuments.map((doc: string) => (
                    <li key={doc} className="flex items-center gap-2 text-sm font-medium text-[#0F172A]/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></div>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-[#FAFAF9] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
              <div>
                <p className="text-sm text-[#0F172A]/50 font-medium">Next Action</p>
                <p className="font-bold text-[#0F172A] capitalize text-lg">{result.nextStep.replace('_', ' ')}</p>
              </div>
              <button onClick={handleNext} className="w-full sm:w-auto px-8 py-3 bg-[#15803D] text-white font-bold rounded-xl hover:bg-green-700 transition-colors shadow-md">
                Continue →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
