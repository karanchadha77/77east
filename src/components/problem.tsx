"use client";

import { motion } from "framer-motion";
import {
  CalendarX,
  DollarSign,
  Search,
  FileWarning,
  Database,
  Layers,
} from "lucide-react";

const problems = [
  {
    icon: CalendarX,
    title: "Books close weeks late — if at all",
    body:
      "Your CPA or bookkeeper can't close the month consistently. You're making pricing and hiring decisions without clean data.",
    tint: "bg-rose-50 text-rose-700",
  },
  {
    icon: DollarSign,
    title: "Paying $10K–$25K/mo for a controller who's not delivering",
    body:
      "The spend is real. The output — timely reports, reconciled accounts, cash flow visibility — isn't.",
    tint: "bg-emerald-50 text-emerald-700",
  },
  {
    icon: Search,
    title: "No visibility into load-level margin",
    body:
      "You know revenue. You don't know which customers, lanes, or loads are actually profitable — and which are quietly bleeding you.",
    tint: "bg-violet-50 text-violet-700",
  },
  {
    icon: FileWarning,
    title: "Factoring reconciliation is a mess",
    body:
      "Reserves, chargebacks, and unmatched deposits pile up. Nobody on your team has the time or process to sort it out monthly.",
    tint: "bg-amber-50 text-amber-700",
  },
  {
    icon: Database,
    title: "QuickBooks hasn't been cleaned up in months",
    body:
      "Miscategorized transactions, unreconciled accounts, and data you can't trust. You know it needs work. Nobody's doing it.",
    tint: "bg-sky-50 text-sky-700",
  },
  {
    icon: Layers,
    title: "Multi-entity complexity with no structure",
    body:
      "Trucking, brokerage, and agency all running through different books — or worse, commingled — with no clean view of consolidated performance.",
    tint: "bg-fuchsia-50 text-fuchsia-700",
  },
];

const card = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Problem() {
  return (
    <section className="w-full py-24 md:py-32 border-t border-border-subtle">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted">
          The Problem
        </p>
        <h2 className="font-serif mt-4 text-4xl md:text-5xl leading-[1.05] tracking-tight text-foreground">
          Sound familiar?
        </h2>
        <p className="mt-5 max-w-2xl text-[1rem] text-muted leading-relaxed">
          Most freight operators at $5M–$25M are overpaying for financial support that
          still leaves them flying blind.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
              className="rounded-2xl bg-card border border-border-subtle p-7 md:p-8 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-12px_rgba(15,61,46,0.15)] transition-all duration-300"
            >
              <div className={`inline-flex size-10 items-center justify-center rounded-lg ${p.tint}`}>
                <p.icon className="size-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-[1.0625rem] font-semibold tracking-tight text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
