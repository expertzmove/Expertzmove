import { createFileRoute } from "@tanstack/react-router";
import { Activity, BrainCircuit, CandlestickChart, LineChart, Radar, Target, Zap, Bot, Wrench } from "lucide-react";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/tools-and-bots")({
  head: () => ({
    meta: [
      { title: "Tools and Bots — Expertz Move" },
      { name: "description", content: "Explore our suite of automated bots and manual trading tools." },
    ],
  }),
  component: ToolsAndBotsPage,
});

const BOTS = [
  {
    name: "Power Ai bot",
    icon: Radar,
    status: "Live",
    winRate: 58,
    edge: 0.29,
    desc: "Momentum breakout and volatility guard. Specifically built for high-volume breakout setups with tight stops.",
  },
  {
    name: "Trend Analyzer",
    icon: BrainCircuit,
    status: "Coming soon",
    winRate: 0,
    edge: 0,
    desc: "Multi-timeframe trend + news filter. Automatically avoids high-impact news events while riding macro trends.",
  },
  {
    name: "Grid Hunter",
    icon: Zap,
    status: "Coming soon",
    winRate: 0,
    edge: 0,
    desc: "Sideways ranges with volatility guard. Perfect for range-bound markets, profiting off micro-fluctuations.",
  },
];

const TOOLS = [
  {
    name: "Vertex Edge",
    icon: Activity,
    status: "Live",
    desc: "Real-time market alerts directly in your dashboard or via webhook, powered by our custom ML models.",
  },
  {
    name: "TradingView Pro Integration",
    icon: CandlestickChart,
    status: "Coming soon",
    desc: "Advanced charting & indicators directly injected into the platform, allowing seamless manual execution.",
  },
  {
    name: "Risk Calculator",
    icon: Target,
    status: "Coming soon",
    desc: "Position sizing & risk guards. Input your account size and risk tolerance, and we calculate the exact lot sizes.",
  },
  {
    name: "Custom Indicators",
    icon: LineChart,
    status: "Coming soon",
    desc: "Proprietary TradingView scripts available exclusively to Expertz Move members.",
  },
];

function ToolsAndBotsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-cyan-glow/30 selection:text-white">
      <Nav />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      
      <main className="pt-32 pb-20 relative z-10 px-6 max-w-[1200px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="font-display text-5xl md:text-6xl font-bold">Tools & Bots</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Explore our cutting-edge suite of algorithmic trading bots and precision manual tools. 
            See what's live and what's currently in the laboratory.
          </p>
        </div>

        {/* Bots Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Bot className="w-8 h-8 text-cyan-glow" />
            <h2 className="font-display text-3xl font-bold">Automated Bots</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BOTS.map((bot, i) => (
              <div key={i} className={`bento-card p-6 flex flex-col ${bot.status === 'Live' ? 'border-cyan-glow/20 shadow-[0_0_15px_rgba(var(--color-cyan-glow),0.1)]' : 'opacity-70'}`}>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-glow/10 border border-cyan-glow/20 grid place-items-center">
                    <bot.icon className="w-6 h-6 text-cyan-glow" />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border ${
                    bot.status === 'Live' ? 'bg-cyan-glow/10 text-cyan-glow border-cyan-glow/20' : 'bg-surface text-muted-foreground border-border'
                  }`}>
                    {bot.status}
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{bot.name}</h3>
                <p className="text-muted-foreground text-sm flex-1">{bot.desc}</p>
                
                <div className="mt-6 pt-6 border-t border-border/50 flex justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Win Rate</p>
                    <p className="font-mono font-bold">{bot.status === 'Live' ? `${bot.winRate}%` : '--'}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Profit Edge</p>
                    <p className="font-mono font-bold">{bot.status === 'Live' ? `${bot.edge}` : '--'}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Wrench className="w-8 h-8 text-emerald-500" />
            <h2 className="font-display text-3xl font-bold">Manual Tools</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {TOOLS.map((tool, i) => (
              <div key={i} className={`bento-card p-6 flex flex-col sm:flex-row gap-6 items-start ${tool.status === 'Live' ? 'border-emerald-500/20' : 'opacity-70'}`}>
                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 grid place-items-center shrink-0">
                  <tool.icon className="w-7 h-7 text-emerald-500" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="font-display text-xl font-bold">{tool.name}</h3>
                    <div className={`self-start sm:self-auto px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border ${
                      tool.status === 'Live' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 'bg-surface text-muted-foreground border-border'
                    }`}>
                      {tool.status}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
