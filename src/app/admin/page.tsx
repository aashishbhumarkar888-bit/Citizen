"use client";
import Link from 'next/link';
import { Search, AlertCircle, CheckCircle2, Clock } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded bg-[#0F172A] text-white flex items-center justify-center font-bold">OP</div>
          <h1 className="font-bold text-lg">Department Operator Console <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded ml-2">DEMO OPERATOR ENVIRONMENT</span></h1>
        </div>
        <div className="flex gap-4">
          <Link href="/" className="text-sm font-medium text-slate-500 hover:text-slate-900">Exit to Citizen Portal</Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Incoming</p>
            <p className="text-3xl font-extrabold text-slate-900">14</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">AI Classified</p>
            <p className="text-3xl font-extrabold text-blue-600">12</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Human Review Req</p>
            <p className="text-3xl font-extrabold text-orange-600">2</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Resolved</p>
            <p className="text-3xl font-extrabold text-green-600">89</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
            <h2 className="font-bold text-lg">Recent Applications & Grievances</h2>
            <div className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 flex items-center gap-2">
              <Search className="w-4 h-4 text-slate-400" />
              <input type="text" placeholder="Search ID..." className="outline-none text-sm w-48" />
            </div>
          </div>
          <div className="divide-y divide-slate-100">
            <div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 cursor-pointer">
              <div className="flex items-center gap-4 w-1/3">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div>
                  <p className="font-bold">MP-DEMO-SCH-2026</p>
                  <p className="text-sm text-slate-500">Post-Matric Scholarship</p>
                </div>
              </div>
              <div className="w-1/4">
                <p className="text-sm font-medium">Rahul Sharma</p>
                <p className="text-xs text-slate-500">Just now</p>
              </div>
              <div className="w-1/4">
                 <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">
                   <CheckCircle2 className="w-3 h-3"/> AI Verified
                 </span>
              </div>
              <div className="w-1/6 text-right">
                <button className="text-sm font-bold text-blue-600 hover:underline">Review</button>
              </div>
            </div>

            <div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 cursor-pointer">
              <div className="flex items-center gap-4 w-1/3">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                <div>
                  <p className="font-bold">GRV-MP-2026-004821</p>
                  <p className="text-sm text-slate-500">Road Maintenance</p>
                </div>
              </div>
              <div className="w-1/4">
                <p className="text-sm font-medium">Citizen #4412</p>
                <p className="text-xs text-slate-500">2 hours ago</p>
              </div>
              <div className="w-1/4">
                 <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-bold">
                   <AlertCircle className="w-3 h-3"/> Manual Verification
                 </span>
              </div>
              <div className="w-1/6 text-right">
                <button className="text-sm font-bold text-blue-600 hover:underline">Review</button>
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}
