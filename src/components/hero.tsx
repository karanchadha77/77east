"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: 0.1 + i * 0.09,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const stats = [
  { value: "$5M–$25M", label: "Freight operator sweet spot" },
  { value: "Day 10",   label: "Monthly close target" },
  { value: "40–60%",   label: "vs. a full-time US controller" },
];

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden bg-navy">
      {/* Grid pattern overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(37,99,235,0.35) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-10 pt-36 pb-20">
        {/* Badge */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-sky uppercase backdrop-blur-sm"
        >
          <span className="size-1.5 rounded-full bg-sky animate-pulse" />
          Fractional Controller Services · US Freight &amp; Trucking
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial="hidden"
          animate="show"
          custom={1}
          variants={fadeUp}
          className="mt-8 max-w-4xl text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.0] tracking-tight text-white"
        >
          Your books,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky to-blue-light">
            closed clean.
          </span>
          <br />
          Every month.
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial="hidden"
          animate="show"
          custom={2}
          variants={fadeUp}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-white/65"
        >
          77 East Advisory embeds as your back-office controller — handling QuickBooks
          cleanup, monthly close, and cash flow visibility for asset carriers, FTL
          brokerages, and agency operations. At a fraction of what you&rsquo;re paying today.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={3}
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button
            variant="white"
            size="lg"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book a free scope call
          </Button>
          <Button
            variant="outline-white"
            size="lg"
            onClick={() =>
              document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            How it works <ArrowRight className="size-4" />
          </Button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-white/10"
        >
          {stats.map((s) => (
            <div
              key={s.value}
              className="bg-white/5 backdrop-blur-sm px-8 py-5 text-center sm:text-left"
            >
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="mt-0.5 text-sm text-white/55">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30"
      >
        <ChevronDown className="size-5 animate-bounce" />
      </motion.div>
    </section>
  );
}
