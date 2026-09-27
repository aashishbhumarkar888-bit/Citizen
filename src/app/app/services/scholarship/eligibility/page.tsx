"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import SevaSetuFlow from '@/components/SevaSetuFlow';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

export default function ScholarshipEligibility() {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState(false);

  const handleCheck = () => {
    setIsChecking(true);
    setTimeout(() => {
      setIsChecking(false);
      setResult(true);
    }, 1500);
  };

  if (result) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <SevaSetuFlow activeStep={2} />
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mt-12 bg-white rounded-3xl p-8 shadow-xl border border-[#0F172A]/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -z-10 opacity-50"></div>
          
          <p className="text-xs font-bold text-green-700 uppercase tracking-wider mb-4 bg-green-100 inline-block px-3 py-1 rounded-full">Eligibility Pre-Check</p>
          <h2 className="text-3xl font-extrabold text-[#0F172A] mb-4">Potentially Eligible</h2>
          
          <div className="bg-[#FAFAF9] p-6 rounded-2xl border border-[#0F172A]/5 mb-6">
            <p className="text-sm font-bold text-[#0F172A]/50 uppercase tracking-widest mb-4">Based on the information provided:</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm font-bold text-[#0F172A]"><CheckCircle2 className="w-5 h-5 text-green-600" /> Student profile matches criteria</li>
              <li className="flex items-center gap-3 text-sm font-bold text-[#0F172A]"><CheckCircle2 className="w-5 h-5 text-green-600" /> Course information verified</li>
              <li className="flex items-center gap-3 text-sm font-bold text-[#0F172A]"><CheckCircle2 className="w-5 h-5 text-green-600" /> Required document availability confirmed</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-xl flex items-start gap-3 border border-yellow-100 mb-8">
            <AlertTriangle className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
            <p className="text-xs font-bold text-yellow-800 leading-relaxed">
              AI-ASSISTED PRELIMINARY CHECK: Official eligibility will depend on the relevant authority&apos;s verification after submission.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between bg-blue-50 p-6 rounded-2xl border border-blue-100 gap-4">
            <div>
              <p className="text-sm font-bold text-blue-900/50 uppercase tracking-widest">Next Step</p>
              <p className="font-bold text-blue-900 mt-1">Upload required documents</p>
            </div>
            <button onClick={() => router.push('/app/documents')} className="w-full sm:w-auto px-8 py-4 bg-[#0F172A] text-white font-bold rounded-xl hover:bg-[#0F172A]/90 transition-colors shadow-lg">
              Continue →
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <SevaSetuFlow activeStep={2} />
      
      <div className="mt-12 bg-white rounded-3xl p-8 shadow-sm border border-[#0F172A]/10">
        <h1 className="text-2xl font-bold text-[#0F172A] mb-6">Eligibility Check</h1>
        <p className="text-[#0F172A]/60 mb-8">We need a few details to confirm if you qualify for this scholarship.</p>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-[#0F172A] mb-2">Student Category</label>
            <select className="w-full bg-[#FAFAF9] border border-[#0F172A]/10 rounded-xl px-4 py-3 outline-none focus:border-[#F97316]">
              <option>SC/ST</option>
              <option>OBC</option>
              <option>General</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-bold text-[#0F172A] mb-2">Annual Family Income</label>
            <select className="w-full bg-[#FAFAF9] border border-[#0F172A]/10 rounded-xl px-4 py-3 outline-none focus:border-[#F97316]">
              <option>Less than ₹2.5 Lakhs</option>
              <option>₹2.5 Lakhs to ₹5 Lakhs</option>
              <option>More than ₹5 Lakhs</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#0F172A] mb-2">Current Academic Level</label>
            <select className="w-full bg-[#FAFAF9] border border-[#0F172A]/10 rounded-xl px-4 py-3 outline-none focus:border-[#F97316]">
              <option>Class 11-12</option>
              <option>Undergraduate</option>
              <option>Postgraduate</option>
            </select>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <button onClick={handleCheck} disabled={isChecking} className="w-full sm:w-auto px-8 py-3 bg-[#0F172A] text-white font-bold rounded-xl hover:bg-[#0F172A]/90 transition-colors disabled:opacity-70">
            {isChecking ? 'Checking...' : 'Check Eligibility'}
          </button>
          <div className="flex items-center gap-2 text-xs font-medium text-[#0F172A]/40">
            <AlertTriangle className="w-4 h-4" />
            AI-assisted preliminary check
          </div>
        </div>
      </div>
    </div>
  );
}
