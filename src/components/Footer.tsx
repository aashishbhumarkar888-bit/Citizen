export default function Footer() {
  return (
    <footer className="w-full py-6 mt-12 border-t border-foreground/10 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/60">
          © {new Date().getFullYear()} CityVoice Community Grievance System.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">Contact Support</a>
        </div>
      </div>
    </footer>
  );
}
