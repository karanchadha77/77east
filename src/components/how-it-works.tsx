"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Scope & fit call",
    body: "We review your current state — QB condition, close history, entity structure — and confirm fit. No obligation, no pitch deck.",
  },
  {
    n: "02",
    title: "Pilot month",
    body: "Full QB cleanup for your trucking entity. First clean close. Initial reporting package. Top 5 revenue leakage findings delivered.",
  },
  {
    n: "03",
    title: "Expand scope",
    body: "Second clean close by Day 10. Brokerage onboarding begins. Cash flow forecasting live. Full ROI analysis delivered.",
  },
  {
    n: "04",
    title: "Full engagement",
    body: "We become your controller function. Monthly close, weekly cash visibility, proactive advisory. You stop opening QuickBooks yourself.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full py-24 md:py-32 bg-slate-50 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-blue-tint px-4 py-1.5 text-xs font-semibold tracking-widest text-blue uppercase">
            How it works
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-navy leading-tight">
            Pilot to{" "}
            <span className="text-blue">full engagement</span>
          </h2>
          <p className="mt-5 text-[1.0625rem] text-muted leading-relaxed">
            We start with your trucking entity, prove the model, then expand. No long
            contracts before you see results.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl bg-white border border-border p-7 hover:shadow-md hover:border-blue/20 transition-all duration-300"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[2.6rem] -right-3 w-6 h-px bg-blue/30 z-10" />
              )}
              <div className="text-4xl font-bold text-blue/15 leading-none select-none">
                {s.n}
              </div>
              <div className="mt-1 size-2 rounded-full bg-blue" />
              <h3 className="mt-4 text-lg font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-[0.9rem] text-muted leading-relaxed max-w-xs">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
