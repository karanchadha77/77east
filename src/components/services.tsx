"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "bookkeeping",
    label: "Bookkeeping & Accounting Services",
    bullets: [
      "Full close execution targeting Day 10 of every month",
      "P&L, Balance Sheet, and Cash Flow Statement delivered as a package",
      "Bank, credit card, and loan reconciliation",
      "Variance analysis vs. prior month with written commentary",
      "Documented close checklist — same process, every month",
    ],
  },
  {
    id: "reporting",
    label: "Management Reporting",
    bullets: [
      "KPI dashboards tailored to your business",
      "Segment and department profitability breakdowns",
      "Weekly operating reports",
      "Board-ready reporting packages with executive commentary",
    ],
  },
  {
    id: "compliance",
    label: "Compliance & Controls",
    bullets: [
      "Chart of accounts structuring and cleanup",
      "Documented financial processes and close procedures",
      "Audit-ready books and records",
      "Entity-level internal controls",
    ],
  },
  {
    id: "cashflow",
    label: "Cash Flow & Treasury",
    bullets: [
      "13-week rolling cash flow forecast",
      "Working capital tracking and management",
      "Payment cycle optimisation",
      "Liquidity visibility across entities",
    ],
  },
  {
    id: "strategy",
    label: "Financial Strategy & Advisory",
    bullets: [
      "Annual planning and budgeting",
      "Scenario modelling and sensitivity analysis",
      "Investment and fundraise support",
      "CFO-adjacent strategic advisory",
    ],
  },
];

export function Services() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section id="services" className="w-full py-24 md:py-32 border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-fg-muted">
          What we do
        </p>
        <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl font-bold leading-tight tracking-tight text-fg">
          A complete finance and accounting function, built around{" "}
          <em className="font-medium">your goals</em>
        </h2>
        <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-fg-muted">
          From day-to-day bookkeeping to board-level reporting, we cover the full scope of
          your finance function — so your leadership team can focus on running the business.
        </p>

        <div className="mt-12">
          {/* Tab bar */}
          <div className="flex flex-wrap gap-1 rounded-xl bg-tab-active/50 p-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
                  active === t.id
                    ? "bg-bg-card text-fg shadow-sm"
                    : "text-fg-muted hover:text-fg"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.ul
              key={current.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.22 }}
              className="mt-6 space-y-2.5"
            >
              {current.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[0.9375rem] text-fg-muted leading-relaxed">
                  <span className="mt-[0.6rem] inline-block size-1.5 shrink-0 rounded-full bg-fg/30" />
                  {b}
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
