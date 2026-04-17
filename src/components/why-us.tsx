"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Freight-native expertise",
    body: "We understand factoring reconciliation, TMS-to-QB matching, load margin analysis, IFTA obligations, and multi-entity carrier structure. You won't spend time explaining your business to us.",
  },
  {
    title: "A dedicated team per engagement",
    body: "Every client gets a named senior lead and a supporting analyst team. Not a solo contractor. A structured, accountable team with defined roles — junior analyst, senior controller, client lead.",
  },
  {
    title: "Senior quality at a fraction of US cost",
    body: "Based in New Delhi — 77 East — we deliver the same calibre of financial oversight as a US-based fractional controller, at 30–50% lower cost. The savings are real. The quality is non-compromised.",
  },
  {
    title: "Process-first, not reactive",
    body: "Every engagement runs on a defined cadence — daily transaction review, weekly cost reporting, Day 10 monthly close. Documented, repeatable, and built so you always know what's happening with your money.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="w-full py-24 md:py-32 border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-fg-muted">
          Why 77 East
        </p>
        <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl font-bold leading-tight tracking-tight text-fg">
          We only work with{" "}
          <em className="font-medium">freight &amp; trucking.</em>
        </h2>
        <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-fg-muted">
          Most controller firms treat trucking like any other client. We built our entire
          practice around it — which means we already know what your books should look
          like before we open them.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-xl border border-border bg-bg-card p-8 hover:shadow-sm transition-shadow duration-300"
            >
              <h3 className="text-[1rem] font-semibold text-fg">{c.title}</h3>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-fg-muted">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
