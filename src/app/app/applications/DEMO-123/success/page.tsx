"use client";
import { motion } from 'framer-motion';
import { CheckCircle2, Copy } from 'lucide-react';
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center flex flex-col items-center">
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8 shadow-inner"
      >
        <CheckCircle2 className="w-12 h-12" />
      </motion.div>

      <motion.h1 
        initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
        className="text-4xl font-extrabold text-[#0F172A] mb-4"
      >
        Application Submitted
      </motion.h1>
      
      <motion.p 
        initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
        className="text-lg text-[#0F172A]/70 mb-10"
      >
        Your application for the Post-Matric Scholarship has been successfully submitted in Demo Mode.
      </motion.p>

      <motion.div 
        initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
        className="w-full max-w-sm bg-white p-6 rounded-2xl border border-[#0F172A]/10 shadow-sm mb-12 flex items-center justify-between"
      >
        <div className="text-left">
          <p className="text-xs font-bold text-[#0F172A]/40 uppercase tracking-wider mb-1">Application ID</p>
          <p className="text-lg font-bold text-[#0F172A] tracking-wide">MP-DEMO-SCH-2026</p>
        </div>
        <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#0F172A]/50 hover:bg-gray-100 transition-colors">
          <Copy className="w-5 h-5" />
        </button>
      </motion.div>

      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
        <Link href="/app/applications" className="w-full sm:w-auto px-8 py-4 bg-[#0F172A] text-white font-bold rounded-full hover:bg-[#0F172A]/90 transition-colors shadow-md">
          Track Application
        </Link>
        <Link href="/app" className="w-full sm:w-auto px-8 py-4 bg-white border border-[#0F172A]/10 text-[#0F172A] font-bold rounded-full hover:bg-gray-50 transition-colors shadow-sm">
          Return to Home
        </Link>
      </motion.div>
    </div>
  );
}
