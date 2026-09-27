import Link from 'next/link';
import { Mic, FileText, CheckCircle2, Search, Upload, Info } from 'lucide-react';

export default function AppHome() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] mb-4">What do you need help with?</h1>
        <p className="text-lg text-[#0F172A]/70 mb-8 max-w-xl mx-auto">Tell us in your own words. SevaSetu will guide you to the right public service.</p>
        
        <Link href="/app/ask" className="inline-flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-xl border-4 border-[#FAFAF9] text-[#F97316] hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
          <div className="relative">
             <Mic className="w-12 h-12 md:w-16 md:h-16 group-hover:animate-pulse" />
             <div className="absolute inset-0 bg-[#F97316]/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <span className="font-bold mt-2 text-[#0F172A]">Tap to Speak</span>
        </Link>
        <div className="flex items-center justify-center gap-4 mt-6 text-sm font-medium text-[#0F172A]/60">
          <Link href="/app/ask" className="hover:text-[#F97316] px-4 py-2 rounded-full border border-[#0F172A]/10 bg-white">Type</Link>
          <Link href="/app/documents/upload" className="hover:text-[#F97316] px-4 py-2 rounded-full border border-[#0F172A]/10 bg-white">Upload a document</Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-sm font-bold text-[#0F172A]/50 tracking-wider uppercase mb-4">Continue Where You Left Off</h2>
        <Link href="/app/applications/DEMO-123" className="block bg-white rounded-2xl p-5 border border-[#0F172A]/10 shadow-sm hover:border-[#F97316]/50 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-bold text-[#0F172A] text-lg">Post-Matric Scholarship</h3>
              <p className="text-sm text-[#0F172A]/60">Application preparation</p>
            </div>
            <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg">Draft</span>
          </div>
          <div className="w-full bg-[#FAFAF9] h-2 rounded-full overflow-hidden">
            <div className="bg-[#F97316] h-full" style={{ width: '80%' }}></div>
          </div>
          <p className="text-xs text-[#0F172A]/50 mt-2 text-right">4 of 5 steps complete</p>
        </Link>
      </section>

      <section className="mb-12">
        <h2 className="text-sm font-bold text-[#0F172A]/50 tracking-wider uppercase mb-4">Quick Help</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Search, label: 'Find a Service', href: '/app/services', color: 'text-blue-600', bg: 'bg-blue-50' },
            { icon: CheckCircle2, label: 'Check Eligibility', href: '/app/eligibility', color: 'text-green-600', bg: 'bg-green-50' },
            { icon: Upload, label: 'Upload Documents', href: '/app/documents', color: 'text-purple-600', bg: 'bg-purple-50' },
            { icon: Info, label: 'Track Application', href: '/app/applications', color: 'text-orange-600', bg: 'bg-orange-50' }
          ].map(item => (
            <Link key={item.label} href={item.href} className="flex flex-col items-center text-center p-4 bg-white rounded-2xl border border-[#0F172A]/5 hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${item.bg} ${item.color}`}>
                <item.icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium text-[#0F172A]">{item.label}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
