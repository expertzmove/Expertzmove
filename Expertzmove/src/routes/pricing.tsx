import { createFileRoute } from "@tanstack/react-router";
import { Check, ShieldCheck, Wallet, ArrowRight, MessageCircle } from "lucide-react";
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
      
      <main className="pt-32 pb-20 relative z-10 px-6 max-w-[1400px] mx-auto space-y-24">
        
        {/* SECTION 1: Trading Bot Pricing */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold">Trading Bot Pricing</h1>
            <p className="mt-6 text-lg text-muted-foreground">Automated, performance-based trading. We only earn when you earn.</p>
          </div>
          
          <div className="max-w-xl mx-auto">
            <div className="bento-card p-10 border-cyan-glow/30 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-cyan-glow shadow-[0_0_20px_var(--cyan-glow)]" />
              <div className="absolute top-4 right-4 px-3 py-1 bg-cyan-glow/10 text-cyan-glow text-xs font-bold rounded-full">PERFORMANCE-BASED</div>
              
              <h3 className="text-2xl font-bold font-display">Trading Bot</h3>
              <div className="mt-4 flex items-baseline gap-2 flex-wrap">
                <span className="text-5xl font-bold font-display">50/50</span>
                <span className="text-muted-foreground font-medium">Profit Split — settled weekly</span>
              </div>
              <p className="mt-4 text-muted-foreground text-sm">For traders who want a hands-off, automated strategy — no subscriptions, no VPS costs.</p>
              
              <ul className="mt-8 space-y-4">
                {[
                  "Minimum required capital: $2,000",
                  "Account must be opened via our PuPrime / Exness referral link",
                  "Suitable for Cent Accounts",
                  "No monthly subscription fees",
                  "No VPS charges",
                  "Performance-based model — we earn only when you earn"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-medium">
                    <Check className="w-5 h-5 text-cyan-glow shrink-0 mt-0.5" /> <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 p-4 rounded-xl bg-surface/50 border border-border text-xs text-muted-foreground leading-relaxed">
                Advance gas fee: $100 or 10% of your capital, whichever is lower — covers operational and execution costs. Unused amount fully refunded.
              </div>
              
              <button 
                onClick={() => alert("Open your account via our referral link, then share your MT5 Cent Account details with us to begin. Limited slots available.")}
                className="w-full mt-8 py-4 rounded-xl bg-foreground text-background font-bold hover:scale-[1.02] transition-transform shadow-xl"
              >
                Get Started
              </button>
              
              <p className="text-center text-xs text-muted-foreground mt-4 opacity-70">
                Trading involves risk. Profit-sharing and fees apply as outlined above.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full max-w-4xl mx-auto h-px bg-border/50" />

        {/* SECTION 2: Trading Tools Pricing */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold">Trading Tools Pricing</h2>
            <p className="mt-6 text-lg text-muted-foreground">For manual traders — simple, transparent plans.</p>
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
                    <Check className="w-5 h-5 text-foreground shrink-0" /> <span>{feature}</span>
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
                    <Check className="w-5 h-5 text-cyan-glow shrink-0" /> <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-10 py-4 rounded-xl bg-foreground text-background font-bold hover:scale-[1.02] transition-transform shadow-xl">
                Upgrade to Pro
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 3: Payment & Security */}
        <section className="pt-12">
          <div className="bento-card p-10 max-w-4xl mx-auto border-emerald-500/20 bg-emerald-500/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <ShieldCheck className="w-48 h-48 text-emerald-500" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Wallet className="w-8 h-8 text-emerald-500" />
                <h2 className="font-display text-3xl font-bold">Secure Payments</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-muted-foreground text-lg mb-6">
                    We accept payments securely via <strong className="text-foreground">USDT</strong>. 
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> 
                      <span><strong>Supported Networks:</strong> [Placeholder: TRC20 / ERC20]</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> 
                      <span><strong>Process:</strong> [Placeholder: Payment confirmed on-chain before delivery / Escrow available on request]</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> 
                      <span><strong>Verified Wallet:</strong> Always verify you are sending to our official address before confirming any transaction.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-background/50 border border-border p-6 rounded-2xl flex flex-col justify-center items-center text-center">
                  <MessageCircle className="w-10 h-10 text-cyan-glow mb-4" />
                  <h3 className="font-bold text-lg mb-2">Have questions before paying?</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Chat with our support team to verify details and discuss your needs.
                  </p>
                  <a href="https://t.me/Xonix_Support" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-bold hover:scale-105 transition-transform">
                    Chat on Telegram <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
