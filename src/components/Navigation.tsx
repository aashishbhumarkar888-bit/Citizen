"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Grid, MessageSquare, FileText, User } from 'lucide-react';
import clsx from 'clsx';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      <header className="hidden md:flex items-center justify-between px-8 py-4 bg-white border-b border-[#0F172A]/10 sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#F97316] flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="font-bold tracking-tight text-[#0F172A]">SEVASETU AI</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/app" className={clsx("text-sm font-medium", pathname === '/app' ? 'text-[#F97316]' : 'text-[#0F172A]/70 hover:text-[#F97316]')}>Home</Link>
          <Link href="/app/services" className={clsx("text-sm font-medium", pathname.includes('/services') ? 'text-[#F97316]' : 'text-[#0F172A]/70 hover:text-[#F97316]')}>Services</Link>
          <Link href="/app/applications" className={clsx("text-sm font-medium", pathname.includes('/applications') ? 'text-[#F97316]' : 'text-[#0F172A]/70 hover:text-[#F97316]')}>Applications</Link>
          <Link href="/app/grievances" className={clsx("text-sm font-medium", pathname.includes('/grievances') ? 'text-[#F97316]' : 'text-[#0F172A]/70 hover:text-[#F97316]')}>Grievances</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/app/ask" className="bg-[#F97316] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#ea580c] transition-colors">
            Ask SevaSetu
          </Link>
          <Link href="/admin" className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs" title="Operator Dashboard">OP</Link>
        </div>
      </header>
      
      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#0F172A]/10 flex items-center justify-around p-3 z-50 pb-safe">
        <Link href="/app" className={clsx("flex flex-col items-center gap-1", pathname === '/app' ? 'text-[#F97316]' : 'text-[#0F172A]/50')}>
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-medium">Home</span>
        </Link>
        <Link href="/app/services" className={clsx("flex flex-col items-center gap-1", pathname.includes('/services') ? 'text-[#F97316]' : 'text-[#0F172A]/50')}>
          <Grid className="w-5 h-5" />
          <span className="text-[10px] font-medium">Services</span>
        </Link>
        <Link href="/app/ask" className="flex flex-col items-center gap-1 -mt-5">
          <div className="w-12 h-12 rounded-full bg-[#F97316] text-white flex items-center justify-center shadow-lg border-4 border-[#FAFAF9]">
            <MessageSquare className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-medium text-[#F97316]">Ask</span>
        </Link>
        <Link href="/app/applications" className={clsx("flex flex-col items-center gap-1", pathname.includes('/applications') ? 'text-[#F97316]' : 'text-[#0F172A]/50')}>
          <FileText className="w-5 h-5" />
          <span className="text-[10px] font-medium">Apps</span>
        </Link>
        <Link href="/app/profile" className={clsx("flex flex-col items-center gap-1", pathname === '/app/profile' ? 'text-[#F97316]' : 'text-[#0F172A]/50')}>
          <User className="w-5 h-5" />
          <span className="text-[10px] font-medium">Profile</span>
        </Link>
      </nav>
    </>
  );
}
