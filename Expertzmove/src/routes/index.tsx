import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowRight,
  Bell,
  Bot,
  BrainCircuit,
  CandlestickChart,
  Check,
  Coffee,
  FileCode2,
  Flame,
  Gauge,
  Instagram,
  LineChart,
  LockKeyhole,
  MessageCircle,
  Play,
  Plug,
  Radar,
  Rocket,
  Send,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Target,
  TrendingUp,
  Trophy,
  Twitter,
  Wallet,
  WandSparkles,
  Youtube,
  Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Expertz Move — Trading, on autopilot" },
      {
        name: "description",
        content:
          "A small team building an AI trading toolkit that handles the screens so you don't have to. Daily top-gainer updates, live charts, bots that behave.",
      },
      { property: "og:title", content: "Expertz Move — Trading, on autopilot" },
      {
        property: "og:description",
        content:
          "An AI trading toolkit with daily top-gainer updates and bots built by traders, for traders.",
      },
    ],
  }),
  component: Landing,
});

/* ------------------ Hooks ------------------ */

function useInView<T extends HTMLElement>(once = true) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) setInView(false);
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);
  return { ref, inView };
}

function useCountUp(target: number, start: boolean, duration = 1800) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return val;
}

/* ------------------ Reveal wrapper ------------------ */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ------------------ Data ------------------ */

const TICKERS = [
  { s: "BTC/USD", p: "67,432.10", c: "+2.41%", up: true },
  { s: "ETH/USD", p: "3,548.22", c: "+1.87%", up: true },
  { s: "SOL/USD", p: "184.55", c: "-0.62%", up: false },
  { s: "AAPL", p: "228.91", c: "+0.94%", up: true },
  { s: "TSLA", p: "248.30", c: "-1.12%", up: false },
  { s: "SPY", p: "563.74", c: "+0.38%", up: true },
  { s: "NVDA", p: "134.05", c: "+3.22%", up: true },
];

const STATS = [
  { label: "Active Members", value: 12400, suffix: "+", decimals: 0 },
  { label: "System Uptime", value: 99.2, suffix: "%", decimals: 1 },
  { label: "Pairs Watched", value: 1850, suffix: "", decimals: 0 },
  { label: "Coffees Consumed", value: 47, suffix: "", decimals: 0 },
];

const STRATEGY_PRESETS = [
  {
    name: "Balanced AI",
    icon: BrainCircuit,
    winRate: 63,
    edge: 0.34,
    drawdown: 7.8,
    focus: "Multi-timeframe trend + news filter",
  },
  {
    name: "Grid Hunter",
    icon: Radar,
    winRate: 58,
    edge: 0.29,
    drawdown: 5.4,
    focus: "Sideways ranges with volatility guard",
  },
  {
    name: "Breakout Scout",
    icon: Zap,
    winRate: 47,
    edge: 0.52,
    drawdown: 10.6,
    focus: "Volume expansion and breakout retests",
  },
];

const SIGNAL_FEED = [
  { time: "09:15", pair: "BTCUSDT", action: "AI trend score flipped bullish", tone: "green" },
  { time: "10:40", pair: "NVDA", action: "TradingView overlay printed a pullback zone", tone: "cyan" },
  { time: "12:05", pair: "ETHUSDT", action: "Risk lock paused new entries after volatility spike", tone: "red" },
  { time: "14:25", pair: "SOLUSDT", action: "Breakout Scout moved stop to breakeven", tone: "green" },
];

const FAQ = [
  {
    q: "Do I need to know how to trade?",
    a: "Nope. Most people start with our AI mode or a preset and tweak from there. If you do know what you're doing, the builder won't get in your way.",
  },
  {
    q: "Is my money actually safe?",
    a: "Your funds stay on your exchange. We only ask for trade-only API keys — withdrawal permissions are off the table. You can revoke our access anytime from your exchange settings.",
  },
  {
    q: "What if the bot has a bad day?",
    a: "It will. Markets do. We default to conservative risk caps and a daily loss limit, and the recap email is upfront when things didn't go well. No hiding the losers.",
  },
];

/* ------------------ Page ------------------ */

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-cyan-glow/30 selection:text-white">
      <Nav />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <Hero />
      <BentoSection />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
}

/* ------------------ Nav ------------------ */

function Nav() {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[800px]">
      <header className="backdrop-blur-3xl bg-surface/60 border border-border/50 shadow-2xl rounded-full px-4 md:px-6 h-14 flex items-center justify-between transition-all duration-300">
        <a href="#top" className="flex items-center gap-2 hover:opacity-80 transition">
          <div className="bg-foreground text-background font-display font-bold text-base px-2 py-0.5 rounded-sm flex items-center justify-center leading-none tracking-tighter">
            EM
          </div>
          <div className="hidden sm:flex flex-col justify-center text-foreground font-display font-semibold text-[9px] leading-tight tracking-[0.2em] uppercase">
            <span>Expertz</span>
            <span>Move</span>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#platform" className="hover:text-foreground transition-colors">
            Platform
          </a>
          <a href="#strategies" className="hover:text-foreground transition-colors">
            Strategies
          </a>
          <a href="#pricing" className="hover:text-foreground transition-colors">
            Pricing
          </a>
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
          <a
            href="#pricing"
            className="text-xs md:text-sm font-semibold px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-foreground text-background hover:scale-105 transition-transform"
          >
            Start Trading
          </a>
        </div>
      </header>
    </div>
  );
}

/* ------------------ Hero ------------------ */

function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-20 flex flex-col items-center text-center px-6">
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-glow/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
      
      <Reveal delay={0}>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/50 text-xs font-medium text-muted-foreground mb-8 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow shadow-[0_0_8px_var(--cyan-glow)]" />
          Expertz Move v2 is now live
        </div>
      </Reveal>

      <Reveal delay={100}>
        <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-bold leading-[1] md:leading-[0.9] tracking-tight max-w-5xl mx-auto">
          Trading, <span className="text-muted-foreground">on autopilot.</span>
        </h1>
      </Reveal>

      <Reveal delay={200}>
        <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          The most advanced AI trading toolkit built for modern markets. 
          Connect your exchange, pick a strategy, and step away from the charts.
        </p>
      </Reveal>

      <Reveal delay={300}>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-semibold hover:scale-105 transition-transform"
          >
            Deploy Your First Bot
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </a>
          <a
            href="#platform"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border bg-surface/30 backdrop-blur-md hover:bg-surface transition-colors font-semibold"
          >
            Explore Platform
          </a>
        </div>
      </Reveal>

      <Reveal delay={400} className="w-full max-w-[1400px] mx-auto mt-20">
        <Ticker />
      </Reveal>
    </section>
  );
}

function Ticker() {
  const items = [...TICKERS, ...TICKERS, ...TICKERS];
  return (
    <div className="border border-border/50 bg-surface/30 backdrop-blur-md rounded-2xl overflow-hidden py-4 shadow-xl">
      <div className="flex animate-ticker whitespace-nowrap">
        {items.map((t, i) => (
          <div key={i} className="flex items-center gap-4 px-8 font-mono text-sm font-medium">
            <span className="text-muted-foreground">{t.s}</span>
            <span className="text-foreground">{t.p}</span>
            <span className={t.up ? "text-cyan-glow" : "text-destructive"}>{t.c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------ Bento Grid Section ------------------ */

function BentoSection() {
  return (
    <section id="platform" className="py-12 px-6 max-w-[1400px] mx-auto">
      <div className="bento-grid">
        
        {/* Bento Item 1: Massive Interactive Chart */}
        <div className="bento-card bento-card-hover col-span-12 lg:col-span-8 row-span-2 min-h-[600px] flex flex-col">
          <div className="p-8 pb-4 flex justify-between items-start z-10">
            <div>
              <h3 className="font-display text-2xl font-bold">Pro Charting</h3>
              <p className="text-muted-foreground mt-1">Live market data, overlaid with our AI signals.</p>
            </div>
            <div className="px-3 py-1 rounded-full bg-cyan-glow/10 text-cyan-glow text-xs font-bold uppercase tracking-wider border border-cyan-glow/20">
              Live
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <TradingViewWidget />
          </div>
        </div>

        {/* Bento Item 2: Strategy Lab Mini */}
        <div className="bento-card bento-card-hover col-span-12 md:col-span-6 lg:col-span-4 p-8 flex flex-col justify-between" id="strategies">
          <div>
            <h3 className="font-display text-2xl font-bold">Strategy Lab</h3>
            <p className="text-muted-foreground mt-2 mb-6">Choose from battle-tested presets or build your own rules engine.</p>
            <div className="space-y-3">
              {STRATEGY_PRESETS.map((p, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-surface/30 hover:border-cyan-glow/30 transition-colors cursor-pointer group">
                  <div className="w-10 h-10 rounded-lg bg-cyan-glow/10 border border-cyan-glow/20 grid place-items-center group-hover:bg-cyan-glow/20 transition-colors">
                    <p.icon className="w-5 h-5 text-cyan-glow" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{p.name}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{p.winRate}% Win Rate</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bento Item 3: Live Signal Feed */}
        <div className="bento-card bento-card-hover col-span-12 md:col-span-6 lg:col-span-4 p-8">
          <div className="flex items-center gap-2 mb-6">
            <Activity className="w-5 h-5 text-cyan-glow animate-pulse" />
            <h3 className="font-display text-2xl font-bold">Live Signals</h3>
          </div>
          <div className="relative pl-4 space-y-6 before:absolute before:inset-y-0 before:left-[7px] before:w-px before:bg-border">
            {SIGNAL_FEED.map((feed, i) => (
              <div key={i} className="relative pl-6">
                <span className={`absolute left-[-13px] top-1 w-3 h-3 rounded-full border-2 border-background ${feed.tone === "green" ? "bg-cyan-glow" : feed.tone === "cyan" ? "bg-foreground" : "bg-destructive"}`} />
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-1">
                  <span>{feed.time}</span>
                  <span className="text-foreground font-bold">{feed.pair}</span>
                </div>
                <p className="text-sm">{feed.action}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bento Item 4: Stats */}
        <div className="bento-card bento-card-hover col-span-12 lg:col-span-8 p-8 grid grid-cols-2 gap-6 bg-surface-elevated md:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={i} className="flex flex-col justify-center">
              <Reveal delay={i * 100}>
                <div className="font-display text-4xl md:text-5xl font-bold text-foreground">
                  <StatCounter stat={s} />
                </div>
                <p className="text-sm font-medium text-muted-foreground mt-2">{s.label}</p>
              </Reveal>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function StatCounter({ stat }: { stat: (typeof STATS)[number] }) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const val = useCountUp(stat.value, inView);
  const formatted = stat.value >= 1000 ? Math.round(val).toLocaleString() : val.toFixed(stat.decimals);
  
  return (
    <span ref={ref}>
      {formatted}{stat.suffix}
    </span>
  );
}

/* ------------------ TradingView Widget ------------------ */

function TradingViewWidget() {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = "";
    
    const container = document.createElement("div");
    container.className = "tradingview-widget-container__widget";
    container.style.height = "100%";
    container.style.width = "100%";
    ref.current.appendChild(container);
    
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "BINANCE:BTCUSDT",
      interval: "60",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      backgroundColor: "rgba(18, 18, 18, 0)",
      gridColor: "rgba(255, 255, 255, 0.05)",
      hide_top_toolbar: true,
      hide_legend: false,
      save_image: false,
      calendar: false,
      hide_volume: true,
      support_host: "https://www.tradingview.com"
    });
    ref.current.appendChild(script);
  }, []);

  return (
    <div className="absolute inset-0 px-8 pb-8 pt-20">
      <div className="tradingview-widget-container w-full h-full rounded-xl overflow-hidden border border-border/50 bg-black/20" ref={ref} />
    </div>
  );
}

/* ------------------ Pricing ------------------ */

function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 max-w-[1400px] mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold">Simple, transparent pricing.</h2>
        <p className="mt-4 text-lg text-muted-foreground">Start for free, upgrade when you need more power.</p>
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
  );
}

/* ------------------ FAQ ------------------ */

function Faq() {
  return (
    <section id="faq" className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="font-display text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {FAQ.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border">
            <AccordionTrigger className="text-left font-medium text-lg py-6 hover:text-cyan-glow transition-colors">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

/* ------------------ Footer ------------------ */

function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
            <div className="bg-foreground text-background font-display font-bold text-sm px-1.5 py-0.5 rounded-sm">EM</div>
            <span className="font-display font-bold text-sm tracking-widest uppercase">Expertz Move</span>
          </div>
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
