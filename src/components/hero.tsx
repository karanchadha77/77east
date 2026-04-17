"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
});

export function Hero() {
  return (
    <section className="w-full pt-40 pb-28 md:pt-48 md:pb-36">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <motion.p
          {...up(0.05)}
          className="text-[11px] font-semibold tracking-[0.2em] uppercase text-fg-muted"
        >
          — Fractional Controller Services &middot; US Freight &amp; Trucking
        </motion.p>

        <motion.h1
          {...up(0.12)}
          className="mt-6 max-w-3xl text-[2.75rem] sm:text-5xl md:text-6xl font-bold leading-[1.04] tracking-tight text-fg"
        >
          The controller team
          <br />
          built for{" "}
          <em className="font-medium">freight operators.</em>
        </motion.h1>

        <motion.p
          {...up(0.2)}
          className="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-fg-muted"
        >
          77 East Advisory provides fractional controller services exclusively to US
          freight and trucking businesses between $5M and $75M — handling everything
          from monthly close and compliance to long-term financial strategy. Senior
          expertise, without the full-time overhead.
        </motion.p>

        <motion.div {...up(0.28)} className="mt-9 flex flex-wrap items-center gap-5">
          <Button
            size="lg"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book a scope call
          </Button>
          <button
            onClick={() =>
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
            }
            className="group inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-fg hover:text-fg-muted transition-colors"
          >
            See what we do
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
