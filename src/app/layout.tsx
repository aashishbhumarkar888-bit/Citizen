import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Citizen Grievance System",
  description: "Track and report critical community issues.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <header className="sticky top-0 z-50 glass px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            CityVoice
          </Link>
          <nav className="flex gap-4">
            <Link href="/login" className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
              Citizen Login
            </Link>
            <Link href="/authority/login" className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:scale-105">
              Authority Portal
            </Link>
          </nav>
        </header>
        <main className="flex-1 flex flex-col relative">
          {/* Subtle background decoration */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-[40%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-3xl" />
          </div>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
