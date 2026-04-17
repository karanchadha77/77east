"use client";

import { motion, type Variants } from "framer-motion";
import {
  CalendarX, DollarSign, Search, FileWarning, Database, Layers,
} from "lucide-react";

const problems = [
  {
    icon: CalendarX,
    title: "Books close weeks late — if at all",
    body: "Your CPA or bookkeeper can't close the month consistently. You're making pricing and hiring decisions without clean data.",
  },
  {
    icon: DollarSign,
    title: "Paying $10K–$25K/mo for a controller who's not delivering",
    body: "The spend is real. The output — timely reports, reconciled accounts, cash flow visibility — isn't.",
  },
  {
    icon: Search,
    title: "No visibility into load-level margin",
    body: "You know revenue. You don't know which customers, lanes, or loads are actually profitable — and which are quietly bleeding you.",
  },
  {
    icon: FileWarning,
    title: "Factoring reconciliation is a mess",
    body: "Reserves, chargebacks, and unmatched deposits pile up. Nobody on your team has the time or process to sort it out monthly.",
  },
  {
    icon: Database,
    title: "QuickBooks hasn't been cleaned up in months",
    body: "Miscategorized transactions, unreconciled accounts, and data you can't trust. You know it needs work. Nobody's doing it.",
  },
  {
    icon: Layers,
    title: "Multi-entity complexity with no structure",
    body: "Trucking, brokerage, and agency all running through different books — or worse, commingled — with no clean consolidated view.",
  },
];

const card: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06 },
  }),
};

export function Problem() {
  return (
    <section className="w-full py-24 md:py-32 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-blue-tint px-4 py-1.5 text-xs font-semibold tracking-widest text-blue uppercase">
            The Problem
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-navy leading-tight">
            Sound familiar?
          </h2>
          <p className="mt-5 text-[1.0625rem] text-muted leading-relaxed">
            Most freight operators at $5M–$25M are overpaying for financial support that
            still leaves them flying blind.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
              className="group rounded-2xl bg-white border border-border p-7 hover:shadow-lg hover:border-blue/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="inline-flex size-11 items-center justify-center rounded-xl bg-blue-tint text-blue group-hover:bg-blue group-hover:text-white transition-colors duration-300">
                <p.icon className="size-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-[1rem] font-semibold text-navy leading-snug">
                {p.title}
              </h3>
              <p className="mt-2.5 text-[0.9rem] leading-relaxed text-muted">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
