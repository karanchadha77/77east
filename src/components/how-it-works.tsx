"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Scope & fit",
    body:
      "We review your current state — QB condition, close history, entity structure — and confirm fit. No obligation, no pitch deck.",
  },
  {
    n: "02",
    title: "Pilot month",
    body:
      "Full QB cleanup for your trucking entity. First clean close. Initial reporting package. Top 5 revenue leakage findings delivered.",
  },
  {
    n: "03",
    title: "Expand scope",
    body:
      "Second consecutive clean close by Day 10. Brokerage onboarding begins. Cash flow forecasting live. Full ROI analysis delivered.",
  },
  {
    n: "04",
    title: "Full engagement",
    body:
      "We become your controller function. Monthly close, weekly cash visibility, proactive advisory. You stop opening QuickBooks yourself.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-24 md:py-32 border-t border-border-subtle">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="rounded-3xl bg-[#efe9d9] px-8 py-14 md:px-14 md:py-20">
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted">
            How it works
          </p>
          <h2 className="font-serif mt-4 text-4xl md:text-5xl leading-[1.05] tracking-tight text-foreground">
            Pilot to <em className="italic text-brand font-normal">full engagement</em>
          </h2>
          <p className="mt-5 max-w-2xl text-[1rem] text-muted leading-relaxed">
            We start with your trucking entity, prove the model, then expand. No long
            contracts before you see results.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="font-serif text-6xl md:text-7xl leading-none text-foreground/15 select-none">
                  {s.n}
                </div>
                <h3 className="mt-4 font-serif text-xl text-foreground">{s.title}</h3>
                <p className="mt-2 text-[0.9375rem] text-muted leading-relaxed max-w-sm">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
