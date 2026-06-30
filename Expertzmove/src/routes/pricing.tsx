import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Expertz Move" },
      { name: "description", content: "Simple, transparent pricing for Expertz Move AI trading toolkit." },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-cyan-glow/30 selection:text-white">
      <Nav />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      
      <main className="pt-32 pb-20 relative z-10">
        <section className="py-20 px-6 max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-display text-5xl md:text-6xl font-bold">Simple, transparent pricing.</h1>
            <p className="mt-6 text-lg text-muted-foreground">Start for free, upgrade when you need more power.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bento-card p-10">
              <h3 className="text-2xl font-bold font-display">Starter</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-bold font-display">$0</span>
                <span className="text-muted-foreground font-medium">/ forever</span>
              </div>
              <p className="mt-4 text-muted-foreground text-sm">Perfect for testing the waters and learning the ropes.</p>
              <ul className="mt-8 space-y-4">
                {["1 active bot", "Paper trading", "Daily recap emails", "Community access"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <Check className="w-5 h-5 text-foreground" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-10 py-4 rounded-xl border border-border font-bold hover:bg-surface transition-colors">
                Get Started
              </button>
            </div>

            <div className="bento-card p-10 border-cyan-glow/30 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-cyan-glow shadow-[0_0_20px_var(--cyan-glow)]" />
              <div className="absolute top-4 right-4 px-3 py-1 bg-cyan-glow/10 text-cyan-glow text-xs font-bold rounded-full">MOST POPULAR</div>
              <h3 className="text-2xl font-bold font-display">Pro</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-bold font-display">$49</span>
                <span className="text-muted-foreground font-medium">/ month</span>
              </div>
              <p className="mt-4 text-muted-foreground text-sm">For serious traders who want to automate their edge.</p>
              <ul className="mt-8 space-y-4">
                {["Unlimited bots", "Live exchange trading", "Real-time SMS alerts", "Priority support", "Advanced Pine Script Webhooks"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <Check className="w-5 h-5 text-cyan-glow" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-10 py-4 rounded-xl bg-foreground text-background font-bold hover:scale-[1.02] transition-transform shadow-xl">
                Upgrade to Pro
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
