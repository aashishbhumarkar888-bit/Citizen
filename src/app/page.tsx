import Link from "next/link";
import { Mic, Upload, Search, ChevronRight, FileText, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF9]">
      {/* Navigation */}
      <header className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#F97316] flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-[#0F172A]">SEVASETU AI</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#0F172A]/80">
          <Link href="/judge" className="hover:text-[#F97316] transition-colors">Judge Portal</Link>
          <Link href="/architecture" className="hover:text-[#F97316] transition-colors">Architecture</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/app" className="bg-[#0F172A] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#0F172A]/90 transition-all shadow-sm">
            Try SevaSetu
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center text-center px-4 pt-20 pb-32 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-8 border border-blue-100">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Challenge 5: AI Innovation for Public Services
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#0F172A] mb-8 leading-[1.1] uppercase">
          Public services <br />
          <span className="text-[#F97316]">start with a question.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-[#0F172A]/70 mb-12 max-w-3xl leading-relaxed font-medium">
          SevaSetu AI turns a citizen&apos;s everyday request into a guided public-service journey.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <Link href="/app/ask" className="w-full sm:w-auto bg-[#F97316] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[#ea580c] transition-all shadow-md flex items-center justify-center gap-2">
            START WITH YOUR NEED
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/judge" className="w-full sm:w-auto bg-white border border-[#0F172A]/10 text-[#0F172A] px-8 py-4 rounded-full text-base font-bold hover:bg-gray-50 transition-all shadow-sm flex items-center justify-center gap-2">
            WATCH HOW IT WORKS
          </Link>
        </div>

        {/* Visual SevaSetu Flow */}
        <div className="mt-24 w-full max-w-4xl relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FAFAF9] z-10 bottom-0 h-32 top-auto"></div>
          
          <div className="glass p-8 rounded-3xl border border-[#0F172A]/5 bg-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2 opacity-50"></div>
            
            {/* Flow Steps */}
            <div className="flex flex-col items-center gap-3 w-full md:w-1/4">
              <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shadow-inner">
                <Mic className="w-8 h-8" />
              </div>
              <p className="font-bold text-[#0F172A]">1. Ask</p>
            </div>

            <ChevronRight className="hidden md:block text-[#0F172A]/20 w-8 h-8 flex-shrink-0" />

            <div className="flex flex-col items-center gap-3 w-full md:w-1/4">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shadow-inner">
                <Search className="w-8 h-8" />
              </div>
              <p className="font-bold text-[#0F172A]">2. Understand</p>
            </div>

            <ChevronRight className="hidden md:block text-[#0F172A]/20 w-8 h-8 flex-shrink-0" />

            <div className="flex flex-col items-center gap-3 w-full md:w-1/4">
              <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center shadow-inner">
                <Upload className="w-8 h-8" />
              </div>
              <p className="font-bold text-[#0F172A]">3. Prepare</p>
            </div>

            <ChevronRight className="hidden md:block text-[#0F172A]/20 w-8 h-8 flex-shrink-0" />

            <div className="flex flex-col items-center gap-3 w-full md:w-1/4">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center shadow-inner">
                <FileText className="w-8 h-8" />
              </div>
              <p className="font-bold text-[#0F172A]">4. Apply & Track</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
