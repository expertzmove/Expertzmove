import { Send } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[800px]">
      <header className="backdrop-blur-3xl bg-surface/60 border border-border/50 shadow-2xl rounded-full px-4 md:px-6 h-14 flex items-center justify-between transition-all duration-300">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <div className="bg-foreground text-background font-display font-bold text-base px-2 py-0.5 rounded-sm flex items-center justify-center leading-none tracking-tighter">
            EM
          </div>
          <div className="hidden sm:flex flex-col justify-center text-foreground font-display font-semibold text-[9px] leading-tight tracking-[0.2em] uppercase">
            <span>Expertz</span>
            <span>Move</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="/#platform" className="hover:text-foreground transition-colors">
            Platform
          </a>
          <Link to="/tools-and-bots" className="hover:text-foreground transition-colors">
            Tools and Bots
          </Link>
          <Link to="/pricing" className="hover:text-foreground transition-colors">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-3 md:gap-5">
          <a
            href="https://t.me/Xonix_Support"
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <Send className="w-4 h-4" />
          </a>
          <Link
            to="/pricing"
            className="text-xs md:text-sm font-semibold px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-foreground text-background hover:scale-105 transition-transform"
          >
            Start Trading
          </Link>
        </div>
      </header>
    </div>
  );
}
