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
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

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
    name: "Power Ai bot",
    icon: Radar,
    winRate: 58,
    edge: 0.29,
    drawdown: 5.4,
    focus: "Momentum breakout and volatility guard",
  },
  {
    name: "Custom MQL5 Bots",
    icon: FileCode2,
    winRate: 0,
    edge: 0,
    drawdown: 0,
    focus: "Bring your own strategy — we code it.",
  },
  {
    name: "Trend Analyzer",
    icon: BrainCircuit,
    winRate: 0,
    edge: 0,
    drawdown: 0,
    focus: "In development...",
  },
  {
    name: "Coming soon",
    icon: Zap,
    winRate: 0,
    edge: 0,
    drawdown: 0,
    focus: "In development...",
  },
];

const MANUAL_TOOLS = [
  {
    name: "Vertex Edge",
    icon: Activity,
    status: "Active",
    desc: "Real-time market alerts",
  },
  {
    name: "Risk Calculator",
    icon: Target,
    status: "In Development",
    desc: "Position sizing & risk guards",
  },
  {
    name: "Custom Indicators",
    icon: LineChart,
    status: "In Development",
    desc: "Proprietary TradingView scripts",
  },
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

// Generate a sequence of big candles that form a strong upward trend (growing towards right side)
const CANDLES = Array.from({ length: 25 }).map((_, i) => {
  // To make it an upward trend from left to right, the 'top' value must decrease as 'i' increases.
  // i goes from 0 to 24.
  // Let's make it start near 70% (bottom) and end near 15% (top).
  const progress = i / 24; // 0 to 1
  const baseTop = 70 - (progress * 55); // 70 down to 15
  
  // Add some local volatility (pullbacks)
  const isPullback = i % 4 === 3; // Every 4th candle is a red pullback
  const isGreen = !isPullback;
  
  const height = 15 + Math.random() * 20; // 15% to 35% height (big bodies)
  
  // If it's a pullback (red), it might drop a bit lower.
  const top = baseTop + (isPullback ? Math.random() * 10 : (Math.random() - 0.5) * 5);
  
  const wickTop = top - (5 + Math.random() * 10);
  const wickBottom = top + height + (5 + Math.random() * 10);
  
  return { isGreen, height, top, wickTop, wickBottom };
});

function CandleBackground() {
  const items = [...CANDLES, ...CANDLES];
  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.15] mix-blend-plus-lighter" 
      aria-hidden="true"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
      }}
    >
      <div className="flex gap-6 md:gap-12 h-full animate-candle-scroll w-max pr-6 md:pr-12 pt-20 blur-[2px]">
        {items.map((c, i) => (
          <div key={i} className="relative w-4 md:w-12 shrink-0 h-full flex flex-col justify-center">
            {/* Wick */}
            <div 
              className={`absolute left-1/2 -translate-x-1/2 w-0.5 md:w-1 rounded-full ${c.isGreen ? 'bg-emerald-500' : 'bg-rose-500'} opacity-70`} 
              style={{ top: `${c.wickTop}%`, bottom: `${100 - c.wickBottom}%` }} 
            />
            {/* Body */}
            <div 
              className={`absolute left-0 w-full rounded-sm md:rounded-md ${c.isGreen ? 'bg-emerald-500' : 'bg-rose-500'} shadow-[0_0_30px_currentColor] opacity-100`} 
              style={{ top: `${c.top}%`, height: `${c.height}%` }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------ Page ------------------ */

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-cyan-glow/30 selection:text-white">
      <Nav />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <Hero />
      <BentoSection />
      <Faq />
      <Footer />
    </div>
  );
}

/* ------------------ Hero ------------------ */

function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-20 flex flex-col items-center text-center px-6 overflow-hidden">
      <CandleBackground />
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
            href="/pricing"
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

        {/* Bento Item 2: Automated Bots */}
        <div className="bento-card bento-card-hover col-span-12 md:col-span-6 lg:col-span-4 p-8 flex flex-col justify-between" id="strategies">
          <div>
            <h3 className="font-display text-2xl font-bold">Automated Bots</h3>
            <p className="text-muted-foreground mt-2 mb-6">Choose from battle-tested presets or build your own rules engine.</p>
            <div className="space-y-3">
              {STRATEGY_PRESETS.map((p, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-surface/30 hover:border-cyan-glow/30 transition-colors cursor-pointer group">
                  <div className="w-10 h-10 rounded-lg bg-cyan-glow/10 border border-cyan-glow/20 grid place-items-center group-hover:bg-cyan-glow/20 transition-colors">
                    <p.icon className="w-5 h-5 text-cyan-glow" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{p.name}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {p.name === "Custom MQL5 Bots" ? "Built for you" : p.winRate > 0 ? `${p.winRate}% Win Rate` : "In Development"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bento Item 3: Manual Tools */}
        <div className="bento-card bento-card-hover col-span-12 md:col-span-6 lg:col-span-4 p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <CandlestickChart className="w-5 h-5 text-cyan-glow" />
              <h3 className="font-display text-2xl font-bold">Manual Tools</h3>
            </div>
            <p className="text-muted-foreground mt-2 mb-6">Everything you need to execute trades with precision and edge.</p>
            <div className="space-y-3">
              {MANUAL_TOOLS.map((t, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-surface/30 hover:border-cyan-glow/30 transition-colors cursor-pointer group">
                  <div className="w-10 h-10 rounded-lg bg-cyan-glow/10 border border-cyan-glow/20 grid place-items-center group-hover:bg-cyan-glow/20 transition-colors">
                    <t.icon className="w-5 h-5 text-cyan-glow" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{t.name}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {t.status === "Active" ? t.desc : "In Development"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
