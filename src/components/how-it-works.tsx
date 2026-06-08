"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Conversation",
    body: "We learn your business, your current financial state, and where you need to get to. You get an honest picture of fit and a clear outline of what working together looks like.",
  },
  {
    n: "02",
    title: "Month 1: Stabilise",
    body: "We establish the foundation: clean books, reconciled accounts, entity mapping, and your first structured close within 30 days.",
  },
  {
    n: "03",
    title: "Month 2: Accelerate",
    body: "We expand scope: cash flow forecasting, management reporting, and any additional services brought into full monthly cadence.",
  },
  {
    n: "04",
    title: "Ongoing: Embedded",
    body: "You have a dedicated finance function. Monthly close, proactive advisory, and a team that knows your business as well as you do.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full py-24 md:py-32 border-t border-border scroll-mt-20"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl px-8 py-12 md:px-12 md:py-14 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #0a1628 0%, #1e293b 45%, #0f172a 75%, #111d33 100%)",
          }}
        >
          {/* Soft blue glow accent */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full opacity-40"
            style={{
              background:
                "radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)",
            }}
          />
          <p className="relative text-[11px] font-semibold tracking-[0.2em] uppercase text-white/40">
            How we work
          </p>
          <h2 className="relative mt-4 max-w-2xl text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
            Structured from day one.{" "}
            <em className="font-medium text-blue-200">Embedded for the long term.</em>
          </h2>
          <p className="relative mt-5 max-w-lg text-[1rem] leading-relaxed text-white/55">
            Every engagement follows a defined framework. No ambiguity about who does
            what, when — and no ramp-up time wasted.
          </p>

          <div className="relative mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <div className="text-[2.75rem] font-bold leading-none text-white/10 select-none">
                  {s.n}
                </div>
                <h3 className="mt-3 text-[1rem] font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-white/50 max-w-xs">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
