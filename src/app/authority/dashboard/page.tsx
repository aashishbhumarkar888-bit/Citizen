"use client";

import { useState, useEffect, useTransition } from "react";
import { getAllGrievances, updateGrievanceStatus } from "@/actions/grievances";
import { GrievanceStatus } from "@prisma/client";

type Grievance = {
  id: string;
  title: string;
  status: string;
  createdAt: Date;
  date?: string;
  category?: string;
  location?: string;
};

export default function AuthorityDashboard() {
  const [grievances, setGrievances] = useState<Grievance[]>([]);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [, startTransition] = useTransition();

  // Simulate fetching on mount for client component
  useEffect(() => {
    startTransition(async () => {
      const data = await getAllGrievances();
      setGrievances(data as unknown as Grievance[]);
    });
  }, []);

  const handleStatusChange = async (id: string, newStatus: "Open" | "In Progress" | "Resolved") => {
    setLoadingId(id);
    try {
      await updateGrievanceStatus(id, newStatus as unknown as GrievanceStatus);
      setGrievances((prev) => 
        prev.map((g) => g.id === id ? { ...g, status: newStatus } : g)
      );
    } catch (error) {
      console.error("Failed to update status", error);
    } finally {
      setLoadingId(null);
    }
  };

  const openCount = grievances.filter(g => g.status === "Open").length;
  const progressCount = grievances.filter(g => g.status === "In Progress").length;
  const resolvedCount = grievances.filter(g => g.status === "Resolved").length;

  return (
    <div className="flex-1 flex flex-col p-8 max-w-7xl mx-auto w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-accent">Authority Command Center</h1>
        <p className="text-foreground/70">Overview of all community reported issues.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="glass p-6 rounded-2xl border-t-4 border-t-red-500">
          <h3 className="text-lg font-medium text-foreground/70">Open Issues</h3>
          <p className="text-4xl font-bold mt-2">{openCount}</p>
        </div>
        <div className="glass p-6 rounded-2xl border-t-4 border-t-yellow-500">
          <h3 className="text-lg font-medium text-foreground/70">In Progress</h3>
          <p className="text-4xl font-bold mt-2">{progressCount}</p>
        </div>
        <div className="glass p-6 rounded-2xl border-t-4 border-t-accent">
          <h3 className="text-lg font-medium text-foreground/70">Resolved</h3>
          <p className="text-4xl font-bold mt-2">{resolvedCount}</p>
        </div>
      </div>

      <div className="glass rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-foreground/10">
          <h2 className="text-xl font-semibold">Active Grievances</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-black/5 dark:bg-white/5">
                <th className="p-4 font-medium text-sm text-foreground/70">ID & Details</th>
                <th className="p-4 font-medium text-sm text-foreground/70">Category</th>
                <th className="p-4 font-medium text-sm text-foreground/70">Location</th>
                <th className="p-4 font-medium text-sm text-foreground/70">Status</th>
                <th className="p-4 font-medium text-sm text-foreground/70">Action</th>
              </tr>
            </thead>
            <tbody>
              {grievances.map((g) => (
                <tr key={g.id} className="border-b border-foreground/5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                  <td className="p-4">
                    <p className="font-semibold">{g.title}</p>
                    <p className="text-xs text-foreground/50">{g.id} • {g.date}</p>
                  </td>
                  <td className="p-4 text-sm">{g.category}</td>
                  <td className="p-4 text-sm text-foreground/80">{g.location}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      g.status === "Resolved" ? "bg-accent/20 text-accent" :
                      g.status === "In Progress" ? "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400" :
                      "bg-red-500/20 text-red-600 dark:text-red-400"
                    }`}>
                      {g.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <select 
                      disabled={loadingId === g.id}
                      value={g.status}
                      onChange={(e) => handleStatusChange(g.id, e.target.value as "Open" | "In Progress" | "Resolved")}
                      className="px-3 py-2 text-sm rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:opacity-50"
                    >
                      <option value="Open">Open</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Resolved">Resolved</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
