"use client";

import { motion } from "framer-motion";

const tiles = [
  {
    title: "Early-Stage & Scaling Businesses",
    body: "Clean books, structured reporting, and cash visibility from the start — so you're never making decisions in the dark as you grow.",
  },
  {
    title: "Established & Multi-Entity Operations",
    body: "Complex entity structures, consolidated reporting, and compliance-ready financials — managed with the rigour your business demands.",
  },
  {
    title: "Businesses in Transition",
    body: "Outgrowing your current setup, preparing for investment, or restructuring operations — we bring order, clarity, and a finance function that's ready for what's next.",
  },
];

export function WhoWeWorkWith() {
  return (
    <section id="who-we-work-with" className="w-full py-24 md:py-32 border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-fg-muted">
          Who we work with
        </p>
        <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl font-bold leading-tight tracking-tight text-fg">
          Built for businesses at{" "}
          <em className="font-medium">every stage of growth</em>
        </h2>
        <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-fg-muted">
          Whether you&rsquo;re an early-stage business getting your books in order, or an
          established operation that&rsquo;s outgrown its current finance setup — we step in
          as your finance team and build the function your next phase requires.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiles.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-bg-card p-8 hover:shadow-sm transition-shadow duration-300"
            >
              <h3 className="text-[1rem] font-semibold text-fg">{t.title}</h3>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-fg-muted">{t.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
