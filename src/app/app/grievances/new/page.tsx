"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Send, Camera, MapPin, AlertTriangle } from 'lucide-react';
import SevaSetuFlow from '@/components/SevaSetuFlow';

export default function NewGrievancePage() {
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [draft, setDraft] = useState(false);
  const router = useRouter();

  const handleAnalyze = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setDraft(true);
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 pb-32">
      <SevaSetuFlow activeStep={2} />

      <AnimatePresence mode="wait">
        {!draft && !isProcessing && (
          <motion.div key="input" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="mt-12">
            <h1 className="text-3xl font-bold text-[#0F172A] mb-2 text-center">Report a Problem</h1>
            <p className="text-center text-[#0F172A]/60 mb-8">Describe the issue and add a photo or location if possible.</p>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#0F172A]/10 mb-8">
              <textarea 
                rows={4}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g. There is a large pothole on Airport Road..."
                className="w-full bg-[#FAFAF9] border border-[#0F172A]/10 rounded-2xl p-4 outline-none focus:border-[#F97316] resize-none mb-4"
              ></textarea>
              
              <div className="flex items-center gap-4 border-t border-[#0F172A]/10 pt-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold hover:bg-blue-100 transition-colors">
                  <Camera className="w-4 h-4" />
                  Add Photo
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-bold hover:bg-green-100 transition-colors">
                  <MapPin className="w-4 h-4" />
                  Add Location
                </button>
              </div>
            </div>

            <button onClick={handleAnalyze} disabled={!input.trim()} className="w-full py-4 bg-[#0F172A] text-white font-bold rounded-2xl hover:bg-[#0F172A]/90 transition-colors disabled:opacity-50">
              Analyze Grievance
            </button>
          </motion.div>
        )}

        {isProcessing && (
          <motion.div key="processing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center py-20 mt-12">
            <div className="relative w-20 h-20 mb-6">
              <motion.div className="absolute inset-0 rounded-full border-4 border-blue-200" />
              <motion.div className="absolute inset-0 rounded-full border-4 border-blue-600 border-t-transparent" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
              <AlertTriangle className="w-8 h-8 text-blue-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <h2 className="text-xl font-bold text-[#0F172A]">Categorizing Issue...</h2>
          </motion.div>
        )}

        {draft && (
          <motion.div key="draft" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mt-12 bg-white rounded-3xl p-8 shadow-xl border border-[#0F172A]/10">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Grievance Draft</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-[#FAFAF9] p-4 rounded-xl border border-[#0F172A]/5">
                <p className="text-sm font-bold text-[#0F172A]/40 uppercase tracking-wider mb-1">Issue Category</p>
                <p className="font-bold text-[#0F172A]">Urban Infrastructure</p>
              </div>
              <div className="bg-[#FAFAF9] p-4 rounded-xl border border-[#0F172A]/5">
                <p className="text-sm font-bold text-[#0F172A]/40 uppercase tracking-wider mb-1">Suggested Department</p>
                <p className="font-bold text-[#0F172A]">Municipal Corporation (PWD)</p>
              </div>
              <div className="bg-[#FAFAF9] p-4 rounded-xl border border-[#0F172A]/5">
                <p className="text-sm font-bold text-[#0F172A]/40 uppercase tracking-wider mb-1">Your Description</p>
                <p className="text-[#0F172A]">{input}</p>
              </div>
            </div>

            <button onClick={() => router.push('/app/applications/DEMO-123/success')} className="w-full py-4 bg-[#F97316] text-white font-bold rounded-2xl hover:bg-orange-600 transition-colors shadow-md">
              Submit Grievance
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
