import Link from "next/link";

export default function AuthorityLogin() {
  return (
    <div className="flex-1 flex items-center justify-center p-6 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] dark:bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
      <div className="glass w-full max-w-md p-8 rounded-2xl relative overflow-hidden shadow-2xl border-t-4 border-t-accent">
        <h2 className="text-3xl font-bold mb-2 text-accent">Authority Portal</h2>
        <p className="text-foreground/70 mb-8 text-sm">Secure access for municipal and city officials.</p>
        
        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Official Email or Badge ID</label>
            <input 
              type="text" 
              className="px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              placeholder="officer@city.gov"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Access PIN</label>
            <input 
              type="password" 
              className="px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              placeholder="••••••••"
            />
          </div>
          
          <button type="button" className="mt-2 w-full py-3 bg-accent text-white rounded-xl font-semibold hover:bg-accent/90 hover:shadow-lg transition-all active:scale-[0.98]">
            Authorize Access
          </button>
        </form>
        
        <div className="mt-6 pt-6 border-t border-foreground/10 text-center">
           <Link href="/login" className="text-sm text-foreground/50 hover:text-foreground/80 transition-colors">
            Return to Citizen Portal
          </Link>
        </div>
      </div>
    </div>
  );
}
