"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Service = {
  tag: "CORE" | "FREIGHT-SPECIFIC" | "ONGOING";
  title: string;
  bullets: string[];
};

const services: Service[] = [
  {
    tag: "CORE",
    title: "Monthly close & financial reporting",
    bullets: [
      "Full close execution targeting Day 10 of every month",
      "P&L, Balance Sheet, Cash Flow Statement delivered as a package",
      "Variance analysis vs. prior month with commentary",
      "Documented close checklist — same process, every month",
    ],
  },
  {
    tag: "CORE",
    title: "QuickBooks cleanup & back-office rebuild",
    bullets: [
      "Chart of accounts restructured for freight operations",
      "Historical transactions recategorized and reconciled",
      "Bank, credit card, and loan accounts tied to the penny",
      "Hand-off documentation so your team can run it day-to-day",
    ],
  },
  {
    tag: "FREIGHT-SPECIFIC",
    title: "Factoring & AR reconciliation",
    bullets: [
      "Monthly reconciliation against your factoring statement",
      "Reserve tracking, chargeback resolution, and aging review",
      "Unmatched deposits identified and applied",
      "Cash posting discipline so AR stays trustworthy",
    ],
  },
  {
    tag: "FREIGHT-SPECIFIC",
    title: "Load-level margin & lane profitability",
    bullets: [
      "Per-load revenue, cost, and margin reporting from your TMS",
      "Customer, lane, and driver profitability breakdowns",
      "Identify the 20% of loads quietly losing money",
      "Monthly pricing and lane-mix recommendations",
    ],
  },
  {
    tag: "ONGOING",
    title: "Cash flow forecasting & advisory",
    bullets: [
      "13-week rolling cash flow forecast you actually trust",
      "Weekly cash visibility for equipment, fuel, and payroll decisions",
      "Proactive flags on covenant, insurance, and tax deadlines",
      "Quarterly review with owner — numbers that drive decisions",
    ],
  },
];

const tagColor: Record<Service["tag"], string> = {
  CORE: "bg-brand-tint text-brand",
  "FREIGHT-SPECIFIC": "bg-amber-100/70 text-amber-900",
  ONGOING: "bg-slate-200/60 text-slate-700",
};

export function Services() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="w-full py-24 md:py-32 border-t border-border-subtle">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted">
          What We Do
        </p>
        <h2 className="font-serif mt-4 text-4xl md:text-5xl leading-[1.05] tracking-tight text-foreground">
          Controller services built for{" "}
          <em className="italic text-brand font-normal">freight</em>
        </h2>
        <p className="mt-5 max-w-2xl text-[1rem] text-muted leading-relaxed">
          Not generic bookkeeping. Not a US firm charging CFO rates for accounting work.
          A dedicated team that understands factoring, TMS reconciliation, and multi-entity
          freight operations.
        </p>

        <div className="mt-14 space-y-3">
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={s.title}
                layout
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={cn(
                  "rounded-xl border transition-colors",
                  isOpen
                    ? "bg-brand-tint border-brand/30"
                    : "bg-card border-border-subtle hover:border-foreground/20"
                )}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 md:px-7 py-5 text-left"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span
                      className={cn(
                        "rounded-md px-2 py-1 text-[10px] font-semibold tracking-[0.12em]",
                        tagColor[s.tag]
                      )}
                    >
                      {s.tag}
                    </span>
                    <span className="font-serif text-lg md:text-xl text-foreground truncate">
                      {s.title}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-muted shrink-0"
                  >
                    <ChevronDown className="size-5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <ul className="px-6 md:px-7 pb-6 pt-1 space-y-2">
                        {s.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex gap-3 text-[0.9375rem] text-foreground/80 leading-relaxed"
                          >
                            <span className="mt-[0.6rem] inline-block size-1 shrink-0 rounded-full bg-brand" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
