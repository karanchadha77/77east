"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Tag = "CORE" | "FREIGHT-SPECIFIC" | "ONGOING";

type Service = {
  tag: Tag;
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

const tagStyles: Record<Tag, string> = {
  "CORE": "bg-blue-tint text-blue",
  "FREIGHT-SPECIFIC": "bg-sky-tint text-sky",
  "ONGOING": "bg-slate-100 text-slate-500",
};

export function Services() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="services" className="w-full py-24 md:py-32 bg-white scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-blue-tint px-4 py-1.5 text-xs font-semibold tracking-widest text-blue uppercase">
            What We Do
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-navy leading-tight">
            Controller services built{" "}
            <span className="text-blue">for freight</span>
          </h2>
          <p className="mt-5 text-[1.0625rem] text-muted leading-relaxed">
            Not generic bookkeeping. A dedicated team that understands factoring, TMS
            reconciliation, and multi-entity freight operations.
          </p>
        </div>

        <div className="mt-14 space-y-2.5">
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={s.title}
                layout
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className={cn(
                  "rounded-xl border transition-all duration-200",
                  isOpen
                    ? "bg-navy border-navy shadow-lg"
                    : "bg-white border-border hover:border-blue/30 hover:shadow-sm"
                )}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 md:px-8 py-5 text-left"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span
                      className={cn(
                        "shrink-0 rounded-md px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase",
                        isOpen ? "bg-white/10 text-white/80" : tagStyles[s.tag]
                      )}
                    >
                      {s.tag}
                    </span>
                    <span
                      className={cn(
                        "text-lg font-semibold truncate",
                        isOpen ? "text-white" : "text-navy"
                      )}
                    >
                      {s.title}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={cn("shrink-0", isOpen ? "text-white/60" : "text-muted")}
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
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                      className="overflow-hidden"
                    >
                      <ul className="px-6 md:px-8 pb-7 pt-1 space-y-2.5">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex gap-3 text-[0.9375rem] text-white/75 leading-relaxed">
                            <span className="mt-[0.55rem] inline-block size-1.5 shrink-0 rounded-full bg-sky" />
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
