"use client";
import { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, CheckCircle2, ScanSearch, AlertTriangle } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import SevaSetuFlow from '@/components/SevaSetuFlow';

function DocumentsContent() {
  const [, setFile] = useState<File | null>(null);
  const [scanState, setScanState] = useState<'idle' | 'uploading' | 'scanning' | 'extracting' | 'ready'>('idle');
  const router = useRouter();
  const searchParams = useSearchParams();
  const scenario = searchParams.get('scenario') || 'scholarship';

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      simulateScan();
    }
  };

  const simulateScan = async () => {
    setScanState('uploading');
    await new Promise(r => setTimeout(r, 1000));
    setScanState('scanning');
    await new Promise(r => setTimeout(r, 1500));
    setScanState('extracting');
    await new Promise(r => setTimeout(r, 1000));
    setScanState('ready');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-12">
        <SevaSetuFlow activeStep={3} />
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#0F172A]/5">
        <h1 className="text-3xl font-extrabold text-[#0F172A] mb-2">
          {scenario === 'crop' ? 'Upload Evidence' : 'Upload Documents'}
        </h1>
        <p className="text-[#0F172A]/60 font-medium mb-8">
          {scenario === 'crop' ? 'Please upload photos of the damaged crop.' : 'Please upload your income certificate.'}
        </p>

        <AnimatePresence mode="wait">
          {scanState === 'idle' && (
            <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <label className="border-2 border-dashed border-[#0F172A]/20 rounded-2xl p-12 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 hover:border-[#F97316] transition-all group">
                <div className="w-16 h-16 rounded-full bg-orange-50 text-[#F97316] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Upload className="w-8 h-8" />
                </div>
                <p className="font-bold text-[#0F172A] mb-1">Click to upload or drag and drop</p>
                <p className="text-sm font-medium text-[#0F172A]/50">PDF, JPG, PNG up to 10MB</p>
                <input type="file" className="hidden" onChange={handleUpload} accept="image/*,.pdf" />
              </label>
            </motion.div>
          )}

          {scanState !== 'idle' && scanState !== 'ready' && (
            <motion.div key="scanning" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-20 flex flex-col items-center justify-center">
              <div className="relative w-24 h-24 mb-6">
                <motion.div className="absolute inset-0 rounded-full border-4 border-[#0F172A]/10" />
                <motion.div 
                  className="absolute inset-0 rounded-full border-4 border-[#0F172A] border-t-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <ScanSearch className="w-8 h-8 text-[#0F172A]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] uppercase tracking-widest">{scanState}...</h3>
              <p className="text-[#0F172A]/50 mt-2 font-medium">Please do not close this window</p>
            </motion.div>
          )}

          {scanState === 'ready' && (
            <motion.div key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div className="flex items-center gap-4 bg-green-50 text-green-800 p-6 rounded-2xl border border-green-100">
                <CheckCircle2 className="w-8 h-8 shrink-0 text-green-600" />
                <div>
                  <h3 className="font-bold text-lg">AI/OCR Check Complete</h3>
                  <p className="text-green-700/80 text-sm font-medium">Document is readable and contains required fields.</p>
                </div>
              </div>

              <div className="bg-[#FAFAF9] p-6 rounded-2xl border border-[#0F172A]/5">
                <h4 className="text-xs font-bold tracking-widest text-[#0F172A]/40 uppercase mb-4">Extracted Information</h4>
                <ul className="space-y-3 mb-6">
                  {scenario === 'scholarship' ? (
                    <>
                      <li className="flex justify-between items-center text-sm"><span className="text-[#0F172A]/60 font-bold">Document Type</span><span className="font-bold">Income Certificate</span></li>
                      <li className="flex justify-between items-center text-sm"><span className="text-[#0F172A]/60 font-bold">Name</span><span className="font-bold">Rahul Sharma</span></li>
                      <li className="flex justify-between items-center text-sm"><span className="text-[#0F172A]/60 font-bold">Declared Income</span><span className="font-bold">₹1,20,000</span></li>
                    </>
                  ) : (
                    <>
                      <li className="flex justify-between items-center text-sm"><span className="text-[#0F172A]/60 font-bold">Analysis</span><span className="font-bold text-orange-600">Possible crop damage detected</span></li>
                      <li className="flex justify-between items-center text-sm"><span className="text-[#0F172A]/60 font-bold">Crop Type Identified</span><span className="font-bold">Wheat</span></li>
                      <li className="flex justify-between items-center text-sm"><span className="text-[#0F172A]/60 font-bold">Date Taken</span><span className="font-bold">Today</span></li>
                    </>
                  )}
                </ul>
                <div className="bg-yellow-50 p-4 rounded-xl flex items-start gap-3 border border-yellow-100">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                  <p className="text-xs font-bold text-yellow-800 leading-relaxed">
                    AI-ASSISTED PRELIMINARY CHECK: This is a demo analysis. Official verification by the department may still be required.
                  </p>
                </div>
              </div>

              <button 
                onClick={() => router.push('/app/applications/DEMO-123')}
                className="w-full py-4 bg-[#0F172A] text-white font-bold rounded-xl hover:bg-[#0F172A]/90 transition-colors shadow-lg"
              >
                Continue to Review
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function DocumentsPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 font-bold">Loading...</div>}>
      <DocumentsContent />
    </Suspense>
  );
}
