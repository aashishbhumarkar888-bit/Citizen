"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { createGrievance } from "@/actions/grievances";

export default function ReportIssue() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "Infrastructure",
    description: "",
    location: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await createGrievance({
        title: formData.title,
        description: formData.description,
        location: formData.location,
        categoryName: formData.category,
        citizenEmail: "citizen@example.com" // mock auth
      });
      
      setSuccess(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <div className="w-20 h-20 bg-accent/20 text-accent rounded-full flex items-center justify-center mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h2 className="text-3xl font-bold mb-2">Issue Reported Successfully!</h2>
        <p className="text-foreground/70">Thank you for helping improve our community. Redirecting to your dashboard...</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col p-8 max-w-3xl mx-auto w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Report an Issue</h1>
        <p className="text-foreground/70">Provide details about the problem to help authorities resolve it quickly.</p>
      </div>

      <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Issue Title</label>
          <input 
            type="text" required
            value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})}
            className="px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            placeholder="e.g., Deep pothole on 5th Ave"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Category</label>
          <select 
            value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}
            className="px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          >
            <option value="Infrastructure">Infrastructure (Roads, Bridges)</option>
            <option value="Utilities">Utilities (Water, Power)</option>
            <option value="Sanitation">Sanitation & Waste</option>
            <option value="Public Safety">Public Safety</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Location</label>
          <input 
            type="text" required
            value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})}
            className="px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            placeholder="Address or nearby landmark"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Description</label>
          <textarea 
            required rows={4}
            value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})}
            className="px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
            placeholder="Provide any additional details..."
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="mt-4 w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-all disabled:opacity-70 flex justify-center items-center gap-2 shadow-lg"
        >
          {loading ? (
            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
          ) : "Submit Report"}
        </button>
      </form>
    </div>
  );
}
