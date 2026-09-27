import Link from "next/link";
import { getCitizenGrievances } from "@/actions/grievances";
import { Grievance } from "@prisma/client";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const grievances: Grievance[] = await getCitizenGrievances("citizen@example.com"); // Hardcoded to seed citizen for now

  return (
    <div className="flex-1 flex flex-col p-8 max-w-5xl mx-auto w-full">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">My Dashboard</h1>
          <p className="text-foreground/70">Track and manage your community reports.</p>
        </div>
        <Link href="/report" className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 hover:shadow-lg transition-all shadow-md flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
          Report Issue
        </Link>
      </div>

      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4 border-b border-foreground/10 pb-2">Recent Submissions</h2>
        
        {grievances.length === 0 ? (
          <div className="py-12 text-center text-foreground/50">
            You haven&apos;t reported any issues yet.
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {grievances.map((g) => (
              <div key={g.id} className="flex justify-between items-center p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                <div>
                  <h3 className="font-medium text-lg">{g.title}</h3>
                  <p className="text-sm text-foreground/60">ID: {g.id.substring(0,8)} • {g.createdAt.toLocaleDateString()}</p>
                </div>
                <div className="flex items-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    g.status === "CLOSED" ? "bg-accent/20 text-accent" : "bg-primary/20 text-primary"
                  }`}>
                    {g.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
