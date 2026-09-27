import Link from 'next/link';
import { CheckCircle2, Clock } from 'lucide-react';

export default function ApplicationsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#0F172A] mb-8">Your Applications</h1>

      <div className="space-y-6">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#0F172A]/10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-2 h-full bg-[#15803D]"></div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <p className="text-sm font-bold text-[#0F172A]/40 tracking-wider mb-1">MP-DEMO-SCH-2026</p>
              <h2 className="text-xl font-bold text-[#0F172A]">Post-Matric Scholarship</h2>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-lg border border-green-100">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-sm font-bold">Approved</span>
            </div>
          </div>

          <div className="relative pl-8 border-l-2 border-[#0F172A]/10 space-y-8">
            <div className="relative">
              <div className="absolute -left-[37px] top-0.5 w-4 h-4 rounded-full bg-green-500 ring-4 ring-green-100"></div>
              <p className="font-bold text-[#0F172A]">Application Created</p>
              <p className="text-sm text-[#0F172A]/60">Aug 15, 2026</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[37px] top-0.5 w-4 h-4 rounded-full bg-green-500 ring-4 ring-green-100"></div>
              <p className="font-bold text-[#0F172A]">Documents Verified</p>
              <p className="text-sm text-[#0F172A]/60">AI and Manual review completed on Aug 18, 2026</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[37px] top-0.5 w-4 h-4 rounded-full bg-green-500 ring-4 ring-green-100"></div>
              <p className="font-bold text-[#0F172A]">Decision</p>
              <p className="text-sm text-[#0F172A]/60">Application Approved by Department on Aug 20, 2026</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#0F172A]/10 shadow-sm relative overflow-hidden opacity-75">
          <div className="absolute top-0 right-0 w-2 h-full bg-[#F97316]"></div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <p className="text-sm font-bold text-[#0F172A]/40 tracking-wider mb-1">CROP-DEMO-2026</p>
              <h2 className="text-xl font-bold text-[#0F172A]">Crop Damage Relief</h2>
            </div>
            <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-3 py-1.5 rounded-lg border border-orange-100">
              <Clock className="w-4 h-4 animate-spin-slow" />
              <span className="text-sm font-bold">Under Review</span>
            </div>
          </div>

          <div className="relative pl-8 border-l-2 border-[#0F172A]/10 space-y-8">
            <div className="relative">
              <div className="absolute -left-[37px] top-0.5 w-4 h-4 rounded-full bg-green-500 ring-4 ring-green-100"></div>
              <p className="font-bold text-[#0F172A]">Application Created</p>
              <p className="text-sm text-[#0F172A]/60">Sep 01, 2026</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[37px] top-0.5 w-4 h-4 rounded-full bg-orange-500 ring-4 ring-orange-100 animate-pulse"></div>
              <p className="font-bold text-[#0F172A]">Field Verification Pending</p>
              <p className="text-sm text-[#0F172A]/60">Awaiting Patwari physical inspection.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
