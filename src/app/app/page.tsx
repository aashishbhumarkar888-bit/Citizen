import Link from 'next/link';
import { Mic, Search, FileText, Briefcase, Stethoscope, Tractor, Map, AlertTriangle, Landmark, ChevronRight } from 'lucide-react';

export default function CitizenHome() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-4">What do you need help with today?</h1>
        <p className="text-xl text-[#0F172A]/60 font-medium">Describe your problem in your own words.</p>
      </div>

      <div className="bg-white rounded-[2rem] p-4 shadow-xl border border-[#0F172A]/10 max-w-3xl mx-auto flex items-center gap-4 mb-16 relative hover:border-[#F97316] transition-colors group">
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-[2.2rem] blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
        <Link href="/app/ask" className="w-16 h-16 rounded-2xl bg-orange-50 text-[#F97316] flex items-center justify-center shrink-0 hover:bg-orange-100 transition-colors relative z-10">
          <Mic className="w-8 h-8" />
        </Link>
        <Link href="/app/ask" className="flex-1 px-4 py-4 text-xl text-[#0F172A]/40 font-medium relative z-10 cursor-text">
          🎙 Speak, ⌨ Type, or 📷 Upload...
        </Link>
        <Link href="/app/ask" className="w-16 h-16 rounded-2xl bg-[#0F172A] text-white flex items-center justify-center shrink-0 hover:bg-[#0F172A]/80 transition-colors shadow-md relative z-10">
          <Search className="w-7 h-7" />
        </Link>
      </div>

      <div>
        <h2 className="text-sm font-bold text-[#0F172A]/40 uppercase tracking-widest mb-6">Quick Needs</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: FileText, label: "Scholarship", color: "text-blue-600", bg: "bg-blue-50", link: "/app/ask?scenario=scholarship" },
            { icon: Tractor, label: "Farmer Support", color: "text-green-600", bg: "bg-green-50", link: "/app/ask?scenario=crop" },
            { icon: AlertTriangle, label: "Report Problem", color: "text-red-600", bg: "bg-red-50", link: "/app/ask?scenario=grievance" },
            { icon: Briefcase, label: "Jobs", color: "text-purple-600", bg: "bg-purple-50", link: "/app/ask" },
            { icon: Stethoscope, label: "Health", color: "text-teal-600", bg: "bg-teal-50", link: "/app/ask" },
            { icon: Landmark, label: "Gov Schemes", color: "text-orange-600", bg: "bg-orange-50", link: "/app/ask" },
            { icon: Map, label: "Transport", color: "text-indigo-600", bg: "bg-indigo-50", link: "/app/ask" },
            { icon: Search, label: "Browse All", color: "text-gray-600", bg: "bg-gray-100", link: "/app/ask" },
          ].map((item, i) => (
            <Link key={i} href={item.link} className="bg-white p-6 rounded-3xl border border-[#0F172A]/5 hover:shadow-lg hover:border-[#0F172A]/10 transition-all flex flex-col items-center justify-center text-center gap-4 group cursor-pointer">
              <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <item.icon className="w-7 h-7" />
              </div>
              <span className="font-bold text-[#0F172A]">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="mt-16 bg-[#0F172A] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between text-white gap-6">
        <div>
          <h3 className="text-xl font-bold mb-2">Track your active requests</h3>
          <p className="text-white/60 font-medium">Check the status of your applications and grievances.</p>
        </div>
        <Link href="/app/applications" className="px-6 py-3 bg-white text-[#0F172A] font-bold rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors w-full md:w-auto justify-center">
          View Dashboard <ChevronRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
