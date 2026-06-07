import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { Dumbbell, ChevronRight, X, Menu, Sparkles, Zap, Trophy, Check, Flame, Users, Activity, Heart, ShieldCheck, Apple, TrendingUp, Award, Instagram, Facebook, Youtube, Star, Calculator, MapPin, Phone, Mail, Clock, MessageCircle, ArrowUp } from "lucide-react";
const heroImg = "/assets/hero-gym-CfKEkuL0.jpg";
const gymInterior = "/assets/gym-interior-Dt0R8GFT.jpg";
const trainer1 = "/assets/trainer-1-BZTfiSbI.jpg";
const trainer2 = "/assets/trainer-2-BV3ybvjn.jpg";
const trainer3 = "/assets/trainer-3-BDz6GiXH.jpg";
const g1 = "/assets/gallery-1-BwD_mGsH.jpg";
const g2 = "/assets/gallery-2-DJ2Dj96J.jpg";
const g3 = "/assets/gallery-3-t8Zd6zlz.jpg";
const g4 = "/assets/gallery-4-Cs7ibSa7.jpg";
const g5 = "/assets/gallery-5-CZvDlzBv.jpg";
const g6 = "/assets/gallery-6-BAAKA1Hg.jpg";
const WHATSAPP = "https://wa.me/919999999999?text=Hi%20Jazz%20Fitness%2C%20I%27d%20like%20to%20know%20more";
const PHONE = "tel:+919999999999";
function useCounter(target, duration = 1800, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      setValue(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return value;
}
function useInView() {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current || seen) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setSeen(true);
    }, {
      threshold: 0.3
    });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [seen]);
  return {
    ref,
    seen
  };
}
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Stats, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(Programs, {}),
    /* @__PURE__ */ jsx(WhyChoose, {}),
    /* @__PURE__ */ jsx(Trainers, {}),
    /* @__PURE__ */ jsx(Transformations, {}),
    /* @__PURE__ */ jsx(Gallery, {}),
    /* @__PURE__ */ jsx(Pricing, {}),
    /* @__PURE__ */ jsx(Testimonials, {}),
    /* @__PURE__ */ jsx(BMI, {}),
    /* @__PURE__ */ jsx(FAQ, {}),
    /* @__PURE__ */ jsx(Contact, {}),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(FloatingActions, {})
  ] });
}
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = [["Home", "#home"], ["About", "#about"], ["Programs", "#programs"], ["Trainers", "#trainers"], ["Gallery", "#gallery"], ["Membership", "#pricing"], ["Contact", "#contact"]];
  return /* @__PURE__ */ jsxs("header", { className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-xl bg-background/80 border-b border-border" : "bg-transparent"}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3", children: [
      /* @__PURE__ */ jsxs("a", { href: "#home", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-gradient-brand grid place-items-center glow-blue", children: /* @__PURE__ */ jsx(Dumbbell, { className: "w-5 h-5 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxs("div", { className: "leading-tight", children: [
          /* @__PURE__ */ jsx("div", { className: "font-display font-bold text-base", children: "JAZZ FITNESS" }),
          /* @__PURE__ */ jsx("div", { className: "text-[10px] tracking-[0.2em] text-muted-foreground", children: "CHINNAMANUR" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-7", children: links.map(([l, h]) => /* @__PURE__ */ jsx("a", { href: h, className: "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors", children: l }, l)) }),
      /* @__PURE__ */ jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsxs("a", { href: "#pricing", className: "inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground glow-blue hover:scale-105 transition-transform", children: [
        "Join Now ",
        /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4" })
      ] }) }),
      /* @__PURE__ */ jsx("button", { onClick: () => setOpen(!open), className: "lg:hidden p-2 rounded-md border border-border", children: open ? /* @__PURE__ */ jsx(X, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(Menu, { className: "w-5 h-5" }) })
    ] }),
    open && /* @__PURE__ */ jsx("div", { className: "lg:hidden border-t border-border bg-background/95 backdrop-blur-xl", children: /* @__PURE__ */ jsxs("div", { className: "px-4 py-4 flex flex-col gap-3", children: [
      links.map(([l, h]) => /* @__PURE__ */ jsx("a", { href: h, onClick: () => setOpen(false), className: "text-sm font-medium py-2", children: l }, l)),
      /* @__PURE__ */ jsx("a", { href: "#pricing", onClick: () => setOpen(false), className: "mt-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground text-center", children: "Join Now" })
    ] }) })
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxs("section", { id: "home", className: "relative min-h-screen flex items-center pt-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
      /* @__PURE__ */ jsx("img", { src: heroImg, alt: "Jazz Fitness gym interior", className: "w-full h-full object-cover", width: 1920, height: 1080 }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: {
        background: "var(--gradient-hero)"
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 w-full grid lg:grid-cols-2 gap-12 items-center py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "animate-fade-up", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 backdrop-blur px-4 py-1.5 text-xs font-medium mb-6", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5 text-accent" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Where Fitness Goals Become Reality" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05]", children: [
          "Transform Your Body.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Transform Your Life." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-xl", children: "Expert trainers, personalized diet plans, strength training, physiotherapy & complete fitness solutions — all under one roof in Chinnamanur." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxs("a", { href: "#pricing", className: "inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 font-semibold text-primary-foreground glow-blue hover:scale-105 transition-transform", children: [
            "Join Now ",
            /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4" })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "#contact", className: "inline-flex items-center gap-2 rounded-full border-2 border-border bg-surface/50 backdrop-blur px-7 py-3.5 font-semibold hover:border-primary transition-colors", children: [
            /* @__PURE__ */ jsx(Zap, { className: "w-4 h-4 text-accent" }),
            " Free Trial Session"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hidden lg:block relative animate-float", children: /* @__PURE__ */ jsx("div", { className: "absolute -inset-10", style: {
        background: "var(--gradient-glow)"
      } }) })
    ] })
  ] });
}
function Stats() {
  const {
    ref,
    seen
  } = useInView();
  const items = [{
    v: 500,
    suffix: "+",
    label: "Happy Members"
  }, {
    v: 10,
    suffix: "+",
    label: "Years Experience"
  }, {
    v: 15,
    suffix: "+",
    label: "Certified Trainers"
  }, {
    v: 24,
    suffix: "/7",
    label: "Support"
  }];
  return /* @__PURE__ */ jsx("section", { ref, className: "relative py-16 border-y border-border bg-surface/40", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8", children: items.map((it, i) => /* @__PURE__ */ jsx(StatItem, { ...it, start: seen }, i)) }) });
}
function StatItem({
  v,
  suffix,
  label,
  start
}) {
  const n = useCounter(v, 1800, start);
  return /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-4xl sm:text-5xl font-display font-black gradient-text", children: [
      n,
      suffix
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm text-muted-foreground uppercase tracking-wider", children: label })
  ] });
}
function About() {
  const features = ["Expert Trainers", "Injury-Free Training", "Modern Equipment", "Personalized Coaching", "Nutrition Guidance", "Physiotherapy Support"];
  return /* @__PURE__ */ jsx("section", { id: "about", className: "py-24 sm:py-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("img", { src: gymInterior, alt: "Jazz Fitness gym interior", loading: "lazy", width: 1280, height: 960, className: "rounded-2xl border border-border glow-blue" }),
      /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-6 -right-6 hidden sm:flex card-premium px-6 py-4 items-center gap-3", children: [
        /* @__PURE__ */ jsx(Trophy, { className: "w-8 h-8 text-accent" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-bold", children: "#1 Gym" }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "in Chinnamanur" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(SectionEyebrow, { children: "About Us" }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-3 text-4xl sm:text-5xl font-black leading-tight", children: [
        "Built for Champions.",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Designed for You." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 text-muted-foreground text-lg", children: "Jazz Fitness Chinnamanur is more than a gym — it's a complete fitness ecosystem. From world-class equipment to certified coaches, every detail is crafted to push you toward your strongest self." }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 grid sm:grid-cols-2 gap-3", children: features.map((f) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 card-premium px-4 py-3", children: [
        /* @__PURE__ */ jsx("div", { className: "w-7 h-7 rounded-full bg-gradient-brand grid place-items-center shrink-0", children: /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-primary-foreground" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: f })
      ] }, f)) })
    ] })
  ] }) });
}
function Programs() {
  const programs = [{
    icon: Flame,
    title: "Weight Loss",
    desc: "Fat-burning workouts & personalized nutrition plans."
  }, {
    icon: Dumbbell,
    title: "Muscle Building",
    desc: "Hypertrophy training for serious mass and strength."
  }, {
    icon: Users,
    title: "Personal Training",
    desc: "One-on-one coaching tailored to your goals."
  }, {
    icon: Activity,
    title: "Functional Training",
    desc: "Mobility, agility and real-world performance."
  }, {
    icon: Heart,
    title: "Women's Fitness",
    desc: "Customized programs in a friendly environment."
  }, {
    icon: ShieldCheck,
    title: "Physiotherapy",
    desc: "Recovery, rehab and injury prevention."
  }, {
    icon: Apple,
    title: "Nutrition Coaching",
    desc: "Diet plans that fit your body & lifestyle."
  }, {
    icon: TrendingUp,
    title: "Body Transformation",
    desc: "Complete 12-week transformation programs."
  }];
  return /* @__PURE__ */ jsx("section", { id: "programs", className: "py-24 sm:py-32 relative", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsx(SectionEyebrow, { children: "Programs" }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-3 text-4xl sm:text-5xl font-black", children: [
        "Train Smart. ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Train Hard." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "Choose a program crafted by experts to match your fitness journey." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: programs.map((p) => /* @__PURE__ */ jsxs("div", { className: "card-premium card-premium-hover p-6 group", children: [
      /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-gradient-brand grid place-items-center mb-5 group-hover:scale-110 transition-transform glow-blue", children: /* @__PURE__ */ jsx(p.icon, { className: "w-6 h-6 text-primary-foreground" }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold", children: p.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.desc }),
      /* @__PURE__ */ jsxs("a", { href: "#contact", className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:gap-2 transition-all", children: [
        "Learn More ",
        /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4" })
      ] })
    ] }, p.title)) })
  ] }) });
}
function WhyChoose() {
  const items = [{
    icon: Award,
    title: "Certified Trainers",
    desc: "Backed by international certifications."
  }, {
    icon: Activity,
    title: "Personalized Plans",
    desc: "Workouts engineered for your body type."
  }, {
    icon: Apple,
    title: "Custom Diet Plans",
    desc: "Nutrition that fits your goals & taste."
  }, {
    icon: Dumbbell,
    title: "Advanced Equipment",
    desc: "Imported, commercial-grade machines."
  }, {
    icon: Users,
    title: "Friendly Environment",
    desc: "A community that lifts you up."
  }, {
    icon: ShieldCheck,
    title: "Injury Prevention",
    desc: "Safe form, smart progression."
  }, {
    icon: TrendingUp,
    title: "Progress Tracking",
    desc: "Measure every win, every week."
  }, {
    icon: Trophy,
    title: "Transformation Support",
    desc: "Mentorship from day 1 to goal."
  }];
  return /* @__PURE__ */ jsx("section", { className: "py-24 sm:py-32 bg-surface/40 border-y border-border", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsx(SectionEyebrow, { children: "Why Jazz Fitness" }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-3 text-4xl sm:text-5xl font-black", children: [
        "The ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Elite Edge" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: items.map((it) => /* @__PURE__ */ jsxs("div", { className: "card-premium card-premium-hover p-6", children: [
      /* @__PURE__ */ jsx(it.icon, { className: "w-8 h-8 text-accent mb-4" }),
      /* @__PURE__ */ jsx("h3", { className: "font-bold", children: it.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-sm text-muted-foreground", children: it.desc })
    ] }, it.title)) })
  ] }) });
}
function Trainers() {
  const trainers = [{
    img: trainer1,
    name: "Arjun Kumar",
    role: "Head Strength Coach",
    cert: "NSCA-CSCS · 8+ yrs"
  }, {
    img: trainer2,
    name: "Priya Sharma",
    role: "Women's Fitness Lead",
    cert: "ACSM · 6+ yrs"
  }, {
    img: trainer3,
    name: "Karthik R.",
    role: "Personal Trainer & Physio",
    cert: "ACE · MPT · 10+ yrs"
  }];
  return /* @__PURE__ */ jsx("section", { id: "trainers", className: "py-24 sm:py-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsx(SectionEyebrow, { children: "Meet the Team" }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-3 text-4xl sm:text-5xl font-black", children: [
        "Our ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Expert Trainers" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid md:grid-cols-3 gap-6", children: trainers.map((t) => /* @__PURE__ */ jsxs("div", { className: "card-premium card-premium-hover overflow-hidden group", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/5] overflow-hidden", children: [
        /* @__PURE__ */ jsx("img", { src: t.img, alt: t.name, loading: "lazy", width: 800, height: 1e3, className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: t.name }),
        /* @__PURE__ */ jsx("p", { className: "text-sm gradient-text font-semibold", children: t.role }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: t.cert }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex gap-3", children: [
          /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "Instagram", className: "w-9 h-9 rounded-full border border-border grid place-items-center hover:bg-gradient-brand hover:border-transparent transition-colors", children: /* @__PURE__ */ jsx(Instagram, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "Facebook", className: "w-9 h-9 rounded-full border border-border grid place-items-center hover:bg-gradient-brand hover:border-transparent transition-colors", children: /* @__PURE__ */ jsx(Facebook, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "Youtube", className: "w-9 h-9 rounded-full border border-border grid place-items-center hover:bg-gradient-brand hover:border-transparent transition-colors", children: /* @__PURE__ */ jsx(Youtube, { className: "w-4 h-4" }) })
        ] })
      ] })
    ] }, t.name)) })
  ] }) });
}
function Transformations() {
  const {
    ref,
    seen
  } = useInView();
  const stories = [{
    name: "Ravi M.",
    change: "-22 kg",
    time: "6 months",
    quote: "Jazz Fitness gave me my confidence back."
  }, {
    name: "Anitha P.",
    change: "+8 kg muscle",
    time: "9 months",
    quote: "Strongest I've ever felt in my life."
  }, {
    name: "Suresh K.",
    change: "-18 kg",
    time: "5 months",
    quote: "Coaches that genuinely care."
  }];
  const counters = [{
    v: 1200,
    suffix: "+",
    label: "Kg Lost"
  }, {
    v: 350,
    suffix: "+",
    label: "Transformations"
  }, {
    v: 98,
    suffix: "%",
    label: "Success Rate"
  }];
  return /* @__PURE__ */ jsx("section", { ref, className: "py-24 sm:py-32 relative", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsx(SectionEyebrow, { children: "Success Stories" }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-3 text-4xl sm:text-5xl font-black", children: [
        "Real People. ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Real Results." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid sm:grid-cols-3 gap-6 mb-12", children: counters.map((c, i) => /* @__PURE__ */ jsx(StatItem, { v: c.v, suffix: c.suffix, label: c.label, start: seen }, i)) }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: stories.map((s) => /* @__PURE__ */ jsxs("div", { className: "card-premium card-premium-hover p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ jsx("div", { className: "text-3xl font-display font-black gradient-text", children: s.change }),
        /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: s.time })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 italic text-muted-foreground", children: [
        '"',
        s.quote,
        '"'
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 font-semibold", children: [
        "— ",
        s.name
      ] })
    ] }, s.name)) })
  ] }) });
}
function Gallery() {
  const imgs = [g1, g2, g3, g4, g5, g6];
  const [open, setOpen] = useState(null);
  return /* @__PURE__ */ jsxs("section", { id: "gallery", className: "py-24 sm:py-32 bg-surface/40 border-y border-border", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsx(SectionEyebrow, { children: "Gallery" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-3 text-4xl sm:text-5xl font-black", children: [
          "Inside ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Jazz Fitness" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4", children: imgs.map((src, i) => /* @__PURE__ */ jsxs("button", { onClick: () => setOpen(src), className: `group relative overflow-hidden rounded-xl border border-border ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`, children: [
        /* @__PURE__ */ jsx("img", { src, alt: `Gym photo ${i + 1}`, loading: "lazy", width: 900, height: 900, className: "w-full h-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" })
      ] }, i)) })
    ] }),
    open && /* @__PURE__ */ jsx("div", { onClick: () => setOpen(null), className: "fixed inset-0 z-[60] bg-background/90 backdrop-blur-md grid place-items-center p-4 animate-fade-up", children: /* @__PURE__ */ jsx("img", { src: open, alt: "Enlarged", className: "max-h-[90vh] max-w-full rounded-xl border border-border glow-purple" }) })
  ] });
}
function Pricing() {
  const [period, setPeriod] = useState("monthly");
  const mult = {
    monthly: 1,
    quarterly: 2.7,
    annual: 9.5
  }[period];
  const sufx = {
    monthly: "/mo",
    quarterly: "/quarter",
    annual: "/year"
  }[period];
  const plans = [{
    name: "Basic",
    price: 1499,
    features: ["Full Gym Access", "Locker Access", "Group Classes", "Open 6 AM–10 PM"],
    popular: false
  }, {
    name: "Standard",
    price: 2499,
    features: ["Everything in Basic", "Custom Diet Plan", "Monthly Progress Review", "Body Composition Analysis"],
    popular: true
  }, {
    name: "Premium",
    price: 3999,
    features: ["Everything in Standard", "1-on-1 Personal Training", "Physiotherapy Support", "Priority 24/7 Support"],
    popular: false
  }];
  return /* @__PURE__ */ jsx("section", { id: "pricing", className: "py-24 sm:py-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsx(SectionEyebrow, { children: "Membership" }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-3 text-4xl sm:text-5xl font-black", children: [
        "Plans Built to ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Fit You" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 inline-flex p-1 rounded-full border border-border bg-surface", children: ["monthly", "quarterly", "annual"].map((p) => /* @__PURE__ */ jsx("button", { onClick: () => setPeriod(p), className: `px-5 py-2 rounded-full text-sm font-semibold capitalize transition-all ${period === p ? "bg-gradient-brand text-primary-foreground glow-blue" : "text-muted-foreground"}`, children: p }, p)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid md:grid-cols-3 gap-6", children: plans.map((pl) => /* @__PURE__ */ jsxs("div", { className: `card-premium card-premium-hover p-8 relative ${pl.popular ? "border-primary/60 glow-blue" : ""}`, children: [
      pl.popular && /* @__PURE__ */ jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-brand text-xs font-bold text-primary-foreground", children: "MOST POPULAR" }),
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-display font-bold", children: pl.name }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-baseline gap-1", children: [
        /* @__PURE__ */ jsxs("span", { className: "text-5xl font-black gradient-text", children: [
          "₹",
          Math.round(pl.price * mult).toLocaleString("en-IN")
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: sufx })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "mt-6 space-y-3", children: pl.features.map((f) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
        /* @__PURE__ */ jsx(Check, { className: "w-5 h-5 text-accent shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsx("span", { children: f })
      ] }, f)) }),
      /* @__PURE__ */ jsx("a", { href: WHATSAPP, target: "_blank", rel: "noreferrer", className: `mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-all ${pl.popular ? "bg-gradient-brand text-primary-foreground glow-purple hover:scale-105" : "border-2 border-border hover:border-primary"}`, children: "Join Now" })
    ] }, pl.name)) })
  ] }) });
}
function Testimonials() {
  const items = [{
    name: "Mohan S.",
    text: "Best gym in Chinnamanur. Trainers are top-class and the equipment is brand new.",
    rating: 5
  }, {
    name: "Lakshmi K.",
    text: "I lost 12 kg in 4 months. The diet plan was practical and the coaches kept me motivated.",
    rating: 5
  }, {
    name: "Vignesh R.",
    text: "Premium facility at a fair price. Highly recommend the personal training package.",
    rating: 5
  }, {
    name: "Divya M.",
    text: "Loved the women-only sessions. Felt safe, supported and pushed every single day.",
    rating: 5
  }];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 4500);
    return () => clearInterval(t);
  }, [items.length]);
  return /* @__PURE__ */ jsx("section", { className: "py-24 sm:py-32 bg-surface/40 border-y border-border", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 text-center", children: [
    /* @__PURE__ */ jsx(SectionEyebrow, { children: "Testimonials" }),
    /* @__PURE__ */ jsxs("h2", { className: "mt-3 text-4xl sm:text-5xl font-black", children: [
      "What Our ",
      /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Members Say" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 card-premium p-8 sm:p-12 min-h-[260px] relative overflow-hidden", children: items.map((it, i) => /* @__PURE__ */ jsxs("div", { className: `transition-opacity duration-500 ${i === idx ? "opacity-100" : "opacity-0 absolute inset-0 p-8 sm:p-12"}`, children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-1 mb-4", children: Array.from({
        length: it.rating
      }).map((_, j) => /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 fill-accent text-accent" }, j)) }),
      /* @__PURE__ */ jsxs("p", { className: "text-lg sm:text-xl italic text-foreground/90", children: [
        '"',
        it.text,
        '"'
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 font-semibold", children: [
        "— ",
        it.name
      ] })
    ] }, i)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 flex justify-center gap-2", children: items.map((_, i) => /* @__PURE__ */ jsx("button", { onClick: () => setIdx(i), "aria-label": `Slide ${i + 1}`, className: `h-2 rounded-full transition-all ${i === idx ? "w-8 bg-gradient-brand" : "w-2 bg-border"}` }, i)) })
  ] }) });
}
function BMI() {
  const [h, setH] = useState("170");
  const [w, setW] = useState("70");
  const hm = parseFloat(h) / 100;
  const bmi = hm > 0 ? parseFloat(w) / (hm * hm) : 0;
  const cat = bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal" : bmi < 30 ? "Overweight" : bmi > 0 ? "Obese" : "—";
  const rec = bmi < 18.5 ? "Try our Muscle Building program." : bmi < 25 ? "Maintain with Functional Training." : bmi < 30 ? "Start with our Weight Loss program." : bmi > 0 ? "Personal Training + Diet Plan recommended." : "Enter your details.";
  return /* @__PURE__ */ jsx("section", { className: "py-24 sm:py-32", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "card-premium p-8 sm:p-12 grid md:grid-cols-2 gap-10 items-center", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(SectionEyebrow, { children: [
        /* @__PURE__ */ jsx(Calculator, { className: "w-3.5 h-3.5 inline mr-1" }),
        " BMI Calculator"
      ] }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-3 text-3xl sm:text-4xl font-black", children: [
        "Know Your ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Number" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-4", children: [
        /* @__PURE__ */ jsx(Field, { label: "Height (cm)", value: h, onChange: setH }),
        /* @__PURE__ */ jsx(Field, { label: "Weight (kg)", value: w, onChange: setW })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-center md:text-left", children: [
      /* @__PURE__ */ jsx("div", { className: "text-sm uppercase tracking-wider text-muted-foreground", children: "Your BMI" }),
      /* @__PURE__ */ jsx("div", { className: "mt-2 text-7xl font-display font-black gradient-text", children: bmi > 0 ? bmi.toFixed(1) : "—" }),
      /* @__PURE__ */ jsx("div", { className: "mt-2 text-xl font-semibold", children: cat }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: rec }),
      /* @__PURE__ */ jsxs("a", { href: "#contact", className: "mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 font-semibold text-primary-foreground glow-blue", children: [
        "Get Personalized Plan ",
        /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4" })
      ] })
    ] })
  ] }) }) });
}
function Field({
  label,
  value,
  onChange
}) {
  return /* @__PURE__ */ jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx("input", { type: "number", value, onChange: (e) => onChange(e.target.value), className: "mt-1 w-full rounded-lg border border-border bg-input/50 px-4 py-3 text-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30" })
  ] });
}
function FAQ() {
  const faqs = [{
    q: "What are the membership fees?",
    a: "Plans start at ₹1,499/month. See our Membership section for full pricing."
  }, {
    q: "Do you offer personal training?",
    a: "Yes — included in our Premium plan or available as an add-on for any member."
  }, {
    q: "Are diet plans personalized?",
    a: "Absolutely. Our nutrition coaches build plans around your goals, body type, and food preferences."
  }, {
    q: "What are the gym timings?",
    a: "We're open 6:00 AM – 10:00 PM, with 24/7 access for Premium members."
  }, {
    q: "Can I try the gym before joining?",
    a: "Yes! Book a free trial session through our Contact form or WhatsApp."
  }];
  const [openIdx, setOpenIdx] = useState(0);
  return /* @__PURE__ */ jsx("section", { className: "py-24 sm:py-32 bg-surface/40 border-y border-border", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx(SectionEyebrow, { children: "FAQ" }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-3 text-4xl sm:text-5xl font-black", children: [
        "Questions? ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Answered." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 space-y-3", children: faqs.map((f, i) => /* @__PURE__ */ jsxs("div", { className: "card-premium overflow-hidden", children: [
      /* @__PURE__ */ jsxs("button", { onClick: () => setOpenIdx(openIdx === i ? null : i), className: "w-full flex items-center justify-between gap-4 p-5 text-left", children: [
        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: f.q }),
        /* @__PURE__ */ jsx(ChevronRight, { className: `w-5 h-5 transition-transform ${openIdx === i ? "rotate-90 text-accent" : ""}` })
      ] }),
      openIdx === i && /* @__PURE__ */ jsx("div", { className: "px-5 pb-5 text-muted-foreground text-sm", children: f.a })
    ] }, i)) })
  ] }) });
}
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "py-24 sm:py-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsx(SectionEyebrow, { children: "Get Started" }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-3 text-4xl sm:text-5xl font-black", children: [
        "Visit Us. ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Start Today." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-14 grid lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "card-premium p-8", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold", children: "Contact Details" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-5", children: [
          /* @__PURE__ */ jsxs(InfoRow, { icon: MapPin, title: "Address", children: [
            "177/4, Cumbum Main Road,",
            /* @__PURE__ */ jsx("br", {}),
            "Chinnamanur, Tamil Nadu 625515"
          ] }),
          /* @__PURE__ */ jsx(InfoRow, { icon: Phone, title: "Call", children: /* @__PURE__ */ jsx("a", { href: PHONE, className: "hover:text-accent", children: "+91 99999 99999" }) }),
          /* @__PURE__ */ jsx(InfoRow, { icon: Mail, title: "Email", children: /* @__PURE__ */ jsx("a", { href: "mailto:hello@jazzfitness.in", className: "hover:text-accent", children: "hello@jazzfitness.in" }) }),
          /* @__PURE__ */ jsx(InfoRow, { icon: Clock, title: "Hours", children: "Mon–Sun: 6:00 AM – 10:00 PM" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxs("a", { href: PHONE, className: "inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground glow-blue", children: [
            /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }),
            " Call"
          ] }),
          /* @__PURE__ */ jsxs("a", { href: WHATSAPP, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 rounded-full border-2 border-border px-5 py-2.5 text-sm font-semibold hover:border-primary", children: [
            /* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4 text-accent" }),
            " WhatsApp"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 rounded-xl overflow-hidden border border-border", children: /* @__PURE__ */ jsx("iframe", { title: "Jazz Fitness Location", src: "https://maps.google.com/maps?q=Chinnamanur,Tamil+Nadu&output=embed", width: "100%", height: "220", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        setSubmitted(true);
      }, className: "card-premium p-8 space-y-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold", children: "Send an Enquiry" }),
        /* @__PURE__ */ jsx(Input, { name: "name", label: "Full Name", required: true }),
        /* @__PURE__ */ jsx(Input, { name: "mobile", label: "Mobile Number", type: "tel", required: true }),
        /* @__PURE__ */ jsx(Input, { name: "email", label: "Email", type: "email" }),
        /* @__PURE__ */ jsx(Select, { name: "goal", label: "Fitness Goal", options: ["Weight Loss", "Muscle Building", "Personal Training", "Physiotherapy", "Nutrition Coaching", "Other"] }),
        /* @__PURE__ */ jsxs("label", { className: "block", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "Message" }),
          /* @__PURE__ */ jsx("textarea", { name: "message", rows: 4, className: "mt-1 w-full rounded-lg border border-border bg-input/50 px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30" })
        ] }),
        /* @__PURE__ */ jsx("button", { type: "submit", className: "w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 font-semibold text-primary-foreground glow-purple hover:scale-[1.02] transition-transform", children: submitted ? "Thank you! We'll be in touch." : "Send Message" })
      ] })
    ] })
  ] }) });
}
function InfoRow({
  icon: Icon,
  title,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
    /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-xl bg-gradient-brand grid place-items-center shrink-0 glow-blue", children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5 text-primary-foreground" }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "font-semibold", children: title }),
      /* @__PURE__ */ jsx("div", { className: "text-muted-foreground text-sm mt-0.5", children })
    ] })
  ] });
}
function Input({
  label,
  name,
  type = "text",
  required
}) {
  return /* @__PURE__ */ jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxs("span", { className: "text-sm text-muted-foreground", children: [
      label,
      required && " *"
    ] }),
    /* @__PURE__ */ jsx("input", { name, type, required, className: "mt-1 w-full rounded-lg border border-border bg-input/50 px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30" })
  ] });
}
function Select({
  label,
  name,
  options
}) {
  return /* @__PURE__ */ jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx("select", { name, className: "mt-1 w-full rounded-lg border border-border bg-input/50 px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30", children: options.map((o) => /* @__PURE__ */ jsx("option", { children: o }, o)) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "border-t border-border bg-surface/60", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-14 grid md:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-lg bg-gradient-brand grid place-items-center", children: /* @__PURE__ */ jsx(Dumbbell, { className: "w-4 h-4 text-primary-foreground" }) }),
          /* @__PURE__ */ jsx("div", { className: "font-display font-bold", children: "JAZZ FITNESS" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "Where fitness goals become reality. Premium gym & coaching in Chinnamanur, Tamil Nadu." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex gap-2", children: [
          /* @__PURE__ */ jsx(SocialBtn, { icon: Instagram }),
          /* @__PURE__ */ jsx(SocialBtn, { icon: Facebook }),
          /* @__PURE__ */ jsx(SocialBtn, { icon: Youtube })
        ] })
      ] }),
      /* @__PURE__ */ jsx(FooterCol, { title: "Quick Links", links: [["About", "#about"], ["Programs", "#programs"], ["Trainers", "#trainers"], ["Gallery", "#gallery"]] }),
      /* @__PURE__ */ jsx(FooterCol, { title: "Membership", links: [["Basic", "#pricing"], ["Standard", "#pricing"], ["Premium", "#pricing"], ["Free Trial", "#contact"]] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-bold mb-4", children: "Newsletter" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-3", children: "Get fitness tips & offers in your inbox." }),
        /* @__PURE__ */ jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "flex gap-2", children: [
          /* @__PURE__ */ jsx("input", { type: "email", placeholder: "Email", className: "flex-1 min-w-0 rounded-full border border-border bg-input/50 px-4 py-2.5 text-sm focus:outline-none focus:border-primary" }),
          /* @__PURE__ */ jsx("button", { className: "rounded-full bg-gradient-brand px-4 py-2.5 text-sm font-semibold text-primary-foreground", children: "Join" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-border py-5 text-center text-xs text-muted-foreground", children: "© 2026 Jazz Fitness Chinnamanur. All Rights Reserved." })
  ] });
}
function FooterCol({
  title,
  links
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h4", { className: "font-bold mb-4", children: title }),
    /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: links.map(([l, h]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: h, className: "text-muted-foreground hover:text-accent", children: l }) }, l)) })
  ] });
}
function SocialBtn({
  icon: Icon
}) {
  return /* @__PURE__ */ jsx("a", { href: "#", className: "w-9 h-9 rounded-full border border-border grid place-items-center hover:bg-gradient-brand hover:border-transparent transition-colors", children: /* @__PURE__ */ jsx(Icon, { className: "w-4 h-4" }) });
}
function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const h = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "fixed right-4 bottom-4 z-50 flex flex-col gap-3", children: [
    show && /* @__PURE__ */ jsx("button", { onClick: () => window.scrollTo({
      top: 0,
      behavior: "smooth"
    }), "aria-label": "Scroll to top", className: "w-12 h-12 rounded-full bg-surface border border-border grid place-items-center hover:bg-gradient-brand transition-colors", children: /* @__PURE__ */ jsx(ArrowUp, { className: "w-5 h-5" }) }),
    /* @__PURE__ */ jsx("a", { href: PHONE, "aria-label": "Call", className: "w-12 h-12 rounded-full bg-gradient-brand grid place-items-center glow-blue animate-pulse-glow", children: /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5 text-primary-foreground" }) }),
    /* @__PURE__ */ jsx("a", { href: WHATSAPP, target: "_blank", rel: "noreferrer", "aria-label": "WhatsApp", className: "w-12 h-12 rounded-full grid place-items-center glow-purple animate-pulse-glow", style: {
      background: "linear-gradient(135deg, #25D366, #128C7E)"
    }, children: /* @__PURE__ */ jsx(MessageCircle, { className: "w-5 h-5 text-white" }) })
  ] });
}
function SectionEyebrow({
  children
}) {
  return /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-accent", children: [
    /* @__PURE__ */ jsx("span", { className: "w-8 h-px bg-accent" }),
    children
  ] });
}
export {
  Index as component
};
