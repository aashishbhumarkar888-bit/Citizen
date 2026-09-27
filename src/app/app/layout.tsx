import Navigation from '@/components/Navigation';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF9]">
      <Navigation />
      <div className="flex-1 pb-20 md:pb-0">
        {children}
      </div>
    </div>
  );
}
