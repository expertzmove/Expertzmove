import { r as __toESM } from "../_runtime.mjs";
import { a as Trigger2, c as require_react, i as Root2, n as Header, r as Item, s as require_jsx_runtime, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Radar, c as Check, d as Activity, i as Send, l as BrainCircuit, n as Youtube, o as Instagram, r as Twitter, s as ChevronDown, t as Zap, u as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C4JVwwpL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function useInView(once = true) {
	const ref = (0, import_react.useRef)(null);
	const [inView, setInView] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setInView(true);
				if (once) io.disconnect();
			} else if (!once) setInView(false);
		}, { threshold: .2 });
		io.observe(el);
		return () => io.disconnect();
	}, [once]);
	return {
		ref,
		inView
	};
}
function useCountUp(target, start, duration = 1800) {
	const [val, setVal] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!start) return;
		let raf = 0;
		const t0 = performance.now();
		const tick = (t) => {
			const p = Math.min(1, (t - t0) / duration);
			setVal(target * (1 - Math.pow(1 - p, 3)));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [
		target,
		start,
		duration
	]);
	return val;
}
function Reveal({ children, delay = 0, className = "" }) {
	const { ref, inView } = useInView();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className,
		style: {
			opacity: inView ? 1 : 0,
			transform: inView ? "translateY(0)" : "translateY(24px)",
			transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
		},
		children
	});
}
var TICKERS = [
	{
		s: "BTC/USD",
		p: "67,432.10",
		c: "+2.41%",
		up: true
	},
	{
		s: "ETH/USD",
		p: "3,548.22",
		c: "+1.87%",
		up: true
	},
	{
		s: "SOL/USD",
		p: "184.55",
		c: "-0.62%",
		up: false
	},
	{
		s: "AAPL",
		p: "228.91",
		c: "+0.94%",
		up: true
	},
	{
		s: "TSLA",
		p: "248.30",
		c: "-1.12%",
		up: false
	},
	{
		s: "SPY",
		p: "563.74",
		c: "+0.38%",
		up: true
	},
	{
		s: "NVDA",
		p: "134.05",
		c: "+3.22%",
		up: true
	}
];
var STATS = [
	{
		label: "Active Members",
		value: 12400,
		suffix: "+",
		decimals: 0
	},
	{
		label: "System Uptime",
		value: 99.2,
		suffix: "%",
		decimals: 1
	},
	{
		label: "Pairs Watched",
		value: 1850,
		suffix: "",
		decimals: 0
	},
	{
		label: "Coffees Consumed",
		value: 47,
		suffix: "",
		decimals: 0
	}
];
var STRATEGY_PRESETS = [
	{
		name: "Balanced AI",
		icon: BrainCircuit,
		winRate: 63,
		edge: .34,
		drawdown: 7.8,
		focus: "Multi-timeframe trend + news filter"
	},
	{
		name: "Grid Hunter",
		icon: Radar,
		winRate: 58,
		edge: .29,
		drawdown: 5.4,
		focus: "Sideways ranges with volatility guard"
	},
	{
		name: "Breakout Scout",
		icon: Zap,
		winRate: 47,
		edge: .52,
		drawdown: 10.6,
		focus: "Volume expansion and breakout retests"
	}
];
var SIGNAL_FEED = [
	{
		time: "09:15",
		pair: "BTCUSDT",
		action: "AI trend score flipped bullish",
		tone: "green"
	},
	{
		time: "10:40",
		pair: "NVDA",
		action: "TradingView overlay printed a pullback zone",
		tone: "cyan"
	},
	{
		time: "12:05",
		pair: "ETHUSDT",
		action: "Risk lock paused new entries after volatility spike",
		tone: "red"
	},
	{
		time: "14:25",
		pair: "SOLUSDT",
		action: "Breakout Scout moved stop to breakeven",
		tone: "green"
	}
];
var FAQ = [
	{
		q: "Do I need to know how to trade?",
		a: "Nope. Most people start with our AI mode or a preset and tweak from there. If you do know what you're doing, the builder won't get in your way."
	},
	{
		q: "Is my money actually safe?",
		a: "Your funds stay on your exchange. We only ask for trade-only API keys — withdrawal permissions are off the table. You can revoke our access anytime from your exchange settings."
	},
	{
		q: "What if the bot has a bad day?",
		a: "It will. Markets do. We default to conservative risk caps and a daily loss limit, and the recap email is upfront when things didn't go well. No hiding the losers."
	}
];
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-cyan-glow/30 selection:text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid opacity-30 pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BentoSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed top-0 left-0 right-0 z-50 backdrop-blur-3xl bg-background/50 border-b border-border/30",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-3 hover:opacity-80 transition",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-foreground text-background font-display font-bold text-lg px-2.5 py-1 rounded-sm flex items-center justify-center leading-none tracking-tighter",
						children: "EM"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center text-foreground font-display font-semibold text-[10px] leading-tight tracking-[0.2em] uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Expertz" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Move" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#platform",
							className: "hover:text-foreground transition-colors",
							children: "Platform"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#strategies",
							className: "hover:text-foreground transition-colors",
							children: "Strategies"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#pricing",
							className: "hover:text-foreground transition-colors",
							children: "Pricing"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://t.me/Xonix_Support",
						target: "_blank",
						rel: "noreferrer",
						className: "hidden sm:flex items-center text-muted-foreground hover:text-foreground transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-4 h-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#pricing",
						className: "text-sm font-semibold px-5 py-2.5 rounded-full bg-foreground text-background hover:scale-105 transition-transform",
						children: "Start Trading"
					})]
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative pt-40 pb-20 flex flex-col items-center text-center px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-glow/20 blur-[120px] rounded-full pointer-events-none opacity-50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/50 text-xs font-medium text-muted-foreground mb-8 backdrop-blur-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-cyan-glow shadow-[0_0_8px_var(--cyan-glow)]" }), "Expertz Move v2 is now live"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 100,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "font-display text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight max-w-5xl mx-auto",
					children: ["Trading, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: "on autopilot."
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 200,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed",
					children: "The most advanced AI trading toolkit built for modern markets. Connect your exchange, pick a strategy, and step away from the charts."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 300,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap justify-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#pricing",
						className: "group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-semibold hover:scale-105 transition-transform",
						children: ["Deploy Your First Bot", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#platform",
						className: "inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border bg-surface/30 backdrop-blur-md hover:bg-surface transition-colors font-semibold",
						children: "Explore Platform"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 400,
				className: "w-full max-w-[1400px] mx-auto mt-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticker, {})
			})
		]
	});
}
function Ticker() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border border-border/50 bg-surface/30 backdrop-blur-md rounded-2xl overflow-hidden py-4 shadow-xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex animate-ticker whitespace-nowrap",
			children: [
				...TICKERS,
				...TICKERS,
				...TICKERS
			].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4 px-8 font-mono text-sm font-medium",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: t.s
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground",
						children: t.p
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: t.up ? "text-cyan-glow" : "text-destructive",
						children: t.c
					})
				]
			}, i))
		})
	});
}
function BentoSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "platform",
		className: "py-12 px-6 max-w-[1400px] mx-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bento-grid",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bento-card bento-card-hover col-span-12 lg:col-span-8 row-span-2 min-h-[600px] flex flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-8 pb-4 flex justify-between items-start z-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-bold",
							children: "Pro Charting"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mt-1",
							children: "Live market data, overlaid with our AI signals."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-3 py-1 rounded-full bg-cyan-glow/10 text-cyan-glow text-xs font-bold uppercase tracking-wider border border-cyan-glow/20",
							children: "Live"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 w-full relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TradingViewWidget, {})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bento-card bento-card-hover col-span-12 md:col-span-6 lg:col-span-4 p-8 flex flex-col justify-between",
					id: "strategies",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-bold",
							children: "Strategy Lab"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mt-2 mb-6",
							children: "Choose from battle-tested presets or build your own rules engine."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: STRATEGY_PRESETS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-surface/30 hover:border-cyan-glow/30 transition-colors cursor-pointer group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-10 h-10 rounded-lg bg-cyan-glow/10 border border-cyan-glow/20 grid place-items-center group-hover:bg-cyan-glow/20 transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "w-5 h-5 text-cyan-glow" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-bold text-sm",
									children: p.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground mt-0.5",
									children: [p.winRate, "% Win Rate"]
								})] })]
							}, i))
						})
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bento-card bento-card-hover col-span-12 md:col-span-6 lg:col-span-4 p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "w-5 h-5 text-cyan-glow animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-bold",
							children: "Live Signals"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative pl-4 space-y-6 before:absolute before:inset-y-0 before:left-[7px] before:w-px before:bg-border",
						children: SIGNAL_FEED.map((feed, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative pl-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute left-[-13px] top-1 w-3 h-3 rounded-full border-2 border-background ${feed.tone === "green" ? "bg-cyan-glow" : feed.tone === "cyan" ? "bg-foreground" : "bg-destructive"}` }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-xs font-mono text-muted-foreground mb-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: feed.time }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-foreground font-bold",
										children: feed.pair
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm",
									children: feed.action
								})
							]
						}, i))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bento-card bento-card-hover col-span-12 lg:col-span-8 p-8 grid grid-cols-2 gap-6 bg-surface-elevated md:grid-cols-4",
					children: STATS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: i * 100,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-4xl md:text-5xl font-bold text-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCounter, { stat: s })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-muted-foreground mt-2",
								children: s.label
							})]
						})
					}, i))
				})
			]
		})
	});
}
function StatCounter({ stat }) {
	const { ref, inView } = useInView();
	const val = useCountUp(stat.value, inView);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [stat.value >= 1e3 ? Math.round(val).toLocaleString() : val.toFixed(stat.decimals), stat.suffix]
	});
}
function TradingViewWidget() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 px-8 pb-8 pt-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "tradingview-widget-container w-full h-full rounded-xl overflow-hidden border border-border/50 bg-black/20",
			ref
		})
	});
}
function Pricing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "pricing",
		className: "py-32 px-6 max-w-[1400px] mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center max-w-3xl mx-auto mb-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-4xl md:text-5xl font-bold",
				children: "Simple, transparent pricing."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg text-muted-foreground",
				children: "Start for free, upgrade when you need more power."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid md:grid-cols-2 gap-8 max-w-4xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bento-card p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl font-bold font-display",
						children: "Starter"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-baseline gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-5xl font-bold font-display",
							children: "$0"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground font-medium",
							children: "/ forever"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground text-sm",
						children: "Perfect for testing the waters and learning the ropes."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-4",
						children: [
							"1 active bot",
							"Paper trading",
							"Daily recap emails",
							"Community access"
						].map((feature, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3 text-sm font-medium",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-5 h-5 text-foreground" }),
								" ",
								feature
							]
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "w-full mt-10 py-4 rounded-xl border border-border font-bold hover:bg-surface transition-colors",
						children: "Get Started"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bento-card p-10 border-cyan-glow/30 relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-cyan-glow shadow-[0_0_20px_var(--cyan-glow)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-4 right-4 px-3 py-1 bg-cyan-glow/10 text-cyan-glow text-xs font-bold rounded-full",
						children: "MOST POPULAR"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl font-bold font-display",
						children: "Pro"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-baseline gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-5xl font-bold font-display",
							children: "$49"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground font-medium",
							children: "/ month"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground text-sm",
						children: "For serious traders who want to automate their edge."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-4",
						children: [
							"Unlimited bots",
							"Live exchange trading",
							"Real-time SMS alerts",
							"Priority support",
							"Advanced Pine Script Webhooks"
						].map((feature, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3 text-sm font-medium",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-5 h-5 text-cyan-glow" }),
								" ",
								feature
							]
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "w-full mt-10 py-4 rounded-xl bg-foreground text-background font-bold hover:scale-[1.02] transition-transform shadow-xl",
						children: "Upgrade to Pro"
					})
				]
			})]
		})]
	});
}
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "faq",
		className: "py-20 px-6 max-w-3xl mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-4xl font-bold text-center mb-12",
			children: "Frequently Asked Questions"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
			type: "single",
			collapsible: true,
			className: "w-full",
			children: FAQ.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
				value: `item-${i}`,
				className: "border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
					className: "text-left font-medium text-lg py-6 hover:text-cyan-glow transition-colors",
					children: f.q
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
					className: "text-muted-foreground text-base leading-relaxed pb-6",
					children: f.a
				})]
			}, i))
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border/50 bg-background pt-20 pb-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center md:items-start gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-foreground text-background font-display font-bold text-sm px-1.5 py-0.5 rounded-sm",
						children: "EM"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display font-bold text-sm tracking-widest uppercase",
						children: "Expertz Move"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Expertz Move. All rights reserved."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-6 text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-foreground transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Twitter, { className: "w-5 h-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-foreground transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "w-5 h-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-foreground transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "w-5 h-5" })
					})
				]
			})]
		})
	});
}
//#endregion
export { Landing as component };
