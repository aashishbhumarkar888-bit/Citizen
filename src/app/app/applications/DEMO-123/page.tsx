"use client";

import SevaSetuFlow from '@/components/SevaSetuFlow';
import { CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ReviewPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 pb-32">
      <SevaSetuFlow activeStep={4} />
      
      <div className="mt-12 bg-white rounded-3xl p-8 shadow-sm border border-[#0F172A]/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -z-10 opacity-50"></div>
        <h1 className="text-3xl font-bold text-[#0F172A] mb-2">Application Ready</h1>
        <p className="text-[#0F172A]/60 mb-8">Review your details before final submission.</p>

        <div className="space-y-4 mb-10">
          <div className="flex items-center justify-between p-4 bg-[#FAFAF9] rounded-xl border border-[#0F172A]/5">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="font-medium text-[#0F172A]">Personal Details</span>
            </div>
            <span className="text-sm font-bold text-[#0F172A]/50">Rahul Sharma</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-[#FAFAF9] rounded-xl border border-[#0F172A]/5">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="font-medium text-[#0F172A]">Eligibility Information</span>
            </div>
            <span className="text-sm font-bold text-[#0F172A]/50">Verified by AI</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-[#FAFAF9] rounded-xl border border-[#0F172A]/5">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="font-medium text-[#0F172A]">Required Documents</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#0F172A]/50" />
              <span className="text-sm font-bold text-[#0F172A]/50">Income.pdf</span>
            </div>
          </div>
        </div>

        <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 mb-10">
          <h3 className="font-bold text-blue-900 mb-2">Service</h3>
          <p className="text-blue-800 text-lg">Post-Matric Scholarship</p>
          <p className="text-blue-700/70 text-sm mt-1">Department of Higher Education</p>
        </div>

        <Link href="/app/applications/DEMO-123/success" className="w-full flex items-center justify-center gap-2 py-4 bg-[#F97316] text-white font-bold text-lg rounded-xl hover:bg-[#ea580c] transition-colors shadow-md">
          Submit Demo Application
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
