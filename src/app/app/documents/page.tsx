"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import SevaSetuFlow from '@/components/SevaSetuFlow';
import { Upload, FileText, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function DocumentsPage() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'scanning' | 'done'>('idle');

  const handleUpload = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setStatus('scanning');
      setTimeout(() => setStatus('done'), 2000);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <SevaSetuFlow activeStep={3} />
      
      <div className="mt-12 bg-white rounded-3xl p-8 shadow-sm border border-[#0F172A]/10">
        <h1 className="text-2xl font-bold text-[#0F172A] mb-2">Prepare Documents</h1>
        <p className="text-[#0F172A]/60 mb-8">Upload your documents for AI extraction and preliminary verification.</p>

        <AnimatePresence mode="wait">
          {status === 'idle' && (
            <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <label className="border-2 border-dashed border-[#0F172A]/20 rounded-2xl p-12 flex flex-col items-center justify-center cursor-pointer hover:bg-[#FAFAF9] hover:border-[#F97316] transition-all group">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Upload className="w-8 h-8" />
                </div>
                <span className="font-bold text-[#0F172A] mb-1">Tap to upload Document</span>
                <span className="text-sm text-[#0F172A]/50">JPG, PNG, PDF up to 5MB</span>
                <input type="file" className="hidden" onChange={handleUpload} />
              </label>
            </motion.div>
          )}

          {status === 'scanning' && (
            <motion.div key="scanning" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center py-12">
               <div className="relative w-20 h-20 mb-6">
                 <motion.div className="absolute inset-0 rounded-lg border-4 border-purple-200" />
                 <motion.div 
                   className="absolute inset-0 rounded-lg border-4 border-purple-600 border-t-transparent"
                   animate={{ rotate: 360 }}
                   transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                   <FileText className="w-8 h-8 text-purple-600" />
                 </div>
               </div>
               <h3 className="text-xl font-bold text-[#0F172A]">AI Scanning Document...</h3>
               <p className="text-[#0F172A]/50 mt-2">Extracting required fields</p>
            </motion.div>
          )}

          {status === 'done' && (
            <motion.div key="done" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#FAFAF9] rounded-2xl p-6 border border-[#0F172A]/10">
              <div className="flex items-start gap-4 mb-6 pb-6 border-b border-[#0F172A]/10">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#0F172A] text-lg">Income Certificate.pdf</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-700">Document detected and readable</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#0F172A]/60 font-medium">Extracted Name</span>
                  <span className="font-bold text-[#0F172A]">Rahul Sharma</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#0F172A]/60 font-medium">Extracted Income</span>
                  <span className="font-bold text-[#0F172A]">₹1,20,000</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#0F172A]/60 font-medium">Issue Date</span>
                  <span className="font-bold text-[#0F172A]">12/05/2026</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-yellow-50 text-yellow-800 rounded-xl mb-8 border border-yellow-200">
                <ShieldAlert className="w-5 h-5 shrink-0" />
                <p className="text-xs font-medium">AI/OCR Check passed. Official verification will be performed by the department upon submission.</p>
              </div>

              <button onClick={() => router.push('/app/applications/DEMO-123')} className="w-full py-4 bg-[#0F172A] text-white font-bold rounded-xl hover:bg-[#0F172A]/90 transition-colors shadow-md">
                Review & Submit Application
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
