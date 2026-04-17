"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "$5M–$25M",
    label: "Freight operator sweet spot",
    sub: "Asset carriers, FTL brokerages, and multi-entity agency operations.",
  },
  {
    value: "Day 10",
    label: "Close target every month",
    sub: "Reports delivered before the 10th business day — not the 25th.",
  },
  {
    value: "40–60%",
    label: "vs. a US full-time controller",
    sub: "Fractional pricing built for operators, not enterprise finance teams.",
  },
  {
    value: "Top 5",
    label: "Revenue leaks found in Month 1",
    sub: "Mis-billed lanes, missed accessorials, and underpriced customers — documented.",
  },
];

export function Results() {
  return (
    <section className="w-full py-24 md:py-32 bg-navy overflow-hidden relative">
      {/* Subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-sky uppercase">
            By the numbers
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
            Real outputs.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky to-blue-light">
              Not a dashboard demo.
            </span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-sky to-blue-light">
                {s.value}
              </div>
              <div className="mt-2 text-[0.9375rem] font-semibold text-white">
                {s.label}
              </div>
              <p className="mt-2 text-[0.875rem] text-white/50 leading-relaxed">
                {s.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
