import { Clock, AlertCircle } from 'lucide-react';


export default function ApplicationsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[#0F172A] mb-8">Your Activity</h1>

      <div className="space-y-6">
        
        {/* Active Demo Application */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#0F172A]/10 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-2 h-full bg-[#F97316]"></div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4 border-b border-[#0F172A]/5 pb-6">
            <div>
              <p className="text-sm font-bold text-[#0F172A]/40 tracking-wider mb-1 uppercase">MP-DEMO-SCH-2026</p>
              <h2 className="text-2xl font-extrabold text-[#0F172A]">Post-Matric Scholarship</h2>
            </div>
            <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-2 rounded-xl border border-orange-100 shadow-sm">
              <Clock className="w-5 h-5 animate-spin-slow" />
              <span className="font-bold text-sm uppercase tracking-widest">Under Review</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
              <p className="text-xs font-bold text-blue-900/50 uppercase tracking-widest mb-1">Current Status</p>
              <p className="text-sm font-bold text-blue-900">Your application has been successfully prepared and submitted to the demo environment.</p>
            </div>
            <div className="bg-[#FAFAF9] p-4 rounded-xl border border-[#0F172A]/5">
              <p className="text-xs font-bold text-[#0F172A]/40 uppercase tracking-widest mb-1">Next Expected Action</p>
              <p className="text-sm font-bold text-[#0F172A]">Department manual verification of uploaded documents.</p>
            </div>
          </div>

          <div className="relative pl-8 border-l-2 border-[#0F172A]/10 space-y-6">
            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-green-500 ring-4 ring-green-100"></div>
              <p className="font-bold text-[#0F172A] flex items-center gap-2">Application submitted <span className="text-xs font-bold text-white bg-green-500 px-2 py-0.5 rounded-full">Completed</span></p>
              <p className="text-sm text-[#0F172A]/60">Today</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-green-500 ring-4 ring-green-100"></div>
              <p className="font-bold text-[#0F172A] flex items-center gap-2">Documents checked (AI-Assisted) <span className="text-xs font-bold text-white bg-green-500 px-2 py-0.5 rounded-full">Completed</span></p>
              <p className="text-sm text-[#0F172A]/60">Today</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-green-500 ring-4 ring-green-100"></div>
              <p className="font-bold text-[#0F172A] flex items-center gap-2">Eligibility pre-check <span className="text-xs font-bold text-white bg-green-500 px-2 py-0.5 rounded-full">Completed</span></p>
              <p className="text-sm text-[#0F172A]/60">Today</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-gray-300 ring-4 ring-white"></div>
              <p className="font-bold text-[#0F172A] text-opacity-50 flex items-center gap-2">Department Review <span className="text-xs font-bold text-[#0F172A]/40 bg-gray-100 px-2 py-0.5 rounded-full">Pending</span></p>
              <p className="text-sm text-[#0F172A]/40">Awaiting official action</p>
            </div>
          </div>
        </div>

        {/* Grievance Record */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#0F172A]/10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-2 h-full bg-red-600"></div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <p className="text-sm font-bold text-[#0F172A]/40 tracking-wider mb-1 uppercase">GRV-MP-2026-004821</p>
              <h2 className="text-xl font-bold text-[#0F172A]">Road Infrastructure</h2>
            </div>
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-3 py-1.5 rounded-lg border border-red-100">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-widest">Routed</span>
            </div>
          </div>

          <div className="relative pl-8 border-l-2 border-[#0F172A]/10 space-y-6">
            <div className="relative">
              <div className="absolute -left-[37px] top-0.5 w-4 h-4 rounded-full bg-green-500 ring-4 ring-green-100"></div>
              <p className="font-bold text-[#0F172A]">Grievance Submitted</p>
              <p className="text-sm text-[#0F172A]/60">Today</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[37px] top-0.5 w-4 h-4 rounded-full bg-green-500 ring-4 ring-green-100"></div>
              <p className="font-bold text-[#0F172A]">AI Classification</p>
              <p className="text-sm text-[#0F172A]/60">Categorized as Urban Dept. Ward 4</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[37px] top-0.5 w-4 h-4 rounded-full bg-gray-300 ring-4 ring-white"></div>
              <p className="font-bold text-[#0F172A] opacity-50">Authority Review</p>
              <p className="text-sm text-[#0F172A]/40">Awaiting official action from the department dashboard.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
