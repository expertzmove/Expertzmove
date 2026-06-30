import { Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link to="/" className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
            <div className="bg-foreground text-background font-display font-bold text-sm px-1.5 py-0.5 rounded-sm">EM</div>
            <span className="font-display font-bold text-sm tracking-widest uppercase">Expertz Move</span>
          </Link>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Expertz Move. All rights reserved.</p>
        </div>
        
        <div className="flex items-center gap-6 text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="hover:text-foreground transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="hover:text-foreground transition-colors"><Youtube className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
}
