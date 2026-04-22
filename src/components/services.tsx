"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "close",
    label: "Monthly close & reporting",
    bullets: [
      "Full close execution targeting Day 10 of every month",
      "P&L, Balance Sheet, and Cash Flow Statement delivered as a package",
      "Variance analysis vs. prior month with written commentary",
      "Documented close checklist — same process, every month",
      "QB reconciliation: bank, credit card, factoring, and loans",
    ],
  },
  {
    id: "compliance",
    label: "Compliance & controls",
    bullets: [
      "Chart of accounts structured for freight and multi-entity operations",
      "IFTA prep and fuel tax reconciliation",
      "Sales & use tax exposure review for brokerage entities",
      "Internal control documentation and segregation of duties mapping",
      "Audit-ready file maintenance and year-end CPA handoff package",
    ],
  },
  {
    id: "cashflow",
    label: "Cash flow & treasury",
    bullets: [
      "13-week rolling cash flow forecast, updated weekly",
      "Visibility across fuel, payroll, equipment, and factoring",
      "Factoring reserve tracking and chargeback resolution",
      "Covenant and lender reporting support",
      "Proactive cash gap alerts before they become crises",
    ],
  },
];

const secondary = [
  {
    id: "mgmt",
    label: "Management accounting",
    bullets: [
      "Per-load and per-lane revenue, cost, and margin reporting",
      "Customer and driver profitability breakdowns",
      "Accessorial revenue capture and billing accuracy review",
      "Weekly KPI dashboard: RPM, empty miles, fuel cost per mile",
      "Load-level analysis surfacing the 20% of freight losing money",
    ],
  },
  {
    id: "erp",
    label: "ERP & systems",
    bullets: [
      "QuickBooks Online and Desktop cleanup and restructure",
      "TMS integration mapping (McLeod, Turvo, Truckstop, Tailwind)",
      "Factoring portal reconciliation workflow setup",
      "Chart of accounts and class/location tracking implementation",
      "System documentation so your team can operate independently",
    ],
  },
  {
    id: "strategy",
    label: "Financial strategy",
    bullets: [
      "Annual budget and quarterly reforecast",
      "Entity structure review and consolidation reporting",
      "Equipment acquisition modelling and lease vs. buy analysis",
      "Bank and lender relationship support — covenant tracking",
      "Long-term financial roadmap tied to growth targets",
    ],
  },
];

function TabGroup({
  items,
  active,
  setActive,
}: {
  items: { id: string; label: string; bullets: string[] }[];
  active: string;
  setActive: (id: string) => void;
}) {
  const current = items.find((t) => t.id === active) ?? items[0];
  return (
    <div>
      {/* Tab bar */}
      <div className="flex flex-wrap gap-1 rounded-xl bg-tab-active/50 p-1">
        {items.map((t) => (
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
          className="mt-5 space-y-2.5"
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
  );
}

export function Services() {
  const [primaryActive, setPrimaryActive] = useState(tabs[0].id);
  const [secondaryActive, setSecondaryActive] = useState(secondary[0].id);

  return (
    <section id="services" className="w-full py-24 md:py-32 border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-fg-muted">
          What we do
        </p>
        <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl font-bold leading-tight tracking-tight text-fg">
          Full-scope controller and advisory function,{" "}
          <em className="font-medium">freight-specific.</em>
        </h2>
        <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-fg-muted">
          From monthly close and compliance through board reporting and long-term
          financial strategy — we cover the entire controller function, so your
          leadership team doesn&rsquo;t have to.
        </p>

        <div className="mt-12 space-y-8">
          <TabGroup
            items={tabs}
            active={primaryActive}
            setActive={setPrimaryActive}
          />
          <TabGroup
            items={secondary}
            active={secondaryActive}
            setActive={setSecondaryActive}
          />
        </div>
      </div>
    </section>
  );
}
