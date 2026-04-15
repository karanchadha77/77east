"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  return (
    <section className="w-full pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.p
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
          className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted"
        >
          — Fractional Controller Services &middot; US Freight &amp; Trucking
        </motion.p>
        <motion.h1
          initial="hidden"
          animate="show"
          custom={1}
          variants={fadeUp}
          className="font-serif mt-6 max-w-3xl text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-foreground"
        >
          Your books, <em className="italic text-brand font-normal">closed clean.</em>
          <br />
          Every month.
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="show"
          custom={2}
          variants={fadeUp}
          className="mt-8 max-w-xl text-[1.0625rem] leading-relaxed text-muted"
        >
          77 East Advisory embeds as your back-office controller — handling QuickBooks
          cleanup, monthly close, and cash flow visibility for asset carriers, FTL
          brokerages, and agency operations. At a fraction of what you&rsquo;re paying today.
        </motion.p>
        <motion.div
          initial="hidden"
          animate="show"
          custom={3}
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <Button
            size="lg"
            variant="primary"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book a free scope call
          </Button>
          <button
            onClick={() =>
              document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
            }
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors"
          >
            See how it works
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
