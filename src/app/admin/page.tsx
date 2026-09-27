"use client";
import { useState } from 'react';
import { Search, AlertCircle, CheckCircle2, MapPin, Camera, UserCircle } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('grievances');
  const [selectedGrievance, setSelectedGrievance] = useState<boolean>(false);
  const [grievanceStatus, setGrievanceStatus] = useState('New');

  return (
    <div className="flex h-screen bg-[#FAFAF9] text-[#0F172A] font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-[#0F172A] text-white p-6 flex flex-col">
        <h2 className="text-xl font-extrabold tracking-tight mb-8">Department Portal</h2>
        
        <nav className="space-y-2 flex-1">
          <button onClick={() => setActiveTab('grievances')} className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'grievances' ? 'bg-[#F97316] text-white' : 'text-white/60 hover:bg-white/5'}`}>
            Grievances
          </button>
          <button onClick={() => setActiveTab('applications')} className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'applications' ? 'bg-[#F97316] text-white' : 'text-white/60 hover:bg-white/5'}`}>
            Applications
          </button>
        </nav>
        
        <div className="pt-8 border-t border-white/10">
          <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Operator Mode</p>
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <p className="font-bold text-white text-sm">Demo Operator</p>
            <p className="text-white/50 text-xs mt-1">Urban Infrastructure Dept.</p>
          </div>
          <Link href="/judge" className="mt-4 block w-full py-2 text-center text-xs font-bold text-[#F97316] border border-[#F97316]/30 rounded-lg hover:bg-[#F97316]/10 transition-colors">
            Exit to Judge Portal
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-white border-b border-[#0F172A]/10 px-8 flex items-center justify-between shadow-sm z-10">
          <h1 className="text-2xl font-bold text-[#0F172A]">Incoming Requests</h1>
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-[#0F172A]/40" />
            <input type="text" placeholder="Search ID or Keyword" className="pl-10 pr-4 py-2 bg-gray-50 border border-[#0F172A]/10 rounded-full text-sm outline-none w-64 focus:border-[#F97316] transition-colors" />
          </div>
        </header>

        <main className="flex-1 overflow-auto p-8 flex gap-8">
          <div className="flex-1 flex flex-col gap-4">
            {/* Grievance Item */}
            <div 
              onClick={() => setSelectedGrievance(true)}
              className={`bg-white p-6 rounded-2xl border ${selectedGrievance ? 'border-[#F97316] shadow-md' : 'border-[#0F172A]/10 shadow-sm hover:border-[#0F172A]/30'} cursor-pointer transition-all flex items-start justify-between`}
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-bold text-[#0F172A]/50">GRV-MP-2026-004821</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${grievanceStatus === 'New' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>{grievanceStatus}</span>
                  </div>
                  <h3 className="font-bold text-lg text-[#0F172A] mb-1">Road Infrastructure</h3>
                  <p className="text-sm font-medium text-[#0F172A]/70">Pothole / damaged road</p>
                </div>
              </div>
              <p className="text-sm font-bold text-[#0F172A]/40">Today, 10:42 AM</p>
            </div>

            {/* Application Item */}
            <div className="bg-white p-6 rounded-2xl border border-[#0F172A]/10 shadow-sm opacity-60">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-bold text-[#0F172A]/50">MP-DEMO-SCH-2026</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider bg-orange-100 text-orange-700">Under Review</span>
                  </div>
                  <h3 className="font-bold text-lg text-[#0F172A] mb-1">Post-Matric Scholarship</h3>
                  <p className="text-sm font-medium text-[#0F172A]/70">Higher Education Dept.</p>
                </div>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {selectedGrievance && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                className="w-96 bg-white rounded-3xl border border-[#0F172A]/10 shadow-xl overflow-hidden flex flex-col"
              >
                <div className="p-6 border-b border-[#0F172A]/10 bg-gray-50">
                  <p className="text-sm font-bold text-[#0F172A]/50 mb-2">GRV-MP-2026-004821</p>
                  <h2 className="text-2xl font-extrabold text-[#0F172A]">Road Infrastructure</h2>
                </div>

                <div className="p-6 overflow-auto flex-1 space-y-6">
                  <div>
                    <h3 className="text-xs font-bold text-[#0F172A]/40 tracking-widest uppercase mb-3">Citizen Request</h3>
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-start gap-3">
                      <UserCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <p className="text-sm font-medium text-blue-900 italic">&quot;There is a massive pothole causing accidents near the main market square.&quot;</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-[#0F172A]/40 tracking-widest uppercase mb-3">AI Classification</h3>
                    <div className="bg-white border border-[#0F172A]/10 rounded-xl p-4 space-y-3">
                      <div className="flex justify-between items-center"><span className="text-sm font-medium text-[#0F172A]/60">Category</span><span className="text-sm font-bold text-[#0F172A]">Road Maintenance</span></div>
                      <div className="flex justify-between items-center"><span className="text-sm font-medium text-[#0F172A]/60">Priority</span><span className="text-sm font-bold text-red-600">High (Safety Risk)</span></div>
                      <div className="flex justify-between items-center"><span className="text-sm font-medium text-[#0F172A]/60">Routing</span><span className="text-sm font-bold text-[#0F172A]">Urban Dept. Ward 4</span></div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-[#0F172A]/40 tracking-widest uppercase mb-3">Evidence</h3>
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                        <Camera className="w-6 h-6 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-[#0F172A] flex items-center gap-1"><MapPin className="w-3 h-3 text-[#F97316]"/> Main Market Sq, Bhopal</p>
                        <p className="text-xs text-[#0F172A]/50 mt-1">Uploaded today</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-[#0F172A]/40 tracking-widest uppercase mb-3">Timeline</h3>
                    <div className="border-l-2 border-gray-200 ml-2 space-y-4 pb-2">
                      <div className="relative pl-6">
                        <div className="w-3 h-3 bg-[#15803D] rounded-full absolute -left-[7px] top-1 ring-4 ring-white"></div>
                        <p className="text-sm font-bold text-[#0F172A]">Citizen submitted</p>
                        <p className="text-xs text-[#0F172A]/50">Today, 10:41 AM</p>
                      </div>
                      <div className="relative pl-6">
                        <div className="w-3 h-3 bg-[#15803D] rounded-full absolute -left-[7px] top-1 ring-4 ring-white"></div>
                        <p className="text-sm font-bold text-[#0F172A]">AI Classification</p>
                        <p className="text-xs text-[#0F172A]/50">Today, 10:42 AM</p>
                      </div>
                      <div className="relative pl-6">
                        <div className={`w-3 h-3 rounded-full absolute -left-[7px] top-1 ring-4 ring-white ${grievanceStatus === 'In Progress' ? 'bg-[#F97316]' : 'bg-gray-300'}`}></div>
                        <p className="text-sm font-bold text-[#0F172A]">Authority Action</p>
                        <p className="text-xs text-[#0F172A]/50">{grievanceStatus === 'In Progress' ? 'Marked In Progress' : 'Pending review'}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 border-t border-[#0F172A]/10 grid grid-cols-2 gap-3">
                  <button onClick={() => setGrievanceStatus('In Progress')} className="py-3 bg-[#0F172A] text-white text-sm font-bold rounded-xl hover:bg-[#0F172A]/90 transition-colors shadow-sm">
                    Acknowledge
                  </button>
                  <button className="py-3 bg-white text-[#0F172A] text-sm font-bold rounded-xl border border-[#0F172A]/10 hover:bg-gray-50 transition-colors shadow-sm">
                    Re-assign
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </main>
      </div>
    </div>
  );
}
