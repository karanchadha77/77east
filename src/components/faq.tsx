"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Are you a US-based CPA firm?",
    a: "No — and we're upfront about that. We're a fractional controller team built to handle the accounting operations CPAs typically won't: monthly close, QuickBooks hygiene, factoring reconciliation, load-level margin. We partner alongside your tax CPA, not replace them.",
  },
  {
    q: "What size operators do you work with?",
    a: "Freight businesses in the $5M–$25M revenue range — where a full-time US controller is $150K+ fully loaded, but a bookkeeper isn't enough. Asset carriers, FTL brokerages, and multi-entity agency operations.",
  },
  {
    q: "How long is the pilot, and what does it cost?",
    a: "One month, flat fee, scoped after our intro call. The pilot delivers a full QB cleanup on your trucking entity, one clean close, and a Top-5 revenue leakage report. If we're not the right fit after that, you keep the work product.",
  },
  {
    q: "Do you work inside our QuickBooks / TMS / factoring portal?",
    a: "Yes. We work directly in QuickBooks Online or Desktop, pull from your TMS (McLeod, Turvo, Truckstop, Tailwind, etc.), and reconcile against your factoring provider's statements. No data re-entry, no parallel systems.",
  },
  {
    q: "What does a typical monthly engagement include?",
    a: "Monthly close by Day 10, full financial package (P&L, Balance Sheet, Cash Flow) with variance commentary, factoring reconciliation, load-level margin reporting, 13-week cash forecast, and a 30-minute owner review.",
  },
  {
    q: "How long before we're up and running?",
    a: "Scope call to first clean close is typically 3–4 weeks. Week 1: access and discovery. Weeks 2–3: cleanup. Week 4: first close. We don't disappear into a 90-day onboarding.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full py-24 md:py-32 bg-white scroll-mt-20">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <div className="text-center">
          <span className="inline-block rounded-full bg-blue-tint px-4 py-1.5 text-xs font-semibold tracking-widest text-blue uppercase">
            FAQ
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-navy leading-tight">
            Common questions
          </h2>
          <p className="mt-5 text-[1.0625rem] text-muted leading-relaxed">
            Questions operators ask before the first call.
          </p>
        </div>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-6 py-5 text-left group"
                >
                  <span
                    className={cn(
                      "text-[1rem] font-semibold transition-colors leading-snug",
                      isOpen ? "text-blue" : "text-navy group-hover:text-blue"
                    )}
                  >
                    {f.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                      "mt-0.5 shrink-0 rounded-full p-1.5 transition-colors",
                      isOpen ? "bg-blue text-white" : "bg-slate-100 text-muted"
                    )}
                  >
                    <Plus className="size-3.5" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="c"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-[0.9375rem] leading-relaxed text-muted">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
