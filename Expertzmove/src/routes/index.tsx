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
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
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
  { s: "BNB/USD", p: "612.80", c: "+0.71%", up: true },
  { s: "DOGE/USD", p: "0.1632", c: "-2.04%", up: false },
  { s: "MSFT", p: "432.18", c: "+0.55%", up: true },
];

const STATS = [
  { label: "Members", value: 12400, suffix: "+", decimals: 0 },
  { label: "Avg. uptime", value: 99.2, suffix: "%", decimals: 1 },
  { label: "Pairs watched", value: 1850, suffix: "", decimals: 0 },
  { label: "Coffees this week", value: 47, suffix: "", decimals: 0 },
];

const STEPS = [
  {
    icon: Plug,
    title: "Plug in your exchange",
    desc: "Connect Binance, Coinbase, Bybit — whichever one you already use. Read/trade keys only, never withdraw.",
  },
  {
    icon: SlidersHorizontal,
    title: "Pick a style that fits you",
    desc: "DCA if you're patient. Grid if you like sideways markets. AI mode if you'd rather not think about it tonight.",
  },
  {
    icon: Rocket,
    title: "Let it run. Check in when you want",
    desc: "We'll send a daily recap. No constant pings, no fake urgency — just what actually happened.",
  },
];

const FEATURES = [
  {
    icon: Bot,
    title: "Bots that behave",
    desc: "No mystery black box. You see every entry, exit, and the reason behind it.",
  },
  {
    icon: LineChart,
    title: "Charts you'll actually use",
    desc: "Full TradingView under the hood, with our signals layered on so you don't squint.",
  },
  {
    icon: Bell,
    title: "Alerts without the noise",
    desc: "Email, Telegram, push — only when something genuinely matters. Promise.",
  },
  {
    icon: Settings2,
    title: "No-code strategy builder",
    desc: "If you can describe a trade out loud, you can build it. Backtest before you risk a cent.",
  },
  {
    icon: ShieldCheck,
    title: "Risk rails, on by default",
    desc: "Stop-loss, trailing stops, daily loss limits. We turn them on for you so a bad day stays a bad day.",
  },
  {
    icon: TrendingUp,
    title: "Honest portfolio view",
    desc: "Every exchange, every bot, every fee. No vanity numbers — including the trades that went sideways.",
  },
];

const TESTIMONIALS = [
  {
    name: "Marcus Chen",
    role: "Part-time trader, Singapore",
    result: "+19% in Q3",
    quote:
      "I'm not glued to my phone anymore. The grid bot on ETH did its thing while I was on a trip with the kids. That alone is worth it.",
  },
  {
    name: "Sofia Alvarez",
    role: "Day job + side portfolio",
    result: "+12% YTD",
    quote:
      "Honestly I was skeptical. But the daily recap email is just… useful. It tells me when nothing happened too, which I appreciate.",
  },
  {
    name: "Devon Park",
    role: "Quant hobbyist",
    result: "+28% / 6mo",
    quote:
      "I rebuilt my old Python strategy in the no-code builder in about an hour. Backtest matched live within a couple of basis points.",
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
  {
    q: "Who's behind this?",
    a: "We're a team of six — four traders, two engineers — based out of Lisbon and Bengaluru. You can reply to any email and it'll land in one of our inboxes, not a help desk queue.",
  },
];

/* Top gainers — the symbols are the daily-rotated picks */
const TOP_GAINERS = [
  { symbol: "NASDAQ:NVDA", label: "NVDA" },
  { symbol: "BINANCE:SOLUSDT", label: "SOL" },
  { symbol: "NASDAQ:AMD", label: "AMD" },
  { symbol: "BINANCE:AVAXUSDT", label: "AVAX" },
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

const TRADINGVIEW_TOOLS = [
  {
    icon: CandlestickChart,
    name: "AI Signal Overlay",
    tag: "Indicator",
    desc: "Trend score, confidence heat, and entry zones drawn directly on TradingView.",
    perks: ["Pine Script access", "Entry/exit labels", "Alert templates"],
  },
  {
    icon: Target,
    name: "Risk Box Autopilot",
    tag: "Tool",
    desc: "Auto-plots stop, target, position size, and risk-to-reward before you click buy.",
    perks: ["1R/2R/3R targets", "Lot sizing", "Session presets"],
  },
  {
    icon: Activity,
    name: "Whale Pulse Scanner",
    tag: "Scanner",
    desc: "Flags unusual volume, liquidity sweeps, and momentum shifts worth reviewing.",
    perks: ["Sweep alerts", "Volume spikes", "Watchlist mode"],
  },
  {
    icon: FileCode2,
    name: "Alert-to-Bot Bridge",
    tag: "Webhook",
    desc: "Turn TradingView alerts into bot actions with confirmation rules and risk locks.",
    perks: ["Webhook setup", "Safety checks", "Telegram logs"],
  },
];

const SIGNAL_FEED = [
  { time: "09:15", pair: "BTCUSDT", action: "AI trend score flipped bullish", tone: "green" },
  {
    time: "10:40",
    pair: "NVDA",
    action: "TradingView overlay printed a pullback zone",
    tone: "cyan",
  },
  {
    time: "12:05",
    pair: "ETHUSDT",
    action: "Risk lock paused new entries after volatility spike",
    tone: "red",
  },
  {
    time: "14:25",
    pair: "SOLUSDT",
    action: "Breakout Scout moved stop to breakeven",
    tone: "green",
  },
];

/* ------------------ Page ------------------ */

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <StrategyLab />
      <TradingViewTools />
      <TopGainers />
      <SignalRoom />
      <ChartSection />
      <YoutubeVideo />
      <Pricing />
      <Testimonials />
      <Faq />
      <CtaBanner />
      <Contact />
      <Footer />
    </div>
  );
}

/* ------------------ Nav ------------------ */

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 hover:opacity-80 transition">
          <div className="bg-[#F3E2B3] text-[#1A1A1A] font-sans font-black text-xl px-2.5 py-1.5 rounded-md flex items-center justify-center leading-none tracking-tighter">
            EM
          </div>
          <div className="flex flex-col justify-center text-[#F3E2B3] font-sans font-bold text-xs leading-none tracking-[0.15em]">
            <span>EXPERTZ</span>
            <span className="mt-0.5">MOVE</span>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#how" className="hover:text-foreground transition">
            How it works
          </a>
          <a href="#features" className="hover:text-foreground transition">
            What we built
          </a>
          <a href="#tools" className="hover:text-foreground transition">
            TV tools
          </a>
          <a href="#gainers" className="hover:text-foreground transition">
            Today's movers
          </a>
          <a href="#pricing" className="hover:text-foreground transition">
            Pricing
          </a>
          <a href="#faq" className="hover:text-foreground transition">
            FAQ
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/expertzmove?igsh=ZmxtcTV4aTR5Mmh6&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:block text-muted-foreground hover:text-cyan-glow transition"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://t.me/Xonix_Support"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:block text-muted-foreground hover:text-cyan-glow transition"
          >
            <Send className="w-5 h-5" />
          </a>
          <a
            href="https://www.youtube.com/@Expertsmove"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:block text-muted-foreground hover:text-cyan-glow transition"
          >
            <Youtube className="w-5 h-5" />
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium px-4 py-2 rounded-md bg-cyan-glow text-background hover:opacity-90 transition"
          >
            Try it free
          </a>
        </div>
      </div>
    </header>
  );
}

/* ------------------ Hero Background ------------------ */

function HeroChartBackground() {
  const round = (value: number) => Number(value.toFixed(3));
  const CANDLES = Array.from({ length: 40 }).map((_, i) => {
    const x = i * 25 + 12.5;
    const t = (i / 40) * 2 * Math.PI;

    // Ensure all waves complete full cycles within 2*PI for seamless tiling
    const trend = Math.sin(t) * 20;
    const noise = Math.sin(t * 3) * 10;
    const micro = Math.sin(t * 8) * 5;

    const base = 50 + trend + noise + micro;
    const isUp = Math.sin(t * 15) > 0;
    const bodySize = 3 + Math.abs(Math.sin(t * 7)) * 12;

    const o = base;
    const c = isUp ? base - bodySize : base + bodySize;
    const h = Math.min(o, c) - 2 - Math.abs(Math.sin(t * 11)) * 8;
    const l = Math.max(o, c) + 2 + Math.abs(Math.sin(t * 5)) * 8;

    return { x: round(x), o: round(o), c: round(c), h: round(h), l: round(l) };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      <div className="absolute inset-0 flex animate-ticker" style={{ width: "200%" }}>
        {[0, 1].map((i) => (
          <svg key={i} className="w-1/2 h-full" preserveAspectRatio="none" viewBox="0 0 1000 100">
            {CANDLES.map((c, idx) => {
              const isGreen = c.c < c.o;
              const color = isGreen ? "oklch(0.85 0.24 150)" : "oklch(0.68 0.24 25)";
              const bodyY = Math.min(c.o, c.c);
              const bodyHeight = Math.max(Math.abs(c.o - c.c), 1);
              return (
                <g key={idx}>
                  <line
                    x1={c.x}
                    y1={c.h}
                    x2={c.x}
                    y2={c.l}
                    stroke={color}
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                    opacity="0.6"
                  />
                  <rect
                    x={c.x - 4}
                    y={bodyY}
                    width="8"
                    height={bodyHeight}
                    fill={color}
                    opacity="0.8"
                    rx="1"
                  />
                </g>
              );
            })}
          </svg>
        ))}
      </div>
    </div>
  );
}

/* ------------------ Hero ------------------ */

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden"
    >
      <HeroChartBackground />
      <div className="absolute inset-0 bg-background/75" />
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
        <div className="max-w-3xl animate-float-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-glow/30 bg-cyan-glow/5 text-xs font-mono text-cyan-glow mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
            Built by traders who got tired of staring at screens
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.98] tracking-tight">
            Your charts.
            <br />
            <span className="text-gradient-cyan">Our problem.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Expertz Move is an AI trading toolkit that takes the manual work off your plate —
            scanning markets, placing trades, and sending you a real human-readable recap at the end
            of the day.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-md bg-cyan-glow text-background font-semibold animate-pulse-glow hover:bg-cyan-glow/90 transition"
            >
              Start free — no card
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </a>
            <a
              href="#gainers"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-md border border-border bg-background/40 backdrop-blur-sm hover:border-cyan-glow/60 hover:bg-cyan-glow/5 transition font-semibold"
            >
              <Play className="w-4 h-4" /> See today's movers
            </a>
          </div>
          <p className="mt-6 text-xs text-muted-foreground/70 font-mono">
            P.S. — We don't promise lambos. We promise fewer 2am chart checks.
          </p>
        </div>
      </div>

      <Ticker />
    </section>
  );
}

function Ticker() {
  const items = [...TICKERS, ...TICKERS];
  return (
    <div className="relative z-10 border-y border-border/60 bg-background/80 backdrop-blur-md overflow-hidden">
      <div className="flex animate-ticker whitespace-nowrap py-3">
        {items.map((t, i) => (
          <div key={i} className="flex items-center gap-3 px-6 font-mono text-sm">
            <span className="text-muted-foreground">{t.s}</span>
            <span className="text-foreground">{t.p}</span>
            <span className={t.up ? "text-neon-green" : "text-neon-red"}>{t.c}</span>
            <span className="text-border">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------ Stats ------------------ */

function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section className="py-16 border-b border-border/50">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="glass-card border-t-2 !border-t-cyan-glow grid grid-cols-2 md:grid-cols-4 gap-px bg-border/30 overflow-hidden">
          {STATS.map((s, i) => (
            <StatCell key={i} stat={s} start={inView} />
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground/70 font-mono">
          Real numbers. The coffee count is honest too —{" "}
          <Coffee className="inline w-3 h-3 -mt-0.5" /> we keep a tally on the wall.
        </p>
      </div>
    </section>
  );
}

function StatCell({ stat, start }: { stat: (typeof STATS)[number]; start: boolean }) {
  const val = useCountUp(stat.value, start);
  const formatted =
    stat.value >= 1000 ? Math.round(val).toLocaleString() : val.toFixed(stat.decimals);
  return (
    <div className="bg-surface p-8 md:p-10 text-center">
      <div className="font-mono text-3xl md:text-5xl font-semibold text-gradient-cyan">
        {formatted}
        {stat.suffix ?? ""}
      </div>
      <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
        {stat.label}
      </div>
    </div>
  );
}

/* ------------------ How it works ------------------ */

function HowItWorks() {
  return (
    <section id="how" className="relative py-28">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            eyebrow="HOW IT WORKS"
            title="Three steps. Then go live your day."
            subtitle="Most people are up and running before their coffee goes cold."
          />
        </Reveal>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {STEPS.map((s, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="glass-card glass-card-hover p-8 h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-md bg-cyan-glow/10 border border-cyan-glow/30 grid place-items-center">
                    <s.icon className="w-5 h-5 text-cyan-glow" />
                  </div>
                  <span className="font-mono text-5xl font-bold text-cyan-glow/20">0{i + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ Features ------------------ */

function Features() {
  return (
    <section id="features" className="relative py-28 border-y border-border/50">
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            eyebrow="WHAT WE BUILT"
            title="The tools we wished we'd had"
            subtitle="Every feature here exists because one of us got tired of doing it by hand."
          />
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="glass-card glass-card-hover p-7 h-full group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-glow/20 to-violet-glow/10 border border-cyan-glow/20 grid place-items-center mb-5 group-hover:border-cyan-glow/60 transition">
                  <f.icon className="w-5 h-5 text-cyan-glow" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ Strategy lab ------------------ */

function StrategyLab() {
  const [presetIndex, setPresetIndex] = useState(0);
  const [capital, setCapital] = useState(5000);
  const [risk, setRisk] = useState(2);
  const [trades, setTrades] = useState(24);
  const preset = STRATEGY_PRESETS[presetIndex];
  const simulatedMove = preset.edge * trades * risk;
  const projected = Math.round(capital * (1 + simulatedMove / 100));
  const riskReserve = Math.round(capital * (preset.drawdown / 100) * (risk / 2));
  const disciplineScore = Math.min(
    99,
    Math.round(72 + preset.winRate * 0.18 - risk * 1.6 + trades * 0.28),
  );
  const clampChartPoint = (value: number) => Math.max(14, Math.min(88, value));
  const points = Array.from({ length: 18 }, (_, i) => {
    const wave = Math.sin(i * 1.15 + presetIndex) * 8;
    const wobble = Math.cos(i * 0.7) * 4;
    const climb = i * (simulatedMove / 8);
    return Number((72 - climb - wave - wobble + risk * 1.4).toFixed(3));
  });
  const linePoints = points
    .map(
      (y, i) => `${((i / (points.length - 1)) * 100).toFixed(3)},${clampChartPoint(y).toFixed(3)}`,
    )
    .join(" ");

  return (
    <section id="lab" className="relative py-28 border-b border-border/50">
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            eyebrow="BOT LAB"
            title="Let visitors play before they pay"
            subtitle="A simple simulator makes the product feel alive, helps users understand risk, and gives them a reason to come back and test ideas."
          />
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-[0.95fr_1.05fr] gap-6 items-stretch">
          <Reveal>
            <div className="glass-card p-7 h-full">
              <div className="flex items-center justify-between gap-4 mb-7">
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-glow">
                    Strategy presets
                  </div>
                  <h3 className="mt-2 text-2xl font-semibold">Tune a bot mood</h3>
                </div>
                <Gauge className="w-9 h-9 text-cyan-glow" />
              </div>

              <div className="grid gap-3">
                {STRATEGY_PRESETS.map((item, i) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setPresetIndex(i)}
                    className={`w-full text-left rounded-md border p-4 transition ${
                      presetIndex === i
                        ? "border-cyan-glow bg-cyan-glow/10 shadow-[0_0_24px_oklch(0.85_0.18_210_/_0.18)]"
                        : "border-border/70 bg-surface/50 hover:border-cyan-glow/50"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-md bg-cyan-glow/10 border border-cyan-glow/20 grid place-items-center">
                        <item.icon className="w-4 h-4 text-cyan-glow" />
                      </span>
                      <span>
                        <span className="block font-semibold">{item.name}</span>
                        <span className="block text-xs text-muted-foreground mt-1">
                          {item.focus}
                        </span>
                      </span>
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-7 space-y-5">
                <LabSlider
                  label="Paper capital"
                  value={capital}
                  min={1000}
                  max={25000}
                  step={500}
                  prefix="$"
                  onChange={setCapital}
                />
                <LabSlider
                  label="Risk per idea"
                  value={risk}
                  min={1}
                  max={6}
                  step={1}
                  suffix="%"
                  onChange={setRisk}
                />
                <LabSlider
                  label="Backtest trades"
                  value={trades}
                  min={8}
                  max={60}
                  step={4}
                  onChange={setTrades}
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass-card p-7 h-full overflow-hidden">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-glow">
                    Simulation preview
                  </div>
                  <h3 className="mt-2 text-2xl font-semibold">{preset.name} paper run</h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-xl">
                    Not a promise, just a hands-on way to see how risk, frequency, and strategy
                    personality change the profile.
                  </p>
                </div>
                <div className="rounded-md border border-neon-green/30 bg-neon-green/10 px-4 py-3 text-right">
                  <div className="font-mono text-xs text-muted-foreground">
                    Projected paper value
                  </div>
                  <div className="font-mono text-2xl text-neon-green">
                    ${projected.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="mt-8 h-64 rounded-md border border-border/60 bg-background/50 p-4">
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="w-full h-full overflow-visible"
                >
                  <defs>
                    <linearGradient id="labLine" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="oklch(0.85 0.18 210)" />
                      <stop offset="100%" stopColor="oklch(0.85 0.24 150)" />
                    </linearGradient>
                    <linearGradient id="labFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.85 0.18 210 / 0.28)" />
                      <stop offset="100%" stopColor="oklch(0.85 0.18 210 / 0)" />
                    </linearGradient>
                  </defs>
                  <path d={`M0,96 L${linePoints} L100,96 Z`} fill="url(#labFill)" />
                  <polyline
                    points={linePoints}
                    fill="none"
                    stroke="url(#labLine)"
                    strokeWidth="2.4"
                    vectorEffect="non-scaling-stroke"
                  />
                  {points.slice(0, 6).map((point, i) => (
                    <circle
                      key={i}
                      cx={Number(((i / (points.length - 1)) * 100).toFixed(3))}
                      cy={Number(clampChartPoint(point).toFixed(3))}
                      r="1.2"
                      fill="oklch(0.85 0.24 150)"
                    />
                  ))}
                </svg>
              </div>

              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <MetricPill
                  icon={Trophy}
                  label="Discipline score"
                  value={`${disciplineScore}/100`}
                />
                <MetricPill
                  icon={ShieldCheck}
                  label="Stress reserve"
                  value={`$${riskReserve.toLocaleString()}`}
                />
                <MetricPill icon={Wallet} label="Win-rate model" value={`${preset.winRate}%`} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function LabSlider({
  label,
  value,
  min,
  max,
  step,
  prefix = "",
  suffix = "",
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block">
      <span className="flex items-center justify-between gap-4 text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-mono text-cyan-glow">
          {prefix}
          {value.toLocaleString()}
          {suffix}
        </span>
      </span>
      <input
        className="strategy-range mt-3 w-full"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.currentTarget.value))}
      />
    </label>
  );
}

function MetricPill({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Trophy;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-md border border-border/60 bg-surface/60 p-4">
      <Icon className="w-4 h-4 text-cyan-glow mb-3" />
      <div className="font-mono text-lg text-foreground">{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

/* ------------------ TradingView tools ------------------ */

function TradingViewTools() {
  return (
    <section id="tools" className="relative py-28">
      <div
        className="absolute inset-0 opacity-15 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            eyebrow="TRADINGVIEW TOOLBOX"
            title="Sell tools that become habits"
            subtitle="Indicators, scanners, and webhooks give users daily reasons to open Expertz Move, even before they start a live bot."
          />
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TRADINGVIEW_TOOLS.map((tool, i) => (
            <Reveal key={tool.name} delay={i * 80}>
              <div className="glass-card glass-card-hover p-6 h-full flex flex-col">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-11 h-11 rounded-md bg-cyan-glow/10 border border-cyan-glow/30 grid place-items-center">
                    <tool.icon className="w-5 h-5 text-cyan-glow" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest rounded-full border border-border px-2 py-1 text-muted-foreground">
                    {tool.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{tool.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                  {tool.desc}
                </p>
                <ul className="mt-5 space-y-2">
                  {tool.perks.map((perk) => (
                    <li
                      key={perk}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <Check className="w-3.5 h-3.5 text-neon-green" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 grid md:grid-cols-[1fr_auto] gap-6 items-center rounded-lg border border-cyan-glow/20 bg-cyan-glow/5 p-6">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-md bg-violet-glow/15 border border-violet-glow/40 grid place-items-center shrink-0">
                <WandSparkles className="w-5 h-5 text-violet-glow" />
              </div>
              <div>
                <h3 className="font-semibold">Add a members-only Pine Script drop every week</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Weekly drops, changelogs, and setup videos make the website feel active instead of
                  static.
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-cyan-glow text-background font-semibold hover:opacity-90 transition"
            >
              Ask for a tool
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------ Top Gainers (daily) ------------------ */

function TopGainers() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  return (
    <section id="gainers" className="relative py-28">
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-glow mb-3 flex items-center gap-2">
                <Flame className="w-3.5 h-3.5" /> TODAY'S MOVERS
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                What's actually <span className="text-gradient-cyan">running</span> today
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed">
                Updated every day — the four names our bot flagged as standout movers, plus the live
                top-gainers board from TradingView. No editorial spin, just what the tape is doing.
              </p>
            </div>
            <div className="font-mono text-xs text-muted-foreground border border-border/60 rounded-md px-4 py-2 bg-surface/60">
              Last updated · {today}
            </div>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left: 4 mini charts of our picks */}
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-4">
              {TOP_GAINERS.map((g) => (
                <div key={g.symbol} className="glass-card p-2">
                  <div className="px-2 pt-1 pb-2 flex items-center justify-between">
                    <span className="font-mono text-xs text-cyan-glow">{g.label}</span>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      Bot pick
                    </span>
                  </div>
                  <MiniSymbolWidget symbol={g.symbol} />
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right: live hotlist */}
          <Reveal delay={120}>
            <div className="glass-card p-3 h-full">
              <div className="px-2 pt-1 pb-3 flex items-center justify-between">
                <span className="font-mono text-xs text-cyan-glow">LIVE · TOP GAINERS</span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  via TradingView
                </span>
              </div>
              <HotlistWidget />
            </div>
          </Reveal>
        </div>

        <p className="mt-6 text-xs text-muted-foreground/70 italic">
          These aren't recommendations. We share them so you can see what the bot is watching — what
          you do with that is your call.
        </p>
      </div>
    </section>
  );
}

function MiniSymbolWidget({ symbol }: { symbol: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = "";
    const container = document.createElement("div");
    container.className = "tradingview-widget-container__widget";
    ref.current.appendChild(container);
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol,
      width: "100%",
      height: 180,
      locale: "en",
      dateRange: "1D",
      colorTheme: "dark",
      isTransparent: true,
      autosize: false,
      largeChartUrl: "",
      chartOnly: false,
      noTimeScale: false,
    });
    ref.current.appendChild(script);
  }, [symbol]);
  return <div ref={ref} className="tradingview-widget-container" style={{ height: 180 }} />;
}

function HotlistWidget() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = "";
    const container = document.createElement("div");
    container.className = "tradingview-widget-container__widget";
    ref.current.appendChild(container);
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: "dark",
      dateRange: "1D",
      exchange: "US",
      showChart: true,
      locale: "en",
      largeChartUrl: "",
      isTransparent: true,
      showSymbolLogo: true,
      showFloatingTooltip: false,
      width: "100%",
      height: 540,
      plotLineColorGrowing: "rgba(0, 229, 255, 1)",
      plotLineColorFalling: "rgba(255, 84, 112, 1)",
      gridLineColor: "rgba(0, 229, 255, 0.06)",
      scaleFontColor: "rgba(180, 200, 220, 1)",
      belowLineFillColorGrowing: "rgba(0, 229, 255, 0.12)",
      belowLineFillColorFalling: "rgba(255, 84, 112, 0.12)",
      belowLineFillColorGrowingBottom: "rgba(0, 229, 255, 0)",
      belowLineFillColorFallingBottom: "rgba(255, 84, 112, 0)",
      symbolActiveColor: "rgba(0, 229, 255, 0.12)",
    });
    ref.current.appendChild(script);
  }, []);
  return <div ref={ref} className="tradingview-widget-container" style={{ height: 540 }} />;
}

/* ------------------ Signal room ------------------ */

function SignalRoom() {
  return (
    <section id="signals" className="relative py-28 border-t border-border/50">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <Reveal>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-glow mb-4 flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5" /> LIVE SIGNAL ROOM
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                Give users a reason to check in{" "}
                <span className="text-gradient-cyan">every day</span>
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed max-w-xl">
                Add a members area with daily bot notes, saved watchlists, tool drops, and
                streak-based learning missions. It keeps the product useful between trades.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <SignalFeature
                  icon={Trophy}
                  title="7-day market streaks"
                  desc="Reward users for reviewing recaps, not for overtrading."
                />
                <SignalFeature
                  icon={LockKeyhole}
                  title="Safety locks"
                  desc="Show why a bot skipped a trade, paused, or reduced size."
                />
                <SignalFeature
                  icon={Wallet}
                  title="Tool credits"
                  desc="Bundle TradingView tools into plans and unlock weekly script drops."
                />
                <SignalFeature
                  icon={Twitter}
                  title="Share cards"
                  desc="Generate clean recap cards users can post when a bot completes a run."
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass-card p-6 md:p-7">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-border/60">
                <div>
                  <div className="font-mono text-xs text-cyan-glow">ROOM · TODAY</div>
                  <h3 className="mt-1 text-xl font-semibold">What the bots are thinking</h3>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-neon-green/30 bg-neon-green/10 px-3 py-1.5 text-xs text-neon-green">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
                  12 bots online
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {SIGNAL_FEED.map((item) => (
                  <div
                    key={`${item.time}-${item.pair}`}
                    className="grid grid-cols-[56px_1fr] gap-4"
                  >
                    <div className="font-mono text-xs text-muted-foreground pt-1">{item.time}</div>
                    <div className="relative rounded-md border border-border/60 bg-background/45 p-4">
                      <span
                        className={`absolute left-0 top-4 h-8 w-0.5 ${
                          item.tone === "green"
                            ? "bg-neon-green"
                            : item.tone === "red"
                              ? "bg-neon-red"
                              : "bg-cyan-glow"
                        }`}
                      />
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-mono text-sm text-foreground">{item.pair}</span>
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                          logged
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {item.action}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-md border border-cyan-glow/20 bg-cyan-glow/5 p-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-cyan-glow" />
                  <div>
                    <div className="font-semibold text-sm">Retention idea: daily recap unlock</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Let users return daily to unlock the recap, watchlist changes, and the next
                      TradingView tool lesson.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SignalFeature({
  icon: Icon,
  title,
  desc,
}: {
  icon: typeof Trophy;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-md border border-border/60 bg-surface/55 p-4">
      <Icon className="w-4 h-4 text-cyan-glow mb-3" />
      <h3 className="font-semibold text-sm">{title}</h3>
      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

/* ------------------ Chart section ------------------ */

function ChartSection() {
  const ref = useRef<HTMLDivElement | null>(null);
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
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "BINANCE:BTCUSDT",
      interval: "60",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      hide_side_toolbar: false,
      allow_symbol_change: true,
      backgroundColor: "rgba(15, 18, 30, 1)",
      gridColor: "rgba(0, 229, 255, 0.06)",
      support_host: "https://www.tradingview.com",
    });
    ref.current.appendChild(script);
  }, []);
  return (
    <section id="chart" className="py-28 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            eyebrow="POKE AROUND"
            title="Same chart we use every morning"
            subtitle="Full TradingView, drop-in. Change the symbol, draw on it, do your thing."
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-12 glass-card p-2 md:p-3">
              <div
                ref={ref}
                className="tradingview-widget-container rounded-md overflow-hidden w-full"
                style={{ height: 750 }}
              />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------ YouTube Embed ------------------ */

function YoutubeVideo() {
  return (
    <section id="youtube" className="py-28 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            eyebrow="WATCH US IN ACTION"
            title="Expertz Move on YouTube"
            subtitle="Catch our latest updates, trading strategies, and daily insights on our channel."
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-12 glass-card p-2 md:p-3 max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-md overflow-hidden bg-surface flex flex-col items-center justify-center border border-border/50">
              <iframe
                className="absolute top-0 left-0 w-full h-full z-10"
                src="https://www.youtube.com/embed/videoseries?list=UUjl3KUH4VZ2TtGDOZU1x5hw"
                title="Expertz Move YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              {/* Fallback underneath the iframe just in case the channel ID is not recognized by user_uploads */}
              <div className="text-center z-0 p-6 absolute inset-0 flex flex-col items-center justify-center">
                <Youtube className="w-12 h-12 text-muted-foreground mb-4 opacity-50" />
                <p className="text-muted-foreground text-sm">Loading latest videos...</p>
                <p className="text-muted-foreground/60 text-xs mt-2">
                  If the player doesn't load, you may need to replace the iframe src with a specific
                  Video ID in the code.
                </p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a
                href="https://www.youtube.com/@Expertsmove"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-cyan-glow hover:underline font-medium bg-cyan-glow/10 px-4 py-2 rounded-full"
              >
                <Youtube className="w-4 h-4" />
                Visit our YouTube Channel
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------ Pricing ------------------ */

const PLANS = [
  {
    name: "Just looking",
    price: "$0",
    period: "forever",
    features: [
      "1 bot, paper trading only",
      "Daily top-gainer email",
      "Bot lab simulator",
      "Community Discord",
    ],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Most folks",
    price: "$39",
    period: "/month",
    features: [
      "5 live bots, any exchange",
      "All strategies + backtesting",
      "TradingView indicator pack",
      "Real-time alerts (email/Telegram)",
    ],
    cta: "Go with this one",
    highlight: true,
  },
  {
    name: "Power user",
    price: "$129",
    period: "/month",
    features: [
      "Unlimited bots",
      "API + TradingView webhooks",
      "Custom signal subscription",
      "Direct line to the team",
    ],
    cta: "I want it all",
    highlight: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="relative py-28 border-t border-border/50">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            eyebrow="PRICING"
            title="Pay us when we earn it"
            subtitle="Start on the free plan. Move up only when the bot has paid for itself a few times over."
          />
        </Reveal>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div
                className={`relative glass-card p-8 h-full flex flex-col ${
                  p.highlight ? "border-cyan-glow/60 animate-pulse-glow" : ""
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyan-glow text-background text-xs font-semibold uppercase tracking-wider">
                    What we'd pick
                  </span>
                )}
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-mono text-5xl font-bold">{p.price}</span>
                  <span className="text-muted-foreground text-sm">{p.period}</span>
                </div>
                <ul className="mt-8 space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 mt-0.5 text-neon-green shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`mt-8 block text-center px-5 py-3 rounded-md font-semibold transition ${
                    p.highlight
                      ? "bg-cyan-glow text-background hover:opacity-90"
                      : "border border-border hover:border-cyan-glow/60 hover:bg-cyan-glow/5"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Cancel anytime in two clicks. We won't email you a guilt trip.
        </p>
      </div>
    </section>
  );
}

/* ------------------ Testimonials ------------------ */

function Testimonials() {
  return (
    <section className="relative py-28 border-y border-border/50">
      <div
        className="absolute inset-0 opacity-15 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            eyebrow="WHAT MEMBERS SAY"
            title="Unfiltered, including the awkward bits"
          />
        </Reveal>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="glass-card glass-card-hover p-7 h-full flex flex-col">
                <p className="text-foreground leading-relaxed flex-1">"{t.quote}"</p>
                <div className="mt-6 pt-6 border-t border-border/50 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-glow to-violet-glow grid place-items-center font-display font-bold text-background">
                    {t.name[0]}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                  <div className="font-mono text-sm text-neon-green">{t.result}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ FAQ ------------------ */

function Faq() {
  return (
    <section id="faq" className="py-28">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <SectionHeader eyebrow="QUESTIONS WE GET A LOT" title="Ask us anything else over email" />
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-12 glass-card px-6">
            <Accordion type="single" collapsible>
              {FAQ.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border/60">
                  <AccordionTrigger className="text-base font-medium py-5">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------ CTA banner ------------------ */

function CtaBanner() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div
            className="relative rounded-2xl overflow-hidden p-12 md:p-20 text-center animate-gradient"
            style={{
              backgroundImage:
                "linear-gradient(135deg, oklch(0.25 0.1 240), oklch(0.22 0.15 290), oklch(0.2 0.12 200))",
            }}
          >
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="relative">
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
                Give your eyes a break. <span className="text-gradient-cyan">Let it run.</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Spin up your first bot in a few minutes. If it's not for you, no hard feelings — and
                no card up front either.
              </p>
              <a
                href="#pricing"
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-md bg-cyan-glow text-background font-semibold hover:opacity-90 transition"
              >
                Try Expertz Move — free
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------ Contact ------------------ */

function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formsubmit.co/ajax/expertzmove@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (response.ok) {
        setSent(true);
      } else {
        alert("Failed to send message. Please try emailing us directly.");
      }
    } catch (error) {
      alert("Failed to send message. Please try emailing us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 border-t border-border/50 bg-background/50">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              Have an enquiry?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Drop us a message and we'll get back to you within 24 hours. Or email us directly at{" "}
              <a href="mailto:expertzmove@gmail.com" className="text-cyan-glow hover:underline">
                expertzmove@gmail.com
              </a>
              .
            </p>
          </div>
          <div className="glass-card p-8 bg-surface/50 border border-border/50">
            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-neon-green/10 text-neon-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Message sent!</h3>
                <p className="text-muted-foreground">We'll get back to you as soon as possible.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm text-cyan-glow hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      required
                      id="name"
                      name="name"
                      type="text"
                      className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      required
                      id="email"
                      name="email"
                      type="email"
                      className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full flex min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  disabled={loading}
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-cyan-glow text-background hover:bg-cyan-glow/90 h-10 px-4 py-2"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------ Footer ------------------ */

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/40">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="bg-[#F3E2B3] text-[#1A1A1A] font-sans font-black text-xl px-2.5 py-1.5 rounded-md flex items-center justify-center leading-none tracking-tighter">
                EM
              </div>
              <div className="flex flex-col justify-center text-[#F3E2B3] font-sans font-bold text-xs leading-none tracking-[0.15em]">
                <span>EXPERTZ</span>
                <span className="mt-0.5">MOVE</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              A small team building trading tools we actually use ourselves. Based in Lisbon &
              Bengaluru — replies usually within a day.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/expertzmove?igsh=ZmxtcTV4aTR5Mmh6&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-md border border-border grid place-items-center hover:border-cyan-glow/60 hover:text-cyan-glow transition"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/Xonix_Support"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-md border border-border grid place-items-center hover:border-cyan-glow/60 hover:text-cyan-glow transition"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@Expertsmove"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-md border border-border grid place-items-center hover:border-cyan-glow/60 hover:text-cyan-glow transition"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold mb-3">Product</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#features" className="hover:text-foreground transition">
                  What we built
                </a>
              </li>
              <li>
                <a href="#gainers" className="hover:text-foreground transition">
                  Today's movers
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-foreground transition">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold mb-3">The team</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Our story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Notes & writing
                </a>
              </li>
              <li>
                <a href="mailto:expertzmove@gmail.com" className="hover:text-foreground transition">
                  expertzmove@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border/60 flex flex-col gap-6 text-xs text-muted-foreground">
          <div className="max-w-4xl space-y-2">
            <p className="font-semibold text-foreground/80 uppercase tracking-wider text-[10px]">
              Risk Disclaimer
            </p>
            <p className="leading-relaxed">
              Trading involves significant risk. We do not guarantee any profits, returns, or
              specific outcomes. All investments are subject to market risk, and you may lose some
              or all of your initial capital. Past performance is not indicative of future results.
              Expertz Move provides software tools and does not provide financial, investment, or
              legal advice. Please trade responsibly and never invest money you cannot afford to
              lose.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">
            <p>© {new Date().getFullYear()} Expertz Move. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------ Shared ------------------ */

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-glow mb-4">
        {eyebrow}
      </div>
      <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground leading-relaxed">{subtitle}</p>}
    </div>
  );
}
