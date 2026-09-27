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
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mt-12 bg-white rounded-3xl p-8 text-center shadow-xl border border-green-100">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-[#0F172A] mb-2">Likely Eligible</h2>
          <p className="text-[#0F172A]/60 mb-8 max-w-lg mx-auto">Based on the information provided, you appear to be eligible for the Post-Matric Scholarship. Official verification will occur upon submission.</p>
          <button onClick={() => router.push('/app/documents')} className="px-8 py-4 bg-[#F97316] text-white font-bold rounded-full hover:bg-orange-600 transition-colors w-full sm:w-auto">
            Proceed to Documents
          </button>
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
